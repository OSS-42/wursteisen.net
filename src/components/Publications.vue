<template>
    <div class="publications-container">
		<div class="publications-text">
		<h2>{{ localizedText.title }}</h2>
			<p v-for="(paragraph, index) in localizedText.paragraphs" :key="index">{{ paragraph }}</p>
		</div>
        <div v-for="yearPub in publications" :key="yearPub.year">
            <h3 @click="yearPub.isVisible = !yearPub.isVisible">
                <span :class="{ 'arrow': true, 'down': yearPub.isVisible }"> > </span>
                {{ yearPub.year }}
            </h3>
            <transition name="fade">
                <ul v-show="yearPub.isVisible">
                    <li v-for="article in yearPub.articles" :key="article.title">
                        {{ article.title }}
                    </li>
                </ul>
            </transition>
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
							"I am mostly writing in french (and starting to write in english too).",
							"You can find some of my articles by visiting the following links.",
						]
					},
					fr: {
						title: "Publications",
						paragraphs: [
							"C'est toujours un plaisir de trouver des idées sur lesquelles écrire, notamment lorsque cela me permet de partager des expériences pertinentes, des questionnements ou encore des accomplissements.",
							"J'écris principalement en français (mais j'écris de plus en plus en anglais également).",
							"Vous pouvez trouver quelques un des mes billets en cliquant sur les liens ci-dessous.",
						]
					}
				},
				publications: [
					{
						year: 2022,
						isVisible: false,
						articles: [
							{ title: "Série de publications sur le livre 'Infinite Game' de Simon Sinek (FR)" }
						]
					},
					{
						year: 2019,
						isVisible: false,
						articles: [
							{ title: "Agiles Coaches - Where does your alligiance Lie ? (EN)"},
							{ title: "Story Splitting in Agile: Practice Makes Perfect? (EN)"},
							{ title: "Le découpage par la pratique (FR)"},
							{ title: "Marie Kondo et charge mentale (FR)"},
							{ title: "Agility is doomed, but we can still save IT ! (EN)"},
							{ title: "Multi-compétences et innovation (FR)"}
						]
					},
					{
						year: 2018,
						isVisible: false,
						articles: [
							{ title: "De Scrum Master à Coach Agile (FR)"},
							{ title: "Le changement c'est difficile ! (FR & EN)"},
							{ title: "Devrait-on créer le Chief Agile Officer ? (FR)"},
							{ title: "Peut-on faire de l'agilité en R&D (FR)"},
							{ title: "Continuons d'évoluer, révisions notre utilisation des points d'efforts ! (FR)"},
							{ title: "Les rencontres SCRUM sont superflues ! Parlons-en (FR)"}
						]
					},
					{
						year: 2017,
						isVisible: false,
						articles: [
							{ title: "Ma petite histoire avec Agile Québec (FR)"},
							{ title: "Pourquoi je suis désormais partisan du 1-1-1 (FR)"},
							{ title: "Soyons honnêtes, parlons Scrum ! (FR)"},
							{ title: "L'agilité est encore plus vieille que vous ne le pensez ! (FR)"},
							{ title: "Trouvez l'erreur ! (FR)"},
							{ title: "Scrum Master ou Coach Agile ? (FR)"},
							{ title: "From Project Manager to Scrum Master (EN)"}
						]
					},
					{
						year: 2016,
						isVisible: false,
						articles: [
							{ title: "De chargé de Projet à Scrum Master (FR)"},
							{ title: "Agilité et Idéation (FR)"},
							{ title: "L'agilité pour un entrepreneur (FR)"}
						]
					}
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
.publications-text {
	flex: 1;
	text-align: left;
	font-family: Urbanist;
	font-size: 15px;
  }

  .publications-container h3 {
    cursor: pointer;
    color: white;
	font-size: 18px;
    display: flex;
    align-items: center;
}

.arrow {
    display: inline-block;
    transition: transform 0.3s ease;
}

.down {
    transform: rotate(90deg);
}

.publications-container ul {
    list-style-type: none;
    padding: 0;
}

.publications-container li {
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