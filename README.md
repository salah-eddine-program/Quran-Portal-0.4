# بوابة القرآن الكريم | Quran Portal

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Service%20Worker-5A0FC8)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=github)

بوابة عربية متجاوبة للمصحف والتلاوات والتفسير والأذكار ومواقيت الصلاة، تعمل في المتصفح دون حساب أو خادم، وتحفظ بياناتك الشخصية على جهازك فقط.

> **English:** A responsive Arabic (RTL) Quran portal — read, listen, search, memorize and review — with prayer times, Qibla, adhkar and a tasbeeh counter. Built with Next.js 15 + TypeScript, exported as static files for GitHub Pages. No accounts, no backend; personal data stays on your device. [Jump to the English summary](#english-summary).

**المعاينة المباشرة:** <https://salah-eddine-program.github.io/Quran-Portal-0.4/>

---

## المحتويات
ش
- [الميزات](#الميزات)
- [مصادر البيانات](#مصادر-البيانات)
- [التشغيل المحلي](#التشغيل-المحلي)
- [النشر](#النشر)
- [هيكل المشروع](#هيكل-المشروع)
- [الخصوصية](#الخصوصية)
- [حدود معروفة](#حدود-معروفة)
- [المساهمة](#المساهمة)
- [English summary](#english-summary)

---

## الميزات

### المصحف والقراءة

- فهرسة المصحف بالسور والأجزاء والأحزاب وأرباع الأحزاب وصفحات مصحف المدينة.
- انتقال مباشر إلى آية بصيغة `رقم السورة:رقم الآية` مثل `2:255`.
- حفظ موضع آخر قراءة تلقائياً، وتخصيص نوع الخط وحجمه وتباعد الأسطر.
- ترجمات لمعاني القرآن (الإنجليزية والفرنسية والإسبانية والأردية) واختيار مصدر التفسير العربي المتاح.
- حفظ السور المفتوحة للقراءة دون اتصال بالإنترنت.

### الصوت والتلاوات

- تشغيل آية أو نطاق آيات أو سورة كاملة بأصوات قراء كتالوج Al Quran Cloud.
- تكرار الآية أو النطاق، وانتقال تلقائي، وتغيير السرعة (من 0.75× إلى 2×)، ومؤقت إيقاف.
- مكتبة سور كاملة وإذاعات مباشرة من MP3Quran مع إعادة المحاولة عند انقطاع البث.
- حفظ صوت آية للاستماع دون اتصال عند طلبك ذلك صراحة.

### البحث والمشاركة

- بحث عربي مطبَّع (يتجاوز الاختلاف في التشكيل والهمزات والألف المقصورة) في الأقسام والسور والآيات.
- نسخ الآية أو إنشاء **بطاقة صورة** لها بلون وحجم خط تختارهما.
- رابط لتحليل كلمات الآية نحوياً وصرفياً في [Quranic Arabic Corpus](https://corpus.quran.com/).

### الحفظ والمراجعة

- خطة مراجعة يومية وأسبوعية وجدولة متباعدة للآيات.
- تقييم المراجعة (أعد / صعب / جيد / سهل)، واختبار ذاتي، وشارات تقدم.
- مفضلة السور والآيات وملاحظات شخصية.

### الأذكار والأدوات

- أذكار يومية قابلة للبحث مع عدّاد تكرار وصوت عند توفره.
- مواقيت الصلاة والتقويم الهجري مع إمكانية ضبط فرق اليوم.
- اتجاه القبلة المحسوب للمدينة المختارة، وعدّاد تسبيح.

### التجربة العامة

- مظهر ليلي ونهاري، وواجهة مبسطة اختيارية.
- تطبيق ويب تقدمي (PWA) مع Service Worker لتخزين هيكل الموقع.
- تصدير واستيراد نسخة احتياطية من بياناتك المحلية.

---

## مصادر البيانات

لا يتضمن المشروع نصاً قرآنياً مكتوباً يدوياً؛ كل المحتوى يُجلب من مصادر خارجية موثقة:

| المصدر | الاستخدام |
|---|---|
| [Al Quran Cloud API](https://alquran.cloud/api) | نص المصحف والترجمات والتفاسير وصوت الآيات والبحث في الآيات |
| [MP3Quran API](https://www.mp3quran.net/ar/api) | القراء والسور الكاملة والإذاعات وروابط البث |
| [AlAdhan API](https://aladhan.com/prayer-times-api) | مواقيت الصلاة (الطريقة الافتراضية: الجزائر `19`) |
| [Islamic Pro — Azkar API](https://github.com/YousefAsalya/Islamic-Pro-azkar-API) | نصوص الأذكار وصوتها (ترخيص MIT)، مع نسبة النصوص إلى [حصن المسلم](https://hisnmuslim.com/i/ar/27) |
| [Quranic Arabic Corpus](https://corpus.quran.com/) | تحليل كلمات الآية (يُفتح في صفحة خارجية) |

> راجع شروط استخدام كل واجهة وحقوق التلاوات قبل تغيير طريقة استخدام البيانات أو إعادة توزيع أي محتوى منزَّل. قد تختلف المواقيت المحسوبة عن مواقيت المسجد المحلي.

---

## التشغيل المحلي

**المتطلبات:** Node.js 20.9 أو أحدث.

```bash
git clone https://github.com/salah-eddine-program/Quran-Portal-0.4.git
cd Quran-Portal-0.4
npm ci
npm run dev
```

ثم افتح <http://localhost:3000>.

### الأوامر المتاحة

| الأمر | الوظيفة |
|---|---|
| `npm run dev` | تشغيل خادم التطوير |
| `npm run lint` | فحص الكود بـ ESLint |
| `npm run typecheck` | فحص أنواع TypeScript |
| `npm run build` | بناء النسخة الثابتة في مجلد `out/` |
| `npm run check:export` | التحقق من وجود الملفات المطلوبة وسلامة مسارات HTML بعد البناء |

لمعاينة نسخة `out/` محلياً بعد البناء استخدم خادماً ثابتاً مثل:

```bash
npx serve out
```

> لا تفتح `index.html` مباشرة من القرص إن أردت ميزات الـ API والـ PWA؛ فالمتصفحات قد تقيّد الطلبات وتعطّل الـ Service Worker في هذه الحالة. استخدم خادماً محلياً أو نشرة HTTPS.

---

## النشر

### GitHub Pages (الموصى به)

1. ارفع المشروع إلى فرع `main`.
2. من **Settings → Pages → Build and deployment** اختر **GitHub Actions**.
3. عند كل دفع إلى `main` يشغّل `.github/workflows/pages.yml` الفحوص (`lint` و`typecheck`) ثم يبني الموقع ويتحقق من التصدير وينشره.

يضبط سير العمل متغير `NEXT_PUBLIC_BASE_PATH` تلقائياً:

- مستودع مشروع عادي (مثل هذا) ينشر على `/<اسم-المستودع>`.
- مستودع باسم `username.github.io` ينشر على الجذر.

### استضافة ثابتة أخرى

مجلد `HTML-Portable/` نسخة HTML مستقلة تستخدم مسارات نسبية؛ ارفع محتواه إلى أي استضافة ثابتة تدعم HTTPS.

---

## هيكل المشروع

| المسار | الوظيفة |
|---|---|
| `src/app/` | جذر Next.js: `layout.tsx` و`page.tsx` و`globals.css` |
| `public/` | الملفات الثابتة التي ينسخها Next إلى `out/` (سكربت التطبيق والأنماط والأيقونة وملف الـ Service Worker والـ manifest) |
| `assets/` | ملفات الواجهة (JS وCSS وصور) التي يستخدمها `index.html` في الجذر |
| `index.html` | صفحة مستقلة بمسارات نسبية |
| `HTML-Portable/` | نسخة محمولة جاهزة للرفع على أي استضافة ثابتة |
| `scripts/check-export.mjs` | فحص ملفات ومسارات التصدير بعد البناء |
| `docs/reference-summary.md` | خلاصة متطلبات الدمج وحدود المصادر |
| `.github/workflows/pages.yml` | البناء والنشر على GitHub Pages |
| `out/` | ناتج البناء الثابت (يُولَّد بـ `npm run build`) |

التقنيات: Next.js 15 (App Router) مع `output: "export"` وTypeScript وReact 19. منطق الواجهة في `app.js` بجافاسكربت عادي يُحمَّل بعد تفاعل الصفحة، ويعتمد على التوجيه بالـ hash (مثل `#/quran`).

---

## الخصوصية

- **لا حسابات ولا تتبع.** المفضلة وآخر قراءة والملاحظات والإعدادات ومحفوظات المراجعة تبقى في المتصفح (`localStorage`).
- السور المفتوحة وصوت الآيات المحفوظ صراحةً يبقيان في `IndexedDB` على جهازك. حد حفظ الصوت: 200 ملف، وبحد أقصى 12 ميغابايت للملف، ويمكن مسحها من صفحة المحفوظات والإعدادات.
- **ما يُرسَل إلى جهات خارجية:** عبارة البحث إلى Al Quran Cloud عند البحث في الآيات، والمدينة المختارة وطريقة الحساب إلى AlAdhan لجلب المواقيت، إضافة إلى طلبات جلب المحتوى والصوت من الخدمات المذكورة أعلاه.
- **لا يطلب التطبيق إذن تحديد الموقع.** اتجاه القبلة يُحسب محلياً من المدينة المختارة.
- ملف النسخة الاحتياطية يحوي الآيات والسور المفضلة والملاحظات وإعدادات القراءة وخطة المراجعة، ولا يحوي ملفات الصوت ولا بيانات `IndexedDB`. احتفظ به في مكان آمن.

---

## حدود معروفة

- النسخة ثابتة: لا تسجيل دخول ولا مزامنة سحابية ولا لوحة إدارة للمحتوى (تتطلب خادماً ونظام حسابات منفصلين).
- تغيير القارئ يغيّر الصوت فقط ولا يغيّر رسم المصحف المعروض؛ ولا يوجد خيار رواية نصية مثل ورش إلا إذا توفر مصدر نص موثوق ومعتمد.
- المكتبة والدروس روابط إلى مواقع المصادر، ولا تعرض سجلات كتب أو ملفات قبل توثيق مصدرها وترخيصها.
- قائمة المدن لمواقيت الصلاة محدودة حالياً.

---

## المساهمة

المساهمات مرحب بها عبر [Issues](https://github.com/salah-eddine-program/Quran-Portal-0.4/issues) و[Pull requests](https://github.com/salah-eddine-program/Quran-Portal-0.4/pulls).

قبل فتح طلب دمج:

1. شغّل `npm run lint` و`npm run typecheck` و`npm run build` و`npm run check:export`.
2. اقرأ `docs/reference-summary.md` لمعرفة حدود المصادر ومتطلبات الدمج.
3. لا تُضِف نصوصاً قرآنية أو بيانات كتب أو تلاوات إلا من مصدر موثق بترخيص واضح.

---

## English summary

**Quran Portal** is a static, Arabic-first (RTL) web app for reading, listening to and studying the Quran.

- **Read:** browse by surah, juz, hizb, rub and Madinah page; deep links like `2:255`; adjustable typography; translations and Arabic tafsir; offline reading for opened surahs.
- **Listen:** verse, range and full-surah playback with repeat, auto-advance, speed control and sleep timer; full-surah reciters and live radio via MP3Quran.
- **Search & share:** normalized Arabic search; copy a verse or generate a shareable image card.
- **Memorize:** daily/weekly review plan, spaced scheduling, self-quiz and progress badges.
- **Tools:** adhkar with counters, prayer times (AlAdhan), Hijri calendar, Qibla bearing, tasbeeh counter.
- **Privacy:** no accounts or analytics; favorites, notes and settings stay in your browser; backup export/import included.

**Quick start** (Node.js 20.9+):

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # static export to out/
npm run check:export
```

Deploy with GitHub Pages: **Settings → Pages → Build and deployment → GitHub Actions**. The workflow in `.github/workflows/pages.yml` sets the base path automatically.

Quran text, translations, tafsir and audio come from third-party APIs (Al Quran Cloud, MP3Quran, AlAdhan); please review their terms before reusing the data.
