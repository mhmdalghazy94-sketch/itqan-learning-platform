const studentPages = {
  "dashboard.html": { title: "لوحة التحكم", subtitle: "نظرة سريعة على رحلتك التعليمية", section: "الرئيسية", icon: "⌂" },
  "profile.html": { title: "ملفي الشخصي", subtitle: "معلوماتك وإنجازاتك في اتقان", section: "حسابي", icon: "◉" },
  "edit-profile.html": { title: "تعديل الملف الشخصي", subtitle: "حدّث معلوماتك الشخصية", section: "حسابي", icon: "✎" },
  "my-courses.html": { title: "دوراتي", subtitle: "المواد والمسارات التي تتعلمها", section: "تعلّمي", icon: "▤" },
  "my-lessons.html": { title: "دروسي", subtitle: "الدروس المحفوظة ضمن مساراتك", section: "تعلّمي", icon: "▣" },
  "continue-learning.html": { title: "متابعة التعلّم", subtitle: "أكمل من حيث توقفت", section: "تعلّمي", icon: "▶" },
  "assignments.html": { title: "الواجبات", subtitle: "تابع واجباتك ومواعيد التسليم", section: "تقييماتي", icon: "▧" },
  "my-exercises.html": { title: "تماريني", subtitle: "تدرّب وثبّت ما تعلّمته", section: "تقييماتي", icon: "✎" },
  "my-quizzes.html": { title: "اختباراتي القصيرة", subtitle: "اختبارات سريعة لمراجعة فهمك", section: "تقييماتي", icon: "☷" },
  "my-exams.html": { title: "اختباراتي النهائية", subtitle: "مواعيد الاختبارات والمحاولات", section: "تقييماتي", icon: "▤" },
  "my-results.html": { title: "نتائجي", subtitle: "نتائجك وتفاصيل تقييماتك", section: "تقييماتي", icon: "◈" },
  "my-certificates.html": { title: "شهاداتي", subtitle: "الشهادات التي حصلت عليها", section: "إنجازاتي", icon: "♧" },
  "my-progress.html": { title: "تقدّمي الدراسي", subtitle: "تابع تطورك وأهدافك التعليمية", section: "إنجازاتي", icon: "↗" },
  "learning-history.html": { title: "سجل التعلّم", subtitle: "راجع نشاطك التعليمي السابق", section: "إنجازاتي", icon: "◷" },
  "bookmarks.html": { title: "المحفوظات", subtitle: "دروس ومحتوى حفظته للعودة إليه", section: "إنجازاتي", icon: "♡" },
  "achievements.html": { title: "إنجازاتي", subtitle: "كل خطوة تستحق أن تحتفل بها", section: "إنجازاتي", icon: "✦" },
  "notifications.html": { title: "الإشعارات", subtitle: "آخر التحديثات والتنبيهات", section: "التواصل", icon: "♧", badge: "3" },
  "messages.html": { title: "رسائلي", subtitle: "تواصل مع معلميك وفريق اتقان", section: "التواصل", icon: "✉" },
  "calendar.html": { title: "جدولي", subtitle: "نظّم دروسك واختباراتك القادمة", section: "التواصل", icon: "▦" },
  "subscription.html": { title: "اشتراكي", subtitle: "تفاصيل خطتك ومزاياها", section: "الحساب", icon: "◇" },
  "payments.html": { title: "مدفوعاتي", subtitle: "إيصالات وسجل عمليات الدفع", section: "الحساب", icon: "＄" },
  "settings.html": { title: "الإعدادات", subtitle: "خصّص تجربتك التعليمية", section: "الحساب", icon: "⚙" },
  "help.html": { title: "المساعدة والدعم", subtitle: "نحن هنا لمساعدتك", section: "الحساب", icon: "?" }
};

const navigationGroups = [
  { label: "الرئيسية", pages: ["dashboard.html"] },
  { label: "تعلّمي", pages: ["my-courses.html", "my-lessons.html", "continue-learning.html"] },
  { label: "تقييماتي", pages: ["assignments.html", "my-exercises.html", "my-quizzes.html", "my-exams.html", "my-results.html"] },
  { label: "إنجازاتي", pages: ["my-certificates.html", "my-progress.html", "learning-history.html", "bookmarks.html", "achievements.html"] },
  { label: "التواصل", pages: ["notifications.html", "messages.html", "calendar.html"] },
  { label: "حسابي", pages: ["profile.html", "edit-profile.html", "subscription.html", "payments.html", "settings.html", "help.html"] }
];

