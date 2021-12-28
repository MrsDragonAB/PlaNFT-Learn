import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import {
    Upload,
  Button,
  Row,
  Col,
  Form,
  FormItem,
  Input,
  Message,
  MessageBox,
  Notification,
  Dialog,
  Select,
  Radio,
  RadioGroup,
  Table,
  TableColumn,
  Option,
  Loading,
  Slider,
  Tooltip,
  InputNumber,
  Pagination,
  DatePicker,
  Alert,
  Tabs,
  TabPane,
  Card,
  Menu,
  Submenu,
  MenuItem,
  Switch,
  Image
} from 'element-ui'

Message.install = () => {
    Vue.prototype.$message = Message
  }
  MessageBox.install = () => {
    Vue.prototype.$confirm = MessageBox.confirm
  }
  Notification.install = () => {
    Vue.prototype.$notify = Notification
  }

  locale.use(lang)

Vue.use(Upload)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Message)
Vue.use(MessageBox)
Vue.use(Notification)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading)
Vue.use(Slider)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(DatePicker)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Switch)
Vue.use(Image)