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
2. Ochilgan sahifadagi barcha matnlarni o'chirib, quyidagi yangilangan **Code.gs** kodini joylashtiring:

```javascript
/**
 * CSS Test Backend Server Code (Updated with new 20 questions key)
 * Target Sheet ID: 1mG63yijZTh-QWUY_PR-ENDIZEifwD-E7oBGV8Wh5pbU
 */

// Server tomonidagi to'g'ri javoblar kaliti (Natijalar o'quvchiga ko'rsatilmaydi)
const ANSWER_KEY = {
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

    // Jadvalga ma'lumotni yozish (Sana | Ism | Familiya | To'g'ri javoblar | Jami | Foiz)
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
4. Joylashtirishni yangilash: **Deploy (Joylashtirish)** -> **Manage deployments (Joylashtirishlarni boshqarish)** -> Tahrirlash (Pencil icon) -> **New version (Yangi versiya)** tanlang va **Deploy** tugmasini bosing!
