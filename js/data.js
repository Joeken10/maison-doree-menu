const IMG = {
  butternut:  'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=85',
  prawns:     'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=85',
  fish:       'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=85',
  salad:      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85',
  steak:      "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
  chicken:    'https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=600&q=85',
  lamb:       'https://images.unsplash.com/photo-1602253057119-44d745d9b860?w=600&q=85',
  burger:     'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85',
  pizza:      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85',
  pasta:      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=85',
  cheesecake: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=85',
  tiramisu:   'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=85',
  icecream:   'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&q=85',
  wings:      'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=85',
  samosa:     'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=85',
  soup:       'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=85',
  lobster:    'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=85',
  tilapia:    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=85',
  veggie:     'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=85',
  brownie:    'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&q=85',
  wok:        'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=85',
  springroll: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=85',
  sandwich:   'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=85',
  mushroom:   'https://images.unsplash.com/photo-1504544750208-dc0358ad5f6b?w=600&q=85',
  caeser:     'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=85',
  satay:      'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=85',
  salmon:     'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=85',
  fruit:      'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=85',
};

const TOC = [
  { label: 'Soups',                 pg: '2' },
  { label: 'Starters',             pg: '2' },
  { label: 'Salads',               pg: '3' },
  { label: 'Wok Dishes',           pg: '3' },
  { label: 'Seafood',              pg: '4' },
  { label: 'Kenyan Specialities',  pg: '4' },
  { label: 'Grills',               pg: '5' },
  { label: 'Burgers & Sandwiches', pg: '5' },
  { label: 'Pizzeria & Pasta',     pg: '6' },
  { label: 'Desserts',             pg: '6' },
];

