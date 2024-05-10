<template>
	<div class="about-me-container">
		<div class="header-content">
			<img src="@/assets/perso2.png" alt="Profile Image" class="profile-img">
			<div class="text-content">
				<div class="about-me-text">
					<h2>{{ localizedText.title }}</h2>
					<p v-for="(paragraph, index) in localizedText.paragraphs" :key="index">{{ paragraph }}</p>
				</div>
				<div class="education">
					<h2>{{ localizedText.title2 }}</h2>
					<div class="education-logos">
						<img src="@/assets/42.png" alt="42 Quebec" class="educ-img">
						<img src="@/assets/esiee.png" alt="ESIEE Management" class="educ-img">
						<img src="@/assets/ul.png" alt="Universite Laval" class="educ-img">
						<img src="@/assets/pmi.png" alt="PMI" class="educ-img">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
  
<script>
	export default {
		name: 'AboutMe',
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
				title: "About Eric Wursteisen",
				title2: "Education",
				paragraphs: [
					"Before 2012, I used to help entrepreneurs establishing their business models...",
					"When I started as an IT Project Manager it was obvious to me that I wasn't of the traditional kind...",
					"Fast forward 7 years, and here I am, an Agile Coach...",
					"However, at this stage of my career, I am also ready to share my knowledge...",
					"Stay tuned!"
				]
				},
				fr: {
				title: "À propos de Eric Wursteisen",
				title2: "Éducation",
				paragraphs: [
					"Avant 2012, j'aidais les entrepreneurs à établir leurs modèles d'affaires...",
					"Lorsque j'ai commencé en tant que chef de projet informatique, il était évident pour moi que je n'étais pas du genre traditionnel...",
					"Avance rapide de 7 ans, et me voici, coach Agile...",
					"Cependant, à ce stade de ma carrière, je suis également prêt à partager mes connaissances...",
					"Restez à l'écoute !"
				]
				}
			}
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
	.education {
		flex: 1;
		text-align: left;
		font-family: Urbanist;
		font-size: 15px;
		margin-top: 20px;
	}

	.education-logos {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 10px;
	}

	.about-me-container {
		display: flex;
		align-items: center;
		padding: 20px;
	}

	.header-content {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.profile-img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		object-fit: cover;
		margin-right: 20px;
	}

	.educ-img {
		height: 50px;
		margin-right: 20px; /* Space between logos */
		margin-bottom: 10px; /* Space between logos if they wrap */
	}

	.about-me-text {
		flex: 1;
		text-align: left;
		font-family: Urbanist;
		font-size: 15px;
	}
</style>

  