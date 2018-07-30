import Vue from 'vue'

const path = require('path')

export default (ctx, inject) => {
  // injetar variaveis dentro de $root
  // inject('testVar', 'valor da variável')

  // imprimir options dentro de template
  // console.log('<%= options.ua %>')

  ctx.app.router.onReady((...any) => {
    // console.log(ctx.app.router.options.routes.map(item => item.name))
    // console.log('router ready...')
  })
}
