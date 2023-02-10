<template>
  <v-app class="container" :theme='theme'>
    <v-app-bar>
      <v-toolbar-title>Todo App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        @click="toggleTheme"
      >Toggle Theme</v-btn>
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
import { useTheme } from 'vuetify'




export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
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
