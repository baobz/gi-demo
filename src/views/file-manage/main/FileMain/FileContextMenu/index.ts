import { createApp } from 'vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import ArcoVue from '@arco-design/web-vue'
import FileContextMenu from './index.vue'

let instance: any = null
let dom: HTMLElement | null = null

function contextMenu(event: PointerEvent, fileInfo: File.FileItem) {
  return new Promise((resolve, reject) => {
    handleUnmount()
    // 创建一个挂载容器
    dom = document.createElement('div')
    // 挂载组件
    document.body.appendChild(dom)
    // 实例化组件, createApp第二个参数是 props
    instance = createApp(FileContextMenu, {
      axis: { x: event.clientX, y: event.clientY },
      fileInfo: fileInfo,
      onClick: (mode: string) => {
        resolve({ mode: mode, fileInfo: fileInfo })
        setTimeout(() => {
          handleUnmount()
        }, 350)
      },
      onClose: () => {
        reject()
        setTimeout(() => {
          handleUnmount()
        }, 350)
      }
    })
    instance.use(ArcoVue)
    instance.use(ArcoVueIcon)
    instance.mount(dom)

    // 卸载组件
    function handleUnmount() {
      if (instance !== null) {
        instance.unmount()
        instance = null
      }
      if (dom !== null) {
        document.body.removeChild(dom)
        dom = null
      }
    }
  })
}

export default contextMenu
