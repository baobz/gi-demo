<div align="center">
	<img style="width: 80px;height: 80px" src="https://s1.ax1x.com/2022/05/12/OBUfSS.gif"/>
	<h1>Gi Admin Pro</h1>
</div>

[![license](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

## 简介

Gi Admin Pro 是一个基于 Vue3、Vite、TypeScript、Arco Design UI、Pinia、VueUse 等的免费中后台模版，它使用了最新的前端技术栈，内置丰富的主题配置，有着极高的代码规范，基于 mock 实现的动态数据展示，开箱即用的模板，也可用于学习参考。

> **Gi 前缀含义：** G：代表全局 i：代表我的
>
> Gi 用来定义全局组件前缀，如 GiNavBar、GiTitle、GiLoading

## 特性

- **最新技术栈**：使用 Vue3 / Vite 等前端前沿技术开发, 使用高效率的 npm 包管理器
- **TypeScript**: 应用程序级 JavaScript 的语言
- **主题**：丰富可配置的主题、暗黑模式
- **代码规范**：丰富的规范插件及极高的代码规范

## 预览

- [Gi Admin Pro](http://lin0716.gitee.io/gi-demo)

## 代码仓库

- [gitee](https://gitee.com/lin0716/gi-demo)

## 项目示例图

<img src="https://s1.ax1x.com/2022/05/13/OrhNM4.png" />

<img src="https://s1.ax1x.com/2022/05/13/OrhRLd.png" />

<img src="https://s1.ax1x.com/2022/05/13/Orh4ot.png" />

<img src="https://s1.ax1x.com/2022/05/13/OrhLLj.png" />

<img src="https://s1.ax1x.com/2022/05/13/Or4SYV.png" />

<img src="https://s1.ax1x.com/2022/05/13/Or4CSU.png" />

<img src="https://s1.ax1x.com/2022/05/13/Or4EwR.png" />

<img src="https://s1.ax1x.com/2022/05/13/Or40XQ.png" />

<img src="https://s1.ax1x.com/2022/05/13/Or5ZuQ.png" />

<img src="https://s1.ax1x.com/2022/05/13/OyFN7j.png" />

<img src="https://s1.ax1x.com/2022/05/13/OyF49x.png" />

## 安装使用

- 安装依赖

```bash
npm install
```

- 运行

```bash
npm run dev
```

- 打包

```bash
npm run build
```

## vs code 插件安装

```bash
1. Prettier - Code formatter
2. Vue Language Features (Volar)
3. Vue 3 Snippets
4. TypeScript Vue Plugin (Volar)
```

## 注意

```bash
由于升级了vite3，根据官方规定，node版本必须是14.18.0以上
```

**`注：现在已更新到了 Vite4.x，node的版本要求请参考官网要求`**

**vite 官网地址：** https://cn.vitejs.dev/

## 开源作者

**Lin**

## 项目规范

#### .vue 文件行数规范

一般来说，一个 .vue 文件行数建议不超过 **`400`** 行，超过建议组件化拆分



#### 变量命名

```vue
<script setup lang="ts">
const loading = ref(false) // 加载
const visible = ref(false) // 显示隐藏
const disabled = ref(true) // 是否被禁用
const showAddModal = ref(false) // 新增功能的模态框显示隐藏
const showAddDrawer = ref(false) // 新增功能的抽屉显示隐藏
// 或者 是否显示弹窗
const isShowDialog = ref<boolean>(false)
const isLogin = ref(false) // 是否登录
const isVIP = ref(false) // 是否是vip用户

// 表单 不建议 formData, 直接最简
const form = reactive({
  name: '',
  phone: '',
  remark: ''
})

const userInfo = ref({}) // 用户信息
const tableData = ref([]) // 表格数据
const treeData = ref([]) // 树结构数据

// 对象数组 列表数据最好后面加个 List 或者 Data
const companyList = ref([])
const checkedList = ref([])
const selectedList = ref([])
const addressList = ref([])
const userList = [
  { id: '01', name: '张三' },
  { id: '02', name: '李四' }
]
const tableData = []
const optionsList = [
  { label: '哈哈', value: 1 },
  { label: '嘻嘻', value: 2 }
]

// 非对象数组 在字母后面加s
const ids = []
const selectedIds = []
const activeKeys = []
const nums = [3, 5, 6]
const strs = ['aaa', 'bbb', 'ccc']

const getData = () => {
  const arr = []
  nums.forEach((item) => {
    arr.push({ value: item })
  })
}

// ---------------------------------------- 方法 --------------------------------------------- //

// 编辑
const edit = () => {}
const onEdit = () => {}
const handleEdit = () => {}

// 新增
const add = () => {}
const onAdd = () => {}
const handleAdd = () => {}

// 删除
// const delete = () => {} // 不推荐，delete 是JS关键词
const del = () => {}
const onDelete = () => {}
const handleDelete = () => {}
const remove = () => {}

// 重命名
const rename = () => {}
const onRename = () => {}
const handleRename = () => {}

// 批量删除
const mulDelete = () => {}
const onMulDelete = () => {}
const handleMulDelete = () => {}

// 搜索
const search = () => {}

// 返回
const back = () => {}

// 提交
const submit = () => {}

// 确认
const confirm = () => {}
const ok = () => {}

// 取消
const cancel = () => {}

// 打开 | 关闭
const open = () => {}
const close = () => {}

// 保存
const save = () => {}

// 获取表格列表
const getTableData = () => {}
const getTableList = () => {}
</script>
```

**常用前缀**

| 前缀         | 前缀 + 命名                  | 大意                        |
| ------------ | ---------------------------- | --------------------------- |
| get          | getUserInfo                  | 获取用户信息                |
| del/delete   | delUserInfo                  | 删除用户信息                |
| update / add | updateUserInfo / addUserInfo | 修改用户信息 / 增加用户信息 |
| is           | isTimeout                    | 是否超时                    |
| has          | hasUserInfo                  | 有没有用户信息              |
| handle       | handleLogin                  | 处理登录                    |
| calc         | calcAverageSpeed             | 计算平均速度                |

**一些通用缩写**

| 源单词      | 缩写 |
| ----------- | ---- |
| message     | msg  |
| information | info |
| button      | btn  |
| background  | bg   |
| response    | res  |
| request     | req  |
| image       | img  |
| utility     | util |
| prroperty   | prop |
| source      | src  |
| boolean     | bool |
| error       | err  |
| settings    | set  |



#### vue 相关的命名

```vue
<script setup lang="ts">
const isEdit = ref(false)

// 不推荐
const title = computed(() => {
  return isEdit.value ? '编辑' : '新增'
})

// 推荐 能一行就尽量写一行
const title = computed(() => (isEdit.value ? '编辑' : '新增'))
</script>
```

```vue
<script setup lang="ts">
// 表单建议使用 form 命名(简洁)，不必要使用 formData, 同时使用 reactive
const form = reactive({
  name: '',
  phone: ''
})

// 如果属性比较多
const getInitForm = () => ({
  name: '',
  phone: '',
  email: '',
  sex: 1,
  age: ''
})

const form = reactive(getInitForm())

// 重置form
const resetForm = () => {
  Object.assign(state, getInitForm())
}
</script>
```

```vue
<script setup lang="ts">
import { useAppStore, useUserStore } from '@/store'
import { useLoading } from '@/hooks'

// stores 或 hooks 的使用命名规则定义
const appStore = useAppStore()
const userStore = useUserStore()

const { loading, setLoading } = useLoading()
</script>
```



#### 写法技巧

尽量使用三元表达式

```js
// 优化前
let marks = 26
let result
if (marks >= 30) {
  result = 'Pass'
} else {
  result = 'Fail'
}

// 优化后
let result = marks >= 30 ? 'Pass' : 'Fail'
```

善用 includes 方法

```js
// 优化前
if (type === 1 || type === 2 || type === 3)
  // 优化后, 此种方式在vue模板也可使用
  [1, 2, 3].includes(type)
```

使用箭头函数简化函数

```js
// 优化前
function add(num1, num2) {
  return num1 + num2
}

// 优化后
const add = (num1, num2) => num1 + num2
```

尽量减少 if else if

```vue
<script setup lang="ts">
// 比例进度条颜色 尽量减少 if else if
const getProportionColor = (proportion: number) => {
  if (proportion < 30) return 'danger'
  if (proportion < 60) return 'warning'
  return 'success'
}
</script>
```



#### 接口 api 的命名

命名规范： 操作名 + 后端模块名 + 功能名

前缀为（操作名）动词，动词 eg：`add / update / delete / get / save` 等

```js
// 场景一 如没有操作名，可以自行根据场景补充
export function getUserList() {
  return http.get('/user/list')
}

// 场景二
export function getUserList() {
  return http.get('/user/getList')
}

// 场景三 如功能名包含了模块名，可省略
export function getUserList() {
  return http.get('/user/getUserList')
}

// 其他
export function saveUser(data) {
  return http.post('/user/save', data)
}
```

**`以上命名规范可以确保 api 命名不会冲突，加上模块名能快速定位以及更加方便维护`**

引入接口：

```js
import { getUserList, saveUser } from '@/apis'
```



#### 接口 api 的 ts 类型导入

```ts
import http from '@/utils/http'
import { prefix } from '../config'
import type * as System from './type'

/** @desc 获取部门数据 */
export function getSystemDeptList() {
  return http.get<ApiListData<System.DeptItem[]>>(`${prefix}/system/dept/list`)
}

/** @desc 获取用户数据 */
export function getSystemUserList() {
  return http.get<ApiListData<System.UserItem[]>>(`${prefix}/system/user/list`)
}

/** @desc 获取角色数据 */
export function getSystemRoleList() {
  return http.get<ApiListData<System.RoleItem[]>>(`${prefix}/system/role/list`)
}
```

不建议以下方式导入 ts 类型，不够方便

```ts
import type { DeptItem, UserItem, RoleItem } from './type'
```



#### 接口调用书写

**写法一**

不需要 loading，不需要错误打印的 情况

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { getUserList as getUserListApi, type UserItem } from '@/apis' // 同名可以使用别名

const userList = ref<UserItem[]>([])
const getUserList = async () => {
  const res = await getUserListApi()
  console.log('如果异步成功，则会打印这行文字，否则不会打印这行文字，也不会往下执行')
  userList.value = res.data
}
</script>

// getUserListApi 是一个 Promise 异步函数，Promise 最后只有 成功 / 失败 两种状态 // getUserListApi 是基于 axios
封装的，在 axios 响应拦截器做了处理 // 当 res.success === false 的时候 Promise.reject(),
也就异步失败，异步失败不会往下执行
```

**写法二**

需要 loading，需要错误打印的情况

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { getUserList as getUserListApi, type UserItem } from '@/apis' // 同名可以使用别名

const loading = ref(false)
const userList = ref<UserItem[]>([])
const getUserList = async () => {
  try {
    loading.value = true
    const res = await getUserListApi()
    console.log('如果异步成功，则会打印这行文字，否则不会打印这行文字，也不会往下执行')
    userList.value = res.data
  } catch (error) {
    console.log('如果异步失败，会打印这行文字')
    // 由于 axios 在封装的时候，已经在异步失败给了失败的提示弹窗处理
    // 所以这里没必要再写 Message.error(error)
  } finally {
    console.log('如果异步或者失败，都会打印这行代码')
    loading.value = false // 可以用来处理 loading
  }
}
</script>
```

**写法三**

需要 loading, 不需要错误打印（不进行错误处理）的情况

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { getUserList as getUserListApi, type UserItem } from '@/apis' // 同名可以使用别名

const loading = ref(false)
const userList = ref<UserItem[]>([])
const getUserList = async () => {
  try {
    loading.value = true
    const res = await getUserListApi()
    console.log('如果异步成功，则会打印这行文字，否则不会打印这行文字，也不会往下执行')
    userList.value = res.data
  } finally {
    console.log('如果异步或者失败，都会打印这行代码')
    loading.value = false // 可以用来处理 loading
  }
}
</script>

// catch 可以省略
```



#### 正则导入

文件位置：@/utils/regexp.ts

```ts
/** @desc 正则-手机号码 */
export const Phone = /^1[3-9]\d{9}$/

/** @desc 正则-邮箱 */
export const Email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

/** @desc 正则-6位数字验证码正则 */
export const Code_6 = /^\d{6}$/

/** @desc 正则-4位数字验证码正则 */
export const Code_4 = /^\d{4}$/

/** @desc 正则-16进颜色值 #333 #8c8c8c */
export const ColorRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

/** @desc 正则-只能是中文 */
export const OnlyCh = /^[\u4e00-\u9fa5]+$/gi

/** @desc 正则-只能是英文 */
export const OnlyEn = /^[a-zA-Z]*$/

/** @desc 登录注册-密码 6-16位大小写字母、数字的js正则 */
export const Password = /^[a-zA-Z0-9]{6,16}$/
```

使用

```vue
<script lang="ts" setup>
import { reactive } from 'vue'
import { Message } from '@arco-design/web-vue'
import * as Regexp from '@/utils/regexp'

const form = reactive({
  name: '',
  phone: ''
})

const submit = () => {
  if (!Regexp.Phone.test(form.phone)) {
    return Message.warning('请输入正确手机号格式')
  }
}
</script>
```

页面模板类名采用半角连接符(-)

```vue
<template>
  <div class="detail">
    <h3 class="title">标题</h3>
    <section class="table-box">
      <table></table>
    </section>
  </div>
</template>
```



#### 全局组件--命名规范

组件命名：**单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)**

可参考 Vue2 官网-风格指南: https://v2.cn.vuejs.org/v2/style-guide/

```
GiTitle.vue
GiThemeBtn.vue
GiSvgIcon.vue
```

#### 局部组件--命名规范

组件命名：**单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)**

可参考 Vue2 官网-风格指南: https://v2.cn.vuejs.org/v2/style-guide/

```
Pane1.vue
Pane2.vue
PaneQuota1.vue
PaneQuota2.vue
Step1.vue
Step2.vue
AddModal.vue
EditDrawer.vue
DetailModal.vue
```



#### 文件夹命名--命名规范 (采用中划线-)

1、文件名建议只使用小写字母，不使用大写字母

2、名称较长时采用半角连接符(-)分隔

```
home/index.vue
news/index.vue
news-detail/index.vue
```

#### 业务状态

gi-demo 的业务状态放在@/constant/xxx.ts xxx 为接口模块名

```js
type SubmitStatusItem = { name: string, value: number, color: string }
/** @desc 指标提交状态 */
export const SubmitStatusList: SubmitStatusItem[] = [
  { name: '待提交', value: 0, color: 'orange' },
  { name: '已提交', value: 1, color: 'green' }
]

type StatusItem = { name: string, value: number, type: string }
/** @desc 指标启用状态 */
export const StatusList: StatusItem[] = [
  { name: '禁用', value: 0, type: 'danger' },
  { name: '启用', value: 1, type: 'success' }
]
```

使用的时候:

引入模块

```js
import { StatusList } from '@/constant/xxx' // 要具体到模块名，因为不同模块可能会有StatusList一样的名称
```

```vue
<a-table-column title="状态" :width="100" align="center">
	<template #cell="{ record }">
		<template v-for="item in StatusList" :key="item.value">
			<a-tag v-if="item.value === record.status" :color="item.color">{{ item.name }}</a-tag>
		</template>
	</template>
</a-table-column>
```



#### 弹窗组件 Modal、抽屉组件 Drawer 的一般封装

```vue
<template>
  <a-modal v-model:visible="visible" :title="title" @ok="confirm">
    <!-- 内容 -->
  </a-modal>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const visible = ref(false)
const detailId = ref('')
const isEditMode = computed(() => !!detailId.value) // 判断是新增还是编辑模式
const title = computed(() => (isEditMode.value ? '编辑' : '新增'))

const add = () => {
  detailId.value = ''
  visible.value = true
}

const edit = (id: string) => {
  detailId.value = id
  // getDetail() 回显操作
  visible.value = true
}

defineExpose({ add, edit })

const confirm = () => {
  console.log('点击了确认按钮')
}
</script>
```

使用

```vue
<template>
  <EditModal ref="EditModalRef"></EditModal>
</template>

<script setup lang="ts">
import EditModal from './EditModal.vue'

const EditModalRef = ref<InstanceType<typeof EditModal>>()

// 新增
const onAdd = () => {
  EditModalRef.value?.add()
}

// 编辑
const onEdit = (item: PersonItem) => {
  EditModalRef.value?.edit(item.id)
}
</script>
```



#### Hooks 目录结构

```js
hooks > app - useDept.ts - useCompanyList.ts - index.ts > modules - useLoading.ts - usePagination.ts
index.ts
```

**hooks 下默认存放公共的，非接口请求的 hooks**

```vue
<script setup lang="ts">
import { useLoading } from '@/hooks'

const { loading, setLoading } = useLoading()
</script>
```

**hooks/app 下主要存放通用接口的 hooks**

/hooks/app/useDept.ts

```typescript
import { ref } from 'vue'
import { getSystemDeptList } from '@/apis'
import type { DeptItem } from '@/apis'

/** 部门模块 */
export function useDept() {
  const loading = ref(false)
  const deptList = ref<DeptItem[]>([])

  const getDeptList = async () => {
    try {
      loading.value = true
      const res = await getSystemDeptList()
      deptList.value = res.data.list
    } catch (error) {
    } finally {
      loading.value = false
    }
  }
  return { deptList, getDeptList, loading }
}
```

使用

```vue
<script setup lang="ts">
import { useDept } from '@/hooks/app'

const { deptList, getDeptList, loading: deptLoading } = useDept()
getDeptList() // 建议在页面调用 hooks 的方法（不在hooks里面调用）
</script>
```



#### TSX方式使用表格

~~~vue
<template>
  <a-card :bordered="false" class="gi_card pane3">
    <a-row justify="space-between" align="center" class="head">
      <div>
        <a-alert type="normal">
          <template #icon>
            <icon-exclamation-circle-fill />
          </template>
          <span>这里采用 tsx 方式使用表格，具体看代码使用</span>
        </a-alert>
      </div>

      <a-button type="primary">导出</a-button>
    </a-row>

    <section class="content">
      <section class="gi_table_box">
        <a-table
          row-key="id"
          size="small"
          :loading="loading"
          :bordered="{ cell: true }"
          :columns="columns"
          :data="tableData"
          :scroll="{ x: '100%', y: '100%', minWidth: 1000 }"
          :row-selection="{ type: 'checkbox', showCheckedAll: true }"
          :pagination="pagination"
          @select="select"
          @select-all="selectAll"
        >
        </a-table>
      </section>
    </section>
  </a-card>
</template>

<script lang="tsx" setup>
import type { TableColumnData, TableInstance } from '@arco-design/web-vue'
import { usePagination } from '@/hooks'
import { getPersonList } from '@/apis'
import type { PersonItem } from '@/apis'
import { StatusList } from '@/constant/person'

const columns: TableColumnData[] = [
  {
    title: '序号',
    width: 68,
    render: ({ record, column, rowIndex }) => <span>{rowIndex + 1}</span>
  },
  {
    title: '姓名',
    dataIndex: 'name'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180
  },
  {
    title: '地址',
    dataIndex: 'address',
    ellipsis: true,
    tooltip: true
  },
  {
    title: '比例',
    width: 68,
    align: 'center',
    render: ({ record }) => (
      <a-progress size="mini" status={getProportionColor(record.proportion)} percent={record.proportion / 100} />
    )
  },
  {
    title: '状态',
    width: 100,
    align: 'center',
    render: (data) => {
      const index = StatusList.findIndex((i) => i.value === data.record.status)
      if (index >= 0) {
        return (
          <a-tag size="small" color={StatusList[index].color}>
            {StatusList[index].name}
          </a-tag>
        )
      }
    }
  },
  {
    title: '操作',
    width: 200,
    align: 'center',
    render: ({ record }) => (
      <a-space>
        <a-button type="primary" size="mini">
          <icon-edit></icon-edit>
        </a-button>
        <a-button size="mini">详情</a-button>
        <a-popconfirm type="warning" content="您确定要删除该项吗?">
          <a-button type="primary" status="danger" size="mini">
            <icon-delete />
          </a-button>
        </a-popconfirm>
      </a-space>
    )
  }
]

const { pagination, setTotal } = usePagination(() => getTableData())
const tableData = ref<PersonItem[]>([])
const loading = ref(false)

const getTableData = async () => {
  try {
    loading.value = true
    const res = await getPersonList({
      current: pagination.current,
      pageSize: pagination.pageSize
    })
    tableData.value = res.data.list
    setTotal(res.data.total)
  } catch (error) {
  } finally {
    loading.value = false
  }
}

onActivated(() => {
  getTableData()
})

// 比例进度条颜色
const getProportionColor = (proportion: number) => {
  if (proportion < 30) return 'danger'
  if (proportion < 60) return 'warning'
  return 'success'
}

// 勾选
const selectRowKeys = ref<(string | number)[]>([])
const select: TableInstance['onSelect'] = (rowKeys) => {
  selectRowKeys.value = rowKeys
}

// 全选
const selectAll: TableInstance['onSelectAll'] = (checked) => {
  selectRowKeys.value = checked ? tableData.value.map((i) => i.id) : []
}
</script>

<style lang="scss" scoped>
.pane3 {
  flex: 1;
  margin: $margin;
  .head {
    margin-bottom: 16px;
  }
}
.content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: var(--color-bg-1);
  border-radius: $radius-box;
}
</style>
~~~



#### 分页 Hooks 的使用

文件位置：@/hooks/modules/usePagination.ts

**旧版：**

```ts
import { ref } from 'vue'

type Callback = () => void

type Options = {
  defaultPageSize: number
}

export default function usePagination(callback: Callback, options: Options = { defaultPageSize: 10 }) {
  const current = ref(1)
  const pageSize = ref(options.defaultPageSize)
  const total = ref(0)

  function changeCurrent(size: number) {
    current.value = size
    callback && callback()
  }

  function changePageSize(size: number) {
    current.value = 1
    pageSize.value = size
    callback && callback()
  }

  function setTotal(value: number) {
    total.value = value
  }

  const pagination = computed(() => {
    return {
      showPageSize: true,
      // ...其他配置
      total: total.value,
      current: current.value,
      pageSize: pageSize.value,
      onChange: changeCurrent,
      onPageSizeChange: changePageSize
    }
  })

  return {
    current,
    pageSize,
    total,
    pagination,
    changeCurrent,
    changePageSize,
    setTotal
  }
}
```

**`上面这种方案已经废弃`**，最新方案如下

**改良版（兼容旧版）：**

```js
import { reactive, toRefs } from 'vue'
import type { PaginationProps } from '@arco-design/web-vue'

type Callback = () => void

type Options = {
  defaultPageSize: number
}

export default function usePagination(callback: Callback, options: Options = { defaultPageSize: 10 }) {
  const pagination = reactive({
    showPageSize: true,
    current: 1,
    pageSize: options.defaultPageSize,
    total: 0,
    onChange: (size: number) => {
      pagination.current = size
      callback && callback()
    },
    onPageSizeChange: (size: number) => {
      pagination.current = 1
      pagination.pageSize = size
      callback && callback()
    }
  })

  const changeCurrent = pagination.onChange
  const changePageSize = pagination.onPageSizeChange
  function setTotal(value: number) {
    pagination.total = value
  }

  const { current, pageSize, total } = toRefs(pagination)

  return {
    current,
    pageSize,
    total,
    pagination,
    changeCurrent,
    changePageSize,
    setTotal
  }
}
```

使用方式 1

```vue
<template>
  <!-- ... -->
  <div class="table-box">
    <a-table
      row-key="id"
      :columns="columns"
      :data="tableData"
      :pagination="{ showPageSize: true, total: total, current: current, pageSize: pageSize }"
      @page-change="changeCurrent"
      @page-size-change="changePageSize"
    >
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { usePagination } from '@/hooks'

const { current, pageSize, total, changeCurrent, changePageSize, setTotal } = usePagination(() => {
  getTableData()
})

// 从第一页开始查询
changeCurrent(1)
</script>
```

使用方法 2 (改良版，更少代码)

```vue
<template>
  <!-- ... -->
  <div class="table-box">
    <a-table row-key="id" :columns="columns" :data="tableData" :pagination="pagination"> </a-table>
  </div>
</template>

<script setup lang="ts">
import { usePagination } from '@/hooks'

const { pagination, setTotal } = usePagination(() => {
  getTableData()
})

// 从第一页开始查询
pagination.onChange(1)

// 搜索
const search = () => {
  pagination.onChange(1)
}

const search2 = () => {
  pagination.current = 1
  getTableData()
}
</script>
```

注意：

```vue
<script setup lang="ts">
import { usePagination } from '@/hooks'

const { pagination, setTotal } = usePagination(() => {
  getTableData()
})

const form = reactive({
  name: '',
  status: '',
  current: pagination.current, // 此种方式不会响应
  pageSize: pagination.pageSize // 此种方式不会响应
})

const getTableData = async () => {
  const res = await getData(form)
}
</script>
```

改为

```vue
<script setup lang="ts">
import { usePagination } from '@/hooks'

const { pagination, setTotal } = usePagination(() => {
  getTableData()
})

const form = reactive({
  name: '',
  status: ''
})

const getTableData = async () => {
  const res = await getData({ ...form, current: pagination.current, pageSize: pagination.pageSize })
}
</script>
```

或者

```vue
<script setup lang="ts">
import { usePagination } from '@/hooks'

const { pagination, setTotal } = usePagination(() => {
  form.current = pagination.current
  form.pageSize = pagination.pageSize
  getTableData()
})

const form = reactive({
  name: '',
  status: '',
  current: pagination.current,
  pageSize: pagination.pageSize
})

const getTableData = async () => {
  const res = await getData(form)
}
</script>
```

```vue
<template>
  <div>
    <a-pagination v-bind="pagination" />
  </div>
</template>

<script setup lang="ts">
import { usePagination } from '@/hooks'

const { pagination, setTotal } = usePagination(() => {
  getTableData()
})

const form = reactive({
  name: '',
  status: ''
})

const getTableData = async () => {
  const res = await getData({ ...form, page: pagination.current, size: pagination.pageSize })
}
</script>
```



#### TSX 方式调起弹窗

##### 方式 1

```tsx
// tool.tsx
import { reactive } from 'vue'
import { Modal, Form, type FormInstance } from '@arco-design/web-vue'
import * as Regexp from '@/utils/regexp'

export const openAddUserModal = () => {
  const form = reactive({
    name: '',
    phone: ''
  })

  const FormRef = ref<FormInstance | null>(null)

  const rules = {
    name: [
      { required: true, message: '请输入姓名' },
      { match: Regexp.OnlyCh, message: '只能是中文姓名' },
      { minLength: 1, maxLength: 4, message: '名字最长不超过4个字符' }
    ],
    phone: [
      { required: true, message: '请输入手机号' },
      { match: Regexp.Phone, message: '手机号格式不正确' }
    ]
  }

  const saveUserApi = () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(true)
      }, 2000)
    )
  }

  Modal.open({
    title: '添加用户',
    content: () => (
      <Form model={form} ref={FormRef}>
        <Form.Item field="name" label="用户名" rules={rules.name}>
          <a-input v-model={form.name} placeholder="请输入用户名" max-length={8} allow-clear />
        </Form.Item>
        <Form.Item field="phone" label="手机号" rules={rules.phone}>
          <a-input v-model={form.phone} placeholder="请输入手机号" max-length={11} allow-clear />
        </Form.Item>
      </Form>
    ),
    okText: '添加',
    onBeforeOk: async () => {
      const flag = await FormRef.value?.validate()
      if (flag) return false
      await saveUserApi()
      return true
    }
  })
}
```

使用

```vue
<template>
  <a-space class="aaa">
    <a-button type="primary" @click="open">打开添加用户弹窗</a-button>
  </a-space>
