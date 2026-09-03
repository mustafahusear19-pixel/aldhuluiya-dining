// Target WhatsApp Number
const TARGET_PHONE_NUMBER = "9647857381803";

// Database: Restaurants Data
const restaurantsData = {
    "ali_mandab": {
        name: "مطعم ومرطبات علي مندب",
        logo: "🍦",
        phone: "07806675497",
        location: "الضلوعية - الشارع الحولي",
        rating: "4.9",
        categories: ["الكل", "العروض والصواني", "البركر", "صاج دجاج", "صاج كرسبي", "كنتاكي", "الكص", "الريزو والشاورما", "البيتزا", "آيس كريم", "عصائر", "وافل وكريب", "موهيتو وميلك شيك"],
        items: [
            // العروض
            { id: "am_1", name: "صينية عائلي مشكل (صاج + بركر)", price: 10000, category: "العروض والصواني" },
            { id: "am_2", name: "صينية عائلي مشكل (صاج + كنتاكي)", price: 10000, category: "العروض والصواني" },
            { id: "am_3", name: "صينية عائلي مشكل (صاج + ريزو)", price: 10000, category: "العروض والصواني" },
            { id: "am_4", name: "صينية عائلي مشكل (كنتاكي + بركر)", price: 10000, category: "العروض والصواني" },
            { id: "am_5", name: "صينية عائلي مشكل (صاج دجاج + كرسبي)", price: 10000, category: "العروض والصواني" },
            { id: "am_6", name: "عرض بيتزا وسط + 7 قطع صاج + 3 كرسبي + فنكر + بيبسي", price: 13000, category: "العروض والصواني" },
            { id: "am_7", name: "عرض بيتزا وسط + 20 قطعة صاج + فنكر + بيبسي", price: 15000, category: "العروض والصواني" },
            // البركر
            { id: "am_8", name: "شيتوز زنجر مع بيبسي", price: 5000, category: "البركر" },
            { id: "am_9", name: "بركر لحم", price: 2000, category: "البركر" },
            { id: "am_10", name: "بركر لحم دبل", price: 3000, category: "البركر" },
            { id: "am_11", name: "بركر دجاج", price: 2000, category: "البركر" },
            { id: "am_12", name: "بركر دجاج دبل", price: 3000, category: "البركر" },
            // صاج دجاج
            { id: "am_13", name: "لفة صاج دجاج", price: 2000, category: "صاج دجاج" },
            { id: "am_14", name: "وجبة صاج صغير", price: 3000, category: "صاج دجاج" },
            { id: "am_15", name: "وجبة صاج وسط", price: 5000, category: "صاج دجاج" },
            { id: "am_16", name: "صاج عائلي 30 قطعة", price: 10000, category: "صاج دجاج" },
            // كرسبي
            { id: "am_17", name: "لفة صاج كرسبي", price: 3500, category: "صاج كرسبي" },
            { id: "am_18", name: "سندويش كرسبي", price: 3500, category: "صاج كرسبي" },
            { id: "am_19", name: "وجبة كرسبي 4 قطع", price: 6000, category: "صاج كرسبي" },
            { id: "am_20", name: "صاج كرسبي عائلي", price: 10000, category: "صاج كرسبي" },
            // كنتاكي
            { id: "am_21", name: "كنتاكي 2 قطع", price: 4000, category: "كنتاكي" },
            { id: "am_22", name: "كنتاكي 3 قطع", price: 5000, category: "كنتاكي" },
            { id: "am_23", name: "كنتاكي 6 قطع", price: 10000, category: "كنتاكي" },
            { id: "am_24", name: "كنتاكي 9 قطع", price: 15000, category: "كنتاكي" },
            // الكص
            { id: "am_25", name: "لفة كص", price: 2000, category: "الكص" },
            { id: "am_26", name: "نص نفر كص", price: 5000, category: "الكص" },
            { id: "am_27", name: "نفر كص عائلي", price: 10000, category: "الكص" },
            // بيتزا
            { id: "am_28", name: "بيتزا صغير", price: 6000, category: "البيتزا" },
            { id: "am_29", name: "بيتزا وسط", price: 8000, category: "البيتزا" },
            { id: "am_30", name: "بيتزا عائلي", price: 10000, category: "البيتزا" },
            // المرطبات
            { id: "am_31", name: "آيس كريم (قدح صغير)", price: 1000, category: "آيس كريم" },
            { id: "am_32", name: "آيس كريم (قدح وسط)", price: 1500, category: "آيس كريم" },
            { id: "am_33", name: "عصير طبيعي (وسط)", price: 2000, category: "عصائر" },
            { id: "am_34", name: "وافل نوتيلا / لوتس", price: 4000, category: "وافل وكريب" },
            { id: "am_35", name: "كريب نوتيلا / اوريو", price: 4000, category: "وافل وكريب" },
            { id: "am_36", name: "موهيتو (جميع النكهات)", price: 2500, category: "موهيتو وميلك شيك" },
            { id: "am_37", name: "ميلك شيك نوتيلا / اوريو", price: 3500, category: "موهيتو وميلك شيك" }
        ]
    },
    "blue_dome": {
        name: "كافيه ومطعم بلو دوم (Blue Dome)",
        logo: "🏛️",
        phone: "07770000409",
        location: "الضلوعية",
        rating: "4.8",
        categories: ["الكل", "بركر لحوم", "بركر دجاج", "ساندويشات وريزو", "مقبلات وفنكر", "قهوة ومشروبات", "موฮيتو وسموذي"],
        items: [
            // لحوم
            { id: "bd_1", name: "كلاسيك بركر (ساندويش)", price: 4000, category: "بركر لحوم" },
            { id: "bd_2", name: "كلاسيك بركر (وجبة)", price: 5500, category: "بركر لحوم" },
            { id: "bd_3", name: "سموك بركر (وجبة)", price: 5500, category: "بركر لحوم" },
            { id: "bd_4", name: "مربى الكرز بركر (وجبة)", price: 6000, category: "بركر لحوم" },
            { id: "bd_5", name: "بلو دوم بركر (وجبة)", price: 7500, category: "بركر لحوم" },
            // دجاج
            { id: "bd_6", name: "بركر دجاج كلاسيك (ساندويش)", price: 3500, category: "بركر دجاج" },
            { id: "bd_7", name: "بركر دجاج كلاسيك (وجبة)", price: 5000, category: "بركر دجاج" },
            { id: "bd_8", name: "ستيك بركر دجاج (وجبة)", price: 5000, category: "بركر دجاج" },
            { id: "bd_9", name: "فرايز بركر دجاج (وجبة)", price: 5000, category: "بركر دجاج" },
            // ساندويشات وريزو
            { id: "bd_10", name: "ساندويش زنجر (وجبة)", price: 5000, category: "ساندويشات وريزو" },
            { id: "bd_11", name: "مطافي زنجر (وجبة)", price: 5000, category: "ساندويشات وريزو" },
            { id: "bd_12", name: "ريزو كلاسيك", price: 5000, category: "ساندويشات وريزو" },
            { id: "bd_13", name: "ريزو هني ماسترد", price: 5000, category: "ساندويشات وريزو" },
            // مشروبات
            { id: "bd_14", name: "اسبريسو (Single)", price: 2000, category: "قهوة ومشروبات" },
            { id: "bd_15", name: "لاتيه / كابتشينو", price: 2500, category: "قهوة ومشروبات" },
            { id: "bd_16", name: "آيس لاتيه", price: 3000, category: "قهوة ومشروبات" },
            { id: "bd_17", name: "موهيتو (بلو بيري/ فراولة / رمان)", price: 2500, category: "موฮيتو وسموذي" },
            { id: "bd_18", name: "سموذي (جميع النكهات)", price: 3000, category: "موฮيتو وسموذي" }
        ]
    },
    "yala_eat": {
        name: "مطعم يلا ايت (Yala Eat)",
        logo: "🍔",
        phone: "07837779033",
        location: "الضلوعية - الشارع الحولي",
        rating: "4.8",
        categories: ["الكل", "البركر", "الشاورما", "أكلات شرقية", "أكلات غربية", "وجبات الصاج", "البيتزا", "الكنتاكي"],
        items: [
            // البركر
            { id: "ye_1", name: "بركر لحم", price: 3000, category: "البركر" },
            { id: "ye_2", name: "وجبة بركر لحم", price: 4000, category: "البركر" },
            { id: "ye_3", name: "بركر لحم دبل", price: 5000, category: "البركر" },
            { id: "ye_4", name: "بركر دجاج", price: 2500, category: "البركر" },
            { id: "ye_5", name: "شيتوس زنجر", price: 5000, category: "البركر" },
            // الشاورما
            { id: "ye_6", name: "شاورما لحم", price: 3500, category: "الشاورما" },
            { id: "ye_7", name: "شاورما دجاج", price: 3000, category: "الشاورما" },
            { id: "ye_8", name: "ربع كيلو شاورما لحم", price: 12000, category: "الشاورما" },
            { id: "ye_9", name: "ربع كيلو شاورما دجاج", price: 9000, category: "الشاورما" },
            // أكلات شرقية وغربية
            { id: "ye_10", name: "نفر مندي لحم", price: 16000, category: "أكلات شرقية" },
            { id: "ye_11", name: "نفر مندي دجاج", price: 10000, category: "أكلات شرقية" },
            { id: "ye_12", name: "ستيك دجاج", price: 10000, category: "أكلات غربية" },
            { id: "ye_13", name: "شيش طاووق لحم", price: 11000, category: "أكلات غربية" },
            { id: "ye_14", name: "غولدن بلو", price: 10000, category: "أكلات غربية" },
            // الصاج والبيتزا
            { id: "ye_15", name: "صاج سوري لحم", price: 3500, category: "وجبات الصاج" },
            { id: "ye_16", name: "صاج سوري دجاج", price: 2500, category: "وجبات الصاج" },
            { id: "ye_17", name: "بيتزا دجاج وسط", price: 7000, category: "البيتزا" },
            { id: "ye_18", name: "بيتزا لحم وسط", price: 8500, category: "البيتزا" },
            { id: "ye_19", name: "بيتزا مشكل كبيرة", price: 13000, category: "البيتزا" },
            { id: "ye_20", name: "3 قطع كنتاكي", price: 6000, category: "الكنتاكي" }
        ]
    },
    "66grill": {
        name: "مطعم 66 Grill",
        logo: "🔥",
        phone: "07783060757",
        location: "الضلوعية - الشارع الحولي",
        rating: "4.9",
        categories: ["الكل", "بركر لحم", "بركر دجاج", "سندويشات وصاج", "شاورما الفحم", "كنتاكي وستربس", "ريزو ومقبلات"],
        items: [
            // بركر لحم
            { id: "66g_1", name: "بركر لحم (ساندويش)", price: 3000, category: "بركر لحم" },
            { id: "66g_2", name: "بركر لحم (وجبة)", price: 5000, category: "بركر لحم" },
            { id: "66g_3", name: "بركر لحم بلجين (وجبة)", price: 5000, category: "بركر لحم" },
            { id: "66g_4", name: "بركر لحم دبل (وجبة)", price: 6000, category: "بركر لحم" },
            { id: "66g_5", name: "مشروم بركر (وجبة)", price: 6000, category: "بركر لحم" },
            { id: "66g_6", name: "بركر لحم 66 الخاص", price: 7000, category: "بركر لحم" },
            // بركر دجاج
            { id: "66g_7", name: "بركر دجاج (ساندويش)", price: 2500, category: "بركر دجاج" },
            { id: "66g_8", name: "بركر دجاج (وجبة)", price: 3500, category: "بركر دجاج" },
            { id: "66g_9", name: "شيتوس بركر دجاج", price: 5000, category: "بركر دجاج" },
            // سندويشات وشاورما
            { id: "66g_10", name: "سندويش زنجر", price: 3500, category: "سندويشات وصاج" },
            { id: "66g_11", name: "سندويش كرسبي", price: 3500, category: "سندويشات وصاج" },
            { id: "66g_12", name: "صاج شاورما دجاج", price: 2500, category: "شاورما الفحم" },
            { id: "66g_13", name: "وجبة شاورما دجاج عالفحم", price: 5000, category: "شاورما الفحم" },
            { id: "66g_14", name: "وجبة شاورما دجاج عائلي", price: 10000, category: "شاورما الفحم" },
            // كنتاكي وريزو
            { id: "66g_15", name: "وجبة كنتاكي 3 قطع", price: 6000, category: "كنتاكي وستربس" },
            { id: "66g_16", name: "وجبة ستربس 4 قطع", price: 6000, category: "كنتاكي وستربس" },
            { id: "66g_17", name: "ريزو مقرمش", price: 5000, category: "ريزو ومقبلات" },
            { id: "66g_18", name: "ريزو شاورما", price: 5000, category: "ريزو ومقبلات" }
        ]
    }
};

