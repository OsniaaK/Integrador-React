// Utilidad para quitar tildes y pasar a minúsculas
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const products = [
  // Ropa
  {
    id: 1,
    title: "Camisa",
    price: 20,
    description: "Camisa de algodón suave y transpirable, ideal para el uso diario o para ocasiones casuales. Su corte clásico y su tejido ligero la convierten en una prenda versátil que combina fácilmente con pantalones o jeans.",
    image: "/assets/Products/test.webp",
    sku: "ROP-001",
    category: "Ropa",
    discount: 20,
    search: normalizeText("Camisa de algodón suave y transpirable, ideal para el uso diario o para ocasiones casuales. Su corte clásico y su tejido ligero la convierten en una prenda versátil que combina fácilmente con pantalones o jeans."),
  },
  {
    id: 2,
    title: "Pantalón",
    price: 30,
    description: "Pantalón de mezclilla resistente, diseñado para brindar comodidad y durabilidad. Perfecto para el día a día, su estilo moderno y ajuste relajado lo hacen adecuado para cualquier ocasión informal.",
    image: "/assets/Products/test.webp",
    sku: "ROP-002",
    category: "Ropa",
    discount: false,
    search: normalizeText("Pantalón de mezclilla resistente, diseñado para brindar comodidad y durabilidad. Perfecto para el día a día, su estilo moderno y ajuste relajado lo hacen adecuado para cualquier ocasión informal."),
  },
  {
    id: 3,
    title: "Chaqueta",
    price: 50,
    description: "Chaqueta de cuero genuino con forro interior, ideal para protegerte del frío con estilo. Su diseño atemporal y detalles cuidadosamente elaborados la convierten en una prenda imprescindible en cualquier guardarropa.",
    image: "/assets/Products/test.webp",
    sku: "ROP-003",
    category: "Ropa",
    discount: 35,
    search: normalizeText("Chaqueta de cuero genuino con forro interior, ideal para protegerte del frío con estilo. Su diseño atemporal y detalles cuidadosamente elaborados la convierten en una prenda imprescindible en cualquier guardarropa."),
  },
  {
    id: 4,
    title: "Camiseta",
    price: 15,
    description: "Camiseta de algodón 100% con costuras reforzadas, perfecta para actividades deportivas o para vestir de manera relajada. Disponible en varios colores para combinar con cualquier look.",
    image: "/assets/Products/test.webp",
    sku: "ROP-004",
    category: "Ropa",
    discount: false,
    search: normalizeText("Camiseta de algodón 100% con costuras reforzadas, perfecta para actividades deportivas o para vestir de manera relajada. Disponible en varios colores para combinar con cualquier look."),
  },
  {
    id: 5,
    title: "Vestido",
    price: 40,
    description: "Vestido de verano confeccionado en tela ligera y fresca, con un diseño elegante y femenino. Ideal para eventos al aire libre, paseos o reuniones informales durante los días cálidos.",
    image: "/assets/Products/test.webp",
    sku: "ROP-005",
    category: "Ropa",
    discount: 10,
    search: normalizeText("Vestido de verano confeccionado en tela ligera y fresca, con un diseño elegante y femenino. Ideal para eventos al aire libre, paseos o reuniones informales durante los días cálidos."),
  },
  {
    id: 6,
    title: "Falda",
    price: 25,
    description: "Falda plisada de corte midi, fabricada en materiales suaves que ofrecen movimiento y comodidad. Su estilo clásico la hace perfecta para combinar con blusas o camisetas en cualquier estación.",
    image: "/assets/Products/test.webp",
    sku: "ROP-006",
    category: "Ropa",
    discount: false,
    search: normalizeText("Falda plisada de corte midi, fabricada en materiales suaves que ofrecen movimiento y comodidad. Su estilo clásico la hace perfecta para combinar con blusas o camisetas en cualquier estación."),
  },
  {
    id: 7,
    title: "Suéter",
    price: 35,
    description: "Suéter de lana cálida y suave, ideal para los días fríos. Su diseño sencillo y elegante permite usarlo tanto en ambientes formales como informales, brindando confort y estilo.",
    image: "/assets/Products/test.webp",
    sku: "ROP-007",
    category: "Ropa",
    discount: 15,
    search: normalizeText("Suéter de lana cálida y suave, ideal para los días fríos. Su diseño sencillo y elegante permite usarlo tanto en ambientes formales como informales, brindando confort y estilo."),
  },
  {
    id: 8,
    title: "Blusa",
    price: 22,
    description: "Blusa de seda con acabado brillante, perfecta para ocasiones especiales o para dar un toque sofisticado a tu atuendo diario. Su corte favorecedor realza la figura y aporta elegancia.",
    image: "/assets/Products/test.webp",
    sku: "ROP-008",
    category: "Ropa",
    discount: false,
    search: normalizeText("Blusa de seda con acabado brillante, perfecta para ocasiones especiales o para dar un toque sofisticado a tu atuendo diario. Su corte favorecedor realza la figura y aporta elegancia."),
  },
  {
    id: 9,
    title: "Short",
    price: 18,
    description: "Short de algodón ligero, ideal para actividades al aire libre o para relajarse en casa. Su diseño cómodo y fresco lo convierte en una prenda esencial para el verano.",
    image: "/assets/Products/test.webp",
    sku: "ROP-009",
    category: "Ropa",
    discount: 25,
    search: normalizeText("Short de algodón ligero, ideal para actividades al aire libre o para relajarse en casa. Su diseño cómodo y fresco lo convierte en una prenda esencial para el verano."),
  },
  {
    id: 10,
    title: "Chaleco",
    price: 28,
    description: "Chaleco de mezclilla con bolsillos funcionales, perfecto para complementar cualquier atuendo casual. Su estilo versátil permite usarlo sobre camisetas, camisas o vestidos.",
    image: "/assets/Products/test.webp",
    sku: "ROP-010",
    category: "Ropa",
    discount: false,
    search: normalizeText("Chaleco de mezclilla con bolsillos funcionales, perfecto para complementar cualquier atuendo casual. Su estilo versátil permite usarlo sobre camisetas, camisas o vestidos."),
  },

  // Calzado
  {
    id: 11,
    title: "Zapatos",
    price: 70,
    description: "Zapatos de cuero genuino con suela antideslizante, diseñados para ofrecer elegancia y comodidad durante todo el día. Ideales para ocasiones formales o para el trabajo.",
    image: "/assets/Products/test.webp",
    sku: "CAL-001",
    category: "Calzado",
    discount: 30,
    search: normalizeText("Zapatos de cuero genuino con suela antideslizante, diseñados para ofrecer elegancia y comodidad durante todo el día. Ideales para ocasiones formales o para el trabajo."),
  },
  {
    id: 12,
    title: "Zapatillas",
    price: 60,
    description: "Zapatillas deportivas con tecnología de amortiguación, perfectas para correr, entrenar o caminar largas distancias. Su diseño moderno y ligero brinda soporte y estilo.",
    image: "/assets/Products/test.webp",
    sku: "CAL-002",
    category: "Calzado",
    discount: false,
    search: normalizeText("Zapatillas deportivas con tecnología de amortiguación, perfectas para correr, entrenar o caminar largas distancias. Su diseño moderno y ligero brinda soporte y estilo."),
  },
  {
    id: 13,
    title: "Botas",
    price: 90,
    description: "Botas de montaña resistentes al agua, ideales para excursiones y actividades al aire libre. Su suela robusta y su interior acolchado garantizan protección y confort en terrenos difíciles.",
    image: "/assets/Products/test.webp",
    sku: "CAL-003",
    category: "Calzado",
    discount: 50,
    search: normalizeText("Botas de montaña resistentes al agua, ideales para excursiones y actividades al aire libre. Su suela robusta y su interior acolchado garantizan protección y confort en terrenos difíciles."),
  },
  {
    id: 14,
    title: "Sandalias",
    price: 25,
    description: "Sandalias de cuero suave con tiras ajustables, perfectas para los días calurosos. Su plantilla acolchada proporciona comodidad durante largas caminatas.",
    image: "/assets/Products/test.webp",
    sku: "CAL-004",
    category: "Calzado",
    discount: false,
    search: normalizeText("Sandalias de cuero suave con tiras ajustables, perfectas para los días calurosos. Su plantilla acolchada proporciona comodidad durante largas caminatas."),
  },
  {
    id: 15,
    title: "Mocasines",
    price: 55,
    description: "Mocasines elegantes de cuero, ideales para combinar con atuendos formales o casuales. Su diseño clásico y suela flexible aseguran comodidad y estilo en cualquier ocasión.",
    image: "/assets/Products/test.webp",
    sku: "CAL-005",
    category: "Calzado",
    discount: 12,
    search: normalizeText("Mocasines elegantes de cuero, ideales para combinar con atuendos formales o casuales. Su diseño clásico y suela flexible aseguran comodidad y estilo en cualquier ocasión."),
  },
  {
    id: 16,
    title: "Pantuflas",
    price: 20,
    description: "Pantuflas cómodas con forro interior suave, perfectas para mantener los pies abrigados en casa. Su suela antideslizante brinda seguridad en cada paso.",
    image: "/assets/Products/test.webp",
    sku: "CAL-006",
    category: "Calzado",
    discount: false,
    search: normalizeText("Pantuflas cómodas con forro interior suave, perfectas para mantener los pies abrigados en casa. Su suela antideslizante brinda seguridad en cada paso."),
  },
  {
    id: 17,
    title: "Alpargatas",
    price: 18,
    description: "Alpargatas de lona ligeras y transpirables, ideales para el verano. Su diseño tradicional y suela de yute ofrecen frescura y comodidad durante todo el día.",
    image: "/assets/Products/test.webp",
    sku: "CAL-007",
    category: "Calzado",
    discount: 18,
    search: normalizeText("Alpargatas de lona ligeras y transpirables, ideales para el verano. Su diseño tradicional y suela de yute ofrecen frescura y comodidad durante todo el día."),
  },
  {
    id: 18,
    title: "Botines",
    price: 65,
    description: "Botines de cuero con cierre lateral, perfectos para el otoño e invierno. Su diseño moderno y su tacón bajo los hacen cómodos para usar durante largas jornadas.",
    image: "/assets/Products/test.webp",
    sku: "CAL-008",
    category: "Calzado",
    discount: false,
    search: normalizeText("Botines de cuero con cierre lateral, perfectos para el otoño e invierno. Su diseño moderno y su tacón bajo los hacen cómodos para usar durante largas jornadas."),
  },
  {
    id: 19,
    title: "Tenis",
    price: 45,
    description: "Tenis urbanos con diseño ergonómico y materiales transpirables. Ideales para el uso diario, ofrecen soporte y comodidad en cada paso.",
    image: "/assets/Products/test.webp",
    sku: "CAL-009",
    category: "Calzado",
    discount: 22,
    search: normalizeText("Tenis urbanos con diseño ergonómico y materiales transpirables. Ideales para el uso diario, ofrecen soporte y comodidad en cada paso."),
  },
  {
    id: 20,
    title: "Chanclas",
    price: 12,
    description: "Chanclas de playa ligeras y resistentes al agua, perfectas para la piscina o la playa. Su diseño sencillo y cómodo las hace imprescindibles para el verano.",
    image: "/assets/Products/test.webp",
    sku: "CAL-010",
    category: "Calzado",
    discount: false,
    search: normalizeText("Chanclas de playa ligeras y resistentes al agua, perfectas para la piscina o la playa. Su diseño sencillo y cómodo las hace imprescindibles para el verano."),
  },

  // Accesorios
  {
    id: 21,
    title: "Gorra",
    price: 15,
    description: "Gorra de béisbol ajustable, confeccionada en algodón transpirable. Ideal para protegerte del sol durante actividades al aire libre o para complementar tu look urbano.",
    image: "/assets/Products/test.webp",
    sku: "ACC-001",
    category: "Accesorios",
    discount: 40,
    search: normalizeText("Gorra de béisbol ajustable, confeccionada en algodón transpirable. Ideal para protegerte del sol durante actividades al aire libre o para complementar tu look urbano."),
  },
  {
    id: 22,
    title: "Bufanda",
    price: 10,
    description: "Bufanda de lana suave y cálida, perfecta para los días fríos. Su diseño clásico y colores neutros la hacen fácil de combinar con cualquier abrigo o chaqueta.",
    image: "/assets/Products/test.webp",
    sku: "ACC-002",
    category: "Accesorios",
    discount: false,
    search: normalizeText("Bufanda de lana suave y cálida, perfecta para los días fríos. Su diseño clásico y colores neutros la hacen fácil de combinar con cualquier abrigo o chaqueta."),
  },
  {
    id: 23,
    title: "Cinturón",
    price: 25,
    description: "Cinturón de cuero genuino con hebilla metálica, ideal para pantalones formales o casuales. Su acabado elegante y resistente garantiza una larga durabilidad.",
    image: "/assets/Products/test.webp",
    sku: "ACC-003",
    category: "Accesorios",
    discount: 15,
    search: normalizeText("Cinturón de cuero genuino con hebilla metálica, ideal para pantalones formales o casuales. Su acabado elegante y resistente garantiza una larga durabilidad."),
  },
  {
    id: 24,
    title: "Calcetines",
    price: 5,
    description: "Calcetines de algodón suave y elástico, diseñados para brindar comodidad durante todo el día. Ideales para el uso diario, mantienen los pies frescos y secos.",
    image: "/assets/Products/test.webp",
    sku: "ACC-004",
    category: "Accesorios",
    discount: false,
    search: normalizeText("Calcetines de algodón suave y elástico, diseñados para brindar comodidad durante todo el día. Ideales para el uso diario, mantienen los pies frescos y secos."),
  },
  {
    id: 25,
    title: "Pañuelo",
    price: 8,
    description: "Pañuelo de seda con estampado elegante, perfecto para dar un toque de distinción a tu atuendo. Puede usarse en el cuello, la cabeza o como accesorio para bolsos.",
    image: "/assets/Products/test.webp",
    sku: "ACC-005",
    category: "Accesorios",
    discount: 10,
    search: normalizeText("Pañuelo de seda con estampado elegante, perfecto para dar un toque de distinción a tu atuendo. Puede usarse en el cuello, la cabeza o como accesorio para bolsos."),
  },
  {
    id: 26,
    title: "Reloj",
    price: 120,
    description: "Reloj de pulsera con correa de cuero y esfera minimalista. Un accesorio sofisticado que combina funcionalidad y estilo para cualquier ocasión.",
    image: "/assets/Products/test.webp",
    sku: "ACC-006",
    category: "Accesorios",
    discount: false,
    search: normalizeText("Reloj de pulsera con correa de cuero y esfera minimalista. Un accesorio sofisticado que combina funcionalidad y estilo para cualquier ocasión."),
  },
  {
    id: 27,
    title: "Pulsera",
    price: 18,
    description: "Pulsera de cuero trenzado con cierre metálico, ideal para complementar atuendos casuales o formales. Su diseño discreto y elegante la hace un accesorio versátil.",
    image: "/assets/Products/test.webp",
    sku: "ACC-007",
    category: "Accesorios",
    discount: 28,
    search: normalizeText("Pulsera de cuero trenzado con cierre metálico, ideal para complementar atuendos casuales o formales. Su diseño discreto y elegante la hace un accesorio versátil."),
  },
  {
    id: 28,
    title: "Collar",
    price: 30,
    description: "Collar de plata con colgante delicado, perfecto para ocasiones especiales o para el uso diario. Su brillo sutil aporta un toque de elegancia a cualquier look.",
    image: "/assets/Products/test.webp",
    sku: "ACC-008",
    category: "Accesorios",
    discount: false,
    search: normalizeText("Collar de plata con colgante delicado, perfecto para ocasiones especiales o para el uso diario. Su brillo sutil aporta un toque de elegancia a cualquier look."),
  },
  {
    id: 29,
    title: "Anillo",
    price: 22,
    description: "Anillo de acero inoxidable con diseño moderno, resistente al desgaste y al agua. Un accesorio ideal para quienes buscan estilo y durabilidad.",
    image: "/assets/Products/test.webp",
    sku: "ACC-009",
    category: "Accesorios",
    discount: 50,
    search: normalizeText("Anillo de acero inoxidable con diseño moderno, resistente al desgaste y al agua. Un accesorio ideal para quienes buscan estilo y durabilidad."),
  },
  {
    id: 30,
    title: "Lentes de sol",
    price: 35,
    description: "Lentes de sol polarizados con protección UV, ideales para proteger tus ojos y complementar tu estilo en días soleados. Su diseño ligero y moderno se adapta a cualquier rostro.",
    image: "/assets/Products/test.webp",
    sku: "ACC-010",
    category: "Accesorios",
    discount: false,
    search: normalizeText("Lentes de sol polarizados con protección UV, ideales para proteger tus ojos y complementar tu estilo en días soleados. Su diseño ligero y moderno se adapta a cualquier rostro."),
  },

  // Deporte
  {
    id: 31,
    title: "Balón de fútbol",
    price: 25,
    description: "Balón profesional de fútbol fabricado con materiales de alta calidad, diseñado para ofrecer un excelente control y durabilidad en cada partido. Ideal para entrenamientos y competencias.",
    image: "/assets/Products/test.webp",
    sku: "DEP-001",
    category: "Deporte",
    discount: 12,
    search: normalizeText("Balón profesional de fútbol fabricado con materiales de alta calidad, diseñado para ofrecer un excelente control y durabilidad en cada partido. Ideal para entrenamientos y competencias."),
  },
  {
    id: 32,
    title: "Raqueta de tenis",
    price: 60,
    description: "Raqueta de tenis ligera y resistente, con un marco ergonómico que facilita el manejo y mejora el rendimiento en la cancha. Recomendada para jugadores de todos los niveles.",
    image: "/assets/Products/test.webp",
    sku: "DEP-002",
    category: "Deporte",
    discount: false,
    search: normalizeText("Raqueta de tenis ligera y resistente, con un marco ergonómico que facilita el manejo y mejora el rendimiento en la cancha. Recomendada para jugadores de todos los niveles."),
  },
  {
    id: 33,
    title: "Guantes de boxeo",
    price: 40,
    description: "Guantes de boxeo profesionales con acolchado extra para máxima protección. Fabricados en materiales resistentes, ideales para entrenamientos intensos y competencias.",
    image: "/assets/Products/test.webp",
    sku: "DEP-003",
    category: "Deporte",
    discount: 25,
    search: normalizeText("Guantes de boxeo profesionales con acolchado extra para máxima protección. Fabricados en materiales resistentes, ideales para entrenamientos intensos y competencias."),
  },
  {
    id: 34,
    title: "Camiseta deportiva",
    price: 20,
    description: "Camiseta transpirable de secado rápido, diseñada para mantenerte fresco y cómodo durante la actividad física. Su tejido elástico permite total libertad de movimiento.",
    image: "/assets/Products/test.webp",
    sku: "DEP-004",
    category: "Deporte",
    discount: false,
    search: normalizeText("Camiseta transpirable de secado rápido, diseñada para mantenerte fresco y cómodo durante la actividad física. Su tejido elástico permite total libertad de movimiento."),
  },
  {
    id: 35,
    title: "Short deportivo",
    price: 18,
    description: "Short para correr confeccionado en materiales ligeros y transpirables. Su diseño ergonómico y cintura ajustable ofrecen comodidad y soporte durante el ejercicio.",
    image: "/assets/Products/test.webp",
    sku: "DEP-005",
    category: "Deporte",
    discount: 10,
    search: normalizeText("Short para correr confeccionado en materiales ligeros y transpirables. Su diseño ergonómico y cintura ajustable ofrecen comodidad y soporte durante el ejercicio."),
  },
  {
    id: 36,
    title: "Mochila deportiva",
    price: 35,
    description: "Mochila para gimnasio con compartimentos especiales para ropa y calzado. Fabricada en materiales resistentes al agua, es ideal para transportar tus pertenencias de forma segura.",
    image: "/assets/Products/test.webp",
    sku: "DEP-006",
    category: "Deporte",
    discount: false,
    search: normalizeText("Mochila para gimnasio con compartimentos especiales para ropa y calzado. Fabricada en materiales resistentes al agua, es ideal para transportar tus pertenencias de forma segura."),
  },
  {
    id: 37,
    title: "Botella de agua",
    price: 12,
    description: "Botella reutilizable de alta capacidad, fabricada en materiales libres de BPA. Mantiene tus bebidas frías por más tiempo y es perfecta para llevar al gimnasio o actividades al aire libre.",
    image: "/assets/Products/test.webp",
    sku: "DEP-007",
    category: "Deporte",
    discount: 18,
    search: normalizeText("Botella reutilizable de alta capacidad, fabricada en materiales libres de BPA. Mantiene tus bebidas frías por más tiempo y es perfecta para llevar al gimnasio o actividades al aire libre."),
  },
  {
    id: 38,
    title: "Cinta para sudor",
    price: 8,
    description: "Cinta absorbente para la cabeza, diseñada para mantener el sudor alejado de los ojos durante el ejercicio. Su material elástico y suave garantiza un ajuste cómodo.",
    image: "/assets/Products/test.webp",
    sku: "DEP-008",
    category: "Deporte",
    discount: false,
    search: normalizeText("Cinta absorbente para la cabeza, diseñada para mantener el sudor alejado de los ojos durante el ejercicio. Su material elástico y suave garantiza un ajuste cómodo."),
  },
  {
    id: 39,
    title: "Pesas",
    price: 50,
    description: "Set de pesas ajustables, ideales para entrenamientos de fuerza en casa o en el gimnasio. Fabricadas en materiales resistentes, permiten variar la carga según tus necesidades.",
    image: "/assets/Products/test.webp",
    sku: "DEP-009",
    category: "Deporte",
    discount: 40,
    search: normalizeText("Set de pesas ajustables, ideales para entrenamientos de fuerza en casa o en el gimnasio. Fabricadas en materiales resistentes, permiten variar la carga según tus necesidades."),
  },
  {
    id: 40,
    title: "Gorra deportiva",
    price: 15,
    description: "Gorra transpirable para deporte, con paneles de ventilación y ajuste trasero. Protege del sol y mantiene la cabeza fresca durante la actividad física.",
    image: "/assets/Products/test.webp",
    sku: "DEP-010",
    category: "Deporte",
    discount: false,
    search: normalizeText("Gorra transpirable para deporte, con paneles de ventilación y ajuste trasero. Protege del sol y mantiene la cabeza fresca durante la actividad física."),
  },
];

export default products;
