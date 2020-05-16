<template>
  <div class="mb-3">
    <div class="form-group mx-auto" style="max-width:700px">
      <label for="quoteText">
        <b>Quote</b>
      </label>
      <textarea
        id="quoteText"
        class="form-control"
        :class="{'is-invalid':showValidation&&isTextEmpty}"
        placeholder="Type new quote"
        v-model="text"
        :readonly="loading"
      ></textarea>
      <div class="invalid-feedback">Should not be empty</div>
    </div>
    <div class="form-group text-center">
      <button
        :disabled="loading"
        v-on:click.stop.prevent="handleSubmit"
        class="btn btn-primary"
      >Add Quote</button>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions, mapGetters} from "vuex"
export default {
  data() {
    return {
      text: "",
      showValidation:false
    };
  },
  computed:{
      ...mapState(["loading"]),
      ...mapGetters(["canAddNew"]),
      isTextEmpty(){
          return !this.text;
      }
  },
  methods:{
      ...mapActions(["add"]),
      reset(){
          this.text = ""
          this.showValidation = false
      },
      validate(){
          this.showValidation = true;
          return !this.isTextEmpty;
      },
      async handleSubmit(){
          if(!this.validate()) return

          if(!this.canAddNew){
              alert("Delete one of the quotes to add new one")
              return
          }

          if(await this.add(this.text)){
              this.reset()
          }else{
              alert("Oopssss....")
          }
      }
  }
};
</script>