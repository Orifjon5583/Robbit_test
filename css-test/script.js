// CSS Test Application Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // 20 CSS Questions Data (Note: NO answer keys stored in client JS)
    const questions = [
        {
            id: 1,
            topic: "Selektorlar",
            title: "1. Quyidagi CSS selektorlaridan qaysisi id=\"header\" atributiga ega bo'lgan yagona HTML elementini tanlaydi?",
            options: [
                "A) .header { color: red; }",
                "B) #header { color: red; }",
                "C) *header { color: red; }",
                "D) header { color: red; }"
            ]
        },
        {
            id: 2,
            topic: "Color",
            title: "2. Rangdagi shaffoflikni (opacity/transparency) belgilash uchun qaysi rang formati ishlatiladi?",
            code: `.card {
    background-color: rgba(37, 99, 235, 0.5);
}`,
            options: [
                "A) HEX formati",
                "B) RGB formati",
                "C) RGBA formati (oxirgi a - alpha shaffoflik qiymati)",
                "D) HSL formati"
            ]
        },
        {
            id: 3,
            topic: "Font-size",
            title: "3. Shrift o'lchamini brauzerning asosiy (root) shrift o'lchamiga nisbatan moslashuvchan (responsive) belgilash uchun qaysi o'lchov birligidan foydalaniladi?",
            code: `h1 {
    font-size: 2rem;
}`,
            options: [
                "A) px (Pixel)",
                "B) rem (Root EM)",
                "C) pt (Point)",
                "D) cm (Centimeter)"
            ]
        },
        {
            id: 4,
            topic: "Google Fonts",
            title: "4. Tashqi Google Fonts shriftini HTML hujjatining <head> qismiga ulash uchun qaysi teg ishlatiladi?",
            code: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">`,
            options: [
                "A) <script>",
                "B) <link>",
                "C) <font>",
                "D) <style>"
            ]
        },
        {
            id: 5,
            topic: "Box Model",
            title: "5. Element kengligiga padding va border o'lchamlarini kiritib, umumiy kenglik oshib ketishining oldini oluvchi xossa qaysi?",
            code: `* {
    box-sizing: border-box;
}`,
            options: [
                "A) box-sizing: content-box;",
                "B) box-sizing: border-box;",
                "C) box-sizing: padding-box;",
                "D) display: block;"
            ]
        },
        {
            id: 6,
            topic: "Margin",
            title: "6. Belgilangan kenglikka ega bo'lgan blok (block) elementni sahifaning gorizontal o'rtasiga keltirish uchun qaysi margin kodi ishlatiladi?",
            code: `.container {
    width: 800px;
    margin: 0 auto;
}`,
            options: [
                "A) margin: center;",
                "B) margin: 0 auto;",
                "C) margin: auto 0;",
                "D) margin: 10px 10px;"
            ]
        },
        {
            id: 7,
            topic: "Padding",
            title: "7. CSS Box Model'da padding va margin o'rtasidagi asosiy farq nimadan iborat?",
            code: `.box {
    margin: 20px;
    padding: 15px;
}`,
            options: [
                "A) padding - element chegarasidan tashqaridagi masofa, margin - ichki masofa",
                "B) padding - element chegarasi ichidagi masofa, margin - tashqi masofa",
                "C) Ikkalasi ham bir xil vazifani bajaradi",
                "D) padding faqat rang berish uchun ishlatiladi"
            ]
        },
        {
            id: 8,
            topic: "Border",
            title: "8. Quyidagi CSS kodi element atrofida qanday chegara hosil qiladi?",
            code: `.card {
    border: 2px solid #2563eb;
    border-radius: 12px;
}`,
            options: [
                "A) 2px uzuk-uzuk chiziqli ko'k chegara va to'g'ri burchak",
                "B) 2px yaxlit ko'k chegara va 12px yumaloqlashgan burchaklar",
                "C) 12px qalinlikdagi qizil chegara",
                "D) Chegara umuman ko'rinmaydi"
            ]
        },
        {
            id: 9,
            topic: "Flexbox Direction",
            title: "9. Flexbox container ichidagi elementlarni vertikal (ustun shaklida) joylashtirish uchun qaysi xossa ishlatiladi?",
            code: `.flex-container {
    display: flex;
    flex-direction: column;
}`,
            options: [
                "A) flex-direction: row;",
                "B) flex-direction: column;",
                "C) flex-wrap: wrap;",
                "D) align-items: stretch;"
            ]
        },
        {
            id: 10,
            topic: "Flexbox Justify",
            title: "10. Flexbox container ichidagi elementlarni asosiy o'q bo'yicha chetki va o'rta masofalarni teng bo'lib joylashtirish uchun qaysi qiymat ishlatiladi?",
            code: `.navbar {
    display: flex;
    justify-content: space-between;
}`,
            options: [
                "A) justify-content: flex-start;",
                "B) justify-content: space-between;",
                "C) justify-content: center;",
                "D) align-content: space-around;"
            ]
        },
        {
            id: 11,
            topic: "Flexbox Align",
            title: "11. Flexbox container ichidagi elementlarni ikkinchi o'q (cross axis) bo'yicha vertikal o'rtaga keltirish uchun qaysi xossa ishlatiladi?",
            code: `.header {
    display: flex;
    align-items: center;
}`,
            options: [
                "A) align-items: center;",
                "B) justify-content: top;",
                "C) text-align: middle;",
                "D) float: center;"
            ]
        },
        {
            id: 12,
            topic: "Flexbox Wrap & Gap",
            title: "12. Flexbox container ichidagi elementlar sig'may qolganda ularni avtomatik keyingi qatorga o'tkazish va oraliq masofa berish uchun qaysi xossalar ishlatiladi?",
            code: `.grid-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}`,
            options: [
                "A) flex-wrap: nowrap; va margin: 0;",
                "B) flex-wrap: wrap; va gap: 20px;",
                "C) display: block; va padding: 20px;",
                "D) flex-direction: inline;"
            ]
        },
        {
            id: 13,
            topic: "Grid Columns",
            title: "13. CSS Grid'da teng 3 ustunli tarmoq (layout) yaratish uchun qaysi qisqa kod ishlatiladi?",
            code: `.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}`,
            options: [
                "A) grid-template-columns: 3fr;",
                "B) grid-template-columns: repeat(3, 1fr);",
                "C) grid-columns: 3;",
                "D) display: flex; flex-columns: 3;"
            ]
        },
        {
            id: 14,
            topic: "Grid Gap",
            title: "14. CSS Grid katakchalari (cell) orasidagi vertikal va gorizontal bo'shliqni o'rnatuvchi xossa qaysi?",
            code: `.gallery {
    display: grid;
    gap: 15px;
}`,
            options: [
                "A) margin-box: 15px;",
                "B) gap: 15px; (yoki grid-gap: 15px;)",
                "C) padding-grid: 15px;",
                "D) cell-spacing: 15px;"
            ]
        },
        {
            id: 15,
            topic: "Grid Column Span",
            title: "15. CSS Grid elementini ketma-ket 2 ta ustun kengligicha egallashi (cho'zilishi) uchun qaysi xossa yoziladi?",
            code: `.featured-card {
    grid-column: span 2;
}`,
            options: [
                "A) grid-column: span 2;",
                "B) grid-width: 2;",
                "C) column-span: all;",
                "D) flex-grow: 2;"
            ]
        },
        {
            id: 16,
            topic: "Grid Place Items",
            title: "16. CSS Grid ichidagi elementi bir vaqtning o'zida ham gorizontal, ham vertikal tamomila o'rtaga keltirish uchun qaysi qisqa xossa ishlatiladi?",
            code: `.hero-grid {
    display: grid;
    place-items: center;
}`,
            options: [
                "A) align-content: middle;",
                "B) place-items: center;",
                "C) grid-align: center;",
                "D) text-align: center;"
            ]
        },
        {
            id: 17,
            topic: "Position Absolute",
            title: "17. Elementga position: absolute; berilganda, u qaysi ota elementga nisbatan joylashadi?",
            code: `.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 10px;
    right: 10px;
}`,
            options: [
                "A) Har doim brauzer oynasining eng tepasiga nisbatan",
                "B) position qiymati static bo'lmagan eng yaqin ota elementga nisbatan",
                "C) Faqat <body> tegiga nisbatan",
                "D) Qo'shni elementga nisbatan"
            ]
        },
        {
            id: 18,
            topic: "Position Fixed",
            title: "18. Sahifa scroll qilinganda ham ekranning belgilangan joyida qimirlamay yopishib turadigan position qiymati qaysi?",
            code: `.navbar-fixed {
    position: fixed;
    top: 0;
    width: 100%;
}`,
            options: [
                "A) position: static;",
                "B) position: relative;",
                "C) position: fixed;",
                "D) position: inherit;"
            ]
        },
        {
            id: 19,
            topic: "Media Query",
            title: "19. Ekran kengligi 768px va undan kichik bo'lgan mobil qurilmalar uchun stillar yozishda qaysi Media Query strukturasi to'g'ri?",
            code: `@media (max-width: 768px) {
    .sidebar {
        display: none;
    }
}`,
            options: [
                "A) @media (min-width: 768px)",
                "B) @media (max-width: 768px)",
                "C) @device (screen-width: 768px)",
                "D) @responsive (mobile: 768px)"
            ]
        },
        {
            id: 20,
            topic: "Z-Index",
            title: "20. Elementlarning ustma-ust (z-o'qi bo'yicha) qatlamlanish tartibini belgilovchi z-index xossasi ishlashi uchun elementda qaysi shart bajarilgan bo'lishi kerak?",
            code: `.modal {
    position: relative;
    z-index: 100;
}`,
            options: [
                "A) Element display: none; bo'lishi kerak",
                "B) Elementning position qiymati static'dan boshqa qiymatga (relative, absolute, fixed, sticky) ega bo'lishi kerak",
                "C) Elementda margin bo'lishi shart",
                "D) Element faqat matn bo'lishi kerak"
            ]
        }
    ];

    // Fisher-Yates Shuffle Algorithm to randomize question order every test run
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Randomize questions order on page load
    shuffleArray(questions);

    // State Variables
    let currentIndex = 0;
    const userAnswers = {}; // Map question id (1..20) -> selected option key ('A', 'B', 'C', 'D')

    let isTestActive = false;
    let isTestCompleted = false;
    let timerInterval = null;
    let timeRemaining = 20 * 60; // 20 minutes in seconds (1200s)
    let warningCount = 0;
    const MAX_WARNINGS = 3;

    // DOM Elements
    const welcomeCard = document.getElementById('welcome-card');
    const btnStartTest = document.getElementById('btn-start-test');
    const testCard = document.getElementById('test-card');
    const infoGrid = document.getElementById('info-grid');
    const successCard = document.getElementById('success-card');
    
    const questionCounter = document.getElementById('question-counter');
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const timerBadge = document.getElementById('timer-badge');
    const timerText = document.getElementById('timer-text');
    
    const questionTitle = document.getElementById('question-title');
    const codeContainer = document.getElementById('code-container');
    const codeBlock = document.getElementById('code-block');
    const optionsContainer = document.getElementById('options-container');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    
    const submitModal = document.getElementById('submit-modal');
    const submitModalDesc = document.getElementById('submit-modal-desc');
    const studentForm = document.getElementById('student-form');
    const btnBackToTest = document.getElementById('btn-back-to-test');
    const btnSubmit = document.getElementById('btn-submit');
    const submitSpinner = document.getElementById('submit-spinner');
    const scriptUrlInput = document.getElementById('script-url');

    const cheatWarningModal = document.getElementById('cheat-warning-modal');
    const btnContinueTest = document.getElementById('btn-continue-test');
    const warningCountText = document.getElementById('warning-count-text');

    // Default or Saved Apps Script URL
    const USER_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxxNkBt4Y-mFv5tNAqTpyynD96A1mHPdzVf97WOyIWY395ohFGI-LAV-WFUHpnL9ZnC/exec';
    const defaultScriptUrl = localStorage.getItem('css_test_script_url') || USER_WEB_APP_URL;
    if (scriptUrlInput) {
        scriptUrlInput.value = defaultScriptUrl;
        scriptUrlInput.addEventListener('change', (e) => {
            localStorage.setItem('css_test_script_url', e.target.value.trim());
        });
    }

    // Helper: Code Syntax Highlighting for CSS
    function highlightCSS(codeStr) {
        if (!codeStr) return '';
        // Escape HTML
        let esc = codeStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        // Match CSS Selectors (before '{')
        esc = esc.replace(/([a-zA-Z0-9_\-\.\:\@\s,]+)(?=\{)/g, '<span class="code-selector">$1</span>');
        // Match CSS Properties (word before ':')
        esc = esc.replace(/([a-zA-Z\-]+)\s*:/g, '<span class="code-property">$1</span>:');
        // Match CSS Values (after ':' until ';')
        esc = esc.replace(/:\s*([^;\}\n]+)/g, ': <span class="code-value">$1</span>');
        
        return esc;
    }

    // Helper: Escape HTML special characters for safe option text rendering
    function escapeHTML(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // Render Current Question
    function renderQuestion() {
        const q = questions[currentIndex];
        const total = questions.length;
        const currentNum = currentIndex + 1;
        const pct = Math.round((currentNum / total) * 100);

        // Update Progress
        questionCounter.textContent = `${currentNum} / ${total} savol`;
        progressFill.style.width = `${pct}%`;
        progressPercentage.textContent = `${pct}%`;

        // Update Title
        const cleanTitle = q.title.replace(/^\d+\.\s*/, '');
        questionTitle.textContent = `${currentNum}. ${cleanTitle}`;

        // Update Code Block
        if (q.code) {
            codeBlock.innerHTML = highlightCSS(q.code);
            codeContainer.classList.remove('hidden');
        } else {
            codeContainer.classList.add('hidden');
            codeBlock.textContent = '';
        }

        // Render Options
        optionsContainer.innerHTML = '';
        const optionKeys = ['A', 'B', 'C', 'D'];

        q.options.forEach((optText, idx) => {
            const optKey = optionKeys[idx];
            const isSelected = userAnswers[q.id] === optKey;

            const card = document.createElement('div');
            card.className = `option-card ${isSelected ? 'selected' : ''}`;
            card.setAttribute('role', 'radio');
            card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
            card.setAttribute('tabindex', '0');

            card.innerHTML = `
                <div class="radio-indicator">
                    <div class="radio-inner-dot"></div>
                </div>
                <div class="option-text">${escapeHTML(optText)}</div>
            `;

            // Click Handler
            card.addEventListener('click', () => {
                selectOption(q.id, optKey);
            });

            // Keyboard accessibility (Space/Enter)
            card.addEventListener('keydown', (e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    selectOption(q.id, optKey);
                }
            });

            optionsContainer.appendChild(card);
        });

        // Update Navigation Buttons
        btnPrev.disabled = currentIndex === 0;

        if (currentIndex === total - 1) {
            btnNext.innerHTML = `
                Testni yakunlash
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `;
            btnNext.className = 'btn btn-finish';
        } else {
            btnNext.innerHTML = `
                Keyingi savol
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            `;
            btnNext.className = 'btn btn-primary';
        }
    }

    // Select Option Action
    function selectOption(questionId, optionKey) {
        userAnswers[questionId] = optionKey;
        renderQuestion();
    }

    // Navigation Event Handlers
    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    btnNext.addEventListener('click', () => {
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            renderQuestion();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Reached Question 20 -> Open Submit Modal
            openSubmitModal();
        }
    });

    // Modal Control Functions
    function openSubmitModal() {
        submitModal.classList.remove('hidden');
    }

    function closeSubmitModal() {
        submitModal.classList.add('hidden');
    }

    btnBackToTest.addEventListener('click', closeSubmitModal);

    // Form Submission & Google Apps Script Integration
    studentForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const firstname = document.getElementById('firstname').value.trim();
        const lastname = document.getElementById('lastname').value.trim();
        const customUrl = scriptUrlInput ? scriptUrlInput.value.trim() : '';

        if (!firstname || !lastname) {
            alert('Iltimos, ismingiz va familiyangizni kiriting!');
            return;
        }

        // Show Spinner
        const btnTextSpan = btnSubmit.querySelector('.btn-text');
        btnTextSpan.textContent = 'YUBORILMOQDA...';
        btnSubmit.disabled = true;
        submitSpinner.classList.remove('hidden');

        // Payload structure
        const payload = {
            firstname: firstname,
            lastname: lastname,
            answers: userAnswers, // { 1: 'A', 2: 'B', ... }
            timestamp: new Date().toISOString()
        };

        const targetUrl = customUrl || localStorage.getItem('css_test_script_url') || USER_WEB_APP_URL;

        try {
            if (targetUrl) {
                // Submit to Google Apps Script Web App
                await fetch(targetUrl, {
                    method: 'POST',
                    mode: 'no-cors', // standard mode for Google Apps Script redirects
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
            } else {
                // If no backend URL configured, simulate realistic async response delay for demonstration
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log('Test payload prepared (No GAS URL specified):', payload);
            }

            // Hide Modal and show Success View
            isTestCompleted = true;
            isTestActive = false;
            if (timerInterval) clearInterval(timerInterval);

            closeSubmitModal();
            testCard.classList.add('hidden');
            infoGrid.classList.add('hidden');
            successCard.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (err) {
            console.error('Submission error:', err);
            isTestCompleted = true;
            isTestActive = false;
            if (timerInterval) clearInterval(timerInterval);

            closeSubmitModal();
            testCard.classList.add('hidden');
            infoGrid.classList.add('hidden');
            successCard.classList.remove('hidden');
        } finally {
            btnTextSpan.textContent = 'YUBORISH';
            btnSubmit.disabled = false;
            submitSpinner.classList.add('hidden');
        }
    });

    // Start Test Handler
    if (btnStartTest) {
        btnStartTest.addEventListener('click', () => {
            welcomeCard.classList.add('hidden');
            testCard.classList.remove('hidden');
            infoGrid.classList.remove('hidden');
            isTestActive = true;
            
            startTimer();
            renderQuestion();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Timer Functions
    function startTimer() {
        updateTimerDisplay();
        timerInterval = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                onTimeExpired();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        if (!timerText) return;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        
        timerText.textContent = `${formattedMinutes}:${formattedSeconds}`;

        if (timeRemaining <= 120 && timerBadge) { // Under 2 minutes
            timerBadge.classList.add('warning');
        }
    }

    function onTimeExpired() {
        isTestActive = false;
        if (submitModalDesc) {
            submitModalDesc.textContent = "⏱ Vaqt tugadi! Javoblaringizni yuborish uchun ism va familiyangizni kiriting.";
        }
        openSubmitModal();
    }

    // Anti-Cheat & Security Guards
    function triggerSecurityWarning() {
        if (!isTestActive || isTestCompleted) return;
        
        warningCount++;
        if (warningCountText) {
            warningCountText.textContent = `Ogohlantirish: ${warningCount} / ${MAX_WARNINGS}`;
        }

        if (warningCount >= MAX_WARNINGS) {
            isTestActive = false;
            if (timerInterval) clearInterval(timerInterval);
            if (submitModalDesc) {
                submitModalDesc.textContent = "⚠️ Boshqa vkladkaga o'tishlar soni 3 martaga yetgani sababli test to'xtatildi. Javoblaringizni yuboring.";
            }
            if (cheatWarningModal) cheatWarningModal.classList.add('hidden');
            openSubmitModal();
        } else {
            if (cheatWarningModal) cheatWarningModal.classList.remove('hidden');
        }
    }

    if (btnContinueTest) {
        btnContinueTest.addEventListener('click', () => {
            if (cheatWarningModal) cheatWarningModal.classList.add('hidden');
        });
    }

    // Detect Tab Switch / Window Blur
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            triggerSecurityWarning();
        }
    });

    window.addEventListener('blur', () => {
        triggerSecurityWarning();
    });

    // Disable Right-Click Context Menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // Disable Copy, Cut, Paste
    document.addEventListener('copy', (e) => e.preventDefault());
    document.addEventListener('cut', (e) => e.preventDefault());
    document.addEventListener('paste', (e) => e.preventDefault());

    // Disable Developer Tools Shortcuts & PrintScreen
    document.addEventListener('keydown', (e) => {
        // F12 key
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S, Ctrl+P
        if (e.ctrlKey && (e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c') || e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) {
            e.preventDefault();
            return false;
        }
    });

    // Initial Setup
    renderQuestion();
});
