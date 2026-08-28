// CSS Test Application Logic
document.addEventListener('DOMContentLoaded', () => {
    
    // 20 CSS Questions Data (Note: NO answer keys stored in client JS)
    const questions = [
        {
            id: 1,
            topic: "CSS nima",
            title: "1. CSS atamasi nimaning qisqartmasi hisoblanadi va u nimaga xizmat qiladi?",
            options: [
                "A) Cascading Style Sheets — Web-sahifalarning ko'rinishi va stilini bezash uchun xizmat qiladi",
                "B) Computer System Styles — Kompyuter tizimi sozlamalarini boshqarish uchun xizmat qiladi",
                "C) Creative Style Solutions — Rasmlar va videolarni tahrirlash uchun xizmat qiladi",
                "D) Coding Style Syntax — Ma'lumotlar bazasi bilan ishlash uchun xizmat qiladi"
            ]
        },
        {
            id: 2,
            topic: "CSS ulash usullari",
            title: "2. Tashqi (external) CSS faylini HTML hujjatiga ulash uchun qaysi teg va atributlardan to'g'ri foydalanilgan?",
            code: `<link rel="stylesheet" href="style.css">`,
            options: [
                "A) <script src=\"style.css\"></script>",
                "B) <link rel=\"stylesheet\" href=\"style.css\">",
                "C) <style src=\"style.css\"></style>",
                "D) <css href=\"style.css\"></css>"
            ]
        },
        {
            id: 3,
            topic: "Selector",
            title: "3. Quyidagi CSS kodi qaysi HTML elementlariga amal qiladi?",
            code: `.card {
    background-color: #ffffff;
    border-radius: 8px;
}`,
            options: [
                "A) Faqat <card> nomli maxsus HTML tegiga",
                "B) id=\"card\" atributiga ega bo'lgan elementga",
                "C) class=\"card\" atributiga ega bo'lgan barcha elementlarga",
                "D) Saytdagi barcha div elementlariga"
            ]
        },
        {
            id: 4,
            topic: "Color",
            title: "4. Quyidagi CSS kodida color xossasi nimani o'zgartiradi?",
            code: `h1 {
    color: #2563eb;
}`,
            options: [
                "A) h1 elementining orqa fon rangini",
                "B) h1 elementining matn (harflar) rangini",
                "C) h1 elementining chegarasi (border) rangini",
                "D) h1 elementining soyasi rangini"
            ]
        },
        {
            id: 5,
            topic: "Background",
            title: "5. Quyidagi CSS kodi nima natija beradi?",
            code: `body {
    background-color: #f8fafc;
    background-image: url('pattern.png');
    background-repeat: no-repeat;
    background-size: cover;
}`,
            options: [
                "A) Orqa fon takrorlanuvchi kichik naqsh holatida ko'rinadi",
                "B) Orqa fon rasmi butun ekranni egallaydi va takrorlanmaydi",
                "C) Orqa fon faqat sahifaning tepasida ko'rinadi",
                "D) Orqa fon rasmi shaffof holatga keladi"
            ]
        },
        {
            id: 6,
            topic: "Font-size",
            title: "6. Matn o'lchamini nisbiy (responsive) tarzda o'rnatish uchun qaysi birlik tavsiya etiladi?",
            options: [
                "A) px (Pixel)",
                "B) rem (Root EM)",
                "C) pt (Point)",
                "D) cm (Centimeter)"
            ]
        },
        {
            id: 7,
            topic: "Font-family",
            title: "7. Quyidagi CSS kodida sans-serif nima vazifani bajaradi?",
            code: `p {
    font-family: 'Inter', Arial, sans-serif;
}`,
            options: [
                "A) Asosiy font bo'lib xizmat qiladi",
                "B) Inter va Arial fontlari kompyuterda bo'lmasa, zaxira (fallback) shrift sifatida ishlatiladi",
                "C) Matnni qalin (bold) ko'rinishga keltirib beradi",
                "D) Matn burchaklarini yumaloqlaydi"
            ]
        },
        {
            id: 8,
            topic: "Text-align",
            title: "8. Quyidagi CSS kodi nima natija beradi?",
            code: `p {
    color: blue;
    font-size: 20px;
    text-align: center;
}`,
            options: [
                "A) Matn ko'k rangda, 20px o'lchamda va chap tomonga tekislanadi",
                "B) Matn ko me ko'k rangda, 20px o'lchamda va o'rtaga tekislanadi",
                "C) Matn qizil rangda, 20px o'lchamda va o'rtaga tekislanadi",
                "D) Matn ko'k rangda, 30px o'lchamda va o'rtaga tekislanadi"
            ]
        },
        {
            id: 9,
            topic: "Margin",
            title: "9. Elementni vertikal 20px va gorizontal o'rtaga joylashtirish uchun qaysi margin qisqa kodi to'g'ri?",
            code: `.container {
    width: 800px;
    margin: 20px auto;
}`,
            options: [
                "A) margin: 20px auto;",
                "B) margin: auto 20px;",
                "C) margin: 20px 20px;",
                "D) margin: center 20px;"
            ]
        },
        {
            id: 10,
            topic: "Padding",
            title: "10. Elementning ichki masofasini (padding) belgilovchi ushbu kod nimani anglatadi?",
            code: `.box {
    padding: 10px 20px 15px 5px;
}`,
            options: [
                "A) Tepadan 10px, o'ngdan 20px, pastdan 15px, chapdan 5px",
                "B) Chapdan 10px, pastdan 20px, o'ngdan 15px, tepadan 5px",
                "C) Barcha tomonlardan 10px va 20px dan",
                "D) Tepadan va chapdan 10px, o'ngdan va pastdan 20px"
            ]
        },
        {
            id: 11,
            topic: "Border",
            title: "11. Quyidagi kod orqali element atrofida qanday chegara hosil bo'ladi?",
            code: `.btn {
    border: 2px solid #2563eb;
}`,
            options: [
                "A) 2px qalinlikdagi uzuk-uzuk (dashed) ko'k chegara",
                "B) 2px qalinlikdagi yaxlit (solid) ko'k chegara",
                "C) 2px qalinlikdagi nuqtali (dotted) qizil chegara",
                "D) Chegara umuman ko'rinmaydi"
            ]
        },
        {
            id: 12,
            topic: "Width",
            title: "12. Element kengligini ota element kengligining yarmiga tenglashtirish uchun qaysi qiymat beriladi?",
            options: [
                "A) width: 50px;",
                "B) width: 50%;",
                "C) width: 50vw;",
                "D) width: half;"
            ]
        },
        {
            id: 13,
            topic: "Height",
            title: "13. Elementning minimal balandligini ekranning to'liq balandligiga tenglashtirish uchun qaysi kod ishlatiladi?",
            options: [
                "A) min-height: 100%;",
                "B) min-height: 100vh;",
                "C) height: 100px;",
                "D) max-height: 100 screen;"
            ]
        },
        {
            id: 14,
            topic: "Display",
            title: "14. Quyidagi display qiymatlaridan qaysisi elementni ekranda umuman ko'rsatmaydi va o'rnini ham saqlamaydi?",
            options: [
                "A) display: block;",
                "B) display: inline;",
                "C) display: none;",
                "D) display: hidden;"
            ]
        },
        {
            id: 15,
            topic: "Flexbox",
            title: "15. Flexbox container ichidagi elementlarni gorizontal o'q bo'yicha o'rtaga joylashtirish uchun qaysi xossa ishlatiladi?",
            code: `.flex-container {
    display: flex;
    justify-content: center;
}`,
            options: [
                "A) align-items: center;",
                "B) justify-content: center;",
                "C) flex-direction: center;",
                "D) text-align: middle;"
            ]
        },
        {
            id: 16,
            topic: "Position",
            title: "16. Sahifa scroll qilinganda ham ekranning ma'lum bir joyida qimirlamay turadigan position qiymati qaysi?",
            options: [
                "A) position: relative;",
                "B) position: absolute;",
                "C) position: fixed;",
                "D) position: static;"
            ]
        },
        {
            id: 17,
            topic: "Border-radius",
            title: "17. Kvadrat shaklidagi elementni mukammal doira (circle) holatiga keltirish uchun border-radius nechaga teng bo'lishi kerak?",
            code: `.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}`,
            options: [
                "A) 10px",
                "B) 25%",
                "C) 50%",
                "D) 100px 0"
            ]
        },
        {
            id: 18,
            topic: "Box-shadow",
            title: "18. Quyidagi CSS box-shadow kodidagi 3-qiymat (10px) nimani anglatadi?",
            code: `.card {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}`,
            options: [
                "A) Soya gorizontal surilishi (offset-x)",
                "B) Soya vertikal surilishi (offset-y)",
                "C) Soyaning xiralashish darajasi (blur radius)",
                "D) Soyaning tarqalish darajasi (spread radius)"
            ]
        },
        {
            id: 19,
            topic: "Hover",
            title: "19. Foydalanuvchi sichqoncha ko'rsatkichini tugma ustiga olib borganda stili o'zgarishi uchun qaysi psevdo-klass ishlatiladi?",
            code: `.button:hover {
    background-color: #1d4ed8;
}`,
            options: [
                "A) .button:active",
                "B) .button:hover",
                "C) .button:focus",
                "D) .button:visited"
            ]
        },
        {
            id: 20,
            topic: "Media query",
            title: "20. Quyidagi media query qanday qurilmalar uchun amal qiladi?",
            code: `@media (max-width: 768px) {
    .sidebar {
        display: none;
    }
}`,
            options: [
                "A) Ekran kengligi 768px va undan katta bo'lgan kompyuterlar uchun",
                "B) Ekran kengligi 768px yoki undan kichik bo'lgan mobil va tablet qurilmalar uchun",
                "C) Faqat barcha turdagi printerlar uchun",
                "D) Faqat 4K o'lchamli televizorlar uchun"
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

    // DOM Elements
    const questionCounter = document.getElementById('question-counter');
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const questionTitle = document.getElementById('question-title');
    const codeContainer = document.getElementById('code-container');
    const codeBlock = document.getElementById('code-block');
    const optionsContainer = document.getElementById('options-container');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    
    const submitModal = document.getElementById('submit-modal');
    const studentForm = document.getElementById('student-form');
    const btnBackToTest = document.getElementById('btn-back-to-test');
    const btnSubmit = document.getElementById('btn-submit');
    const submitSpinner = document.getElementById('submit-spinner');
    const scriptUrlInput = document.getElementById('script-url');
    
    const testCard = document.getElementById('test-card');
    const infoGrid = document.getElementById('info-grid');
    const successCard = document.getElementById('success-card');

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
                <div class="option-text">${optText}</div>
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
            closeSubmitModal();
            testCard.classList.add('hidden');
            infoGrid.classList.add('hidden');
            successCard.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (err) {
            console.error('Submission error:', err);
            // Even in case of network issue, transition cleanly or alert user
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

    // Initial Render
    renderQuestion();
});
