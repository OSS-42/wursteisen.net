<template>
    <div class="conferences-container">
		<div class="header-content">
            <img src="@/assets/icons/perso.jpeg" alt="Profile Image" class="profile-img">
            <div class="conferences-text">
                <h2 class="paragraph">{{ localizedText.title }}</h2>
                <p v-for="(paragraph, index) in localizedText.paragraphs" :key="index">{{ paragraph }}</p>
				<p class="action" v-for="(action, index) in localizedText.action" :key="index">{{ action }}</p>
				<div v-for="yearConf in conferences" :key="yearConf.year">
					<h3 @click="yearConf.isVisible = !yearConf.isVisible">
						<span :class="{ 'arrow': true, 'down': yearConf.isVisible }"> > </span>
						{{ yearConf.year }}
					</h3>
					<transition name="fade">
						<ul v-show="yearConf.isVisible">
							<li v-for="conferences in yearConf.speeches" :key="conferences.title">
								<a :href="conferences.url" target="_blank" rel="noopener noreferrer">{{ conferences.title }}</a>
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
							"You can find the youtube link for Quebec's Agile Tour conference in 2019."
						],
						action: [
							"You can find the list of my presentations by year.",
						]
					},
					fr: {
						title: "Conférences",
						paragraphs: [
							"De temps à autres, j'aime également me retrouver en mode présentation, je fais donc des conférences ou \'Lunch & Learn\'.",
							"Vous pouvez trouver le lien youtube de la conférence à l'Agile Tour de Québec en 2019."
						],
						action: [
							"Vous pouvez trouver la liste de mes prestations par année.",
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

	.action {
        font-style: italic;
        font-weight: bold;
        text-align: center;
		margin-top: 20px;
        margin-bottom: 20px;
    }

	.paragraph {
        margin-top: 20px;
        margin-bottom: 20px;
    }

	@media (max-width: 600px) {
        .header-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 20px;
            margin-right: 0;
        }

        .text-content {
            width: 100%;
        }
    }
</style>