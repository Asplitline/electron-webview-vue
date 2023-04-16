<template>
  <div>
    <electron-webview ref="wb" @dom-ready="test" src="https://www.baidu.com" class="electron-webview"></electron-webview>
  </div>
</template>

<script setup lang="ts">
import ElectronWebview from '@lib/core'
import { onMounted, ref } from 'vue'
const wb = ref<InstanceType<typeof ElectronWebview>>()
const test = (e) => {
  console.log('e :', e)
}
onMounted(() => {})
</script>

<style scoped>
.electron-webview {
  width: 100vw;
  height: 100vh;
}
</style>
