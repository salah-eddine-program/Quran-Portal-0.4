import Script from "next/script";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">انتقل إلى المحتوى</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#/home" aria-label="بوابة القرآن الكريم، الرئيسية">
            <Image src={`${basePath}/assets/images/icon.svg`} width="42" height="42" alt="" />
            <span><strong>بوابة القرآن</strong><small>QURAN PORTAL</small></span>
          </a>
          <nav className="top-nav" aria-label="التنقل الرئيسي">
            <a href="#/home" data-nav="home">الرئيسية</a>
            <a href="#/quran" data-nav="quran">المصحف</a>
            <a href="#/reciters" data-nav="reciters">التلاوات</a>
            <a href="#/tafsir" data-nav="tafsir">التفسير</a>
            <a href="#/library" data-nav="library">المكتبة</a>
            <a href="#/lessons" data-nav="lessons">الدروس</a>
            <a href="#/radio" data-nav="radio">الإذاعة</a>
            <a href="#/calendar" data-nav="calendar">التقويم</a>
            <a href="#/services" data-nav="services">أدوات</a>
          </nav>
          <div className="header-actions">
            <button className="icon-button" id="search-open" type="button" aria-label="بحث" title="بحث">⌕</button>
            <a className="icon-button favorite-shortcut" href="#/favorites" aria-label="المحفوظات" title="المحفوظات">♡</a>
            <button className="icon-button" id="theme-toggle" type="button" aria-label="تبديل المظهر" title="تبديل المظهر">◐</button>
            <button className="icon-button install-button" id="install-app" type="button" aria-label="تثبيت البوابة" title="تثبيت البوابة" hidden>⇩</button>
          </div>
        </div>
      </header>

      <main id="main" className="page-shell" tabIndex={-1}>
        <div className="loading-state" role="status" aria-live="polite"><span className="spinner" aria-hidden="true" /><p>جارٍ تجهيز البوابة…</p></div>
        <noscript><p className="notice" role="alert">فعّل JavaScript لعرض أقسام البوابة وبياناتها.</p></noscript>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div><a className="brand brand-small" href="#/home"><Image src={`${basePath}/assets/images/icon.svg`} width="34" height="34" alt="" /><span><strong>بوابة القرآن</strong><small>QURAN PORTAL</small></span></a><p>مساحة عربية هادئة للقراءة والاستماع والوصول إلى المصادر.</p></div>
          <div className="footer-links"><a href="#/about">عن البوابة والمصادر</a><a href="#/favorites">المحفوظات والإعدادات</a><a href="https://alquran.cloud/api" target="_blank" rel="noopener noreferrer">توثيق مصدر القرآن ↗</a></div>
          <small className="copyright">© <span id="year" /> بوابة القرآن الكريم</small>
        </div>
      </footer>

      <nav className="mobile-nav" aria-label="التنقل للهاتف">
        <a href="#/home" data-nav="home"><span>⌂</span><small>الرئيسية</small></a>
        <a href="#/quran" data-nav="quran"><span>▤</span><small>المصحف</small></a>
        <a href="#/radio" data-nav="radio"><span>◉</span><small>الإذاعة</small></a>
        <a href="#/adhkar" data-nav="adhkar"><span>☼</span><small>الأذكار</small></a>
        <a href="#/services" data-nav="services"><span>✦</span><small>أدوات</small></a>
        <a href="#/library" data-nav="library"><span>▣</span><small>المكتبة</small></a>
        <a href="#/favorites" data-nav="favorites"><span>♡</span><small>المحفوظات</small></a>
      </nav>

      <section className="audio-dock" id="audio-dock" aria-label="مشغل الصوت" hidden>
        <div className="audio-meta"><span className="audio-art">♫</span><span><strong id="audio-title">لا يوجد تشغيل</strong><small id="audio-subtitle">اختر تلاوة أو إذاعة</small></span></div>
        <label className="audio-speed-control"><span className="visually-hidden">سرعة التلاوة</span><select id="audio-speed" defaultValue="1" aria-label="سرعة التلاوة"><option value="0.75">0.75×</option><option value="1">1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option><option value="2">2×</option></select></label>
        <label className="audio-sleep-control"><span className="visually-hidden">مؤقت إيقاف الصوت</span><select id="sleep-timer" defaultValue="0" aria-label="مؤقت إيقاف الصوت"><option value="0">المؤقت</option><option value="5">٥ د</option><option value="10">١٠ د</option><option value="15">١٥ د</option><option value="30">٣٠ د</option><option value="60">٦٠ د</option></select></label>
        <audio id="audio-element" controls preload="none" />
        <button className="icon-button audio-close" id="audio-close" type="button" aria-label="إغلاق المشغل">×</button>
      </section>

      <dialog className="search-dialog" id="search-dialog" aria-labelledby="search-heading">
        <div className="dialog-head"><div><span className="eyebrow">بحث شامل</span><h2 id="search-heading">إلى أين تريد الوصول؟</h2></div><button className="icon-button" id="search-close" type="button" aria-label="إغلاق">×</button></div>
        <label className="search-field"><span aria-hidden="true">⌕</span><input id="global-search" type="search" placeholder="ابحث في الأقسام والسور…" autoComplete="off" /><kbd>Esc</kbd></label>
        <div id="search-results" className="search-results"><p className="muted">اكتب اسم قسم أو سورة لعرض النتائج.</p></div>
        <section className="quran-search-panel" aria-labelledby="quran-search-heading"><h3 id="quran-search-heading">البحث في الآيات</h3><div id="quran-search-results" className="quran-search-results" aria-live="polite"><p className="muted">اكتب ثلاث حروف أو أكثر للبحث في نص القرآن.</p></div><p className="source-note">مصدر النتائج: <a href="https://alquran.cloud/api" target="_blank" rel="noopener noreferrer">Al Quran Cloud API ↗</a></p></section>
      </dialog>
      <div id="toast-region" className="toast-region" aria-live="polite" aria-atomic="true" />
      <Script src={`${basePath}/assets/js/app.js`} strategy="afterInteractive" />
    </>
  );
}
