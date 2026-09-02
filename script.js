// Database of Restaurants, Full Menus, Ratings & Delivery Config
const restaurantsData = {
    "66grill": {
        name: "66 Grill",
        logo: "🔥",
        phone: "07837779033",
        location: "الضلوعية - الشارع الحولي",
        rating: "4.9",
        workHours: "12:00 م - 12:00 ص",
        deliveryFee: 2000,
        categories: ["الكل", "المشاوي", "البركر والوجبات", "المقبلات والأصناف المضافة"],
        items: [
            { id: "66g_1", name: "كباب لحم 66 المخصوص (نفر)", price: 12000, category: "المشاوي", desc: "كباب لحم بقري وغنم عراقي مشوي على الفحم مع الخضار والخبز" },
            { id: "66g_2", name: "شيش طاووق دجاج فاخر", price: 10000, category: "المشاوي", desc: "قطع دجاج متبلة بالبهارات الخاصة ومقرمشة مشوية بامتياز" },
            { id: "66g_3", name: "تكّة لحم غنم طازج", price: 14000, category: "المشاوي", desc: "قطع لحم غنم طازجة مشوية على الفحم بالطريقة العراقية" },
            { id: "66g_4", name: "مشاوي مشكل 66 (كيلو)", price: 40000, category: "المشاوي", desc: "تشكيلة فاخرة من الكباب، الطاووق، والتكّة مع المقبلات" },
            { id: "66g_5", name: "دجاج شواية كامل مع التمن", price: 16000, category: "المشاوي", desc: "دجاجة كاملة محمرة بخلطة 66 مع الرز العراقي الفاخر" },
            { id: "66g_6", name: "بركر لحم كلاسيك 66", price: 6000, category: "البركر والوجبات", desc: "لحم بقري صافي مع الجبن والصوص المخصوص والبطاطا" },
            { id: "66g_7", name: "وجبة بركر دجاج دبل", price: 7500, category: "البركر والوجبات", desc: "شريحتين دجاج مع الفنكر والمشروب الغازي" },
            { id: "66g_8", name: "زنجر سوبريم 66", price: 7000, category: "البركر والوجبات", desc: "صدر دجاج مقرمش مع الجبن والصوص الحار" },
            { id: "66g_9", name: "وجبة كريسبي دجاج", price: 8000, category: "البركر والوجبات", desc: "قطع دجاج كريسبي مع بطاطا وسلطة ملفوف" },
            { id: "66g_10", name: "صحن مقبلات مشكل كبير", price: 5000, category: "المقبلات والأصناف المضافة", desc: "حمص، متبل، بابا غنوج، وسلطات متنوعة" },
            { id: "66g_11", name: "صحن مقبلات صغير", price: 3000, category: "المقبلات والأصناف المضافة", desc: "مقبلات باردة مشكلة" },
            { id: "66g_12", name: "بطاطا فنكر عائلي", price: 3500, category: "المقبلات والأصناف المضافة", desc: "بطاطا مقرمشة ذهبية" },
            { id: "66g_13", name: "حلقات بصل مقرمشة (6 قطع)", price: 2500, category: "المقبلات والأصناف المضافة", desc: "حلقات بصل مع صوص الثوم" }
        ]
    },
    "yala_eat": {
        name: "مطعم يلا ايت (Yalia Eat)",
        logo: "🍔",
        phone: "07837779033",
        location: "الضلوعية - الشارع الحولي",
        rating: "4.8",
        workHours: "1:00 م - 1:00 ص",
        deliveryFee: 2000,
        categories: ["الكل", "البركر", "وجبات البركر", "الشاورما", "أكلات شرقية", "أكلات غربية", "وجبات الصاج", "البيتزا", "الكنتاكي"],
        items: [
            { id: "ye_1", name: "بركر لحم", price: 3000, category: "البركر" },
            { id: "ye_2", name: "سبايسي بركر", price: 3500, category: "البركر" },
            { id: "ye_3", name: "بركر لحم بالجبن", price: 3500, category: "البركر" },
            { id: "ye_4", name: "بركر لحم دبل", price: 5000, category: "البركر" },
            { id: "ye_5", name: "بركر دجاج", price: 2500, category: "البركر" },
            { id: "ye_6", name: "وجبة بركر لحم", price: 4000, category: "وجبات البركر" },
            { id: "ye_7", name: "وجبة بركر لحم بالجبن", price: 4500, category: "وجبات البركر" },
            { id: "ye_8", name: "وجبة بركر دجاج", price: 3500, category: "وجبات البركر" },
            { id: "ye_9", name: "وجبة زنجر", price: 5000, category: "وجبات البركر" },
            { id: "ye_10", name: "شاورما لحم", price: 3500, category: "الشاورما" },
            { id: "ye_11", name: "شاورما دجاج", price: 3000, category: "الشاورما" },
            { id: "ye_12", name: "كيلو شاورما لحم", price: 45000, category: "الشاورما" },
            { id: "ye_13", name: "كيلو شاورما دجاج", price: 25000, category: "الشاورما" },
            { id: "ye_14", name: "نفر مندي لحم", price: 16000, category: "أكلات شرقية" },
            { id: "ye_15", name: "نفر مندي دجاج", price: 10000, category: "أكلات شرقية" },
            { id: "ye_16", name: "منسف دجاجة كاملة", price: 16000, category: "أكلات شرقية" },
            { id: "ye_17", name: "ستيك دجاج", price: 10000, category: "أكلات غربية" },
            { id: "ye_18", name: "شيش طاووق لحم", price: 11000, category: "أكلات غربية" },
            { id: "ye_19", name: "كوردن بلو", price: 10000, category: "أكلات غربية" },
            { id: "ye_20", name: "ستيربس دجاج", price: 10000, category: "أكلات غربية" },
            { id: "ye_21", name: "صاج سوري لحم", price: 3500, category: "وجبات الصاج" },
            { id: "ye_22", name: "صاج سوري دجاج", price: 2500, category: "وجبات الصاج" },
            { id: "ye_23", name: "وجبة صاج سوري عائلي مشكل", price: 12000, category: "وجبات الصاج" },
            { id: "ye_24", name: "بيتزا دجاج وسط", price: 7000, category: "البيتزا" },
            { id: "ye_25", name: "بيتزا دجاج كبيرة", price: 10000, category: "البيتزا" },
            { id: "ye_26", name: "بيتزا لحم كبيرة", price: 12500, category: "البيتزا" },
            { id: "ye_27", name: "3 قطع كنتاكي", price: 6000, category: "الكنتاكي" },
            { id: "ye_28", name: "5 قطع كنتاكي", price: 9000, category: "الكنتاكي" },
            { id: "ye_29", name: "دجاج بروستد عائلي", price: 15000, category: "الكنتاكي" }
        ]
    },
    "blue_dome": {
        name: "مطعم وکافيه بلو دوم (Blue Dome)",
        logo: "🏛️",
        phone: "07770000409",
        location: "صلاح الدين - قضاء الضلوعية",
        rating: "4.9",
        workHours: "10:00 ص - 1:00 ص",
        deliveryFee: 2000,
        categories: ["الكل", "بركر لحوم", "بركر دجاج", "ساندويشات", "شاورما وأجنحة", "ريزو وفنكر", "المشروبات والقهوة"],
        items: [
            { id: "bd_1", name: "كلاسيك بركر لحم (ساندويش)", price: 5500, category: "بركر لحوم" },
            { id: "bd_2", name: "كلاسيك بركر لحم (وجبة)", price: 6000, category: "بركر لحوم" },
            { id: "bd_3", name: "بلو دوم بركر لحم (وجبة)", price: 9500, category: "بركر لحوم" },
            { id: "bd_4", name: "تربل جبن بركر (وجبة)", price: 8000, category: "بركر لحوم" },
            { id: "bd_5", name: "سموك بركر لحم (وجبة)", price: 7000, category: "بركر لحوم" },
            { id: "bd_6", name: "مونستر بركر (وجبة)", price: 9500, category: "بركر لحوم" },
            { id: "bd_7", name: "بركر دجاج كلاسيك (ساندويش)", price: 5000, category: "بركر دجاج" },
            { id: "bd_8", name: "بركر دجاج كلاسيك (وجبة)", price: 5500, category: "بركر دجاج" },
            { id: "bd_9", name: "ستيك بركر دجاج (وجبة)", price: 7000, category: "بركر دجاج" },
            { id: "bd_10", name: "فرايز بركر دجاج (وجبة)", price: 6500, category: "بركر دجاج" },
            { id: "bd_11", name: "زنجر (وجبة)", price: 5000, category: "ساندويشات" },
            { id: "bd_12", name: "مطافي زنجر حار (وجبة)", price: 5000, category: "ساندويشات" },
            { id: "bd_13", name: "كرانشي زنجر (وجبة)", price: 5500, category: "ساندويشات" },
            { id: "bd_14", name: "تويستر ساندويش (وجبة)", price: 5500, category: "ساندويشات" },
            { id: "bd_15", name: "ساندويش شاورما دجاج", price: 2500, category: "شاورما وأجنحة" },
            { id: "bd_16", name: "أجنحة كلاسيك مقرمشة", price: 5000, category: "شاورما وأجنحة" },
            { id: "bd_17", name: "أجنحة بافلو", price: 5000, category: "شاورما وأجنحة" },
            { id: "bd_18", name: "ريزو كلاسيك", price: 6000, category: "ريزو وفنكر" },
            { id: "bd_19", name: "قدح فنكر", price: 1500, category: "ريزو وفنكر" },
            { id: "bd_20", name: "تشكن فرايز", price: 4000, category: "ريزو وفنكر" },
            { id: "bd_21", name: "آيس لاتيه", price: 3000, category: "المشروبات والقهوة" },
            { id: "bd_22", name: "موهيتو بلوبيري", price: 2500, category: "المشروبات والقهوة" },
            { id: "bd_23", name: "اسبريسو سنجل", price: 2000, category: "المشروبات والقهوة" },
            { id: "bd_24", name: "سموذي مانجو", price: 3000, category: "المشروبات والقهوة" }
        ]
    },
    "ali_mandab": {
        name: "مرطبات ومطعم علي مندب",
        logo: "🍦",
        phone: "07806675497",
        location: "الضلوعية - الحولي",
        rating: "4.7",
        workHours: "11:00 ص - 2:00 ص",
        deliveryFee: 1500,
        categories: ["الكل", "العروض والمدمر", "الوجبات والصاج", "البركر والكنتاكي", "البيتزا والريزو", "المرطبات والعصائر", "الكريب والوافل"],
        items: [
            { id: "am_1", name: "صينية عائلي مشكل (صاج + ريزو)", price: 10000, category: "العروض والمدمر" },
            { id: "am_2", name: "صينية عائلي مشكل (صاج + كنتاكي)", price: 10000, category: "العروض والمدمر" },
            { id: "am_3", name: "عرض بيتزا + 20 قطعة صاج + فنكر + بيبسي", price: 15000, category: "العروض والمدمر" },
            { id: "am_4", name: "صينية بركر عائلي 24 قطعة", price: 10000, category: "العروض والمدمر" },
            { id: "am_5", name: "لفة صاج دجاج", price: 2000, category: "الوجبات والصاج" },
            { id: "am_6", name: "وجبة صاج وسط", price: 5000, category: "الوجبات والصاج" },
            { id: "am_7", name: "صاج عائلي 30 قطعة", price: 10000, category: "الوجبات والصاج" },
            { id: "am_8", name: "لفة كص", price: 2000, category: "الوجبات والصاج" },
            { id: "am_9", name: "شيتوز زنجر مع بيبسي", price: 5000, category: "البركر والكنتاكي" },
            { id: "am_10", name: "بركر لحم دبل", price: 3000, category: "البركر والكنتاكي" },
            { id: "am_11", name: "وجبة كنتاكي 3 قطع", price: 5000, category: "البركر والكنتاكي" },
            { id: "am_12", name: "وجبة كنتاكي 9 قطع عائلي", price: 15000, category: "البركر والكنتاكي" },
            { id: "am_13", name: "بيتزا صغير", price: 6000, category: "البيتزا والريزو" },
            { id: "am_14", name: "بيتزا وسط", price: 8000, category: "البيتزا والريزو" },
            { id: "am_15", name: "وجبة ريزو", price: 5000, category: "البيتزا والريزو" },
            { id: "am_16", name: "آيس كريم طبيعي (قدح صغير)", price: 1000, category: "المرطبات والعصائر" },
            { id: "am_17", name: "آيس كريم عائلي", price: 5000, category: "المرطبات والعصائر" },
            { id: "am_18", name: "عصير موز ونوتيلا (كبير)", price: 3000, category: "المرطبات والعصائر" },
            { id: "am_19", name: "موهيتو بلو", price: 2500, category: "المرطبات والعصائر" },
            { id: "am_20", name: "كريب نوتيلا", price: 4000, category: "الكريب والوافل" },
            { id: "am_21", name: "بيتزا كريب", price: 8000, category: "الكريب والوافل" },
            { id: "am_22", name: "وافل بستاشيو", price: 5000, category: "الكريب والوافل" }
        ]
    }
};

