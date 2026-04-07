// src/constants.js

export const PRODUCTS = [
  // ──────────────── LOCKS (Indian Brands & Brass) ────────────────
  { id: 1, name: "Link Heavy Duty Padlock", category: "Locks", price: 18, rating: 4.9, reviews: 1250, badge: "Trusted", image:"/heavyduty.jpg",desc: "The original Indian Link brand padlock, known for unshakeable security." },
  { id: 2, name: "Globe Round Steel Lock", category: "Locks", price: 14, rating: 4.7, reviews: 840, badge: "Top Rated", image:"/globesteel.jpg", desc: "Durable Globe round shutter lock made from high-grade hardened steel." },
  { id: 3, name: "Telco Industrial Lock", category: "Locks", price: 16, rating: 4.6, reviews: 310, badge: null,
    image:"/telco.jpg", desc: "Precision-engineered Telco lock designed for industrial cabinets and lockers." },
  { id: 4, name: "Antique Brass Lion Lock", category: "Locks", price: 45, rating: 4.9, reviews: 120, badge: "Traditional", image:"/antique.jpg", desc: "Solid brass functional padlock featuring a traditional lion face design." },
  { id: 5, name: "Godrej Nav-Tal Padlock", category: "Locks", price: 12, rating: 4.8, reviews: 920, badge: "Best Seller", image:"/godrej.jpg", desc: "Original 8-lever brass padlock for maximum home security." },
  { id: 6, name: "Shape Door Lock", category: "Locks", price: 38, rating: 4.8, reviews: 85, badge: "Artisan", image:"/idollock.jpg", desc: "Elegant brass lock with spiritual motifs, combining security with art." },

  // ──────────────── AGRICULTURE ────────────────
  { id: 7, name: "Heavy Iron Disc Plough", category: "Agriculture", price: 145, rating: 4.8, reviews: 65, badge: "Heavy Duty", image:"/ironplough.jpg", desc: "Professional grade iron disc plough for primary tillage and soil preparation." },
  { id: 8, name: "Manual Seed Dispenser", category: "Agriculture", price: 28, rating: 4.7, reviews: 142, badge: "Essential", image:"/seed sprayer.jpg", desc: "Precision manual seeder tool for uniform seed spacing in small farms." },
  { id: 9, name: "Bamboo Plant Support Sticks", category: "Agriculture", price: 8, rating: 4.5, reviews: 210, badge: "Eco-Friendly", image:"/sticks.jpg", desc: "Pack of 20 sturdy wooden/bamboo sticks for supporting growing plants." },
  { id: 10, name: "Heavy Duty Bill Hook", category: "Agriculture", price: 18, rating: 4.8, reviews: 315, badge: null, image:"/bill hook.jpg", desc: "Carbon steel aruval for clearing brush and heavy cutting." },

  // ──────────────── GARDEN ITEMS (New Section) ────────────────
  { id: 11, name: "Professional Garden Scissors", category: "Garden Items", price: 14, rating: 4.9, reviews: 450, badge: "Pro Choice", image:"/gardenscissor.jpg", desc: "Sharp bypass garden scissors for precision pruning and trimming." },
  { id: 12, name: "Galvanized Watering Bucket", category: "Garden Items", price: 19, rating: 4.7, reviews: 280, badge: null, image:"/gardenbucket.jpg", desc: "Classic metal watering bucket with rose attachment for flowering plants." },
  { id: 13, name: "Small Pot Trowel (Plough)", category: "Garden Items", price: 6, rating: 4.6, reviews: 310, badge: "Value", image:"/gardenplough.jpg", desc: "Compact hand plough designed for tilling soil in small garden pots." },
  { id: 14, name: "Premium Rose Cutter", category: "Garden Items", price: 22, rating: 4.9, reviews: 115, badge: "Specialist", image:"/rosecutter.jpg", desc: "Specialized cutter designed to grip and hold stems without damage." },
  { id: 15, name: "Terracotta Planter Pot", category: "Garden Items", price: 11, rating: 4.8, reviews: 670, badge: "Classic", image:"/flowerpot.jpg", desc: "Natural clay pot that allows roots to breathe, perfect for all climates." },

  // ──────────────── CONSTRUCTION ────────────────
  { id: 16, name: "Bosch Impact Drill 600W", category: "Construction", price: 65, rating: 4.9, reviews: 610, badge: "Pro Tool", image:"/drill.jpg", desc: "Professional hammer drill for concrete, wood, and metal." },
  { id: 17, name: "Adjustable Pipe Wrench", category: "Construction", price: 24, rating: 4.8, reviews: 205, badge: null, image:"/wrench.jpg", desc: "Heavy-duty 24-inch adjustable wrench for plumbing and mechanical work." },
  { id: 18, name: "Steel D-Handle Shovel", category: "Construction", price: 32, rating: 4.7, reviews: 188, badge: null, image:"/shovel.jpg", desc: "All-steel construction shovel with a sharpened digging blade." },
  { id: 19, name: "Professional Handsaw", category: "Construction", price: 15, rating: 4.6, reviews: 340, badge: null, image:"/handsaw.jpg", desc: "Sharp-tooth handsaw for precision wood cutting on site." },
  { id: 20, name: "Reinforced Safety Gloves", category: "Construction", price: 9, rating: 4.8, reviews: 520, badge: "Safety First", image:"/gloves.jpg", desc: "Grip-enhanced, puncture-resistant gloves for heavy material handling." },
  { id: 21, name: "Anti-Fog Safety Glasses", category: "Construction", price: 7, rating: 4.7, reviews: 415, badge: null, image:"/glass.jpg", desc: "Clear vision safety eyewear with scratch-resistant coating." },
  { id: 22, name: "Sika Cement Repair Mix", category: "Construction", price: 11, rating: 4.8, reviews: 95, badge: "Quick Fix", image:"/cementmix.jpg", desc: "Pre-mixed cement powder for high-strength repair of cracks and patches." },
  { id: 23, name: "Steel Measuring Tape (5m)", category: "Construction", price: 6, rating: 4.6, reviews: 890, badge: "Value", image:"/tape.jpg", desc: "Compact steel tape measure with auto-lock and metric markings." },
  { id: 24, name: "Pidilite M-SEAL Epoxy", category: "Construction", price: 4, rating: 4.9, reviews: 2400, badge: "Best Seller", image:"/mseal.jpg", desc: "The legendary Indian multi-purpose sealant for all leaks and joints." },

  // ──────────────── HOUSEHOLD ────────────────
  { id: 25, name: "Wooden Cutting Board", category: "Household", price: 14, rating: 4.8, reviews: 310, badge: "Handmade", image:"/woodenboard.jpg", desc: "Thick seasoned wood cutting board for heavy kitchen use." },
  { id: 26, name: "Vegetable Cutting Knife", category: "Household", price: 5, rating: 4.7, reviews: 560, badge: null, image:"/vegiknife.jpg", desc: "Sharp stainless steel knife with a comfortable wooden handle." },
  { id: 27, name: "Chapathi Chakla & Belan", category: "Household", price: 18, rating: 4.9, reviews: 420, badge: "Traditional", image:"/chapathi.jpg", desc: "Hand-turned wooden chapathi maker stand and rolling pin set." },
  { id: 28, name: "Traditional Coal Sigdi", category: "Household", price: 26, rating: 4.7, reviews: 115, badge: "Legacy", image:"/coalsigdi.jpg", desc: "Durable iron coal stove for traditional slow cooking and heating." },
  { id: 29, name: "Brass Sambrani Holder", category: "Household", price: 12, rating: 4.9, reviews: 340, badge: "Pooja Special", image:"/sambrani.jpg", desc: "Antique brass holder with a wooden handle for purifying pooja smoke." },
  { id: 30, name: "Stainless Steel Oil Jhara", category: "Household", price: 9, rating: 4.8, reviews: 190, badge: null, image:"/oiljahara.jpg", desc: "Big size stariner for lifting fried foods and snacks safely." },
  { id: 31, name: "Rice & Grain Filter", category: "Household", price: 7, rating: 4.7, reviews: 410, badge: "Essential", image:"/rice filter.jpg", desc: "Large sieve designed to separate stones and husk from rice and grains." },

  // ──────────────── PETS & CATTLE ────────────────
  { id: 32, name: "Cotton Cow Nose Rope", category: "Pets & Cattle", price: 6, rating: 4.8, reviews: 155, badge: "Strong", image:"/cowrope.jpg", desc: "Thick, soft cotton rope specially designed for tying cattle safely." },
  { id: 33, name: "Traditional Brass Cow Bell", category: "Pets & Cattle", price: 14, rating: 4.9, reviews: 220, badge: "Handmade", image:"/bell.jpg", desc: "Loud, resonant brass bell for tracking cattle in the field." },
  { id: 34, name: "Steel Dog Chain (Heavy)", category: "Pets & Cattle", price: 15, rating: 4.7, reviews: 380, badge: null, image:"/dogchain.jpg", desc: "Rust-proof chrome-plated steel chain for large breeds." },
  { id: 35, name: "Adjustable Dog Belt", category: "Pets & Cattle", price: 9, rating: 4.8, reviews: 540, badge: null, image:"/dogbelt.jpg", desc: "Strong nylon harness belt with adjustable buckles for comfort." },
  { id: 36, name: "Brass Dog Collar Bell", category: "Pets & Cattle", price: 4, rating: 4.6, reviews: 110, badge: "Value", image:"/collarbell.jpg", desc: "Small resonant bell to keep track of your pets indoors or out." },
];

export const CATEGORIES = ["All", "Locks", "Agriculture", "Garden Items", "Construction", "Household", "Pets & Cattle"];

export const ROUTES = { HOME: "home", SHOP: "shop", PRODUCT: "product", CART: "cart", ABOUT: "about" };