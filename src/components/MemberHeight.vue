<template lang="">
  <div>
    <div :class="color">{{ height }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      height: Number
    },
    data() {
      return {};
    },
    computed: {
      color() {
        const height = this.height;
        if (height > 170) {
          return "green";
        }
        return "red";
      }
    }
  };
</script>

<style scoped="scoped" lang="sass">
.red
  color: red
.green
  color: green
</style>