const courses = [
  { name: "اللغة الإنجليزية", category: "لغات", icon: "Aa", color: "yellow", lessons: "12 درسًا", progress: 68 },
  { name: "الفيزياء", category: "علوم", icon: "∑", color: "purple", lessons: "8 دروس", progress: 42 },
  { name: "الرياضيات", category: "رياضيات", icon: "÷", color: "coral", lessons: "15 درسًا", progress: 85 },
  { name: "اللغة العربية", category: "لغات", icon: "ض", color: "green", lessons: "10 دروس", progress: 25 },
  { name: "الكيمياء", category: "علوم", icon: "⚗", color: "green", lessons: "9 دروس", progress: 31 }
];

const activities = [
  { title: "اختبار قوانين الحركة", course: "الفيزياء", date: "اليوم، 10:30 ص", score: "9/10" },
  { title: "تمرين المفردات اليومية", course: "اللغة الإنجليزية", date: "أمس، 4:15 م", score: "8/10" },
  { title: "درس المعادلات الخطية", course: "الرياضيات", date: "أمس، 11:20 ص", score: "أُكمل" }
];

const icons = { "my-courses.html": "▤", "my-lessons.html": "▣", "continue-learning.html": "▶", "assignments.html": "▧", "my-exercises.html": "✎", "my-quizzes.html": "☷", "my-exams.html": "▤", "my-results.html": "◈", "my-certificates.html": "♧", "my-progress.html": "↗", "learning-history.html": "◷", "bookmarks.html": "♡", "achievements.html": "✦", "notifications.html": "♧", "messages.html": "✉", "calendar.html": "▦", "profile.html": "◉", "edit-profile.html": "✎", "subscription.html": "◇", "payments.html": "＄", "settings.html": "⚙", "help.html": "?" };
icons["dashboard.html"] = "⌂";
const pageName = window.location.pathname.split("/").pop() || "dashboard.html";
const page = studentPages[pageName] || studentPages["dashboard.html"];
const todayLabel = new Intl.DateTimeFormat("ar-SA", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date());
const navLink = (name, label, icon, badge = "") => `<a class="sidebar-link${pageName === name ? " active" : ""}" href="${name === "assignments.html" ? "../../assignments/student/assignments.html" : name}"${pageName === name ? ' aria-current="page"' : ""}><span class="sidebar-icon" aria-hidden="true">${icon}</span><span>${label}</span>${badge ? `<span class="sidebar-badge">${badge}</span>` : ""}</a>`;

const labels = {
  "my-courses.html": "دوراتي", "my-lessons.html": "دروسي", "continue-learning.html": "متابعة التعلّم",
  "assignments.html": "الواجبات",
  "my-exercises.html": "تماريني", "my-quizzes.html": "اختباراتي القصيرة", "my-exams.html": "اختباراتي النهائية",
  "my-results.html": "نتائجي", "my-certificates.html": "شهاداتي", "my-progress.html": "تقدّمي الدراسي",
  "learning-history.html": "سجل التعلّم", "bookmarks.html": "المحفوظات", "achievements.html": "إنجازاتي",
  "notifications.html": "الإشعارات", "messages.html": "رسائلي", "calendar.html": "جدولي", "profile.html": "ملفي الشخصي",
  "edit-profile.html": "تعديل الملف الشخصي", "subscription.html": "اشتراكي", "payments.html": "مدفوعاتي",
  "settings.html": "الإعدادات", "help.html": "المساعدة والدعم", "dashboard.html": "لوحة التحكم"
};

function renderShell() {
  const sidebar = navigationGroups.map((group) =>
    `<section><p class="sidebar-caption">${group.label}</p><nav class="sidebar-links" aria-label="${group.label}">${group.pages.map((name) => navLink(name, labels[name], icons[name], studentPages[name].badge)).join("")}</nav></section>`
  ).join("");

  document.querySelector("#student-app").innerHTML = `
    <aside class="student-sidebar" id="student-sidebar">
      <a class="student-brand" href="dashboard.html" aria-label="اتقان - لوحة الطالب"><span class="student-brand-mark">إ</span><span>اتقان<span class="student-brand-dot">.</span></span></a>
      ${sidebar}
      <div class="sidebar-bottom">
        <a class="sidebar-help" href="help.html"><span class="help-bubble">؟</span><span><strong>تحتاج إلى مساعدة؟</strong><small>نحن هنا لمساعدتك</small></span></a>
        <a class="sidebar-user" href="profile.html"><span class="user-avatar">م</span><span class="sidebar-user-copy"><strong>مريم أحمد</strong><small>الصف الأول الثانوي</small></span></a>
      </div>
    </aside>
    <div class="student-overlay" id="student-overlay"></div>
    <div class="student-main">
      <header class="student-topbar">
        <button class="sidebar-toggle" id="sidebar-toggle" type="button" aria-label="فتح القائمة" aria-expanded="false" aria-controls="student-sidebar">☰</button>
        <div class="topbar-heading"><strong>${page.title}</strong><small>${todayLabel}</small></div>
        <span class="topbar-spacer"></span>
        <label class="student-search"><span aria-hidden="true">⌕</span><input id="portal-search" type="search" placeholder="ابحث في المنصة..." aria-label="ابحث في المنصة"></label>
        <a class="topbar-icon has-notice" href="notifications.html" aria-label="الإشعارات، 3 غير مقروءة">♧</a>
        <a class="student-top-user" href="profile.html"><span class="user-avatar">م</span><strong>مريم</strong></a>
      </header>
      <main class="student-content" id="student-content"></main>
    </div>
    <div class="student-toast" id="student-toast" role="status" aria-live="polite"></div>
  `;
}

