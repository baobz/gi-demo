import { createApp } from 'vue'
import ThePreviewVideo from './index.vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import ArcoVue from '@arco-design/web-vue'

let instance: any = null
let dom: HTMLElement | null = null

function previewVideo(fileInfo: File.FileItem) {
  if (instance !== null) {
    instance.unmount()
  }
  if (dom !== null) {
    document.body.removeChild(dom)
  }
  // 创建一个挂载容器
  dom = document.createElement('div')
  // 挂载组件
  document.body.appendChild(dom)
  // 实例化组件, createApp第二个参数是 props
  instance = createApp(ThePreviewVideo, {
    fileInfo: fileInfo,
    onCancel: () => {
      setTimeout(() => {
        unmount()
        instance = null
        dom = null
      }, 500)
    }
  })
    .use(ArcoVue)
    .use(ArcoVueIcon)

  // 卸载组件
  function unmount() {
    if (instance !== null) {
      instance.unmount()
    }
    if (dom !== null) {
      document.body.removeChild(dom)
    }
  }
  instance.mount(dom)
}

export default previewVideo
