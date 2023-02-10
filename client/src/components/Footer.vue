

<template>
  <v-footer class="d-flex flex-column">
    <div class="px-4 py-2 bg-grey text-center w-100">
    <p>Copyright &copy; 2023</p>
       <router-link to="/about">
      <strong>About</strong>
    </router-link>
    </div>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>