<template>
  <div class="mb-5">
      <h5><b>Quotes added</b></h5>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="`width: ${progressWidth}%`"
        :aria-valuenow="quotes.length"
        aria-valuemin="0"
        :aria-valuemax="maxQuotesCount"
      >{{quotes.length}}/{{maxQuotesCount}}</div>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    computed:{
        ...mapState(["quotes","maxQuotesCount"]),
        progressWidth(){
            return 50
        }
    }
}
</script>