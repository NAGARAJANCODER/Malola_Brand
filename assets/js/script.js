/* ── HERO PRODUCTS ── */
const products=[
  {tag:"Best Seller",title:"Millet\nVanilla",desc:"Creamy vanilla meets wholesome millet in every delightful bite. A smooth, guilt-free treat packed with fibre and natural goodness — loved by kids and parents alike.",image:"assets/images/green.png",badge:"New",name:"Millet Vanilla",type:"Millet Snack",price:"299",word:"VANILLA",bg:"#7fa83a",ring:"#4e7a1e"},
  {tag:"Fan Favourite",title:"Millet\nChoco",desc:"Rich dark chocolate meets wholesome millet in every crunchy bite. A guilt-free indulgence packed with fibre, iron and natural energy — perfect for everyday snacking.",image:"assets/images/a6bf2fb7-be25-4e5c-94f4-ba9215f70999_removalai_preview.png",badge:"Hot",name:"Millet Choco",type:"Millet Snack",price:"299",word:"CHOCO",bg:"#8a6230",ring:"#5c3e18"},
  {tag:"Limited Edition",title:"Blueberry\nPancake",desc:"Light, fluffy pancake bites bursting with real blueberry goodness. Made with wholesome grains and no artificial colours — a breakfast treat anytime of the day.",image:"assets/images/b3e47e53-7399-423b-a88a-c4cadb4de3b3_removalai_preview.png",badge:"Limited",name:"Blueberry Pancake",type:"Pancake Snack",price:"299",word:"BERRY",bg:"#6a3a8c",ring:"#4a2070"},
  {tag:"Seasonal Pick",title:"Quinoa\nPuffs",desc:"Airy, crunchy quinoa puffs seasoned to perfection. Loaded with complete protein and essential amino acids — a smarter snack kids can't put down.",image:"assets/images/red.png",badge:"Season",name:"Quinoa Puffs",type:"Puff Snack",price:"299",word:"PUFFS",bg:"#a05520",ring:"#7a3810"},
];

let current=0,animating=false;
const hero=document.getElementById("hero");
const bgWord=document.getElementById("bgWord");
const productRing=document.getElementById("productRing");
const productImage=document.getElementById("productImage");
const productBadge=document.getElementById("productBadge");
const productLabel=document.getElementById("productLabel");
const slideTag=document.getElementById("slideTag");
const slideTitle=document.getElementById("slideTitle");
const slideDesc=document.getElementById("slideDesc");
const slidePrice=document.getElementById("slidePrice");
const rightThumbs=document.getElementById("rightThumbs");
const dotsContainer=document.getElementById("dotsContainer");
const leftCup=document.getElementById("leftCup");
const rightCup=document.getElementById("rightCup");

products.forEach((p,i)=>{
  const d=document.createElement("div");
  d.className="thumb"+(i===0?" active":"");
  d.dataset.target=i;
  d.innerHTML=`<img class="thumb-image" src="${p.image}" alt="${p.name}"><div><div class="thumb-name">${p.name}</div><div class="thumb-type">${p.type}</div></div>`;
  d.addEventListener("click",()=>goTo(i));
  rightThumbs.appendChild(d);
  const dot=document.createElement("div");
  dot.className="dot"+(i===0?" active":"");
  dot.addEventListener("click",()=>goTo(i));
  dotsContainer.appendChild(dot);
});

