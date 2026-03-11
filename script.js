// Obituary data
const obituaries = [
    { id: 1, name: "Mrs Vijayalatha Vijayaratnam", birth: "1952", death: "2026", location: "Mullaitivu, Sri Lanka<br>Batticaloa, Canada", tributes: 15, avatar: "https://i.pravatar.cc/150?img=1", time: "13 hours ago", country: "Sri Lanka", postType: "Obituary", religion: "Hinduism", age: 74, biography: "A beloved mother and grandmother who touched the lives of everyone she met. She was known for her kindness, wisdom, and unwavering faith." },
    { id: 2, name: "Mrs Kannatammal Ponnusamy", birth: "1939", death: "2026", location: "Manipay East, Sri Lanka<br>Jaffna, Sri Lanka", tributes: 5, avatar: "https://i.pravatar.cc/150?img=5", time: "1 day ago", country: "Sri Lanka", postType: "Obituary", religion: "Hinduism", age: 87, biography: "A respected community leader who dedicated her life to helping others. Her legacy of compassion will live on forever." },
    { id: 3, name: "Mr Subramaniam Ramasamy", birth: "1939", death: "2026", location: "Kondavil South, Sri Lanka<br>Jaffna, Canada", tributes: 5, avatar: "https://i.pravatar.cc/150?img=13", time: "1 day ago", country: "Canada", postType: "1st Year Remembrance", religion: "Hinduism", age: 87, biography: "An accomplished educator and devoted family man. He inspired countless students with his dedication to learning." },
    { id: 4, name: "Mr Rajakulendran Arulananthar", birth: "1952", death: "2026", location: "Jaffna, Sri Lanka", tributes: 4, avatar: "https://i.pravatar.cc/150?img=12", time: "3 days ago", country: "Sri Lanka", postType: "Obituary", religion: "Christianity", age: 74, biography: "A successful businessman who built his legacy through hard work and integrity." },
    { id: 5, name: "Mr Sivasthurai Mylvaganam", birth: "1936", death: "2026", location: "Jaffna, Sri Lanka", tributes: 9, avatar: "https://i.pravatar.cc/150?img=14", time: "4 days ago", country: "Sri Lanka", postType: "2nd Year Remembrance", religion: "Hinduism", age: 90, biography: "A talented artist whose work brought joy to many. His creative spirit continues to inspire." },
    { id: 6, name: "Mrs Selvakurani Kanagaratnam", birth: "1953", death: "2026", location: "Kosgodavil East, Sri Lanka<br>Manila, Canada", tributes: 3, avatar: "https://i.pravatar.cc/150?img=9", time: "4 days ago", country: "Canada", postType: "Obituary", religion: "Buddhism", age: 73, biography: "A devoted nurse who cared for patients with compassion and skill." },
    { id: 7, name: "Mr Sockalingam Sri Rajalingam", birth: "1927", death: "2026", location: "Colombo, Sri Lanka", tributes: 27, avatar: "https://i.pravatar.cc/150?img=33", time: "1 week ago", country: "Sri Lanka", postType: "5th Year Remembrance", religion: "Hinduism", age: 99, biography: "A war veteran who served his country with honor and bravery." },
    { id: 8, name: "James Anderson", birth: "1945", death: "2026", location: "Sydney, Australia", tributes: 12, avatar: "https://i.pravatar.cc/150?img=52", time: "2 days ago", country: "Australia", postType: "Obituary", religion: "Christianity", age: 81, biography: "A loving father and successful engineer who contributed greatly to his field." },
    { id: 9, name: "Sophie Martin", birth: "1958", death: "2026", location: "Melbourne, Australia", tributes: 8, avatar: "https://i.pravatar.cc/150?img=26", time: "5 days ago", country: "Australia", postType: "3rd Year Remembrance", religion: "Christianity", age: 68, biography: "A passionate teacher who inspired generations of students." },
    { id: 10, name: "Elizabeth Windsor", birth: "1944", death: "2026", location: "London, United Kingdom", tributes: 35, avatar: "https://i.pravatar.cc/150?img=27", time: "1 day ago", country: "United Kingdom", postType: "Obituary", religion: "Christianity", age: 82, biography: "A philanthropist who dedicated her life to charitable causes." },
    { id: 11, name: "Hans Mueller", birth: "1948", death: "2026", location: "Berlin, Germany", tributes: 14, avatar: "https://i.pravatar.cc/150?img=70", time: "4 days ago", country: "Germany", postType: "Obituary", religion: "Christianity", age: 78, biography: "A talented musician who enriched lives through his beautiful compositions." },
    { id: 12, name: "Mr Suthusan Sivasalan", birth: "1960", death: "2026", location: "Puthukkudiyiruppu, United Kingdom", tributes: 18, avatar: "https://i.pravatar.cc/150?img=52", time: "2 days ago", country: "United Kingdom", postType: "1st Year Remembrance", religion: "Hinduism", age: 66, biography: "A dedicated professional who always put family first." }
];

