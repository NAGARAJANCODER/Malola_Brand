/* ══ PRODUCT CATALOG ══ */
const productCatalog = {
  almonds: {
    id:'almonds', name:'Premium Almonds', category:'Dry Fruit', price:299,
    badge:'Fresh 🔥', badgeColor:'#1565C0', bg:'#fff5ee',
    image:'assets/images/red.png',
    description:'California Grade A almonds — hand-selected for superior taste, crunch, and nutritional depth. Rich in vitamin E, magnesium, and heart-healthy monounsaturated fats. Perfect raw, roasted, or blended into almond butter for everyday nourishment.',
    ingredients:['100% Natural Almonds','No Preservatives','No Artificial Colours','Non-GMO Certified','Cold-Processed'],
    nutrition:{Calories:'579 kcal',Protein:'21g',Fat:'50g',Carbs:'22g',Fibre:'12g'},
    weights:['250g','500g','1kg'],
  },
  cashews: {
    id:'cashews', name:'Premium Cashews', category:'Dry Nut', price:299,
    badge:'Premium ✨', badgeColor:'#0d2b6b', bg:'#fdf8ee',
    image:'assets/images/a6bf2fb7-be25-4e5c-94f4-ba9215f70999_removalai_preview.png',
    description:'Buttery W320 grade cashews from the finest certified farms. Naturally creamy with a rich, satisfying bite. Loaded with copper, zinc, and healthy fats for complete everyday nutrition. Eat raw, roast lightly, or blend into cashew cream.',
    ingredients:['100% Natural Cashews','Sun-Dried Processing','No Salt Added','No Preservatives','Ethically Sourced'],
    nutrition:{Calories:'553 kcal',Protein:'18g',Fat:'44g',Carbs:'30g',Fibre:'3g'},
    weights:['250g','500g','1kg'],
  },
  dates: {
    id:'dates', name:'Medjool Dates', category:'Dry Fruit', price:299,
    badge:'Organic 🌿', badgeColor:'#1976D2', bg:'#fdf0e8',
    image:'assets/images/b3e47e53-7399-423b-a88a-c4cadb4de3b3_removalai_preview.png',
    description:"The king of dates — Medjool dates from Jordan's finest orchards. Naturally sweet with a caramel-like richness, loaded with iron, potassium, and natural energy. A wholesome alternative to refined sugar, perfect for baking or snacking.",
    ingredients:['100% Organic Medjool Dates','Cold-Packed','No Sugar Added','No Preservatives','Jordan Origin'],
    nutrition:{Calories:'277 kcal',Protein:'2g',Fat:'0.2g',Carbs:'75g',Fibre:'7g'},
    weights:['500g','1kg','2kg'],
  },
  mixed: {
    id:'mixed', name:'Mixed Dry Fruits', category:'Trail Mix', price:299,
    badge:'Mix 🎉', badgeColor:'#0d47a1', bg:'#e8f0fe',
    image:'assets/images/32603c34-e7eb-411c-869c-a99345af8d3d_removalai_preview.png',
    description:'A carefully curated blend of almonds, cashews, walnuts, raisins, and pistachios. Perfect nutritional balance for snacking, gifting, or everyday nourishment. Every handful is a complete nutrient boost your body will love.',
    ingredients:['Premium Almonds','Whole Cashews','Walnuts','Golden Raisins','Pistachios','No Added Salt'],
    nutrition:{Calories:'560 kcal',Protein:'15g',Fat:'42g',Carbs:'32g',Fibre:'8g'},
    weights:['250g','500g','1kg'],
  },
};

/* ══ TOAST ══ */
function showToast(html, duration=3000) {
  const container = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = 'toast'; t.innerHTML = html;
  container.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 420); }, duration);
}

/* ══ CART ══ */
let cart = [];
const cartSidebar  = document.getElementById('cartSidebar');
const cartOverlay  = document.getElementById('cartOverlay');
const cartItemsEl  = document.getElementById('cartItems');
const cartEmptyEl  = document.getElementById('cartEmpty');
const cartFooterEl = document.getElementById('cartFooter');
const cartTotalEl  = document.getElementById('cartTotal');
const cartBadgeEl  = document.getElementById('cartBadge');

