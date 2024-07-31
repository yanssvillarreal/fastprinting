const products = [
 {
  name: 'SWING TAGS',
  description:
   'With various paper stocks and shapes, Swing Tags are wonderful way yo express your message. It can be use in business or special occasion for gifts',
  quantity: '50',
  reviews: '75',
  image:
   'https://www.fastprinting.com/eu/wp-content/uploads/all-products-01_swing-tags-1.jpg',
  price: 25,
  seller: 'Hey Color'
 },
 {
  name: 'CUSTOM PACKAGING',
  description:
   'Small and luxurious packaging options are available with various stock and finishes. Enquire to see if your product range is eligible for this wonderful packaging option',
  quantity: '100',
  reviews: '90',
  image:
   'https://www.fastprinting.com/eu/wp-content/uploads/all-products-02_custom-packaging-1.jpg',
  price: 50,
  seller: 'Paper Boutique'
 },
 {
  name: 'RIBBONS',
  description:
   'With differents fabrics options, ribbons are available with up to 60 differents colours as well as beautiful Gold and Silver Foil finishes',
  quantity: '40',
  reviews: '55',
  image:
   'https://www.fastprinting.com/eu/wp-content/uploads/all-products-03_ribbons-1.jpg',
  price: 35,
  seller: 'Fast Printing'
 },
 {
  name: 'FLYERS',
  description:
   'We have unlimited creative options for you and this is a fantastic way to express your message to the world. From most standard International Paper Sizes to customised sizes, it is an endless challenge for one to create special promotions.',
  quantity: '150',
  reviews: '90',
  image:
   'https://www.fastprinting.com/eu/wp-content/uploads/all-products-04_flyers-1.jpg',
  price: 60,
  seller: 'Paper Craft'
 },
 {
  name: 'WOVEN LABELS',
  description:
   'Available in two different stocks : Satin and Demask, various foldings such as Straight Cut, Endfold, Centerfold and Mitrefold are possible with one colour process. ',
  quantity: '80',
  reviews: '80',
  image:
   'https://www.fastprinting.com/eu/wp-content/uploads/all-products-05_woven-labels-1.jpg',
  price: 60,
  seller: 'Paper Boutique'
 },
 {
  name: 'BUSINESS CARDS',
  description:
   'Rough yet, fabric like textured Luxe stocks are one of the best quality hard-edge stocks. With its extreme thicknesses, Luxe can bring a strong contrast between its surface and finishes.',
  quantity: '100',
  reviews: '90',
  image:
   'https://www.fastprinting.com/eu/wp-content/uploads/all-products-06_business-cards-1.jpg',
  price: 50,
  seller: 'Fast Printing'
 },
 {
  name: 'PRESENTATIONS FOLDERS',
  description:
   'Presentation folders are one of the way to encrypt the first impression of your branding',
  quantity: '40',
  reviews: '60',
  image:
   'https://www.fastprinting.com/eu/wp-content/uploads/all-products-07_presentation-folders-1.jpg',
  price: 40,
  seller: 'Hey Color'
 },
 {
  name: 'STISSUE PAPER',
  description:
   'Tissue paper is one of the great ways to customise your product packaging. Its tissue like touch and easy to crumble finish expresses natural yet, luxurious final packaging. This is a fantastic way to upgrade your product as if it is one of the high-end brand finish.',
  quantity: '120',
  reviews: '80',
  image:
   'https://www.fastprinting.com/eu/wp-content/uploads/all-products-08_tissue-papers-1.jpg',
  price: 50,
  seller: 'Paper Craft'
 },
 {
  name: 'GIFT VOUCHERS',
  description:
   'Reward your customers in style or use them as an attractive special offer for your clients. Any retail or service oriented business can benefit from gift cards; as a well-known part of the retail landscape, customers expect both to be able to access them and for them to look unique and exciting. ',
  quantity: '40',
  reviews: '60',
  image:
   'https://www.fastprinting.com/eu/wp-content/uploads/all-products-09_gift-vouchers-1.jpgttps://www.fastprinting.com/eu/wp-content/uploads/all-products-01_swing-tags-1.jpg',
  price: 35,
  seller: 'Paper Boutique'
 },
 {
  name: 'STICKERS',
  description:
   'Silver and gold foil stickers are a fabulous way to make your message stand out. These stickers look incredibly eye catching and will certainly captivate your customers. Foil finish can be applied to all our indoor purpose materials. This is definitely the option for you, if you want to make a statement.',
  quantity: '140',
  reviews: '80',
  image:
   'https://www.fastprinting.com/eu/wp-content/uploads/all-products-10_stickers-1.jpg',
  price: 50,
  seller: 'Paper Craft'
 }
]

// Función para generar las opciones del filtro de vendedores
function generateSellerOptions() {
 const sellerFilter = document.getElementById('sellerFilter')
 const sellers = [...new Set(products.map((product) => product.seller))] // Obtener vendedores únicos

 sellers.forEach((seller) => {
  const option = document.createElement('option')
  option.value = seller
  option.textContent = seller
  sellerFilter.appendChild(option)
 })
}

// Función para mostrar productos
function displayProducts(productsToDisplay) {
 const productsList = document.getElementById('productsList')
 productsList.innerHTML = '' // Limpiar productos previos

 productsToDisplay.forEach((product) => {
  const productCard = document.createElement('div')
  productCard.classList.add('product-card')
  productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <p>Seller: ${product.seller}</p>
      <p>Quantity: ${product.quantity}</p>
      <p>Reviews: ${product.reviews}</p>
    `
  productsList.appendChild(productCard)
 })
}

// Función para mostrar mensaje de "Productos no encontrados" y productos sugeridos
function displayNoProductsMessage() {
 const noProductsMessage = document.getElementById('noProductsMessage')
 const suggestedProducts = document.getElementById('suggestedProducts')
 suggestedProducts.innerHTML = '' // Limpiar productos sugeridos previos

 // Mostrar productos aleatorios o en oferta como sugeridos
 const suggested = products.filter((product) => product.offer).slice(0, 3)
 suggested.forEach((product) => {
  const productCard = document.createElement('div')
  productCard.classList.add('product-card')
  productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <p>Seller: ${product.seller}</p>
      <p>Quantity: ${product.quantity}</p>
      <p>Reviews: ${product.reviews}</p>
    `
  suggestedProducts.appendChild(productCard)
 })

 noProductsMessage.style.display = 'block'
}

// Función para aplicar los filtros
function applyFilters() {
 const sellerFilter = document.getElementById('sellerFilter').value
 const priceFilter = document.getElementById('priceFilter').value

 let filteredProducts = products

 if (sellerFilter) {
  filteredProducts = filteredProducts.filter(
   (product) => product.seller === sellerFilter
  )
 }

 if (priceFilter) {
  filteredProducts = filteredProducts.filter(
   (product) => product.price <= priceFilter
  )
 }

 if (filteredProducts.length > 0) {
  displayProducts(filteredProducts)
  document.getElementById('noProductsMessage').style.display = 'none'
 } else {
  displayNoProductsMessage()
 }
}

// Función para limpiar los filtros
function clearFilters() {
 document.getElementById('sellerFilter').value = ''
 document.getElementById('priceFilter').value = ''
 displayProducts(products)
 document.getElementById('noProductsMessage').style.display = 'none'
}

// Eventos
document.getElementById('searchButton').addEventListener('click', applyFilters)
document.getElementById('clearFilters').addEventListener('click', clearFilters)

// Inicializar
generateSellerOptions()
displayProducts(products)
