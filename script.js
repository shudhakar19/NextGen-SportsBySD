// ======= Product Data =======
const products = [
  // Cricket
  { name: "BladeX Cricket Bat", category: "cricket", price: 2499, rating: 4.5, image: "cricketbat.jpg", link: "product-bat.html" },
  { name: "ProGuard Helmet", category: "cricket", price: 1299, rating: 4.2, image: "crickethelmet.png", link: "product-helmet.html" },
  { name: "Power Grip Gloves", category: "cricket", price: 799, rating: 4.0, image: "cricketgloves.jpg", link: "product-gloves.html" },
  { name: "Max Defend Leg Pads", category: "cricket", price: 999, rating: 4.3, image: "cricketpads.webp", link: "product-pads.html" },
  { name: "SpeedPro Cricket Ball", category: "cricket", price: 299, rating: 4.1, image: "cricketball.png", link: "product-ball.html" },
  { name: "AllRounder Kit Bag", category: "cricket", price: 1499, rating: 4.4, image: "cricketkitbag.jpg", link: "product-kitbag.html" },
  { name: "StumpMaster Wickets", category: "cricket", price: 699, rating: 4.0, image: "cricketwickets.jpg", link: "product-wickets.html" },

  // Football
  { name: "StrikerPro Football", category: "football", price: 999, rating: 4.2, image: "profootball.jpg", link: "product-football.html" },
  { name: "Defender Shin Guards", category: "football", price: 399, rating: 4.0, image: "shinguards.jpg", link: "product-shinguards.html" },
  { name: "Rapidkicks Shoes", category: "football", price: 1799, rating: 4.3, image: "footballshoes.jpg", link: "product-shoes.html" },
  { name: "Goal Master Gloves", category: "football", price: 899, rating: 4.1, image: "goalkeepergloves.webp", link: "product-gloves-football.html" },
  { name: "Playmaker Training Cones", category: "football", price: 299, rating: 4.0, image: "trainingcones.jpg", link: "product-cones.html" },

  // Badminton
  { name: "Smash Ace Racket", category: "badminton", price: 1199, rating: 4.4, image: "badminton-racket.jpg", link: "product-racket.html" },
  { name: "FlightMax Shuttlecock", category: "badminton", price: 349, rating: 4.2, image: "shuttlecock.jpg", link: "product-shuttlecock.html" },
  { name: "Griptech Racket Grips", category: "badminton", price: 199, rating: 4.0, image: "racketgrips.jpg", link: "product-grip.html" },
  { name: "CourtMaster Net", category: "badminton", price: 899, rating: 4.1, image: "badmintonnet.jpg", link: "product-net.html" },
  { name: "JumpPro Skipping Rope", category: "badminton", price: 299, rating: 4.0, image: "skippingrope.jpg", link: "product-rope.html" },

  // Basketball
  { name: "DunkMaster Basketball", category: "basketball", price: 899, rating: 4.3, image: "basketball.jpg", link: "product-basketball.html" },
  { name: "HoopKing Basketball Hoop", category: "basketball", price: 2999, rating: 4.5, image: "basketballhoop.jpg", link: "product-hoop.html" },
  { name: "CourtGrip Shoes", category: "basketball", price: 1899, rating: 4.2, image: "basketballshoes.jpg", link: "product-shoes-basketball.html" },
  { name: "Slam Dunk Wrist Band", category: "basketball", price: 199, rating: 4.0, image: "wristbands.jpg", link: "product-wristband.html" },
  { name: "Rebander Training Cones", category: "basketball", price: 299, rating: 4.1, image: "trainingconesbasketball.webp", link: "product-cones-basketball.html" },

  // Gym & Fitness
  { name: "Power Lift Dumbbells", category: "gym", price: 1299, rating: 4.3, image: "dumbbells.jpg", link: "product-dumbbells.html" },
  { name: "Flexi Resistance Bands", category: "gym", price: 499, rating: 4.2, image: "resistancebands.jpg", link: "product-bands.html" },
  { name: "GripMax Gym Gloves", category: "gym", price: 299, rating: 4.0, image: "gymgloves.jpg", link: "product-gymgloves.html" },
  { name: "CoreMaster Yoga Mat", category: "gym", price: 699, rating: 4.1, image: "yogamat.jpg", link: "product-yogamat.html" },
  { name: "StaminaPro Shaker Bottle", category: "gym", price: 249, rating: 4.0, image: "shakerbottle.jpg", link: "product-shakerbottle.html" },
];

// ======= Show Products =======
function showProducts(filteredProducts) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  filteredProducts.forEach(product => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <p class="rating">⭐ ${product.rating}</p>
        <p>High quality sports product for your game.</p>
        <a href="${product.link}">Buy Now</a>
      </div>
    `;
  });
}

// ======= Filter Logic =======
function filterProducts() {
  const category = document.getElementById("category").value;
  if (category === "all") {
    showProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    showProducts(filtered);
  }
}

// ======= Load All Products on Page Load =======
window.onload = () => {
  showProducts(products);
};
