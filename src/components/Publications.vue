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
                        <a :href="article.url" target="_blank" rel="noopener noreferrer">{{ article.title }}</a>
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
							{ title: "Série de publications sur le livre 'Infinite Game' de Simon Sinek (FR)",
							  url: "https://www.linkedin.com/posts/ericwursteisen_infinitegame-culture-agile-activity-6950437144595247104-Ipn4?utm_source=share&utm_medium=member_desktop"},
							{ title: "Devrait-on arrêter de parler d'agilité ? (FR)",
							  url: "https://www.agilequebec.ca/fr/devrait-arreter-de-parler-dagilite/"}
						]
					},
					{
						year: 2019,
						isVisible: false,
						articles: [
							{ title: "Agiles Coaches - Where does your alligiance Lie ? (EN)",
							  url: "https://dzone.com/articles/agile-coachs-where-does-your-allegiance-lie"},
							{ title: "Story Splitting in Agile: Practice Makes Perfect? (EN)",
								url:"https://dzone.com/articles/practicing-story-splitting-in-agile"},
							{ title: "Le découpage par la pratique (FR)",
								url: "https://www.linkedin.com/pulse/le-d%C3%A9coupage-par-la-pratique-eric-wursteisen/"},
							{ title: "Marie Kondo et charge mentale (FR)",
								url: "https://www.linkedin.com/pulse/marie-kondo-et-charge-mentale-eric-wursteisen/"},
							{ title: "Agility is doomed, but we can still save IT ! (EN)",
								url: "https://medium.com/@eric.wursteisen/agility-is-doomed-but-we-can-still-save-it-67e892845af1"},
							{ title: "Multi-compétences et innovation (FR)",
								url: "https://www.linkedin.com/pulse/multi-comp%C3%A9tences-et-innovation-eric-wursteisen/"}
						]
					},
					{
						year: 2018,
						isVisible: false,
						articles: [
							{ title: "De Scrum Master à Coach Agile (FR)",
								url: "https://www.linkedin.com/pulse/de-scrum-master-%C3%A0-coach-agile-eric-wursteisen/"},
							{ title: "Le changement c'est difficile ! (FR & EN)",
								url: "https://excellenceagile.com/2018/10/30/le-changement-cest-difficile/"},
							{ title: "Devrait-on créer le Chief Agile Officer ? (FR)",
								url: "https://excellenceagile.com/2018/08/21/devrait-on-creer-le-chief-agile-officer/"},
							{ title: "Peut-on faire de l'agilité en R&D (FR)",
								url: "https://excellenceagile.com/2018/08/14/peut-on-faire-de-lagilite-en-recherche-et-developpement/"},
							{ title: "Continuons d'évoluer, révisions notre utilisation des points d'efforts ! (FR)",
								url: "https://excellenceagile.com/2018/03/27/de-lhypocrisie-des-points-de-recits-utilisateurs/"},
							{ title: "Les rencontres SCRUM sont superflues ! Parlons-en (FR)",
								url: "https://www.linkedin.com/pulse/les-rencontres-scrum-sont-superflues-parlons-en-wursteisen-mba-psm/"}
						]
					},
					{
						year: 2017,
						isVisible: false,
						articles: [
							{ title: "Ma petite histoire avec Agile Québec (FR)",
								url: "https://www.agilequebec.ca/fr/pourquoi-agile-quebec/"},
							{ title: "Pourquoi je suis désormais partisan du 1-1-1 (FR)",
								url: "https://www.linkedin.com/pulse/pourquoi-je-suis-d%C3%A9sormais-un-partisan-du-1-1-1-wursteisen-mba-psm/"},
							{ title: "Soyons honnêtes, parlons Scrum ! (FR)",
								url: "https://www.linkedin.com/pulse/soyons-honn%C3%AAtes-et-parlons-scrum-eric-wursteisen-mba-psm/"},
							{ title: "L'agilité est encore plus vieille que vous ne le pensez ! (FR)",
								url: "https://www.linkedin.com/pulse/lagilit%C3%A9-est-encore-plus-vieille-que-vous-ne-le-wursteisen-mba-psm/"},
							{ title: "Trouvez l'erreur ! (FR)",
								url: "https://www.linkedin.com/pulse/trouvez-lerreur-eric-wursteisen-mba-psm/"},
							{ title: "Scrum Master ou Coach Agile ? (FR)",
								url: "https://www.linkedin.com/pulse/scrum-master-ou-coach-agile-eric-wursteisen-mba-psm/"},
							{ title: "From Project Manager to Scrum Master (EN)",
								url: "https://medium.com/@eric.wursteisen/from-project-manager-to-scrum-master-4519c8c82638"}
						]
					},
					{
						year: 2016,
						isVisible: false,
						articles: [
							{ title: "De chargé de Projet à Scrum Master (FR)",
								url: "https://www.linkedin.com/pulse/de-charg%C3%A9-projets-%C3%A0-scrum-master-eric-wursteisen-mba-psm/"},
							{ title: "Agilité et Idéation (FR)",
								url: "https://www.linkedin.com/pulse/vous-faites-des-concours-pour-vos-id%C3%A9es-ou-start-up-eric/"},
							{ title: "L'agilité pour un entrepreneur (FR)",
								url: "https://www.linkedin.com/pulse/lagilit%C3%A9-pour-un-entrepreneur-eric-wursteisen-mba-psm/"}
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