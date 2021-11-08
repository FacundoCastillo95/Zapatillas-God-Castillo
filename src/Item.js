

const products = [
    {
      id: 0,
      name: "Air 3 retro",
      img: "img/air-3-retro.jpg",
      stock: 86,
      price: 45000,
    },
    {
      id: 1,
      name: "Air 7 retro",
      img: "img/air-7-retro.jpg",
      stock: 100,
      price: 25000,
    },
    {
      id: 2,
      name: "Jordan",
      img: "img/botitas-jordan-2.jpg",
      stock: 92,
      price: 35000,
    }
]

let is_stock = true;

let Item = () => {
    return new Promise((resolve, reject) => {
        if (is_stock) {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        } else {
            reject("Error")
        }
    })
}


Item(0, console.log("Procesando Item..."))
.then(()=>Item(console.log(products[0]))
.then(()=>Item(console.log(products[1])))
.then(()=>Item(console.log(products[2])))
.catch((err)=>console.log(err))
.finally(()=>console.log("Se proceso el Item")));

export default Item; 