function openCart()  { cartSidebar.classList.add('open'); cartOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeCart() { cartSidebar.classList.remove('open'); cartOverlay.classList.remove('open'); document.body.style.overflow = ''; }

document.getElementById('navCartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function addToCart(name, price, image) {
  const existing = cart.find(i => i.name === name);
  if (existing) { existing.qty += 1; } else { cart.push({ name, price: parseFloat(price), image, qty: 1 }); }
  renderCart();
}

function renderCart() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  if (total > 0) { cartBadgeEl.style.display = 'flex'; cartBadgeEl.textContent = total > 99 ? '99+' : total; }
  else { cartBadgeEl.style.display = 'none'; }
  cartItemsEl.innerHTML = '';
  if (cart.length === 0) { cartItemsEl.appendChild(cartEmptyEl); cartEmptyEl.style.display = 'block'; cartFooterEl.style.display = 'none'; return; }
  cartEmptyEl.style.display = 'none'; cartFooterEl.style.display = 'block';
  cart.forEach((item, idx) => {
    const row = document.createElement('div'); row.className = 'cart-item';
    row.innerHTML = `<img class="cart-item-img" src="${item.image}" alt="${item.name}"><div class="cart-item-body"><div class="cart-item-name">${item.name}</div><div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div><div class="cart-qty"><button class="qty-btn" data-idx="${idx}" data-action="dec">&#8722;</button><span class="qty-num">${item.qty}</span><button class="qty-btn" data-idx="${idx}" data-action="inc">&#43;</button></div></div><button class="cart-item-remove" data-idx="${idx}" aria-label="Remove"><i class="fa-solid fa-xmark"></i></button>`;
    cartItemsEl.appendChild(row);
  });
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  cartTotalEl.textContent = `$${subtotal.toFixed(2)}`;
  cartItemsEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = +btn.dataset.idx;
      if (btn.dataset.action === 'inc') { cart[idx].qty += 1; } else { cart[idx].qty -= 1; if (cart[idx].qty <= 0) cart.splice(idx, 1); }
      renderCart();
    });
  });
  cartItemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => { const idx = +btn.dataset.idx; cart.splice(idx, 1); renderCart(); });
  });
}

/* ══ AUTH ══ */
const authModal   = document.getElementById('authModal');
const authOverlay = document.getElementById('authOverlay');
function openAuth(tab) { authModal.classList.add('open'); authOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; if (tab) switchTab(tab); }
function closeAuth()   { authModal.classList.remove('open'); authOverlay.classList.remove('open'); document.body.style.overflow = ''; }
function switchTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('loginForm').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
}
document.getElementById('navLoginBtn').addEventListener('click', () => openAuth('login'));
document.getElementById('navSignupBtn').addEventListener('click', () => openAuth('register'));
document.getElementById('authClose').addEventListener('click', closeAuth);
authOverlay.addEventListener('click', closeAuth);
document.querySelectorAll('.auth-tab').forEach(t => t.addEventListener('click', () => switchTab(t.dataset.tab)));
document.querySelectorAll('.switch-link').forEach(l => l.addEventListener('click', e => { e.preventDefault(); switchTab(l.dataset.switch); }));
document.getElementById('loginForm').addEventListener('submit', e => { e.preventDefault(); closeAuth(); showToast('<i class="fa-solid fa-circle-check"></i> Welcome back!'); });
document.getElementById('registerForm').addEventListener('submit', e => { e.preventDefault(); closeAuth(); showToast('<i class="fa-solid fa-circle-check"></i> Account created! Welcome to NaturNest 🌿'); });

/* ══ FOOTER FORM ══ */
document.getElementById('footerForm').addEventListener('submit', e => { e.preventDefault(); showToast('<i class="fa-solid fa-envelope"></i> You\'re subscribed!'); });

/* ══ NAV SCROLL ══ */
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  mainNav.classList.toggle('nav-scrolled', window.scrollY > 40);
}, { passive: true });

