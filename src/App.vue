<template>
  <div id="app">
    <h1>Hello App!</h1>
    <div></div>
    <!--
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
    -->
    <Member :data="member"  :team="teamName"/>
  </div>
</template>

<script>
  import Member from './components/Member.vue'
  export default {
    name: 'app',
    components: {
      Member
    },
    data() {
      return {
        teamName: "MyTeam Name",
        member: {
          name: '渡邊',
          id: 1,
          position: 'center',
          height: 167,
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