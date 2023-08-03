let pedidos = {}

const addProps = (from,props) => {
    if(pedidos.hasOwnProperty(from)){
      Object.assign(pedidos[from], props);
    }
    else{
        pedidos[from] = {}
      Object.assign(pedidos[from], props);
    }
  }

const deletePedidosData = (from) => {
    pedidos[from] = {}
  }

const getProp = (from,prop) => {
    console.log(pedidos)
    return pedidos[from][prop]
}

const enviarPedido = async (from,provider) => {

    const pedido = pedidos[from];
    const { mesa, comensales, ...comidasYBebidas } = pedido;

let pedidoString = `Nuevo Pedido\n\nMesa: ${mesa}\nComensales: ${comensales}`;

  for (const [key, value] of Object.entries(comidasYBebidas)) {
    if (key.includes("comida")) {
      const comensalNum = key.slice(-1);
      pedidoString += `\nComida Comensal N° ${comensalNum}: ${value}`;
    } else if (key.includes("bebida")) {
      const comensalNum = key.slice(-1);
      pedidoString += `\nBebida Comensal N° ${comensalNum}: ${value}`;
    }
  }

  const prov = provider.getInstance()

  const telefono = from + '@s.whatsapp.net'
  await prov.sendMessage(telefono,{text: "Pedido realizado! Si necesita agregar algo al pedido o solicitar algo mas adelante lo puede realizar en la Opcion 3 del Menu Inicial"})
  await prov.sendMessage(telefono,{text: "Les dejo un detalle de su pedido"})
  await prov.sendMessage(telefono,{text: pedidoString})
  await prov.sendMessage(telefono,{text: "Escriba Menu para volver a comenzar"})

}

const agregarItems = async (from,provider) => {

const pedido = pedidos[from];
const { mesa, agregar } = pedido;

let agregarString = `Agregar a pedido\n\nMesa: ${mesa}\nAgregar: ${agregar}`;

const prov = provider.getInstance()

  const telefono = from + '@s.whatsapp.net'
  await prov.sendMessage(telefono,{text: "A la brevedad el mozo llevara los productos a la mesa. Muchas gracias."})
  await prov.sendMessage(telefono,{text: agregarString})
  await prov.sendMessage(telefono,{text: "Escriba Menu para volver a comenzar"})

}

module.exports = {addProps,deletePedidosData,getProp,enviarPedido,agregarItems}