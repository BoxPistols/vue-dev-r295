<template lang="">
  <div>
    <h3 class="fx">
      {{ member.id }} : {{ member.name }}
      <MemberHeight :height="member.height" />
    </h3>
  </div>
</template>

<script>
import MemberHeight from "./MemberHeight";
export default {
  props: {
    member: Object
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