// Recent tributes data
const recentTributes = [
    { name: "Mrs Vijayalatha Vijayaratnam", location: "Batticaloa, Canada", time: "2 days ago", tributes: 15663, avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Mr Suthusan Sivasalan", location: "Puthukkudiyiruppu, United Kingdom", time: "3 days ago", tributes: 15663, avatar: "https://i.pravatar.cc/150?img=52" },
    { name: "Mrs Kannatammal Ponnusamy", location: "Jaffna, Sri Lanka", time: "4 days ago", tributes: 14936, avatar: "https://i.pravatar.cc/150?img=5" },
    { name: "Mr Subramaniam Ramasamy", location: "Jaffna, Canada", time: "1 week ago", tributes: 13939, avatar: "https://i.pravatar.cc/150?img=13" },
    { name: "Mr Rajakulendran Arulananthar", location: "Jaffna, Sri Lanka", time: "1 month ago", tributes: 9488, avatar: "https://i.pravatar.cc/150?img=12" },
    { name: "Mr Sivasthurai Mylvaganam", location: "Jaffna, Sri Lanka", time: "2 months ago", tributes: 8965, avatar: "https://i.pravatar.cc/150?img=14" },
    { name: "Mrs Selvakurani Kanagaratnam", location: "Manila, Canada", time: "3 months ago", tributes: 8788, avatar: "https://i.pravatar.cc/150?img=9" },
    { name: "Mr Sockalingam Sri Rajalingam", location: "Colombo, Sri Lanka", time: "4 months ago", tributes: 7668, avatar: "https://i.pravatar.cc/150?img=33" }
];

// Sample tributes for obituaries
const obituaryTributes = {
    default: [
        { name: "John Smith", location: "London, UK", time: "2 hours ago", message: "Such a wonderful person. Will be deeply missed by all who knew them.", avatar: "https://i.pravatar.cc/150?img=15" },
        { name: "Sarah Johnson", location: "New York, USA", time: "5 hours ago", message: "Their kindness and compassion touched so many lives. Rest in peace.", avatar: "https://i.pravatar.cc/150?img=16" },
        { name: "Michael Brown", location: "Toronto, Canada", time: "1 day ago", message: "A true inspiration to everyone. Your legacy will live on forever.", avatar: "https://i.pravatar.cc/150?img=17" },
        { name: "Emma Wilson", location: "Sydney, Australia", time: "2 days ago", message: "We will cherish the beautiful memories we shared together.", avatar: "https://i.pravatar.cc/150?img=18" }
    ]
};

// Countries data
const countries = [
    { name: "Australia", count: 2, posts: ["James Anderson", "Sophie Martin"] },
    { name: "Canada", count: 2, posts: ["Mr Subramaniam Ramasamy", "Mrs Selvakurani Kanagaratnam"] },
    { name: "Germany", count: 1, posts: ["Hans Mueller"] },
    { name: "United Kingdom", count: 2, posts: ["Elizabeth Windsor", "Mr Suthusan Sivasalan"] },
    { name: "Sri Lanka", count: 5, posts: ["Mrs Vijayalatha Vijayaratnam", "Mrs Kannatammal Ponnusamy", "Mr Rajakulendran Arulananthar", "Mr Sivasthurai Mylvaganam", "Mr Sockalingam Sri Rajalingam"] }
];

// ============================================
// REACTIONS SYSTEM
// ============================================

// Reaction definitions
const REACTIONS = {
    pray:   { emoji: '🙏', label: 'Pray',   color: '#f59e0b', activeColor: '#d97706' },
    candle: { emoji: '🕯️', label: 'Candle', color: '#f97316', activeColor: '#ea580c' },
    flower: { emoji: '🌸', label: 'Flower', color: '#ec4899', activeColor: '#db2777' }
};

// Per-post reaction counts & user's own reaction state
// reactions[id] = { pray: 0, candle: 0, flower: 0 }
// userReactions[id] = 'pray' | 'candle' | 'flower' | null
const reactions = {};
const userReactions = {};

function initReactions(id) {
    if (!reactions[id]) {
        reactions[id] = { pray: Math.floor(Math.random() * 12), candle: Math.floor(Math.random() * 8), flower: Math.floor(Math.random() * 6) };
    }
    if (userReactions[id] === undefined) {
        userReactions[id] = null;
    }
}

// Handle a reaction click
function reactToPost(id, type, event) {
    if (event) event.stopPropagation();
    initReactions(id);

    const prev = userReactions[id];

    if (prev === type) {
        // Toggle off
        reactions[id][type] = Math.max(0, reactions[id][type] - 1);
        userReactions[id] = null;
    } else {
        // Remove previous if any
        if (prev) {
            reactions[id][prev] = Math.max(0, reactions[id][prev] - 1);
        }
        reactions[id][type]++;
        userReactions[id] = type;

        // Burst animation
        if (event) spawnBurst(event.currentTarget, REACTIONS[type].emoji);
    }

    // Update all cards with this id on the page
    updateReactionButtons(id);
}

// Spawn floating emoji burst
function spawnBurst(btn, emoji) {
    for (let i = 0; i < 6; i++) {
        const el = document.createElement('span');
        el.className = 'reaction-burst';
        el.textContent = emoji;
        const rect = btn.getBoundingClientRect();
        el.style.left = (rect.left + rect.width / 2 + window.scrollX) + 'px';
        el.style.top  = (rect.top  + window.scrollY) + 'px';
        el.style.setProperty('--dx', (Math.random() * 80 - 40) + 'px');
        el.style.setProperty('--dy', -(30 + Math.random() * 60) + 'px');
        el.style.animationDelay = (i * 60) + 'ms';
        document.body.appendChild(el);
        el.addEventListener('animationend', () => el.remove());
    }
}

// Update all reaction button groups for a given id
function updateReactionButtons(id) {
    document.querySelectorAll(`.reaction-group[data-id="${id}"]`).forEach(group => {
        renderReactionGroup(group, id);
    });
}

// Build the inner HTML of a reaction group
function renderReactionGroup(group, id) {
    initReactions(id);
    const active = userReactions[id];
    group.innerHTML = Object.entries(REACTIONS).map(([type, def]) => {
        const count = reactions[id][type];
        const isActive = active === type;
        return `
            <button
                class="reaction-btn ${isActive ? 'reaction-active' : ''}"
                data-type="${type}"
                style="${isActive ? `--reaction-color:${def.activeColor}` : `--reaction-color:${def.color}`}"
                onclick="reactToPost(${id}, '${type}', event)"
                title="${def.label}"
            >
                <span class="reaction-emoji">${def.emoji}</span>
                <span class="reaction-label">${def.label}</span>
                ${count > 0 ? `<span class="reaction-count">${count}</span>` : ''}
            </button>
        `;
    }).join('');
}

// Build a reaction group element
function buildReactionGroup(id) {
    initReactions(id);
    const div = document.createElement('div');
    div.className = 'reaction-group';
    div.dataset.id = id;
    renderReactionGroup(div, id);
    return div.outerHTML;
}

// ============================================
// DETAIL PAGE REACTION PANEL
// ============================================
function buildDetailReactions(id) {
    initReactions(id);
    return `
        <div class="detail-reactions-section">
            <h4 class="detail-reactions-title"><i class="bi bi-emoji-smile"></i> Reactions</h4>
            <div class="detail-reaction-group" data-id="${id}">
                ${buildDetailReactionButtons(id)}
            </div>
        </div>
    `;
}

function buildDetailReactionButtons(id) {
    initReactions(id);
    const active = userReactions[id];
    return Object.entries(REACTIONS).map(([type, def]) => {
        const count = reactions[id][type];
        const isActive = active === type;
        return `
            <button
                class="detail-reaction-btn ${isActive ? 'reaction-active' : ''}"
                data-type="${type}"
                style="--reaction-color:${isActive ? def.activeColor : def.color}"
                onclick="reactToPostDetail(${id}, '${type}', event)"
                title="${def.label}"
            >
                <span class="detail-reaction-emoji">${def.emoji}</span>
                <span class="detail-reaction-label">${def.label}</span>
                <span class="detail-reaction-count">${count}</span>
            </button>
        `;
    }).join('');
}

function reactToPostDetail(id, type, event) {
    if (event) event.stopPropagation();
    initReactions(id);

    const prev = userReactions[id];
    if (prev === type) {
        reactions[id][type] = Math.max(0, reactions[id][type] - 1);
        userReactions[id] = null;
    } else {
        if (prev) reactions[id][prev] = Math.max(0, reactions[id][prev] - 1);
        reactions[id][type]++;
        userReactions[id] = type;
        if (event) spawnBurst(event.currentTarget, REACTIONS[type].emoji);
    }

    // Update detail panel
    document.querySelectorAll(`.detail-reaction-group[data-id="${id}"]`).forEach(group => {
        group.innerHTML = buildDetailReactionButtons(id);
    });

    // Also sync card reaction groups if visible
    updateReactionButtons(id);
}

// ============================================
// STATE
// ============================================
let selectedCountry = null;
let selectedPost = null;
let expandedCountry = null;
let currentPage = 'home';

// ============================================
// SHOW MAIN PAGE
// ============================================
function showMainPage() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('detailPage').classList.remove('active');
    window.scrollTo(0, 0);
    filterByPage('home');
}

