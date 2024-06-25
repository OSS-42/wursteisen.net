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
        @switchLanguage="switchLanguage"
        @downloadFile="downloadFile">
        <template v-slot:line1>{{ item.line1 }}</template>
        <template v-slot:line2>{{ item.line2 }}</template>
        <template v-slot:line3>{{ item.line3 }}</template>
      </Card>
    </div>
    <ExpandingTile :is-visible="expandedIndex !== -1 && items[expandedIndex].hasExpandedContent" @close="closeModal">
      <component :is="currentComponent" :current-language="currentLanguage" v-if="currentComponent"></component>
    </ExpandingTile>
  </div>
</template>

<script>
  import { markRaw, defineAsyncComponent } from 'vue';
  //components
  const Card = defineAsyncComponent(() => import('./components/Card.vue'));
  const ExpandingTile = defineAsyncComponent(() => import('./components/ExpandingTile.vue'));
  //icons
  import infoIcon from '@/assets/tiles/info.png';
  import downloadIcon from '@/assets/tiles/download.png';
  import contactIcon from '@/assets/tiles/arroba.png';
  import codeIcon from '@/assets/tiles/code.png';
  import publicationIcon from '@/assets/tiles/write.png';
  import conferenceIcon from '@/assets/tiles/speech.png';
  import translateIcon from '@/assets/tiles/translation.png';
  import workIcon from '@/assets/tiles/performance.png';

  export default {
    name: 'App',
    mounted() {
      this.switchLanguage(this.currentLanguage);
    },
    components: {
      Card,
      ExpandingTile,
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
          translateIcon,
          workIcon
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
      downloadFile() {
        const url = '/wursteisen.net/html/CV_EW_FR.pdf';
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
        console.log("Switching language to:", this.currentLanguage);
        import(`@/locales/${this.currentLanguage}.json`)
          .then(module => {
            this.items = module.default;
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
    place-items: center;
    background: linear-gradient(to right, #180353, #295ff4);
    background-size: cover;
    width: 100vw;
    height: 100vh; /* Ensure it takes full viewport height */
    /* padding: 20px; */
    box-sizing: border-box; /* Ensure padding doesn't add extra size */
  }

  .grid {
    outline: 1px solid red;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    width: 490px;
    margin: 0 auto;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.5s ease;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
</style>
