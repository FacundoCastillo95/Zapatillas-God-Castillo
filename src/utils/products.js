const products = [
    
    {
      id: 30,
      name: "Air Jordan Women",
      stock: 0,
      cost: 29250,
      description: "Jordan Air. Zapatillas de hombres. UNIDAD AIR GRANDE, ONDA LLAMATIVA. Con elementos de diseño inspirados en las Air Jordan 4, las Jordan Air Max 200 traen un nuevo nivel de la unidad Air a Jordan para lograr detalles anclados en el legado y la comodidad hechos para el futuro. La unidad Max 200 Air lleva la amortiguación a un nuevo nivel con más aire bajo los pies. La parte superior de textil y sintético brinda soporte y comodidad livianos y transpirables. El soporte flexible se conecta a las presillas de los cordones para ayudar a asegurar su pie con mayor estabilidad. Más detalles. Tiras de colocación en el talón y la lengüeta. Textil transparentes a los lados.",
      capacity: 1500,
      image: [
        "https://res.cloudinary.com/zapatillas-god/image/upload/v1637073360/air-jordan-og-womens-shoes-4c5d1t_wutjlg.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Basket",
        id: 9
      },
      brand: {
        id: 95,
        name: "Nike Jordan"
      },
      reviews: []
    },
    {
      id: 29,
      name: "Jordan Stay Loyal",
      stock: 100,
      cost: 35000,
      description: "Jordan Air Max 200. Zapatillas de hombres. UNIDAD AIR GRANDE, ONDA LLAMATIVA. Con elementos de diseño inspirados en las Air Jordan 4, las Jordan Air Max 200 traen un nuevo nivel de la unidad Air a Jordan para lograr detalles anclados en el legado y la comodidad hechos para el futuro. La unidad Max 200 Air lleva la amortiguación a un nuevo nivel con más aire bajo los pies. La parte superior de textil y sintético brinda soporte y comodidad livianos y transpirables. El soporte flexible se conecta a las presillas de los cordones para ayudar a asegurar su pie con mayor estabilidad. Más detalles. Tiras de colocación en el talón y la lengüeta. Textil transparentes a los lados.",
      capacity: 1500,
      image: [
        "https://res.cloudinary.com/zapatillas-god/image/upload/v1637073352/jordan-stay-loyal-shoes-jDJnlP_aruncm.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Basket",
        id: 9
      },
      brand: {
        id: 95,
        name: "Nike Jordan"
      },
      reviews: [
        {
          "comment": "Muy comodas",
          "rating": "4"
        }
      ]
    },
    {
      id: 76,
      name: "Jordan 90 Green",
      stock: 92,
      cost: 48500,
      description: "Jordan Air Max 200. Zapatillas de hombres. UNIDAD AIR GRANDE, ONDA LLAMATIVA. Con elementos de diseño inspirados en las Air Jordan 4, las Jordan Air Max 200 traen un nuevo nivel de la unidad Air a Jordan para lograr detalles anclados en el legado y la comodidad hechos para el futuro. La unidad Max 200 Air lleva la amortiguación a un nuevo nivel con más aire bajo los pies. La parte superior de textil y sintético brinda soporte y comodidad livianos y transpirables. El soporte flexible se conecta a las presillas de los cordones para ayudar a asegurar su pie con mayor estabilidad. Más detalles. Tiras de colocación en el talón y la lengüeta. Textil transparentes a los lados. .",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/zapatillas-god/image/upload/v1637089728/wmns-air-jordan-1-mid-se-dutch-green-CZ0774-300_1_qgzprh_1800x1800_t9cqzr.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 5,
      brandId: 10,
      packingId: null,
      category: {
        name: "Classic",
        id: 1
      },
      brand: {
        id: 10,
        name: "Nike Jordan"
      },
      reviews: []
    },
    {
      id: 170,
      name: "Air Monarch IV",
      stock: 100,
      cost: 46950,
      description: "Jordan Air Max 200. Zapatillas de hombres. UNIDAD AIR GRANDE, ONDA LLAMATIVA. Con elementos de diseño inspirados en las Air Jordan 4, las Jordan Air Max 200 traen un nuevo nivel de la unidad Air a Jordan para lograr detalles anclados en el legado y la comodidad hechos para el futuro. La unidad Max 200 Air lleva la amortiguación a un nuevo nivel con más aire bajo los pies. La parte superior de textil y sintético brinda soporte y comodidad livianos y transpirables. El soporte flexible se conecta a las presillas de los cordones para ayudar a asegurar su pie con mayor estabilidad. Más detalles. Tiras de colocación en el talón y la lengüeta. Textil transparentes a los lados.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/zapatillas-god/image/upload/v1637073272/air-monarch-iv-mens-training-shoes-lPtRrS_liw7sh.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Casual",
        id: 1
      },
      brand: {
        id: 10,
        name: "Nike"
      },
      reviews: []
    },
    {
      id: 233,
      name: "Nike Court Legacy",
      stock: 100,
      cost: 25800,
      description: "Jordan Air Max 200. Zapatillas de hombres. UNIDAD AIR GRANDE, ONDA LLAMATIVA. Con elementos de diseño inspirados en las Air Jordan 4, las Jordan Air Max 200 traen un nuevo nivel de la unidad Air a Jordan para lograr detalles anclados en el legado y la comodidad hechos para el futuro. La unidad Max 200 Air lleva la amortiguación a un nuevo nivel con más aire bajo los pies. La parte superior de textil y sintético brinda soporte y comodidad livianos y transpirables. El soporte flexible se conecta a las presillas de los cordones para ayudar a asegurar su pie con mayor estabilidad. Más detalles. Tiras de colocación en el talón y la lengüeta. Textil transparentes a los lados.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/zapatillas-god/image/upload/v1637073267/court-legacy-serena-design-crew-womens-shoes-8vF9T8_rqmbgy.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.031Z",
      categoryId: 5,
      brandId: 10,
      packingId: null,
      category: {
        name: "Classic",
        id: 1
      },
      brand: {
        id: 10,
        name: "Nike Classic"
      },
      reviews: []
    },
    {
      id: 139,
      name: "Nike Team",
      stock: 100,
      cost: 37500,
      description: "Jordan Air Max 200. Zapatillas de hombres. UNIDAD AIR GRANDE, ONDA LLAMATIVA. Con elementos de diseño inspirados en las Air Jordan 4, las Jordan Air Max 200 traen un nuevo nivel de la unidad Air a Jordan para lograr detalles anclados en el legado y la comodidad hechos para el futuro. La unidad Max 200 Air lleva la amortiguación a un nuevo nivel con más aire bajo los pies. La parte superior de textil y sintético brinda soporte y comodidad livianos y transpirables. El soporte flexible se conecta a las presillas de los cordones para ayudar a asegurar su pie con mayor estabilidad. Más detalles. Tiras de colocación en el talón y la lengüeta. Textil transparentes a los lados.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/zapatillas-god/image/upload/v1637073263/pg-5-team-basketball-shoes-pNPfKx_iqkfui.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Casual",
        id: 1
      },
      brand: {
        id: 16,
        name: "Nike"
      },
      reviews: []
    },
    {
      id: 68,
      name: "Nike DA13",
      stock: 89,
      cost: 49000,
      description: "Jordan Air Max 200. Zapatillas de hombres. UNIDAD AIR GRANDE, ONDA LLAMATIVA. Con elementos de diseño inspirados en las Air Jordan 4, las Jordan Air Max 200 traen un nuevo nivel de la unidad Air a Jordan para lograr detalles anclados en el legado y la comodidad hechos para el futuro. La unidad Max 200 Air lleva la amortiguación a un nuevo nivel con más aire bajo los pies. La parte superior de textil y sintético brinda soporte y comodidad livianos y transpirables. El soporte flexible se conecta a las presillas de los cordones para ayudar a asegurar su pie con mayor estabilidad. Más detalles. Tiras de colocación en el talón y la lengüeta. Textil transparentes a los lados.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/zapatillas-god/image/upload/v1637073260/DA1352_003_gmlzgy.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Casual",
        id: 1
      },
      brand: {
        id: 16,
        name: "Nike"
      },
      reviews: []
    },
    {
      id: 222,
      name: "Air Hurache",
      stock: 100,
      cost: 35000,
      description: "Jordan Air Max 200. Zapatillas de hombres. UNIDAD AIR GRANDE, ONDA LLAMATIVA. Con elementos de diseño inspirados en las Air Jordan 4, las Jordan Air Max 200 traen un nuevo nivel de la unidad Air a Jordan para lograr detalles anclados en el legado y la comodidad hechos para el futuro. La unidad Max 200 Air lleva la amortiguación a un nuevo nivel con más aire bajo los pies. La parte superior de textil y sintético brinda soporte y comodidad livianos y transpirables. El soporte flexible se conecta a las presillas de los cordones para ayudar a asegurar su pie con mayor estabilidad. Más detalles. Tiras de colocación en el talón y la lengüeta. Textil transparentes a los lados.",
      capacity: 375,
      image: [
        "https://res.cloudinary.com/zapatillas-god/image/upload/v1637073258/air-huarache-mens-shoes-JppwBb_wd1jzr.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Casual",
        id: 1
      },
      brand: {
        id: 16,
        name: "Nike"
      },
      reviews: []
    },
    {
      id: 135,
      name: "Auto Max",
      stock: 100,
      cost: 42000,
      description: "Jordan Air Max 200. Zapatillas de hombres. UNIDAD AIR GRANDE, ONDA LLAMATIVA. Con elementos de diseño inspirados en las Air Jordan 4, las Jordan Air Max 200 traen un nuevo nivel de la unidad Air a Jordan para lograr detalles anclados en el legado y la comodidad hechos para el futuro. La unidad Max 200 Air lleva la amortiguación a un nuevo nivel con más aire bajo los pies. La parte superior de textil y sintético brinda soporte y comodidad livianos y transpirables. El soporte flexible se conecta a las presillas de los cordones para ayudar a asegurar su pie con mayor estabilidad. Más detalles. Tiras de colocación en el talón y la lengüeta. Textil transparentes a los lados.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/zapatillas-god/image/upload/v1637073258/adapt-auto-max-mens-shoes-LQF7vj_qqtp0n.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Casual",
        id: 1
      },
      brand: {
        id: 16,
        name: "Nike"
      },
      reviews: []
    },
    {
      id: 31,
      name: "Air Jordan 1",
      stock: 100,
      cost: 29500,
      description: "Jordan Air Max 200. Zapatillas de hombres. UNIDAD AIR GRANDE, ONDA LLAMATIVA. Con elementos de diseño inspirados en las Air Jordan 4, las Jordan Air Max 200 traen un nuevo nivel de la unidad Air a Jordan para lograr detalles anclados en el legado y la comodidad hechos para el futuro. La unidad Max 200 Air lleva la amortiguación a un nuevo nivel con más aire bajo los pies. La parte superior de textil y sintético brinda soporte y comodidad livianos y transpirables. El soporte flexible se conecta a las presillas de los cordones para ayudar a asegurar su pie con mayor estabilidad. Más detalles. Tiras de colocación en el talón y la lengüeta. Textil transparentes a los lados.",
      capacity: 700,
      image: [
        "https://res.cloudinary.com/zapatillas-god/image/upload/v1637073369/air-jordan-1-retro-high-white-university-blue-555088-134_1_gdxkyn_1800x1800_iwo2re.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 5,
      brandId: 17,
      packingId: null,
      category: {
        name: "Classic",
        id: 5
      },
      brand: {
        id: 17,
        name: "Nike Classic"
      },
      reviews: []
    }
  ];

  module.exports = {
    products,
  }