const productos = [
  {
    id: "1",
    category: "1",
    title: "nombre1",
    description: "desc1",
    price: 150,
    stock: 6,
    pictureUrl: "baul-givi-37-lts-trekker-lateral-obkn37bl-izquierdo-negro.jpg"
  },
  {
    id: "2",
    category: "1",
    title: "nombre2",
    description: "desc2",
    price: 220,
    stock: 22,
    pictureUrl: "caja-delivery-pizzera-reforzada-negra-con-ojo-de-gato-vc.jpg"
  },
  {
    id: "3",
    category: "1",
    title: "nombre3",
    description: "desc3",
    price: 80,
    stock: 11,
    pictureUrl: "cubierta-metzeler-feelfree-110-70-16.jpg"
  },
  {
    id: "4",
    category: "2",
    title: "nombre4",
    description: "desc4",
    price: 450,
    stock: 8,
    pictureUrl: "cubierta-pirelli-diablo-scooter-90-90-14.jpg"
  },
  {
    id: "5",
    category: "2",
    title: "nombre5",
    description: "desc5",
    price: 800,
    stock: 38,
    pictureUrl: "traba-disco-kovix-con-alarma-verde-perno-6mm-.jpg"
  }
];

async function getItem(id)  {
    let promise = new Promise((resolve, reject) => {
        console.log("Cargando detalle de item con id: ", id)
        setTimeout(() => {
          let item = productos.filter(prod => prod.id === id).pop()
            resolve(item);
        }, 2000);
    })

    let result = {};

    try {
        result = await promise;
    } catch (error) {
        console.log("Ocurrio un error al buscar el item")
    }

    return result;
}

export default getItem;