</template>

<script lang="tsx" setup>
import { openAddUserModal } from './tool'

// 方式1
const open = () => {
  openAddUserModal()
}
</script>

<style lang="scss" scoped></style>
```

##### 方式 2

AddUserForm.vue

```vue
<template>
  <a-form :model="form" ref="FormRef">
    <a-form-item field="name" label="用户名" :rules="rules.name">
      <a-input v-model="form.name" placeholder="请输入用户名" :max-length="8" allow-clear />
    </a-form-item>
    <a-form-item field="phone" label="手机号" :rules="rules.phone">
      <a-input v-model="form.phone" placeholder="请输入手机号" :max-length="11" allow-clear />
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import type { FormInstance } from '@arco-design/web-vue'
import * as Regexp from '@/utils/regexp'

const form = reactive({
  name: '',
  phone: ''
})

const FormRef = ref<FormInstance | null>(null)

const rules = {
  name: [
    { required: true, message: '请输入姓名' },
    { match: Regexp.OnlyCh, message: '只能是中文姓名' },
    { minLength: 1, maxLength: 4, message: '名字最长不超过4个字符' }
  ],
  phone: [
    { required: true, message: '请输入手机号' },
    { match: Regexp.Phone, message: '手机号格式不正确' }
  ]
}

const saveUserApi = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true)
    }, 2000)
  )
}

