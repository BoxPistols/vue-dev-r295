<template lang="">
  <div>
  a
    <h3 class="fx">
      {{ member.id }} : {{ member.name }}
      <MemberHeight :height="member.height" :changeHeight="changeHeight" :id="member.id"/>
    </h3>
  </div>
</template>

<script>
import MemberHeight from "../components/MemberHeight";
export default {
  props: {
    member: Object,
    changeHeight: Function
  },
  components: {
    MemberHeight
  },
  data() {
    return {};
  }
};
</script>

<style scoped="scoped" lang="sass">
.h3, .fx
  display: flex
  justify-content: center
</style>
