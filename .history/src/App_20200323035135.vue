<template>
  <div id="app">
    <h1>Hello App!</h1>
    <Member
      v-for="member in members"
      :key="member.id"
      :member="member"
      :height="member.height"
      :changeHeight="changeHeight"
      @click="handleHeight"></Member>
  </div>
</template>

<script>
  import Member from './components/Member'
  export default {
    name: 'app',
    components: {
      Member
    },
    data() {
      return {
        members: [
          {
            name: '渡邊',
            id: 1,
            position: 'center',
            height: 175
          }, {
            name: '田中',
            id: 2,
            position: 'forward',
            height: 165
          }, {
            name: '山尾',
            id: 3,
            position: 'back',
            height: 185
          }
        ]
      }
    },
    methods: {
      changeHeight(id, value) {
        const members = this.members
        this.members = members.map(member => {
          if (id === member.id) {
            return {
              ...member,
              height: member.height + value
            }
          }
          return member
          // console.log(id, value)
        })
      },
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>