function renderHeading(actions = "") {
  return `<div class="page-heading"><div><h1>${page.title}</h1><p>${page.subtitle}</p></div><div class="page-actions">${actions}</div></div>`;
}

function renderStats(items) {
  return `<div class="student-stats">${items.map((item) => `<article class="stat-card"><span class="stat-icon ${item.color}">${item.icon}</span><div class="stat-copy"><small>${item.label}</small><strong>${item.value}<em>${item.unit || ""}</em></strong></div></article>`).join("")}</div>`;
}

function renderCourseTable(items = courses, showProgress = true) {
  return `<div class="student-table-wrap"><table class="student-table"><thead><tr><th>المادة</th><th>عدد الدروس</th>${showProgress ? "<th>التقدّم</th>" : ""}<th>الحالة</th><th></th></tr></thead><tbody>${items.map((course) => `<tr><td><span class="table-title"><span class="table-mark">${course.icon}</span><span><strong>${course.name}</strong><small>${course.category}</small></span></span></td><td>${course.lessons}</td>${showProgress ? `<td><span class="progress-label"><strong>${course.progress}%</strong></span><span class="progress-line"><span style="width:${course.progress}%"></span></span></td>` : ""}<td><span class="status-pill">${course.progress === 100 ? "مكتملة" : "قيد التعلّم"}</span></td><td><a class="table-action" href="continue-learning.html">متابعة ←</a></td></tr>`).join("")}</tbody></table></div>`;
}

function renderActivities(items = activities) {
  return `<div class="activity-list">${items.map((activity) => `<div class="activity-item"><span class="activity-dot"></span><span class="activity-copy"><strong>${activity.title}</strong><small>${activity.course} · ${activity.date}</small></span><span class="activity-score">${activity.score}</span></div>`).join("")}</div>`;
}