// Global Application State
let currentRestaurantKey = "66grill";
let currentCategory = "الكل";
let searchQuery = "";
let currentSort = "default";
let deliveryType = "delivery";
let cart = [];
let favorites = JSON.parse(localStorage.getItem("app_favorites") || "[]");
let activeDiscount = 0; // Discount percentage

// DOM Elements
const restaurantTabsEl = document.getElementById("restaurant-tabs");
const restaurantInfoEl = document.getElementById("restaurant-info");
const categoryTabsEl = document.getElementById("category-tabs");
const menuItemsEl = document.getElementById("menu-items");
const currentCategoryTitleEl = document.getElementById("current-category-title");
const itemsCountBadgeEl = document.getElementById("items-count-badge");
const cartBadgeEl = document.getElementById("cart-badge");
const cartHeaderPriceEl = document.getElementById("cart-header-price");
const cartModalEl = document.getElementById("cart-modal");
const cartItemsContainerEl = document.getElementById("cart-items-container");
const subtotalPriceEl = document.getElementById("subtotal-price");
const deliveryFeePriceEl = document.getElementById("delivery-fee-price");
const cartTotalPriceEl = document.getElementById("cart-total-price");
const favBadgeEl = document.getElementById("fav-badge");

// Audio SFX Setup
const popSound = new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'], volume: 0.5 });
const successSound = new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'], volume: 0.7 });

