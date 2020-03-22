<template>
  <div id="app">
    <h1>Hello App!</h1>
    <Member
      :data="member"
      :team="teamName"
      :changeHeight="changeHeight"
      :reset="reset"/>
    <!-- <p> <router-link to="/foo">Go to Foo</router-link> <router-link
    to="/bar">Go to Bar</router-link> </p> <router-view></router-view>
    <MemberHeight/> -->
  </div>
</template>

<script>
  import Member from './components/Member'
  // import MemberHeight from './components/MemberHeight'
  export default {
    name: 'app',
    components: {
      Member,
      // MemberHeight
    },
    methods: {
      changeHeight(value) {
        // eslint-disable-next-line no-console
        console.log('test')
        this.member.height = this.member.height + value
      },
      reset:function() {
        this.member.height =  170
      }
    },
    data() {
      return {
        teamName: "MyTeam Name",
        member: {
          name: '渡邊',
          id: 1,
          position: 'center',
          height: 175
        }
      }
    }
  };
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