// Grocery Quick Database
const groceryData = {
    categories: ["الكل", "فواكه وخضروات", "ألبان وأجبان", "مشروبات وحلويات", "معلبات ومؤن"],
    items: [
        { id: "g_1", name: "طماطم طازجة (1 كغم)", price: 1250, category: "فواكه وخضروات" },
        { id: "g_2", name: "خيار طازج (1 كغم)", price: 1000, category: "فواكه وخضروات" },
        { id: "g_3", name: "موز وارد (1 كغم)", price: 2000, category: "فواكه وخضروات" },
        { id: "g_4", name: "حليب كالي، 1 لتر", price: 1500, category: "ألبان وأجبان" },
        { id: "g_5", name: "جبن عرب طازج (500 غم)", price: 3500, category: "ألبان وأجبان" },
        { id: "g_6", name: "كوكاكولا عائلي 2.25 لتر", price: 1500, category: "مشروبات وحلويات" },
        { id: "g_7", name: "زيت طعام ممتاز (1 لتر)", price: 2250, category: "معلبات ومؤن" }
    ]
};

// App State
let currentMainTab = "restaurants";
let currentRestaurantKey = "ali_mandab";
let currentCategory = "الكل";
let currentGroceryCategory = "الكل";
let searchQuery = "";
let cart = [];
let activeDiscount = 0;