// Initialize Application
window.onload = () => {
    loadSavedCustomerInfo();
    updateFavBadge();
    renderRestaurantTabs();
    selectRestaurant(currentRestaurantKey);
    startFlashTimer();
};

// Countdown Timer Handler
function startFlashTimer() {
    let duration = 3 * 3600 + 45 * 60 + 12;
    const timerEl = document.getElementById("flash-timer");
    setInterval(() => {
        let hrs = Math.floor(duration / 3600);
        let mins = Math.floor((duration % 3600) / 60);
        let secs = duration % 60;
        if(timerEl) {
            timerEl.innerText = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        if (duration > 0) duration--;
    }, 1000);
}

// LocalStorage Handlers
function loadSavedCustomerInfo() {
    const savedName = localStorage.getItem("cust_name");
    const savedPhone = localStorage.getItem("cust_phone");
    if (savedName) document.getElementById("cust-name").value = savedName;
    if (savedPhone) document.getElementById("cust-phone").value = savedPhone;
}

function saveCustomerInfo(name, phone) {
    localStorage.setItem("cust_name", name);
    localStorage.setItem("cust_phone", phone);
}

// Render Restaurant Selector
function renderRestaurantTabs() {
    restaurantTabsEl.innerHTML = "";
    Object.keys(restaurantsData).forEach(key => {
        const rest = restaurantsData[key];
        const isActive = key === currentRestaurantKey;
        const btn = document.createElement("button");
        btn.className = `px-5 py-3 rounded-2xl font-black whitespace-nowrap transition-all duration-300 flex items-center gap-2 border ${
            isActive 
            ? "bg-gradient-to-r from-amber-600 to-amber-500 text-neutral-950 border-amber-400 shadow-lg shadow-amber-500/20 scale-105" 
            : "bg-neutral-900/80 text-amber-100/70 border-amber-500/20 hover:border-amber-500/40 hover:text-amber-300"
        }`;
        btn.innerHTML = `<span class="text-xl">${rest.logo}</span> <span>${rest.name}</span>`;
        btn.onclick = () => {
            popSound.play();
            selectRestaurant(key);
        };
        restaurantTabsEl.appendChild(btn);
    });
}

// Select Restaurant Event
function selectRestaurant(key) {
    currentRestaurantKey = key;
    currentCategory = "الكل";
    searchQuery = "";
    document.getElementById("search-input").value = "";
    document.getElementById("clear-search-btn").classList.add("hidden");
    
    renderRestaurantTabs();
    renderRestaurantInfo();
    renderCategoryTabs();
    renderMenuItems();
}

// Render Restaurant Banner Info
function renderRestaurantInfo() {
    const rest = restaurantsData[currentRestaurantKey];
    restaurantInfoEl.innerHTML = `
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 z-10 relative">
            <div>
                <div class="flex items-center gap-3">
                    <span class="text-3xl">${rest.logo}</span>
                    <h2 class="text-2xl md:text-3xl font-black text-amber-400">${rest.name}</h2>
                    <span class="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs px-2.5 py-0.5 rounded-full font-black flex items-center gap-1">
                        <i class="fa-solid fa-star text-amber-400 text-[10px]"></i> ${rest.rating}
                    </span>
                </div>
                <div class="flex flex-wrap items-center gap-4 text-xs text-neutral-400 mt-2">
                    <span><i class="fa-solid fa-location-dot text-amber-500 ml-1"></i> ${rest.location}</span>
                    <span><i class="fa-solid fa-clock text-amber-500 ml-1"></i> ${rest.workHours}</span>
                </div>
            </div>
            <a href="https://wa.me/964${rest.phone.substring(1)}" target="_blank" class="inline-flex items-center justify-center gap-2 bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-5 py-2.5 rounded-xl font-extrabold text-xs hover:bg-emerald-900 transition-all">
                <i class="fa-brands fa-whatsapp text-base"></i> التواصل المباشر
            </a>
        </div>
    `;
}

// Render Category Filters
function renderCategoryTabs() {
    const categories = restaurantsData[currentRestaurantKey].categories;
    categoryTabsEl.innerHTML = "";
    categories.forEach(cat => {
        const isActive = cat === currentCategory;
        const btn = document.createElement("button");
        btn.className = `px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            isActive 
            ? "bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm" 
            : "bg-neutral-900/60 text-neutral-400 border border-neutral-800 hover:text-amber-200"
        }`;
        btn.innerText = cat;
        btn.onclick = () => {
            popSound.play();
            currentCategory = cat;
            renderCategoryTabs();
            renderMenuItems();
        };
        categoryTabsEl.appendChild(btn);
    });
}

// Get Processed Items
function getProcessedItems() {
    const rest = restaurantsData[currentRestaurantKey];
    let items = rest.items;

    if (currentCategory !== "الكل") {
        items = items.filter(item => item.category === currentCategory);
    }

    if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        items = items.filter(item => 
            item.name.toLowerCase().includes(q) || 
            (item.desc && item.desc.toLowerCase().includes(q)) ||
            item.category.toLowerCase().includes(q)
        );
    }

    if (currentSort === "price-low") {
        items = [...items].sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
        items = [...items].sort((a, b) => b.price - a.price);
    } else if (currentSort === "name") {
        items = [...items].sort((a, b) => a.name.localeCompare(b.name, 'ar'));
    }

    return items;
}