function renderDashboard() {
  return `${renderHeading('<a class="student-button" href="calendar.html">▦ عرض الجدول</a><a class="student-button primary" href="my-courses.html">اكتشف الدورات ←</a>')}
    <section class="welcome-banner"><div class="welcome-copy"><span class="welcome-greeting">${todayLabel}</span><h2>أهلًا مريم، مستعدة لخطوة جديدة؟</h2><p>أنتِ على بُعد درس واحد من تحقيق هدفك لهذا الأسبوع. استمري، فأنتِ تقومين بعمل رائع!</p><a class="student-button primary" href="continue-learning.html">تابعي التعلّم ←</a></div><div class="welcome-art" aria-hidden="true">✦</div></section>
    ${renderStats([{label:"دورات أتابعها",value:"5",icon:"▤",color:"green"},{label:"دروس أكملتها",value:"24",icon:"✓",color:"yellow"},{label:"وقت التعلّم",value:"12",unit:"ساعة",icon:"◷",color:"purple"},{label:"إنجازات حصلت عليها",value:"8",icon:"✦",color:"coral"}])}
    <div class="dashboard-grid"><div class="dashboard-column">
      <section class="student-panel"><div class="panel-heading"><h2>كمّلي من حيث توقفتِ</h2><a href="continue-learning.html">كل دروسي ←</a></div><div class="continue-card"><div class="continue-cover">∑</div><div class="continue-details"><span class="item-eyebrow">الفيزياء · الدرس ٤</span><h3>قوانين نيوتن للحركة</h3><p>آخر زيارة: اليوم · ١٠ دقائق متبقية</p><div class="progress-line"><span style="width:64%"></span></div><div class="progress-label"><span>تقدّم الدرس</span><strong>64%</strong></div></div></div></section>
      <section class="student-panel"><div class="panel-heading"><h2>نشاط التعلّم هذا الأسبوع</h2><select aria-label="فترة الرسم"><option>هذا الأسبوع</option><option>الشهر الحالي</option></select></div><div class="week-chart" role="img" aria-label="مخطط نشاط التعلّم من السبت إلى الجمعة">${[["السبت",38,24],["الأحد",62,38],["الإثنين",45,30],["الثلاثاء",78,52],["الأربعاء",90,62],["الخميس",30,18],["الجمعة",22,12]].map(([day, first, second], index) => `<div class="chart-day"><div class="chart-bars"><span class="chart-bar${index === 4 ? " current" : ""}" style="height:${first}%"></span><span class="chart-bar" style="height:${second}%"></span></div><span>${day}</span></div>`).join("")}</div></section>
      <section class="student-panel"><div class="panel-heading"><h2>آخر نشاطاتي</h2><a href="my-results.html">عرض النتائج ←</a></div>${renderActivities()}</section>
    </div><div class="dashboard-column">
      <section class="student-panel"><div class="panel-heading"><h2>دوراتي</h2><a href="my-courses.html">عرض الكل ←</a></div>${courses.slice(0, 3).map((course) => `<div class="activity-item"><span class="table-mark">${course.icon}</span><span class="activity-copy"><strong>${course.name}</strong><small>${course.category} · ${course.progress}% مكتمل</small><span class="progress-line"><span style="width:${course.progress}%"></span></span></span></div>`).join("")}</section>
      <section class="student-panel"><div class="panel-heading"><h2>جدول اليوم</h2><a href="calendar.html">الجدول الكامل ←</a></div><div class="schedule-list"><div class="schedule-item"><span class="schedule-time">10:00</span><span class="schedule-indicator"></span><span class="schedule-copy"><strong>الفيزياء — قوانين الحركة</strong><small>درس · ٢٠ دقيقة</small></span></div><div class="schedule-item"><span class="schedule-time">13:30</span><span class="schedule-indicator purple"></span><span class="schedule-copy"><strong>الإنجليزية — كلمات جديدة</strong><small>تمرين · ١٥ دقيقة</small></span></div><div class="schedule-item"><span class="schedule-time">16:00</span><span class="schedule-indicator orange"></span><span class="schedule-copy"><strong>مراجعة المعادلات</strong><small>الرياضيات · ٢٥ دقيقة</small></span></div></div></section>
      <section class="student-panel"><div class="panel-heading"><h2>هدف هذا الأسبوع</h2><a href="my-progress.html">التقدّم ←</a></div><div class="progress-label"><span>الدروس المكتملة</span><strong>4 من 5</strong></div><div class="progress-line"><span style="width:80%"></span></div><p style="margin:10px 0 0;color:#838a80;font-size:9px">بقي لك درس واحد لتحقيق هدفك. أنتِ قريبة!</p></section>
    </div></div>`;
}

function renderCoursesPage() {
  const heading = renderHeading('<a class="student-button primary" href="continue-learning.html">تابع التعلّم ←</a>');
  return `${heading}${renderStats([{label:"إجمالي الدورات",value:"5",icon:"▤",color:"green"},{label:"دورات نشطة",value:"4",icon:"↗",color:"purple"},{label:"دورات مكتملة",value:"1",icon:"✓",color:"yellow"},{label:"إجمالي الدروس",value:"54",icon:"▣",color:"coral"}])}<section class="student-panel"><div class="panel-heading"><h2>جميع دوراتي</h2><span class="item-eyebrow">تقدّمك محفوظ تلقائيًا</span></div>${renderCourseTable()}</section>`;
}

function renderProfile(edit = false) {
  const form = `<form class="form-panel" id="profile-form"><div class="panel-heading"><h2>${edit ? "المعلومات الشخصية" : "معلومات الحساب"}</h2>${edit ? "" : '<a href="edit-profile.html">تعديل المعلومات ✎</a>'}</div><div class="form-grid">${[["الاسم الكامل","مريم أحمد"],["البريد الإلكتروني","maryam@example.com"],["رقم الهاتف","+966 50 123 4567"],["الصف الدراسي","الصف الأول الثانوي"],["المدينة","الرياض"],["تاريخ الميلاد","2010-06-15"]].map(([label,value], index) => `<div class="form-field"><label for="profile-${index}">${label}</label><input id="profile-${index}" value="${value}" ${edit ? "" : "readonly"}></div>`).join("")}<div class="form-field full"><label for="profile-bio">نبذة عني</label><textarea id="profile-bio" ${edit ? "" : "readonly"}>أحب اكتشاف العلوم وتعلّم أشياء جديدة كل يوم.</textarea></div></div>${edit ? '<div class="form-actions"><button class="student-button primary" type="submit">حفظ التغييرات</button><a class="student-button" href="profile.html">إلغاء</a></div>' : ""}</form>`;
  if (edit) return `${renderHeading('<a class="student-button" href="profile.html">العودة إلى الملف ←</a>')}${form}`;
  return `${renderHeading('<a class="student-button primary" href="edit-profile.html">تعديل الملف الشخصي ✎</a>')}<div class="profile-layout"><section class="profile-card"><span class="user-avatar">م</span><h2>مريم أحمد</h2><p>طالبة · الصف الأول الثانوي</p><a class="student-button" href="edit-profile.html">تعديل الملف الشخصي</a><div class="profile-facts"><div class="profile-fact"><span>عضوة منذ</span><strong>سبتمبر ٢٠٢٥</strong></div><div class="profile-fact"><span>الدروس المكتملة</span><strong>24 درسًا</strong></div><div class="profile-fact"><span>الإنجازات</span><strong>8 إنجازات</strong></div></div></section>${form}</div>`;
}