// SFX
const popSound = new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'], volume: 0.4 });

window.onload = () => {
    renderRestaurantTabs();
    selectRestaurant(currentRestaurantKey);
    renderGroceryItems();
};

// Helper: Get User GPS Location
function getCurrentLocation() {
    return new Promise((resolve) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => resolve(`https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`),
                () => resolve("تعذر الحصول على الموقع تلقائياً")
            );
        } else {
            resolve("الموقع غير مدعوم بالجهاز");
        }
    });
}

// Switch Between Main Services
function switchMainTab(tab) {
    popSound.play();
    currentMainTab = tab;

    document.querySelectorAll('.main-service-card').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.service-section').forEach(sec => sec.classList.add('hidden'));

    document.getElementById(`nav-btn-${tab}`).classList.add('active');
    document.getElementById(`section-${tab}`).classList.remove('hidden');
}

// RESTAURANTS RENDER LOGIC
function renderRestaurantTabs() {
    const el = document.getElementById("restaurant-tabs");
    el.innerHTML = "";
    Object.keys(restaurantsData).forEach(key => {
        const rest = restaurantsData[key];
        const isActive = key === currentRestaurantKey;
        const btn = document.createElement("button");
        btn.className = `px-4 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition border ${
            isActive ? "bg-amber-500 text-neutral-950 border-amber-400" : "bg-neutral-900 text-neutral-400 border-neutral-800"
        }`;
        btn.innerHTML = `${rest.logo} ${rest.name}`;
        btn.onclick = () => selectRestaurant(key);
        el.appendChild(btn);
    });
}

