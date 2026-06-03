const MENU = [
  {
    section: "Starters",
    items: [
      {
        id: 1, name: "Seared sea scallops", sub: "cauliflower velouté",
        price: "KES 2,800", tags: ["gluten-free", "signature"],
        desc: "Hand-dived scallops from the Kenyan coast, seared golden and rested on a silky roasted cauliflower velouté. A study in oceanic elegance.",
        ingredients: [
          {name:"Sea scallops",vegan:false,allergen:true},
          {name:"Cauliflower",vegan:true,allergen:false},
          {name:"Cream",vegan:false,allergen:true},
          {name:"Golden raisins",vegan:true,allergen:false},
          {name:"Capers",vegan:true,allergen:false},
          {name:"Micro herbs",vegan:true,allergen:false},
          {name:"Butter",vegan:false,allergen:true}
        ],
        sourcing: "Scallops sustainably harvested from Mombasa waters. Cauliflower from Limuru highlands.",
        pairing: "Chablis Premier Cru 2021 — its mineral salinity echoes the sea"
      },
      {
        id: 2, name: "Duck liver parfait", sub: "Amaretto & toasted brioche",
        price: "KES 2,400", tags: ["signature", "new"],
        desc: "A velvet-smooth parfait of free-range duck liver, perfumed with Amaretto and served with warm toasted brioche and pickled elderberries.",
        ingredients: [
          {name:"Duck liver",vegan:false,allergen:false},
          {name:"Butter",vegan:false,allergen:true},
          {name:"Amaretto",vegan:true,allergen:true},
          {name:"Brioche",vegan:false,allergen:true},
          {name:"Elderberries",vegan:true,allergen:false},
          {name:"Cream",vegan:false,allergen:true}
        ],
        sourcing: "Free-range Naivasha duck. Elderberries foraged in season.",
        pairing: "Sauternes 2019 — honeyed sweetness cuts through the richness"
      },
      {
        id: 3, name: "Heritage beetroot", sub: "aged goat's cheese & walnut",
        price: "KES 1,900", tags: ["vegetarian", "gluten-free"],
        desc: "Roasted and raw heritage beets in crimson, gold and candy-stripe, paired with aged Kenyan goat's cheese, candied walnuts and blood orange.",
        ingredients: [
          {name:"Heritage beetroot",vegan:true,allergen:false},
          {name:"Goat's cheese",vegan:false,allergen:true},
          {name:"Walnuts",vegan:true,allergen:true},
          {name:"Blood orange",vegan:true,allergen:false},
          {name:"Watercress",vegan:true,allergen:false},
          {name:"Honey",vegan:false,allergen:false}
        ],
        sourcing: "Beets grown organically in Tigoni. Goat's cheese from Kiambu creamery.",
        pairing: "Sancerre Rosé 2022 — earthy minerality mirrors the beets"
      },
      {
        id: 4, name: "Wild mushroom tartare", sub: "truffle oil & sourdough crisps",
        price: "KES 2,100", tags: ["vegan", "signature"],
        desc: "Finely diced oyster and shiitake mushrooms, dressed in truffle oil, capers and shallots — a bold vegan take on a classic form.",
        ingredients: [
          {name:"Oyster mushrooms",vegan:true,allergen:false},
          {name:"Shiitake",vegan:true,allergen:false},
          {name:"Truffle oil",vegan:true,allergen:false},
          {name:"Capers",vegan:true,allergen:false},
          {name:"Shallots",vegan:true,allergen:false},
          {name:"Sourdough",vegan:true,allergen:true},
          {name:"Dijon mustard",vegan:true,allergen:true}
        ],
        sourcing: "Mushrooms cultivated in Naivasha. Truffle oil imported from Périgord.",
        pairing: "Viognier 2022 — floral aromatics lift the earthiness beautifully"
      }
    ]
  },
  {
    section: "Main courses",
    items: [
      {
        id: 5, name: "Wagyu beef tenderloin", sub: "A4 grade · truffle jus",
        price: "KES 8,900", tags: ["gluten-free", "signature"],
        desc: "Japanese A4 Wagyu cooked to your preferred temperature, finished with a black truffle jus, pomme fondant and asparagus. The pinnacle of the menu.",
        ingredients: [
          {name:"Wagyu tenderloin",vegan:false,allergen:false},
          {name:"Black truffle",vegan:true,allergen:false},
          {name:"Bone marrow",vegan:false,allergen:false},
          {name:"Asparagus",vegan:true,allergen:false},
          {name:"Shallots",vegan:true,allergen:false},
          {name:"Butter",vegan:false,allergen:true},
          {name:"Veal stock",vegan:false,allergen:false}
        ],
        sourcing: "A4 Wagyu imported from Kagoshima, Japan. Truffle from Périgord, France.",
        pairing: "Château Pichon Baron 2015 — structured tannins embrace the marbling"
      },
      {
        id: 6, name: "Pan-roasted halibut", sub: "saffron beurre blanc & Nduma gnocchi",
        price: "KES 5,600", tags: ["gluten-free"],
        desc: "Wild Atlantic halibut on a bed of arrow-root gnocchi — a nod to Kenyan heritage — bathed in a delicate saffron and white wine beurre blanc.",
        ingredients: [
          {name:"Halibut fillet",vegan:false,allergen:true},
          {name:"Saffron",vegan:true,allergen:false},
          {name:"Nduma (arrowroot)",vegan:true,allergen:false},
          {name:"White wine",vegan:true,allergen:true},
          {name:"Butter",vegan:false,allergen:true},
          {name:"Fennel",vegan:true,allergen:false},
          {name:"Sea vegetables",vegan:true,allergen:false}
        ],
        sourcing: "Wild halibut, line-caught. Nduma sourced from Meru county farmers.",
        pairing: "Meursault 2020 — Burgundian richness mirrors the beurre blanc"
      },
      {
        id: 7, name: "Rack of lamb Provençal", sub: "herb crust & ratatouille",
        price: "KES 7,400", tags: ["signature"],
        desc: "Rift Valley lamb in a Provençal herb and pistachio crust, served alongside a slow-cooked ratatouille Niçoise and olive tapenade.",
        ingredients: [
          {name:"Rack of lamb",vegan:false,allergen:false},
          {name:"Pistachios",vegan:true,allergen:true},
          {name:"Herbes de Provence",vegan:true,allergen:false},
          {name:"Courgette",vegan:true,allergen:false},
          {name:"Aubergine",vegan:true,allergen:false},
          {name:"Olives",vegan:true,allergen:false},
          {name:"Breadcrumbs",vegan:true,allergen:true}
        ],
        sourcing: "Free-range lamb from Naivasha Valley farm. Herbs from our kitchen garden.",
        pairing: "Gigondas 2018 — southern Rhône structure matches the herb-roasted lamb"
      },
      {
        id: 8, name: "Wild mushroom risotto", sub: "black truffle & Parmesan foam",
        price: "KES 4,200", tags: ["vegetarian", "gluten-free", "new"],
        desc: "Slow-stirred Carnaroli rice with porcini and wild mushrooms, crowned with hand-shaved black truffle and an airy Parmesan foam.",
        ingredients: [
          {name:"Carnaroli rice",vegan:true,allergen:false},
          {name:"Porcini",vegan:true,allergen:false},
          {name:"Black truffle",vegan:true,allergen:false},
          {name:"Parmesan",vegan:false,allergen:true},
          {name:"White wine",vegan:true,allergen:true},
          {name:"Shallots",vegan:true,allergen:false},
          {name:"Vegetable stock",vegan:true,allergen:false}
        ],
        sourcing: "Carnaroli from Vercelli, Italy. Mushrooms from Naivasha, truffle from France.",
        pairing: "Barolo 2017 — earthy tannins are a natural partner to wild fungi"
      },
      {
        id: 9, name: "Aubergine & lentil Wellington", sub: "miso glaze · heritage carrots",
        price: "KES 3,800", tags: ["vegan", "new"],
        desc: "A showpiece vegan Wellington: roasted aubergine, Puy lentils and spinach duxelles wrapped in golden puff pastry with a rich miso glaze.",
        ingredients: [
          {name:"Aubergine",vegan:true,allergen:false},
          {name:"Puy lentils",vegan:true,allergen:false},
          {name:"Puff pastry",vegan:true,allergen:true},
          {name:"White miso",vegan:true,allergen:true},
          {name:"Spinach",vegan:true,allergen:false},
          {name:"Heritage carrots",vegan:true,allergen:false},
          {name:"Walnuts",vegan:true,allergen:true}
        ],
        sourcing: "All produce organic and locally sourced from Central Kenya cooperatives.",
        pairing: "Côtes du Rhône Rouge 2021 — medium-bodied red complements the miso depth"
      }
    ]
  },
  {
    section: "Desserts",
    items: [
      {
        id: 10, name: "Valrhona chocolate marquise", sub: "salted caramel & praline",
        price: "KES 2,200", tags: ["gluten-free", "signature"],
        desc: "An intensely dark 72% Valrhona marquise, barely set, with layers of praline feuilletine and a velvet salted caramel sauce. Pure indulgence.",
        ingredients: [
          {name:"Valrhona 72% chocolate",vegan:true,allergen:true},
          {name:"Salted caramel",vegan:false,allergen:true},
          {name:"Praline",vegan:true,allergen:true},
          {name:"Egg yolks",vegan:false,allergen:true},
          {name:"Butter",vegan:false,allergen:true},
          {name:"Vanilla ice cream",vegan:false,allergen:true}
        ],
        sourcing: "Valrhona couverture sourced directly from Tain-l'Hermitage, France.",
        pairing: "Pedro Ximénez — dense raisin sweetness against the bitter chocolate"
      },
      {
        id: 11, name: "Passion fruit soufflé", sub: "mango sorbet · coconut anglaise",
        price: "KES 2,600", tags: ["gluten-free", "new"],
        desc: "A cloud-light hot soufflé perfumed with Kenyan passion fruit, served tableside with mango sorbet and coconut crème anglaise. Please allow 18 minutes.",
        ingredients: [
          {name:"Passion fruit",vegan:true,allergen:false},
          {name:"Egg whites",vegan:false,allergen:true},
          {name:"Mango",vegan:true,allergen:false},
          {name:"Coconut milk",vegan:true,allergen:false},
          {name:"Sugar",vegan:true,allergen:false},
          {name:"Egg yolks",vegan:false,allergen:true}
        ],
        sourcing: "Passion fruit and mango from Ukambani region growers.",
        pairing: "Moscato d'Asti — effervescent sweetness dances with tropical fruit"
      },
      {
        id: 12, name: "Dark chocolate & avocado torte", sub: "raspberry coulis",
        price: "KES 2,000", tags: ["vegan", "gluten-free", "signature"],
        desc: "A velvety, entirely plant-based torte using ripe Kenyan avocado as its base — impossibly rich, with a vivid raspberry coulis and cacao nibs.",
        ingredients: [
          {name:"Avocado",vegan:true,allergen:false},
          {name:"Dark chocolate",vegan:true,allergen:true},
          {name:"Cacao nibs",vegan:true,allergen:false},
          {name:"Raspberries",vegan:true,allergen:false},
          {name:"Maple syrup",vegan:true,allergen:false},
          {name:"Almonds",vegan:true,allergen:true}
        ],
        sourcing: "Avocado from Murang'a county. Chocolate from Madagascar single-origin beans.",
        pairing: "Banyuls Rimage — fortified grenache is a classic pairing with dark chocolate"
      }
    ]
  },
  {
    section: "Drinks & Cocktails",
    items: [
      {
        id: 13, name: "Le Jardin", sub: "Hendrick's gin · elderflower",
        price: "KES 1,400", tags: ["vegan", "gluten-free"],
        desc: "A garden in a glass. Hendrick's gin, hand-pressed cucumber, St-Germain elderflower liqueur, fresh lime and premium tonic.",
        ingredients: [
          {name:"Hendrick's gin",vegan:true,allergen:false},
          {name:"Cucumber",vegan:true,allergen:false},
          {name:"St-Germain elderflower",vegan:true,allergen:false},
          {name:"Fresh lime",vegan:true,allergen:false},
          {name:"Premium tonic",vegan:true,allergen:false}
        ],
        sourcing: "Cucumber from our kitchen garden. Elderflower liqueur imported from Paris.",
        pairing: "Perfect aperitif — pairs beautifully with the scallop starter"
      },
      {
        id: 14, name: "Rose de Soir", sub: "lychee · Belvedere · champagne",
        price: "KES 1,600", tags: ["vegan", "gluten-free", "signature"],
        desc: "Belvedere vodka shaken with lychee purée and rose water, poured over a champagne float. The signature cocktail of Maison Dorée.",
        ingredients: [
          {name:"Belvedere vodka",vegan:true,allergen:false},
          {name:"Lychee purée",vegan:true,allergen:false},
          {name:"Rose water",vegan:true,allergen:false},
          {name:"Champagne",vegan:true,allergen:true},
          {name:"Dried rose petals",vegan:true,allergen:false}
        ],
        sourcing: "Champagne: Billecart-Salmon NV. Lychee sourced from Coastal Kenya.",
        pairing: "Complement dessert or sip as a digestif"
      },
      {
        id: 15, name: "Old Fashioned", sub: "Maker's Mark · Angostura bitters",
        price: "KES 1,500", tags: ["vegan", "gluten-free"],
        desc: "The timeless classic. Maker's Mark bourbon, demerara sugar syrup, Angostura bitters and an expressed orange peel over a hand-carved ice sphere.",
        ingredients: [
          {name:"Maker's Mark bourbon",vegan:true,allergen:false},
          {name:"Demerara syrup",vegan:true,allergen:false},
          {name:"Angostura bitters",vegan:true,allergen:false},
          {name:"Orange peel",vegan:true,allergen:false}
        ],
        sourcing: "Bourbon imported from Louisville, Kentucky.",
        pairing: "Exceptional with the Wagyu tenderloin or chocolate marquise"
      }
    ]
  }
];

