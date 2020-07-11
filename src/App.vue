<template>
  <div id="app">
    <h1>Hello App!</h1>
    <div class="memeber__lay">
      <div class="memeber__org">
        <div
          class="memeber__mol"
          :class="heightColor(member.height)"
          v-for="member in members"
          :key="member.id"
        >
          <div class="memeber__atm id">{{ member.id }}</div>
          <div class="memeber__atm name">{{ member.name }}</div>
          <div class="memeber__atm position">{{ member.position }}</div>
          <div class="memeber__atm height">{{ member.height }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      height: "",
      members: [
        {
          id: 1,
          name: "渡邊",
          position: "center",
          height: 169
        },
        {
          id: 2,
          name: "田中",
          position: "forward",
          height: 165
        },
        {
          name: "山尾",
          id: 3,
          position: "back",
          height: 185
        },
        {
          name: "金田",
          id: 4,
          position: "both",
          height: 175
        }
      ]
    };
  },
  methods: {
    heightColor(v) {
      if (v > 180) {
        return "teal";
      }
      if (v < 170) {
        return "pink";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

.memeber
  &__org
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
  &__mol
    display: flex
    align-items: center
    font-size: 24px
  &__atm
    margin: 4px

.teal
  color: teal
.pink
  color: pink
</style>