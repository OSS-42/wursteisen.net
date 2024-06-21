<template>
	<div class="work-xp-container">
	  <div class="header-content">
		<img src="@/assets/icons/perso2-expo.png" alt="Profile Image" class="profile-img">
		<div class="text-content">
		  <div class="work-text">
			<h2>{{ localizedText.title }}</h2>
			<p v-for="(paragraph, index) in localizedText.paragraphs" :key="index">{{ paragraph }}</p>
		  </div>
		  <div class="experiences">
			<div v-for="(work, index) in experiences" :key="index"
				 class="experience"
				 @click="toggleVisibility(work)">
			  <img :src="work.img" :alt="work.alt" class="experience-logo">
			  <span class="date-label">{{ work.date }}</span>
			</div>
		  </div>
		  <div v-if="visibleWork" class="work-description">
			<p v-for="desc in visibleWork.description[currentLanguage]" :key="desc">{{ desc }}</p>
		  </div>
		</div>
	  </div>
    </div>
</template>

<script>
import fujitsu from '@/assets/workXP/fujitsu.png';
import nurun from '@/assets/workXP/nurun.png';
import publicis from '@/assets/workXP/publicis.png';
import logibec from '@/assets/workXP/logibec.png';
import facilite from '@/assets/workXP/facilite.png';
import cgi from '@/assets/workXP/cgi.png';
import momentum from '@/assets/workXP/momentum.png';
import pragsix from '@/assets/workXP/pragsix.png';
import alithya from '@/assets/workXP/alithya.png';
import agileqc from '@/assets/workXP/agileqc.png';
import agiletr from '@/assets/workXP/agiletour.png';

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
                        "click on a logo to discover more about my experience."
                    ]
                },
                fr: {
                    title: "Mes expériences de travail",
                    paragraphs: [
                        "Cliquez sur un logo pour en savoir plus sur mon expérience."
                    ]
                }
            },
            experiences: [
                {
                    img: fujitsu,
                    alt: "Fujitsu North America",
					date: "2012-2014",
                    description: {
                        en: [
							"FUJITSU NORTH AMERICA",
							"It was at this time that I realized I was not a traditional project manager by discovering agility.",
							"After a project in a public organization, I took the reins of a division of the Near Shore Delivery Center (NSDC).",
							"During this period as 'Factory Manager,' I let the team find their own solutions to application compatibility issues, while I primarily handled budget and scheduling aspects.",
							"The team succeeded in being recognized for its success due to its technical efficiency and ability to secure multiple contracts in succession."
						],
                        fr: [
							"FUJITSU NORTH AMERICA",
							"C'est à ce moment que j'ai réalisé que je n'étais pas un chargé de projet traditionnel en découvrant l'agilité.",
							"Après un projet dans une organisation publique, j'ai pris les rênes d'une division du Centre de Livraison Near Shore (NSDC).",
							"Pendant cette période à titre de \"Responsable de l'Usine\", je laissais l'équipe trouver les solutions de leur propre chef, alors que je m'occupais principalement des aspects de budget et de calendrier.",
							"L'Équipe réussie à être reconnue pour ses succès grâce à son efficience technique et son habilité à obtenir plusieurs contrats à la suite.",
						]
                    },
                    isVisible: false
                },
				{
                    img: nurun, publicis,
                    alt: "Nurun Service Conseil/Groupe Publicis",
					date: "2014-2016",
                    description: {
                        en: [
							"NURUN SERVICES CONSEILS/PUBLICIS GROUP",
							"With the dual roles of project manager and Scrum Master, I had to guide teams on several private and public projects.",
							"The challenges I faced included having 'agile' teams while the organization's reporting was not.",
							"I also had to turn around projects that were financially struggling, which I successfully accomplished.",
							"What I am most proud of during this period was having the chance to establish a core team and an environment where team members could grow and support each other.",
							"A sense of self-organization existed. And we had a lot of fun while being effective.",
							"Customer feedback was excellent with this team."
						],
                        fr: [
							"NURUN SERVICES CONSEILS/PUBLICIS GROUP",
							"Avec les 2 rôles, gestionnaire de projet et Scrum Master, je devais guider des équipes sur plusieurs projets au privé et au public",
							"Les défis auxquels je faisais face étaient d'avoir des équipes \"agiles\" alors que la reddition de compte de l'organisation ne l'était pas.",
							"Je devais également redresser des projets ayant des difficultés financières, ce que j'ai accompli avec succès.",
							"Ce dont je suis le plus fier pendant cette période, est d'avoir eu la chance de constituer une d'équipe et un environnement dans lequel les membres de celle-ci pouvaient grandir et s'entraider.",
							"Un sentiment d'auto-organisation existait. Et nous avions énormément de fun tout en étant efficaces.",
							"Les retours des clients ont été excellents avec cette équipe."
						]
                    },
                    isVisible: false
                },
                {
                    img: logibec,
                    alt: "Logibec",
					date: "2016-2017",
                    description: {
                        en: [
							"LOGIBEC",
							"I joined Logibec as a permanent employee to change from my past experiences as a consultant.",
							"Initially as a Scrum Master for a single development team, I quickly succeeded in introducing Kanban and Scrum concepts to the entire Quebec office.",
							"All individuals, from development to customer service, experienced changes.",
							"I also took part in an organizational transformation at Logibec, as a 'Change Agent' to help the company achieve one of its goals, to become a 'TEAL' organization."
						],
                        fr: [
							"LOGIBEC",
							"J'ai rejoint Logibec comme un employé permanent pour changer de mes expériences passées à titre de consultant.",
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
					date: "2016-2018",
                    description: {
                        en: [
							"AGILE QUEBEC/AGILE TOUR",
							"In 2016 I joined the board of directors of Agile Quebec.",
							"It was a great opportunity for me to immerse myself in the Agile community of Quebec and the province.",
							"This also allowed me to create relationships with international speakers.",
							"As a board member, I was in charge of partnership portfolios, both for the organization's annual plan and for the highly anticipated Agile Tour event.",
							"This event attracts nearly 1000 participants each year.",
							"It consists of a day of several conferences, during which speakers present new concepts, share their experiences and knowledge with their peers and newcomers.",
							"You can learn more by visiting www.agilequebec.ca."
						],
                        fr: [
							"AGILE QUEBEC/AGILE TOUR",
							"En 2016 j'ai rejoint le conseil d'administration d'Agile Québec.",
							"Il s'agissait pour moi d'une belle opportunité pour m'immerger dans la communauté Agile de Québec et de la Province.",
							"Cela m'a également permis de créer des relations avec des conférenciers internationaux.",
							"Comme membre du conseil, j'étais en charge des dossiers de partenariats, autant pour le plan annuel de l'organisation que pour l'évènement très attendu de l'Agile Tour.",
							"Ce dernier attire près de 1000 participants à chaque année.",
							"Il consiste en une journée de plusieurs conférences, durant lesquelles les conférenciers présentent de nouveaux concepts, partagent leurs expériences et connaissances à leur pairs et nouveaux venus.",
							"Vous pouvez en savoir plus en allant sur www.agilequebec.ca.",
						]
                    },
                    isVisible: false
                },
				{
                    img: facilite, cgi,
                    alt: "Facilité Informatique/CGI",
					date: "2017-2019",
                    description: {
                        en: [
							"FACILITE INFORMATIQUE/CGI",
							"I then joined the best entity in Quebec regarding agility, before its acquisition by CGI.",
							"I coached several teams, using either Scrum or Kanban, depending on the business units I interacted with.",
							"All teams were able to reduce their time to deliver new features.",
							"With actions focused on collaboration, some teams managed to come closer together, especially the one consisting of business people located in Mississauga, ON.",
							"The main success was the introduction of Upstream Kanban concepts which had a major impact for this team."
						],
                        fr: [
							"FACILITE INFORMATIQUE/CGI",
							"J'ai ensuite rejoint la place forte à Québec en agilité, avant son rachat par CGI.",
							"J'ai coaché plusieurs équipes, qui utilisaient Scrum ou Kanban, dépendamment des unités d'affaires avec lesquelles j'interagissais.",
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
					date: "2019-2020",
                    description: {
                        en: [
							"MOMENTUM TECHNOLOGIES",
							"I decided to take on the challenge of helping to set up and make functional the remote development center at Momentum.",
							"The objective is to help organizations thrive in the context of a labor shortage in the IT industry.",
							"Some clients have experienced the ability of this delivery center to support them in developing their products, thanks to our team based in Tunis.",
							"I also continued as an agile coach and helped the organization develop its own agility."
						],
                        fr: [
							"MOMENTUM TECHNOLOGIES",
							"J'ai décidé de relever le défi d'aider à mettre en place et rendre fonctionnel le centre de développement à distance de Momentum.",
							"L'objectif est d'aider les organisations à prospérer dans le contexte de pénurie de main-d'œuvre dans l'industrie informatique.",
							"Certains clients ont vécu l'expérience de la capacité de ce centre de livraison à les accompagner dans le développement de leurs produits, grâce à l'équipe basée à Tunis.",
							"J'ai également poursuivi comme coach agile et aidé l'organisation à développer sa propre agilité."
						]
                    },
                    isVisible: false
                },
				{
                    img: pragsix,
                    alt: "Pragsix Inc.",
					date: "2020-2023",
                    description: {
                        en: [
							"PRAGSIX INC",
							"Through various mandates, I continued my coaching journey.",
							"I recruited, coached, and mentored individuals in their progression to become Scrum Masters.",
							"I also mentored Executives to ensure that the vision, mission, and strategic objectives were aligned and engaging for the rest of the organization.",
							"I provided certified training for the Project Management Institute (pmi.org) after obtaining the DASSM and DAC certifications myself.",
							"The highlight of this very enriching experience was working with the executive team of Micrologic, to help them take a step in their growth."
						],
                        fr: [
							"PRAGSIX INC",
							"À travers différents mandats j'ai continué mon aventure de coaching.",
							"J'ai recruté, coaché et mentoré des personnes dans leur progression pour devenir Scrum Master.",
							"J'ai également mentoré des Exécutifs pour s'assurer que la vision, mission et objectifs stratégiques soient alignés et engageant pour le reste de leur organisation.",
							"J'ai donné des formations certifiantes pour le Project Management Institute (pmi.org) après avoir moi-même obtenu les certifications DASSM et DAC.",
							"Le point d'orgue de cette expérience fort enrichissante est d'avoir travaillé auprès de l'équipe exécutive de Micrologic, pour les aider à franchir une nouvelle étape dans leur croissance."
						]
                    },
                    isVisible: false
                },
				{
                    img: alithya,
                    alt: "Alithya",
					date: "2023-...",
                    description: {
                        en: [
							"ALITHYA",
							"Back to the public sector by working for a ministry of the government of Quebec.",
							"The main goal of this intervention is to help certain teams improve their agile practices.",
							"I then joined the Origin-A team to support private clients in implementing training waves and setting up agile practices."
						],
                        fr: [
							"ALITHYA",
							"Retour au public en travaillant pour un ministère du gouvernement du Québec.",
							"L'objectif principal de cette intervention est d'aider certaines équipes à monter en compétences quant à leurs pratiques agile.",
							"J'ai ensuite rejoint l'équipe Origin-A pour supporter des clients du privés pour l'implantation de vague de formations et de mise en place de pratiques agiles.",
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
  width: 100%;
}

.work-text, .experiences, .work-description {
  text-align: left;
  font-family: Urbanist;
  font-size: 15px;
  margin-top: 10px;
}

.experiences {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.experience {
  margin: 10px;
  text-align: center;
}

.experience-logo {
  max-width: 300px;
  max-height: 40px;
  height: auto;
}

.date-label {
  display: block;
  color: white;
  font-size: 12px;
  margin-top: 5px;
}

.work-description {
  margin-top: 20px;
  padding: 10px;
  width: 100%;
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
