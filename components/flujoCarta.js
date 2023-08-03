const { addKeyword } = require('@bot-whatsapp/bot')

const flujoCarta = addKeyword('1')
.addAnswer('Aca te dejo la carta',
{
    media:"https://enlacocina.b-cdn.net/wp-content/uploads/2021/02/carta2.jpg"
}   
)
.addAnswer('Escribe menu para volver a comenzar y realizar el pedido')

module.exports = flujoCarta