function selectRestaurant(key) {
    currentRestaurantKey = key;
    currentCategory = "الكل";
    renderRestaurantTabs();
    renderRestaurantInfo();
    renderCategoryTabs();
    renderMenuItems();
}

function renderRestaurantInfo() {
    const rest = restaurantsData[currentRestaurantKey];
    document.getElementById("restaurant-info").innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h3 class="font-black text-amber-400 text-base">${rest.logo} ${rest.name}</h3>
                <p class="text-[11px] text-neutral-400 mt-0.5"><i class="fa-solid fa-location-dot"></i> ${rest.location} • <i class="fa-solid fa-phone"></i> ${rest.phone}</p>
            </div>
            <span class="text-xs font-black bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-1 rounded-lg">⭐ ${rest.rating}</span>
        </div>
    `;
}

function renderCategoryTabs() {
    const el = document.getElementById("category-tabs");
    el.innerHTML = "";
    restaurantsData[currentRestaurantKey].categories.forEach(cat => {
        const isActive = cat === currentCategory;
        const btn = document.createElement("button");
        btn.className = `px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
            isActive ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "bg-neutral-900 text-neutral-500"
        }`;
        btn.innerText = cat;
        btn.onclick = () => { currentCategory = cat; renderCategoryTabs(); renderMenuItems(); };
        el.appendChild(btn);
    });
}

function renderMenuItems() {
    const el = document.getElementById("menu-items");
    el.innerHTML = "";
    let items = restaurantsData[currentRestaurantKey].items;

    if (currentCategory !== "الكل") items = items.filter(i => i.category === currentCategory);
    if (searchQuery.trim()) items = items.filter(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()));

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex justify-between items-center";
        card.innerHTML = `
            <div>
                <h4 class="font-extrabold text-amber-100 text-sm">${item.name}</h4>
                <span class="text-amber-400 font-black text-xs block mt-1">${item.price.toLocaleString()} د.ع</span>
            </div>
            <button onclick="addToCart('${item.id}', '${item.name}', ${item.price}, '${restaurantsData[currentRestaurantKey].name}')" class="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-xs px-3 py-1.5 rounded-lg">
                <i class="fa-solid fa-plus ml-1"></i> إضافة
            </button>
        `;
        el.appendChild(card);
    });
}

function handleSearch() {
    searchQuery = document.getElementById("search-input").value;
    renderMenuItems();
}

// GROCERY / MISWAK LOGIC WITH CUSTOM ORDER
function addCustomGroceryToCart() {
    const input = document.getElementById("custom-grocery-text");
    const text = input.value.trim();

    if (!text) {
        alert("يرجى كتابة قائمة المسواك أو الطلبات الخاصة بك أولاً!");
        return;
    }

    const customId = "custom_g_" + Date.now();
    cart.push({
        id: customId,
        name: `طلب مسواك خاص: (${text})`,
        price: 0,
        storeName: "مسواك الضلوعية (طلب خاص)",
        qty: 1
    });

    input.value = "";
    showToast("تمت إضافة طلبك الخاص إلى السلة بنجاح!");
    updateCartUI();
    toggleCartModal();
}

function renderGroceryItems() {
    const catEl = document.getElementById("grocery-category-tabs");
    catEl.innerHTML = "";
    groceryData.categories.forEach(cat => {
        const isActive = cat === currentGroceryCategory;
        const btn = document.createElement("button");
        btn.className = `px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
            isActive ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "bg-neutral-900 text-neutral-500"
        }`;
        btn.innerText = cat;
        btn.onclick = () => { currentGroceryCategory = cat; renderGroceryItems(); };
        catEl.appendChild(btn);
    });

    const el = document.getElementById("grocery-items");
    el.innerHTML = "";
    let items = groceryData.items;
    if (currentGroceryCategory !== "الكل") items = items.filter(i => i.category === currentGroceryCategory);

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <span class="text-[10px] text-amber-500 font-bold block mb-1">${item.category}</span>
                <h4 class="font-bold text-amber-100 text-xs mb-2">${item.name}</h4>
            </div>
            <div class="flex justify-between items-center mt-2 pt-2 border-t border-neutral-800">
                <span class="text-amber-400 font-black text-xs">${item.price.toLocaleString()} د.ع</span>
                <button onclick="addToCart('${item.id}', '${item.name}', ${item.price}, 'مسواك الضلوعية')" class="bg-amber-500 text-neutral-950 font-black text-[11px] px-2.5 py-1 rounded-lg">
                    + إضافة
                </button>
            </div>
        `;
        el.appendChild(card);
    });
}