const tableConfigs = {
  "my-lessons.html": { headings: ["الدرس", "المادة", "المدة", "الحالة"], rows: [["قوانين نيوتن للحركة","الفيزياء","18 دقيقة","قيد التعلّم"],["المعادلات الخطية","الرياضيات","22 دقيقة","مكتمل"],["الأزمنة البسيطة","الإنجليزية","15 دقيقة","قيد التعلّم"],["المحاليل والتركيز","الكيمياء","20 دقيقة","جديد"]] },
  "my-exercises.html": { headings: ["التمرين", "المادة", "الأسئلة", "الحالة"], rows: [["تمرين قوانين الحركة","الفيزياء","10 أسئلة","مكتمل"],["مراجعة المفردات","الإنجليزية","15 سؤالًا","قيد التعلّم"],["حل المعادلات","الرياضيات","8 أسئلة","جديد"]] },
  "my-quizzes.html": { headings: ["الاختبار", "المادة", "النتيجة", "الحالة"], rows: [["اختبار قوانين نيوتن","الفيزياء","9 / 10","مكتمل"],["مفردات الوحدة الأولى","الإنجليزية","8 / 10","مكتمل"],["المعادلات والمتباينات","الرياضيات","—","متاح"]] },
  "my-exams.html": { headings: ["الاختبار", "المادة", "التاريخ", "الحالة"], rows: [["اختبار منتصف الفصل","الفيزياء","٢٠ أكتوبر ٢٠٢٦","قادم"],["اختبار الوحدة الثانية","الرياضيات","٢٥ أكتوبر ٢٠٢٦","قادم"],["اختبار مفردات","الإنجليزية","١٢ أكتوبر ٢٠٢٦","مكتمل"]] },
  "my-results.html": { headings: ["التقييم", "المادة", "النتيجة", "التاريخ"], rows: [["اختبار قوانين نيوتن","الفيزياء","9 / 10","اليوم"],["مفردات الوحدة الأولى","الإنجليزية","8 / 10","أمس"],["المعادلات الخطية","الرياضيات","10 / 10","١٠ أكتوبر"]] },
  "learning-history.html": { headings: ["النشاط", "المادة", "المدة", "التاريخ"], rows: [["قوانين نيوتن للحركة","الفيزياء","18 دقيقة","اليوم، 10:30 ص"],["تمرين المفردات","الإنجليزية","12 دقيقة","أمس، 4:15 م"],["المعادلات الخطية","الرياضيات","22 دقيقة","أمس، 11:20 ص"],["مقدمة في التفاعلات","الكيمياء","16 دقيقة","١٢ أكتوبر"]] },
  "notifications.html": { headings: ["الإشعار", "النوع", "التاريخ", "الحالة"], rows: [["لديك اختبار في الفيزياء الأسبوع القادم","تذكير","اليوم","جديد"],["أحسنتِ! أكملتِ درس المعادلات","إنجاز","أمس","جديد"],["تمت إضافة دروس جديدة في الإنجليزية","تحديث","١٢ أكتوبر","مقروء"]] },
  "messages.html": { headings: ["المرسل", "الموضوع", "التاريخ", "الحالة"], rows: [["أ. سارة محمد","ملاحظات على التمرين","اليوم","جديد"],["فريق اتقان","مرحبًا بك في مسارك الجديد","١٢ أكتوبر","مقروء"],["أ. خالد علي","مصادر إضافية للفيزياء","١٠ أكتوبر","مقروء"]] },
  "payments.html": { headings: ["العملية", "الوصف", "التاريخ", "الحالة"], rows: [["INV-2026-041","اشتراك اتقان — شهري","١ أكتوبر ٢٠٢٦","مدفوع"],["INV-2026-028","اشتراك اتقان — شهري","١ سبتمبر ٢٠٢٦","مدفوع"]] }
};

