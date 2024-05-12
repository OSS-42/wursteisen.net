<template>
    <div class="work-xp-container">
        <div class="header-content">
            <img src="@/assets/perso2.png" alt="Profile Image" class="profile-img">
            <div class="text-content">
                <div class="work-text">
                    <h2>{{ localizedText.title }}</h2>
                    <p v-for="(paragraph, index) in localizedText.paragraphs" :key="index">{{ paragraph }}</p>
                </div>
                <div class="work">
                    <h2>{{ localizedText.title2 }}</h2>
                    <div class="work-logos">
                        <div class="work-entry" v-for="(work, index) in experiences" :key="index">
                            <img :src="work.img" :alt="work.alt" class="work-img" @click="toggleVisibility(work)">
                        </div>
                    </div>
                    <p v-if="visibleWork" class="work-description">{{ visibleWork.description[currentLanguage] }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import fujitsu from '@/assets/fujitsu.png';
import nurun from '@/assets/nurun.png';
import publicis from '@/assets/publicis.png';
import logibec from '@/assets/logibec.png';
import facilite from '@/assets/facilite.png';
import cgi from '@/assets/cgi.png';
import momentum from '@/assets/momentum.png';
import pragsix from '@/assets/pragsix.png';
import alithya from '@/assets/alithya.png';
import agileqc from '@/assets/agileqc.png';
import agiletr from '@/assets/agiletour.png';

export default {
    name: 'WorkXP',
    props: {
        currentLanguage: {
            type: String,
            default: 'en'
        }
    },
    data() {
        return {
			visibleWork: null,
            translations: {
                en: {
                    title: "My work experiences",
                    paragraphs: [
                        "Stay tuned!"
                    ],
					line: "Click on a logo to discover a bit more about my work experiences!"
                },
                fr: {
                    title: "Mes expériences de travail",
                    paragraphs: [
                        "Restez à l'écoute !"
                    ],
					line: "Cliquez sur un logo pour y découvrir un peu plus sur mes expériences de travail !"
                }
            },
            experiences: [
                {
                    img: fujitsu,
                    alt: "Fujitsu North America",
                    description: {
                        en: "2012-2014 - Common Core completion. Learnings in C, C++ and typescript",
                        fr: [
							"2012-2014 - C'est à ce moment que j'ai découvert que je n'étais pas un chargé de projet tradionnel.",
							"Mais je n'étais pas plus un Scrum Master puisque je venais tout juste de découvrir l'agilité.",
							"J'étais en transition, au milieu. Après un projet dans une organisation publique, j'ai pris les rênes d'une division du Centre de Livraison Near Shore (NSDC).",
							"Pendant cette période à titre de \"Responsable de l'Usine\", je laissais l'équipe trouver les solutions de leur propre chef en regard des problématiques de compatibilité des applications, alors que je m'occupais principalement des aspects de budget et de calendrier.",
							"L'Équipe réussie à être reconnue pour ses succès grâce à son efficience et son habilité à obtenir plusieurs contrats à la suite.",
						]
                    },
                    isVisible: false
                },
				{
                    img: nurun, publicis,
                    alt: "Nurun Service Conseil/Groupe Publicis",
                    description: {
                        en: "2014-2016 - Agile certifications in the context of Disciplined Agile: DAVSC, DAC, DASSM",
                        fr: [
							"2014-2016 - Avec les 2 rôles, gestionnaire de projet et Scrum Master, je devais guider des équipes sur plusieurs projets.",
							"Les clients étaient soit des organisations privées soit publiques.",
							"Les défis auxquels je faisais face étaient d'avoir des équipes \"agiles\" alors que la reddition de compte de l'organisation ne l'était pas.",
							"Je devais également redresser des projets ayant des difficultés financières, ce que j'ai accompli avec succès.",
							"Ce dont je suis le plus fier pendant cette période, est d'avoir eu la chance de constituer un noyau d'équipe et un environnement dans lequel ces équipiers pouvaient grandir et s'entraider.",
							"Un sentiment d'auto-organisation existait. Et nous avions énormément de fun tout en étant efficaces.",
							"Les retours des clients ont été excellents avec cette équipe."
						]
                    },
                    isVisible: false
                },
                {
                    img: logibec,
                    alt: "Logibec",
                    description: {
                        en: "2016-2017 - Master in Business Administration, Internationl Management of Companies",
                        fr: [
							"2016-2017 - J'ai rejoint Logibec comme un employé permanent pour changer de mes expériences passées à titre de consultant.",
							"D'abord en tant que Scrum Master pour une seule équipe de développement, j'ai rapidement réussi à introduire des concepts Kanban et Scrum à l'ensemble du bureau de Québec.",
							"Toutes les personnes, autant au développement qu'au service à la clientèle ont expérimenté des changements.",
							"Je prenais également part à une transformation organisationnelle à Logibec, comme \"Agent de Changement\" pour aider cette compagnie à atteindre un de ses objectifs, celui de devenir une organisation \"TEAL\"."
						]
                    },
                    isVisible: false
                },
                {
                    img: agileqc, agiletr,
                    alt: "Agile Québec",
                    description: {
                        en: ["2016-2018 - Master in Innovation Management, biotechnology and bioinformatics",],
                        fr: [
							"2016-2018 - En 2016 j'ai rejoint le conseil d'administration d'Agile Québec.",
							"Il s'agissait pour moi d'une belle opportunité pour m'immerger dans la communauté Agile de Québec et de la Province.",
							"Cela m'a également permis de créer des relations avec des conférenciers internationaux.",
							"Comme membre du conseil, j'étais en charge des dossiers de partenariats, autant pour le plan annuel de l'organisation que pour l'évènement très attendu de l'Agile Tour.",
							"Cet évènement annuel attire près de 1000 participants à chaque année.",
							"Il consiste en une journée de plusieurs conférences, durant lesquelles les conférenciers présentent de nouveaux concepts, partagent leurs expériences et connaissances à leur pairs et nouveaux venus.",
							"Vous pouvez en savoir plus en allant sur www.agilequebec.ca.",
						]
                    },
                    isVisible: false
                },
				{
                    img: facilite, cgi,
                    alt: "Facilité Informatique/CGI",
                    description: {
                        en: "2017-2019 - Master in Innovation Management, biotechnology and bioinformatics",
                        fr: [
							"2017-2019 - Je coache plusieurs équipes, qui utilisent ou Scrum ou Kanban, dépendamment des unités d'affaires avec lesquelles j'interagis.",
							"Toutes les équipes ont été en mesure de réduire leur temps de livraison de nouvelles fonctionnalités.",
							"A l'aide d'actions focalisées sur la collaboration, certaines équipes ont réussi à se rapprocher, notamment celle constituée de gens d'affaires délocalisée à Mississauga, ON.",
							"Le succès principal a été l'introduction de concepts d'Upstream Kanban qui ont eu un impact majeur pour cette équipe."
						]
                    },
                    isVisible: false
                },
				{
                    img: momentum,
                    alt: "Momentum Technologies",
                    description: {
                        en: "2019-2020 - Master in Innovation Management, biotechnology and bioinformatics",
                        fr: [
							"2019-2020 - J'ai décidé de relever le défi d'aider à mettre en place et rendre fonctionnel le centre de développement à distance de Momentum.",
							"Notre objectif est d'aider les organisations à prospérer dans le contexte de pénurie de main-d'œuvre dans l'industrie informatique.",
							"Certains clients font déjà l'expérience de notre capacité à les accompagner dans le développement de leurs produits, grâce à notre équipe basée à Tunis.",
							"Je continue également mon rôle de coach agile et aide mon organisation à développer sa propre agilité."
						]
                    },
                    isVisible: false
                },
				{
                    img: pragsix,
                    alt: "Pragsix Inc.",
                    description: {
                        en: "2020-2023 - Master in Innovation Management, biotechnology and bioinformatics",
                        fr: [
							"2020-2023 - À travers différents mandats j'ai continué mon aventure de coaching.",
							"J'ai recruté, coaché et mentoré des personnes dans leur progression pour devenir Scrum Master.",
							"J'ai également coaché et mentoré des Exécutifs pour s'assurer que la vision, mission et objectifs stratégiques sont alignés et très engageant pour le reste de l'organisation.",
							"J'ai également donné des formations certifiantes pour les certifications du Project Management Institute (pmi.org) après avoir moi-même obtenu les certifications DASSM et DAC.",
							"Le point d'orgue de cette expérience fort enrichissante est d'avoir travaillé auprès de l'équipe exécutive de Micrologic, pour les aider à franchir une étape dans leur croissance."
						]
                    },
                    isVisible: false
                },
				{
                    img: alithya,
                    alt: "Alithya",
                    description: {
                        en: "2023-today - Master in Innovation Management, biotechnology and bioinformatics",
                        fr: [
							"2023-aujourd'hui - Retour au public en travaillant pour un ministère du gouvernement du Québec.",
							"L'objectif principal de cette intervention est d'aider certaines équipes à monter en compétences quant à leurs pratiques agile.",
							"J'ai ensuite rejoins l'équipe Origin-A pour supporter des clients du privés pour l'implantation de vague de formations.",
						]
                    },
                    isVisible: false
                }
            ]
        };
    },
	methods: {
        toggleVisibility(work) {
            this.visibleWork = (this.visibleWork === work) ? null : work;
        }
    },
    computed: {
        localizedText() {
            return this.translations[this.currentLanguage] || this.translations.en;
        }
    }
}
</script>

<style scoped>
.work-xp-container {
    display: flex;
    flex-direction: column;
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

.text-content {
    display: flex;
    flex-direction: column;
}

.work-text, .work {
    flex: 1;
    text-align: left;
    font-family: Urbanist;
    font-size: 15px;
}

.work-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
}

.work-entry {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.work-img {
    width: auto; /* Adjusted for better sizing */
    height: 50px; /* Keeps aspect ratio */
}

.work-description {
    text-align: left;
    margin-top: 10px; /* Space after logos */
}
</style>
