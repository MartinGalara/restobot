const { addKeyword } = require('@bot-whatsapp/bot')

const {esNumeroPositivo} = require('./auxPedidos.js')

const flujoCuenta = addKeyword('5')
.addAnswer('Indique su numero de mesa',
{
    capture: true
},
async (ctx,{fallBack,provider}) => {

    const prov = provider.getInstance()

    const telefono = ctx.from + '@s.whatsapp.net'

    const bool = esNumeroPositivo(ctx.body)
    if(bool){
        await prov.sendMessage(telefono,{text: "El mozo ya fue notificado, a la brevedad le llevara la cuenta a la mesa"})
    await prov.sendMessage(telefono,{text: `MENSAJE AL DUEÑO: La mesa ${ctx.body} solicito la cuenta`})
    await prov.sendMessage(telefono,{text: "Escriba Menu para volver a comenzar"})
    }
    else{
        await prov.sendMessage(telefono,{text: "Esta opcion solo admite numeros"})
        fallBack()
    }

})

module.exports = flujoCuenta