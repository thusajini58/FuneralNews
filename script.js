// ============================================
// DATA
// ============================================
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

const tributeComments = {};

const countries = [
    { name: "Australia", count: 2, posts: ["James Anderson", "Sophie Martin"] },
    { name: "Canada", count: 2, posts: ["Mr Subramaniam Ramasamy", "Mrs Selvakurani Kanagaratnam"] },
    { name: "Germany", count: 1, posts: ["Hans Mueller"] },
    { name: "United Kingdom", count: 2, posts: ["Elizabeth Windsor", "Mr Suthusan Sivasalan"] },
    { name: "Sri Lanka", count: 5, posts: ["Mrs Vijayalatha Vijayaratnam", "Mrs Kannatammal Ponnusamy", "Mr Rajakulendran Arulananthar", "Mr Sivasthurai Mylvaganam", "Mr Sockalingam Sri Rajalingam"] }
];

// ============================================
// TRIBUTE TYPES — for "Share Your Feeling" modal
// ============================================
const TRIBUTE_TYPES = {
    cards: {
        icon: '💌',
        name: 'Cards',
        desc: 'Send a tribute card.',
        fields: [
            { id: 'sfmTributeName', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
            { id: 'sfmCardMessage', label: 'Card Message', type: 'textarea', placeholder: 'Write your message on the tribute card...' },
        ]
    },
    candle: {
        icon: '🕯️',
        name: 'Lighting of Candle',
        desc: 'Mark your condolences.',
        fields: [
            { id: 'sfmTributeName', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
            { id: 'sfmCandleMsg', label: 'Your Prayer / Message', type: 'textarea', placeholder: 'Share a prayer or message while lighting a virtual candle...' },
        ]
    },
    wreath: {
        icon: '💐',
        name: 'Wreath of Love',
        desc: 'Show your last respect.',
        fields: [
            { id: 'sfmTributeName', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
            { id: 'sfmWreathMsg', label: 'Dedication Message', type: 'textarea', placeholder: 'Dedicate this wreath with your words of respect...' },
        ]
    },
    letter: {
        icon: '✍️',
        name: 'Letter',
        desc: 'Say the words you missed.',
        fields: [
            { id: 'sfmTributeName', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
            { id: 'sfmLetterBody', label: 'Your Letter', type: 'textarea', placeholder: 'Write your heartfelt letter here...' },
        ]
    },
    moments: {
        icon: '📸',
        name: 'Treasured Moments',
        desc: 'Share memorable photos.',
        fields: [
            { id: 'sfmTributeName', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
            { id: 'sfmMomentsCaption', label: 'Caption / Memory', type: 'textarea', placeholder: 'Share a memory or describe this moment...' },
            { id: 'sfmMomentsPhoto', label: 'Upload Photo', type: 'file', placeholder: '' },
        ]
    },
    message: {
        icon: '💬',
        name: 'Message',
        desc: 'Send a heartfelt message.',
        fields: [
            { id: 'sfmTributeName', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
            { id: 'sfmMessageBody', label: 'Your Message', type: 'textarea', placeholder: 'Write your heartfelt condolence message...' },
        ]
    }
};

// ============================================
// REACTIONS SYSTEM
// ============================================
const REACTIONS = {
    pray:   { emoji: '🙏', label: 'Pray',   color: '#f59e0b', activeColor: '#d97706' },
    candle: { emoji: '🕯️', label: 'Candle', color: '#f97316', activeColor: '#ea580c' },
    flower: { emoji: '🌸', label: 'Flower', color: '#ec4899', activeColor: '#db2777' }
};
const reactions = {};
const userReactions = {};

function initReactions(id) {
    if (!reactions[id]) reactions[id] = { pray: Math.floor(Math.random() * 12), candle: Math.floor(Math.random() * 8), flower: Math.floor(Math.random() * 6) };
    if (userReactions[id] === undefined) userReactions[id] = null;
}

function reactToPost(id, type, event) {
    if (event) event.stopPropagation();
    initReactions(id);
    const prev = userReactions[id];
    if (prev === type) { reactions[id][type] = Math.max(0, reactions[id][type] - 1); userReactions[id] = null; }
    else {
        if (prev) reactions[id][prev] = Math.max(0, reactions[id][prev] - 1);
        reactions[id][type]++; userReactions[id] = type;
        if (event) spawnBurst(event.currentTarget, REACTIONS[type].emoji);
    }
    updateReactionButtons(id);
}

function spawnBurst(btn, emoji) {
    for (let i = 0; i < 6; i++) {
        const el = document.createElement('span');
        el.className = 'reaction-burst'; el.textContent = emoji;
        const rect = btn.getBoundingClientRect();
        el.style.left = (rect.left + rect.width / 2 + window.scrollX) + 'px';
        el.style.top  = (rect.top + window.scrollY) + 'px';
        el.style.setProperty('--dx', (Math.random() * 80 - 40) + 'px');
        el.style.setProperty('--dy', -(30 + Math.random() * 60) + 'px');
        el.style.animationDelay = (i * 60) + 'ms';
        document.body.appendChild(el);
        el.addEventListener('animationend', () => el.remove());
    }
}

function updateReactionButtons(id) {
    document.querySelectorAll(`.reaction-group[data-id="${id}"]`).forEach(group => renderReactionGroup(group, id));
}

function renderReactionGroup(group, id) {
    initReactions(id);
    const active = userReactions[id];
    group.innerHTML = Object.entries(REACTIONS).map(([type, def]) => {
        const count = reactions[id][type]; const isActive = active === type;
        return `<button class="reaction-btn ${isActive ? 'reaction-active' : ''}" data-type="${type}"
            style="--reaction-color:${isActive ? def.activeColor : def.color}"
            onclick="reactToPost(${id}, '${type}', event)" title="${def.label}">
            <span class="reaction-emoji">${def.emoji}</span>
            <span class="reaction-label">${def.label}</span>
            ${count > 0 ? `<span class="reaction-count">${count}</span>` : ''}
        </button>`;
    }).join('');
}

// ============================================
// STATE
// ============================================
let selectedCountry = null, selectedPost = null, expandedCountry = null, currentPage = 'home';
let currentDetailId = null;

// ============================================
// NAVIGATION
// ============================================
function showMainPage() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('detailPage').classList.remove('active');
    window.scrollTo(0, 0);
    filterByPage('home');
}

function filterByPage(page) {
    currentPage = page; selectedCountry = null; selectedPost = null; expandedCountry = null;
    document.querySelectorAll('.nav-link-item').forEach(l => l.classList.remove('active'));
    const activeNav = document.getElementById('nav' + page.charAt(0).toUpperCase() + page.slice(1));
    if (activeNav) activeNav.classList.add('active');
    let filtered = obituaries;
    if (page === 'obituary') filtered = obituaries.filter(o => o.postType === 'Obituary');
    else if (page === 'memorial') filtered = obituaries.filter(o => o.postType !== 'Obituary');
    renderObituaries(filtered); renderCountries();
}

// ============================================
// DETAIL PAGE
// ============================================
function showDetailPage(id) {
    const obit = obituaries.find(o => o.id === id);
    if (!obit) return;
    currentDetailId = id;
    if (!tributeComments[id]) tributeComments[id] = [];

    const birthDate = new Date(parseInt(obit.birth), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    const deathDate = new Date(parseInt(obit.death), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    const birthDay = birthDate.getDate().toString().padStart(2, '0');
    const birthMonth = birthDate.toLocaleString('default', { month: 'short' });
    const deathDay = deathDate.getDate().toString().padStart(2, '0');
    const deathMonth = deathDate.toLocaleString('default', { month: 'short' });

    const locationClean = obit.location.replace(/<br>/g, ', ');
    const locationParts = obit.location.split('<br>');
    const bornIn = locationParts[0] || locationClean;
    const residedIn = locationParts[1] ? locationParts[1].split(',')[0].trim() : obit.country;

    const detailHTML = `
        <div class="new-memorial-hero">
            <button class="new-download-btn" onclick="downloadMemorial(${obit.id})"><i class="bi bi-download"></i></button>
            <h2 class="new-hero-title">கண்ணீர் அஞ்சலி</h2>
            <div class="new-hero-body">
                <div class="new-date-col">
                    <div class="new-date-label">தோற்றம்</div>
                    <div class="new-date-day">${birthDay}</div>
                    <div class="new-date-month">${birthMonth}</div>
                    <div class="new-date-year">${obit.birth}</div>
                </div>
                <div class="new-frame-wrap">
                    <div class="new-golden-frame"></div>
                    <img src="${obit.avatar}" alt="${obit.name}" class="new-hero-photo">
                </div>
                <div class="new-date-col">
                    <div class="new-date-label">மறைவு</div>
                    <div class="new-date-day">${deathDay}</div>
                    <div class="new-date-month">${deathMonth}</div>
                    <div class="new-date-year">${obit.death}</div>
                </div>
            </div>
            <h1 class="new-hero-name">${obit.name}</h1>
            <div class="new-age-badge">Age ${obit.age}</div>
            <div class="new-hero-location">${locationClean}</div>
            <div class="new-action-buttons">
                <button class="new-action-btn" onclick="openShareFeeling(${obit.id})">
                    <i class="bi bi-heart-fill"></i> Share Your Feeling Now
                </button>
                <button class="new-action-btn" onclick="openSendFlowers(${obit.id})">
                    <i class="bi bi-flower1"></i> Send Flowers
                </button>
                <button class="new-action-btn" onclick="openDonate(${obit.id})">
                    <i class="bi bi-coin"></i> Donate
                </button>
                <button class="new-action-btn" onclick="sharePost(${obit.id})">
                    <i class="bi bi-share-fill"></i> Share
                </button>
            </div>
        </div>

        <div class="new-detail-grid">
            <div class="new-detail-left">
                <div class="new-about-card">
                    <h3 class="new-card-section-title">About</h3>
                    <p class="new-about-text">${obit.biography}</p>
                </div>
                <div class="new-comments-card" id="commentsSection-${id}">
                    <div class="new-comments-header">
                        <span><i class="bi bi-heart-fill" style="color:var(--red);margin-right:6px;"></i>Comments &amp; Condolences</span>
                        <span class="new-comment-count-badge">
                            <i class="bi bi-heart-fill"></i>
                            <span id="commentCountBadge-${id}">${tributeComments[id].length}</span>
                        </span>
                    </div>
                    <div class="new-comments-list" id="commentsList-${id}">${renderCommentsList(id)}</div>
                    <div class="new-tribute-form">
                        <h4 class="new-form-title">Share Your Feelings</h4>
                        <div class="new-form-group">
                            <label class="new-form-label">Your Name</label>
                            <input type="text" class="new-form-input" id="tributeName-${id}">
                        </div>
                        <div class="new-form-group">
                            <label class="new-form-label">Message</label>
                            <textarea class="new-form-textarea" id="tributeMsg-${id}" placeholder="Share your memories, prayers or condolences"></textarea>
                        </div>
                        <div style="display:flex;justify-content:flex-end;margin-top:12px;">
                            <button class="new-post-tribute-btn" onclick="postTribute(${id})">Post Tribute</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="new-detail-sidebar">
                <div class="new-summary-card">
                    <h4 class="new-summary-title">SUMMARY</h4>
                    <div class="new-summary-row">
                        <div class="new-summary-icon"><i class="bi bi-geo-alt-fill"></i></div>
                        <div><div class="new-summary-label">பிறந்த இடம்</div><div class="new-summary-value">${bornIn}</div></div>
                    </div>
                    <div class="new-summary-row">
                        <div class="new-summary-icon"><i class="bi bi-house-fill"></i></div>
                        <div><div class="new-summary-label">வாழ்ந்த இடம்</div><div class="new-summary-value">${residedIn}</div></div>
                    </div>
                    <div class="new-summary-row">
                        <div class="new-summary-icon"><i class="bi bi-person-fill"></i></div>
                        <div><div class="new-summary-label">Religion</div><div class="new-summary-value">${obit.religion}</div></div>
                    </div>
                </div>
                <div class="new-sponsored-card">
                    <div class="new-sponsored-header">
                        <span class="new-sponsored-label">SPONSORED</span>
                        <button class="new-add-ad-btn">+ ADD YOUR AD</button>
                    </div>
                    <img src="https://picsum.photos/300/220?random=42" alt="Sponsored" class="new-sponsored-img">
                    <div class="new-carousel-dots">
                        <span class="new-dot active"></span>
                        <span class="new-dot"></span>
                        <span class="new-dot"></span>
                    </div>
                    <div class="new-sponsored-btns">
                        <button class="new-sponsored-contact-btn"><i class="bi bi-whatsapp"></i> Contact</button>
                        <button class="new-sponsored-view-btn">View more</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('detailContent').innerHTML = detailHTML;
    document.getElementById('detailSidebar').innerHTML = '';
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('detailPage').classList.add('active');
    window.scrollTo(0, 0);
}

function renderCommentsList(id) {
    const comments = tributeComments[id] || [];
    if (!comments.length) return '';
    return comments.map(c => `
        <div class="new-comment-item">
            <div class="new-comment-author">${c.name}</div>
            <div class="new-comment-msg">${c.message}</div>
            <div class="new-comment-time">${c.time}</div>
        </div>`).join('');
}

function postTribute(id) {
    const nameEl = document.getElementById(`tributeName-${id}`);
    const msgEl  = document.getElementById(`tributeMsg-${id}`);
    if (!nameEl || !msgEl) return;
    const name = nameEl.value.trim(), message = msgEl.value.trim();
    if (!name || !message) { alert('Please enter your name and message.'); return; }
    if (!tributeComments[id]) tributeComments[id] = [];
    tributeComments[id].unshift({ name, message, time: 'Just now' });
    const obit = obituaries.find(o => o.id === id);
    if (obit) obit.tributes++;
    nameEl.value = ''; msgEl.value = '';
    const listEl = document.getElementById(`commentsList-${id}`);
    if (listEl) listEl.innerHTML = renderCommentsList(id);
    const countEl = document.getElementById(`commentCountBadge-${id}`);
    if (countEl) countEl.textContent = tributeComments[id].length;
}

// ============================================
// SHARE YOUR FEELING MODAL
// ============================================
let currentTributePostId = null;

function openShareFeeling(id) {
    currentTributePostId = id;
    // Reset to step 1
    document.getElementById('sfmStep1').style.display = '';
    document.getElementById('sfmStep2').style.display = 'none';
    document.getElementById('sfmFooter').style.display = '';
    const modal = new bootstrap.Modal(document.getElementById('shareFeelingModal'));
    modal.show();
}

function selectTributeType(type) {
    const def = TRIBUTE_TYPES[type];
    if (!def) return;
    // Build header
    document.getElementById('sfmFormHeader').innerHTML = `
        <span class="sfm-form-header-icon">${def.icon}</span>
        <div class="sfm-form-header-text">
            <h5>${def.name}</h5>
            <p>${def.desc}</p>
        </div>`;
    // Build fields
    document.getElementById('sfmFormBody').innerHTML =
        def.fields.map(f => {
            if (f.type === 'textarea') return `
                <div class="sfm-field-group">
                    <label class="sfm-field-label">${f.label}</label>
                    <textarea class="sfm-field-textarea" id="${f.id}" placeholder="${f.placeholder}"></textarea>
                </div>`;
            if (f.type === 'file') return `
                <div class="sfm-field-group">
                    <label class="sfm-field-label">${f.label}</label>
                    <input type="file" class="sfm-file-input" id="${f.id}" accept="image/*">
                </div>`;
            return `
                <div class="sfm-field-group">
                    <label class="sfm-field-label">${f.label}</label>
                    <input type="text" class="sfm-field-input" id="${f.id}" placeholder="${f.placeholder}">
                </div>`;
        }).join('') +
        `<div style="display:flex;justify-content:flex-end;margin-top:8px;">
            <button class="sfm-submit-btn" onclick="submitTribute('${type}')">
                ${def.icon} Submit ${def.name}
            </button>
        </div>`;
    document.getElementById('sfmStep1').style.display = 'none';
    document.getElementById('sfmStep2').style.display = '';
    document.getElementById('sfmFooter').style.display = 'none';
}

function sfmGoBack() {
    document.getElementById('sfmStep1').style.display = '';
    document.getElementById('sfmStep2').style.display = 'none';
    document.getElementById('sfmFooter').style.display = '';
}

function submitTribute(type) {
    const nameEl = document.getElementById('sfmTributeName');
    const name = nameEl ? nameEl.value.trim() : '';
    if (!name) { alert('Please enter your name.'); return; }
    const def = TRIBUTE_TYPES[type];
    // Add to comments if we have a post id
    const id = currentTributePostId;
    if (id) {
        if (!tributeComments[id]) tributeComments[id] = [];
        tributeComments[id].unshift({ name, message: `${def.icon} ${def.name}`, time: 'Just now' });
        const obit = obituaries.find(o => o.id === id);
        if (obit) obit.tributes++;
        const listEl = document.getElementById(`commentsList-${id}`);
        if (listEl) listEl.innerHTML = renderCommentsList(id);
        const countEl = document.getElementById(`commentCountBadge-${id}`);
        if (countEl) countEl.textContent = tributeComments[id].length;
    }
    bootstrap.Modal.getInstance(document.getElementById('shareFeelingModal')).hide();
    alert(`Thank you! Your ${def.name} has been submitted.`);
}

// ============================================
// SEND FLOWERS MODAL
// ============================================
function openSendFlowers(id) {
    currentTributePostId = id;
    // Clear form
    ['flowersName','flowersEmail','flowersPhone','flowersCountry','flowersMessage'].forEach(fid => {
        const el = document.getElementById(fid); if (el) el.value = '';
    });
    new bootstrap.Modal(document.getElementById('sendFlowersModal')).show();
}

function submitFlowersRequest() {
    const name = document.getElementById('flowersName').value.trim();
    const email = document.getElementById('flowersEmail').value.trim();
    const phone = document.getElementById('flowersPhone').value.trim();
    const country = document.getElementById('flowersCountry').value.trim();
    if (!name || !email || !phone || !country) { alert('Please fill in all required fields.'); return; }
    bootstrap.Modal.getInstance(document.getElementById('sendFlowersModal')).hide();
    alert('Your flower request has been submitted! Our team will contact you shortly.');
}

// ============================================
// DONATE MODAL
// ============================================
function openDonate(id) {
    currentTributePostId = id;
    ['donateName','donateEmail','donatePhone','donateCountry','donateAmount','donateNotes'].forEach(fid => {
        const el = document.getElementById(fid); if (el) el.value = '';
    });
    new bootstrap.Modal(document.getElementById('donateModal')).show();
}

function submitDonateRequest() {
    const name = document.getElementById('donateName').value.trim();
    const email = document.getElementById('donateEmail').value.trim();
    const phone = document.getElementById('donatePhone').value.trim();
    const country = document.getElementById('donateCountry').value.trim();
    if (!name || !email || !phone || !country) { alert('Please fill in all required fields.'); return; }
    bootstrap.Modal.getInstance(document.getElementById('donateModal')).hide();
    alert('Thank you for your generous donation! Our team will contact you with bank account details shortly.');
}

// ============================================
// SIDEBAR COUNTRY / POST
// ============================================
function toggleCountry(country) {
    if (expandedCountry === country) { expandedCountry = null; selectedCountry = null; selectedPost = null; filterByPage(currentPage); }
    else {
        expandedCountry = country; selectedCountry = country; selectedPost = null;
        let filtered = obituaries.filter(o => o.country === country);
        if (currentPage === 'obituary') filtered = filtered.filter(o => o.postType === 'Obituary');
        else if (currentPage === 'memorial') filtered = filtered.filter(o => o.postType !== 'Obituary');
        renderObituaries(filtered);
    }
    renderCountries();
}

function selectPost(postName, country) {
    selectedPost = postName; selectedCountry = country; expandedCountry = country;
    renderObituaries(obituaries.filter(o => o.name === postName));
    renderCountries();
}

// ============================================
// RENDER COUNTRIES
// ============================================
function renderCountries() {
    const html = countries.map(c => `
        <div class="country-item">
            <div class="country-header ${expandedCountry === c.name ? 'active' : ''}" onclick="toggleCountry('${c.name}')">
                <span class="country-name">${c.name}</span>
                <span class="country-count">${c.count} Posts</span>
            </div>
            <div class="country-posts ${expandedCountry === c.name ? 'show' : ''}">
                ${c.posts.map(p => `<div class="post-item ${selectedPost === p ? 'active' : ''}" onclick="selectPost('${p}', '${c.name}')">${p}</div>`).join('')}
            </div>
        </div>`).join('');
    const cl = document.getElementById('countriesList'); if (cl) cl.innerHTML = html;
    const cm = document.getElementById('countriesListMobile'); if (cm) cm.innerHTML = html;
}

// ============================================
// RENDER OBITUARIES
// ============================================
function renderObituaries(data = obituaries) {
    const container = document.getElementById('obituaryContainer');
    if (!data.length) { container.innerHTML = '<div style="text-align:center;padding:50px;color:#999;">No obituaries found</div>'; return; }
    container.innerHTML = data.map(obit => {
        initReactions(obit.id);
        const active = userReactions[obit.id];
        const reactionBtns = Object.entries(REACTIONS).map(([type, def]) => {
            const count = reactions[obit.id][type]; const isActive = active === type;
            return `<button class="reaction-btn ${isActive ? 'reaction-active' : ''}" data-type="${type}"
                style="--reaction-color:${isActive ? def.activeColor : def.color}"
                onclick="reactToPost(${obit.id}, '${type}', event)" title="${def.label}">
                <span class="reaction-emoji">${def.emoji}</span>
                <span class="reaction-label">${def.label}</span>
                ${count > 0 ? `<span class="reaction-count">${count}</span>` : ''}
            </button>`;
        }).join('');
        return `
            <div class="obituary-card" data-type="${obit.postType}" onclick="showDetailPage(${obit.id})">
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
                        <div class="tributes-count"><i class="bi bi-heart-fill"></i><span>${obit.tributes} Tributes</span></div>
                        <div class="reaction-group" data-id="${obit.id}">${reactionBtns}</div>
                        <button class="share-btn" onclick="event.stopPropagation(); sharePost(${obit.id})">
                            <i class="bi bi-share-fill"></i> Share
                        </button>
                    </div>
                </div>
            </div>`;
    }).join('');
}

// ============================================
// RENDER TRIBUTES
// ============================================
function renderTributes() {
    const html = recentTributes.map(t => `
        <div class="tribute-item">
            <img src="${t.avatar}" alt="${t.name}" class="tribute-avatar">
            <div class="tribute-info">
                <div class="tribute-name">${t.name}</div>
                <div class="tribute-location">${t.location}</div>
                <div class="tribute-time">${t.time}</div>
            </div>
            <div class="tribute-more">+ ${Math.round(t.tributes / 1000)}K MORE</div>
        </div>`).join('');
    const c = document.getElementById('tributesList'); if (c) c.innerHTML = html;
    const m = document.getElementById('tributesListMobile'); if (m) m.innerHTML = html;
}

// ============================================
// CREATE MEMORIAL
// ============================================
function createMemorial() {
    const postType = document.getElementById('postType').value.trim();
    const name = document.getElementById('memorialName').value;
    const birthDate = document.getElementById('birthDate').value;
    const deathDate = document.getElementById('deathDate').value;
    const country = document.getElementById('country').value;
    const location = document.getElementById('location').value;
    const religion = document.getElementById('religion').value || 'Not specified';
    const biography = document.getElementById('biography').value;
    if (!postType || !name || !birthDate || !deathDate || !country || !location) { alert('Please fill in all required fields'); return; }
    const birthYear = new Date(birthDate).getFullYear();
    const deathYear = new Date(deathDate).getFullYear();
    const newMemorial = {
        id: obituaries.length + 1, name, birth: birthYear.toString(), death: deathYear.toString(),
        location: location + ', ' + country, tributes: 0,
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
        time: "Just now", country, postType, religion, age: deathYear - birthYear,
        biography: biography || "A beloved individual who will be deeply missed."
    };
    obituaries.unshift(newMemorial);
    const co = countries.find(c => c.name === country);
    if (co) { co.count++; co.posts.unshift(name); }
    else countries.push({ name: country, count: 1, posts: [name] });
    filterByPage(currentPage); renderCountries();
    bootstrap.Modal.getInstance(document.getElementById('createMemorialModal')).hide();
    ['postType','memorialName','birthDate','deathDate','country','location','religion','biography'].forEach(id => document.getElementById(id).value = '');
    alert('Memorial created successfully!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// MISC
// ============================================
function downloadMemorial(id) { alert('Memorial card download feature coming soon!'); }

function sharePost(id) {
    const obit = obituaries.find(o => o.id === id);
    if (!obit) return;
    if (navigator.share) {
        navigator.share({ title: obit.name, text: `In memory of ${obit.name} (${obit.birth} - ${obit.death})`, url: window.location.href }).catch(() => {});
    } else {
        const tmp = document.createElement('input'); tmp.value = window.location.href;
        document.body.appendChild(tmp); tmp.select(); document.execCommand('copy'); document.body.removeChild(tmp);
        alert('Link copied to clipboard!');
    }
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
window.addEventListener('scroll', () => {
    const btn = document.querySelector('.scroll-top');
    if (btn) btn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
});

// ============================================
// SEARCH
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const si = document.getElementById('searchInput');
    if (si) {
        si.addEventListener('input', e => {
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
            renderObituaries(filtered); renderCountries();
        });
    }
});

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderCountries();
    renderObituaries();
    renderTributes();
});