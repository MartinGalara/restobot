const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const JsonFileAdapter = require('@bot-whatsapp/database/json')

const flujoAgregar = require("./components/flujoAgregar.js")
const flujoCarta = require("./components/flujoCarta.js")
const flujoCuenta = require("./components/flujoCuenta.js")
const flujoMozo = require("./components/flujoMozo.js")
const flujoPedido = require("./components/flujoPedido.js")

const {deletePedidosData} = require("./components/auxPedidos.js")

const flowPrincipal = addKeyword(['menu'])
    .addAnswer('Hola bienvenido a RestoBot')
    .addAnswer(
        [
            'Elija la opcion deseada',
            '1. Ver la carta',
            '2. Realizar un pedido',
            '3. Agregar algo a un pedido',
            '4. Llamar al mozo',
            '5. Pedir la cuenta',
            '6. Salir'
        ],
        {
            capture:true
        },
        async (ctx, {flowDynamic,endFlow}) => {

            deletePedidosData(ctx.from)
            
            if(ctx.body === "6"){
                await flowDynamic(['Gracias por utilizar este servicio','Escriba Menu para volver a comenzar'])
                return endFlow()
            }
        
        },
        [flujoCarta,flujoPedido,flujoAgregar,flujoMozo,flujoCuenta]
    )

const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
