<template>
    <div class="about-me-container">
        <div class="header-content">
            <img src="@/assets/icons/perso2-expo.png" alt="Profile Image" class="profile-img">
            <div class="text-content">
                <div class="about-me-text">
                    <h2 class="paragraph">{{ localizedText.title }}</h2>
                    <p v-for="(paragraph, index) in localizedText.paragraphs" :key="index">{{ paragraph }}</p>
                    <p class="action" v-for="(action, index) in localizedText.action" :key="index">{{ action }}</p>
                </div>
                <div class="education">
                    <h2>{{ localizedText.title2 }}</h2>
                    <div class="education-logos">
                        <div class="education-entry" v-for="(edu, index) in educations" :key="index">
                            <img :src="edu.img" :alt="edu.alt" class="educ-img" @click="toggleVisibility(edu)">
                        </div>
                    </div>
                    <p v-if="visibleEducation" class="education-description">{{ visibleEducation.description[currentLanguage] }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import image42 from '@/assets/education/42.png';
import imageEsiee from '@/assets/education/esiee.png';
import imageUl from '@/assets/education/ul.png';
import imagePmi from '@/assets/education/pmi.png';

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
			visibleEducation: null,
            translations: {
                en: {
                    title: "About Eric Wursteisen",
                    title2: "Education",
                    paragraphs: [
                        "Before 2012, I used to help entrepreneurs establishing their business models...",
                        "When I started as an IT Project Manager it was obvious to me that I wasn't of the traditional kind...",
                        "Fast forward 7 years, and here I am, an Agile Coach...",
                        "However, at this stage of my career, I am also ready to share my knowledge...",
                    ],
                    action: [
                        "Click on a logo to discover more about an cursus."
                    ]
                },
                fr: {
                    title: "À propos d'Eric Wursteisen",
                    title2: "Éducation",
                    paragraphs: [
                        "Avant 2012, j'aidais les entrepreneurs à établir leurs modèles d'affaires...",
                        "Lorsque j'ai commencé en tant que chef de projet informatique, il était évident pour moi que je n'étais pas du genre traditionnel...",
                        "Avance rapide de 7 ans, et me voici, coach Agile...",
                        "Cependant, à ce stade de ma carrière, je suis également prêt à partager mes connaissances...",
                    ],
                    action: [
                        "Cliquez sur un logo pour en savoir plus à propos d'un cursus."
                    ]
                }
            },
            educations: [
                {
                    img: image42,
                    alt: "42 Quebec",
                    description: {
                        en: "2024 - Common Core completion. Learnings in C, C++ and typescript",
                        fr: "2024 - Fin du tronc commun. Apprentissage en C, C++ et typescript notamment."
                    },
                    isVisible: false
                },
				{
                    img: imagePmi,
                    alt: "PMI",
                    description: {
                        en: "2022-2024 - Agile certifications in the context of Disciplined Agile: DAVSC, DAC, DASSM",
                        fr: "2022-2024 - Certifications agiles avec le contexte Disciplined Agile : DAVSC, DAC, DASSM"
                    },
                    isVisible: false
                },
                {
                    img: imageUl,
                    alt: "Universite Laval",
                    description: {
                        en: "2008 - Master in Business Administration, Internationl Management of Companies",
                        fr: "2008 - Maîtrise en Administration des Affaires, Gestion Internationale des Entreprises"
                    },
                    isVisible: false
                },
                {
                    img: imageEsiee,
                    alt: "ESIEE Management",
                    description: {
                        en: "2006 - Master in Innovation Management, biotechnology and bioinformatics",
                        fr: "2006 - Grade de Maîtrise en Management de l'Innovation, biotechnologies et biofinformatique."
                    },
                    isVisible: false
                }
            ]
        };
    },
	methods: {
        toggleVisibility(education) {
            this.visibleEducation = (this.visibleEducation === education) ? null : education;
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
	.education-logos {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center; /* Centers items horizontally */
    }

    .education-entry {
        margin-right: 30px; /* Spacing between logos */
        margin-top: 20px;
        cursor: pointer;
    }

    .educ-img {
        width: 120px;
        height: auto;
    }

    .education {
        margin-top: 10px;
        font-family: Urbanist;
        font-size: 15px;
    }

    .education-description {
        width: 100%; /* Full width of the container */
        text-align: center;
        margin-top: 10px;
        font-size: 15px;
    }

	.about-me-container {
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

	.about-me-text {
		flex: 1;
		text-align: left;
		font-family: Urbanist;
		font-size: 15px;
	}

    .paragraph {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .action {
        margin-top: 20px;
        margin-bottom: 20px;
        font-style: italic;
        font-weight: bold;
        text-align: center;
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
