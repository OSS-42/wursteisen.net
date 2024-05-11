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
					<p>{{  localizedText.line }}</p>
                    <div class="education-logos">
                        <div v-for="(edu, index) in educations" :key="index">
                            <img :src="edu.img" :alt="edu.alt" class="educ-img" @click="toggleVisibility(edu)">
                            <p v-if="edu.isVisible">{{ edu.description[currentLanguage] }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import image42 from '@/assets/42.png';
import imageEsiee from '@/assets/esiee.png';
import imageUl from '@/assets/ul.png';
import imagePmi from '@/assets/pmi.png';

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
                    ],
					line: "Click on a logo to discover my achievement !"
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
                    ],
					line: "Cliquez sur un logo pour y découvrir ma réalisation !"
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
                    img: imageEsiee,
                    alt: "ESIEE Management",
                    description: {
                        en: "2006 - Master in Innovation Management, biotechnology and bioinformatics",
                        fr: "2006 - Grade de Maîtrise en Management de l'Innovation, biotechnologies et biofinformatique."
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
                    img: imagePmi,
                    alt: "PMI",
                    description: {
                        en: "2022-2024 - Agile certifications in the context of Disciplined Agile: DAVSC, DAC, DASSM",
                        fr: "2022-2024 - Certifications agiles avec le contexte Disciplined Agile : DAVSC, DAC, DASSM"
                    },
                    isVisible: false
                }
            ]
        };
    },
    computed: {
        localizedText() {
            return this.translations[this.currentLanguage] || this.translations.en;
        }
    },
    methods: {
        toggleVisibility(education) {
            education.isVisible = !education.isVisible;
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

	.educ-img {
		height: 30px;
		margin-right: 20px;
		cursor: pointer; /* Makes it clear that the images are clickable */
	}

	.education-logos div {
		display: flex;
		text-align: center; /* Center-align the images and text */
		margin-bottom: 20px; /* Space between education entries */
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

	.about-me-text, .education {
		flex: 1;
		text-align: left;
		font-family: Urbanist;
		font-size: 15px;
	}
</style>