const BADGE_CFG = {
  vegan:          { label: "Vegan",       cls: "badge-vegan" },
  vegetarian:     { label: "Veggie",      cls: "badge-veg"   },
  "gluten-free":  { label: "GF",          cls: "badge-gf"    },
  signature:      { label: "✦ Signature", cls: "badge-sig"   },
  new:            { label: "New",         cls: "badge-new"   },
  spicy:          { label: "Spicy",       cls: "badge-spicy" }
};

let activeFilter = "all";

function renderMenu() {
  const body = document.getElementById("menu-body");
  body.innerHTML = "";
  let anyVisible = false;

  MENU.forEach((sec, si) => {
    const visible = sec.items.filter(item =>
      activeFilter === "all" || item.tags.includes(activeFilter)
    );
    if (!visible.length) return;
    anyVisible = true;

    const block = document.createElement("div");
    block.className = "section-block";
    block.style.animationDelay = (si * 0.08) + "s";

    block.innerHTML = `<div class="section-head">
      <span class="section-line"></span>
      <span class="section-name">${sec.section}</span>
      <span class="section-line"></span>
      <span class="section-diamond">◆</span>
    </div>`;

    visible.forEach(item => {
      const wrap = document.createElement("div");
      wrap.className = "dish-wrap";

      const badges = item.tags.map(t => {
        const b = BADGE_CFG[t];
        return b ? `<span class="badge ${b.cls}">${b.label}</span>` : "";
      }).join("");

      const row = document.createElement("div");
      row.className = "dish-row";
      row.innerHTML = `
        <div class="dish-badges">${badges}</div>
        <div class="dish-name-wrap">
          <div class="dish-name">${item.name}</div>
          <div class="dish-sub">${item.sub}</div>
        </div>
        <div class="dish-right">
          <div class="dish-price">${item.price}</div>
          <span class="dish-chevron">&#8964;</span>
        </div>`;

      const ings = item.ingredients.map(ing => {
        let cls = "ing-chip";
        if (ing.vegan) cls += " vegan-ing";
        if (ing.allergen) cls += " allergen";
        return `<span class="${cls}">${ing.name}</span>`;
      }).join("");

      const detail = document.createElement("div");
      detail.className = "dish-detail";
      detail.innerHTML = `
        <div class="detail-grid">
          <div>
            <div class="detail-heading">About this dish</div>
            <div class="detail-text">${item.desc}</div>
          </div>
          <div>
            <div class="detail-heading">Provenance</div>
            <div class="detail-text">${item.sourcing}</div>
          </div>
        </div>
        <div>
          <div class="detail-heading">Ingredients</div>
          <div class="ingredients-list">${ings}</div>
        </div>
        <div class="pairing-row">
          <span class="pairing-icon">&#127863;</span>
          <div class="pairing-text"><strong>Wine pairing:</strong> ${item.pairing}</div>
        </div>`;

      row.addEventListener("click", () => {
        const isOpen = row.classList.contains("open");
        document.querySelectorAll(".dish-row.open").forEach(r => {
          r.classList.remove("open");
          r.nextElementSibling.classList.remove("open");
        });
        if (!isOpen) {
          row.classList.add("open");
          detail.classList.add("open");
        }
      });

      wrap.appendChild(row);
      wrap.appendChild(detail);
      block.appendChild(wrap);
    });

    body.appendChild(block);
  });

  if (!anyVisible) {
    body.innerHTML = `<div class="empty">No dishes match this filter — try another selection.</div>`;
  }

  observeSections();
}

function observeSections() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.1 });
  document.querySelectorAll(".section-block").forEach(el => obs.observe(el));
}

document.querySelectorAll(".fbtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".fbtn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderMenu();
  });
});

renderMenu();