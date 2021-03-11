<template>
  <div id="navbar" class="bg-white"></div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      routes: [],
      selectRouteIndex: -1
    };
  },
  mounted() {
    this.selectRouteIndex = 0;
  },
  methods: {
    gotoSection(route, index) {
      this.selectRouteIndex = index;
      this.$router.push({
        name: route.name
      });
    }
  },
  computed: {
    visibleRoutes() {
      let mainRoutes = this.$router.options.routes.find(
        route => route.name == "main"
      );

      return mainRoutes.children.filter(route => {
        //funzione per filtrare ogni elemento dell'array
        if (route.meta && route.meta.label) {
          return true;
        }
        return false;
      });
    }
  }
};
</script>
<style></style>