function renderTablePage(config) {
  const lessonLinks = {
    "قوانين نيوتن للحركة": "physics&lesson=2",
    "المعادلات الخطية": "math&lesson=2",
    "الأزمنة البسيطة": "english&lesson=3",
    "المحاليل والتركيز": "chemistry&lesson=4"
  };
  const rows = config.rows.map((row) => {
    const lessonUrl = pageName === "my-lessons.html" && lessonLinks[row[0]]
      ? `../../lesson-details.html?id=${lessonLinks[row[0]]}`
      : "continue-learning.html";
    return `<tr>${row.map((cell, index) => `<td>${index === 0 ? `<span class="table-title"><span class="table-mark">${page.icon}</span><strong>${pageName === "my-lessons.html" ? `<a href="${lessonUrl}">${cell}</a>` : cell}</strong></span>` : index === row.length - 1 ? `<span class="status-pill${cell === "قادم" || cell === "جديد" ? " pending" : ""}">${cell}</span>` : cell}</td>`).join("")}<td><a class="table-action" href="${lessonUrl}">${pageName === "my-lessons.html" ? "افتحي الدرس" : "عرض التفاصيل"} ←</a></td></tr>`;
  }).join("");
  return `${renderHeading()}<section class="student-panel"><div class="panel-heading"><h2>${page.title}</h2><label class="student-search"><span aria-hidden="true">⌕</span><input class="table-search" type="search" placeholder="ابحث..." aria-label="ابحث في القائمة"></label></div><div class="student-table-wrap"><table class="student-table"><thead><tr>${config.headings.map((heading) => `<th>${heading}</th>`).join("")}<th></th></tr></thead><tbody>${rows}</tbody></table></div></section>`;
}

function renderCardsPage() {
  const progressPage = pageName === "my-progress.html";
  const continuePage = pageName === "continue-learning.html";
  const bookmarked = pageName === "bookmarks.html";
  const cards = progressPage
    ? courses.slice(0, 4).map((course) => ({ icon: course.icon, title: course.name, description: `${course.category} · أكملتِ ${course.progress}% من المسار.`, action: "تابعي المسار", href: "continue-learning.html" }))
    : continuePage
      ? [{icon:"∑",title:"قوانين نيوتن للحركة",description:"الفيزياء · الدرس ٤ · تبقّى ١٠ دقائق",action:"استكملي الدرس",href:"my-lessons.html"},{icon:"Aa",title:"مفردات الوحدة الأولى",description:"اللغة الإنجليزية · الدرس ٦ · تبقّى ٨ دقائق",action:"عودي للدرس",href:"my-lessons.html"},{icon:"÷",title:"حل المعادلات الخطية",description:"الرياضيات · الدرس ٩ · تبقّى ١٥ دقيقة",action:"عودي للدرس",href:"my-lessons.html"}]
      : bookmarked
        ? [{icon:"Aa",title:"عبارات المحادثة اليومية",description:"اللغة الإنجليزية · درس · حفظتِه الأسبوع الماضي",action:"افتحي الدرس",href:"my-lessons.html"},{icon:"∑",title:"ملخص قوانين الحركة",description:"الفيزياء · ملخص · حفظتِه قبل ٣ أيام",action:"افتحي الملخص",href:"my-lessons.html"},{icon:"÷",title:"قواعد حل المعادلات",description:"الرياضيات · درس · حفظتِه قبل أسبوع",action:"افتحي الدرس",href:"my-lessons.html"}]
        : [{icon:"✦",title:"خطوة أولى",description:"بدأتِ رحلتك التعليمية مع اتقان.",action:"عرض الإنجاز",href:"learning-history.html"},{icon:"✓",title:"مثابرة الأسبوع",description:"تعلّمتِ ٥ أيام هذا الأسبوع. استمرّي!",action:"تابعي تقدّمك",href:"my-progress.html"},{icon:"★",title:"متعلّمة نشيطة",description:"أكملتِ ٢٠ درسًا في مساراتك.",action:"عرض الإنجاز",href:"learning-history.html"}];
  const stats = progressPage ? renderStats([{label:"إجمالي الدروس",value:"54",icon:"▣",color:"green"},{label:"مكتملة",value:"24",icon:"✓",color:"yellow"},{label:"وقت التعلّم",value:"12",unit:"ساعة",icon:"◷",color:"purple"},{label:"الهدف الأسبوعي",value:"4",unit:"/ 5",icon:"✦",color:"coral"}]) : "";
  return `${renderHeading(progressPage ? '<a class="student-button" href="learning-history.html">سجل التعلّم ←</a>' : "")}${stats}<div class="content-cards">${cards.map((card) => `<article class="content-card"><span class="content-card-mark">${card.icon}</span><h3>${card.title}</h3><p>${card.description}</p>${progressPage ? `<div class="progress-line"><span style="width:${courses.find((course) => course.name === card.title).progress}%"></span></div><div class="progress-label"><span>التقدّم</span><strong>${courses.find((course) => course.name === card.title).progress}%</strong></div>` : ""}<a class="student-button" href="${card.href}">${card.action} ←</a></article>`).join("")}</div>`;
}

