const { addKeyword } = require('@bot-whatsapp/bot')

const {agregarItems,addProps,esNumeroPositivo} = require('./auxPedidos.js')

const flujoAgregar = addKeyword('3')
.addAnswer('Indique su numero de mesa',
{
    capture: true
},
async (ctx,{fallBack,provider}) => {

    const bool = esNumeroPositivo(ctx.body)
    if(bool){
        addProps(ctx.from,{mesa: ctx.body})
    }
    else{
        const prov = provider.getInstance()
        const telefono = ctx.from + '@s.whatsapp.net'
        await prov.sendMessage(telefono,{text: "Esta opcion solo admite numeros"})
        fallBack()
    }

    
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