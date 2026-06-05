const book   = document.getElementById('book');
const canvas = document.getElementById('curl-canvas');
const ctx    = canvas.getContext('2d');
const dotsEl = document.getElementById('nav-dots');

let W = 0, H = 0, dpr = 1;
let currentPage = 0;
let detail = null;
let pageEls = [];
let isDragging = false;
let dragStartX = null;
let dragX = 0;
let dragDir = 0;
let animating = false;

/* ── Resize ── */
function resize() {
  const r = book.getBoundingClientRect();
  W = r.width; H = r.height;
  dpr = window.devicePixelRatio || 1;
  canvas.width  = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

/* ── HTML builders ── */
function coverHTML() {
  return `<div class="cover-wrap"><div class="cover-box">
    <div class="cc tl"></div><div class="cc tr"></div>
    <div class="cc bl"></div><div class="cc br"></div>
    <p class="cv-est">Fine Dining · Nairobi</p>
    <h1 class="cv-title">Chakula<br>Restaurant</h1>
    <p class="cv-sub">À la Carte Menu</p>
    <span class="cv-orn">— ✦ —</span>
    <p class="cv-date">Open Daily · Lunch & Dinner</p>
    <p class="cv-addr">Ngong Road, Opposite Junction Mall<br>Nairobi, Kenya</p>
    <p class="cv-hint">Swipe left to open the menu ›</p>
  </div></div>`;
}

function tocHTML() {
  const rows = TOC_ITEMS.map(t =>
    `<div class="toc-row"><span>${t.label}</span><span class="toc-pg">${t.pg}</span></div>`
  ).join('');
  return `<span class="sec-lbl">Contents</span>
    <span class="orn">✦</span>
    ${rows}
    <p class="toc-note">Every dish at Chakula is crafted with fresh, locally sourced ingredients and a love for bold Kenyan flavour.</p>`;
}

function sectionHTML(pg, pageIdx) {
  if (detail !== null && detail.page === pageIdx) {
    const d = pg.items[detail.idx];
    const chips = d.ings.map(i => {
      let c = 'chip';
      if (i.v) c += ' v';
      if (i.a) c += ' a';
      return `<span class="${c}">${i.n}</span>`;
    }).join('');
    return `<button class="back-btn" onclick="closeDetail()">&#8592; Back to menu</button>
      <img class="det-img" src="${d.img}" alt="${d.name}" loading="lazy"
        onerror="this.src='${IMG.fallback}'">
      <div class="det-name">${d.name}</div>
      <div class="det-sub">${d.sub}</div>
      <span class="det-price">${d.price}</span>
      <p class="det-desc">${d.desc}</p>
      <div class="det-ing-lbl">Ingredients</div>
      <div class="chips">${chips}</div>
      <div class="chip-legend">
        <span class="chip v">Green = Vegan</span>
        <span class="chip a">Red = Allergen</span>
      </div>`;
  }

  const items = pg.items.map((it, i) => `
    <div class="dish-item" onclick="openDetail(${i})">
      <img class="d-thumb" src="${it.img}" alt="${it.name}" loading="lazy"
        onerror="this.src='${IMG.fallback}'">
      <div class="d-info">
        <div class="d-name">${it.name}</div>
        <div class="d-sub">${it.sub}</div>
      </div>
      <div class="d-price">${it.price}</div>
    </div>`).join('');

  return `<span class="sec-lbl">${pg.label}</span>${items}`;
}

function backHTML() {
  return `<div class="back-pg"><div>
    <div class="back-orn">✦ ✦ ✦</div>
    <p class="back-msg">Asante sana.<br>Thank you for dining<br>with us today.</p>
    <span class="back-name">Chakula Restaurant</span>
    <p class="back-addr">Ngong Road, Opposite Junction Mall<br>Nairobi, Kenya</p>
  </div></div>`;
}

function getInnerHTML(idx) {
  const pg = PAGES[idx];
  if (!pg) return '';
  if (pg.type === 'cover')   return coverHTML();
  if (pg.type === 'toc')     return tocHTML();
  if (pg.type === 'section') return sectionHTML(pg, idx);
  if (pg.type === 'back')    return backHTML();
  return '';
}

/* ── Build all pages ── */
function buildAllPages() {
  book.querySelectorAll('.page').forEach(e => e.remove());
  pageEls = [];

  for (let i = PAGES.length - 1; i >= 0; i--) {
    const div = document.createElement('div');
    div.className = 'page';
    div.style.zIndex = PAGES.length - i;

    const inner = document.createElement('div');
    inner.className = 'page-content';
    inner.innerHTML = getInnerHTML(i);
    div.appendChild(inner);

    if (i < currentPage) div.style.display = 'none';

    book.appendChild(div);
    pageEls[i] = div;
  }
  renderDots();
}

function rerenderPage(idx) {
  const el = pageEls[idx];
  if (!el) return;
  el.querySelector('.page-content').innerHTML = getInnerHTML(idx);
}

function renderDots() {
  dotsEl.innerHTML = '';
  const total = Math.min(PAGES.length, 12);
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === currentPage ? ' active' : '');
    dotsEl.appendChild(d);
  }
}

