// ---------- 完整数据模型 ----------
let appData = {
    culture: { title: "跨洲灵感 共生之茶", desc: "太一将安徽黄山的云雾茶山与肯尼亚裂谷的炽热阳光融汇，创造出「朱槿红茶」「草原蜜韵」等跨界风味。致敬祖先智慧，拥抱非洲节奏，每一杯都是文化对话。", img: "https://images.pexels.com/photos/4109746/pexels-photo-4109746.jpeg?auto=compress&cs=tinysrgb&w=800", moreContent: "太一茶业的文化使命：打破地域边界，用茶叶搭建中非友谊之桥。我们在肯尼亚开设茶文化工作坊，邀请非洲艺术家设计茶器，并每年举办‘中非茶席节’。肯尼亚的激情节奏与中式茶道完美相融，创造出全新的‘鼓韵茶礼’。未来我们将深入西非，让茶香遍及撒哈拉以南。" },
    craft: { title: "古法窨制 · 大地风味", desc: "延续中国传统花茶窨制工艺，加入非洲香料植物如醉椒叶、猴面包树果粉，创造出极具层次感的「草原晨露」系列。非遗传承人驻场，每一片茶叶都经过三十六道细致工序。", img: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800", moreContent: "每一片太一茶叶都遵循‘三窨三晒’古法，同时引入非洲特有植物进行低温发酵。我们的匠人团队曾深入埃塞俄比亚学习当地咖啡处理法，反哺茶叶烘焙技术。现在「草原晨露」系列已成为东非高端酒店专供茶饮，用匠心打破文化界限。" },
    heroSlides: [
        "https://images.pexels.com/photos/769967/pexels-photo-769967.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/4109746/pexels-photo-4109746.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ],
    products: [
        { id: "p1", name: "朱槿红茶 · Hibiscus Black Tea", price: "$24.99", desc: "安徽祁红基底，融合非洲洛神花，果香浓郁，冷热皆宜。", img: "https://images.pexels.com/photos/1622378/pexels-photo-1622378.jpeg?auto=compress&cs=tinysrgb&w=600", more: "采摘自黄山千米海拔茶园，搭配肯尼亚天然洛神花干，富含花青素。冰镇后加入少许蜂蜜，是非洲草原上的消暑圣品。荣获2024非洲茶博会创意风味奖。" },
        { id: "p2", name: "萨赫勒白茶", price: "$32.50", desc: "太一特制白茶，搭配撒哈拉薄荷，清爽回甘。", img: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600", more: "以福鼎白茶为底，加入撒哈拉沙漠绿洲野生薄荷，带有独特的凉意。每袋均附送手工编织的非洲棉茶滤，适合热泡或冷萃。深受北非游牧民族喜爱。" },
        { id: "p3", name: "猴魁·草原晨露", price: "$45.00", desc: "太平猴魁工艺，加入非洲蜜树茶元素，喉韵绵长。", img: "https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=600", more: "太平猴魁非遗大师监制，融入南非蜜树茶（Honeybush）天然甜味，无需加糖即有蜜香。包装采用非洲蜡染布料，限量发售。是高端礼品市场爆款。" }
    ],
    cases: [
        { id: "c1", title: "内罗毕茶空间联名", desc: "与肯尼亚本土艺术馆合作，推出「东非茶席」体验季，每月吸引上千茶友参与。", img: "https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=600", more: "在肯尼亚国家博物馆举办为期三个月的茶席艺术展，邀请中非艺术家驻留创作。同时建立太一茶学院内罗毕分校，已培训200余名本土茶艺师。" },
        { id: "c2", title: "拉各斯茶文化节", desc: "太一助力非洲首届国际茶文化节，将中国茶道表演带入尼日利亚市场。", img: "https://images.pexels.com/photos/6941868/pexels-photo-6941868.jpeg?auto=compress&cs=tinysrgb&w=600", more: "与尼日利亚文旅部合办，参与人数超过5万人，茶文化节期间太一茶品成为最受欢迎的展位。成功签约西非地区总代理。" },
        { id: "c3", title: "沙漠绿洲茶计划", desc: "与撒哈拉绿洲社区合作，以茶为媒推动妇女就业与文化交流。", img: "https://images.pexels.com/photos/6129047/pexels-photo-6129047.jpeg?auto=compress&cs=tinysrgb&w=600", more: "在毛里塔尼亚绿洲建立妇女茶叶包装合作社，使用当地可再生材料。通过公平贸易方式，每售出一盒茶，捐赠部分收益给当地水源保护项目。" }
    ],
    messages: []
};
// ------------- 多语言翻译字典 -------------
const translations = {
    zh: {
        logo: '太一茶业 · Taiyi Tea', nav_home:'首页', nav_culture:'文化共融', nav_craft:'匠心工艺', nav_products:'茶品', nav_cases:'非洲足迹', nav_forum:'茶话论坛',
        hero_title:'茶脉连非亚 · 一盏天地宽', hero_desc:'安徽太一茶业，将中国千年茶道与非洲大地的生命力交织，缔造具有部落灵魂的东方茶饮。', hero_btn:'探索太一典藏',
        title_culture_section:'鼓语茶香 · 文明和鸣', culture_title:'跨洲灵感 共生之茶', culture_desc:'太一将安徽黄山的云雾茶山与肯尼亚裂谷的炽热阳光融汇，创造出跨界风味。', culture_more_btn:'📖 进入文化主页 · 了解更多',
        title_craft_section:'匠心 · 中非茶造物', craft_title:'古法窨制 · 大地风味', craft_desc:'延续中国传统花茶窨制工艺，加入非洲香料植物，创造层次感风味。', craft_more_btn:'🔍 进入工艺主页 · 探索匠心',
        title_products_section:'太一典藏 · 风味共融', title_cases_section:'大地足迹 · 合作伙伴',
        forum_title:'茶话论坛 · 共话中非茶缘', module_culture:'文化共融', module_craft:'匠心工艺', module_products:'茶品', module_cases:'非洲足迹', module_forum:'茶话论坛', product_detail_btn:'📖 查看详情', case_detail_btn:'🌍 查看合作详情', close_btn:'关闭', msg_name_placeholder:'您的名字 / 或来自非洲的朋友', msg_content_placeholder:'分享品茶感受、文化见解或建议...', post_msg_btn:'发表茶话',
        contact_phone:'客服热线: +86 0559-6688 太一茶业', contact_email:'官方邮箱: hello@taiyitea.com', contact_addr:'中国·安徽安庆',
        footer_copyright:'© 2026 安徽太一茶业 | 茶和天下 · 中非共融', footer_tagline:'从东方茶园到非洲热土，致敬每一片风土',
        lang_name:'中文'
    },
    en: {
        logo: 'Taiyi Tea · 太一茶业', nav_home:'Home', nav_culture:'Culture', nav_craft:'Craft', nav_products:'Products', nav_cases:'Cases', nav_forum:'Forum',
        hero_title:'Tea Ties Across Asia-Africa', hero_desc:'Taiyi Tea weaves millennia-old Chinese tea traditions with the vitality of African lands, creating teas with tribal spirit.', hero_btn:'Explore Collections',
        title_culture_section:'Drums & Aroma · Cultural Dialogue', culture_title:'Cross-continental Inspiration · Tea of Coexistence', culture_desc:'Taiyi blends Huangshan mist teas with Kenya’s Rift Valley sunshine to create unique cross-border flavors.', culture_more_btn:'📖 Culture Home · Learn More',
        title_craft_section:'Craft · Sino-African Tea Making', craft_title:'Traditional Processing · Earthy Flavors', craft_desc:'We continue traditional flower tea processes and introduce African spices for layered tastes.', craft_more_btn:'🔍 Craft Home · Discover Craft',
        title_products_section:'Taiyi Collections · Blended Flavors', title_cases_section:'Footprints · Partners',
        forum_title:'Tea Forum · Sharing Asia-Africa Tea', module_culture:'Culture', module_craft:'Craft', module_products:'Products', module_cases:'Cases', module_forum:'Forum', product_detail_btn:'📖 View Details', case_detail_btn:'🌍 View Case Details', close_btn:'Close', msg_name_placeholder:'Your name / e.g., a friend from Africa', msg_content_placeholder:'Share tasting notes, cultural insights, or suggestions...', post_msg_btn:'Post Message',
        contact_phone:'Customer: +86 0559-6688 Taiyi Tea', contact_email:'Email: hello@taiyitea.com', contact_addr:'China · Huangshan / Africa · Nairobi office',
        footer_copyright:'© 2025 Taiyi Tea | Tea & the World · Asia–Africa', footer_tagline:'From eastern gardens to African lands — honoring every terroir',
        lang_name:'English'
    },
    fr: {
        logo:'Taiyi Tea · 太一茶业', nav_home:'Accueil', nav_culture:'Culture', nav_craft:'Artisanat', nav_products:'Produits', nav_cases:'Projets', nav_forum:'Forum',
        hero_title:'Thé liant Asie et Afrique', hero_desc:'Taiyi Tea mêle la tradition millénaire du thé chinois à la vitalité des terres africaines.', hero_btn:'Découvrir la collection',
        title_culture_section:'Battements & Arômes · Dialogue culturel', culture_title:'Inspiration transcontinentale · Thé de coexistence', culture_desc:'Taiyi assemble les thés de Huangshan aux soleils de la vallée du Rift pour créer des saveurs uniques.', culture_more_btn:'📖 Page Culture · En savoir plus',
        title_craft_section:'Savoir-faire · Thé Sino-Africain', craft_title:'Processus traditionnel · Saveurs terrestres', craft_desc:'Nous perpétuons les techniques de macération traditionnelles et introduisons des épices africaines.', craft_more_btn:'🔍 Page Artisanat · Explorer',
        title_products_section:'Collections Taiyi · Saveurs mêlées', title_cases_section:'Empreintes · Partenaires',
        forum_title:'Forum Thé · Partager Asie-Afrique', module_culture:'Culture', module_craft:'Artisanat', module_products:'Produits', module_cases:'Projets', module_forum:'Forum', product_detail_btn:'📖 Voir les détails', case_detail_btn:'🌍 Voir le cas', close_btn:'Fermer', msg_name_placeholder:'Votre nom / ex. un ami d’Afrique', msg_content_placeholder:'Partagez vos notes de dégustation, idées culturelles ou suggestions...', post_msg_btn:'Publier',
        contact_phone:'Service: +86 0559-6688 Taiyi Tea', contact_email:'Email: hello@taiyitea.com', contact_addr:'Chine · Huangshan / Afrique · Bureau de Nairobi',
        footer_copyright:'© 2025 Taiyi Tea | Thé et Monde · Asie–Afrique', footer_tagline:'Des jardins de l’Est aux terres africaines, hommage à chaque terroir',
        lang_name:'Français'
    },
    ar: {
        logo:'تاييي للشاي · 太一茶业', nav_home:'الرئيسية', nav_culture:'الثقافة', nav_craft:'الحِرف', nav_products:'المنتجات', nav_cases:'المشاريع', nav_forum:'المنتدى',
        hero_title:'شاي يربط آسيا وإفريقيا', hero_desc:'تايي للشاي تجمع تقاليد الشاي الصينية مع حيوية الأراضي الأفريقية، لتخلق نكهات بروح قبلية.', hero_btn:'استكشاف المجموعات',
        title_culture_section:'طبول وعبق · حوار ثقافي', culture_title:'إلهام عابر للقارات · شاي التعايش', culture_desc:'نمزج شاي هوانغشان مع شمس وادي الصدع الكينية لابتكار نكهات فريدة.', culture_more_btn:'📖 الصفحة الثقافية · المزيد',
        title_craft_section:'حرفية · صناعة الشاي بين الصين وأفريقيا', craft_title:'معالجة تقليدية · نكهات أرضية', craft_desc:'نستمر في تقنيات التخمير التقليدية وندخل التوابل الإفريقية لمزيد من الطبقات.', craft_more_btn:'🔍 الصفحة الحرفية · اكتشف',
        title_products_section:'مجموعات تاييي · نكهات ممزوجة', title_cases_section:'آثار · شركاء',
        forum_title:'منتدى الشاي · مشاركة آسيا–أفريقيا', module_culture:'الثقافة', module_craft:'الحِرف', module_products:'المنتجات', module_cases:'المشاريع', module_forum:'المنتدى', product_detail_btn:'📖 عرض التفاصيل', case_detail_btn:'🌍 عرض الحالة', close_btn:'إغلاق', msg_name_placeholder:'اسمك / مثال: صديق من إفريقيا', msg_content_placeholder:'شارك ملاحظات التذوق، رؤى ثقافية أو اقتراحات...', post_msg_btn:'نشر الرسالة',
        contact_phone:'خدمة العملاء: +86 0559-6688 تاييي', contact_email:'البريد الإلكتروني: hello@taiyitea.com', contact_addr:'الصين · هوانغشان / أفريقيا · مكتب نيروبي',
        footer_copyright:'© 2025 تاييي للشاي | الشاي والعالم · آسيا–أفريقيا', footer_tagline:'من حدائق الشرق إلى أراضي أفريقيا — تحية لكل تربة',
        lang_name:'العربية'
    }
};
let currentLang = 'zh';
let isAdmin = false;
let apiOnline = false;
let likedMessages = JSON.parse(localStorage.getItem("TaiyiLikedMsgs") || "{}");

function getAdminKey() {
    return sessionStorage.getItem("TaiyiAdminKey") || "";
}
async function apiRequest(path, options = {}) {
    const headers = { ...(options.headers || {}) };
    if(options.body && !headers['Content-Type']) headers['Content-Type'] = 'application/json';
    const adminKey = getAdminKey();
    if(adminKey && !headers['X-Admin-Key']) headers['X-Admin-Key'] = adminKey;
    const response = await fetch(path, { ...options, headers });
    if(!response.ok) throw new Error(`API ${response.status}`);
    return response.json();
}
function applyRemoteData(data) {
    if(!data) return;
    appData.culture = { ...appData.culture, ...(data.culture || {}) };
    appData.craft = { ...appData.craft, ...(data.craft || {}) };
    if(Array.isArray(data.products)) appData.products = data.products;
    if(Array.isArray(data.cases)) appData.cases = data.cases;
    if(Array.isArray(data.heroSlides) && data.heroSlides.length > 0) appData.heroSlides = data.heroSlides;
    if(Array.isArray(data.messages)) appData.messages = data.messages.map(m => ({ ...m, likes: m.likes || 0 }));
}
async function refreshFromApi() {
    if(!apiOnline) return false;
    try {
        const data = await apiRequest('/api/site-data');
        applyRemoteData(data);
        cacheLocalData();
        renderAll();
        applyTranslations(currentLang);
        return true;
    } catch(e) {
        apiOnline = false;
        return false;
    }
}
function siteDataPayload() {
    return {
        culture: appData.culture,
        craft: appData.craft,
        products: appData.products,
        cases: appData.cases,
        heroSlides: appData.heroSlides,
        messages: appData.messages
    };
}

// 为现有数据添加 item-level 翻译（保留原有字段以保证编辑器兼容）
;(function addItemTranslations(){
    // culture 和 craft 的翻译已在 translations 常量内用于 UI，若需要更详细内容则放在 item.translations
    appData.culture.translations = appData.culture.translations || {
        en: { title: translations.en.culture_title, desc: translations.en.culture_desc, moreContent: translations.en.title_culture_section },
        fr: { title: translations.fr.culture_title, desc: translations.fr.culture_desc, moreContent: translations.fr.title_culture_section },
        ar: { title: translations.ar.culture_title, desc: translations.ar.culture_desc, moreContent: translations.ar.title_culture_section }
    };
    appData.craft.translations = appData.craft.translations || {
        en: { title: translations.en.craft_title, desc: translations.en.craft_desc, moreContent: translations.en.title_craft_section },
        fr: { title: translations.fr.craft_title, desc: translations.fr.craft_desc, moreContent: translations.fr.title_craft_section },
        ar: { title: translations.ar.craft_title, desc: translations.ar.craft_desc, moreContent: translations.ar.title_craft_section }
    };
    // 为 products 添加翻译模板（只为演示提供主要字段）
    appData.products = appData.products.map(p => {
        if(!p.translations) {
            if(p.id === 'p1') p.translations = { en: { name: 'Hibiscus Black Tea', desc: 'A Qihong base from Anhui blended with African hibiscus for vibrant fruity notes.', more: 'Picked from high-altitude Huangshan gardens and blended with Kenyan hibiscus. Refreshing iced with a touch of honey.' }, fr:{ name: 'Thé Noir à l’Hibiscus', desc: 'Base Qihong d’Anhui mélangée à l’hibiscus africain, arômes fruités intenses.', more: 'Cueilli dans les jardins de Huangshan et mélangé à l’hibiscus kényan.' }, ar:{ name: 'شاي الكركديه الأسود', desc: 'قاعدة Qihong من آنهوي ممزوجة بالكركديه الأفريقي بنكهات فاكهية.', more: 'مختار من حدائق هوانغشان المرتفعة وممزوج بكركديه كيني.' } };
            if(p.id === 'p2') p.translations = { en:{ name:'Sahel White Tea', desc:'Taiyi white tea blended with Saharan mint for a crisp cooling finish.', more:'Based on Fuding white tea with wild Saharan mint; includes handwoven African cotton filters.' }, fr:{ name:'Thé Blanc du Sahel', desc:'Thé blanc Taiyi marié à la menthe saharienne pour une fraîcheur unique.', more:'À base de thé blanc de Fuding avec menthe sauvage du Sahel.' }, ar:{ name:'شاي أبيض الساحل', desc:'شاي أبيض ممزوج بنعناع صحارى الساحل لنهاية منعشة.', more:'مبني على شاي فو دينغ الأبيض مع نعناع صحراوي بري.' } };
            if(p.id === 'p3') p.translations = { en:{ name:'Hou Kui · Prairie Dew', desc:'Traditional Hou Kui craftsmanship blended with African Honeybush for a lingering finish.', more:'Produced under master supervision, naturally sweet from Honeybush; packaged with African wax-print fabric.' }, fr:{ name:'Hou Kui · Rosée des Prairies', desc:'Hou Kui traditionnel enrichi par le Honeybush sud-africain.', more:'Produit sous la supervision d’un maître, avec un emballage en tissu wax africain.' }, ar:{ name:'هو كوي · ندى البراري', desc:'حرفة هو كوي التقليدية ممزوجة بعنصر هانيبوش الأفريقي لنهاية طويلة.', more:'منتج بإشراف خبراء مع تغليف بقماش أفريقي مطبوع.' } };
        }
        return p;
    });
    // 为 cases 添加翻译模板
    appData.cases = appData.cases.map(c => {
        if(!c.translations) {
            if(c.id === 'c1') c.translations = { en:{ title:'Nairobi Tea Space Collaboration', desc:'Partnered with a Kenyan art house to launch an East Africa tea-seat experience.', more:'Held a three-month tea art exhibition at the National Museum of Kenya and established Taiyi Tea Academy Nairobi.' }, fr:{ title:'Collab Espace Thé Nairobi', desc:'Partenariat avec une maison d’art kényane pour une saison d’expériences de thé.', more:'Exposition de trois mois au Musée national du Kenya.' }, ar:{ title:'تعاون مساحة الشاي في نيروبي', desc:'شراكة مع دار فنون كينية لإطلاق تجربة شاي شرق أفريقيا.', more:'معرض شاي لمدة ثلاثة أشهر في المتحف الوطني الكيني وتأسيس أكاديمية تايي.' } };
            if(c.id === 'c2') c.translations = { en:{ title:'Lagos Tea Culture Festival', desc:'Taiyi supported Africa’s first international tea culture festival bringing Chinese tea ceremony to Nigeria.', more:'Co-organized with Nigeria’s cultural ministry; over 50k participants.' }, fr:{ title:'Festival du Thé de Lagos', desc:'Taiyi a soutenu le premier festival africain international du thé.', more:'Co-organisé avec le ministère de la culture nigérian.' }, ar:{ title:'مهرجان ثقافة الشاي في لاجوس', desc:'دعمت تايي أول مهرجان دولي للشاي في أفريقيا.', more:'منظم بالشراكة مع وزارة الثقافة النيجيرية.' } };
            if(c.id === 'c3') c.translations = { en:{ title:'Desert Oasis Tea Program', desc:'Collaborating with Saharan oasis communities to promote women’s employment and cultural exchange through tea.', more:'Established women-led tea packaging cooperatives using local renewable materials; part of proceeds support water projects.' }, fr:{ title:'Programme Thé Oasis du Désert', desc:'Collaboration avec des communautés d’oasis sahariennes pour l’emploi des femmes.', more:'Coopératives d’emballage dirigées par des femmes et soutien aux projets d’eau locale.' }, ar:{ title:'برنامج شاي واحة الصحراء', desc:'التعاون مع مجتمعات الواحات لتعزيز عمل المرأة وتبادل ثقافي عبر الشاي.', more:'إنشاء تعاونيات تعبئة شاي تقودها النساء ودعم مشاريع المياه.' } };
        }
        return c;
    });
})();

function cacheLocalData() {
    localStorage.setItem("TaiyiTea_FullData", JSON.stringify({ culture: appData.culture, craft: appData.craft, products: appData.products, cases: appData.cases, heroSlides: appData.heroSlides }));
    localStorage.setItem("TaiyiTea_Messages", JSON.stringify(appData.messages));
    localStorage.setItem("TaiyiLikedMsgs", JSON.stringify(likedMessages));
}
async function syncAllData() {
    cacheLocalData();
    if(!apiOnline) return false;
    try {
        const data = await apiRequest('/api/site-data', {
            method: 'PUT',
            body: JSON.stringify(siteDataPayload())
        });
        applyRemoteData(data);
        cacheLocalData();
        return true;
    } catch(e) {
        alert('服务器保存失败，已暂存到本机。请确认管理员模式或后端服务是否正常。');
        return false;
    }
}

// ---------- 语言切换和应用翻译 ----------
function applyTranslations(lang) {
    const dict = translations[lang] || translations['zh'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const txt = dict[key] || translations['zh'][key] || '';
        el.textContent = txt;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = dict[key] || translations['zh'][key] || '';
    });
}
function getTrans(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations['zh'][key] || '';
}
function getLocalizedField(item, field) {
    if(!item) return '';
    if(item.translations && item.translations[currentLang] && item.translations[currentLang][field]) return item.translations[currentLang][field];
    if(item[field] !== undefined) return item[field];
    return '';
}
const editLanguages = ['zh','en','fr','ar'];
function getLangLabel(lang) {
    return { zh:'中文', en:'English', fr:'Français', ar:'العربية' }[lang] || lang;
}
function getTranslationValue(item, lang, field) {
    if(!item) return '';
    if(item.translations && item.translations[lang] && item.translations[lang][field] !== undefined) return item.translations[lang][field];
    if(lang === 'zh' && item[field] !== undefined) return item[field];
    return '';
}
function setTranslationValue(item, lang, field, value) {
    if(!item.translations) item.translations = {};
    if(!item.translations[lang]) item.translations[lang] = {};
    item.translations[lang][field] = value;
    if(lang === 'zh') item[field] = value;
}
function setLangAttributes(lang) {
    if(!lang) lang = 'zh';
    currentLang = lang;
    const html = document.documentElement;
    if(lang === 'ar') { document.body.classList.add('rtl'); html.lang = 'ar'; html.dir = 'rtl'; }
    else { document.body.classList.remove('rtl'); html.dir = 'ltr'; html.lang = (lang==='zh'?'zh-CN': (lang==='en'?'en': (lang==='fr'?'fr':'en'))); }
    const sel = document.getElementById('langSelect'); if(sel) sel.value = lang;
}
function detectDefaultLang() {
    const saved = localStorage.getItem('taiyi_lang'); if(saved) return saved;
    const nav = navigator.language || navigator.userLanguage || 'zh';
    if(nav.startsWith('fr')) return 'fr';
    if(nav.startsWith('ar')) return 'ar';
    if(nav.startsWith('en')) return 'en';
    if(nav.startsWith('zh')) return 'zh';
    return 'zh';
}

// ---------- 主页主图轮播 ----------
const defaultHeroSlides = [
    "https://images.pexels.com/photos/769967/pexels-photo-769967.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/4109746/pexels-photo-4109746.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1600"
];
const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let _heroIndex = 0;
let _heroTimer = null;
function preloadImages(urls = []) {
    urls.filter(Boolean).forEach(url => {
        const img = new Image();
        img.decoding = 'async';
        img.src = url;
    });
}
function heroSlidesList() {
    const slides = Array.isArray(appData.heroSlides) ? appData.heroSlides.filter(s => typeof s === 'string' && s.trim()) : [];
    return slides.length ? slides : defaultHeroSlides;
}
function setHeroImage(url, layerIndex) {
    const a = document.getElementById('heroBgA');
    const b = document.getElementById('heroBgB');
    const target = layerIndex === 0 ? a : b;
    const other = layerIndex === 0 ? b : a;
    if(!target || !other) return;
    target.style.backgroundImage = `url('${url}')`;
    target.classList.add('active');
    other.classList.remove('active');
}
function updateHeroDots() {
    const dots = document.getElementById('heroDots');
    if(!dots) return;
    const slides = heroSlidesList();
    dots.innerHTML = '';
    slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `切换到第 ${idx + 1} 张主图`);
        dot.className = `hero-dot${idx === _heroIndex ? ' active' : ''}`;
        dot.setAttribute('aria-current', idx === _heroIndex ? 'true' : 'false');
        dot.onclick = () => setHeroSlide(idx);
        dots.appendChild(dot);
    });
}
function setHeroSlide(index) {
    const slides = heroSlidesList();
    if(slides.length === 0) return;
    if(index < 0) index = slides.length - 1;
    if(index >= slides.length) index = 0;
    const layer = (index % 2 === 0) ? 0 : 1;
    setHeroImage(slides[index], layer);
    _heroIndex = index;
    updateHeroDots();
}
function startHeroRotation(interval = 6000) {
    const slides = heroSlidesList();
    if(slides.length === 0) return;
    preloadImages(slides);
    setHeroSlide(0);
    if(prefersReducedMotion || slides.length < 2) return;
    if(_heroTimer) clearInterval(_heroTimer);
    _heroTimer = setInterval(() => { setHeroSlide(_heroIndex + 1); }, interval);
}
function pauseHeroRotation() {
    if(_heroTimer) clearInterval(_heroTimer);
}
function resumeHeroRotation(interval = 6000) {
    if(prefersReducedMotion || heroSlidesList().length < 2) return;
    pauseHeroRotation();
    _heroTimer = setInterval(() => { setHeroSlide(_heroIndex + 1); }, interval);
}

