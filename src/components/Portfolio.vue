<template>
	<div class="portfolio-container">
	  <div class="header-content">
		<img src="@/assets/icons/perso2-expo.png" alt="Profile Image" class="profile-img">
		<div class="text-content">
		  <div class="portfolio-text">
			<h2 class="paragraph">{{ localizedText.title }}</h2>
			<p v-for="(paragraph, index) in localizedText.paragraphs" :key="index">{{ paragraph }}</p>
			<p class="action" v-for="(action, index) in localizedText.action" :key="index">{{ action }}</p>  
		  </div>
		  <div class="projects">
			<Carousel :items-to-show="1" :mouse-drag="true" :wrap-around="true" :class="{ 'carousel-hidden': !isCarouselVisible }">
			  <Slide v-for="(project, index) in projects" :key="index">
				<div class="project-slide">
				  <img :src="project.img" :alt="project.alt" class="project-img" @click="toggleZoom(project.img)">
				  <a :href="project.link" target="_blank">
					<div class="project-title">
						<p>{{ project.alt }}</p>
						<img :src="project.icon" alt="Link Icon" class="project-link-icon">
					</div>
                  </a>
				  <p class="project-description">{{ project.description[currentLanguage] }}</p>
				</div>
			  </Slide>
			  <template #addons>
				<Navigation />
			  </template>
			</Carousel>
		  </div>
		</div>
	  </div>
	  <div v-if="zoomed" class="zoomed-image-container" @click="toggleZoom('')">
		<img :src="zoomedImageSrc" alt="Zoomed Image" class="zoomed-image">
	  </div>
	</div>
  </template>  
  
  <script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  
  import projectImage1 from '@/assets/portfolio/pong.png';
  import projectImage2 from '@/assets/portfolio/cube3D.png';
  import projectImage3 from '@/assets/portfolio/minishell.png';
  import projectImage4 from '@/assets/portfolio/so_long.png';
  import projectImage5 from '@/assets/portfolio/website1.png';
  import projectImage6 from '@/assets/portfolio/github-portfolio.png';
  import gitIcon from '@/assets/icons/github.png';
  import webIcon from '@/assets/icons/www-click.png';
  
  export default {
	name: 'Portfolio',
	components: {
	  Carousel,
	  Slide,
	  Navigation
	},
	props: {
	  currentLanguage: {
		type: String,
		default: 'en'
	  }
	},
	data() {
	  return {
		gitIcon,
		webIcon,
		visibleProject: null,
		zoomedImageSrc: '',
    	zoomed: false,
		isCarouselVisible: false,
		translations: {
		  en: {
			title: "My Portfolio",
			paragraphs: [
			  "Here is a collection of some major projects I have worked on over the years.",
			  "Alone or with a team, these projects make me proud, especially ones from 42's cursus.",
			], 
			action: [
				"Click on the project's title to learn more about it."
			]
		  },
		  fr: {
			title: "Mon Portfolio",
			paragraphs: [
			  "Voici une collection de quelques projets notables sur lesquels j'ai travaillé au fil des ans.",
			  "Seul ou à plusieurs, ces projets, notamment ceux du cursus 42 sont des fiertés.",
			], 
			action: [
			  "Cliquez sur le titre du projet pour en savoir plus."
			]
		  }
		},
		projects: [
			{
				img: projectImage1,
				alt: "Transcendence - Pong",
				link: "https://github.com/OSS-42/14-TRANSCENDENCE",
				description: {
					en: "This is the final group project of the 42 cursus. I mostly worked on the game part of the project, Pong, in React and Three.js.",
					fr: "Il s'agit du projet final du cursus de 42. J'ai principalement travaillé sur la partie jeu du projet, Pong, en React et Three.js."
				},
				icon: gitIcon
			},
			{
				img: projectImage2,
				alt: "Cube3D",
				link: "https://github.com/OSS-42/10-CUB3D",
				description: {
					en: "Another major graphic project in 42 cursus. With another student we decided to recreate 42 Quebec school. It's raycasting in C.",
					fr: "Un autre projet graphique majeur du cursus de 42. Avec un autre étudiant nous avons décidé de recréer le campus de 42 Québec. Il s'agit de raycasting en C."
				},
				icon: gitIcon
			},
			{
				img: projectImage3,
				alt: "Minishell",
				link: "https://github.com/OSS-42/9-MINISHELL",
				description: {
					en: "Team project with the objective to recreate a bash like shell. A big milestone in 42 cursus.",
					fr: "Projet d'équipe ayant pour objectif de recréer un shell basé sur bash. Une étape important du cursus de 42."
				},
				icon: gitIcon
			},
			{
				img: projectImage4,
				alt: "So Long",
				link: "https://github.com/OSS-42/6-SO_LONG",
				description: {
					en: "First graphic project, solo, in 42 cursus. It uses C.",
					fr: "Premier projet graphique du cursus de 42, en solo. Il est en C."
				},
				icon: gitIcon
			},
				{
				img: projectImage5,
				alt: "Website",
				link: "https://ragoug.com/",
				description: {
					en: "A simple gallery website for a painter.",
					fr: "Très simple site web en mode gallerie pour un artiste."
				},
				icon: webIcon
			},
			{
				img: projectImage6,
				alt: "Github",
				link: "https://github.com/OSS-42",
				description: {
					en: "All my other public projects are available on Github.",
					fr: "Tous mes autres projets publiques sont disponibles sur Github."
				},
				icon: gitIcon
			}
		]
	  };
	},
	methods: {
	  toggleVisibility(project) {
		this.visibleProject = (this.visibleProject === project) ? null : project;
	  },
	  toggleZoom(imgSrc) {
		this.zoomed = !this.zoomed;
		this.zoomedImageSrc = this.zoomed ? imgSrc : '';
	  },
	  showCarousel() {
    	this.isCarouselVisible = true;
		}
	  },
	  mounted() {
		this.$nextTick(() => {
			this.showCarousel();
	    });
	},
	computed: {
	  localizedText() {
		return this.translations[this.currentLanguage] || this.translations.en;
	  }
	}
  };
  </script>
  
  <style>
	.project-slide {
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	text-align: center;
	max-width: 300px;
	margin: 0 auto;
	}

	.project-img {
	width: 100%;
	height: auto;
	margin-bottom: 10px;
	}

	.project-title {
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Urbanist;
	font-size: 18px;
	color: white;
	}

	.project-link-icon {
	display: flex;
	margin-left: 10px;
	text-decoration: none;
	height: 20px;
	}

	.projects {
	margin-top: 10px;
	font-family: Urbanist;
	font-size: 15px;
	}

	.project-description {
	margin-top: 10px;
	font-size: 15px;
	color: white;
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

	.profile-img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		object-fit: cover;
		margin-right: 20px;
	}

	.carousel__prev, .carousel__next {
	color: white !important;
	font-size: 30px !important;
	/* background: rgba(0, 0, 0, 0.5) !important; */
	border: none !important;
	padding: 10px !important;
	}

	.carousel__prev:hover, .carousel__next:hover {
	color: #ccc !important;
	}

	.action {
        font-style: italic;
        font-weight: bold;
        text-align: center;
		margin-top: 20px;
        margin-bottom: 20px;
    }

	.paragraph {
		margin-top: 20px;
        margin-bottom: 20px;
	}

	.zoomed-image-container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
	}

	.zoomed-image {
		max-width: 90%;
		max-height: 90%;
		transition: transform 0.3s ease;
		cursor: pointer;
	}

	.carousel-hidden {
		visibility: hidden;
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