const canvas=document.getElementById("beansCanvas");
const ctx=canvas.getContext("2d");
let beans=[];
const glyphs=["coffee","bean","leaf","spark","dot"];
function resizeCanvas(){canvas.width=window.innerWidth;canvas.height=window.innerHeight}
resizeCanvas();
window.addEventListener("resize",resizeCanvas);
function initBeans(){beans=[];for(let i=0;i<18;i++){beans.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,z:0.3+Math.random()*0.7,vx:(Math.random()-.5)*0.35,vy:-(0.15+Math.random()*0.35),vz:(Math.random()-.5)*0.003,rot:Math.random()*360,vr:(Math.random()-.5)*0.6,glyph:glyphs[Math.floor(Math.random()*glyphs.length)],size:14+Math.random()*22,opacity:0.25+Math.random()*0.45})}}
initBeans();
function drawBeans(){ctx.clearRect(0,0,canvas.width,canvas.height);beans.forEach(b=>{b.x+=b.vx;b.y+=b.vy;b.z+=b.vz;b.rot+=b.vr;if(b.z<0.2||b.z>1)b.vz*=-1;if(b.x<-40)b.x=canvas.width+20;if(b.x>canvas.width+40)b.x=-20;if(b.y<-40)b.y=canvas.height+20;if(b.y>canvas.height+40)b.y=-20;const sz=b.size*b.z;ctx.save();ctx.globalAlpha=b.opacity*b.z;ctx.translate(b.x,b.y);ctx.rotate(b.rot*Math.PI/180);ctx.shadowColor="rgba(0,0,0,.15)";ctx.shadowBlur=sz*0.4;ctx.fillStyle="rgba(247,242,227,0.75)";if(b.glyph==="bean"){ctx.scale(0.65,1);ctx.beginPath();ctx.ellipse(0,0,sz*0.42,sz*0.75,0,0,Math.PI*2);ctx.fill();ctx.strokeStyle="rgba(26,36,8,0.35)";ctx.lineWidth=Math.max(1,sz*0.07);ctx.beginPath();ctx.moveTo(0,-sz*0.45);ctx.bezierCurveTo(sz*0.16,-sz*0.18,-sz*0.16,sz*0.18,0,sz*0.45);ctx.stroke();}else{ctx.beginPath();ctx.arc(0,0,sz*0.35,0,Math.PI*2);ctx.fill();}ctx.restore();});requestAnimationFrame(drawBeans);}
drawBeans();

let floatT=0;
function floatProduct(){floatT+=0.018;const y=Math.sin(floatT)*10;const r=Math.sin(floatT*0.7)*1.5;document.getElementById("productStage").style.transform=`translate(-50%,calc(-50% + ${y}px)) rotate(${r}deg)`;requestAnimationFrame(floatProduct);}
floatProduct();

let floatT2=0.8;
function floatSides(){floatT2+=0.015;const y1=Math.sin(floatT2)*8;const y2=Math.sin(floatT2+1.2)*7;leftCup.style.transform=`translateY(${y1}px)`;rightCup.style.transform=`translateY(${y2}px)`;requestAnimationFrame(floatSides);}
floatSides();

const mainNav=document.getElementById("mainNav");
window.addEventListener("scroll",()=>{if(window.scrollY>60){mainNav.classList.add("nav-scrolled");}else{mainNav.classList.remove("nav-scrolled");}},{passive:true});

