<template>
  <div class="mb-5">
    <div class="form-group mx-auto" style="max-width:700px">
      <label for="quoteText">
        <b>Quote</b>
      </label>
      <textarea
        id="quoteText"
        class="form-control"
        :class="{'is-invalid':showInputError}"
        placeholder="Type new quote"
        v-model="text"
        :readonly="loading"
        maxlength="200"
      ></textarea>
      <div class="row text-area__message mx-0">
          <div v-if="showInputError" class="col text-danger pl-0">Should not be empty</div>
          <div class="col pr-0 text-right text-secondary">{{text.length}}/200</div>
      </div>
    </div>
    <div class="form-group text-center">
      <button
        :disabled="loading"
        @click.stop.prevent="handleSubmit"
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
      getTrimmedText(){
          return this.text.trim()
      },
      isTextEmpty(){
          return !this.getTrimmedText
      },
      showInputError(){
          return this.showValidation && this.isTextEmpty
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

          if(await this.add(this.getTrimmedText)){
              this.reset()
          }else{
              alert("Oopssss....")
          }
      }
  }
};
</script>
<style>
.text-area__message{
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
}
</style>