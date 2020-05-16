<template>
    <transition-group name="list" tag="div" class="row">
      <div class="col-xs-12 col-md-6 col-lg-3 mb-3" v-for="quote in quotes" :key="quote.id">
        <div class="card p-4 mx-auto" style="max-width:350px">
          <button @click.stop.prevent="handleDelete(quote.id)" :disabled="loading" type="button" class="close card__icon">
            <span aria-hidden="true">&times;</span>
          </button>
          <span style="font-family: 'Arizonia',cursive;font-size:27px">
              {{quote.text}}
          </span>
        </div>
      </div>
    </transition-group>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["quotes","loading"])
  },
  methods: {
    ...mapActions(["delete"]),
    async handleDelete(id) {
      if (!(await this.delete(id))) {
        alert("Ooops");
      }
    }
  }
};
</script>
<style>
.card__icon {
  outline: none !important;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to  {
  opacity: 0;
  transform: translateY(30px);
}
</style>