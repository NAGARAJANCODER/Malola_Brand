/* ══ PRODUCT CATALOG ══ */
const productCatalog = {

  /* ── BITES & CRUNCHIES ── */
  milletvanilla:{id:'milletvanilla',name:'Millet Vanilla',category:'Bites & Crunchies',categoryId:'bites',price:199,badge:'Best Seller 🔥',badgeColor:'#4e7a1e',bg:'#edf5e1',image:'assets/images/green.png',imageBack:'assets/images/green.png',description:'Creamy vanilla meets wholesome millet in every delightful bite. A smooth, guilt-free treat packed with fibre and natural goodness — loved by kids and parents alike.',ingredients:['Whole Millet','Natural Vanilla','Jaggery','Rice Flour','No Artificial Colours','Non-GMO'],nutrition:{Calories:'400 kcal',Protein:'7g',Fat:'12g',Carbs:'64g',Fibre:'6g'},weights:['100g','200g','500g']},

  milletchoco:{id:'milletchoco',name:'Millet Choco',category:'Bites & Crunchies',categoryId:'bites',price:199,badge:'Fan Fav ✨',badgeColor:'#5c3e18',bg:'#f5ede6',image:'assets/images/a6bf2fb7-be25-4e5c-94f4-ba9215f70999_removalai_preview.png',imageBack:'assets/images/Choco Bytes Back.png',description:'Rich dark chocolate meets wholesome millet in every crunchy bite. A guilt-free indulgence packed with fibre, iron and natural energy — perfect for everyday snacking.',ingredients:['Whole Millet','Dark Chocolate Coating','Cocoa Powder','Jaggery','No Artificial Colours','Non-GMO'],nutrition:{Calories:'420 kcal',Protein:'8g',Fat:'14g',Carbs:'62g',Fibre:'6g'},weights:['100g','200g','500g']},

  chocobytes:{id:'chocobytes',name:'Choco Bytes',category:'Bites & Crunchies',categoryId:'bites',price:199,badge:'Kids Pick 🍫',badgeColor:'#4a2000',bg:'#fbe8d8',image:'assets/images/Choco Bytes Front.png',imageBack:'assets/images/Choco Bytes Back.png',description:'Bite-sized millet snacks coated in rich chocolate — crunchy, chocolatey, made without junk. A smart swap for chocolate bars that kids will love every single day.',ingredients:['Millet','Cocoa','Jaggery','Rice Flour','Natural Flavour','No Preservatives'],nutrition:{Calories:'415 kcal',Protein:'7g',Fat:'13g',Carbs:'63g',Fibre:'5g'},weights:['100g','200g','500g']},

  chococrunch:{id:'chococrunch',name:'Choco Crunch',category:'Bites & Crunchies',categoryId:'bites',price:199,badge:'Crunchy 🌾',badgeColor:'#3e2000',bg:'#f9e6d0',image:'assets/images/choco crunch front.png',imageBack:'assets/images/choco crunch back.png',description:'Ragi and millet come together in this irresistibly crunchy chocolate snack. Light, airy, packed with calcium — satisfies every crunch craving guilt-free.',ingredients:['Ragi','Millet','Cocoa Powder','Jaggery','Sea Salt','No Artificial Additives'],nutrition:{Calories:'390 kcal',Protein:'9g',Fat:'11g',Carbs:'62g',Fibre:'7g'},weights:['100g','200g','500g']},

  cheddarball:{id:'cheddarball',name:'Cheddar Cheese Balls',category:'Bites & Crunchies',categoryId:'bites',price:199,badge:'Cheesy! 🧀',badgeColor:'#7a4800',bg:'#fff3d0',image:'assets/images/cheddar cheese balls front.png',imageBack:'assets/images/cheddar cheese balls back.png',description:'Puffy, cheesy, millet-based balls with a bold cheddar punch. Baked not fried — each ball delivers real cheese flavour with a wholesome nutritious core.',ingredients:['Millet','Cheddar Cheese','Sea Salt','Sunflower Oil','No MSG','No Artificial Colours'],nutrition:{Calories:'395 kcal',Protein:'9g',Fat:'13g',Carbs:'60g',Fibre:'5g'},weights:['100g','200g','500g']},

  buttermakhana:{id:'buttermakhana',name:'Butter Makhana',category:'Bites & Crunchies',categoryId:'bites',price:249,badge:'Premium 🌟',badgeColor:'#4e3700',bg:'#fef8e7',image:'assets/images/butter makhana front.png',imageBack:'assets/images/butter makhana back.png',description:'Premium lotus seeds roasted in real butter and lightly seasoned. A protein-rich, low-calorie snack that feels indulgent but is completely wholesome — anytime, anywhere.',ingredients:['Lotus Seeds (Makhana)','Butter','Sea Salt','Black Pepper','No Preservatives','Gluten-Free'],nutrition:{Calories:'325 kcal',Protein:'9g',Fat:'10g',Carbs:'50g',Fibre:'4g'},weights:['50g','100g','200g']},

  cheddaropuff:{id:'cheddaropuff',name:'Cheddar Cheese Puffs',category:'Bites & Crunchies',categoryId:'bites',price:199,badge:'Puff Up! 🧀',badgeColor:'#6b4a00',bg:'#fff9e8',image:'assets/images/Puff Cheddar Cheese.png',imageBack:'assets/images/cheese puff back.png',description:'Light-as-air quinoa puffs with bold cheddar cheese seasoning. Each puff melts in your mouth with irresistible cheese goodness — no MSG, no artificial colours.',ingredients:['Quinoa','Cheddar Seasoning','Sea Salt','Sunflower Oil','No MSG','No Artificial Colours'],nutrition:{Calories:'390 kcal',Protein:'10g',Fat:'12g',Carbs:'60g',Fibre:'5g'},weights:['100g','200g','500g']},

  tangipuffs:{id:'tangipuffs',name:'Tangi Tomato Puffs',category:'Bites & Crunchies',categoryId:'bites',price:199,badge:'Tangy! 🍅',badgeColor:'#8b1a00',bg:'#fff0ee',image:'assets/images/Puff Tangi Tomato.png',imageBack:'assets/images/Puff Tangi Tomato (1).png',description:'Zesty tomato meets the crunch of quinoa in these irresistible puffs. Bold, tangy, and full of flavour — the guilt-free answer to your namkeen cravings.',ingredients:['Quinoa','Tomato Powder','Tamarind','Sea Salt','Sunflower Oil','No Artificial Additives'],nutrition:{Calories:'385 kcal',Protein:'9g',Fat:'11g',Carbs:'62g',Fibre:'5g'},weights:['100g','200g','500g']},

  quinoapuffs:{id:'quinoapuffs',name:'Quinoa Puffs',category:'Bites & Crunchies',categoryId:'bites',price:299,badge:'Season 🌾',badgeColor:'#7a3810',bg:'#fdf0e2',image:'assets/images/red.png',imageBack:'assets/images/red.png',description:'Airy, crunchy quinoa puffs seasoned to perfection. Loaded with complete protein and essential amino acids — a smarter snack that kids love and parents trust.',ingredients:['Quinoa','Cheddar Seasoning','Sea Salt','Sunflower Oil','No MSG','Gluten-Free'],nutrition:{Calories:'390 kcal',Protein:'10g',Fat:'12g',Carbs:'60g',Fibre:'5g'},weights:['100g','200g','500g']},

  /* ── CEREALS & GRANOLA ── */
  bananagranola:{id:'bananagranola',name:'Banana Granola',category:'Cereals & Granola',categoryId:'cereals',price:349,badge:'Breakfast 🍌',badgeColor:'#c77700',bg:'#fff8e1',image:'assets/images/Banana Granola.png',imageBack:'assets/images/Banana Granola Back.png',description:'Sun-dried banana slices meet toasted oats, millet, and honey in this vibrant granola. A naturally sweet, energising start to your morning that keeps you going all day.',ingredients:['Rolled Oats','Dried Banana','Millet','Honey','Coconut Oil','No Refined Sugar'],nutrition:{Calories:'420 kcal',Protein:'8g',Fat:'11g',Carbs:'70g',Fibre:'6g'},weights:['200g','400g','800g']},

  chocodelightmuesli:{id:'chocodelightmuesli',name:'Choco Delight Muesli',category:'Cereals & Granola',categoryId:'cereals',price:349,badge:'Choco Boost 🍫',badgeColor:'#4a2000',bg:'#fde8d0',image:'assets/images/Choco Delight Muesli.png',imageBack:'assets/images/Choco Delight Muesli back.png',description:'A luxurious blend of multigrain flakes, dark chocolate chips, and roasted nuts. Rich, indulgent, and incredibly nutritious — breakfast that feels like a treat every morning.',ingredients:['Multigrain Flakes','Dark Chocolate Chips','Oats','Raisins','Almonds','No Artificial Flavours'],nutrition:{Calories:'440 kcal',Protein:'10g',Fat:'14g',Carbs:'66g',Fibre:'6g'},weights:['200g','400g','800g']},

  fruitnutmuesli:{id:'fruitnutmuesli',name:'Fruit & Nut Muesli',category:'Cereals & Granola',categoryId:'cereals',price:379,badge:'Power Mix 🌰',badgeColor:'#5c3d00',bg:'#fef6e8',image:'assets/images/Fruit and Nut muesli.png',imageBack:'assets/images/Fruit and Nut muesli Back.png',description:'A wholesome muesli loaded with sun-dried fruits, crunchy nuts, and toasted multigrain flakes. Rich in fibre and antioxidants — the complete breakfast that powers your day.',ingredients:['Multigrain Flakes','Almonds','Cashews','Raisins','Cranberries','Sunflower Seeds'],nutrition:{Calories:'430 kcal',Protein:'11g',Fat:'15g',Carbs:'64g',Fibre:'7g'},weights:['200g','400g','800g']},

  quinoamuesli:{id:'quinoamuesli',name:'Quinoa Muesli',category:'Cereals & Granola',categoryId:'cereals',price:399,badge:'Protein Rich 🌿',badgeColor:'#2e5c00',bg:'#edf7e6',image:'assets/images/Quinoa muesli back.png',imageBack:'assets/images/Quinoa muesli back (1).png',description:'Quinoa-enriched muesli with all 9 essential amino acids. Combined with multigrain flakes, seeds, and dried fruits — a premium protein-packed breakfast for active lifestyles.',ingredients:['Quinoa','Multigrain Flakes','Chia Seeds','Flax Seeds','Dried Berries','No Added Sugar'],nutrition:{Calories:'435 kcal',Protein:'14g',Fat:'12g',Carbs:'62g',Fibre:'8g'},weights:['200g','400g','800g']},

  /* ── PANCAKES & MIXES ── */
  blueberrypancake:{id:'blueberrypancake',name:'Blueberry Pancake',category:'Pancakes & Mixes',categoryId:'pancakes',price:249,badge:'Limited 🌿',badgeColor:'#4a2070',bg:'#ede8fb',image:'assets/images/Blueberry Pancake.png',imageBack:'assets/images/Blueberry Pancake Back.png',description:'Light, fluffy pancake bites bursting with real blueberry goodness. Made with wholesome grains and no artificial colours — a breakfast treat you can enjoy anytime.',ingredients:['Whole Wheat Flour','Real Blueberry','Oats','Honey','No Artificial Flavours','Baked Not Fried'],nutrition:{Calories:'380 kcal',Protein:'7g',Fat:'10g',Carbs:'64g',Fibre:'4g'},weights:['200g','400g']},

  chocopancake:{id:'chocopancake',name:'Choco Pancake Mix',category:'Pancakes & Mixes',categoryId:'pancakes',price:249,badge:'Choco Joy 🍫',badgeColor:'#3b1800',bg:'#fbe8d8',image:'assets/images/Choco Pancake Front.png',imageBack:'assets/images/Choco Pancake Back.png',description:'Fluffy chocolate pancakes made wholesome with millet flour and real cocoa. Quick to prepare, rich in flavour, loved by every kid — mornings just got sweeter.',ingredients:['Millet Flour','Cocoa Powder','Jaggery','Oats','Baking Powder','No Artificial Colours'],nutrition:{Calories:'395 kcal',Protein:'8g',Fat:'11g',Carbs:'65g',Fibre:'5g'},weights:['200g','400g']},

  /* ── NOODLES & SOUPS ── */
  milletnoodles:{id:'milletnoodles',name:'Millet Noodles',category:'Noodles & Soups',categoryId:'noodles',price:199,badge:'Quick Cook 🍜',badgeColor:'#0d3d6b',bg:'#e3f2fd',image:'assets/images/noodles front.png',imageBack:'assets/images/Noodles Back.png',description:'The Maggi taste you love, now made with wholesome millet. Quick-cooking noodles free from maida and artificial additives — healthy comfort food for the whole family.',ingredients:['Millet Flour','Rice Flour','Sea Salt','Natural Spices','No Maida','No Artificial Colours'],nutrition:{Calories:'360 kcal',Protein:'9g',Fat:'6g',Carbs:'68g',Fibre:'5g'},weights:['75g','200g','400g']},

  pirandaisoup:{id:'pirandaisoup',name:'Pirandai Soup Mix',category:'Noodles & Soups',categoryId:'noodles',price:249,badge:'Immunity 🌿',badgeColor:'#1a5200',bg:'#e8f5e9',image:'assets/images/Pirandai Soup Front.png',imageBack:'assets/images/Pirandai Soup Back.png',description:'Pirandai (Hadjod) — used for centuries in traditional medicine. This instant soup harnesses its bone-strengthening, immunity-boosting power in a delicious, easy-to-make cup.',ingredients:['Pirandai Powder','Lentils','Spices','Turmeric','Black Pepper','No Preservatives'],nutrition:{Calories:'120 kcal',Protein:'6g',Fat:'2g',Carbs:'18g',Fibre:'4g'},weights:['100g','250g']},

  moringasoup:{id:'moringasoup',name:'Moringa Soup Mix',category:'Noodles & Soups',categoryId:'noodles',price:249,badge:'Superfood 🌱',badgeColor:'#2e5c00',bg:'#f1f8e9',image:'assets/images/Morniga Soup Front.png',imageBack:'assets/images/Morniga Soup Back.png',description:'Moringa — the miracle tree — in a warming, flavourful soup. Packed with iron, vitamins A and C, and antioxidants — the immunity-boosting cup your body craves daily.',ingredients:['Moringa Leaf Powder','Lentils','Coconut Milk Powder','Spices','Turmeric','No Preservatives'],nutrition:{Calories:'115 kcal',Protein:'7g',Fat:'3g',Carbs:'16g',Fibre:'5g'},weights:['100g','250g']},

  mudavattukalsoup:{id:'mudavattukalsoup',name:'Mudavattukal Soup',category:'Noodles & Soups',categoryId:'noodles',price:249,badge:'Traditional 🏺',badgeColor:'#5c3d00',bg:'#fef6e8',image:'assets/images/Mudavattukal Soup Front.png',imageBack:'assets/images/Mudavattukal Soup Back.png',description:'Rooted in South Indian tradition, Mudavattukal is known for its anti-inflammatory properties. This instant mix brings the goodness of heritage herbs to your everyday meal.',ingredients:['Mudavattukal Powder','Lentils','Spices','Turmeric','Cumin','No Artificial Additives'],nutrition:{Calories:'110 kcal',Protein:'5g',Fat:'2g',Carbs:'17g',Fibre:'4g'},weights:['100g','250g']},

  /* ── HEALTH MIXES & STAPLES ── */
  datespowder:{id:'datespowder',name:'Dates Powder',category:'Health Mixes & Staples',categoryId:'health',price:299,badge:'Natural Sweet 🍯',badgeColor:'#5c2d00',bg:'#fef3e2',image:'assets/images/Dates Powder.png',imageBack:'assets/images/Dates Powder trial 2.png',description:"Pure, sun-dried date powder — nature's perfect sweetener. Use in smoothies, baking, porridges and sweets as a healthier alternative to refined sugar. Rich in iron and potassium.",ingredients:['100% Dates','No Added Sugar','No Preservatives','Vegan','Gluten-Free','Natural Processing'],nutrition:{Calories:'280 kcal',Protein:'2g',Fat:'0.5g',Carbs:'68g',Fibre:'8g'},weights:['100g','250g','500g']},
};

