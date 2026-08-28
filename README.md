# Robbit_test - CSS Test Web Platformasi

Zamonaviy, responsive va xavfsiz **CSS Test** web-sayti hamda administrator uchun **Google Sheets + Google Apps Script** backend integratsiyasi.

## 📌 Loyiha strukturasi

```text
.
├── README.md
└── css-test/
    ├── index.html               # Semantik HTML5 interfeysi va modal oyna
    ├── style.css                # Minimal, zamonaviy responsive dizayn va dark code block
    ├── script.js                # Test mantiqlari (Tayyor Apps Script URL ulangan)
    └── GOOGLE_APPS_SCRIPT.md    # Apps Script kodi va Google Sheets ulanish yo'riqnomasi
```

## ✨ Xususiyatlari

- **20 ta CSS Test Savoli**: CSS asoslari, flexbox, position, media queries va boshqa mavzular bo'yicha.
- **Natijalarni O'quvchiga Ko'rsatmaslik**: O'quvchi test davomida va yakunida to'g'ri/xato javoblarni ko'rmaydi.
- **Xavfsiz Backend**: To'g'ri javoblar frontend (JS/HTML) kodida saqlanmaydi, faqat Google Apps Script backend serverida tekshiriladi.
- **Google Sheets Integratsiyasi**: Test natijalari (Sana, Ism, Familiya, To'g'ri javoblar soni, Jami savollar va Foiz) avtomatik Google Sheets jadvaliga yoziladi.
