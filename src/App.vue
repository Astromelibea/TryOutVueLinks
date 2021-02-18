<script>
  import HyperlinkAsClass from './components/hyperlink-as-class.vue';

export default {
  name: 'App',
  components:{
    HyperlinkAsClass
  }
};
</script>


<template>
  <div id="app">
    <h1>Hyperlinks Gallore</h1>
    <ul>
        <hyperlink-as-class></hyperlink-as-class>
        <hyperlink-as-class is-disabled></hyperlink-as-class>
    </ul>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