// Render Menu Grid
function renderMenuItems() {
    currentCategoryTitleEl.innerText = searchQuery ? `نتائج البحث: "${searchQuery}"` : currentCategory;
    const items = getProcessedItems();
    itemsCountBadgeEl.innerText = `${items.length} وجبة`;

    menuItemsEl.innerHTML = "";

    if (items.length === 0) {
        menuItemsEl.innerHTML = `
            <div class="col-span-full text-center py-12 bg-neutral-900/40 rounded-2xl border border-neutral-800">
                <i class="fa-solid fa-utensils text-4xl text-neutral-600 mb-3 block"></i>
                <p class="text-neutral-400 text-sm font-semibold">لا توجد وجبات تطابق البحث أو القسم المختار.</p>
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const isFav = favorites.includes(item.id);
        const card = document.createElement("div");
        card.className = "bg-neutral-900/90 rounded-2xl p-5 gold-border-glow flex flex-col justify-between relative group";
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start gap-2 mb-2">
                    <h4 class="font-extrabold text-amber-100 text-base leading-snug">${item.name}</h4>
                    <button onclick="toggleFavorite('${item.id}')" class="text-sm transition-transform active:scale-125 ${isFav ? 'text-red-500' : 'text-neutral-600 hover:text-red-400'}">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <span class="inline-block text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-md font-bold mb-2">${item.category}</span>
                ${item.desc ? `<p class="text-xs text-neutral-400 mb-4 leading-relaxed">${item.desc}</p>` : ''}
            </div>
            <div class="flex justify-between items-center mt-4 pt-3 border-t border-neutral-800">
                <span class="text-amber-400 font-black text-base">${item.price.toLocaleString()} <span class="text-[10px] font-normal">د.ع</span></span>
                <button onclick="addToCart('${item.id}')" class="bg-gradient-to-r from-amber-600 to-amber-500 hover:brightness-110 text-neutral-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md shadow-amber-500/10 active:scale-95">
                    <i class="fa-solid fa-plus"></i> إضافة
                </button>
            </div>
        `;
        menuItemsEl.appendChild(card);
    });
}

