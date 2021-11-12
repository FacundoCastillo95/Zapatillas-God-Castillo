

export const products = [
    {
      id: 0,
      name: "Air 3 retro",
      img: ["/img/air3.jpg"],
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

let is_ok = true;

let getDatos = () => {
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(products)
            }, 3000)
        } else {
            reject("Error")
        }
    })
}

let fetchingData = async () => {
    try {
        const result = await getDatos();
        console.log(result);
    } catch(err) {
        console.log(err)
    }
}

fetchingData();