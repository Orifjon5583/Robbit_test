# Google Apps Script va Sizning Google Sheets Jadvalingiz Integratsiyasi (HTML, CSS & JS)

Siz taqdim etgan Google Sheets havolasi:  
🔗 **[Google Sheets Jadvalingiz](https://docs.google.com/spreadsheets/d/1mG63yijZTh-QWUY_PR-ENDIZEifwD-E7oBGV8Wh5pbU/edit?usp=sharing)**  
(Spreadsheet ID: `1mG63yijZTh-QWUY_PR-ENDIZEifwD-E7oBGV8Wh5pbU`)

Ushbu yo'riqnoma orqali **HTML**, **CSS** va **JavaScript (JS)** test natijalarini to'g'ridan-to'g'ri **aynan shu jadvalingizga** yozib boradigan qilib ulaysiz.

---

## 1-QADAM: Google Sheets Jadvalida Sarlavhalarni O'rnatish

1. Taqdim etgan **[Google Sheets jadvalingizni](https://docs.google.com/spreadsheets/d/1mG63yijZTh-QWUY_PR-ENDIZEifwD-E7oBGV8Wh5pbU/edit?usp=sharing)** oching.
2. Birinchi qatorga (1-qator) quyidagi ustun sarlavhalarini kiriting:

| A1 ustun | B1 ustun | C1 ustun | D1 ustun | E1 ustun | F1 ustun | G1 ustun |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Sana** | **Ism** | **Familiya** | **Fan** | **To‘g‘ri javoblar soni** | **Jami savollar** | **Foiz** |

---

## 2-QADAM: Google Apps Script Kodini Baza Bilan Ulash

1. Shu jadvalingiz ichida tepadagi menyudan: **Расширения (Extensions / Kengaytmalar)** -> **Apps Script** bo'limiga bosing.
2. Ochilgan sahifadagi barcha matnlarni o'chirib, quyidagi yangilangan **Code.gs** kodini joylashtiring:

```javascript
/**
 * HTML, CSS & JS Test Backend Server Code
 * Target Sheet ID: 1mG63yijZTh-QWUY_PR-ENDIZEifwD-E7oBGV8Wh5pbU
 */

// HTML Test javoblar kaliti
const ANSWER_KEY_HTML = {
  1: 'A',
  2: 'B',
  3: 'B',
  4: 'A',
  5: 'B',
  6: 'B',
  7: 'B',
  8: 'B',
  9: 'B',
  10: 'B',
  11: 'B',
  12: 'B',
  13: 'B',
  14: 'B',
  15: 'B',
  16: 'B',
  17: 'B',
  18: 'B',
  19: 'B',
  20: 'B'
};

// CSS Test javoblar kaliti
const ANSWER_KEY_CSS = {
  1: 'B',
  2: 'C',
  3: 'B',
  4: 'B',
  5: 'B',
  6: 'B',
  7: 'B',
  8: 'B',
  9: 'B',
  10: 'B',
  11: 'A',
  12: 'B',
  13: 'B',
  14: 'B',
  15: 'A',
  16: 'B',
  17: 'B',
  18: 'C',
  19: 'B',
  20: 'B'
};

// JavaScript (JS) Test javoblar kaliti
const ANSWER_KEY_JS = {
  1: 'A',
  2: 'B',
  3: 'B',
  4: 'B',
  5: 'B',
  6: 'A',
  7: 'A',
  8: 'B',
  9: 'B',
  10: 'B',
  11: 'B',
  12: 'A',
  13: 'A',
  14: 'B',
  15: 'B',
  16: 'A',
  17: 'A',
  18: 'B',
  19: 'B',
  20: 'B'
};

const TOTAL_QUESTIONS = 20;
const SPREADSHEET_ID = '1mG63yijZTh-QWUY_PR-ENDIZEifwD-E7oBGV8Wh5pbU';

function doPost(e) {
  try {
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
    const subject = data.subject || 'HTML';
    const userAnswers = data.answers || {};

    // Qaysi fan testiga qarab to'g'ri kalitni tanlash
    let activeAnswerKey = ANSWER_KEY_HTML;
    if (subject === 'CSS') {
      activeAnswerKey = ANSWER_KEY_CSS;
    } else if (subject === 'JS') {
      activeAnswerKey = ANSWER_KEY_JS;
    }

    // Server tomonida to'g'ri javoblarni hisoblash
    let correctCount = 0;
    for (let qId = 1; qId <= TOTAL_QUESTIONS; qId++) {
      if (userAnswers[qId] && userAnswers[qId] === activeAnswerKey[qId]) {
        correctCount++;
      }
    }

    // Foizni hisoblash
    const percentage = Math.round((correctCount / TOTAL_QUESTIONS) * 100) + '%';

    // Toshkent vaqti bo'yicha sana shakllantirish
    const formattedDate = Utilities.formatDate(new Date(), 'Asia/Tashkent', 'dd.MM.yyyy HH:mm');

    // Jadvalga ma'lumotni yozish (Sana | Ism | Familiya | Fan | To'g'ri javoblar | Jami | Foiz)
    sheet.appendRow([
      formattedDate,
      firstname,
      lastname,
      subject + ' Test',
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
  return ContentService.createTextOutput("HTML, CSS & JS Test Backend ishlamoqda!");
}
```

3. Tepadagi **Disket (Save)** belgisini bosing (`Ctrl + S`).
4. Joylashtirishni yangilash: **Deploy (Joylashtirish)** -> **Manage deployments (Joylashtirishlarni boshqarish)** -> Tahrirlash (Pencil icon) -> **New version (Yangi versiya)** tanlang va **Deploy** tugmasini bosing!