/* ══ MEGA MENU NAVIGATION ══ */
document.querySelectorAll('.mega-item[data-pdp]').forEach(item => {
  item.addEventListener('click', () => {
    window.location.href = 'product.html?id=' + item.dataset.pdp;
  });
});

/* ══ RENDER PRODUCT PAGE ══ */
(function() {
  const params  = new URLSearchParams(window.location.search);
  const pid     = params.get('id');
  const product = productCatalog[pid];

  if (!product) {
    window.location.href = 'index.html#kids-shop';
    return;
  }

  /* Page title */
  document.title = product.name + ' — NaturNest';

  /* Breadcrumb */
  document.getElementById('pdpBcName').textContent = product.name;

  /* Image */
  const img = document.getElementById('pdpImg');
  img.src = product.image;
  img.alt = product.name;

  /* Badge */
  const badge = document.getElementById('pdpImgBadge');
  badge.textContent = product.badge;
  badge.style.background = product.badgeColor;

  /* Thumbnail strip (same image × 3 for visual) */
  const thumbsRow = document.getElementById('pdpThumbsRow');
  for (let i = 0; i < 3; i++) {
    const d = document.createElement('div');
    d.className = 'pdp-thumb-item' + (i === 0 ? ' active' : '');
    d.innerHTML = `<img src="${product.image}" alt="${product.name}">`;
    d.addEventListener('click', () => {
      document.querySelectorAll('.pdp-thumb-item').forEach(t => t.classList.remove('active'));
      d.classList.add('active');
    });
    thumbsRow.appendChild(d);
  }

  /* Category + Name */
  document.getElementById('pdpCat').textContent  = product.category;
  document.getElementById('pdpName').textContent = product.name;

  /* Price */
  document.getElementById('pdpPrice').textContent = '$' + product.price;

  /* Weight buttons */
  const weightsEl = document.getElementById('pdpWeights');
  weightsEl.innerHTML = product.weights.map((w, i) =>
    `<button class="pdp-w-btn${i === 0 ? ' active' : ''}">${w}</button>`
  ).join('');
  weightsEl.querySelectorAll('.pdp-w-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      weightsEl.querySelectorAll('.pdp-w-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* Description */
  document.getElementById('pdpDesc').textContent = product.description;

  /* Ingredients */
  document.getElementById('pdpIng').innerHTML = product.ingredients.map(i => `<li>${i}</li>`).join('');

  /* Nutrition */
  document.getElementById('pdpNut').innerHTML = Object.entries(product.nutrition).map(([k, v]) =>
    `<div class="pdp-nut-cell"><div class="pdp-nut-val">${v}</div><div class="pdp-nut-lbl">${k}</div></div>`
  ).join('');

  /* Quantity */
  let qty = 1;
  const qtyEl = document.getElementById('pdpQtyVal');
  document.getElementById('pdpMinus').addEventListener('click', () => {
    if (qty > 1) { qty--; qtyEl.textContent = qty; }
  });
  document.getElementById('pdpPlus').addEventListener('click', () => {
    qty++;
    qtyEl.textContent = qty;
  });

  /* Add to cart */
  document.getElementById('pdpAddCart').addEventListener('click', () => {
    for (let i = 0; i < qty; i++) addToCart(product.name, product.price, product.image);
    openCart();
    showToast('<i class="fa-solid fa-basket-shopping"></i> ' + product.name + ' added to cart!');
  });

  /* Related products */
  const related = Object.values(productCatalog).filter(p => p.id !== product.id);
  document.getElementById('pdpRelated').innerHTML = related.map(p => `
    <div class="pdp-rel-card" onclick="window.location.href='product.html?id=${p.id}'">
      <div class="pdp-rel-img-wrap" style="background:${p.bg}">
        <img src="${p.image}" alt="${p.name}" class="pdp-rel-img">
      </div>
      <div class="pdp-rel-body">
        <div class="pdp-rel-cat">${p.category}</div>
        <div class="pdp-rel-name">${p.name}</div>
        <div class="pdp-rel-footer">
          <div class="pdp-rel-price">$${p.price}</div>
          <button class="pdp-rel-btn">View</button>
        </div>
      </div>
    </div>
  `).join('');
})();