// Search & Sort Handlers
function handleSearch() {
    const input = document.getElementById("search-input");
    searchQuery = input.value;
    document.getElementById("clear-search-btn").classList.toggle("hidden", searchQuery === "");
    renderMenuItems();
}

function clearSearch() {
    document.getElementById("search-input").value = "";
    searchQuery = "";
    document.getElementById("clear-search-btn").classList.add("hidden");
    renderMenuItems();
}

function handleSort() {
    currentSort = document.getElementById("sort-select").value;
    renderMenuItems();
}

// Favorites System
function toggleFavorite(itemId) {
    popSound.play();
    if (favorites.includes(itemId)) {
        favorites = favorites.filter(id => id !== itemId);
        showToast("تمت إزالة الوجبة من المفضلة");
    } else {
        favorites.push(itemId);
        showToast("تمت إضافة الوجبة إلى المفضلة ❤️");
    }
    localStorage.setItem("app_favorites", JSON.stringify(favorites));
    updateFavBadge();
    renderMenuItems();
}

function updateFavBadge() {
    favBadgeEl.innerText = favorites.length;
    favBadgeEl.classList.toggle("hidden", favorites.length === 0);
}

function toggleFavoritesView() {
    popSound.play();
    if (favorites.length === 0) {
        showToast("لا توجد وجبات مفضلة محددة بعد!");
        return;
    }
    currentCategory = "الكل";
    searchQuery = "";
    const rest = restaurantsData[currentRestaurantKey];
    const favItems = rest.items.filter(item => favorites.includes(item.id));
    
    currentCategoryTitleEl.innerText = "وجباتي المفضلة ❤️";
    itemsCountBadgeEl.innerText = `${favItems.length} وجبة`;
    menuItemsEl.innerHTML = "";

    if (favItems.length === 0) {
        menuItemsEl.innerHTML = `<p class="text-neutral-400 col-span-full text-center py-8">لا توجد وجبات مفضلة في هذا المطعم حالياً.</p>`;
        return;
    }

    favItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "bg-neutral-900/90 rounded-2xl p-5 gold-border-glow flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start gap-2 mb-2">
                    <h4 class="font-extrabold text-amber-100 text-base">${item.name}</h4>
                    <button onclick="toggleFavorite('${item.id}')" class="text-red-500 text-sm"><i class="fa-solid fa-heart"></i></button>
                </div>
                ${item.desc ? `<p class="text-xs text-neutral-400 mb-4">${item.desc}</p>` : ''}
            </div>
            <div class="flex justify-between items-center mt-4 pt-3 border-t border-neutral-800">
                <span class="text-amber-400 font-black text-base">${item.price.toLocaleString()} د.ع</span>
                <button onclick="addToCart('${item.id}')" class="bg-amber-500 text-neutral-950 font-black px-4 py-2 rounded-xl text-xs"><i class="fa-solid fa-plus"></i> إضافة</button>
            </div>
        `;
        menuItemsEl.appendChild(card);
    });
}

// Cart System
function addToCart(itemId) {
    popSound.play();
    const rest = restaurantsData[currentRestaurantKey];
    const item = rest.items.find(i => i.id === itemId);
    if (!item) return;

    if (cart.length > 0 && cart[0].restaurantKey !== currentRestaurantKey) {
        if (!confirm("تحتوي السلة على طلبات من مطعم آخر. هل تريد إفراغ السلة وبدء طلب جديد من هذا المطعم؟")) {
            return;
        }
        cart = [];
    }

    const existingItem = cart.find(i => i.id === itemId);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            restaurantKey: currentRestaurantKey,
            restaurantName: rest.name,
            qty: 1
        });
    }

    showToast(`تمت إضافة "${item.name}" للسلة`);
    updateCartUI();
}

function changeQty(itemId, delta) {
    popSound.play();
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== itemId);
        }
    }
    updateCartUI();
}

function setDeliveryType(type) {
    popSound.play();
    deliveryType = type;
    const btnDelivery = document.getElementById("btn-delivery");
    const btnPickup = document.getElementById("btn-pickup");
    const deliveryRow = document.getElementById("delivery-fee-row");

    if (type === 'delivery') {
        btnDelivery.className = "flex-1 py-2 rounded-xl text-xs font-extrabold transition-all border border-amber-500/40 bg-amber-500/20 text-amber-300";
        btnPickup.className = "flex-1 py-2 rounded-xl text-xs font-extrabold transition-all border border-neutral-800 bg-neutral-900 text-neutral-400";
        deliveryRow.classList.remove("hidden");
    } else {
        btnPickup.className = "flex-1 py-2 rounded-xl text-xs font-extrabold transition-all border border-amber-500/40 bg-amber-500/20 text-amber-300";
        btnDelivery.className = "flex-1 py-2 rounded-xl text-xs font-extrabold transition-all border border-neutral-800 bg-neutral-900 text-neutral-400";
        deliveryRow.classList.add("hidden");
    }

    updateCartUI();
}

function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadgeEl.innerText = totalQty;

    cartItemsContainerEl.innerHTML = "";
    let subtotal = 0;

    if (cart.length === 0) {
        cartItemsContainerEl.innerHTML = `
            <div class="text-center py-16 text-neutral-500">
                <i class="fa-solid fa-crown text-5xl mb-3 text-amber-500/20"></i>
                <p class="text-sm font-semibold">سلتك الفاخرة فارغة حالياً</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            subtotal += itemTotal;

            const itemEl = document.createElement("div");
            itemEl.className = "py-3 flex justify-between items-center";
            itemEl.innerHTML = `
                <div class="flex-1 pl-2">
                    <h5 class="font-bold text-amber-100 text-xs">${item.name}</h5>
                    <span class="text-xs text-amber-400 font-extrabold">${item.price.toLocaleString()} د.ع</span>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="changeQty('${item.id}', -1)" class="w-6 h-6 bg-neutral-800 text-amber-400 border border-amber-500/30 rounded-full font-bold flex items-center justify-center hover:bg-neutral-700 text-xs">-</button>
                    <span class="font-bold text-xs w-4 text-center text-amber-100">${item.qty}</span>
                    <button onclick="changeQty('${item.id}', 1)" class="w-6 h-6 bg-amber-500 text-neutral-950 rounded-full font-bold flex items-center justify-center hover:bg-amber-400 text-xs">+</button>
                </div>
            `;
            cartItemsContainerEl.appendChild(itemEl);
        });
    }

    const rest = restaurantsData[currentRestaurantKey];
    const deliveryFee = deliveryType === "delivery" ? rest.deliveryFee : 0;
    const discountAmount = (subtotal * activeDiscount) / 100;
    const finalTotal = subtotal > 0 ? (subtotal - discountAmount) + deliveryFee : 0;

    subtotalPriceEl.innerText = `${subtotal.toLocaleString()} د.ع`;
    deliveryFeePriceEl.innerText = `${deliveryFee.toLocaleString()} د.ع`;
    cartTotalPriceEl.innerText = `${finalTotal.toLocaleString()} د.ع`;
    cartHeaderPriceEl.innerText = `${subtotal.toLocaleString()} د.ع`;

    const discountRow = document.getElementById("discount-row");
    if (activeDiscount > 0 && subtotal > 0) {
        discountRow.classList.remove("hidden");
        document.getElementById("discount-price").innerText = `-${discountAmount.toLocaleString()} د.ع (${activeDiscount}%)`;
    } else {
        discountRow.classList.add("hidden");
    }
}

