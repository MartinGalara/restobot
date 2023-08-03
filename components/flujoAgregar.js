const { addKeyword } = require('@bot-whatsapp/bot')

const {agregarItems,addProps} = require('./auxPedidos.js')

const flujoAgregar = addKeyword('3')
.addAnswer('Indique su numero de mesa',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{mesa: ctx.body})
})
.addAnswer('En un solo mensaje, indique que desea agregar a su mesa',
{
    capture: true
},
async (ctx,{provider}) => {

    addProps(ctx.from,{agregar: ctx.body})
    await agregarItems(ctx.from,provider)

})

module.exports = flujoAgregar