function goTo(next){
  if(animating||next===current)return;
  animating=true;
  const p=products[next];
  const dir=next>current?1:-1;
  const textEls=[slideTag,slideTitle,slideDesc,slidePrice];
  textEls.forEach((el,i)=>{el.style.transition=`opacity .32s ease ${i*0.03}s, transform .38s cubic-bezier(.77,0,.175,1) ${i*0.03}s`;el.style.opacity="0";el.style.transform=`translateX(${dir*-60}px)`;});
  productImage.style.transition=`transform .42s cubic-bezier(.77,0,.175,1), opacity .3s ease`;
  productImage.style.transform=`translateX(${dir*120}px) scale(0.75)`;
  productImage.style.opacity="0";
  [productBadge,productLabel].forEach(el=>{el.style.transition="opacity .25s";el.style.opacity="0";});
  bgWord.style.transition="opacity .3s";bgWord.style.opacity="0";
  setTimeout(()=>{
    hero.style.background=p.bg;bgWord.textContent=p.word;productRing.style.background=p.ring;productBadge.textContent=p.badge;productLabel.textContent=p.name;slideTag.textContent=p.tag;slideTitle.innerHTML=p.title.replace("\n","<br/>");slideDesc.textContent=p.desc;slidePrice.innerHTML=`<sup>₹</sup>${p.price}`;
    productImage.src=p.image;productImage.alt=p.name;productImage.style.transition="none";productImage.style.transform=`translateX(${dir*-130}px) scale(0.75)`;productImage.style.opacity="0";
    const heroBtn=document.getElementById("heroAddCart");if(heroBtn){heroBtn.dataset.name=p.name;heroBtn.dataset.price=p.price;heroBtn.dataset.image=p.image;}
    requestAnimationFrame(()=>{requestAnimationFrame(()=>{
      productImage.style.transition="transform .62s cubic-bezier(.175,.885,.32,1.15), opacity .45s ease";productImage.style.transform="translateX(0) scale(1)";productImage.style.opacity="1";
      textEls.forEach((el,i)=>{el.style.transition=`none`;el.style.transform=`translateX(${dir*60}px)`;el.style.opacity="0";requestAnimationFrame(()=>{el.style.transition=`opacity .42s ease ${i*0.06+0.05}s, transform .46s cubic-bezier(.175,.885,.32,1.1) ${i*0.06+0.05}s`;el.style.transform="translateX(0)";el.style.opacity="1";});});
      bgWord.style.transition="opacity .45s ease .1s";bgWord.style.opacity="1";
      [productBadge,productLabel].forEach((el,i)=>{el.style.transition=`opacity .4s ease ${0.15+i*0.07}s`;el.style.opacity="1";});
      document.querySelectorAll(".dot").forEach((d,i)=>d.classList.toggle("active",i===next));
      document.querySelectorAll(".thumb").forEach(t=>t.classList.toggle("active",+t.dataset.target===next));
      current=next;setTimeout(()=>animating=false,650);
    });});
  },360);
}
document.getElementById("prevBtn").addEventListener("click",()=>goTo((current-1+products.length)%products.length));
document.getElementById("nextBtn").addEventListener("click",()=>goTo((current+1)%products.length));
let timer=setInterval(()=>goTo((current+1)%products.length),5000);
hero.addEventListener("mouseenter",()=>clearInterval(timer));
hero.addEventListener("mouseleave",()=>{timer=setInterval(()=>goTo((current+1)%products.length),5000)});
document.addEventListener("keydown",e=>{if(e.key==="ArrowRight")goTo((current+1)%products.length);if(e.key==="ArrowLeft")goTo((current-1+products.length)%products.length);});

/* ── REVEAL + COUNTER ── */
const kRevealEls=document.querySelectorAll(".k-reveal");
const kRevObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("k-visible");kRevObserver.unobserve(e.target);}});},{threshold:0.12});
kRevealEls.forEach(el=>kRevObserver.observe(el));

const counters=document.querySelectorAll("[data-count]");
const counterObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    const el=entry.target;
    const target=Number(el.dataset.count);
    const suffix=target===50?"K+":target===100?"%":"+";
    const start=performance.now();
    const duration=1200;
    function tick(now){const progress=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-progress,3);el.textContent=`${Math.round(target*eased)}${suffix}`;if(progress<1)requestAnimationFrame(tick);}
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
},{threshold:0.55});
counters.forEach(counter=>counterObserver.observe(counter));

/* ── CART ── */
let cart=[];
const cartSidebar=document.getElementById("cartSidebar");
const cartOverlay=document.getElementById("cartOverlay");
const cartItemsEl=document.getElementById("cartItems");
const cartEmptyEl=document.getElementById("cartEmpty");
const cartFooterEl=document.getElementById("cartFooter");
const cartTotalEl=document.getElementById("cartTotal");
const cartBadge=document.getElementById("cartBadge");

function openCart(){cartSidebar.classList.add("open");cartOverlay.classList.add("open");document.body.style.overflow="hidden";}
function closeCart(){cartSidebar.classList.remove("open");cartOverlay.classList.remove("open");document.body.style.overflow="";}
document.getElementById("navCartBtn").addEventListener("click",openCart);
document.getElementById("cartClose").addEventListener("click",closeCart);
cartOverlay.addEventListener("click",closeCart);

function addToCart(name,price,image){const existing=cart.find(i=>i.name===name);if(existing){existing.qty+=1;}else{cart.push({name,price:parseFloat(price),image,qty:1});}renderCart();showToast(`<i class="fa-solid fa-circle-check"></i> ${name} added to cart`);}

