<template>
    <div class="portfolio-container">
        <div class="header-content">
            <div class="text-content">
                <div class="portfolio-text">
                    <h2>{{ localizedText.title }}</h2>
                    <p v-for="(paragraph, index) in localizedText.paragraphs" :key="index">{{ paragraph }}</p>
                </div>
                <div class="projects">
                    <h2>{{ localizedText.title2 }}</h2>
                    <div class="project-logos">
                        <div class="project-entry" v-for="(project, index) in projects" :key="index">
                            <img :src="project.img" :alt="project.alt" class="project-img" @click="toggleVisibility(project)">
                        </div>
                    </div>
                    <p v-if="visibleProject" class="project-description">{{ visibleProject.description[currentLanguage] }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projectImage1 from '@/assets/42.png';
import projectImage2 from '@/assets/42.png';
import projectImage3 from '@/assets/42.png';
import projectImage4 from '@/assets/42.png';

export default {
    name: 'Portfolio',
    props: {
        currentLanguage: {
            type: String,
            default: 'en'
        }
    },
    data() {
        return {
            visibleProject: null,
            translations: {
                en: {
                    title: "My Portfolio",
                    title2: "Projects",
                    paragraphs: [
                        "Here is a collection of projects I have worked on over the years...",
                        "Each project showcases my skills in different areas of development...",
                        "Feel free to click on any project to learn more about it."
                    ]
                },
                fr: {
                    title: "Mon Portfolio",
                    title2: "Projets",
                    paragraphs: [
                        "Voici une collection de projets sur lesquels j'ai travaillé au fil des ans...",
                        "Chaque projet met en avant mes compétences dans différents domaines du développement...",
                        "N'hésitez pas à cliquer sur un projet pour en savoir plus."
                    ]
                }
            },
            projects: [
                {
                    img: projectImage1,
                    alt: "Project 1",
                    description: {
                        en: "Project 1 description in English.",
                        fr: "Description du projet 1 en français."
                    },
                    isVisible: false
                },
                {
                    img: projectImage2,
                    alt: "Project 2",
                    description: {
                        en: "Project 2 description in English.",
                        fr: "Description du projet 2 en français."
                    },
                    isVisible: false
                },
                {
                    img: projectImage3,
                    alt: "Project 3",
                    description: {
                        en: "Project 3 description in English.",
                        fr: "Description du projet 3 en français."
                    },
                    isVisible: false
                },
                {
                    img: projectImage4,
                    alt: "Project 4",
                    description: {
                        en: "Project 4 description in English.",
                        fr: "Description du projet 4 en français."
                    },
                    isVisible: false
                }
            ]
        };
    },
    methods: {
        toggleVisibility(project) {
            this.visibleProject = (this.visibleProject === project) ? null : project;
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
    .project-logos {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
    }

    .project-entry {
        margin-right: 20px;
        cursor: pointer;
    }

    .project-img {
        width: 120px;
        height: auto;
    }

    .projects {
        margin-top: 10px;
        font-family: Urbanist;
        font-size: 15px;
    }

    .project-description {
        width: 100%;
        text-align: center;
        margin-top: 10px;
        font-size: 15px;
    }

    .portfolio-container {
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

    .text-content {
        display: flex;
        flex-direction: column;
    }

    .portfolio-text {
        flex: 1;
        text-align: left;
        font-family: Urbanist;
        font-size: 15px;
    }
</style>
