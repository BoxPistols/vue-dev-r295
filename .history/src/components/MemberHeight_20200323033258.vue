<template lang="">
  <div>
    <div class="height"> / 身長：{{ height }}</div>
    <button @click="handle(1)">+</button>
    <button @click="handle(-1)">-</button>
  </div>
</template>
<script>
export default {
  props: {
    height: Number,
    changeHeight: Function,
    id: Number
  },

  data() {},
  // TODO: Map
  methods:{
    handle(value){
      this.changeHeight(this.id, value)
    }
  },
};
</script>

<style scoped="scoped" lang="sass"></style>