function toggleCartModal() {
    popSound.play();
    cartModalEl.classList.toggle("hidden");
}

// Toast Notifications System
function showToast(message) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "bg-neutral-900 border border-amber-500/40 text-amber-200 px-4 py-2.5 rounded-xl text-xs font-bold shadow-2xl flex items-center gap-2 toast-animate pointer-events-auto";
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-amber-400 text-sm"></i> ${message}`;
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 2500);
}

// Interactive Feature: AI Assistant "أبو الخيرة"
function openAIHelper() {
    popSound.play();
    Swal.fire({
        title: '🤖 مساعدك الذكي (أبو الخيرة)',
        text: 'شنو ميزانيتك أو شو يجي ببالك اليوم؟ وبشر بطلبك!',
        input: 'select',
        inputOptions: {
            'budget': '💰 أريد وجبة اقتصادية (تحت 5,000 د.ع)',
            'heavy': '🍖 أريد وجبة دسمة ومشاوي عائلية',
            'fast': '🍔 أريد بركر أو وجبة سريعة ومقرمشة',
            'sweet': '🍦 أريد تحلية، عصائر أو كريب'
        },
        inputPlaceholder: 'اختر المزاد المفضل لديك...',
        showCancelButton: true,
        confirmButtonText: 'اقترح لي الوجبة',
        cancelButtonText: 'إلغاء'
    }).then((result) => {
        if (result.isConfirmed) {
            let suggestedItems = [];
            const allItems = restaurantsData[currentRestaurantKey].items;

            if (result.value === 'budget') {
                suggestedItems = allItems.filter(i => i.price <= 5000);
            } else if (result.value === 'heavy') {
                suggestedItems = allItems.filter(i => i.price >= 10000 || i.category.includes('مشاو') || i.category.includes('شرقية'));
            } else if (result.value === 'fast') {
                suggestedItems = allItems.filter(i => i.category.includes('بركر') || i.category.includes('زنجر') || i.category.includes('كنتاكي'));
            } else if (result.value === 'sweet') {
                suggestedItems = allItems.filter(i => i.category.includes('عصائر') || i.category.includes('كريب') || i.category.includes('قهوة'));
            }

            if (suggestedItems.length > 0) {
                const randomItem = suggestedItems[Math.floor(Math.random() * suggestedItems.length)];
                Swal.fire({
                    title: '🎉 اقتراح أبو الخيرة لك!',
                    html: `<b class="text-amber-400">${randomItem.name}</b> بسعر <b>${randomItem.price.toLocaleString()} د.ع</b> من مطعم ${restaurantsData[currentRestaurantKey].name}.`,
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'إضافة للسلة فوراً',
                    cancelButtonText: 'شكراً'
                }).then((addRes) => {
                    if (addRes.isConfirmed) {
                        addToCart(randomItem.id);
                    }
                });
            } else {
                Swal.fire('تنبيه', 'لم نجد وجبات مطابقة تماماً في هذا المطعم، جرب اختيارات أخرى!', 'info');
            }
        }
    });
}