const handleAddUser = async () => {
  const flag = await FormRef.value?.validate()
  if (flag) return false
  await saveUserApi()
  return true
}

defineExpose({ handleAddUser })
</script>

<style lang="scss" scoped></style>
```

使用

```vue
<template>
  <a-space class="aaa">
    <a-button type="primary" @click="open">打开添加用户弹窗</a-button>
  </a-space>
</template>

<script lang="tsx" setup>
import AddUserForm from './components/AddUserForm.vue'
import { Modal } from '@arco-design/web-vue'

const open = () => {
  const AddUserFormRef = ref<InstanceType<typeof AddUserForm> | null>(null)

  Modal.open({
    title: '添加用户',
    content: () => <AddUserForm ref={AddUserFormRef}></AddUserForm>,
    okText: '添加',
    onBeforeOk: async () => {
      return await AddUserFormRef.value?.handleAddUser()
    }
  })
}
</script>

<style lang="scss" scoped></style>
```



##### 方式3

`@/views/file/components/FileRenameModal/index.vue`

~~~vue
<template>
  <a-modal
    title="重命名"
    width="500px"
    v-model:visible="visible"
    modal-animation-name="el-fade"
    @close="cancel"
    @before-ok="save"
  >
    <a-row justify="center" align="center">
      <a-form ref="FormRef" :model="form" :style="{ width: '80%' }">
        <a-form-item field="name" label="文件名称" :rules="[{ required: true, message: '请输入文件名称' }]">
          <a-input v-model="form.name" placeholder="请输入" allow-clear />
        </a-form-item>
      </a-form>
    </a-row>
  </a-modal>
</template>

<script setup lang="ts">
import type { FileItem } from '@/apis'
import type { FormInstance, Modal } from '@arco-design/web-vue'

interface Props {
  fileInfo: FileItem
  onClose: Function
}
const props = withDefaults(defineProps<Props>(), {})

const visible = ref(false)
type Form = { name: string }
const form: Form = reactive({
  name: ''
})

onMounted(() => {
  form.name = props.fileInfo?.name || ''
  visible.value = true
})

const cancel = () => {
  visible.value = false
  props.onClose && props.onClose()
}

// 模拟接口
const saveApi = (): Promise<boolean> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true)
    }, 2000)
  )
}

const FormRef = ref<FormInstance | null>(null)
const save: InstanceType<typeof Modal>['onBeforeOk'] = async () => {
  const flag = await FormRef.value?.validate()
  if (flag) return false
  return await saveApi()
}
</script>

<style lang="scss" scoped>
.label {
  color: $color-text-2;
}
:deep(.arco-form-item) {
  margin-bottom: 0;
}
:deep(.arco-form-item-label-col > label) {
  white-space: nowrap;
}
</style>
~~~

`@/views/file/components/index.ts`

~~~ts
import type { Component } from 'vue'
import { createApp } from 'vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import ArcoVue from '@arco-design/web-vue'
import type { FileItem } from '@/apis'

import FileRenameModal from './FileRenameModal/index.vue'
// import FileMoveModal from './FileMoveModal/index.vue'
// import PreviewVideoModal from './PreviewVideoModal/index.vue'
// import PreviewAudioModal from './PreviewAudioModal/index.vue'

function createModal<T>(component: Component, options?: T) {
  // 创建一个挂载容器
  const el: HTMLElement = document.createElement('div')
  // 挂载组件
  document.body.appendChild(el)

  // 实例化组件, createApp 第二个参数是 props
  const instance = createApp(component, {
    ...options,
    onClose: () => {
      setTimeout(() => {
        instance.unmount()
        document.body.removeChild(el)
      }, 350)
    }
  })

  instance.use(ArcoVue)
  instance.use(ArcoVueIcon)
  instance.mount(el)
}

/** 打开 文件重命名 弹窗 */
export function openFileRenameModal(fileItem: FileItem) {
  return createModal<{ fileInfo: FileItem }>(FileRenameModal, { fileInfo: fileItem })
}

/** 打开 文件移动 弹窗 */
//export function openFileMoveModal(fileItem: FileItem) {
//  return createModal<{ fileInfo: FileItem }>(FileMoveModal, { fileInfo: fileItem })
//}

/** 预览 视频文件 弹窗 */
//export function previewFileVideoModal(fileItem: FileItem) {
//  return createModal<{ fileInfo: FileItem }>(PreviewVideoModal, { fileInfo: fileItem })
//}

/** 预览 视频文件 弹窗 */
//export function previewFileAudioModal(fileItem: FileItem) {
//  return createModal<{ fileInfo: FileItem }>(PreviewAudioModal, { fileInfo: fileItem })
//}

~~~

使用

~~~vue
<script setup lang="ts">
import { openFileRenameModal } from '../../components/index'
import type { FileItem } from '@/apis'

// 重命名 函数调用表单弹窗组件
const rename = (item: FileItem) => {
  openFileRenameModal(item)
}
</script>
~~~



#### 组件使用建议

能使用组件尽量使用组件实现页面布局

flex 布局尽量使用 **Row** 组件

```vue
<template>
  <a-row justify="space-between" align="center"> </a-row>
