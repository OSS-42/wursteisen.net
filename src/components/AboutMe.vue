<template>
	<div class="about-me-container">
	  <img src="@/assets/perso.jpeg" alt="Profile Image" class="profile-img">
	  <div class="about-me-text">
		<h2>{{ localizedText.title }}</h2>
		<p v-for="(paragraph, index) in localizedText.paragraphs" :key="index">{{ paragraph }}</p>
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
	},
	watch: {
		currentLanguage(newValue, oldValue) {
		console.log('currentLanguage changed from', oldValue, 'to', newValue);
		}
	}
	}
</script>

  
  <style scoped>
  .about-me-container {
	display: flex;
	align-items: center;
	padding: 20px;
  }
  
  .profile-img {
	width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 20px;
  }
  
  .about-me-text {
	flex: 1;
	text-align: left;
	font-family: Urbanist;
	font-size: 15px;
  }
  </style>
  