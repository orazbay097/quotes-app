<template>
  <div id="app" class="container">
    <QuotesCounterProgress />
    <QuotesAddForm />
    <QuotesList/>
  </div>
</template>

<script>
import QuotesCounterProgress from "./components/QuotesCounterProgress";
import QuotesAddForm from "./components/QuotesAddForm";
import QuotesList from "./components/QuotesList";

import {mapActions} from "vuex"

export default {
  name: "App",
  components: {
    QuotesCounterProgress,
    QuotesAddForm,
    QuotesList
  },
  methods:{
    ...mapActions(["getAll"])
  },
  created(){
    this.getAll()
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