let _craftIndex = 0;
let _productIndex = 0;
let _caseIndex = 0;
let _craftTimer = null;
let _productTimer = null;
let _caseTimer = null;

function craftSlidesList() {
    return [appData.craft];
}
function updateCraftDots() {
    const dots = document.getElementById('craftDots');
    if(!dots) return;
    const slides = craftSlidesList();
    dots.innerHTML = '';
    slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `切换到第 ${idx + 1} 个工艺内容`);
        dot.className = `carousel-dot${idx === _craftIndex ? ' active' : ''}`;
        dot.setAttribute('aria-current', idx === _craftIndex ? 'true' : 'false');
        dot.onclick = () => setCraftSlide(idx);
        dots.appendChild(dot);
    });
}
function setCraftSlide(index) {
    const slides = craftSlidesList();
    if(slides.length === 0) return;
    if(index < 0) index = slides.length - 1;
    if(index >= slides.length) index = 0;
    const data = slides[index];
    const carousel = document.getElementById('craftCarousel');
    if(!carousel) return;
    carousel.innerHTML = `
        <div class="craft-card">
            <div class="craft-img" style="background-image:url('${data.img}');"></div>
            <div class="craft-info">
                <h3>${escapeHtml(getLocalizedField(data,'title'))}</h3>
                <p>${escapeHtml(getLocalizedField(data,'desc'))}</p>
                <button class="detail-btn craft-detail" data-id="craft">${escapeHtml(getTrans('craft_more_btn'))}</button>
                ${isAdmin ? `<div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;"><button class="icon-btn edit-craft" data-id="craft"><i class="fas fa-edit"></i> 编辑</button></div>` : ''}
            </div>
        </div>
    `;
    _craftIndex = index;
    updateCraftDots();
    attachCraftDetail();
}
function startCraftRotation(interval = 7000) {
    const slides = craftSlidesList();
    preloadImages(slides.map(item => item.img));
    setCraftSlide(_craftIndex);
    if(prefersReducedMotion || slides.length < 2) return;
    if(_craftTimer) clearInterval(_craftTimer);
    _craftTimer = setInterval(() => { setCraftSlide(_craftIndex + 1); }, interval);
}
function pauseCraftRotation() {
    if(_craftTimer) clearInterval(_craftTimer);
}
function resumeCraftRotation(interval = 7000) {
    if(prefersReducedMotion || craftSlidesList().length < 2) return;
    pauseCraftRotation();
    _craftTimer = setInterval(() => { setCraftSlide(_craftIndex + 1); }, interval);
}

function setProductSlide(index) {
    const slides = appData.products || [];
    if(slides.length === 0) return;
    if(index < 0) index = slides.length - 1;
    if(index >= slides.length) index = 0;
    const prod = slides[index];
    const carousel = document.getElementById('productCarousel');
    if(!carousel) return;
    carousel.innerHTML = `
        <div class="product-card">
            <div class="product-img" style="background-image:url('${prod.img}');"></div>
            <div class="product-info">
                <h3>${escapeHtml(getLocalizedField(prod,'name'))}</h3>
                <div class="product-price">${escapeHtml(prod.price)}</div>
                <div class="product-desc">${escapeHtml(getLocalizedField(prod,'desc'))}</div>
                <button class="detail-btn prod-detail" data-id="${prod.id}">${escapeHtml(getTrans('product_detail_btn'))}</button>
                ${isAdmin ? `<div class="admin-controls" style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;"><button class="icon-btn edit-prod" data-id="${prod.id}"><i class="fas fa-edit"></i> 编辑</button><button class="delete-btn del-prod" data-id="${prod.id}"><i class="fas fa-trash-alt"></i> 删除</button></div>` : ''}
            </div>
        </div>
    `;
    _productIndex = index;
    updateProductDots();
    attachProductActions();
}
function updateProductDots() {
    const dots = document.getElementById('productDots');
    if(!dots) return;
    const slides = appData.products || [];
    dots.innerHTML = '';
    slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `切换到第 ${idx + 1} 个茶品`);
        dot.className = `carousel-dot${idx === _productIndex ? ' active' : ''}`;
        dot.setAttribute('aria-current', idx === _productIndex ? 'true' : 'false');
        dot.onclick = () => setProductSlide(idx);
        dots.appendChild(dot);
    });
}
function attachProductActions() {
    document.querySelectorAll('.prod-detail').forEach(btn => btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const prod = appData.products.find(p => p.id === id);
        if(prod) showDetailModal('product', prod);
    }));
    document.querySelectorAll('.edit-prod').forEach(btn => btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const prod = appData.products.find(p => p.id === id);
        openProductEditor(prod);
    }));
    document.querySelectorAll('.del-prod').forEach(btn => btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if(confirm('删除产品？')) { appData.products = appData.products.filter(p => p.id !== id); syncAllData(); renderProducts(); }
    }));
}
function attachCraftDetail() {
    document.querySelectorAll('.craft-detail').forEach(btn => btn.addEventListener('click', () => {
        showDetailModal('craft', appData.craft);
    }));
    document.querySelectorAll('.edit-craft').forEach(btn => btn.addEventListener('click', () => {
        openEditModal('craft');
    }));
}
function startProductRotation(interval = 7000) {
    if(appData.products.length === 0) return;
    preloadImages(appData.products.map(item => item.img));
    setProductSlide(_productIndex);
    if(prefersReducedMotion || appData.products.length < 2) return;
    if(_productTimer) clearInterval(_productTimer);
    _productTimer = setInterval(() => { setProductSlide(_productIndex + 1); }, interval);
}
function pauseProductRotation() {
    if(_productTimer) clearInterval(_productTimer);
}
function resumeProductRotation(interval = 7000) {
    if(prefersReducedMotion || appData.products.length < 2) return;
    pauseProductRotation();
    _productTimer = setInterval(() => { setProductSlide(_productIndex + 1); }, interval);
}

function setCaseSlide(index) {
    const slides = appData.cases || [];
    if(slides.length === 0) return;
    if(index < 0) index = slides.length - 1;
    if(index >= slides.length) index = 0;
    const cas = slides[index];
    const carousel = document.getElementById('caseCarousel');
    if(!carousel) return;
    carousel.innerHTML = `
        <div class="case-card">
            <div class="case-img" style="background-image:url('${cas.img}');"></div>
            <div class="case-info">
                <h3>${escapeHtml(getLocalizedField(cas,'title'))}</h3>
                <p>${escapeHtml(getLocalizedField(cas,'desc'))}</p>
                <button class="detail-btn case-detail" data-id="${cas.id}">${escapeHtml(getTrans('case_detail_btn'))}</button>
                ${isAdmin ? `<div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;"><button class="icon-btn edit-case" data-id="${cas.id}"><i class="fas fa-edit"></i> 编辑</button><button class="delete-btn del-case" data-id="${cas.id}"><i class="fas fa-trash-alt"></i> 删除</button></div>` : ''}
            </div>
        </div>
    `;
    _caseIndex = index;
    updateCaseDots();
    attachCaseActions();
}
function updateCaseDots() {
    const dots = document.getElementById('caseDots');
    if(!dots) return;
    const slides = appData.cases || [];
    dots.innerHTML = '';
    slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `切换到第 ${idx + 1} 个合作案例`);
        dot.className = `carousel-dot${idx === _caseIndex ? ' active' : ''}`;
        dot.setAttribute('aria-current', idx === _caseIndex ? 'true' : 'false');
        dot.onclick = () => setCaseSlide(idx);
        dots.appendChild(dot);
    });
}
function attachCaseActions() {
    document.querySelectorAll('.case-detail').forEach(btn => btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const cas = appData.cases.find(c => c.id === id);
        if(cas) showDetailModal('case', cas);
    }));
    document.querySelectorAll('.edit-case').forEach(btn => btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const cas = appData.cases.find(c => c.id === id);
        openCaseEditor(cas);
    }));
    document.querySelectorAll('.del-case').forEach(btn => btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if(confirm('删除案例？')) { appData.cases = appData.cases.filter(c => c.id !== id); syncAllData(); renderCases(); }
    }));
}
function startCaseRotation(interval = 7000) {
    if(appData.cases.length === 0) return;
    preloadImages(appData.cases.map(item => item.img));
    setCaseSlide(_caseIndex);
    if(prefersReducedMotion || appData.cases.length < 2) return;
    if(_caseTimer) clearInterval(_caseTimer);
    _caseTimer = setInterval(() => { setCaseSlide(_caseIndex + 1); }, interval);
}
function pauseCaseRotation() {
    if(_caseTimer) clearInterval(_caseTimer);
}
function resumeCaseRotation(interval = 7000) {
    if(prefersReducedMotion || appData.cases.length < 2) return;
    pauseCaseRotation();
    _caseTimer = setInterval(() => { setCaseSlide(_caseIndex + 1); }, interval);
}

async function loadAllData() {
    try {
        const remote = await apiRequest('/api/site-data');
        apiOnline = true;
        applyRemoteData(remote);
        cacheLocalData();
        return;
    } catch(e) {
        apiOnline = false;
    }
    const saved = localStorage.getItem("TaiyiTea_FullData");
    if(saved) {
        try {
            const parsed = JSON.parse(saved);
            appData.culture = { ...appData.culture, ...parsed.culture };
            appData.craft = { ...appData.craft, ...parsed.craft };
            if (Array.isArray(parsed.products) && parsed.products.length > 0) appData.products = parsed.products;
            if (Array.isArray(parsed.cases) && parsed.cases.length > 0) appData.cases = parsed.cases;
            const savedHeroSlides = Array.isArray(parsed.heroSlides) ? parsed.heroSlides.filter(s => typeof s === 'string' && s.trim()) : [];
            if (savedHeroSlides.length > 0) appData.heroSlides = savedHeroSlides;
        } catch(e) {}
    }
    const savedMsgs = localStorage.getItem("TaiyiTea_Messages");
    if(savedMsgs) appData.messages = JSON.parse(savedMsgs);
    else {
        appData.messages = [
            { id: "msg1", name: "内罗毕茶友", content: "第一次品尝朱槿红茶，酸甜口感让我想起家乡的芙蓉花饮！", date: new Date().toLocaleString(), likes: 5 },
            { id: "msg2", name: "Lagos Tea Lover", content: "太一的茶包装融合了非洲编织图案，太有心意了。希望多出联名款。", date: new Date().toLocaleString(), likes: 3 }
        ];
    }
    if(!appData.messages.some(m => m.likes !== undefined)) {
        appData.messages = appData.messages.map(m => ({ ...m, likes: m.likes || 0 }));
    }
    cacheLocalData();
}

// 渲染所有模块
function renderAll() {
    renderCulture(); renderCraft(); renderProducts(); renderCases(); renderMessages(); renderHeroEditorBtn(); renderAdminBtnsStatus();
    updateHeroDots();
    attachDetailButtons();
}
function renderHeroEditorBtn() {
    const btn = document.getElementById('editHeroBtn');
    if(!btn) return;
    if(isAdmin) {
        btn.style.display = 'inline-flex';
        btn.onclick = openHeroEditor;
    } else {
        btn.style.display = 'none';
        btn.onclick = null;
    }
}
function openHeroEditor() {
    const slides = heroSlidesList();
    const createHeroSlideRow = (value = '') => {
        const row = document.createElement('div');
        row.className = 'hero-edit-row';
        row.innerHTML = `<input class="hero-slide-url" value="${escapeHtml(value)}" placeholder="图片 URL"><input type="file" class="hero-slide-upload" accept="image/*"><button type="button" class="icon-btn hero-slide-remove">删除</button>`;
        row.querySelector('.hero-slide-upload').onchange = (e) => {
            const f = e.target.files[0];
            if(f) {
                const r = new FileReader();
                r.onload = ev => row.querySelector('.hero-slide-url').value = ev.target.result;
                r.readAsDataURL(f);
            }
        };
        row.querySelector('.hero-slide-remove').onclick = () => row.remove();
        return row;
    };
    showModal(`<h3>编辑首页主图</h3><div id="heroEditorList" style="display:grid;gap:12px;max-height:320px;overflow:auto;margin:16px 0;"></div><button id="addHeroSlideBtn" class="btn btn-outline" style="margin-bottom:16px;">+ 添加主图</button><div style="margin-top:20px;display:flex;gap:12px;"><button id="saveHeroSlidesBtn" class="btn">保存</button><button id="closeModalBtn" class="btn-outline">取消</button></div>`);
    const list = document.getElementById('heroEditorList');
    if(slides.length === 0) list.appendChild(createHeroSlideRow(''));
    slides.forEach(url => list.appendChild(createHeroSlideRow(url)));
    document.getElementById('addHeroSlideBtn').onclick = () => list.appendChild(createHeroSlideRow(''));
    document.getElementById('saveHeroSlidesBtn').onclick = () => {
        const urls = Array.from(document.querySelectorAll('.hero-slide-url')).map(input => input.value.trim()).filter(Boolean);
        if(urls.length === 0) return alert('至少需要一张主图');
        appData.heroSlides = urls;
        syncAllData();
        renderAll();
        startHeroRotation();
        closeModal();
    };
    attachCloseModal();
}
function renderCulture() {
    document.getElementById("cultureTitle").innerText = getLocalizedField(appData.culture, 'title');
    document.getElementById("cultureDesc").innerText = getLocalizedField(appData.culture, 'desc');
    document.getElementById("cultureImg").style.backgroundImage = `url('${appData.culture.img}')`;
    const place = document.getElementById("cultureEditBtnPlace");
    place.innerHTML = "";
    if(isAdmin) {
        const btn = document.createElement("button"); btn.innerText = "✎ 编辑文化模块"; btn.className = "icon-btn"; btn.onclick = () => openEditModal("culture");
        place.appendChild(btn);
    }
}
function renderCraft() {
    setCraftSlide(_craftIndex);
    const place = document.getElementById("craftEditBtnPlace");
    place.innerHTML = "";
    if(isAdmin) {
        const btn = document.createElement("button"); btn.innerText = "✎ 编辑匠心工艺"; btn.className = "icon-btn"; btn.onclick = () => openEditModal("craft");
        place.appendChild(btn);
    }
}
function renderProducts() {
    const carousel = document.getElementById("productCarousel");
    if(!carousel) return;
    if(appData.products.length === 0) {
        carousel.innerHTML = `<div class="empty-slide">暂无茶品内容，管理员可添加新茶品。</div>`;
    } else {
        if(_productIndex >= appData.products.length) _productIndex = 0;
        setProductSlide(_productIndex);
    }
    const btnC = document.getElementById("adminProductBtnContainer");
    if(btnC) {
        if(isAdmin) {
            btnC.innerHTML = `<button id="addProductBtn" class="btn" style="background:var(--acacia-green);"><i class="fas fa-plus"></i> 添加新茶品</button>`;
            document.getElementById("addProductBtn")?.addEventListener("click", () => openProductEditor(null));
        } else {
            btnC.innerHTML = "";
        }
    }
}
function renderCases() {
    const carousel = document.getElementById("caseCarousel");
    if(!carousel) return;
    if(appData.cases.length === 0) {
        carousel.innerHTML = `<div class="empty-slide">暂无合作案例，管理员可添加新案例。</div>`;
    } else {
        if(_caseIndex >= appData.cases.length) _caseIndex = 0;
        setCaseSlide(_caseIndex);
    }
    const btnArea = document.getElementById("adminCasesBtnContainer");
    if(btnArea) {
        if(isAdmin) {
            btnArea.innerHTML = `<button id="addCaseBtn" class="btn" style="background:var(--terracotta);"><i class="fas fa-globe-africa"></i> 新增合作案例</button>`;
            document.getElementById("addCaseBtn")?.addEventListener("click", () => openCaseEditor(null));
        } else {
            btnArea.innerHTML = "";
        }
    }
}
function renderMessages() {
    const container = document.getElementById("messageList");
    if(!container) return;
    container.innerHTML = "";
    if(appData.messages.length===0) { container.innerHTML = "<p style='padding:20px;text-align:center;'>✨ 成为第一个分享茶话的朋友 ✨</p>"; return; }
    [...appData.messages].reverse().forEach(msg => {
        const div = document.createElement("div"); div.className = "message-item";
        const liked = likedMessages[msg.id] || false;
        div.innerHTML = `<div class="message-left"><div><span class="message-author">${escapeHtml(msg.name)}</span><span class="message-date">${escapeHtml(msg.date)}</span></div><div class="message-content">${escapeHtml(msg.content)}</div><div class="like-section"><button class="like-btn" data-id="${msg.id}"><i class="fa${liked ? 's' : 'r'} fa-heart"></i> 点赞</button><span class="like-count">❤️ ${msg.likes || 0}</span></div></div>${isAdmin ? `<button class="delete-msg" data-id="${msg.id}" style="background:none; border:none; color:#b67e5c; cursor:pointer;"><i class="fas fa-trash"></i></button>` : ''}`;
        container.appendChild(div);
    });
    document.querySelectorAll(".like-btn").forEach(btn => btn.onclick = async () => {
        const id=btn.getAttribute("data-id");
        if(likedMessages[id]) return alert("您已经点过赞了");
        const msg=appData.messages.find(m=>m.id===id);
        if(!msg) return;
        likedMessages[id]=true;
        if(apiOnline) {
            try {
                const data = await apiRequest(`/api/messages/${encodeURIComponent(id)}/like`, { method: 'PUT' });
                if(Array.isArray(data.messages)) appData.messages = data.messages;
            } catch(e) {
                msg.likes++;
            }
        } else {
            msg.likes++;
        }
        cacheLocalData();
        renderMessages();
    });
    if(isAdmin) document.querySelectorAll(".delete-msg").forEach(btn => btn.onclick = async () => {
        const id=btn.getAttribute("data-id");
        appData.messages=appData.messages.filter(m=>m.id!==id);
        delete likedMessages[id];
        if(apiOnline) {
            try {
                const data = await apiRequest(`/api/messages/${encodeURIComponent(id)}`, { method: 'DELETE' });
                if(Array.isArray(data.messages)) appData.messages = data.messages;
            } catch(e) {
                alert('服务器删除失败，已暂存到本机。');
            }
        }
        cacheLocalData();
        renderMessages();
    });
}
async function postMessage() {
    const name=document.getElementById("msgName").value.trim()||"茶友";
    const content=document.getElementById("msgContent").value.trim();
    if(!content) return alert("请输入留言内容");
    if(apiOnline) {
        try {
            const data = await apiRequest('/api/messages', {
                method: 'POST',
                body: JSON.stringify({ name, content })
            });
            if(Array.isArray(data.messages)) appData.messages = data.messages;
        } catch(e) {
            appData.messages.unshift({id:Date.now().toString(),name,content,date:new Date().toLocaleString(),likes:0});
            alert('服务器提交失败，留言已暂存到本机。');
        }
    } else {
        appData.messages.unshift({id:Date.now().toString(),name,content,date:new Date().toLocaleString(),likes:0});
    }
    cacheLocalData();
    renderMessages();
    document.getElementById("msgContent").value="";
}
function attachDetailButtons() {
    const cultureBtn = document.getElementById("cultureMoreBtn");
    if(cultureBtn) cultureBtn.onclick = () => showDetailModal("culture", appData.culture);
    const craftBtn = document.getElementById("craftMoreBtn");
    if(craftBtn) craftBtn.onclick = () => showDetailModal("craft", appData.craft);
}
function showDetailModal(type, data) {
    let title="", content="", img="";
    if(type==="culture") { title=getLocalizedField(data,'title'); content=getLocalizedField(data,'moreContent') || getLocalizedField(data,'desc') || "更多文化故事即将呈现..."; img=data.img; }
    else if(type==="craft") { title=getLocalizedField(data,'title'); content=getLocalizedField(data,'moreContent') || getLocalizedField(data,'desc') || "更多匠心工艺细节即将发布..."; img=data.img; }
    else if(type==="product") { title=getLocalizedField(data,'name'); content=getLocalizedField(data,'more') || getLocalizedField(data,'desc') || "更多详情即将发布。"; img=data.img; }
    else { title=getLocalizedField(data,'title'); content=getLocalizedField(data,'more') || getLocalizedField(data,'desc') || "该案例详细记录太一在非洲的文化足迹。"; img=data.img; }
    showModal(`<h2 style="font-family: 'Cormorant Garamond';">${escapeHtml(title)}</h2><img src="${img}" style="width:100%; border-radius: 24px; margin: 16px 0; max-height: 300px; object-fit: cover;"><p style="line-height:1.6;">${escapeHtml(content)}</p><div style="margin-top:24px; text-align:right;"><button id="closeModalBtn" class="btn-outline" style="background:#ddd;">${escapeHtml(getTrans('close_btn'))}</button></div>`);
    attachCloseModal();
}
function openEditModal(type) {
    const data = type==='culture' ? appData.culture : appData.craft;
    let activeLang = editLanguages.includes(currentLang) ? currentLang : 'zh';
    const formatValues = (lang) => ({
        title: escapeHtml(getTranslationValue(data, lang, 'title')),
        desc: escapeHtml(getTranslationValue(data, lang, 'desc')),
        more: escapeHtml(getTranslationValue(data, lang, 'moreContent'))
    });
    const values = formatValues(activeLang);
    showModal(`<h3>编辑${type==='culture'?'文化模块':'匠心工艺'}</h3><div class="lang-tabs">${editLanguages.map(l => `<button type="button" class="lang-tab${l===activeLang ? ' active' : ''}" data-lang="${l}">${getLangLabel(l)}</button>`).join('')}</div><label>标题</label><input id="editTitle" value="${values.title}"><label>描述</label><textarea id="editDesc" rows="4">${values.desc}</textarea><label>详细内容</label><textarea id="editMore" rows="4">${values.more}</textarea><label>图片URL (支持网络或本地上传)</label><input id="editImg" value="${escapeHtml(data.img)}"><input type="file" id="imgUploadLocal" accept="image/*"><div style="margin-top:20px; display:flex; gap:12px;"><button id="saveEditBtn" class="btn">保存修改</button><button id="closeModalBtn" class="btn-outline" style="background:#ccc;">取消</button></div>`);
    const setEditLanguage = (lang) => {
        activeLang = lang;
        const v = formatValues(lang);
        document.getElementById('editTitle').value = v.title;
        document.getElementById('editDesc').value = v.desc;
        document.getElementById('editMore').value = v.more;
        document.querySelectorAll('.lang-tab').forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));
    };
    document.querySelectorAll('.lang-tab').forEach(btn => btn.onclick = () => setEditLanguage(btn.getAttribute('data-lang')));
    document.getElementById('imgUploadLocal').onchange = (e) => { const f=e.target.files[0]; if(f){ const r=new FileReader(); r.onload=ev=>document.getElementById('editImg').value=ev.target.result; r.readAsDataURL(f); } };
    document.getElementById('saveEditBtn').onclick = () => {
        const title = document.getElementById('editTitle').value.trim();
        const desc = document.getElementById('editDesc').value.trim();
        const more = document.getElementById('editMore').value.trim();
        if(!title) return alert('请填写标题');
        setTranslationValue(data, activeLang, 'title', title);
        setTranslationValue(data, activeLang, 'desc', desc);
        setTranslationValue(data, activeLang, 'moreContent', more);
        if(activeLang === 'zh') {
            data.title = title;
            data.desc = desc;
            data.moreContent = more;
        }
        data.img = document.getElementById('editImg').value;
        syncAllData(); renderAll(); closeModal();
    };
    attachCloseModal();
}
function openProductEditor(prod) {
    const isNew = !prod;
    const p = prod || { id: Date.now().toString(), name: "", price: "", desc: "", img: "https://images.pexels.com/photos/1622378/pexels-photo-1622378.jpeg", more: "", translations: {} };
    let activeLang = editLanguages.includes(currentLang) ? currentLang : 'zh';
    const formatValues = (lang) => ({
        name: escapeHtml(getTranslationValue(p, lang, 'name')),
        desc: escapeHtml(getTranslationValue(p, lang, 'desc')),
        more: escapeHtml(getTranslationValue(p, lang, 'more'))
    });
    const values = formatValues(activeLang);
    showModal(`<h3>${isNew ? '添加茶品' : '编辑茶品'}</h3><div class="lang-tabs">${editLanguages.map(l => `<button type="button" class="lang-tab${l===activeLang ? ' active' : ''}" data-lang="${l}">${getLangLabel(l)}</button>`).join('')}</div><label>名称</label><input id="pName" value="${values.name}"><label>价格</label><input id="pPrice" value="${escapeHtml(p.price)}"><label>描述</label><textarea id="pDesc">${values.desc}</textarea><label>图片URL</label><input id="pImg" value="${p.img}"><input type="file" id="imgUploadProd" accept="image/*"><label>详细内容(弹窗)</label><textarea id="pMore">${values.more}</textarea><div style="margin-top:20px; display:flex; gap:12px;"><button id="saveProdBtn" class="btn">保存</button><button id="closeModalBtn" class="btn-outline">取消</button></div>`);
    const setEditLanguage = (lang) => {
        activeLang = lang;
        const v = formatValues(lang);
        document.getElementById('pName').value = v.name;
        document.getElementById('pDesc').value = v.desc;
        document.getElementById('pMore').value = v.more;
        document.querySelectorAll('.lang-tab').forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));
    };
    document.querySelectorAll('.lang-tab').forEach(btn => btn.onclick = () => setEditLanguage(btn.getAttribute('data-lang')));
    document.getElementById('imgUploadProd').onchange = (e) => { const f=e.target.files[0]; if(f){ const r=new FileReader(); r.onload=ev=>document.getElementById('pImg').value=ev.target.result; r.readAsDataURL(f); } };
    document.getElementById('saveProdBtn').onclick = () => {
        const newName = document.getElementById('pName').value.trim();
        const newPrice = document.getElementById('pPrice').value.trim();
        const newDesc = document.getElementById('pDesc').value.trim();
        const newImg = document.getElementById('pImg').value.trim();
        const newMore = document.getElementById('pMore').value.trim();
        if(!newName) return alert('请填写名称');
        setTranslationValue(p, activeLang, 'name', newName);
        setTranslationValue(p, activeLang, 'desc', newDesc);
        setTranslationValue(p, activeLang, 'more', newMore);
        if(activeLang === 'zh') {
            p.name = newName;
            p.desc = newDesc;
            p.more = newMore;
        }
        p.price = newPrice || '待定价';
        p.img = newImg || 'https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg';
        if(isNew) appData.products.push(p);
        syncAllData(); renderProducts(); closeModal();
    };
    attachCloseModal();
}
function openCaseEditor(cas) {
    const isNew = !cas;
    const c = cas || { id: Date.now().toString(), title: "", desc: "", img: "https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg", more: "", translations: {} };
    let activeLang = editLanguages.includes(currentLang) ? currentLang : 'zh';
    const formatValues = (lang) => ({
        title: escapeHtml(getTranslationValue(c, lang, 'title')),
        desc: escapeHtml(getTranslationValue(c, lang, 'desc')),
        more: escapeHtml(getTranslationValue(c, lang, 'more'))
    });
    const values = formatValues(activeLang);
    showModal(`<h3>${isNew ? '新增合作案例' : '编辑案例'}</h3><div class="lang-tabs">${editLanguages.map(l => `<button type="button" class="lang-tab${l===activeLang ? ' active' : ''}" data-lang="${l}">${getLangLabel(l)}</button>`).join('')}</div><label>标题</label><input id="caseTitle" value="${values.title}"><label>简述</label><textarea id="caseDesc">${values.desc}</textarea><label>图片URL</label><input id="caseImg" value="${c.img}"><input type="file" id="caseUpload" accept="image/*"><label>详细内容</label><textarea id="caseMore">${values.more}</textarea><div style="margin-top:20px; display:flex; gap:12px;"><button id="saveCaseBtn" class="btn">保存</button><button id="closeModalBtn" class="btn-outline">取消</button></div>`);
    const setEditLanguage = (lang) => {
        activeLang = lang;
        const v = formatValues(lang);
        document.getElementById('caseTitle').value = v.title;
        document.getElementById('caseDesc').value = v.desc;
        document.getElementById('caseMore').value = v.more;
        document.querySelectorAll('.lang-tab').forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));
    };
    document.querySelectorAll('.lang-tab').forEach(btn => btn.onclick = () => setEditLanguage(btn.getAttribute('data-lang')));
    document.getElementById('caseUpload').onchange = (e) => { const f=e.target.files[0]; if(f){ const r=new FileReader(); r.onload=ev=>document.getElementById('caseImg').value=ev.target.result; r.readAsDataURL(f); } };
    document.getElementById('saveCaseBtn').onclick = () => {
        const title = document.getElementById('caseTitle').value.trim();
        const desc = document.getElementById('caseDesc').value.trim();
        const img = document.getElementById('caseImg').value.trim();
        const more = document.getElementById('caseMore').value.trim();
        if(!title) return alert('请输入标题');
        setTranslationValue(c, activeLang, 'title', title);
        setTranslationValue(c, activeLang, 'desc', desc);
        setTranslationValue(c, activeLang, 'more', more);
        if(activeLang === 'zh') {
            c.title = title;
            c.desc = desc;
            c.more = more;
        }
        c.img = img;
        if(isNew) appData.cases.push(c);
        syncAllData(); renderCases(); closeModal();
    };
    attachCloseModal();
}
function showModal(html) {
    const modal=document.getElementById("globalModal");
    const content=document.getElementById("modalContent");
    content.innerHTML=html;
    modal.style.display="flex";
    const title = content.querySelector('h1,h2,h3');
    if(title) {
        if(!title.id) title.id = `modalTitle-${Date.now()}`;
        modal.setAttribute('aria-labelledby', title.id);
    }
}
function closeModal() { document.getElementById("globalModal").style.display="none"; }
function attachCloseModal() { const close=document.getElementById("closeModalBtn"); if(close) close.onclick=closeModal; window.onclick=(e)=>{ if(e.target===document.getElementById("globalModal")) closeModal(); }; }
function escapeHtml(str) { if(!str) return ''; return String(str).replace(/[&<>"']/g, m=>({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[m])); }
function renderAdminBtnsStatus() {
    const badgeDiv=document.getElementById("adminStatusBadge");
    const modeBadge = `<span class="admin-badge site-mode-badge" title="${apiOnline ? '数据已连接后端接口' : '当前使用浏览器本地数据'}">${apiOnline ? '动态模式' : '本地模式'}</span>`;
    if(isAdmin) badgeDiv.innerHTML=`${modeBadge}<span class="admin-badge" id="logoutAdminBtn"><i class="fas fa-crown"></i> 管理员模式 <i class="fas fa-sign-out-alt"></i></span>`;
    else badgeDiv.innerHTML=modeBadge;
    const logoutBtn=document.getElementById("logoutAdminBtn");
    if(logoutBtn) logoutBtn.onclick=()=>{ isAdmin=false; sessionStorage.removeItem("TaiyiAdmin"); sessionStorage.removeItem("TaiyiAdminKey"); renderAll(); };
}
function showAdminLogin() {
    showModal(`<h3>管理员登录</h3><input type="text" id="loginUser" placeholder="用户名" value="admin"><input type="password" id="loginPass" placeholder="密码"><div style="margin-top:20px;"><button id="doLoginBtn" class="btn">登录</button></div>`);
    document.getElementById("doLoginBtn").onclick = async () => {
        const user = document.getElementById("loginUser").value;
        const pass = document.getElementById("loginPass").value;
        if(user !== "admin") return alert("用户名或密码错误");
        if(apiOnline) {
            try {
                await apiRequest('/api/admin-login', {
                    method: 'POST',
                    headers: { 'X-Admin-Key': pass }
                });
                isAdmin = true;
                sessionStorage.setItem("TaiyiAdmin", "true");
                sessionStorage.setItem("TaiyiAdminKey", pass);
                closeModal();
                renderAll();
            } catch(e) {
                alert("用户名或密码错误");
            }
            return;
        }
        if(pass === "taiyi2026") {
            isAdmin = true;
            sessionStorage.setItem("TaiyiAdmin", "true");
            sessionStorage.setItem("TaiyiAdminKey", pass);
            closeModal();
            renderAll();
        } else alert("用户名或密码错误");
    };
    attachCloseModal();
}
async function init() {
    await loadAllData();
    if(sessionStorage.getItem("TaiyiAdmin") === "true") isAdmin = true;
    if(isAdmin && !sessionStorage.getItem("TaiyiAdminKey")) sessionStorage.setItem("TaiyiAdminKey", "taiyi2026");
    // 语言初始化
    const lang = detectDefaultLang(); setLangAttributes(lang);
    renderAll();
    applyTranslations(currentLang);
    startHeroRotation();
    updateHeroDots();
    const heroPrev = document.getElementById('heroPrev');
    const heroNext = document.getElementById('heroNext');
    if(heroPrev) heroPrev.onclick = () => { setHeroSlide(_heroIndex - 1); resumeHeroRotation(); };
    if(heroNext) heroNext.onclick = () => { setHeroSlide(_heroIndex + 1); resumeHeroRotation(); };
    const heroEl = document.getElementById('home');
    if(heroEl) {
        heroEl.addEventListener('mouseenter', pauseHeroRotation);
        heroEl.addEventListener('mouseleave', () => resumeHeroRotation());
    }
    const sel = document.getElementById('langSelect'); if(sel) sel.addEventListener('change', function(){ const l=this.value; localStorage.setItem('taiyi_lang', l); setLangAttributes(l); renderAll(); applyTranslations(l); });
    document.getElementById("postMsgBtn").onclick = postMessage;
    document.getElementById("secretAdminBtn").onclick = showAdminLogin;
    const craftPrev = document.getElementById('craftPrev');
    const craftNext = document.getElementById('craftNext');
    if(craftPrev) craftPrev.onclick = () => { setCraftSlide(_craftIndex - 1); resumeCraftRotation(); };
    if(craftNext) craftNext.onclick = () => { setCraftSlide(_craftIndex + 1); resumeCraftRotation(); };
    const craftSection = document.getElementById('craft');
    if(craftSection) {
        craftSection.addEventListener('mouseenter', pauseCraftRotation);
        craftSection.addEventListener('mouseleave', () => resumeCraftRotation());
    }
    const productPrev = document.getElementById('productPrev');
    const productNext = document.getElementById('productNext');
    if(productPrev) productPrev.onclick = () => { setProductSlide(_productIndex - 1); resumeProductRotation(); };
    if(productNext) productNext.onclick = () => { setProductSlide(_productIndex + 1); resumeProductRotation(); };
    const productSection = document.getElementById('products');
    if(productSection) {
        productSection.addEventListener('mouseenter', pauseProductRotation);
        productSection.addEventListener('mouseleave', () => resumeProductRotation());
    }
    const casePrev = document.getElementById('casePrev');
    const caseNext = document.getElementById('caseNext');
    if(casePrev) casePrev.onclick = () => { setCaseSlide(_caseIndex - 1); resumeCaseRotation(); };
    if(caseNext) caseNext.onclick = () => { setCaseSlide(_caseIndex + 1); resumeCaseRotation(); };
    const caseSection = document.getElementById('cases');
    if(caseSection) {
        caseSection.addEventListener('mouseenter', pauseCaseRotation);
        caseSection.addEventListener('mouseleave', () => resumeCaseRotation());
    }
    startCraftRotation();
    startProductRotation();
    startCaseRotation();
}
document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') closeModal();
});
init();