// ============================================
// FILTER BY PAGE
// ============================================
function filterByPage(page) {
    currentPage = page;
    selectedCountry = null;
    selectedPost = null;
    expandedCountry = null;

    document.querySelectorAll('.nav-link-item').forEach(link => link.classList.remove('active'));
    const navId = 'nav' + page.charAt(0).toUpperCase() + page.slice(1);
    const activeNav = document.getElementById(navId);
    if (activeNav) activeNav.classList.add('active');

    let filtered = obituaries;
    if (page === 'obituary') filtered = obituaries.filter(o => o.postType === 'Obituary');
    else if (page === 'memorial') filtered = obituaries.filter(o => o.postType !== 'Obituary');

    renderObituaries(filtered);
    renderCountries();
}

// ============================================
// SHOW DETAIL PAGE
// ============================================
function showDetailPage(id) {
    const obit = obituaries.find(o => o.id === id);
    if (!obit) return;

    const tributes = obituaryTributes[id] || obituaryTributes.default;

    const birthDate = new Date(obit.birth, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    const deathDate = new Date(obit.death, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);

    const birthDay   = birthDate.getDate().toString().padStart(2, '0');
    const birthMonth = birthDate.toLocaleString('default', { month: 'short' });
    const deathDay   = deathDate.getDate().toString().padStart(2, '0');
    const deathMonth = deathDate.toLocaleString('default', { month: 'short' });

    const detailHTML = `
        <div class="memorial-card-section">
            <button class="download-btn" onclick="downloadMemorial(${obit.id})">
                <i class="bi bi-download"></i>
            </button>

            <h2 class="memorial-type-title">${obit.postType}</h2>

            <div class="memorial-profile-display">
                <div class="memorial-date-info">
                    <div class="memorial-date-label">Born</div>
                    <div class="memorial-date-day">${birthDay}</div>
                    <div class="memorial-date-month">${birthMonth}</div>
                    <div class="memorial-date-year">${obit.birth}</div>
                </div>

                <div class="memorial-profile-frame-container">
                    <div class="memorial-golden-frame"></div>
                    <img src="${obit.avatar}" alt="${obit.name}" class="memorial-profile-photo">
                </div>

                <div class="memorial-date-info">
                    <div class="memorial-date-label">Passed</div>
                    <div class="memorial-date-day">${deathDay}</div>
                    <div class="memorial-date-month">${deathMonth}</div>
                    <div class="memorial-date-year">${obit.death}</div>
                </div>
            </div>

            <h1 class="memorial-person-name">${obit.name}</h1>
            <div class="memorial-age-info">Age ${obit.age}</div>
            <div class="memorial-location-info">${obit.location.replace(/<br>/g, ', ')}</div>

            <div class="memorial-action-buttons">
                <button class="memorial-action-btn" onclick="tributeNow(${obit.id})">
                    <i class="bi bi-heart-fill"></i> Tribute Now
                </button>
                <button class="memorial-action-btn">
                    <i class="bi bi-flower1"></i> Send Flowers
                </button>
                <button class="memorial-action-btn">
                    <i class="bi bi-currency-dollar"></i> Donate
                </button>
                <button class="memorial-action-btn">
                    <i class="bi bi-share-fill"></i> Share
                </button>
            </div>
        </div>

        ${buildDetailReactions(obit.id)}

        <div class="about-section">
            <h3><i class="bi bi-person-circle"></i> About</h3>
            <p class="about-text">${obit.biography}</p>
        </div>

        <div class="tributes-detail-section">
            <h3>
                <span><i class="bi bi-heart-fill"></i> Tributes &amp; Condolences</span>
                <span class="tribute-count-badge">${tributes.length}</span>
            </h3>

            <button class="write-tribute-btn" onclick="writeTribute(${obit.id})">
                <i class="bi bi-pencil-fill"></i> Write a Tribute
            </button>

            <div class="tributes-list">
                ${tributes.map(tribute => `
                    <div class="tribute-item-detail">
                        <div class="tribute-header-detail">
                            <i class="bi bi-chat-quote-fill tribute-quote-icon"></i>
                            <div class="tribute-author-detail">
                                <div class="tribute-author-name">${tribute.name}</div>
                                <div class="tribute-author-info">${tribute.location} • ${tribute.time}</div>
                            </div>
                        </div>
                        <div class="tribute-message-detail">${tribute.message}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const sidebarHTML = `
        <div class="summary-card">
            <h4>Summary</h4>
            <div class="summary-item">
                <div class="summary-icon"><i class="bi bi-geo-alt-fill"></i></div>
                <div class="summary-info">
                    <div class="summary-label">Born In</div>
                    <div class="summary-value">${obit.location.split('<br>')[0]}</div>
                </div>
            </div>
            <div class="summary-item">
                <div class="summary-icon"><i class="bi bi-flag-fill"></i></div>
                <div class="summary-info">
                    <div class="summary-label">Resided In</div>
                    <div class="summary-value">${obit.country}</div>
                </div>
            </div>
            <div class="summary-item">
                <div class="summary-icon"><i class="bi bi-house-heart-fill"></i></div>
                <div class="summary-info">
                    <div class="summary-label">Religion</div>
                    <div class="summary-value">${obit.religion}</div>
                </div>
            </div>
        </div>

        <div class="sponsored-card">
            <h4>Sponsored</h4>
            <div class="sponsored-carousel">
                <img src="https://picsum.photos/300/250?random=1" alt="Sponsored" class="sponsored-image">
            </div>
            <div class="carousel-controls">
                <button class="carousel-control-btn"><i class="bi bi-chevron-left"></i></button>
                <button class="carousel-control-btn"><i class="bi bi-chevron-right"></i></button>
            </div>
            <div class="sponsored-actions">
                <button class="sponsored-btn contact"><i class="bi bi-whatsapp"></i> Contact</button>
                <button class="sponsored-btn view-more">View more</button>
            </div>
        </div>
    `;

    document.getElementById('detailContent').innerHTML = detailHTML;
    document.getElementById('detailSidebar').innerHTML = sidebarHTML;
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('detailPage').classList.add('active');
    window.scrollTo(0, 0);
}

// ============================================
// TOGGLE COUNTRY
// ============================================
function toggleCountry(country) {
    if (expandedCountry === country) {
        expandedCountry = null;
        selectedCountry = null;
        selectedPost = null;
        filterByPage(currentPage);
    } else {
        expandedCountry = country;
        selectedCountry = country;
        selectedPost = null;

        let filtered = obituaries.filter(obit => obit.country === country);
        if (currentPage === 'obituary') filtered = filtered.filter(o => o.postType === 'Obituary');
        else if (currentPage === 'memorial') filtered = filtered.filter(o => o.postType !== 'Obituary');

        renderObituaries(filtered);
    }
    renderCountries();
}

// ============================================
// SELECT POST
// ============================================
function selectPost(postName, country) {
    selectedPost = postName;
    selectedCountry = country;
    expandedCountry = country;
    const filtered = obituaries.filter(o => o.name === postName);
    renderObituaries(filtered);
    renderCountries();
}

// ============================================
// RENDER COUNTRIES
// ============================================
function renderCountries() {
    const container = document.getElementById('countriesList');
    const mobileContainer = document.getElementById('countriesListMobile');

    const html = countries.map(country => `
        <div class="country-item">
            <div class="country-header ${expandedCountry === country.name ? 'active' : ''}"
                 onclick="toggleCountry('${country.name}')">
                <span class="country-name">${country.name}</span>
                <span class="country-count">${country.count} Posts</span>
            </div>
            <div class="country-posts ${expandedCountry === country.name ? 'show' : ''}">
                ${country.posts.map(post => `
                    <div class="post-item ${selectedPost === post ? 'active' : ''}" onclick="selectPost('${post}', '${country.name}')">
                        ${post}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    if (container) container.innerHTML = html;
    if (mobileContainer) mobileContainer.innerHTML = html;
}

// ============================================
// RENDER OBITUARIES
// ============================================
function renderObituaries(data = obituaries) {
    const container = document.getElementById('obituaryContainer');

    if (data.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:50px;color:#999;">No obituaries found</div>';
        return;
    }

    container.innerHTML = data.map(obit => {
        initReactions(obit.id);
        const active = userReactions[obit.id];

        const reactionBtns = Object.entries(REACTIONS).map(([type, def]) => {
            const count = reactions[obit.id][type];
            const isActive = active === type;
            return `
                <button
                    class="reaction-btn ${isActive ? 'reaction-active' : ''}"
                    data-type="${type}"
                    style="--reaction-color:${isActive ? def.activeColor : def.color}"
                    onclick="reactToPost(${obit.id}, '${type}', event)"
                    title="${def.label}"
                >
                    <span class="reaction-emoji">${def.emoji}</span>
                    <span class="reaction-label">${def.label}</span>
                    ${count > 0 ? `<span class="reaction-count">${count}</span>` : ''}
                </button>
            `;
        }).join('');

        return `
            <div class="obituary-card" onclick="showDetailPage(${obit.id})">
                <div class="card-header-row">
                    <div class="post-type-badge">${obit.postType}</div>
                    <div class="time-ago">${obit.time}</div>
                </div>

                <div class="card-body-content">
                    <div class="profile-section">
                        <span class="year">${obit.birth}</span>
                        <div class="profile-image-container">
                            <div class="profile-ring">
                                <div class="frame-overlay"></div>
                                <img src="${obit.avatar}" alt="${obit.name}" class="profile-image">
                            </div>
                        </div>
                        <span class="year">${obit.death}</span>
                    </div>

                    <div class="memorial-name">${obit.name}</div>
                    <div class="memorial-details">${obit.location}</div>

                    <div class="card-footer-row">
                        <div class="tributes-count">
                            <i class="bi bi-heart-fill"></i>
                            <span>${obit.tributes} Tributes</span>
                        </div>
                        <div class="reaction-group" data-id="${obit.id}">
                            ${reactionBtns}
                        </div>
                        <button class="share-btn" onclick="event.stopPropagation(); sharePost(${obit.id})">
                            <i class="bi bi-share-fill"></i> Share
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// RENDER TRIBUTES
// ============================================
function renderTributes() {
    const container = document.getElementById('tributesList');
    const mobileContainer = document.getElementById('tributesListMobile');

    const html = recentTributes.map(tribute => `
        <div class="tribute-item">
            <img src="${tribute.avatar}" alt="${tribute.name}" class="tribute-avatar">
            <div class="tribute-info">
                <div class="tribute-name">${tribute.name}</div>
                <div class="tribute-location">${tribute.location}</div>
                <div class="tribute-time">${tribute.time}</div>
            </div>
            <div class="tribute-more">+ ${Math.round(tribute.tributes / 1000)}K MORE</div>
        </div>
    `).join('');

    if (container) container.innerHTML = html;
    if (mobileContainer) mobileContainer.innerHTML = html;
}

// ============================================
// CREATE MEMORIAL
// ============================================
function createMemorial() {
    const postType  = document.getElementById('postType').value.trim();
    const name      = document.getElementById('memorialName').value;
    const birthDate = document.getElementById('birthDate').value;
    const deathDate = document.getElementById('deathDate').value;
    const country   = document.getElementById('country').value;
    const location  = document.getElementById('location').value;
    const religion  = document.getElementById('religion').value || 'Not specified';
    const biography = document.getElementById('biography').value;

    if (!postType || !name || !birthDate || !deathDate || !country || !location) {
        alert('Please fill in all required fields');
        return;
    }

    const birthYear = new Date(birthDate).getFullYear();
    const deathYear = new Date(deathDate).getFullYear();
    const age = deathYear - birthYear;

    const newMemorial = {
        id: obituaries.length + 1,
        name, birth: birthYear.toString(), death: deathYear.toString(),
        location: location + ', ' + country, tributes: 0,
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
        time: "Just now", country, postType, religion, age,
        biography: biography || "A beloved individual who will be deeply missed."
    };

    obituaries.unshift(newMemorial);

    const countryObj = countries.find(c => c.name === country);
    if (countryObj) { countryObj.count++; countryObj.posts.unshift(name); }
    else countries.push({ name: country, count: 1, posts: [name] });

    filterByPage(currentPage);
    renderCountries();

    const modal = bootstrap.Modal.getInstance(document.getElementById('createMemorialModal'));
    modal.hide();

    ['postType','memorialName','birthDate','deathDate','country','location','religion','biography']
        .forEach(id => document.getElementById(id).value = '');

    alert('Memorial created successfully!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// MISC ACTIONS
// ============================================
function downloadMemorial(id) { alert('Memorial card download feature coming soon!'); }
function tributeNow(id) { writeTribute(id); }

function writeTribute(id) {
    const message = prompt('Write your tribute message:');
    if (message && message.trim()) {
        const obit = obituaries.find(o => o.id === id);
        if (obit) { obit.tributes++; alert('Thank you for your tribute!'); showDetailPage(id); }
    }
}

function sharePost(id) {
    const obit = obituaries.find(o => o.id === id);
    if (!obit) return;
    if (navigator.share) {
        navigator.share({ title: obit.name, text: `In memory of ${obit.name} (${obit.birth} - ${obit.death})`, url: window.location.href }).catch(() => {});
    } else {
        const tmp = document.createElement('input');
        tmp.value = window.location.href;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        document.body.removeChild(tmp);
        alert('Link copied to clipboard!');
    }
}

// ============================================
// SEARCH
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            let filtered = obituaries;

            if (term) {
                selectedCountry = null; selectedPost = null; expandedCountry = null;
                filtered = filtered.filter(o =>
                    o.name.toLowerCase().includes(term) ||
                    o.location.toLowerCase().includes(term) ||
                    o.country.toLowerCase().includes(term) ||
                    o.postType.toLowerCase().includes(term)
                );
            } else {
                if (currentPage === 'obituary') filtered = filtered.filter(o => o.postType === 'Obituary');
                else if (currentPage === 'memorial') filtered = filtered.filter(o => o.postType !== 'Obituary');
            }
            renderObituaries(filtered);
            renderCountries();
        });
    }
});

// ============================================
// SCROLL
// ============================================
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

window.addEventListener('scroll', function() {
    const btn = document.querySelector('.scroll-top');
    if (btn) btn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
});

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderCountries();
    renderObituaries();
    renderTributes();
});