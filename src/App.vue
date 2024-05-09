<template>
  <div id="app">
    <div class="grid">
      <Card v-for="(item, index) in enhancedItems"
        :key="item.id"
        :id="item.id"
        :style="{ gridColumn: item.span ? `span ${item.span}` : '' }"
        :icon-src="item.icon"
        :hover-effect="item.hoverEffect"
        :clickable="item.clickable"
        @click="toggleTile(item.id)"
        @switchLanguage="switchLanguage">
      <template v-slot:line1>{{ item.line1 }}</template>
      <template v-slot:line2>{{ item.line2 }}</template>
      <template v-slot:line3>{{ item.line3 }}</template>
    </Card>
    </div>
    <ExpandingTile :is-visible="expandedIndex !== -1 && items[expandedIndex].hasExpandedContent" @close="closeModal">
      <component :is="currentComponent" v-if="currentComponent"></component>
    </ExpandingTile>
  </div>
</template>

<script>
import { markRaw } from 'vue';
//components
import Card from './components/Card.vue';
import ExpandingTile from './components/ExpandingTile.vue';
import AboutMeEN from './components/AboutMeEN.vue';
//icons
import infoIcon from '@/assets/info.png';
import downloadIcon from '@/assets/download.png';
import contactIcon from '@/assets/arroba.png';
import codeIcon from '@/assets/code.png';
import publicationIcon from '@/assets/write.png';
import conferenceIcon from '@/assets/speech.png';
import translateIcon from '@/assets/translation.png';

export default {
  name: 'App',
  mounted() {
    this.switchLanguage(this.currentLanguage);
  },
  components: {
    Card,
    ExpandingTile, 
    AboutMeEN
  },
  data() {
    return {
      items: [],
      expandedIndex: -1,
      currentLanguage: 'en',
      currentComponent: null
    };
  },
  computed: {
    enhancedItems() {
      const iconMap = {
        infoIcon,
        downloadIcon,
        contactIcon,
        codeIcon,
        publicationIcon,
        conferenceIcon,
        translateIcon
      };
      return this.items.map(item => ({
        ...item,
        icon: iconMap[item.icon]
      }));
    }
  },
  methods: {
    toggleTile(id) {
      const item = this.enhancedItems.find(item => item.id === id);
      if (!item.hasExpandedContent) {
        this.expandedIndex = -1;
        this.currentComponent = null;
        return;
      }

      const index = this.enhancedItems.indexOf(item);
      if (this.expandedIndex === index) {
        this.expandedIndex = -1;
        this.currentComponent = null;
      } else {
        this.expandedIndex = index;
        this.loadComponent(item.componentName);
      }
    },
    loadComponent(componentName) {
      if (!componentName) {
        this.currentComponent = null;
        return;
      }
      import(`./components/${componentName}.vue`)
        .then(comp => {
          this.currentComponent = markRaw(comp.default);
        })
        .catch(error => {
          console.error('Failed to load component:', error);
          this.currentComponent = null;
        });
    },
    downloadFile(url) {
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'CV_EW_FR.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    closeModal() {
      this.expandedIndex = -1;
    },
    switchLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
      import(`@/locales/${this.currentLanguage}.json`)
        .then(module => {
          this.items = module.default;
          console.log("Language switched to:", this.currentLanguage);
        }).catch(error => {
          console.error("Failed to load language file:", error);
        });
    }
  },
};
</script>

<style>

#app {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #180353, #295ff4);
  background-size: cover;
  width: 100vw;
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  gap: 20px;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter, .slide-leave-to /* ending state for leaving */ {
  opacity: 0;
  transform: translateY(-20px); /* Adjust based on your design */
}
</style>
