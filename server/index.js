const Koa = require('koa')
const app = new Koa()
const { normal }  = require('./tpl')
app.use(async (ctx,next) => {
  ctx.type = 'text/html;charset=utf-8'
  ctx.body = normal
}).listen(3000)


class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  setState() {
    this.state = {
      name : "dongfang"
    }
  }
}