/* ══ TOAST ══ */
function showToast(html,duration=3000){
  const container=document.getElementById('toastContainer');
  const t=document.createElement('div');t.className='toast';t.innerHTML=html;
  container.appendChild(t);
  requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add('show')));
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),420);},duration);
}

/* ══ CART ══ */
let cart=[];
const cartSidebar =document.getElementById('cartSidebar');
const cartOverlay =document.getElementById('cartOverlay');
const cartItemsEl =document.getElementById('cartItems');
const cartEmptyEl =document.getElementById('cartEmpty');
const cartFooterEl=document.getElementById('cartFooter');
const cartTotalEl =document.getElementById('cartTotal');
const cartBadgeEl =document.getElementById('cartBadge');

function openCart(){cartSidebar.classList.add('open');cartOverlay.classList.add('open');document.body.style.overflow='hidden';}
function closeCart(){cartSidebar.classList.remove('open');cartOverlay.classList.remove('open');document.body.style.overflow='';}

document.getElementById('navCartBtn').addEventListener('click',openCart);
document.getElementById('cartClose').addEventListener('click',closeCart);
cartOverlay.addEventListener('click',closeCart);

function addToCart(name,price,image){
  const existing=cart.find(i=>i.name===name);
  if(existing){existing.qty+=1;}else{cart.push({name,price:parseFloat(price),image,qty:1});}
  renderCart();
}
function renderCart(){
  const total=cart.reduce((s,i)=>s+i.qty,0);
  if(total>0){cartBadgeEl.style.display='flex';cartBadgeEl.textContent=total>99?'99+':total;}
  else{cartBadgeEl.style.display='none';}
  cartItemsEl.innerHTML='';
  if(cart.length===0){cartItemsEl.appendChild(cartEmptyEl);cartEmptyEl.style.display='block';cartFooterEl.style.display='none';return;}
  cartEmptyEl.style.display='none';cartFooterEl.style.display='block';
  cart.forEach((item,idx)=>{
    const row=document.createElement('div');row.className='cart-item';
    row.innerHTML=`<img class="cart-item-img" src="${item.image}" alt="${item.name}"><div class="cart-item-body"><div class="cart-item-name">${item.name}</div><div class="cart-item-price">&#8377;${(item.price*item.qty).toFixed(2)}</div><div class="cart-qty"><button class="qty-btn" data-idx="${idx}" data-action="dec">&#8722;</button><span class="qty-num">${item.qty}</span><button class="qty-btn" data-idx="${idx}" data-action="inc">&#43;</button></div></div><button class="cart-item-remove" data-idx="${idx}" aria-label="Remove"><i class="fa-solid fa-xmark"></i></button>`;
    cartItemsEl.appendChild(row);
  });
  cartTotalEl.textContent=`&#8377;${cart.reduce((s,i)=>s+i.price*i.qty,0).toFixed(2)}`;
  cartItemsEl.querySelectorAll('.qty-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const idx=+btn.dataset.idx;
      if(btn.dataset.action==='inc'){cart[idx].qty+=1;}else{cart[idx].qty-=1;if(cart[idx].qty<=0)cart.splice(idx,1);}
      renderCart();
    });
  });
  cartItemsEl.querySelectorAll('.cart-item-remove').forEach(btn=>{
    btn.addEventListener('click',()=>{cart.splice(+btn.dataset.idx,1);renderCart();});
  });
}