/* ── Canvas curl drawing ── */
function drawCurl(progress, dir) {
  ctx.clearRect(0, 0, W, H);
  if (progress <= 0) return;

  const shadowW = 30;

  if (dir === 1) {
    const foldX = W * (1 - progress);
    const el = pageEls[currentPage];
    if (el) el.style.clipPath = `inset(0 ${Math.round(W - foldX)}px 0 0)`;

    const grad = ctx.createLinearGradient(foldX, 0, foldX + shadowW, 0);
    grad.addColorStop(0, 'rgba(70,35,5,0.30)');
    grad.addColorStop(1, 'rgba(70,35,5,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(foldX, 0, shadowW, H);

    ctx.strokeStyle = 'rgba(255,245,220,0.6)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(foldX, 0);
    ctx.lineTo(foldX, H);
    ctx.stroke();

  } else {
    const foldX = W * progress;
    const grad = ctx.createLinearGradient(foldX - shadowW, 0, foldX, 0);
    grad.addColorStop(0, 'rgba(70,35,5,0)');
    grad.addColorStop(1, 'rgba(70,35,5,0.30)');
    ctx.fillStyle = grad;
    ctx.fillRect(foldX - shadowW, 0, shadowW, H);

    ctx.strokeStyle = 'rgba(255,245,220,0.6)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(foldX, 0);
    ctx.lineTo(foldX, H);
    ctx.stroke();
  }
}

function clearCurl() {
  ctx.clearRect(0, 0, W, H);
  pageEls.forEach(el => { if (el) el.style.clipPath = 'none'; });
}

/* ── Touch events ── */
function getX(e) {
  return (e.touches ? e.touches[0].clientX : e.clientX) - book.getBoundingClientRect().left;
}

function onStart(e) {
  if (animating || detail !== null) return;
  dragStartX = getX(e);
  dragX = dragStartX;
  isDragging = false;
  dragDir = dragStartX > W * 0.25 ? 1 : -1;
}

function onMove(e) {
  if (dragStartX === null || animating || detail !== null) return;
  e.preventDefault();
  dragX = getX(e);
  const dx = dragX - dragStartX;
  if (Math.abs(dx) < 8) return;

  isDragging = true;
  const swipeDir = dx < 0 ? 1 : -1;
  if (swipeDir !== dragDir) return;
  if (dragDir ===  1 && currentPage >= PAGES.length - 1) return;
  if (dragDir === -1 && currentPage <= 0) return;

  const progress = Math.min(1, Math.abs(dx) / W);

  if (dragDir === 1) {
    drawCurl(progress, 1);
  } else {
    const prevEl = pageEls[currentPage - 1];
    if (prevEl) prevEl.style.display = '';
    drawCurl(1 - progress, 1);
  }
}

function onEnd() {
  if (!isDragging) { dragStartX = null; return; }
  isDragging = false;

  const dx = dragX - dragStartX;
  const swipeDir = dx < 0 ? 1 : -1;
  const threshold = W * 0.18;

  if (Math.abs(dx) > threshold && swipeDir === dragDir) {
    clearCurl();
    if (dragDir === 1 && currentPage < PAGES.length - 1) {
      const el = pageEls[currentPage];
      if (el) el.style.display = 'none';
      currentPage++;
      detail = null;
      rerenderPage(currentPage);
      renderDots();
    } else if (dragDir === -1 && currentPage > 0) {
      currentPage--;
      detail = null;
      const prevEl = pageEls[currentPage];
      if (prevEl) prevEl.style.display = '';
      rerenderPage(currentPage);
      renderDots();
    }
  } else {
    clearCurl();
    if (dragDir === -1 && currentPage > 0) {
      const prevEl = pageEls[currentPage - 1];
      if (prevEl) prevEl.style.display = 'none';
    }
  }

  dragStartX = null;
  const hint = document.getElementById('swipe-hint');
  if (hint) hint.remove();
}

book.addEventListener('touchstart', onStart, { passive: true  });
book.addEventListener('touchmove',  onMove,  { passive: false });
book.addEventListener('touchend',   onEnd);
book.addEventListener('mousedown',  onStart);
book.addEventListener('mousemove',  onMove);
window.addEventListener('mouseup',  onEnd);

/* ── Public functions called from HTML ── */
function openDetail(idx) {
  detail = { page: currentPage, idx };
  rerenderPage(currentPage);
  const el = pageEls[currentPage];
  if (el) el.querySelector('.page-content').scrollTop = 0;
}

function closeDetail() {
  detail = null;
  rerenderPage(currentPage);
}

/* ── Init ── */
window.addEventListener('resize', resize);
resize();
buildAllPages();