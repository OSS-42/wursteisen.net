<template>
	<div class="publications-container">
	  <img src="@/assets/perso.jpeg" alt="Profile Image" class="profile-img">
	  <div class="publications-text">
		<h2>{{ localizedText.title }}</h2>
		<p v-for="(paragraph, index) in localizedText.paragraphs" :key="index">{{ paragraph }}</p>
	  </div>
	</div>
</template>

<script>
	export default {
		name: 'Publications',
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
				title: "Publications",
				paragraphs: [
					"It is always a pleasure to find ideas to write about, especially when it allows me to share pertinent experiences, questionnings or accomplishments.",
					" I am mostly writing in french (and starting to write in english too).",
					" You can find some of my articles by visiting the following links."
				]
				},
				fr: {
				title: "Publications",
				paragraphs: [
					"C'est toujours un plaisir de trouver des idées sur lesquelles écrire, surtout quand cela me permet de partager des expériences pertinentes, des questionnements ou des réalisations.",
					"J'écris principalement en français (et je commence aussi à écrire en anglais).",
					"Vous pouvez trouver certains de mes articles en visitant les liens suivants."

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
  .publications-container {
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
  
  .publications-text {
	flex: 1;
	text-align: left;
	font-family: Urbanist;
	font-size: 15px;
  }
</style>
  