<template>
  <v-app class="container" :theme='theme'>
    <v-app-bar>
      <v-toolbar-title>Todo App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon
        @click="toggleTheme"
      ><v-icon>{{ theme.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon></v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Header @toggle-add-task="toggleAddTask" :showAddTask="showAddTask"/>
        <router-view :showAddTask="showAddTask"></router-view>
      </v-container>
    </v-main>
    <v-container>
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { createVuetify } from 'vuetify';
import { ref } from 'vue';




export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  setup () {
    const theme = ref(null);
    const vuetify = createVuetify({
      theme: {
        themes: {
          light: {
            primary: '#00E676',
            secondary: '#03DAC6',
            accent: '#82B1FF',
            error: '#B00020',
            warning: '#FB8C00',
            info: '#2196F3',
            success: '#4CAF50',
          },
          dark: {
            primary: '#00E676',
            secondary: '#03DAC6',
            accent: '#82B1FF',
            error: '#B00020',
            warning: '#FB8C00',
            info: '#2196F3',
            success: '#4CAF50',
            dark: true,
          },
        },
      },
    });

const toggleTheme = () => {
      const newTheme = vuetify.theme.dark ? 'light' : 'dark';
      vuetify.theme.currentTheme = newTheme;
    };

    // Set the initial value of the theme ref
    theme.value = vuetify.theme;

    return {
      theme,
      toggleTheme,
    };
  },

  data() {
    return {
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap\|Material+Icons');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 900px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