function renderCalendar() {
  const schedule = [["الأحد","١٨ أكتوبر","اختبار منتصف الفصل — الفيزياء","10:00 ص"],["الثلاثاء","٢٠ أكتوبر","درس مباشر — اللغة الإنجليزية","01:30 م"],["الأحد","٢٥ أكتوبر","اختبار الوحدة الثانية — الرياضيات","09:00 ص"],["الخميس","٢٩ أكتوبر","مراجعة الكيمياء","04:00 م"]];
  return `${renderHeading('<button class="student-button" data-toast="ستتوفر خيارات التقويم قريبًا">＋ أضيفي موعدًا</button>')}<section class="student-panel"><div class="panel-heading"><h2>مواعيدي القادمة</h2><span class="item-eyebrow">أكتوبر ٢٠٢٦</span></div><div class="schedule-list">${schedule.map(([day,date,event,time],index) => `<div class="schedule-item"><span class="schedule-time">${date}</span><span class="schedule-indicator${index % 2 ? " purple" : ""}"></span><span class="schedule-copy"><strong>${event}</strong><small>${day} · ${time}</small></span><span class="status-pill${index === 0 ? " pending" : ""}">${index === 0 ? "قريبًا" : "مجدول"}</span></div>`).join("")}</div></section>`;
}

function renderSubscription() {
  return `${renderHeading()}<div class="profile-layout"><section class="student-panel"><span class="status-pill">الخطة الحالية</span><h2 style="font-size:19px;margin:15px 0 5px">اتقان بلس</h2><p style="color:#838a80;font-size:10px;line-height:1.9">وصول كامل إلى المواد والدروس والتمارين التفاعلية.</p><p style="font-size:21px;font-weight:700">٣٩ <span style="font-size:10px;color:#838a80">ر.س / شهريًا</span></p><a class="student-button" href="payments.html">عرض سجل المدفوعات</a></section><section class="student-panel"><div class="panel-heading"><h2>مزايا اشتراكك</h2></div><div class="setting-list">${["وصول إلى جميع المواد والدروس","تمارين واختبارات تفاعلية","متابعة التقدّم الدراسي","شهادات إتمام المسارات"].map((benefit) => `<div class="setting-row"><span class="help-bubble">✓</span><span style="flex:1;font-size:10px">${benefit}</span></div>`).join("")}</div></section></div>`;
}

function renderSettings() {
  return `${renderHeading('<button class="student-button primary" data-toast="تم حفظ تفضيلاتك">حفظ التغييرات</button>')}<section class="student-panel"><div class="panel-heading"><h2>التنبيهات والتفضيلات</h2></div><div class="setting-list">${[["تنبيهات التعلّم","تذكير يومي لمتابعة الدروس"],["رسائل البريد الإلكتروني","التحديثات والإعلانات المهمة"],["تذكير الاختبارات","تنبيه قبل موعد الاختبار"],["ملخص التقدّم الأسبوعي","احصلي على ملخص إنجازاتك كل أسبوع"]].map(([name,description], index) => `<div class="setting-row"><span><strong>${name}</strong><small>${description}</small></span><button class="toggle-switch" type="button" role="switch" aria-checked="${index !== 1}" aria-label="${name}"></button></div>`).join("")}</div></section><section class="student-panel" style="margin-top:15px"><div class="panel-heading"><h2>اللغة والمظهر</h2></div><div class="form-grid"><div class="form-field"><label for="language-setting">لغة المنصة</label><select id="language-setting"><option>العربية</option><option>English</option></select></div><div class="form-field"><label for="theme-setting">المظهر</label><select id="theme-setting"><option>فاتح</option><option>مطابق للجهاز</option></select></div></div></section>`;
}

function renderHelp() {
  const questions = [["كيف أتابع الدورة؟","اختاري «دوراتي» من القائمة، ثم اضغطي «متابعة» بجانب المادة التي ترغبين بها."],["كيف أراجع نتائجي؟","تجدين جميع نتائج اختباراتك وتمارينك في صفحة «نتائجي»."],["كيف أتواصل مع المعلم؟","يمكنك إرسال رسالة من صفحة «رسائلي»، وسيصلك الرد في الإشعارات."],["كيف أغيّر بياناتي؟","افتحي «ملفي الشخصي» ثم اختاري «تعديل الملف الشخصي» لحفظ معلوماتك الجديدة."]];
  return `${renderHeading('<a class="student-button primary" href="messages.html">✉ تواصلي معنا</a>')}<section class="student-panel"><div class="panel-heading"><h2>الأسئلة الشائعة</h2></div><div class="setting-list">${questions.map(([question,answer]) => `<details class="setting-row"><summary style="cursor:pointer;font-size:10px;font-weight:700">${question}</summary><small style="padding-top:8px;line-height:1.8">${answer}</small></details>`).join("")}</div></section>`;
}

