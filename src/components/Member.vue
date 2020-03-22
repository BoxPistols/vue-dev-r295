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
    <MemberHeight :height="data.height"/>
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
      team: String
    },
    data() {
      return {}
    }
  }
</script>