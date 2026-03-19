document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    // 2. State Management
    let allPacks = [];
    let currentCategory = '全部';
    let currentLevel = '全部';
    let currentLang = 'tw'; // 'tw' or 'en'
    let searchQuery = '';
    
    const packModal = new bootstrap.Modal(document.getElementById('packModal'));

    // 3. Elements
    const grid = document.getElementById('packs-grid');
    const categoryNav = document.getElementById('category-filters');
    const levelNav = document.getElementById('level-filters');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modalTitle');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const installGuideBtn = document.getElementById('installGuideBtn');
    const searchInput = document.getElementById('feed-search');
    const langBtnTw = document.getElementById('lang-tw');
    const langBtnEn = document.getElementById('lang-en');

    // 4. Load Data
    fetch('feeds/packs.json')
        .then(res => {
            if (!res.ok) throw new Error('無法讀取模組清單。');
            return res.json();
        })
        .then(data => {
            allPacks = data;
            init();
        })
        .catch(err => {
            console.error("Error loading packs:", err);
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="alert alert-warning d-inline-block">
                        <i class="fas fa-exclamation-triangle me-2"></i> 
                        ${currentLang === 'en' ? 'Data loading failed.' : '數據載入失敗。'}
                    </div>
                </div>
            `;
        });

    function init() {
        renderFilters();
        renderPacks();
        initEventListeners();
    }

    function initEventListeners() {
        // Search
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.toLowerCase();
                renderPacks();
            });
        }

        // Language
        if (langBtnTw) {
            langBtnTw.addEventListener('click', () => setLanguage('tw'));
        }
        if (langBtnEn) {
            langBtnEn.addEventListener('click', () => setLanguage('en'));
        }
    }

    function setLanguage(lang) {
        currentLang = lang;
        langBtnTw.classList.toggle('active', lang === 'tw');
        langBtnEn.classList.toggle('active', lang === 'en');
        
        // Update Static Text
        updateStaticText();
        
        // Re-render
        renderFilters();
        renderPacks();
    }

    function updateStaticText() {
        const isEn = currentLang === 'en';
        document.querySelector('.hero-section h1').innerText = isEn ? 'OpenClaw Agent Feeds' : 'OpenClaw 龍蝦升級飼料包';
        document.querySelector('.hero-section p').innerHTML = isEn ? 
            'Premium module library for AI System Architects.<br class="d-none d-md-block">Enhance your AI agents with precision and autonomy.' : 
            '專為 AI 系統架構師打造的技術模組庫。透過標準化的升級組件，<br class="d-none d-md-block">顯著提升 AI 代理的執行精準度、自主性與協作能力。';
        document.querySelector('.buffet-header h2').innerText = isEn ? 'Feed Buffet' : '飼料包 Buffet';
        document.querySelector('.buffet-header p').innerText = isEn ? 'Choose carefully based on your model version' : '請遵照最低建議模型版本慎選餵食';
        if (searchInput) searchInput.placeholder = isEn ? 'Search modules...' : '搜尋模組名稱或描述...';
        if (modalCloseBtn) modalCloseBtn.innerText = isEn ? 'Close' : '關閉';

        // Navbar Links
        const navHome = document.getElementById('nav-home');
        const navGuide = document.getElementById('nav-guide');
        const navCollect = document.getElementById('nav-collect');
        const navContact = document.getElementById('nav-contact');
        const navFb = document.getElementById('nav-fb');

        if (navHome) navHome.innerText = isEn ? 'Home' : '返回主站';
        if (navGuide) navGuide.innerText = isEn ? 'OpenClaw Guide' : 'OpenClaw實戰指南';
        if (navCollect) navCollect.innerText = isEn ? 'AI Collect' : 'AI 工具集';
        if (navContact) navContact.innerText = isEn ? 'Contact' : '聯絡我們';
        if (navFb) navFb.innerHTML = `<i class="fab fa-facebook-f me-2"></i> ${isEn ? 'Follow FB' : '追蹤 FlyPig FB'}`;
    }

    // 5. Renderers
    function renderFilters() {
        const isEn = currentLang === 'en';
        
        // Category Filters
        const categories = ['全部', ...new Set(allPacks.map(p => p.category))];
        if (categoryNav) {
            categoryNav.innerHTML = categories.map(cat => {
                let displayCat = cat === '全部' ? (isEn ? 'All' : '全部模組') : cat.replace('包', '');
                // Simple cat translation for demo (could be improved with a map)
                if (isEn && cat !== '全部') {
                    displayCat = displayCat.replace('核心代理升級', 'Core').replace('自動化擴展', 'Automation').replace('開發者工具', 'Dev Tools').replace('商業智能', 'BI').replace('多模態與安全性', 'Multimodal').replace('垂直專業領域', 'Verticals');
                }
                return `
                    <button class="filter-btn category-btn ${cat === currentCategory ? 'active' : ''}" data-category="${cat}">
                        ${displayCat}
                    </button>
                `;
            }).join('');
        }

        // Level Filters
        const levels = ['全部', '入門', '進階', '專家'];
        const levelsEn = { '全部': 'All Levels', '入門': 'Basic', '進階': 'Advanced', '專家': 'Expert' };
        
        if (levelNav) {
            levelNav.innerHTML = levels.map(lvl => `
                <button class="filter-btn level-btn ${lvl === currentLevel ? 'active' : ''}" data-level="${lvl}">
                    ${isEn ? levelsEn[lvl] : lvl}
                </button>
            `).join('');
        }

        // Re-attach Listeners
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentCategory = e.currentTarget.getAttribute('data-category');
                updateFilterUI();
                renderPacks();
            });
        });

        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                currentLevel = e.currentTarget.getAttribute('data-level');
                updateFilterUI();
                renderPacks();
            });
        });
    }

    function updateFilterUI() {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-category') === currentCategory);
        });
        document.querySelectorAll('.level-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-level') === currentLevel);
        });
    }

    function renderPacks() {
        const filtered = allPacks.filter(p => {
            const matchesCat = currentCategory === '全部' || p.category === currentCategory;
            const matchesLvl = currentLevel === '全部' || p.level === currentLevel;
            const matchesSearch = !searchQuery || 
                p.name.toLowerCase().includes(searchQuery) || 
                p.description.toLowerCase().includes(searchQuery);
            return matchesCat && matchesLvl && matchesSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `<div class="col-12 text-center py-5 text-muted">${currentLang === 'en' ? 'No modules found.' : '目前暫無符合條件的內容。'}</div>`;
            return;
        }

        grid.innerHTML = filtered.map((pack, index) => {
            const isEn = currentLang === 'en';
            return `
                <div class="col-md-6 col-lg-4 col-xl-3" data-aos="fade-up" data-aos-delay="${(index % 4) * 100}">
                    <article class="service-card shadow-sm h-100">
                        <div class="d-flex justify-content-between align-items-start">
                            <span class="category-badge">${isEn ? translateCategory(pack.category) : pack.category}</span>
                            <span class="badge ${getLevelClass(pack.level)}">${isEn ? translateLevel(pack.level) : pack.level}</span>
                        </div>
                        <h3 class="h5 fw-bold mb-3">${pack.name}</h3>
                        <p class="text-muted small mb-4 flex-grow-1">${pack.description}</p>
                        <button onclick="window.app.viewDetails('${pack.id}')" class="btn-view-spec w-100">
                            ${isEn ? 'View Technical Spec' : '查看技術規格'}
                        </button>
                    </article>
                </div>
            `;
        }).join('');
    }

    function translateCategory(cat) {
        if (!cat) return '';
        const trimmedCat = cat.trim();
        const map = {
            '核心代理升級': 'Core Upgrade',
            '自動化擴展包': 'Automation Pack',
            '開發者工具包': 'Dev Tools',
            '商業智能包': 'BI Pack',
            '多模態與安全性': 'Multimodal & Security',
            '垂直專業領域': 'Vertical Specialties'
        };
        return map[trimmedCat] || trimmedCat;
    }

    function translateLevel(lvl) {
        const map = { '入門': 'Basic', '進階': 'Advanced', '專家': 'Expert' };
        return map[lvl] || lvl;
    }

    function getLevelClass(level) {
        switch(level) {
            case '專家': return 'bg-danger';
            case '進階': return 'bg-warning text-dark';
            default: return 'bg-info text-dark';
        }
    }

    // 6. Logic Handlers
    async function fetchMarkdown(path) {
        // Adjust path for language
        let finalPath = path;
        if (currentLang === 'en') {
            finalPath = path.replace('.md', '.en.md');
        }

        const response = await fetch(`feeds/${finalPath}`);
        if (!response.ok) {
            // Fallback to default if English is missing
            if (currentLang === 'en') {
                const retry = await fetch(`feeds/${path}`);
                if (retry.ok) return await retry.text();
            }
            throw new Error(currentLang === 'en' ? 'Document not ready.' : '文件尚未準備就緒。');
        }
        
        const text = await response.text();
        if (text.trim().toLowerCase().startsWith('<!doctype') || text.trim().toLowerCase().startsWith('<html')) {
            throw new Error(currentLang === 'en' ? 'Content is still under construction.' : '該模組文件仍在撰寫中。');
        }
        
        return text;
    }

    function renderMarkdown(md) {
        if (typeof marked !== 'undefined') {
            const renderer = new marked.Renderer();
            renderer.code = function(args, language) {
                let codeText = typeof args === 'string' ? args : args.text;
                let lang = typeof args === 'string' ? language : args.lang;
                
                const escapedCode = codeText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                const copyText = currentLang === 'en' ? 'Copy' : '複製';
                
                return `
                    <div class="code-wrapper">
                        <button class="copy-btn" onclick="window.app.copyToClipboard(this)">${copyText}</button>
                        <pre><code class="language-${lang || ''}">${escapedCode}</code></pre>
                    </div>
                `;
            };

            return marked.parse(md, { renderer });
        }
        return md.replace(/\n\n/g, '<p></p>').replace(/\n/g, '<br>');
    }

    // Copy Tool
    async function copyToClipboard(btn) {
        const code = btn.nextElementSibling.querySelector('code').innerText;
        const isEn = currentLang === 'en';
        try {
            await navigator.clipboard.writeText(code);
            const originalText = btn.innerText;
            btn.innerText = isEn ? 'Copied' : '已複製';
            btn.classList.add('copied');
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('copied');
            }, 2000);
        } catch (err) {
            btn.innerText = isEn ? 'Failed' : '失敗';
        }
    }

    async function viewDetails(packId) {
        const pack = allPacks.find(p => p.id === packId);
        if (!pack) return;

        const isEn = currentLang === 'en';
        modalTitle.innerText = pack.name;
        modalContent.innerHTML = '<div class="loading-overlay"><div class="spinner-border text-primary" role="status"></div></div>';
        installGuideBtn.classList.add('d-none');
        installGuideBtn.innerText = isEn ? 'Installation Guide' : '安裝指南';
        
        packModal.show();

        try {
            const md = await fetchMarkdown(`${pack.path}overview.md`);
            modalContent.innerHTML = renderMarkdown(md);
            
            installGuideBtn.onclick = () => loadInstallGuide(packId);
            installGuideBtn.classList.remove('d-none');
        } catch (err) {
            modalContent.innerHTML = `<div class="alert alert-warning py-4 text-center">
                <i class="fas fa-exclamation-triangle mb-3 d-block fs-3"></i>
                ${err.message}
            </div>`;
        }
    }

    async function loadInstallGuide(packId) {
        const pack = allPacks.find(p => p.id === packId);
        if (!pack) return;
        
        modalContent.innerHTML = '<div class="loading-overlay"><div class="spinner-border text-primary" role="status"></div></div>';
        installGuideBtn.classList.add('d-none');

        try {
            const md = await fetchMarkdown(`${pack.path}installation_guide.md`);
            modalContent.innerHTML = renderMarkdown(md);
        } catch (err) {
            modalContent.innerHTML = `<div class="alert alert-info py-4 text-center">
                ${currentLang === 'en' ? 'Installation guide is coming soon.' : '安裝指南準備中。'}
            </div>`;
        }
    }

    // Expose to global
    window.app = { viewDetails, loadInstallGuide, copyToClipboard };
});