// Interactive Feature: Spin the Wheel
function openLuckyWheel() {
    popSound.play();
    Swal.fire({
        title: '🎡 عجلة الحظ الذهبية اليومية',
        html: `ادرر العجلة للحصول على خصم ملكي فوري ينزل بسلتك مباشرة!`,
        confirmButtonText: '👑 ادر العجلة الآن!',
        showCancelButton: true,
        cancelButtonText: 'إغلاق'
    }).then((res) => {
        if (res.isConfirmed) {
            const discounts = [5, 10, 15, 20];
            const wonDiscount = discounts[Math.floor(Math.random() * discounts.length)];
            activeDiscount = wonDiscount;
            
            confetti({
                particleCount: 120,
                spread: 70,
                origin: { y: 0.6 }
            });
            successSound.play();

            Swal.fire({
                title: '🎁 ألف مبروك!',
                text: `حصلت على خصم بقيمة ${wonDiscount}% على إجمالي وجباتك! تم تطبيق الخصم فوراً في السلة.`,
                icon: 'success'
            });

            updateCartUI();
        }
    });
}

// WhatsApp Integration
function sendOrderWhatsApp() {
    if (cart.length === 0) {
        alert("سلتك فارغة! يرجى إضافة وجبات قبل إرسال الطلب.");
        return;
    }

    const name = document.getElementById("cust-name").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const notes = document.getElementById("cust-notes").value.trim();

    if (!name || !phone) {
        alert("يرجى إدخال الاسم ورقم الهاتف لمتابعة الطلب.");
        return;
    }

    saveCustomerInfo(name, phone);

    const restKey = cart[0].restaurantKey;
    const rest = restaurantsData[restKey];
    const deliveryFee = deliveryType === "delivery" ? rest.deliveryFee : 0;

    let message = `*طلب فاخر جديد - منصة الضلوعية* 👑\n`;
    message += `------------------------------\n`;
    message += `*المطعم:* ${rest.name}\n`;
    message += `*الاسم:* ${name}\n`;
    message += `*الهاتف:* ${phone}\n`;
    message += `*نوع الطلب:* ${deliveryType === 'delivery' ? 'توصيل للمنزل 🛵' : 'استلام من المطعم 🏪'}\n`;
    if (notes) message += `*ملاحظات/العنوان:* ${notes}\n`;
    message += `------------------------------\n`;
    message += `*تفاصيل الوجبات:*\n`;

    let subtotal = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        message += `${index + 1}. ${item.name} (عدد ${item.qty}) - ${itemTotal.toLocaleString()} د.ع\n`;
    });

    const discountAmount = (subtotal * activeDiscount) / 100;
    const finalTotal = (subtotal - discountAmount) + deliveryFee;

    message += `------------------------------\n`;
    message += `*مجموع الوجبات:* ${subtotal.toLocaleString()} د.ع\n`;
    if (activeDiscount > 0) {
        message += `*الخصم المكتسب (${activeDiscount}%):* -${discountAmount.toLocaleString()} د.ع\n`;
    }
    if (deliveryType === 'delivery') {
        message += `*أجرة التوصيل:* ${deliveryFee.toLocaleString()} د.ع\n`;
    }
    message += `*المجموع النهائي:* ${finalTotal.toLocaleString()} د.ع\n`;

    const encoded = encodeURIComponent(message);
    const targetPhone = "964" + rest.phone.substring(1);

    confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
    });
    successSound.play();

    window.open(`https://wa.me/${targetPhone}?text=${encoded}`, '_blank');
}