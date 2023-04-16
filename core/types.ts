import { WebviewTag } from './webviewTag'

export interface IWebview extends WebviewTag {}
/* methods */
const supportMethods = [
  'loadURL',
  'downloadURL',
  'getURL',
  'getTitle',
  'isLoading',
  'isLoadingMainFrame',
  'isWaitingForResponse',
  'stop',
  'reload',
  'reloadIgnoringCache',
  'canGoBack',
  'canGoForward',
  'canGoToOffset',
  'clearHistory',
  'goBack',
  'goForward',
  'goToIndex',
  'goToOffset',
  'isCrashed',
  'setUserAgent',
  'getUserAgent',
  'insertCSS',
  'removeInsertedCSS',
  'executeJavaScript',
  'openDevTools',
  'closeDevTools',
  'isDevToolsOpened',
  'isDevToolsFocused',
  'inspectElement',
  'inspectSharedWorker',
  'inspectServiceWorker',
  'setAudioMuted',
  'isAudioMuted',
  'isCurrentlyAudible',
  'undo',
  'redo',
  'cut',
  'copy',
  'paste',
  'pasteAndMatchStyle',
  'delete',
  'selectAll',
  'unselect',
  'replace',
  'replaceMisspelling',
  'insertText',
  'findInPage',
  'stopFindInPage',
  'print',
  'printToPDF',
  'capturePage',
  'send',
  'sendToFrame',
  'sendInputEvent',
  'setZoomFactor',
  'setZoomLevel',
  'getZoomFactor',
  'getZoomLevel',
  'setVisualZoomLevelLimits',
  'showDefinitionForSelection',
  'getWebContentsId'
] as const

type TMethods = typeof supportMethods[number]

type TMethodsType = Pick<WebviewTag, TMethods>

export type GetMethod = <T extends keyof TMethodsType>(methodName: T) => TMethodsType[T]

/* events */

export const supportEvents = [
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
] as const

export const supportProps = [
  'allowpopups',
  'disableblinkfeatures',
  'disablewebsecurity',
  'enableblinkfeatures',
  'httpreferrer',
  'nodeintegration',
  'nodeintegrationinsubframes',
  'partition',
  'plugins',
  'preload',
  'src',
  'useragent',
  'webpreferences'
] as const

type TProps = typeof supportProps[number]

export type TPropsType = Pick<WebviewTag, TProps>
