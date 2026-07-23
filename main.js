/ التحكم في نسيان المتصفح لمكان الاسكرول عند التحديث لتبدأ الصفحة دائماً من فوق
window.scrollTo(0, 0);
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

/ تشغيل مكتبة AOS للأنميشن عند تحميل الصفحة بالكامل
window.onload = function() {
    AOS.init({
        once: false,
        mirror: true,
        duration: 1000,
        offset: 100
    });
    console.log("NexusAutomata Core UI Animation Engine Active.");
};
