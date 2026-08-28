# Google Apps Script va Sizning Google Sheets Jadvalingiz Integratsiyasi

Siz taqdim etgan Google Sheets havolasi:  
🔗 **[Google Sheets Jadvalingiz](https://docs.google.com/spreadsheets/d/1mG63yijZTh-QWUY_PR-ENDIZEifwD-E7oBGV8Wh5pbU/edit?usp=sharing)**  
(Spreadsheet ID: `1mG63yijZTh-QWUY_PR-ENDIZEifwD-E7oBGV8Wh5pbU`)

Ushbu yo'riqnoma orqali sayt test natijalarini to'g'ridan-to'g'ri **aynan shu jadvalingizga** yozib boradigan qilib ulaysiz.

---

## 1-QADAM: Google Sheets Jadvalida Sarlavhalarni O'rnatish

1. Taqdim etgan **[Google Sheets jadvalingizni](https://docs.google.com/spreadsheets/d/1mG63yijZTh-QWUY_PR-ENDIZEifwD-E7oBGV8Wh5pbU/edit?usp=sharing)** oching.
2. Birinchi qatorga (1-qator) quyidagi ustun sarlavhalarini kiriting:

| A1 ustun | B1 ustun | C1 ustun | D1 ustun | E1 ustun | F1 ustun |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Sana** | **Ism** | **Familiya** | **To‘g‘ri javoblar soni** | **Jami savollar** | **Foiz** |

---

## 2-QADAM: Google Apps Script Kodini Baza Bilan Ulash

1. Shu jadvalingiz ichida tepadagi menyudan: **Расширения (Extensions / Kengaytmalar)** -> **Apps Script** bo'limiga bosing.
2. Ochilgan sahifadagi barcha matnlarni o'chirib, quyidagi tayyor **Code.gs** kodini joylashtiring:

```javascript
/**
 * CSS Test Backend Server Code
 * Target Sheet ID: 1mG63yijZTh-QWUY_PR-ENDIZEifwD-E7oBGV8Wh5pbU
 */

// Server tomonidagi to'g'ri javoblar kaliti
const ANSWER_KEY = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'B',
  5: 'B',
  6: 'B',
  7: 'B',
  8: 'B',
  9: 'A',
  10: 'A',
  11: 'B',
  12: 'B',
  13: 'B',
  14: 'C',
  15: 'B',
  16: 'C',
  17: 'C',
  18: 'C',
  19: 'B',
  20: 'B'
};

const TOTAL_QUESTIONS = 20;
const SPREADSHEET_ID = '1mG63yijZTh-QWUY_PR-ENDIZEifwD-E7oBGV8Wh5pbU';

function doPost(e) {
  try {
    // Sizning ko'rsatilgan jadvalingizni ID orqali ochish
    let ss;
    try {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    } catch(err) {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    }
    const sheet = ss.getActiveSheet();
    
    // Kelgan JSON ma'lumotni o'qish
    const data = JSON.parse(e.postData.contents);
    const firstname = data.firstname || 'Noma\'lum';
    const lastname = data.lastname || 'Noma\'lum';
    const userAnswers = data.answers || {};

    // Server tomonida to'g'ri javoblarni hisoblash
    let correctCount = 0;
    for (let qId = 1; qId <= TOTAL_QUESTIONS; qId++) {
      if (userAnswers[qId] && userAnswers[qId] === ANSWER_KEY[qId]) {
        correctCount++;
      }
    }

    // Foizni hisoblash
    const percentage = Math.round((correctCount / TOTAL_QUESTIONS) * 100) + '%';

    // Toshkent vaqti bo'yicha sana shakllantirish
    const formattedDate = Utilities.formatDate(new Date(), 'Asia/Tashkent', 'dd.MM.yyyy HH:mm');

    // Jadvalga ma'lumotni yozish
    sheet.appendRow([
      formattedDate,
      firstname,
      lastname,
      correctCount,
      TOTAL_QUESTIONS,
      percentage
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Natija yozildi' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("CSS Test Backend ishlamoqda!");
}
```

3. Tepadagi **Disket (Save)** belgisini bosing (`Ctrl + S`).

---

## 3-QADAM: Web App Sifatida Deploy Qilish (Nusxa olish)

1. Yuqori o'ng burchakdagi **Начать развертывание / Deploy (Joylashtirish)** tugmasini bosing -> **Новое развертывание (New deployment)**.
2. Tishli g'ildirak sozlamasidan **Веб-приложение (Web app)** turini tanlang.
3. Sozlamalar:
   - **Описание (Description)**: `CSS Test Backend`
   - **Выполнять от имени (Execute as)**: `Я (Me)` (Sizning e-pochtangiz)
   - **У кого есть доступ (Who has access)**: `Все (Anyone)` **<- JUDA MUHIM!**
4. **Развернуть (Deploy)** tugmasini bosing va Google so'ragan ruxsatlarni berish uchun **Предоставить доступ (Authorize access)** tugmasini bosing.
5. Tayyor bo'lgan **URL manzilini (Web App URL)** nusxalab oling.
   *(U quyidagiga o'xshaydi: `https://script.google.com/macros/s/AKfycb.../exec`)*

---

## 4-QADAM: URL Manzilini Saytga Joylashtirish

Olingan URL manzilini test tugaganda chiqadigan modal oynadagi **Google Apps Script URL** katagiga bir marta kiritsangiz, brauzer uni avtomatik eslab qoladi!
