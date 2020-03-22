<template lang="">
<div>
  <h2>{{ team }}</h2>
  <p>
  {{ data.id }}
  /
  {{ data.name }}
  /
  {{ data.position }}
  /
  {{ data.height }}
  </p>
</div>
</template>

<script>
export default {
  props: {
    data: Object,
    team: String,
  },
  data() {
    return {}
  }
}
</script>