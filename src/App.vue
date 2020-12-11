<template>
  <div id="app">
    <myheader></myheader>
    <router-view></router-view>
  </div>
</template>

<script>
import myheader from './components/Myheader'

export default {
  name: 'Home',
  components: {
    myheader
  },
}
</script>


