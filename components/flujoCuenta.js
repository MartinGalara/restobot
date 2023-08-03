const { addKeyword } = require('@bot-whatsapp/bot')

const flujoCuenta = addKeyword('5')
.addAnswer('En que mesa se encuentra',
{
    capture: true
},
async (ctx,{provider}) => {

    const prov = provider.getInstance()

    const telefono = ctx.from + '@s.whatsapp.net'
    await prov.sendMessage(telefono,{text: "El mozo ya fue notificado, a la brevedad le llevara la cuenta a la mesa"})
    await prov.sendMessage(telefono,{text: `MENSAJE AL DUEÑO DEL RESTO: La mesa ${ctx.body} solicito la cuenta`})
    await prov.sendMessage(telefono,{text: "Escriba Menu para volver a comenzar"})
})

module.exports = flujoCuenta