</template>
```

按钮间间隔尽量使用 **Space** 组件

```vue
<template>
  <a-space :size="10">
    <a-button>返回</a-button>
    <a-button type="primary">提交</a-button>
  </a-space>
</template>
```

状态色文本，尽量使用

```vue
<template>
  <a-typography-text>主要文本</a-typography-text>
  <a-typography-text type="secondary">二级文本</a-typography-text>
  <a-typography-text type="primary">主题色文本</a-typography-text>

  <a-typography-text type="primary">已提交</a-typography-text>
  <a-typography-text type="success">审核通过</a-typography-text>
  <a-typography-text type="warning">未提交</a-typography-text>
  <a-typography-text type="danger">不通过</a-typography-text>
</template>
```

Link 组件使用场景

```vue
<template>
  <a-table>
    <a-table-column title="操作" :width="150" fixed="right">
      <template #cell="{ record }">
        <a-space>
          <a-link :hoverable="false">编辑</a-link>
          <a-link :hoverable="false">编辑</a-link>
          <a-link :hoverable="false">删除</a-link>
        </a-space>
      </template>
    </a-table-column>
  </a-table>
</template>
```



#### CSS 命名规范

建议采用全小写，多单词使用-连接符(参考大部分网站，包括掘金，码云等，都是采用这个规则)

```css
// 推荐
.header
.footer
.main
.content
.container
.page
.detail
.pane-left
.pane-right
.list
.list-item