// WASALNI (TAXI) FARE CALCULATION & ORDER
function calculateTaxiFare() {
    const type = document.getElementById("taxi-type").value;
    const fare = type === 'vip' ? 5000 : 3000;
    document.getElementById("taxi-fare").innerText = `${fare.toLocaleString()} د.ع`;
}

async function handleTaxiOrder(e) {
    e.preventDefault();
    const from = document.getElementById("taxi-from").value || "الموقع الحالي تلقائياً";
    const to = document.getElementById("taxi-to").value;
    const type = document.getElementById("taxi-type").value === 'vip' ? 'سيارة VIP 🚘' : 'سيارة عادية 🚕';
    const phone = document.getElementById("taxi-phone").value;
    const fare = document.getElementById("taxi-fare").innerText;

    showToast("جاري تحديد موقعك الجغرافي...");
    const locationLink = await getCurrentLocation();

    let msg = `*طلب خدمة وصلني جديدة - خدمات الضلوعية* 🚕\n`;
    msg += `------------------------------\n`;
    msg += `*الانطلاق:* ${from}\n`;
    msg += `*الوجهة:* ${to}\n`;
    msg += `*نوع السيارة:* ${type}\n`;
    msg += `*الهاتف:* ${phone}\n`;
    msg += `*الأجرة التقديرية:* ${fare}\n`;
    msg += `*موقع GPS:* ${locationLink}\n`;

    window.open(`https://api.whatsapp.com/send?phone=${TARGET_PHONE_NUMBER}&text=${encodeURIComponent(msg)}`, '_blank');
}