function renderCart(){
  const total=cart.reduce((s,i)=>s+i.qty,0);
  if(total>0){cartBadge.style.display="flex";cartBadge.textContent=total>99?"99+":total;}else{cartBadge.style.display="none";}
  cartItemsEl.innerHTML="";
  if(cart.length===0){cartItemsEl.appendChild(cartEmptyEl);cartEmptyEl.style.display="block";cartFooterEl.style.display="none";return;}
  cartEmptyEl.style.display="none";cartFooterEl.style.display="block";
  cart.forEach((item,idx)=>{
    const row=document.createElement("div");row.className="cart-item";
    row.innerHTML=`<img class="cart-item-img" src="${item.image}" alt="${item.name}"><div class="cart-item-body"><div class="cart-item-name">${item.name}</div><div class="cart-item-price">₹${(item.price*item.qty).toFixed(2)}</div><div class="cart-qty"><button class="qty-btn" data-idx="${idx}" data-action="dec">&#8722;</button><span class="qty-num">${item.qty}</span><button class="qty-btn" data-idx="${idx}" data-action="inc">&#43;</button></div></div><button class="cart-item-remove" data-idx="${idx}" aria-label="Remove"><i class="fa-solid fa-xmark"></i></button>`;
    cartItemsEl.appendChild(row);
  });
  const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0);
  cartTotalEl.textContent=`₹${subtotal.toFixed(2)}`;
  cartItemsEl.querySelectorAll(".qty-btn").forEach(btn=>{btn.addEventListener("click",()=>{const idx=+btn.dataset.idx;if(btn.dataset.action==="inc"){cart[idx].qty+=1;}else{cart[idx].qty-=1;if(cart[idx].qty<=0)cart.splice(idx,1);}renderCart();});});
  cartItemsEl.querySelectorAll(".cart-item-remove").forEach(btn=>{btn.addEventListener("click",()=>{const idx=+btn.dataset.idx;cart.splice(idx,1);renderCart();});});
}

document.addEventListener("click",e=>{
  const btn=e.target.closest(".add-to-cart-btn");
  if(btn){addToCart(btn.dataset.name,btn.dataset.price,btn.dataset.image);openCart();}
});

const heroAddCartBtn=document.getElementById("heroAddCart");
if(heroAddCartBtn){
  heroAddCartBtn.dataset.name=products[0].name;heroAddCartBtn.dataset.price=products[0].price;heroAddCartBtn.dataset.image=products[0].image;
  heroAddCartBtn.addEventListener("click",()=>{addToCart(heroAddCartBtn.dataset.name,heroAddCartBtn.dataset.price,heroAddCartBtn.dataset.image);openCart();});
}

/* ── AUTH ── */
const authModal=document.getElementById("authModal");
const authOverlay=document.getElementById("authOverlay");
function openAuth(tab){authModal.classList.add("open");authOverlay.classList.add("open");document.body.style.overflow="hidden";if(tab)switchAuthTab(tab);}
function closeAuth(){authModal.classList.remove("open");authOverlay.classList.remove("open");document.body.style.overflow="";}
function switchAuthTab(tab){document.querySelectorAll(".auth-tab").forEach(t=>t.classList.toggle("active",t.dataset.tab===tab));document.getElementById("loginForm").style.display=tab==="login"?"block":"none";document.getElementById("registerForm").style.display=tab==="register"?"block":"none";}
document.getElementById("navLoginBtn").addEventListener("click",()=>openAuth("login"));
document.getElementById("navSignupBtn").addEventListener("click",()=>openAuth("register"));
document.getElementById("authClose").addEventListener("click",closeAuth);
authOverlay.addEventListener("click",closeAuth);
document.querySelectorAll(".auth-tab").forEach(tab=>{tab.addEventListener("click",()=>switchAuthTab(tab.dataset.tab));});
document.querySelectorAll(".switch-link").forEach(link=>{link.addEventListener("click",e=>{e.preventDefault();switchAuthTab(link.dataset.switch);});});
document.getElementById("loginForm").addEventListener("submit",e=>{e.preventDefault();closeAuth();showToast('<i class="fa-solid fa-circle-check"></i> Welcome back! 🎉');});
document.getElementById("registerForm").addEventListener("submit",e=>{e.preventDefault();closeAuth();showToast('<i class="fa-solid fa-circle-check"></i> Account created! Welcome to NaturNest 🌿');});

/* ── TOAST ── */
function showToast(html,duration=3000){
  const container=document.getElementById("toastContainer");
  const t=document.createElement("div");t.className="toast";t.innerHTML=html;
  container.appendChild(t);
  requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add("show")));
  setTimeout(()=>{t.classList.remove("show");setTimeout(()=>t.remove(),420);},duration);
}

/* ── HAMBURGER MOBILE MENU ── */
(function(){
  const ham = document.getElementById('navHamburger');
  const mob = document.getElementById('mobMenu');
  const overlay = document.getElementById('mobMenuOverlay');
  const close = document.getElementById('mobMenuClose');
  function openMob(){mob.classList.add('open');overlay.classList.add('open');ham.classList.add('open');document.body.style.overflow='hidden';}
  function closeMob(){mob.classList.remove('open');overlay.classList.remove('open');ham.classList.remove('open');document.body.style.overflow='';}
  ham.addEventListener('click', openMob);
  close.addEventListener('click', closeMob);
  overlay.addEventListener('click', closeMob);
  document.getElementById('mobLoginBtn').addEventListener('click',()=>{closeMob();openAuth('login');});
  document.getElementById('mobSignupBtn').addEventListener('click',()=>{closeMob();openAuth('register');});
  document.querySelectorAll('.mob-prod-item[data-pdp]').forEach(item=>{
    item.addEventListener('click',()=>{window.location.href='product.html?id='+item.dataset.pdp;});
  });
  document.querySelectorAll('.mob-nav-links a').forEach(a=>{a.addEventListener('click',closeMob);});
})();

/* ── SEARCH WIDGET ── */
(function(){
  const modal     = document.getElementById('searchModal');
  const overlay   = document.getElementById('searchOverlay');
  const smInput   = document.getElementById('smInput');
  const smClear   = document.getElementById('smClear');
  const smBack    = document.getElementById('smBack');
  const smBody    = document.getElementById('smBody');
  const smResults = document.getElementById('smResults');

  const catalog = [
    {id:'milletvanilla',    name:'Millet Vanilla',    cat:'Millet Snack',   price:299, img:'assets/images/green.png'},
    {id:'milletchoco',      name:'Millet Choco',      cat:'Millet Snack',   price:299, img:'assets/images/a6bf2fb7-be25-4e5c-94f4-ba9215f70999_removalai_preview.png'},
    {id:'blueberrypancake', name:'Blueberry Pancake', cat:'Pancake Snack',  price:299, img:'assets/images/b3e47e53-7399-423b-a88a-c4cadb4de3b3_removalai_preview.png'},
    {id:'quinoapuffs',      name:'Quinoa Puffs',      cat:'Puff Snack',     price:299, img:'assets/images/red.png'},
  ];

  function openWidget() {
    modal.classList.add('open');
    overlay.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    setTimeout(() => smInput.focus(), 150);
  }
  function closeWidget() {
    modal.classList.remove('open');
    overlay.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    smInput.value = '';
    smClear.classList.remove('visible');
    smBody.classList.remove('hidden');
    smResults.classList.remove('active');
    smResults.innerHTML = '';
  }

  const navSearchBtn = document.getElementById('navSearchBtn');
  if (navSearchBtn) navSearchBtn.addEventListener('click', e => { e.stopPropagation(); openWidget(); });
  const mobSearchInput = document.getElementById('mobSearchInput');
  if (mobSearchInput) mobSearchInput.addEventListener('focus', openWidget);

  smBack.addEventListener('click', closeWidget);
  overlay.addEventListener('click', closeWidget);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeWidget(); });

  document.querySelectorAll('.sm-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      smInput.value = tag.dataset.q;
      smClear.classList.add('visible');
      doSearch(tag.dataset.q);
    });
  });

  smInput.addEventListener('input', () => {
    const q = smInput.value.trim();
    smClear.classList.toggle('visible', q.length > 0);
    doSearch(q);
  });

  smClear.addEventListener('click', () => {
    smInput.value = '';
    smClear.classList.remove('visible');
    smBody.classList.remove('hidden');
    smResults.classList.remove('active');
    smResults.innerHTML = '';
    smInput.focus();
  });

  function doSearch(q) {
    if (!q) {
      smBody.classList.remove('hidden');
      smResults.classList.remove('active');
      smResults.innerHTML = '';
      return;
    }
    smBody.classList.add('hidden');
    smResults.classList.add('active');
    const matches = catalog.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.cat.toLowerCase().includes(q.toLowerCase())
    );
    if (matches.length === 0) {
      smResults.innerHTML = `<div class="sm-no-result"><i class="fa-solid fa-magnifying-glass"></i><p>No results for "${q}"</p><span>Try Millet, Puffs or Pancake</span></div>`;
    } else {
      smResults.innerHTML = `<div class="sm-res-label">${matches.length} result${matches.length>1?'s':''} found</div>` +
        matches.map(p => `
          <div class="sm-res-item" onclick="window.location.href='product.html?id=${p.id}'">
            <img src="${p.img}" alt="${p.name}" class="sm-res-img">
            <div class="sm-res-info">
              <div class="sm-res-name">${p.name}</div>
              <div class="sm-res-cat">${p.cat} · 100g</div>
              <div class="sm-res-price">₹${p.price}</div>
            </div>
            <button class="sm-res-add add-to-cart-btn" data-name="${p.name}" data-price="${p.price}" data-image="${p.img}" onclick="event.stopPropagation()">ADD</button>
          </div>`
        ).join('');
    }
  }
})();

/* ── PRODUCT PAGE NAVIGATION ── */
(function(){
  /* mega menu items → navigate to product page */
  document.querySelectorAll('.mega-item[data-pdp]').forEach(item => {
    item.addEventListener('click', () => {
      window.location.href = 'product.html?id=' + item.dataset.pdp;
    });
  });

  /* product cards on page → navigate to product page */
  const nameMap = {
    'Millet Vanilla':'milletvanilla','Millet Choco':'milletchoco',
    'Blueberry Pancake':'blueberrypancake','Quinoa Puffs':'quinoapuffs',
  };
  document.querySelectorAll('.k-prod-card').forEach(card => {
    const nameEl = card.querySelector('.k-prod-name');
    if (!nameEl) return;
    const pid = nameMap[nameEl.textContent.trim()];
    if (!pid) return;
    card.addEventListener('click', e => {
      if (e.target.closest('.add-to-cart-btn')) return;
      window.location.href = 'product.html?id=' + pid;
    });
  });
})();

/* ── REELS SLIDER ── */
(function(){
  const viewport = document.getElementById('reelsViewport');
  const track    = document.getElementById('reelsTrack');
  const prevBtn  = document.getElementById('reelPrev');
  const nextBtn  = document.getElementById('reelNext');
  const dotsWrap = document.getElementById('reelsDots');
  if (!track) return;

  const cards = Array.from(track.querySelectorAll('.reel-card'));
  const total = cards.length;
  const GAP   = 20;
  let current  = 1;
  let dragStartX = 0, dragDelta = 0, dragging = false;

  /* create dots */
  cards.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'reels-dot';
    d.setAttribute('aria-label', 'Reel ' + (i + 1));
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  });
  const dots = Array.from(dotsWrap.querySelectorAll('.reels-dot'));

  function applyCarousel(extraPx) {
    const cardW  = cards[0].offsetWidth;
    const slot   = cardW + GAP;
    const vpW    = viewport.offsetWidth;
    let offset   = (vpW / 2) - (current * slot) - (cardW / 2);
    if (extraPx) offset += extraPx;
    track.style.transform = 'translateX(' + offset + 'px)';

    cards.forEach((card, i) => {
      const isActive = i === current;
      card.classList.toggle('active', isActive);
      const v = card.querySelector('.reel-video');
      if (isActive && !card.classList.contains('user-paused')) {
        v.play().catch(() => {});
      } else if (!isActive) {
        v.pause();
        card.classList.remove('user-paused');
      }
    });

    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
  }

  function goTo(idx) {
    if (idx < 0 || idx >= total) return;
    current = idx;
    applyCarousel();
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  /* click card: center it; click active: pause/resume */
  cards.forEach(card => {
    const video   = card.querySelector('.reel-video');
    const muteBtn = card.querySelector('.reel-mute-btn');

    card.addEventListener('click', e => {
      if (e.target.closest('.reel-mute-btn') || dragging) return;
      const idx = parseInt(card.dataset.index);
      if (idx !== current) { goTo(idx); return; }
      if (video.paused) {
        video.play().catch(() => {});
        card.classList.remove('user-paused');
      } else {
        video.pause();
        card.classList.add('user-paused');
      }
    });

    if (muteBtn) {
      muteBtn.addEventListener('click', e => {
        e.stopPropagation();
        video.muted = !video.muted;
        muteBtn.innerHTML = video.muted
          ? '<i class="fa-solid fa-volume-xmark"></i>'
          : '<i class="fa-solid fa-volume-high"></i>';
      });
    }

    /* auto-advance to next reel when video ends */
    video.addEventListener('ended', () => {
      const next = (parseInt(card.dataset.index) + 1) % total;
      goTo(next);
    });
  });

  /* touch swipe */
  viewport.addEventListener('touchstart', e => {
    dragStartX = e.touches[0].clientX; dragging = false;
  }, { passive: true });
  viewport.addEventListener('touchmove', e => {
    dragDelta = e.touches[0].clientX - dragStartX;
    if (Math.abs(dragDelta) > 10) dragging = true;
  }, { passive: true });
  viewport.addEventListener('touchend', () => {
    if (Math.abs(dragDelta) > 55) goTo(dragDelta < 0 ? current + 1 : current - 1);
    dragDelta = 0;
    setTimeout(() => { dragging = false; }, 50);
  });

  /* mouse drag */
  viewport.addEventListener('mousedown', e => {
    dragStartX = e.clientX; dragging = false;
    track.classList.add('dragging');
  });
  window.addEventListener('mousemove', e => {
    if (!track.classList.contains('dragging')) return;
    dragDelta = e.clientX - dragStartX;
    if (Math.abs(dragDelta) > 8) dragging = true;
    applyCarousel(dragDelta * 0.65);
  });
  window.addEventListener('mouseup', () => {
    if (!track.classList.contains('dragging')) return;
    track.classList.remove('dragging');
    if (Math.abs(dragDelta) > 55) goTo(dragDelta < 0 ? current + 1 : current - 1);
    else applyCarousel();
    dragDelta = 0;
    setTimeout(() => { dragging = false; }, 50);
  });

  /* pause when section scrolls out of view */
  const section = document.getElementById('kids-video');
  if (section) {
    new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) {
        cards.forEach(c => c.querySelector('.reel-video').pause());
      } else {
        const v = cards[current].querySelector('.reel-video');
        if (!cards[current].classList.contains('user-paused')) v.play().catch(() => {});
      }
    }, { threshold: 0.2 }).observe(section);
  }

  applyCarousel();
  window.addEventListener('resize', () => applyCarousel());
})();

/* ── FOOTER FORM ── */
document.getElementById("footerForm")?.addEventListener("submit",e=>{e.preventDefault();showToast('<i class="fa-solid fa-envelope"></i> You\'re subscribed! 🎉');});

/* ── OWL CAROUSEL ── */
$(function(){
  $(".kids-testimonial-carousel").owlCarousel({
    loop:true,margin:24,nav:true,dots:true,
    center:true,autoplay:true,autoplayTimeout:5000,autoplayHoverPause:true,
    navText:["&#8592;","&#8594;"],
    responsive:{0:{items:1},768:{items:2},1200:{items:3}}
  });
});
