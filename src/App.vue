<template>
  <div id="app">
    <div class="resume">
      <leftOptions></leftOptions>
      <rightContents></rightContents>
    </div>
  </div>
</template>

<script>
import leftOptions from './components/leftOptions'
import rightContents from './components/rightContents'
export default {
  name: 'App',
  components: {
    leftOptions,
    rightContents
  }
}
</script>

<style lang='scss'>
#app {
  height:  100%;
  .resume {
    display: flex;
    justify-content: space-between;
    height: 100%;
    .leftOptions {
      width: 250px;
    }
    .rightContents {
      flex: 1;
      padding-left: 250px;
    }
  }
}
</style>
