import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme = {
    dark: false,
    colors: {
      background: '#FAFAFA',
      surface: '#FFFFFF',
      primary: '#00E676',
      'primary-darken-1': '#F5F5F5',
      secondary: '#03DAC6',
      'secondary-darken-1': '#F5F5F5',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    }
  }

  // Dark Theme
const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#212121',
    surface: '#424242',
    primary: '#00E676',
    'primary-darken-1': '#1D1D1D',
    secondary: '#03DAC6',
    'secondary-darken-1': '#1D1D1D',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
};
  

const vuetify = createVuetify({
  components,
  directives,

})

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')

