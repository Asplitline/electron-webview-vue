<template>
  <webview ref="webviewInstance" :src="src" class="electron-webview"></webview>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { IWebview, GetMethod, supportEvents } from './types'
const webviewInstance = ref<IWebview>()

interface TPropsType {
  allowpopups?: boolean
  disableblinkfeatures?: string
  disablewebsecurity?: boolean
  enableblinkfeatures?: string
  httpreferrer?: string
  nodeintegration?: boolean
  nodeintegrationinsubframes?: boolean
  partition?: string
  plugins?: boolean
  preload?: string
  src?: string
  useragent?: string
  webpreferences?: string
}
defineProps<TPropsType>()

const emits = defineEmits([
  'load-commit',
  'did-finish-load',
  'did-fail-load',
  'did-frame-finish-load',
  'did-start-loading',
  'did-stop-loading',
  'did-attach',
  'dom-ready',
  'page-title-updated',
  'page-favicon-updated',
  'enter-html-full-screen',
  'leave-html-full-screen',
  'console-message',
  'found-in-page',
  'will-navigate',
  'did-start-navigation',
  'did-redirect-navigation',
  'did-navigate',
  'did-frame-navigate',
  'did-navigate-in-page',
  'close',
  'ipc-message',
  'crashed',
  'plugin-crashed',
  'destroyed',
  'media-started-playing',
  'media-paused',
  'did-change-theme-color',
  'update-target-url',
  'devtools-open-url',
  'devtools-opened',
  'devtools-closed',
  'devtools-focused',
  'context-menu'
])

// todo  eventName -> listener
const addEventListener = (eventName: typeof supportEvents[number]) => {
  webviewInstance.value?.addEventListener(eventName, (event) => {
    emits(eventName, event)
  })
}

const initEvent = () => {
  supportEvents.forEach((eventName) => {
    addEventListener(eventName)
  })
}

const getMethod: GetMethod = (methodName) => {
  return (...args: any[]): any => {
    return webviewInstance.value?.[methodName](...args)
  }
}

onMounted(() => {
  initEvent()
})

defineExpose({
  loadURL: getMethod('loadURL'),
  downloadURL: getMethod('downloadURL'),
  getURL: getMethod('getURL'),
  getTitle: getMethod('getTitle'),
  isLoading: getMethod('isLoading'),
  isLoadingMainFrame: getMethod('isLoadingMainFrame'),
  isWaitingForResponse: getMethod('isWaitingForResponse'),
  stop: getMethod('stop'),
  reload: getMethod('reload'),
  reloadIgnoringCache: getMethod('reloadIgnoringCache'),
  canGoBack: getMethod('canGoBack'),
  canGoForward: getMethod('canGoForward'),
  canGoToOffset: getMethod('canGoToOffset'),
  clearHistory: getMethod('clearHistory'),
  goBack: getMethod('goBack'),
  goForward: getMethod('goForward'),
  goToIndex: getMethod('goToIndex'),
  goToOffset: getMethod('goToOffset'),
  isCrashed: getMethod('isCrashed'),
  setUserAgent: getMethod('setUserAgent'),
  getUserAgent: getMethod('getUserAgent'),
  insertCSS: getMethod('insertCSS'),
  removeInsertedCSS: getMethod('removeInsertedCSS'),
  executeJavaScript: getMethod('executeJavaScript'),
  openDevTools: getMethod('openDevTools'),
  closeDevTools: getMethod('closeDevTools'),
  isDevToolsOpened: getMethod('isDevToolsOpened'),
  isDevToolsFocused: getMethod('isDevToolsFocused'),
  inspectElement: getMethod('inspectElement'),
  inspectSharedWorker: getMethod('inspectSharedWorker'),
  inspectServiceWorker: getMethod('inspectServiceWorker'),
  setAudioMuted: getMethod('setAudioMuted'),
  isAudioMuted: getMethod('isAudioMuted'),
  isCurrentlyAudible: getMethod('isCurrentlyAudible'),
  undo: getMethod('undo'),
  redo: getMethod('redo'),
  cut: getMethod('cut'),
  copy: getMethod('copy'),
  paste: getMethod('paste'),
  pasteAndMatchStyle: getMethod('pasteAndMatchStyle'),
  delete: getMethod('delete'),
  selectAll: getMethod('selectAll'),
  unselect: getMethod('unselect'),
  replace: getMethod('replace'),
  replaceMisspelling: getMethod('replaceMisspelling'),
  insertText: getMethod('insertText'),
  findInPage: getMethod('findInPage'),
  stopFindInPage: getMethod('stopFindInPage'),
  print: getMethod('print'),
  printToPDF: getMethod('printToPDF'),
  capturePage: getMethod('capturePage'),
  send: getMethod('send'),
  sendToFrame: getMethod('sendToFrame'),
  sendInputEvent: getMethod('sendInputEvent'),
  setZoomFactor: getMethod('setZoomFactor'),
  setZoomLevel: getMethod('setZoomLevel'),
  getZoomFactor: getMethod('getZoomFactor'),
  getZoomLevel: getMethod('getZoomLevel'),
  setVisualZoomLevelLimits: getMethod('setVisualZoomLevelLimits'),
  showDefinitionForSelection: getMethod('showDefinitionForSelection')
})
</script>

<style scoped>
.electron-webview {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
