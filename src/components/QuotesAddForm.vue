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
        style
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
        class="btn btn-purple"
      >Add Quote</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      text: "",
      showValidation: false
    };
  },
  computed: {
    ...mapState(["loading"]),
    ...mapGetters(["canAddNew"]),
    getTrimmedText() {
      return this.text.trim();
    },
    isTextEmpty() {
      return !this.getTrimmedText;
    },
    showInputError() {
      return this.showValidation && this.isTextEmpty;
    }
  },
  methods: {
    ...mapActions(["add"]),
    reset() {
      this.text = "";
      this.showValidation = false;
    },
    validate() {
      this.showValidation = true;
      return !this.isTextEmpty;
    },
    async handleSubmit() {
      if (!this.validate()) return;

      if (!this.canAddNew) {
        alert("Delete one of the quotes to add new one");
        return;
      }

      if (await this.add(this.getTrimmedText)) {
        this.reset();
      } else {
        alert("Oopssss....");
      }
    }
  }
};
</script>
<style scoped>
.text-area__message {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
}
.form-control:focus {
  border-color: rgb(182, 115, 148);
  box-shadow: 0 0 0 0.2rem rgba(182, 115, 148, 0.25);
}
.btn-purple {
  background-color: purple;
  border-color: purple;
  color: #fff;
}
.btn-purple:not(:disabled):not(.disabled).active, .btn-purple:not(:disabled):not(.disabled):active, .show>.btn-purple.dropdown-toggle {
    color: #fff;
    background-color: #4f065e;
    border-color: #1d0229;
}
.btn-purple:not(:disabled):not(.disabled).active:focus, .btn-purple:not(:disabled):not(.disabled):active:focus, .show>.btn-purple.dropdown-toggle:focus {
     box-shadow: 0 0 0 0.2rem rgba(182, 115, 148, 0.25);
}
</style>