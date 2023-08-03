const { addKeyword } = require('@bot-whatsapp/bot')

const flujoMozo = addKeyword('4')
.addAnswer('En que mesa se encuentra',
{
    capture: true
},
async (ctx,{provider}) => {

    const prov = provider.getInstance()

    const telefono = ctx.from + '@s.whatsapp.net'
    await prov.sendMessage(telefono,{text: "El mozo ya fue notificado, a la brevedad se acercara a la mesa"})
    await prov.sendMessage(telefono,{text: `MENSAJE AL DUEÑO DEL RESTO: La mesa ${ctx.body} solicita que un mozo se acerque`})
    await prov.sendMessage(telefono,{text: "Escriba Menu para volver a comenzar"})
})

module.exports = flujoMozo