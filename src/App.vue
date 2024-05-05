<template>
  <div :style="{ backgroundImage: `url(${backgroundImg})` }" id="app">
    <div class="grid">
      <Card v-for="(item, index) in items" 
        :key="index" 
        :style="{ gridColumn: item.span ? `span ${item.span}` : '' }"
        :icon-src="item.icon"
        :hover-effect="item.hoverEffect"
        :clickable="item.clickable"
        @click.native="toggleTile(index)"
      >
        <template v-slot:line1>{{ item.line1 }}</template>
        <template v-slot:line2>{{ item.line2 }}</template>
        <template v-slot:line3>{{ item.line3 }}</template>
      </Card>
    </div>
    <SlidingTile :is-visible="expandedIndex >= 0" @close="closeModal">
      <p>{{ items[expandedIndex]?.expandedContent }}</p>
    </SlidingTile>
  </div>
</template>

<script>
//background
import backgroundImg from '@/assets/paf.png';
//components
import Card from './components/Card.vue';
import SlidingTile from './components/SlidingTile.vue';
//icons
import infoIcon from '@/assets/info.png';
import downloadIcon from '@/assets/download.png';
import contactIcon from '@/assets/arroba.png';
import codeIcon from '@/assets/code.png';
import publicationIcon from '@/assets/write.png';
import conferenceIcon from '@/assets/speech.png';

export default {
  name: 'App',
  components: {
    Card,
    SlidingTile
  },
  data() {
    return {
      items: [
        { line1: 'Eric Wursteisen',
          line2: 'Strategic Advisor',
          line3: 'Business Agility coach & mentor, Developer',
          span: 2,
          hoverEffect: false,
          clickable: false,
          expanded: false,
          expandedContent:''
        },
        { line1: '', line2: 'About me',
          icon: infoIcon,
          hoverEffect: true,
          clickable: true,
          expanded: false,
          expandedContent: 'More details about Eric Wursteisen'
        },
        { line1: '',
          line2: 'Download CV (PDF)',
          icon: downloadIcon,
          hoverEffect: true,
          clickable: true,
          expanded: false,
          expandedContent: 'CV download in progress'
        },
        { line1: '',
          line2: 'Publications',
          icon: publicationIcon,
          hoverEffect: true,
          clickable: true,
          expanded: false,
          expandedContent: 'More details about Publications'
        },
        { line1: '',
          line2: 'Conferences',
          icon: conferenceIcon,
          hoverEffect: true,
          clickable: true,
          expanded: false,
          expandedContent: 'More details about Conferences'
        },
        { line1: '',
          line2: 'Projects',
          icon: codeIcon,
          hoverEffect: true,
          clickable: true,
          expanded: false,
          expandedContent: 'More details about Projects'
        },
        { line1: '',
          line2: 'Contact',
          icon: contactIcon,
          hoverEffect: true,
          clickable: true,
          expanded: false,
          expandedContent: 'More details about Contacts'
        },
      ],
      expandedIndex: -1,
      // backgroundImg,
    };
  },
  methods: {
    toggleTile(index) {
      this.items.forEach((item, idx) => {
        item.expanded = index === idx ? !item.expanded : false;
      });
      this.expandedIndex = this.items[index].expanded ? index : -1;
    },
    closeModal() {
      if (this.expandedIndex !== -1) {
        this.items[this.expandedIndex].expanded = false;
        this.expandedIndex = -1;
      }
    }
  }
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
