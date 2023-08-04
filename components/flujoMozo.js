const { addKeyword } = require('@bot-whatsapp/bot')

const {esNumeroPositivo} = require('./auxPedidos.js')

const flujoMozo = addKeyword('4')
.addAnswer('Indique su numero de mesa',
{
    capture: true
},
async (ctx,{fallBack,provider}) => {

    const prov = provider.getInstance()

    const telefono = ctx.from + '@s.whatsapp.net'

    const bool = esNumeroPositivo(ctx.body)
    if(bool){
        await prov.sendMessage(telefono,{text: "El mozo ya fue notificado, a la brevedad se acercara a la mesa"})
        await prov.sendMessage(telefono,{text: `MENSAJE AL DUEÑO: La mesa ${ctx.body} solicita que un mozo se acerque`})
        await prov.sendMessage(telefono,{text: "Escriba Menu para volver a comenzar"})
    }
    else{
        await prov.sendMessage(telefono,{text: "Esta opcion solo admite numeros"})
        fallBack()
    }

   
})

module.exports = flujoMozo