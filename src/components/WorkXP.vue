<template>
	<div class="work-xp-container">
	  <div class="header-content">
		<img src="@/assets/icons/perso2-expo.jpg" alt="Profile Image" class="profile-img">
		<div class="text-content">
		  <div class="work-text">
			<h2 class="paragraph">{{ localizedText.title }}</h2>
            <p class="action">{{ localizedText.action }}</p>
		  </div>
		  <div class="experiences">
			<div v-for="work in experiences" :key="work.id"
				 class="experience"
				 @click="toggleVisibility(work)">
			  <div class="experience-logos">
				<img v-for="src in work.logoSrcs" :key="src" :src="src" :alt="work.alt" class="experience-logo">
			  </div>
			  <span class="date-label">{{ work.date }}</span>
			</div>
		  </div>
		  <div v-if="visibleWork" class="work-description">
			<p v-for="(desc, index) in visibleWork[currentLanguage]" :key="index">
                <span v-if="index === 0"><h2>{{ desc }}</h2></span>
                <span v-else>{{ desc }}</span>
            </p>
		  </div>
		</div>
	  </div>
    </div>
</template>

<script>
import catalog from '@/content/work.json'

const logoFiles = import.meta.glob('../assets/workXP/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default'
})

function logoSrc(name) {
  const matches = Object.entries(logoFiles).filter(([path]) => {
    const base = path.split('/').pop().replace(/\.[^.]+$/, '')
    return base === name || base.startsWith(name + '_')
  })
  const svg = matches.find(([path]) => path.endsWith('.svg'))
  return (svg || matches[0])?.[1] || ''
}

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
            catalog
        };
    },
	methods: {
        toggleVisibility(work) {
            this.visibleWork = (this.visibleWork === work) ? null : work;
        }
    },
    computed: {
        localizedText() {
            const lang = this.currentLanguage === 'fr' ? 'fr' : 'en'
            return {
              title: this.catalog.title[lang],
              action: this.catalog.action[lang]
            }
        },
        experiences() {
            return (this.catalog.experiences || []).map((work) => ({
              ...work,
              logoSrcs: (work.logos || []).map(logoSrc).filter(Boolean)
            }))
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
        margin-right: 20px;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
    }

    .experience-logos {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .experience-logo {
        max-width: 140px;
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
