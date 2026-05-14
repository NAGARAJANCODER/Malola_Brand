/* ══ PRODUCT CATALOG ══ */
const productCatalog = {
  milletvanilla: {
    id:'milletvanilla', name:'Millet Vanilla', category:'Millet Snack', price:299,
    badge:'Best Seller 🔥', badgeColor:'#4e7a1e', bg:'#edf5e1',
    image:'assets/images/green.png',
    description:'Creamy vanilla meets wholesome millet in every delightful bite. A smooth, guilt-free treat packed with fibre and natural goodness — loved by kids and parents alike.',
    ingredients:['Whole Millet','Natural Vanilla','Jaggery','Rice Flour','No Artificial Colours','Non-GMO'],
    nutrition:{Calories:'400 kcal',Protein:'7g',Fat:'12g',Carbs:'64g',Fibre:'6g'},
    weights:['100g','200g','500g'],
  },
  milletchoco: {
    id:'milletchoco', name:'Millet Choco', category:'Millet Snack', price:299,
    badge:'Fan Fav ✨', badgeColor:'#5c3e18', bg:'#f5ede6',
    image:'assets/images/a6bf2fb7-be25-4e5c-94f4-ba9215f70999_removalai_preview.png',
    description:'Rich dark chocolate meets wholesome millet in every crunchy bite. A guilt-free indulgence packed with fibre, iron and natural energy — perfect for everyday snacking.',
    ingredients:['Whole Millet','Dark Chocolate Coating','Cocoa Powder','Jaggery','No Artificial Colours','Non-GMO'],
    nutrition:{Calories:'420 kcal',Protein:'8g',Fat:'14g',Carbs:'62g',Fibre:'6g'},
    weights:['100g','200g','500g'],
  },
  blueberrypancake: {
    id:'blueberrypancake', name:'Blueberry Pancake', category:'Pancake Snack', price:299,
    badge:'Limited 🌿', badgeColor:'#4a2070', bg:'#ede8fb',
    image:'assets/images/b3e47e53-7399-423b-a88a-c4cadb4de3b3_removalai_preview.png',
    description:'Light, fluffy pancake bites bursting with real blueberry goodness. Made with wholesome grains and no artificial colours — a breakfast treat you can enjoy anytime of the day.',
    ingredients:['Whole Wheat Flour','Real Blueberry','Oats','Honey','No Artificial Flavours','Baked Not Fried'],
    nutrition:{Calories:'380 kcal',Protein:'7g',Fat:'10g',Carbs:'64g',Fibre:'4g'},
    weights:['100g','200g','500g'],
  },
  quinoapuffs: {
    id:'quinoapuffs', name:'Quinoa Puffs', category:'Puff Snack', price:299,
    badge:'Season 🌾', badgeColor:'#7a3810', bg:'#fdf0e2',
    image:'assets/images/red.png',
    description:'Airy, crunchy quinoa puffs seasoned to perfection. Loaded with complete protein and essential amino acids — a smarter snack that kids love and parents trust.',
    ingredients:['Quinoa','Cheddar Seasoning','Sea Salt','Sunflower Oil','No MSG','Gluten-Free'],
    nutrition:{Calories:'390 kcal',Protein:'10g',Fat:'12g',Carbs:'60g',Fibre:'5g'},
    weights:['100g','200g','500g'],
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
    row.innerHTML = `<img class="cart-item-img" src="${item.image}" alt="${item.name}"><div class="cart-item-body"><div class="cart-item-name">${item.name}</div><div class="cart-item-price">₹${(item.price * item.qty).toFixed(2)}</div><div class="cart-qty"><button class="qty-btn" data-idx="${idx}" data-action="dec">&#8722;</button><span class="qty-num">${item.qty}</span><button class="qty-btn" data-idx="${idx}" data-action="inc">&#43;</button></div></div><button class="cart-item-remove" data-idx="${idx}" aria-label="Remove"><i class="fa-solid fa-xmark"></i></button>`;
    cartItemsEl.appendChild(row);
  });
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  cartTotalEl.textContent = `₹${subtotal.toFixed(2)}`;
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
  document.getElementById('pdpPrice').textContent = '₹' + product.price;

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
          <div class="pdp-rel-price">₹${p.price}</div>
          <button class="pdp-rel-btn">View</button>
        </div>
      </div>
    </div>
  `).join('');
})();
