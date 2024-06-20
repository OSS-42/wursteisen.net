<template>
    <div class="conferences-container">
		<div class="header-content">
            <img src="@/assets/icons/perso.jpeg" alt="Profile Image" class="profile-img">
            <div class="conferences-text">
                <h2>{{ localizedText.title }}</h2>
                <p v-for="(paragraph, index) in localizedText.paragraphs" :key="index">{{ paragraph }}</p>
				<div v-for="yearConf in conferences" :key="yearConf.year">
					<h3 @click="yearConf.isVisible = !yearConf.isVisible">
						<span :class="{ 'arrow': true, 'down': yearConf.isVisible }"> > </span>
						{{ yearConf.year }}
					</h3>
					<transition name="fade">
						<ul v-show="yearConf.isVisible">
							<li v-for="article in yearConf.speeches" :key="article.title">
								<a :href="article.url" target="_blank" rel="noopener noreferrer">{{ article.title }}</a>
							</li>
						</ul>
					</transition>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'Conferences',
		props: {
			currentLanguage: {
				type: String,
				default: 'en'
			}
		},
		data() {
			return {
				translations: {
					en: {
						title: "Conferences",
						paragraphs: [
							"From time to time, I also enjoy being in presentation mode, so I give talks or 'Lunch & Learn' sessions.",
							"You can find some of my presentations by clicking on the links below.",
						]
					},
					fr: {
						title: "Conférences",
						paragraphs: [
							"De temps à autres, j'aime également me retrouver en mode présentation, je fais donc des conférences ou \'Lunch & Learn\'.",
							"Vous pouvez trouver quelques unes de mes prestations en cliquant sur les liens ci-dessous.",
						]
					}
				},
				conferences: [
					{
						year: 2024,
						isVisible: false,
						speeches: [
							{ title: "Pour un développement optimisé, pensons architecture et découpage (FR), 42 Québec"},
						]
					},
					{
						year: 2023,
						isVisible: false,
						speeches: [
							{ title: "La gestion des conflits (FR), 42 Québec"},
							{ title: "Agile 101 (FR), 42 Québec"}
						]
					},
					{
						year: 2022,
						isVisible: false,
						speeches: [
							{ title: "Agile 101 (FR), 42 Québec"},
						]
					},
					{
						year: 2019,
						isVisible: false,
						speeches: [
							{ title: "L'agilité de haut vol, surveillez les bons indicateurs (FR - avec Jean-Romain Cordier), Agile Tour Québec 2019 - Main Stage",
								url: "https://www.youtube.com/watch?v=A1uy_CWTphQ&list=PLouEA8SoVXU0eC7G7YK0PYkmb8nQpikJg&index=10"}
						]
					},
					{
						year: 2018,
						isVisible: false,
						speeches: [
							{ title: "L'agilité de haut vol, surveillez les bons indicateurs (FR - avec Guy LaRochelle), Mensuelle Agile Québec",
								url: "https://www.slideshare.net/EricWursteisen/lagilit-de-haut-vol-surveillez-les-bons-indicateurs-125115947"
							}
						]
					},
				]
			};
		},
		computed: {
			localizedText() {
			return this.translations[this.currentLanguage] || this.translations.en;
			}
		}
	}
</script>

<style scoped>
	.header-content {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.profile-img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		object-fit: cover;
		margin-right: 20px;
	}

	.conferences-text {
		flex: 1;
		text-align: left;
		font-family: Urbanist;
		font-size: 15px;
	}

	.conferences-container h3 {
		cursor: pointer;
		color: white;
		font-size: 18px;
		display: flex;
		align-items: center;
	}

	.arrow {
		display: inline-block;
		transition: transform 0.3s ease;
		margin-right: 10px;
	}

	.down {
		transform: rotate(90deg);
	}

	.conferences-container ul {
		list-style-type: none;
		padding: 0;
	}

	.conferences-container li {
		margin-bottom: 5px;
		margin-left: 15px;
		text-align: left;
		font-family: Urbanist;
		font-size: 15px;
	}

	.fade-enter-active, .fade-leave-active {
		transition: opacity 0.5s;
	}
	.fade-enter, .fade-leave-to /* Initially hidden part */ {
		opacity: 0;
	}
</style>