// 这里采用的是按需引入
import Vue from 'vue'
// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'

import {
  Message,
  MessageBox,
  Form,
  FormItem,
  Option,
  Select,
  Input,
  Button
} from 'element-ui'

// 全局注册
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(FormItem)
Vue.use(Form)

// 将Message放到Vue的原型上,后面可通过全局对象直接使用
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm