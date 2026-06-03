let current = 0;
let detail = null;
const LABELS = ['Cover','Soups & Starters','Salads & Wok','Seafood & Kenyan','Grills & Burgers','Pizza & Desserts','Back Cover'];

function coverHTML(){
  return `<div class="slide-panel cover-panel">
    <div class="cover-inner">
      <div class="c-corner tl"></div><div class="c-corner tr"></div>
      <div class="c-corner bl"></div><div class="c-corner br"></div>
      <p class="cv-logo">Fine Dining · Nairobi</p>
      <h1 class="cv-name">Chakula<br>Restaurant</h1>
      <p class="cv-sub">À la Carte Menu</p>
      <span class="cv-orn">— ✦ —</span>
      <p class="cv-date">Open 9:30am – 10:30pm</p>
      <p class="cv-address">Ngong Road, Opposite Juncton Mall<br>+254 700 000 000</p>
      <p class="cv-hint">Swipe or tap arrows to browse</p>
    </div>
  </div>`;
}

function tocHTML(){
  const rows = TOC.map(t=>`<div class="toc-entry"><span>${t.label}</span><span class="toc-pg">${t.pg}</span></div>`).join('');
  return `<div class="slide-panel">
    <span class="sec-label">Contents</span>
    <span class="orn">✦</span>
    ${rows}
    <span class="orn" style="margin-top:10px">✦</span>
    <p class="toc-note">Our menu contains dangerously delicious items that may cause uncontrollable "mmm" sounds.</p>
  </div>`;
}

function backHTML(){
  return `<div class="slide-panel back-panel">
    <div class="back-cover">
      <span class="back-orn">✦ ✦ ✦</span>
      <p class="back-msg">Thank you for dining with us.<br>We hope to welcome you again soon.</p>
      <p class="back-name">Chakula Restaurant · Nairobi</p>
      <p class="back-web">www.chakulahotel.com</p>
      <p class="back-tel">+254 700 000 000</p>
    </div>
  </div>`;
}

function sectionHTML(page, pgNum){
  if(detail && detail.spread === current){
    const d = detail.dish;
    const chips = d.ings.map(i=>{
      let c='chip'; if(i.v) c+=' v'; if(i.a) c+=' a';
      return `<span class="${c}">${i.n}</span>`;
    }).join('');
    return `<div class="slide-panel detail-panel">
      <button class="back-btn" onclick="closeDetail()">&#8592; Back to menu</button>
      <img class="detail-img" src="${d.img}" alt="${d.name}" loading="lazy">
      <div class="detail-name">${d.name}</div>
      <div class="detail-sub">${d.sub}</div>
      <div class="detail-price">${d.price}</div>
      <div class="detail-desc">${d.desc}</div>
      <div class="detail-ings-label">Ingredients</div>
      <div class="ings-chips">${chips}</div>
      <div class="chip-legend">
        <span class="chip v">Green = Vegan</span>
        <span class="chip a">Red = Allergen</span>
      </div>
      <span class="pn">${pgNum}</span>
    </div>`;
  }

  const items = page.items.map((item, i) => `
    <div class="dish-item" onclick="openDetail(${i})">
      <img class="dish-thumb" src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=120&q=60'">
      <div class="dish-item-info">
        <div class="dish-item-name">${item.name}</div>
        <div class="dish-item-sub">${item.sub}</div>
      </div>
      <div class="dish-item-price">${item.price}</div>
    </div>`).join('');

  return `<div class="slide-panel">
    <span class="sec-label">${page.label}</span>
    <div class="dish-list">${items}</div>
    <span class="pn">${pgNum}</span>
  </div>`;
}

function getHTML(spread){
  const s = SPREADS[spread];
  // Mobile: show only one page at a time — left on even step, right on odd
  // Actually for mobile we show combined single page
  return buildSpreadHTML(s, spread);
}

function buildSpreadHTML(s, spreadIdx){
  const pgNum = spreadIdx === 0 ? '' : spreadIdx * 2;
  if(!s) return '<div class="slide-panel"></div>';

  // For single-page mobile view, we combine both sides
  if(s.left.type === 'cover'){
    return coverHTML();
  }
  if(s.left.type === 'back'){
    return backHTML();
  }
  if(s.left.type === 'toc'){
    return tocHTML();
  }

  // Section pages — show left section, detail overrides
  if(detail && detail.spread === spreadIdx){
    return sectionHTML(s.left, pgNum); // detail shown full page
  }

  // Two sections combined for mobile scroll
  const leftHTML = sectionInnerHTML(s.left, spreadIdx, 'left');
  const rightHTML = s.right && s.right.type === 'section' ? sectionInnerHTML(s.right, spreadIdx, 'right') : '';

  return `<div class="slide-panel dual-panel">
    ${leftHTML}
    ${rightHTML ? `<div class="section-divider"><span class="orn">✦</span></div>${rightHTML}` : ''}
  </div>`;
}

function sectionInnerHTML(page, spreadIdx, side){
  const items = page.items.map((item, i) => `
    <div class="dish-item" onclick="openDetail(${i}, '${side}')">
      <img class="dish-thumb" src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=120&q=60'">
      <div class="dish-item-info">
        <div class="dish-item-name">${item.name}</div>
        <div class="dish-item-sub">${item.sub}</div>
      </div>
      <div class="dish-item-price">${item.price}</div>
    </div>`).join('');

  return `<div class="section-block">
    <span class="sec-label">${page.label}</span>
    <div class="dish-list">${items}</div>
  </div>`;
}

function render(dir){
  const container = document.getElementById('book-container');
  const newHTML = getHTML(current);

  if(dir === 0){
    container.innerHTML = newHTML;
    updateNav();
    return;
  }

  // Slide animation
  const incoming = document.createElement('div');
  incoming.className = 'page-incoming';
  incoming.innerHTML = newHTML;
  incoming.style.transform = dir === 1 ? 'translateX(100%)' : 'translateX(-100%)';
  container.appendChild(incoming);

  // Force reflow
  incoming.getBoundingClientRect();

  container.style.transition = 'none';
  incoming.style.transition = 'transform 0.38s cubic-bezier(0.4,0,0.2,1)';

  // Slide out current, slide in new
  const current_el = container.querySelector('.slide-panel, .dual-panel');
  if(current_el){
    current_el.style.transition = 'transform 0.38s cubic-bezier(0.4,0,0.2,1)';
    current_el.style.transform = dir === 1 ? 'translateX(-100%)' : 'translateX(100%)';
  }
  incoming.style.transform = 'translateX(0)';

  setTimeout(() => {
    container.innerHTML = newHTML;
    updateNav();
  }, 380);
}

function updateNav(){
  document.getElementById('pg-ind').textContent = LABELS[current] || `Page ${current + 1}`;
  document.getElementById('btn-prev').disabled = current <= 0;
  document.getElementById('btn-next').disabled = current >= SPREADS.length - 1;
}

function turn(dir){
  const next = current + dir;
  if(next < 0 || next >= SPREADS.length) return;
  detail = null;
  current = next;
  render(dir);
}

function openDetail(idx, side){
  const s = SPREADS[current];
  const page = side === 'right' ? s.right : s.left;
  if(!page || !page.items) return;
  detail = { spread: current, dish: page.items[idx] };
  render(0);
}

function closeDetail(){
  detail = null;
  render(0);
}

// Swipe support
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if(Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50){
    if(detail) return;
    turn(dx < 0 ? 1 : -1);
  }
}, { passive: true });

// Init
render(0);