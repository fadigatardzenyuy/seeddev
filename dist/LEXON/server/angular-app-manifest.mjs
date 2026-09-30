
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/products"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/reviews"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GEKXCQAD.js",
      "chunk-QEWPS6EE.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BJFMGZFQ.js",
      "chunk-QEWPS6EE.js"
    ],
    "route": "/checkout"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R737LMII.js"
    ],
    "route": "/wishlist"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 532, hash: '89f5b9cf3c9a87df6994c8ab09d2f5cdbf98f9466ce4cd6f4c0d781634253a76', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1045, hash: '03997db0234831701c8e08240bb333e3b07265da8f43e232df08d352c43796ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'products/index.html': {size: 15146, hash: '166c0e01a4f117780a06eb4fc3c9af9aec0d3d2776e95f746057d813665e58aa', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'index.html': {size: 34824, hash: '8b7794c93bf697c088f84801daafd36a64c3dc5f2d5d4c725a883658c2d493f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'reviews/index.html': {size: 12770, hash: 'b456b07c81a3ac82ca950716e4211a45609abfa2a9626e74b6b2256785887894', text: () => import('./assets-chunks/reviews_index_html.mjs').then(m => m.default)},
    'checkout/index.html': {size: 9825, hash: '1ac6cf4a8e55d8472d592d8600c037619c066c40d2b13d111c9bc37514ba6279', text: () => import('./assets-chunks/checkout_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 8320, hash: '76f0dd1788dd8f886173a0f5912cf793df2c40fb172cb841e6ca7e6008e7cf92', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 15480, hash: '1392591dbef265f91d79e6c53ba4306fadc16255d7deb500c75e064b550dc980', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 9052, hash: '434827e8fff3eb66c33197c6452551c451b8320b3c2601f6c9b7c069f5dc7ddc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