// 不推荐
.Header
.listItem
.list-Item
.List-Item;
```



#### CSS 全局类名-命名规范

**`采用下划线_，好复制`**

```scss
.gi_line_1   .gi_line_2   .gi_margin   .gi_box
```

```scss
// 文件位置: @/styles/global.scss
.gi_line_1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.gi_line_2 {
  -webkit-line-clamp: 2;
}

.gi_line_3 {
  -webkit-line-clamp: 3;
}

.gi_line_4 {
  -webkit-line-clamp: 4;
}

.gi_line_5 {
  -webkit-line-clamp: 5;
}

.gi_line_2,
.gi_line_3,
.gi_line_4,
.gi_line_5 {
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; // 弹性伸缩盒
  -webkit-box-orient: vertical; // 设置伸缩盒子元素排列方式
}

.gi_padding {
  padding: $padding;
}

.gi_margin {
  margin: $margin;
}

.gi_relative {
  position: relative;
}

.gi_absolute {
  position: absolute;
}

.gi_rotate_90deg {
  transform: rotate(90deg);
}

.gi_rotate_-90deg {
  transform: rotate(-90deg);
}

.gi_rotate_180deg {
  transform: rotate(180deg);
}

.gi_rotate_-180deg {
  transform: rotate(-180deg);
}