/* ══ AUTH ══ */
const authModal  =document.getElementById('authModal');
const authOverlay=document.getElementById('authOverlay');
function openAuth(tab){authModal.classList.add('open');authOverlay.classList.add('open');document.body.style.overflow='hidden';if(tab)switchTab(tab);}
function closeAuth(){authModal.classList.remove('open');authOverlay.classList.remove('open');document.body.style.overflow='';}
function switchTab(tab){
  document.querySelectorAll('.auth-tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));
  document.getElementById('loginForm').style.display   =tab==='login'   ?'block':'none';
  document.getElementById('registerForm').style.display=tab==='register'?'block':'none';
}
document.getElementById('navLoginBtn').addEventListener('click',()=>openAuth('login'));
document.getElementById('navSignupBtn').addEventListener('click',()=>openAuth('register'));
document.getElementById('authClose').addEventListener('click',closeAuth);
authOverlay.addEventListener('click',closeAuth);
document.querySelectorAll('.auth-tab').forEach(t=>t.addEventListener('click',()=>switchTab(t.dataset.tab)));
document.querySelectorAll('.switch-link').forEach(l=>l.addEventListener('click',e=>{e.preventDefault();switchTab(l.dataset.switch);}));
document.getElementById('loginForm').addEventListener('submit',e=>{e.preventDefault();closeAuth();showToast('<i class="fa-solid fa-circle-check"></i> Welcome back!');});
document.getElementById('registerForm').addEventListener('submit',e=>{e.preventDefault();closeAuth();showToast('<i class="fa-solid fa-circle-check"></i> Account created! Welcome to Malola 🌿');});

/* ══ FOOTER FORM ══ */
const footerFormEl=document.getElementById('footerForm');
if(footerFormEl)footerFormEl.addEventListener('submit',e=>{e.preventDefault();showToast('<i class="fa-solid fa-envelope"></i> You\'re subscribed!');});

/* ══ NAV SCROLL ══ */
const mainNav=document.getElementById('mainNav');
window.addEventListener('scroll',()=>{mainNav.classList.toggle('nav-scrolled',window.scrollY>40);},{passive:true});

/* ══ MEGA MENU NAVIGATION ══ */
document.querySelectorAll('.mega-item[data-pdp]').forEach(item=>{
  item.addEventListener('click',()=>{window.location.href='product.html?id='+item.dataset.pdp;});
});

/* ══ RENDER PRODUCT DETAIL PAGE (PDP only) ══ */
(function(){
  if(!document.querySelector('.pdp-main'))return;

  const params =new URLSearchParams(window.location.search);
  const pid    =params.get('id');
  const product=productCatalog[pid];
  if(!product){window.location.href='index.html#kids-shop';return;}

  document.title=product.name+' — Malola';
  document.getElementById('pdpBcName').textContent=product.name;

  const img=document.getElementById('pdpImg');
  img.src=product.image;img.alt=product.name;

  const badge=document.getElementById('pdpImgBadge');
  badge.textContent=product.badge;badge.style.background=product.badgeColor;

  const thumbsRow=document.getElementById('pdpThumbsRow');
  const thumbImgs=[product.image];
  if(product.imageBack&&product.imageBack!==product.image)thumbImgs.push(product.imageBack);
  thumbImgs.forEach((src,i)=>{
    const d=document.createElement('div');
    d.className='pdp-thumb-item'+(i===0?' active':'');
    d.innerHTML=`<img src="${src}" alt="${product.name}">`;
    d.addEventListener('click',()=>{
      img.src=src;
      document.querySelectorAll('.pdp-thumb-item').forEach(t=>t.classList.remove('active'));
      d.classList.add('active');
    });
    thumbsRow.appendChild(d);
  });

  document.getElementById('pdpCat').textContent =product.category;
  document.getElementById('pdpName').textContent=product.name;
  document.getElementById('pdpPrice').textContent='&#8377;'+product.price;

  const weightsEl=document.getElementById('pdpWeights');
  weightsEl.innerHTML=product.weights.map((w,i)=>`<button class="pdp-w-btn${i===0?' active':''}">${w}</button>`).join('');
  weightsEl.querySelectorAll('.pdp-w-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{weightsEl.querySelectorAll('.pdp-w-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');});
  });

  document.getElementById('pdpDesc').textContent=product.description;
  document.getElementById('pdpIng').innerHTML=product.ingredients.map(i=>`<li>${i}</li>`).join('');
  document.getElementById('pdpNut').innerHTML=Object.entries(product.nutrition).map(([k,v])=>`<div class="pdp-nut-cell"><div class="pdp-nut-val">${v}</div><div class="pdp-nut-lbl">${k}</div></div>`).join('');

  let qty=1;
  const qtyEl=document.getElementById('pdpQtyVal');
  document.getElementById('pdpMinus').addEventListener('click',()=>{if(qty>1){qty--;qtyEl.textContent=qty;}});
  document.getElementById('pdpPlus').addEventListener('click',()=>{qty++;qtyEl.textContent=qty;});
  document.getElementById('pdpAddCart').addEventListener('click',()=>{
    for(let i=0;i<qty;i++)addToCart(product.name,product.price,product.image);
    openCart();
    showToast('<i class="fa-solid fa-basket-shopping"></i> '+product.name+' added to cart!');
  });

  const related=Object.values(productCatalog).filter(p=>p.id!==product.id).slice(0,4);
  document.getElementById('pdpRelated').innerHTML=related.map(p=>`
    <div class="pdp-rel-card" onclick="window.location.href='product.html?id=${p.id}'">
      <div class="pdp-rel-img-wrap" style="background:${p.bg}"><img src="${p.image}" alt="${p.name}" class="pdp-rel-img"></div>
      <div class="pdp-rel-body">
        <div class="pdp-rel-cat">${p.category}</div>
        <div class="pdp-rel-name">${p.name}</div>
        <div class="pdp-rel-footer"><div class="pdp-rel-price">&#8377;${p.price}</div><button class="pdp-rel-btn">View</button></div>
      </div>
    </div>`).join('');
})();
