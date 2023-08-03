const { addKeyword } = require('@bot-whatsapp/bot')

const {addProps,getProp,enviarPedido} = require('./auxPedidos.js')

const flujoPedido = addKeyword('2')
.addAnswer('Indique su numero de mesa',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{mesa: ctx.body})
})
.addAnswer('Cuantos comensales son ?',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{comensales: ctx.body})
})
.addAnswer('Que va a comer el comensal N° 1 ?',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{comida1: ctx.body})

})
.addAnswer('Que va a tomar el comensal N° 1 ?',
{
    capture: true
},
async (ctx,{endFlow,provider}) => {

    addProps(ctx.from,{bebida1: ctx.body})
    const comensales = getProp(ctx.from,'comensales')
    if(comensales === "1"){
        await enviarPedido(ctx.from,provider)
        return endFlow()
    }
})
.addAnswer('Que va a comer el comensal N° 2 ?',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{comida2: ctx.body})
})
.addAnswer('Que va a tomar el comensal N° 2 ?',
{
    capture: true
},
async (ctx,{endFlow,provider}) => {

    addProps(ctx.from,{bebida2: ctx.body})
    const comensales = getProp(ctx.from,'comensales')
    if(comensales === "2"){
        await enviarPedido(ctx.from,provider)
        return endFlow()
    }
})
.addAnswer('Que va a comer el comensal N° 3 ?',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{comida3: ctx.body})
})
.addAnswer('Que va a tomar el comensal N° 3 ?',
{
    capture: true
},
async (ctx,{endFlow,provider}) => {

    addProps(ctx.from,{bebida3: ctx.body})
    const comensales = getProp(ctx.from,'comensales')
    if(comensales === "3"){
        await enviarPedido(ctx.from,provider)
        return endFlow()
    }
})
.addAnswer('Que va a comer el comensal N° 4 ?',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{comida4: ctx.body})
})
.addAnswer('Que va a tomar el comensal N° 4 ?',
{
    capture: true
},
async (ctx,{endFlow,provider}) => {

    addProps(ctx.from,{bebida4: ctx.body})
    const comensales = getProp(ctx.from,'comensales')
    if(comensales === "4"){
        await enviarPedido(ctx.from,provider)
        return endFlow()
    }
})
.addAnswer('Que va a comer el comensal N° 5 ?',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{comida5: ctx.body})
})
.addAnswer('Que va a tomar el comensal N° 5 ?',
{
    capture: true
},
async (ctx,{endFlow,provider}) => {

    addProps(ctx.from,{bebida5: ctx.body})
    const comensales = getProp(ctx.from,'comensales')
    if(comensales === "5"){
        await enviarPedido(ctx.from,provider)
        return endFlow()
    }
})
.addAnswer('Que va a comer el comensal N° 6 ?',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{comida6: ctx.body})
})
.addAnswer('Que va a tomar el comensal N° 6 ?',
{
    capture: true
},
async (ctx,{endFlow,provider}) => {

    addProps(ctx.from,{bebida6: ctx.body})
    const comensales = getProp(ctx.from,'comensales')
    if(comensales === "6"){
        await enviarPedido(ctx.from,provider)
        return endFlow()
    }
})
.addAnswer('Que va a comer el comensal N° 7 ?',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{comida7: ctx.body})
})
.addAnswer('Que va a tomar el comensal N° 7 ?',
{
    capture: true
},
async (ctx,{endFlow,provider}) => {

    addProps(ctx.from,{bebida7: ctx.body})
    const comensales = getProp(ctx.from,'comensales')
    if(comensales === "7"){
        await enviarPedido(ctx.from,provider)
        return endFlow()
    }
})
.addAnswer('Que va a comer el comensal N° 8 ?',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{comida8: ctx.body})
})
.addAnswer('Que va a tomar el comensal N° 8 ?',
{
    capture: true
},
async (ctx,{endFlow,provider}) => {

    addProps(ctx.from,{bebida8: ctx.body})
    const comensales = getProp(ctx.from,'comensales')
    if(comensales === "8"){
        await enviarPedido(ctx.from,provider)
        return endFlow()
    }
})
.addAnswer('Que va a comer el comensal N° 9 ?',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{comida9: ctx.body})
})
.addAnswer('Que va a tomar el comensal N° 9 ?',
{
    capture: true
},
async (ctx,{endFlow,provider}) => {

    addProps(ctx.from,{bebida9: ctx.body})
    const comensales = getProp(ctx.from,'comensales')
    if(comensales === "9"){
        await enviarPedido(ctx.from,provider)
        return endFlow()
    }
})
.addAnswer('Que va a comer el comensal N° 10 ?',
{
    capture: true
},
(ctx) => {

    addProps(ctx.from,{comida10: ctx.body})
})
.addAnswer('Que va a tomar el comensal N° 10 ?',
{
    capture: true
},
async (ctx,{endFlow,provider}) => {

    addProps(ctx.from,{bebida10: ctx.body})
    const comensales = getProp(ctx.from,'comensales')
    if(comensales === "10"){
        await enviarPedido(ctx.from,provider)
        return endFlow()
    }
})



module.exports = flujoPedido