.gi_page {
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.gi_box {
  margin: $margin;
  border-radius: $radius-box;
  background-color: var(--color-bg-1);
  box-sizing: border-box;
  overflow: hidden;
}
```



#### 全局 scss 变量-命名规范

```scss
$color-theme: rgb(var(--primary-6)); // 主题色
$color-primary: rgb(var(--primary-6)); // 主题色
$color-success: rgb(var(--success-6));
$color-warning: rgb(var(--warning-6));
$color-danger: rgb(var(--danger-6));
$color-info: rgb(var(--gray-6));

$title-color: xxx; // 已弃用，写起来繁琐，易忘
$text-color: xxx; // 已弃用
$text-sub-color: xxx; // 已弃用
$text-sup-color: xxx; // 已弃用

// 借鉴了Arco Design命名规则
$color-text-1: var(--color-text-1); // 标题、重点文本字体颜色
$color-text-2: var(--color-text-2); // 文本-全局默认字体颜色
$color-text-3: var(--color-text-3); // 二级文本颜色
$color-text-4: var(--color-text-4); // 辅助文本颜色

$margin: 16px; // 盒子间距
$padding: 16px; // 盒子和内容的间距
```

如下图：

位置 1： 使用 $margin 全局 scss 变量

位置 2：使用 $padding 全局 scss 变量

建议尽量使用全局 scss 变量来开发，可以有效提高效率和团队协作

![](data:image/png;base64,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)





#### CSS 的命名词汇

```css
前一个    prev
后一个    next
当前的    current

显示的    show
隐藏的    hide
打开的    open
关闭的    close

选中的    selected
有效的    active
默认的    default
反转的    toggle

禁用的    disabled
危险的    danger
主要的    primary
成功的    success
提醒的    info
警告的    warning
出错的    error

大型的    lg
小型的    sm
超小的    xs
```

```css
文档    doc
头部    header(hd)
主体    body
尾部    footer(ft)
主栏    main
侧栏    side
容器    box/container
```

```css
列表    list
列表项  item
表格    table
表单    form
链接    link
标题    caption/heading/title
菜单    menu
集合    group
条      bar
内容    content
结果    result
```

```css
按钮        button(btn)
下拉菜单    dropdown
工具栏      toolbar
分页        page
缩略图      thumbnail
警告框      alert
进度条      progress
导航条      navbar
导航        nav
子导航      subnav
面包屑      breadcrumb(crumb)
标签        label
徽章        badge
巨幕        jumbotron
面板        panel
洼地        well
标签页      tab
提示框      tooltip
弹出框      popover
轮播图      carousel
手风琴      collapse
定位浮标    affix
```

```css
品牌        brand
标志        logo
额外部件    addon
版权        copyright
注册        regist(reg)
登录        login
搜索        search
热点        hot
帮助        help
信息        info
提示        tips
开关        toggle
新闻        news
广告        advertise(ad)
排行        top
下载        download
```

```css
左浮动    fl
右浮动    fr
清浮动    clear
```

#### 其他规范

可参考 Vue2 官网-风格指南: https://v2.cn.vuejs.org/v2/style-guide/ , 其中一些规范也可借鉴

可参考 gi-demo 源码，如有更好的规范建议，可以联系作者本人

## Vue 相关

[Vue3 官网](https://cn.vuejs.org/)

[Vue-Router](https://router.vuejs.org/zh/)

[Vite](https://cn.vitejs.dev/)

[Pinia](https://pinia.web3doc.top/)

## 插件推荐

[Arco Design 组件库](https://arco.design/vue/component/button)

[**Day.js** 一个极简的 JavaScript 库，可以为现代浏览器解析、验证、操作和显示日期和时间 2K 大小](https://dayjs.fenxianglu.cn/)

[Lodash 一个一致性、模块化、高性能的 JavaScript 实用工具库](https://www.lodashjs.com/)

[Xe-utils 一个 JavaScript 函数库、工具类](https://vxetable.cn/xe-utils/#/)

[VueUse 一个 Vue3 Hooks 库](https://vueuse.org/)

[VueRequest 一个 Vue 请求库](https://next.attojs.com/)

[V-Viewer 基于 viewer.js 的 vue 图像查看器组件，支持旋转、缩放等操作](https://mirari.cc/v-viewer/)

[Vue-Color-Kit 一个 vue3 颜色选择器组件 ](https://www.npmjs.com/package/vue-color-kit)

[Vxe-Table](https://vxetable.cn/#/table/start/install)

**其他**

[VCalendar 日历组件](https://vcalendar.io/)

[Vue Cal 日历组件](https://antoniandre.github.io/vue-cal/)

## 推荐书籍

[深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)

[前端宝典](https://vue3js.cn/interview/)

[web 开发人员需要知道的 CSS 技巧](https://lhammer.cn/You-need-to-know-css/#/translucent-borders)

[阮一峰 ES6](https://es6.ruanyifeng.com/#README)

[阮一峰 flex 布局](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 开源项目集合

[Vue3 开源项目集合](https://vue-admin.cn/admin)

[React 开源项目集合](https://react-admin.cn/admin/)

## 工具

[菜鸟工具](https://c.runoob.com/)

[代码生成图片](https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=material&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false)

[JSON-TO-ANY 对象转 ts 类型)](http://xiets.gitee.io/json-to-any-web/)

[在线三角形样式生成器](http://49.234.61.19/tool/cssTriangle)

[iTab](https://go.itab.link/)