// CART & CHECKOUT LOGIC
function addToCart(id, name, price, storeName) {
    popSound.play();
    const existing = cart.find(i => i.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id, name, price, storeName, qty: 1 });
    }
    showToast(`تمت إضافة "${name}" للسلة`);
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById("cart-badge");
    const container = document.getElementById("cart-items-container");
    const totalEl = document.getElementById("cart-total-price");

    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    badge.innerText = totalQty;

    container.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        const div = document.createElement("div");
        div.className = "py-3 flex justify-between items-center";
        div.innerHTML = `
            <div>
                <h5 class="font-bold text-amber-100 text-xs">${item.name}</h5>
                <span class="text-[10px] text-neutral-400 font-semibold block">${item.storeName}</span>
                <span class="text-amber-400 font-black text-xs">${item.price > 0 ? item.price.toLocaleString() + ' د.ع' : 'حسب التسعيرة'}</span>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="changeQty('${item.id}', -1)" class="w-6 h-6 bg-neutral-800 text-amber-400 rounded-full font-bold text-xs flex items-center justify-center">-</button>
                <span class="text-xs font-bold text-white">${item.qty}</span>
                <button onclick="changeQty('${item.id}', 1)" class="w-6 h-6 bg-amber-500 text-neutral-950 rounded-full font-bold text-xs flex items-center justify-center">+</button>
            </div>
        `;
        container.appendChild(div);
    });

    if (activeDiscount > 0) total = total - (total * activeDiscount / 100);
    totalEl.innerText = `${total.toLocaleString()} د.ع`;
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
}

function toggleCartModal() {
    popSound.play();
    document.getElementById("cart-modal").classList.toggle("hidden");
}

function showToast(msg) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "bg-neutral-900 border border-amber-500/40 text-amber-200 px-4 py-2 rounded-xl text-xs font-bold shadow-xl toast-animate";
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function openLuckyWheel() {
    Swal.fire({
        title: '🎡 عجلة خدمات الضلوعية',
        text: 'ادر العجلة للحصول على خصم على طلبك!',
        confirmButtonText: '👑 ادر العجلة',
        showCancelButton: true,
        cancelButtonText: 'إغلاق'
    }).then((res) => {
        if (res.isConfirmed) {
            activeDiscount = 10;
            confetti({ particleCount: 100, spread: 70 });
            Swal.fire('🎉 مبروك!', 'حصلت على خصم 10% ينزل بالسلة فوراً!', 'success');
            updateCartUI();
        }
    });
}

async function sendOrderWhatsApp() {
    if (cart.length === 0) return alert("سلتك فارغة!");
    const name = document.getElementById("cust-name").value;
    const phone = document.getElementById("cust-phone").value;
    const notes = document.getElementById("cust-notes").value;
    const includeLocation = document.getElementById("send-location").checked;

    if (!name || !phone) return alert("يرجى إدخال الاسم ورقم الهاتف!");

    let locationLink = "";
    if (includeLocation) {
        showToast("جاري جلب موقعك الجغرافي...");
        locationLink = await getCurrentLocation();
    }

    let msg = `*طلب جديد عبر تطبيق خدمات الضلوعية* 🛒\n`;
    msg += `*الاسم:* ${name}\n*الهاتف:* ${phone}\n`;
    if (notes) msg += `*العنوان/ملاحظات:* ${notes}\n`;
    if (locationLink) msg += `*موقع GPS:* ${locationLink}\n`;
    msg += `------------------------------\n`;

    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        const priceDisplay = item.price > 0 ? `${itemTotal.toLocaleString()} د.ع` : 'طلب خاص';
        msg += `${index + 1}. ${item.name} (${item.storeName}) x${item.qty} = ${priceDisplay}\n`;
    });

    if (activeDiscount > 0) total = total - (total * activeDiscount / 100);
    msg += `------------------------------\n*المجموع النهائي (للمواد المُسعرية):* ${total.toLocaleString()} د.ع`;

    window.open(`https://api.whatsapp.com/send?phone=${TARGET_PHONE_NUMBER}&text=${encodeURIComponent(msg)}`, '_blank');
}