function renderCertificates() {
  const certificates = [
    { title: "أساسيات اللغة الإنجليزية", date: "٢٨ سبتمبر ٢٠٢٦", icon: "Aa", color: "green" },
    { title: "مهارات التفكير الرياضي", date: "١٤ أغسطس ٢٠٢٦", icon: "÷", color: "purple" }
  ];
  return `${renderHeading('<button class="student-button" data-toast="سيتم تنزيل الشهادة عند ربط الحساب">↓ تنزيل الشهادة</button>')}<div class="content-cards">${certificates.map((certificate) => `<article class="certificate-card"><div class="certificate-ribbon">اتقان · شهادة إتمام</div><span class="content-card-mark ${certificate.color}">${certificate.icon}</span><h3>${certificate.title}</h3><p>شهادة إتمام · مريم أحمد</p><div class="certificate-date">تاريخ الإصدار: ${certificate.date}</div><button class="student-button" type="button" data-toast="سيتم تنزيل الشهادة عند ربط الحساب">عرض الشهادة ↓</button></article>`).join("")}</div>`;
}

function renderGeneric() {
  const title = pageName === "achievements.html" ? "كل إنجاز يبدأ بخطوة" : page.title;
  return `${renderHeading()}<section class="empty-callout"><span class="empty-callout-icon">${page.icon}</span><h2>${title}</h2><p>${page.subtitle}. تابعي رحلتك التعليمية واكتشفي جديد اتقان هنا.</p><a class="student-button primary" href="my-courses.html">استكشفي دوراتي ←</a></section>`;
}

function renderPage() {
  const content = document.querySelector("#student-content");
  if (pageName === "dashboard.html") content.innerHTML = renderDashboard();
  else if (pageName === "my-courses.html") content.innerHTML = renderCoursesPage();
  else if (pageName === "profile.html") content.innerHTML = renderProfile();
  else if (pageName === "edit-profile.html") content.innerHTML = renderProfile(true);
  else if (tableConfigs[pageName]) content.innerHTML = renderTablePage(tableConfigs[pageName]);
  else if (["continue-learning.html", "my-progress.html", "bookmarks.html", "achievements.html"].includes(pageName)) content.innerHTML = renderCardsPage();
  else if (pageName === "calendar.html") content.innerHTML = renderCalendar();
  else if (pageName === "subscription.html") content.innerHTML = renderSubscription();
  else if (pageName === "settings.html") content.innerHTML = renderSettings();
  else if (pageName === "help.html") content.innerHTML = renderHelp();
  else if (pageName === "my-certificates.html") content.innerHTML = renderCertificates();
  else content.innerHTML = renderGeneric();

  document.title = `${page.title} | اتقان`;
}

renderShell();
renderPage();

const sidebar = document.querySelector("#student-sidebar");
const overlay = document.querySelector("#student-overlay");
const sidebarToggle = document.querySelector("#sidebar-toggle");

function closeSidebar() {
  sidebar.classList.remove("is-open");
  overlay.classList.remove("is-open");
  sidebarToggle.setAttribute("aria-expanded", "false");
  sidebarToggle.setAttribute("aria-label", "فتح القائمة");
}

sidebarToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("is-open");
  overlay.classList.toggle("is-open", isOpen);
  sidebarToggle.setAttribute("aria-expanded", String(isOpen));
  sidebarToggle.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
});
overlay.addEventListener("click", closeSidebar);
sidebar.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeSidebar();
});

const toast = document.querySelector("#student-toast");
let toastTimeout;
document.addEventListener("click", (event) => {
  const toastButton = event.target.closest("[data-toast]");
  if (toastButton) {
    toast.textContent = toastButton.dataset.toast;
    toast.classList.add("show");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
  }

  const switchButton = event.target.closest(".toggle-switch");
  if (switchButton) switchButton.setAttribute("aria-checked", String(switchButton.getAttribute("aria-checked") !== "true"));
});

const profileForm = document.querySelector("#profile-form");
if (profileForm) profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  toast.textContent = "تم حفظ معلوماتك بنجاح";
  toast.classList.add("show");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
});

const tableSearch = document.querySelector(".table-search");
if (tableSearch) tableSearch.addEventListener("input", () => {
  const query = tableSearch.value.trim().toLocaleLowerCase("ar");
  document.querySelectorAll(".student-table tbody tr").forEach((row) => {
    row.hidden = !row.textContent.toLocaleLowerCase("ar").includes(query);
  });
});

document.querySelector("#portal-search").addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.currentTarget.value.trim()) {
    window.location.href = "my-courses.html";
  }
});