const SPREADS = [
  {
    left:  { type: 'cover' },
    right: { type: 'toc'   }
  },
  {
    left: {
      type: 'section', label: 'Soups',
      items: [
        { name:'Cream of Butternut', sub:'flavoured with ginger', price:'KES 850', img:IMG.butternut,
          desc:'Velvety butternut squash soup gently spiced with fresh ginger — silky, warming and deeply satisfying.',
          ings:[{n:'Butternut squash',v:true,a:false},{n:'Fresh ginger',v:true,a:false},{n:'Cream',v:false,a:true},{n:'Vegetable stock',v:true,a:false}] },
        { name:'Sea Fish Soup', sub:'Indian Ocean bouillabaisse', price:'KES 950', img:IMG.soup,
          desc:'A rich bouillabaisse-inspired broth of fresh sea fish, saffron and aromatic coastal spices.',
          ings:[{n:'Sea fish',v:false,a:true},{n:'Tomato',v:true,a:false},{n:'Saffron',v:true,a:false},{n:'Croutons',v:true,a:true}] },
        { name:'Roast Plum Tomato Soup', sub:'swirl of basil oil', price:'KES 850', img:IMG.soup,
          desc:'Slow-roasted plum tomatoes blended smooth with a generous swirl of fragrant fresh basil oil.',
          ings:[{n:'Plum tomatoes',v:true,a:false},{n:'Basil oil',v:true,a:false},{n:'Garlic',v:true,a:false}] },
        { name:'Cream of Oyster Mushroom', sub:'tarragon fragrance', price:'KES 850', img:IMG.mushroom,
          desc:'Delicate oyster mushroom cream soup perfumed with fresh tarragon. Earthy, elegant, refined.',
          ings:[{n:'Oyster mushrooms',v:true,a:false},{n:'Tarragon',v:true,a:false},{n:'Cream',v:false,a:true}] },
        { name:'Cappuccino of Shrimp Bisque', sub:'garlic crouton', price:'KES 950', img:IMG.prawns,
          desc:'A luxurious shrimp bisque served cappuccino-style, frothy with cream and a golden garlic crouton.',
          ings:[{n:'Shrimp',v:false,a:true},{n:'Cream',v:false,a:true},{n:'Brandy',v:true,a:false},{n:'Crouton',v:true,a:true}] },
      ]
    },
    right: {
      type: 'section', label: 'Starters',
      items: [
        { name:'Garlic Prawns', sub:'basil, white wine & olive oil', price:'KES 1,750', img:IMG.prawns,
          desc:'Pan-fried tiger prawns in fragrant garlic butter, white wine and fresh basil. A timeless classic.',
          ings:[{n:'Tiger prawns',v:false,a:true},{n:'Garlic',v:true,a:false},{n:'White wine',v:true,a:true},{n:'Basil',v:true,a:false}] },
        { name:'Buttered Fish Goujons', sub:'fennel, blood orange & miso mayo', price:'KES 1,250', img:IMG.fish,
          desc:'Golden-fried fish goujons with a bright fennel and blood orange salad, miso aioli on the side.',
          ings:[{n:'White fish',v:false,a:true},{n:'Fennel',v:true,a:false},{n:'Blood orange',v:true,a:false},{n:'Miso mayo',v:false,a:true}] },
        { name:'Chicken Wings', sub:'crispy garlic, paprika & chili', price:'KES 1,350', img:IMG.wings,
          desc:'Crispy wings tossed in garlic, smoked paprika and chili. Also available BBQ or baked with coriander.',
          ings:[{n:'Chicken wings',v:false,a:false},{n:'Paprika',v:true,a:false},{n:'Garlic',v:true,a:false},{n:'Chili',v:true,a:false}] },
        { name:'Beef Samosas', sub:'chutney & kachumbari · 3 pcs', price:'KES 750', img:IMG.samosa,
          desc:'Three golden crispy beef samosas with tangy mango chutney and freshly made kachumbari.',
          ings:[{n:'Beef mince',v:false,a:false},{n:'Pastry',v:true,a:true},{n:'Spices',v:true,a:false}] },
        { name:'Vegetable Samosa', sub:'sweet chili sauce · 3 pcs', price:'KES 690', img:IMG.samosa,
          desc:'Three crispy golden pastry parcels filled with spiced mixed vegetables and sweet chili sauce.',
          ings:[{n:'Mixed vegetables',v:true,a:false},{n:'Pastry',v:true,a:true},{n:'Spices',v:true,a:false}] },
      ]
    }
  },
  {
    left: {
      type: 'section', label: 'Salads',
      items: [
        { name:'Crispy Thai Salad', sub:'beef or chicken, sweet chili & sesame', price:'KES 1,150', img:IMG.salad,
          desc:'Seasonal leaves, roasted peppers, red onions and goat cheese with a sweet chili sesame dressing.',
          ings:[{n:'Mixed leaves',v:true,a:false},{n:'Goat cheese',v:false,a:true},{n:'Sweet chili',v:true,a:false},{n:'Sesame',v:true,a:true}] },
        { name:'Garden Salad', sub:'avocado, beetroot & cherry tomatoes', price:'KES 1,150', img:IMG.salad,
          desc:'Fresh seasonal leaves with avocado, pickled beetroot, cherry tomatoes, olives and cheese crumble.',
          ings:[{n:'Avocado',v:true,a:false},{n:'Beetroot',v:true,a:false},{n:'Olives',v:true,a:false},{n:'Cheese',v:false,a:true}] },
        { name:'Caesar Salad', sub:'bacon, parmesan & croutons', price:'KES 1,350', img:IMG.caeser,
          desc:'Romaine lettuce, paprika bacon bits, parmesan shavings and croutons in a classic Caesar dressing.',
          ings:[{n:'Romaine',v:true,a:false},{n:'Bacon',v:false,a:false},{n:'Parmesan',v:false,a:true},{n:'Croutons',v:true,a:true}] },
      ]
    },
    right: {
      type: 'section', label: 'Wok Dishes',
      items: [
        { name:'Chicken Spring Rolls', sub:'sweet chili & kachumbari · 3 pcs', price:'KES 850', img:IMG.springroll,
          desc:'Three crispy spring rolls filled with seasoned chicken, served with sweet chili and kachumbari.',
          ings:[{n:'Chicken',v:false,a:false},{n:'Spring roll pastry',v:true,a:true},{n:'Cabbage',v:true,a:false}] },
        { name:'Chicken Satay', sub:'peanut butter & sesame skewers', price:'KES 850', img:IMG.satay,
          desc:'Skewered chicken strips marinated in Asian spices, served with rich peanut and sesame sauce.',
          ings:[{n:'Chicken breast',v:false,a:false},{n:'Peanut butter',v:true,a:true},{n:'Sesame',v:true,a:true}] },
        { name:'Stir-fried Tender Beef', sub:'ginger, Kikkoman & spring onions', price:'KES 2,500', img:IMG.wok,
          desc:'Tender beef flakes wok-tossed with fresh ginger, Kikkoman soy sauce and fragrant spring onions.',
          ings:[{n:'Beef',v:false,a:false},{n:'Ginger',v:true,a:false},{n:'Kikkoman soy',v:true,a:true}] },
        { name:'Stir-fried Pork', sub:'shallots, ginger & capsicum', price:'KES 2,500', img:IMG.wok,
          desc:'Pork tossed with shallots, fresh ginger, Kikkoman soy and colourful capsicum in a hot wok.',
          ings:[{n:'Pork',v:false,a:false},{n:'Shallots',v:true,a:false},{n:'Capsicum',v:true,a:false}] },
      ]
    }
  },
  {
    left: {
      type: 'section', label: 'Seafood',
      items: [
        { name:'Grilled Salmon Fillet', sub:'quinoa risotto & lemon butter', price:'KES 3,700', img:IMG.salmon,
          desc:'Atlantic salmon on quinoa risotto with fennel, cucumber, beetroot and lemon butter sauce.',
          ings:[{n:'Salmon',v:false,a:true},{n:'Quinoa',v:true,a:false},{n:'Beetroot',v:true,a:false},{n:'Lemon butter',v:false,a:true}] },
        { name:'Prawns Peri Peri', sub:'garlic butter, chili & coriander', price:'KES 3,650', img:IMG.prawns,
          desc:'Grilled prawns in fiery peri peri with garlic butter and fresh coriander. Bold, smoky, irresistible.',
          ings:[{n:'Prawns',v:false,a:true},{n:'Peri peri',v:true,a:false},{n:'Garlic butter',v:false,a:true}] },
        { name:'Signature Seafood Assiette', sub:'baby lobster, prawns, octopus & fish', price:'KES 3,750', img:IMG.lobster,
          desc:'Baby lobster, king prawns, octopus and calamari in a coconut ginger lime broth with coconut rice.',
          ings:[{n:'Baby lobster',v:false,a:true},{n:'King prawns',v:false,a:true},{n:'Octopus',v:false,a:true},{n:'Coconut milk',v:true,a:false}] },
        { name:'Grilled Lobster', sub:'café de Paris butter or thermidor', price:'KES 2,350/150g', img:IMG.lobster,
          desc:'Simply grilled lobster with your choice of café de Paris herb butter or classic thermidor sauce.',
          ings:[{n:'Lobster',v:false,a:true},{n:'Herb butter',v:false,a:true}] },
        { name:'Prawn Masala', sub:'rice, chapatti & condiments', price:'From KES 3,150', img:IMG.prawns,
          desc:'Succulent prawns in a rich masala sauce served with fragrant rice, chapatti and condiments.',
          ings:[{n:'Prawns',v:false,a:true},{n:'Masala sauce',v:true,a:false},{n:'Rice',v:true,a:false}] },
      ]
    },
    right: {
      type: 'section', label: 'Kenyan Specialities',
      items: [
        { name:'Fried Wanga Tilapia', sub:'ugali & homabay sauce', price:'KES 1,850', img:IMG.tilapia,
          desc:'Whole tilapia fried wet or dry, served with ugali and the iconic homabay tomato pili pili sauce.',
          ings:[{n:'Whole tilapia',v:false,a:true},{n:'Ugali',v:true,a:false},{n:'Pili pili',v:true,a:false}] },
        { name:'Kienyeji Chicken', sub:'lemongrass & chili braise', price:'KES 1,800', img:IMG.chicken,
          desc:'Braised free-range road runner chicken with lemongrass and a gentle hint of chili.',
          ings:[{n:'Kienyeji chicken',v:false,a:false},{n:'Lemongrass',v:true,a:false},{n:'Chili',v:true,a:false}] },
        { name:'Roast Mbuzi', sub:'kachumbari & tomato pili pili · 500g', price:'KES 2,250', img:IMG.lamb,
          desc:'Tender Dorper goat slow-roasted with traditional spices, kachumbari and pili pili sauce.',
          ings:[{n:'Dorper goat',v:false,a:false},{n:'Kachumbari',v:true,a:false},{n:'Pili pili',v:true,a:false}] },
        { name:'Chicken Masala', sub:'rice, chapatti & chutney', price:'KES 1,850', img:IMG.chicken,
          desc:'Boneless chicken in a rich masala sauce, served with fragrant rice, chapatti and chutney.',
          ings:[{n:'Chicken',v:false,a:false},{n:'Masala sauce',v:true,a:false},{n:'Rice',v:true,a:false}] },
        { name:'Lamb Shank', sub:'mash potato & seasonal vegetables', price:'KES 2,500', img:IMG.lamb,
          desc:'Slow-cooked lamb shank with creamy mash, seasonal vegetables and rich lamb gravy.',
          ings:[{n:'Lamb shank',v:false,a:false},{n:'Mash potato',v:false,a:true},{n:'Lamb gravy',v:false,a:false}] },
      ]
    }
  },
  {
    left: {
      type: 'section', label: 'Grills',
      items: [
        { name:'Beef Fillet', sub:'250g · bordelaise or peppercorn', price:'KES 2,500', img:IMG.steak,
          desc:'Prime beef fillet grilled to order with bordelaise or creamy green peppercorn sauce.',
          ings:[{n:'Beef fillet',v:false,a:false},{n:'Peppercorn sauce',v:false,a:true},{n:'French fries',v:true,a:false}] },
        { name:'Wet-aged Rib-eye', sub:'on-bone · 500g', price:'KES 3,500', img:IMG.steak,
          desc:'The king of the grill — wet-aged on-bone rib-eye with rich marbling, fries or mash.',
          ings:[{n:'Rib-eye on bone',v:false,a:false},{n:'Herb butter',v:false,a:true}] },
        { name:'T-bone Steak', sub:'béarnaise or burgundy rosemary jus · 450g', price:'KES 3,000', img:IMG.steak,
          desc:'Grilled T-bone with béarnaise sauce or burgundy rosemary jus. Served with fries.',
          ings:[{n:'T-bone steak',v:false,a:false},{n:'Béarnaise sauce',v:false,a:true}] },
        { name:'Safari Mixed Grill', sub:'beef ribs, pork ribs, lamb & boerewors', price:'KES 4,980', img:IMG.steak,
          desc:'The ultimate platter: beef ribs, pork ribs, BBQ chicken, lamb cutlet and boerewors with fries.',
          ings:[{n:'Beef ribs',v:false,a:false},{n:'Pork ribs',v:false,a:false},{n:'Lamb cutlet',v:false,a:false}] },
        { name:'Grilled Molo Lamb Chops', sub:'herb salad & french fries', price:'KES 2,750', img:IMG.lamb,
          desc:'Tender Molo lamb chops grilled with fresh herbs, herb salad and crispy french fries.',
          ings:[{n:'Molo lamb chops',v:false,a:false},{n:'Fresh herbs',v:true,a:false}] },
      ]
    },
    right: {
      type: 'section', label: 'Burgers & Sandwiches',
      items: [
        { name:'Safari Burger', sub:'red cabbage slaw & fries', price:'KES 1,090', img:IMG.burger,
          desc:'Classic beef burger with red cabbage slaw and crispy fries. Simple, satisfying, signature.',
          ings:[{n:'Beef patty',v:false,a:false},{n:'Burger bun',v:true,a:true},{n:'Cabbage slaw',v:true,a:false}] },
        { name:'Fully Loaded Burger', sub:'bacon, mushroom, cheese & onions', price:'KES 1,490', img:IMG.burger,
          desc:'Loaded with bacon, sautéed onions, mushrooms and melted cheese on a beef patty.',
          ings:[{n:'Beef patty',v:false,a:false},{n:'Bacon',v:false,a:false},{n:'Cheese',v:false,a:true}] },
        { name:'Safari Club Sandwich', sub:'Asian slaw & french fries', price:'KES 1,650', img:IMG.sandwich,
          desc:'Triple-decker club sandwich with Asian slaw and crispy french fries.',
          ings:[{n:'Chicken',v:false,a:false},{n:'Bread',v:true,a:true},{n:'Asian slaw',v:true,a:true}] },
        { name:'Vegetarian Triple Decker', sub:'avocado, cucumber, tomato & lettuce', price:'KES 1,450', img:IMG.veggie,
          desc:'Stacked with avocado, pickled cucumber, tomato and lettuce. Coleslaw and fries on the side.',
          ings:[{n:'Avocado',v:true,a:false},{n:'Cucumber',v:true,a:false},{n:'Bread',v:true,a:true}] },
      ]
    }
  },
  {
    left: {
      type: 'section', label: 'Pizzeria & Pasta',
      items: [
        { name:'Safari Pizza', sub:'mushroom, bacon, tomato & capsicum', price:'KES 1,400', img:IMG.pizza,
          desc:'The house pizza — mushroom, bacon, tomato, capsicum and generous mozzarella on a crispy base.',
          ings:[{n:'Mushroom',v:true,a:false},{n:'Bacon',v:false,a:false},{n:'Mozzarella',v:false,a:true},{n:'Wheat base',v:true,a:true}] },
        { name:'Chicken BBQ Pizza', sub:'sweet peppers, onions & BBQ sauce', price:'KES 1,350', img:IMG.pizza,
          desc:'Chicken, sweet peppers and onions in smoky BBQ sauce with mozzarella on a golden base.',
          ings:[{n:'Chicken',v:false,a:false},{n:'BBQ sauce',v:true,a:false},{n:'Mozzarella',v:false,a:true}] },
        { name:'Margherita Pizza', sub:'tomato, mozzarella & basil', price:'KES 1,200', img:IMG.pizza,
          desc:'The timeless classic — fresh tomato, mozzarella and fragrant basil on a thin crispy base.',
          ings:[{n:'Tomato',v:true,a:false},{n:'Mozzarella',v:false,a:true},{n:'Basil',v:true,a:false}] },
        { name:'Pasta', sub:'penne · spaghetti · linguini', price:'KES 2,040', img:IMG.pasta,
          desc:'Your choice of pasta with Napolitano, Bolognaise, Alfredo or Carbonara sauce. Made fresh daily.',
          ings:[{n:'Pasta',v:true,a:true},{n:'Sauce of choice',v:false,a:false}] },
      ]
    },
    right: {
      type: 'section', label: 'Desserts',
      items: [
        { name:'Berry Cheesecake', sub:'fresh berry coulis', price:'KES 1,200', img:IMG.cheesecake,
          desc:'Creamy baked cheesecake on a buttery biscuit base with vibrant fresh berry coulis.',
          ings:[{n:'Cream cheese',v:false,a:true},{n:'Biscuit base',v:true,a:true},{n:'Berries',v:true,a:false}] },
        { name:'Salted Caramel Brownie', sub:'espresso & caramel glaze', price:'KES 750', img:IMG.brownie,
          desc:'Dense fudgy brownie with a salted caramel espresso glaze. Warm, dark and indulgent.',
          ings:[{n:'Dark chocolate',v:true,a:true},{n:'Salted caramel',v:false,a:true},{n:'Espresso',v:true,a:false}] },
        { name:'Tiramisu', sub:'mascarpone & espresso', price:'KES 350', img:IMG.tiramisu,
          desc:'Classic Italian tiramisu with mascarpone cream, espresso-soaked ladyfingers and cocoa dust.',
          ings:[{n:'Mascarpone',v:false,a:true},{n:'Ladyfingers',v:true,a:true},{n:'Espresso',v:true,a:false}] },
        { name:'Ice Cream · 3 scoops', sub:'vanilla · jackfruit · chocolate · strawberry', price:'KES 650', img:IMG.icecream,
          desc:'Three scoops of your choice: vanilla, jackfruit, milk chocolate or strawberry. Freshly churned.',
          ings:[{n:'Milk',v:false,a:true},{n:'Cream',v:false,a:true},{n:'Natural flavours',v:true,a:false}] },
        { name:'Fruit Salad', sub:'with vanilla ice cream', price:'KES 750', img:IMG.fruit,
          desc:'Fresh seasonal tropical fruit salad served with a scoop of creamy vanilla ice cream.',
          ings:[{n:'Seasonal fruit',v:true,a:false},{n:'Vanilla ice cream',v:false,a:true}] },
      ]
    }
  },
  {
    left:  { type: 'back'  },
    right: { type: 'empty' }
  }
];