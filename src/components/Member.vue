<template lang="">
  <div>
    <h2>{{ team }}</h2>
    <p>
      {{ data.id }}
      /
      {{ data.name }}
      /
      {{ data.position }}
    </p>
    <MemberHeight :height="data.height" :changeHeight="changeHeight" :reset="reset"/>
  </div>
</template>

<script>
  import MemberHeight from './MemberHeight'
  export default {
    components: {
      MemberHeight
    },
    props: {
      data: Object,
      team: String,
      changeHeight: Function,
      reset: Number
    },
    data() {
      return {}
    }
  }
</script>