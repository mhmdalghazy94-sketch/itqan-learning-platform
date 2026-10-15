const adminPages = {
  "dashboard.html": ["لوحة التحكم", "نظرة عامة على المنصة ومؤشراتها", "الرئيسية", "⌂"],
  "users.html": ["المستخدمون", "إدارة الحسابات المسجلة والأدوار", "إدارة المستخدمين", "♧"],
  "students.html": ["الطلاب", "حسابات الطلاب وحالة نشاطهم", "إدارة المستخدمين", "♙"],
  "teachers.html": ["المعلمون", "حسابات المعلمين وحالة اعتمادهم", "إدارة المستخدمين", "◉"],
  "administrators.html": ["المشرفون", "حسابات إدارة المنصة", "إدارة المستخدمين", "♜"],
  "roles-permissions.html": ["الأدوار والصلاحيات", "مراجعة الأدوار وصلاحيات الوصول", "إدارة المستخدمين", "⚿"],
  "courses.html": ["الدورات", "إدارة الدورات المنشورة والمسودات", "إدارة المحتوى", "▤"],
  "categories.html": ["التصنيفات", "تنظيم المواد والتصنيفات التعليمية", "إدارة المحتوى", "▦"],
  "levels.html": ["المستويات", "إدارة مستويات وخبرات التعلّم", "إدارة المحتوى", "↗"],
  "lessons.html": ["الدروس", "مراجعة محتوى الدروس وحالة النشر", "إدارة المحتوى", "▣"],
  "exercises.html": ["التمارين", "إدارة التمارين والأنشطة التعليمية", "إدارة المحتوى", "✎"],
  "quizzes.html": ["الاختبارات القصيرة", "إدارة اختبارات المسارات", "إدارة التقييمات", "☷"],
  "exams.html": ["الاختبارات النهائية", "مواعيد الاختبارات وحالة إعدادها", "إدارة التقييمات", "▤"],
  "question-bank.html": ["بنك الأسئلة", "إدارة الأسئلة وتصنيفاتها", "إدارة التقييمات", "؟"],
  "certificates.html": ["الشهادات", "إدارة قوالب وإصدارات الشهادات", "إدارة التقييمات", "♧"],
  "subscriptions.html": ["الاشتراكات", "مراجعة خطط الاشتراك وحالاتها", "الاشتراكات والمدفوعات", "◇"],
  "payments.html": ["المدفوعات", "سجل عمليات الدفع وحالتها", "الاشتراكات والمدفوعات", "＄"],
  "coupons.html": ["القسائم", "إدارة رموز الخصم والعروض", "الاشتراكات والمدفوعات", "%"],
  "reports.html": ["التقارير", "مراجعة تقارير المنصة والمحتوى", "التقارير والتحليلات", "▥"],
  "analytics.html": ["التحليلات", "مؤشرات التفاعل والنمو التعليمية", "التقارير والتحليلات", "↗"],
  "announcements.html": ["الإعلانات", "رسائل وإعلانات المنصة", "التواصل والدعم", "◉"],
  "notifications.html": ["الإشعارات", "رسائل التنبيه المرسلة للمستخدمين", "التواصل والدعم", "♧"],
  "support-tickets.html": ["تذاكر الدعم", "طلبات الدعم ومتابعة حالتها", "التواصل والدعم", "✉"],
  "reviews.html": ["التقييمات", "مراجعة تقييمات وآراء المستخدمين", "التواصل والدعم", "☆"],
  "website-settings.html": ["إعدادات الموقع", "إدارة معلومات الموقع ومحتوى الواجهة", "إعدادات المنصة", "⚙"],
  "email-settings.html": ["إعدادات البريد", "خيارات قوالب وإشعارات البريد", "إعدادات المنصة", "✉"],
  "security-settings.html": ["إعدادات الأمان", "خيارات أمان الحسابات والسياسات", "إعدادات المنصة", "♢"],
  "activity-logs.html": ["سجل النشاط", "مراجعة الأنشطة الإدارية المسجلة", "إعدادات المنصة", "◷"]
};

const adminGroups = [
  { title: "الرئيسية", pages: ["dashboard.html"] },
  { title: "إدارة المستخدمين", pages: ["users.html","students.html","teachers.html","administrators.html","roles-permissions.html"] },
  { title: "إدارة المحتوى", pages: ["courses.html","categories.html","levels.html","lessons.html","exercises.html"] },
  { title: "إدارة التقييمات", pages: ["quizzes.html","exams.html","question-bank.html","certificates.html"] },
  { title: "الاشتراكات والمدفوعات", pages: ["subscriptions.html","payments.html","coupons.html"] },
  { title: "التقارير والتحليلات", pages: ["reports.html","analytics.html"] },
  { title: "التواصل والدعم", pages: ["announcements.html","notifications.html","support-tickets.html","reviews.html"] },
  { title: "إعدادات المنصة", pages: ["website-settings.html","email-settings.html","security-settings.html","activity-logs.html"] }
];

const adminLabels = Object.fromEntries(Object.entries(adminPages).map(([file,details])=>[file,details[0]]));
const adminIcons = Object.fromEntries(Object.entries(adminPages).map(([file,details])=>[file,details[3]]));
const adminFile = window.location.pathname.split("/").pop() || "dashboard.html";
const adminPage = adminPages[adminFile] || adminPages["dashboard.html"];
const adminStoreKey = "itqan-admin-console";

const adminSeed = {
  users: [
    {id:"u-1001",name:"مريم أحمد",email:"maryam@example.com",role:"طالب",status:"نشط",joined:"١٢ أكتوبر ٢٠٢٦"},
    {id:"u-1002",name:"سارة خالد",email:"sara@example.com",role:"معلم",status:"نشط",joined:"١٠ أكتوبر ٢٠٢٦"},
    {id:"u-1003",name:"عمر عبدالله",email:"omar@example.com",role:"طالب",status:"بانتظار التفعيل",joined:"٩ أكتوبر ٢٠٢٦"},
    {id:"u-1004",name:"محمد علي",email:"mohammed@example.com",role:"مشرف",status:"نشط",joined:"٥ أكتوبر ٢٠٢٦"},
    {id:"u-1005",name:"ليان محمد",email:"layan@example.com",role:"طالب",status:"موقوف",joined:"٢ أكتوبر ٢٠٢٦"}
  ],
  courses: [
    {id:"c-101",name:"أساسيات اللغة الإنجليزية",category:"اللغات",level:"المبتدئ",lessons:"12",enrollments:"248",status:"منشور"},
    {id:"c-102",name:"مبادئ الفيزياء والحركة",category:"العلوم",level:"الثانوي",lessons:"8",enrollments:"186",status:"منشور"},
    {id:"c-103",name:"المعادلات الرياضية",category:"الرياضيات",level:"المتوسط",lessons:"10",enrollments:"152",status:"مسودة"},
    {id:"c-104",name:"مهارات اللغة العربية",category:"اللغات",level:"المتوسط",lessons:"9",enrollments:"117",status:"منشور"}
  ],
  categories: [
    {id:"cat-1",name:"اللغات",description:"مواد اللغات والمهارات اللغوية",courses:"2",status:"نشط"},
    {id:"cat-2",name:"العلوم",description:"الفيزياء والكيمياء والعلوم",courses:"2",status:"نشط"},
    {id:"cat-3",name:"الرياضيات",description:"مسارات الرياضيات والتطبيق",courses:"1",status:"نشط"}
  ],
  levels: [
    {id:"level-1",name:"الأساسيات",description:"المعارف والمهارات التمهيدية",courses:"3",status:"نشط"},
    {id:"level-2",name:"المبتدئ",description:"بناء المهارات الأولية",courses:"5",status:"نشط"},
    {id:"level-3",name:"المتوسط",description:"تطبيق المفاهيم باستقلالية",courses:"4",status:"نشط"},
    {id:"level-4",name:"المتقدم",description:"موضوعات وتطبيقات معمقة",courses:"2",status:"نشط"}
  ],
  lessons: [
    {id:"l-1",name:"التحية والتعارف",course:"أساسيات اللغة الإنجليزية",type:"درس",status:"منشور",updated:"١٤ أكتوبر"},
    {id:"l-2",name:"قوانين نيوتن للحركة",course:"مبادئ الفيزياء والحركة",type:"درس",status:"منشور",updated:"١٣ أكتوبر"},
    {id:"l-3",name:"حل المعادلات الخطية",course:"المعادلات الرياضية",type:"درس",status:"مسودة",updated:"١٢ أكتوبر"}
  ],
  exercises: [
    {id:"ex-1",name:"تمرين المفردات اليومية",course:"اللغة الإنجليزية",questions:"10",status:"منشور"},
    {id:"ex-2",name:"مسائل الحركة والسرعة",course:"الفيزياء",questions:"8",status:"منشور"},
    {id:"ex-3",name:"تطبيق المعادلات",course:"الرياضيات",questions:"6",status:"مسودة"}
  ],
  quizzes: [
    {id:"q-1",name:"مراجعة مفردات الوحدة الأولى",course:"اللغة الإنجليزية",questions:"8",attempts:"194",status:"منشور"},
    {id:"q-2",name:"اختبار قوانين الحركة",course:"الفيزياء",questions:"10",attempts:"122",status:"منشور"},
    {id:"q-3",name:"اختبار المعادلات",course:"الرياضيات",questions:"10",attempts:"—",status:"مسودة"}
  ],
  exams: [
    {id:"e-1",name:"اختبار منتصف الفصل",course:"الفيزياء",date:"٢٠ أكتوبر ٢٠٢٦",participants:"186",status:"مجدول"},
    {id:"e-2",name:"اختبار الوحدة الثانية",course:"الرياضيات",date:"٢٥ أكتوبر ٢٠٢٦",participants:"152",status:"مسودة"}
  ],
  questionBank: [
    {id:"qb-1",name:"ما وحدة قياس السرعة؟",category:"الفيزياء",type:"اختيار من متعدد",difficulty:"سهل",status:"نشط"},
    {id:"qb-2",name:"اختر مرادف كلمة happy",category:"اللغة الإنجليزية",type:"اختيار من متعدد",difficulty:"سهل",status:"نشط"},
    {id:"qb-3",name:"حل المعادلة س + ٣ = ٧",category:"الرياضيات",type:"إجابة قصيرة",difficulty:"متوسط",status:"نشط"}
  ],
  certificates: [
    {id:"cert-1",name:"إتمام أساسيات اللغة الإنجليزية",user:"مريم أحمد",date:"١٠ أكتوبر ٢٠٢٦",code:"ITQ-2026-0101",status:"صادرة"},
    {id:"cert-2",name:"إتمام مبادئ الفيزياء",user:"سارة خالد",date:"٨ أكتوبر ٢٠٢٦",code:"ITQ-2026-0098",status:"صادرة"}
  ],
  subscriptions: [
    {id:"sub-1",user:"مريم أحمد",plan:"اتقان بلس — شهري",started:"١ أكتوبر ٢٠٢٦",renewal:"١ نوفمبر ٢٠٢٦",status:"نشط"},
    {id:"sub-2",user:"سارة خالد",plan:"اتقان بلس — سنوي",started:"١٥ سبتمبر ٢٠٢٦",renewal:"١٥ سبتمبر ٢٠٢٧",status:"نشط"},
    {id:"sub-3",user:"ليان محمد",plan:"اتقان بلس — شهري",started:"١ سبتمبر ٢٠٢٦",renewal:"١ أكتوبر ٢٠٢٦",status:"منتهي"}
  ],
  payments: [
    {id:"pay-2026-201",user:"مريم أحمد",description:"اشتراك شهري",amount:"٣٩ ر.س",date:"١ أكتوبر ٢٠٢٦",status:"مدفوع"},
    {id:"pay-2026-198",user:"سارة خالد",description:"اشتراك سنوي",amount:"٣٦٠ ر.س",date:"١٥ سبتمبر ٢٠٢٦",status:"مدفوع"},
    {id:"pay-2026-193",user:"ليان محمد",description:"اشتراك شهري",amount:"٣٩ ر.س",date:"١ سبتمبر ٢٠٢٦",status:"مسترد"}
  ],
  coupons: [
    {id:"WELCOME15",name:"خصم ترحيبي",discount:"15%",uses:"42",expiry:"٣١ ديسمبر ٢٠٢٦",status:"نشط"},
    {id:"STUDY10",name:"عرض الطلاب",discount:"10%",uses:"18",expiry:"٣٠ نوفمبر ٢٠٢٦",status:"نشط"},
    {id:"OLD2026",name:"عرض سابق",discount:"20%",uses:"63",expiry:"٣٠ سبتمبر ٢٠٢٦",status:"منتهي"}
  ],
  announcements: [
    {id:"ann-1",name:"مرحبًا بعودة الدراسة",audience:"جميع المستخدمين",date:"١ أكتوبر ٢٠٢٦",status:"منشور"},
    {id:"ann-2",name:"محتوى جديد في العلوم",audience:"الطلاب",date:"١٢ أكتوبر ٢٠٢٦",status:"مسودة"}
  ],
  notifications: [
    {id:"not-1",name:"تذكير بموعد اختبار الفيزياء",audience:"طلاب الفيزياء",date:"١٣ أكتوبر ٢٠٢٦",status:"مرسل"},
    {id:"not-2",name:"تمت إضافة دروس جديدة",audience:"مشتركو اتقان بلس",date:"١٢ أكتوبر ٢٠٢٦",status:"مرسل"}
  ],
  supportTickets: [
    {id:"t-201",name:"مشكلة في تشغيل درس الفيزياء",user:"مريم أحمد",date:"اليوم 10:15 ص",priority:"عادي",status:"مفتوحة"},
    {id:"t-198",name:"استفسار عن الاشتراك",user:"سارة خالد",date:"أمس 02:30 م",priority:"عادي",status:"قيد المراجعة"},
    {id:"t-194",name:"تحديث البريد الإلكتروني",user:"عمر عبدالله",date:"١٢ أكتوبر",priority:"منخفض",status:"مغلقة"}
  ],
  reviews: [
    {id:"r-1",name:"شرح واضح ومفيد",course:"أساسيات اللغة الإنجليزية",rating:"5 / 5",user:"مريم أحمد",status:"منشور"},
    {id:"r-2",name:"أمثلة الفيزياء ساعدتني",course:"مبادئ الفيزياء والحركة",rating:"4 / 5",user:"سارة خالد",status:"منشور"},
    {id:"r-3",name:"أرجو إضافة تمارين أكثر",course:"المعادلات الرياضية",rating:"3 / 5",user:"عمر عبدالله",status:"بانتظار المراجعة"}
  ],
  activityLogs: [
    {id:"log-1",name:"تحديث حالة الدورة",actor:"مشرف المنصة",target:"مبادئ الفيزياء والحركة",date:"اليوم 10:32 ص",status:"تم"},
    {id:"log-2",name:"إنشاء حساب مستخدم",actor:"النظام",target:"maryam@example.com",date:"اليوم 09:15 ص",status:"تم"},
    {id:"log-3",name:"تعديل إعدادات المحتوى",actor:"مشرف المنصة",target:"إعدادات الموقع",date:"أمس 04:50 م",status:"تم"}
  ],
  reports: [
    {id:"rep-1",name:"ملخص تسجيل الطلاب",period:"أكتوبر ٢٠٢٦",metric:"95 تسجيلًا",updated:"اليوم"},
    {id:"rep-2",name:"تقرير أداء الدورات",period:"الربع الثالث ٢٠٢٦",metric:"متوسط إكمال 74%",updated:"١٢ أكتوبر"},
    {id:"rep-3",name:"ملخص الاشتراكات",period:"سبتمبر ٢٠٢٦",metric:"60 اشتراكًا نشطًا",updated:"١ أكتوبر"}
  ]
};

const adminTableConfig = {
  "users.html": {data:"users",columns:[["name","الاسم"],["email","البريد الإلكتروني"],["role","الدور"],["status","الحالة"],["joined","تاريخ التسجيل"]],label:"مستخدم جديد",icon:"♧",status:"status"},
  "students.html": {data:"users",filter:(item)=>item.role==="طالب",columns:[["name","الطالب"],["email","البريد الإلكتروني"],["joined","تاريخ التسجيل"],["status","الحالة"]],label:"إضافة طالب",icon:"♙",status:"status"},
  "teachers.html": {data:"users",filter:(item)=>item.role==="معلم",columns:[["name","المعلم"],["email","البريد الإلكتروني"],["joined","تاريخ الانضمام"],["status","الحالة"]],label:"إضافة معلم",icon:"◉",status:"status"},
  "administrators.html": {data:"users",filter:(item)=>item.role==="مشرف",columns:[["name","المشرف"],["email","البريد الإلكتروني"],["joined","تاريخ الانضمام"],["status","الحالة"]],label:"إضافة مشرف",icon:"♜",status:"status"},
  "courses.html": {data:"courses",columns:[["name","الدورة"],["category","التصنيف"],["level","المستوى"],["lessons","الدروس"],["enrollments","المسجلون"],["status","الحالة"]],label:"إضافة دورة",icon:"▤",status:"status"},
  "categories.html": {data:"categories",columns:[["name","التصنيف"],["description","الوصف"],["courses","الدورات"],["status","الحالة"]],label:"إضافة تصنيف",icon:"▦",status:"status"},
  "levels.html": {data:"levels",columns:[["name","المستوى"],["description","الوصف"],["courses","الدورات"],["status","الحالة"]],label:"إضافة مستوى",icon:"↗",status:"status"},
  "lessons.html": {data:"lessons",columns:[["name","الدرس"],["course","الدورة"],["type","النوع"],["updated","آخر تحديث"],["status","الحالة"]],label:"إضافة درس",icon:"▣",status:"status"},
  "exercises.html": {data:"exercises",columns:[["name","التمرين"],["course","المادة"],["questions","الأسئلة"],["status","الحالة"]],label:"إضافة تمرين",icon:"✎",status:"status"},
  "quizzes.html": {data:"quizzes",columns:[["name","الاختبار"],["course","الدورة"],["questions","الأسئلة"],["attempts","المحاولات"],["status","الحالة"]],label:"إضافة اختبار",icon:"☷",status:"status"},
  "exams.html": {data:"exams",columns:[["name","الاختبار"],["course","المادة"],["date","الموعد"],["participants","المسجلون"],["status","الحالة"]],label:"إضافة اختبار",icon:"▤",status:"status"},
  "question-bank.html": {data:"questionBank",columns:[["name","السؤال"],["category","المادة"],["type","النوع"],["difficulty","المستوى"],["status","الحالة"]],label:"إضافة سؤال",icon:"؟",status:"status"},
  "certificates.html": {data:"certificates",columns:[["name","الشهادة"],["user","المستفيد"],["date","تاريخ الإصدار"],["code","رمز التحقق"],["status","الحالة"]],label:"إصدار شهادة",icon:"♧",status:"status"},
  "subscriptions.html": {data:"subscriptions",columns:[["user","المستخدم"],["plan","الخطة"],["started","تاريخ البدء"],["renewal","التجديد"],["status","الحالة"]],label:"إضافة اشتراك",icon:"◇",status:"status"},
  "payments.html": {data:"payments",columns:[["id","رقم العملية"],["user","المستخدم"],["description","الوصف"],["amount","المبلغ"],["date","التاريخ"],["status","الحالة"]],icon:"＄",status:"status"},
  "coupons.html": {data:"coupons",columns:[["id","الرمز"],["name","الحملة"],["discount","الخصم"],["uses","الاستخدامات"],["expiry","الانتهاء"],["status","الحالة"]],label:"إنشاء قسيمة",icon:"%",status:"status"},
  "announcements.html": {data:"announcements",columns:[["name","الإعلان"],["audience","الجمهور"],["date","التاريخ"],["status","الحالة"]],label:"إنشاء إعلان",icon:"◉",status:"status"},
  "notifications.html": {data:"notifications",columns:[["name","الإشعار"],["audience","الجمهور"],["date","التاريخ"],["status","الحالة"]],label:"إنشاء إشعار",icon:"♧",status:"status"},
  "support-tickets.html": {data:"supportTickets",columns:[["id","رقم التذكرة"],["name","الموضوع"],["user","صاحب الطلب"],["date","التاريخ"],["priority","الأولوية"],["status","الحالة"]],label:"تذكرة جديدة",icon:"✉",status:"status"},
  "reviews.html": {data:"reviews",columns:[["name","التقييم"],["course","الدورة"],["rating","الدرجة"],["user","المستخدم"],["status","الحالة"]],icon:"☆",status:"status"},
  "activity-logs.html": {data:"activityLogs",columns:[["name","النشاط"],["actor","المنفّذ"],["target","العنصر"],["date","التاريخ"],["status","الحالة"]],icon:"◷",status:"status"}
};

function adminEscape(value) {
  return String(value ?? "").replace(/[&<>"']/g,(character)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[character]));
}

function adminReadStore() {
  const saved=localStorage.getItem(adminStoreKey);
  return saved?JSON.parse(saved):{};
}

function adminWriteStore(value) {
  localStorage.setItem(adminStoreKey,JSON.stringify(value));
}

function adminRecords(key) {
  const store=adminReadStore(),records=new Map((adminSeed[key]||[]).map((record)=>[record.id,record]));
  (store[key]||[]).forEach((record)=>records.set(record.id,{...records.get(record.id),...record}));
  return [...records.values()];
}

function adminShell() {
  const groups=adminGroups.map((group)=>`<section class="admin-nav-group"><p class="admin-nav-caption">${group.title}</p><nav class="admin-nav-list" aria-label="${group.title}">${group.pages.map((file)=>`<a class="admin-nav-link${adminFile===file?" active":""}" href="${file}"${adminFile===file?' aria-current="page"':""}><span class="admin-nav-icon" aria-hidden="true">${adminPages[file][3]}</span><span>${adminPages[file][0]}</span></a>`).join("")}</nav></section>`).join("");
  document.querySelector("#admin-app").innerHTML=`<aside class="admin-sidebar" id="admin-sidebar"><a class="admin-brand" href="dashboard.html"><span class="admin-brand-mark">إ</span><span>اتقان<span class="admin-brand-dot">.</span></span></a><span class="admin-role">◆ لوحة إدارة المنصة</span>${groups}<div class="admin-side-bottom"><a class="admin-nav-link" href="../../index.html"><span class="admin-nav-icon">↩</span><span>العودة إلى المنصة</span></a><a class="admin-side-user" href="administrators.html"><span class="admin-avatar">م</span><span><strong>مشرف المنصة</strong><small>إدارة اتقان</small></span></a></div></aside><div class="admin-overlay" id="admin-overlay"></div><div class="admin-main"><header class="admin-topbar"><button class="admin-menu-toggle" id="admin-menu-toggle" type="button" aria-expanded="false" aria-controls="admin-sidebar" aria-label="فتح القائمة">☰</button><div class="admin-top-title"><strong>${adminPage[0]}</strong><small>${new Intl.DateTimeFormat("ar-SA",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(new Date())}</small></div><span class="admin-spacer"></span><label class="admin-search"><span aria-hidden="true">⌕</span><input id="admin-search" type="search" placeholder="ابحث في الصفحة..." aria-label="ابحث في الصفحة"></label><a class="admin-top-link" href="notifications.html" aria-label="الإشعارات">♧</a><a class="admin-avatar" href="administrators.html" aria-label="المشرف">م</a></header><main class="admin-content" id="admin-content"></main></div><div class="admin-toast" id="admin-toast" role="status" aria-live="polite"></div><div class="admin-modal" id="admin-modal" hidden><section class="admin-modal-panel" role="dialog" aria-modal="true" aria-labelledby="admin-modal-title"><div class="admin-modal-heading"><h2 id="admin-modal-title"></h2><button class="admin-modal-close" id="admin-modal-close" type="button" aria-label="إغلاق">×</button></div><form class="admin-form" id="admin-modal-form"></form></section></div>`;
  document.title=`${adminPage[0]} | لوحة إدارة اتقان`;
}

function adminHeading(actions="") {
  return `<div class="admin-heading"><div><h1>${adminPage[0]}</h1><p>${adminPage[1]}</p></div><div class="admin-actions">${actions}</div></div>`;
}

function adminStats(items) {
  return `<div class="admin-stats">${items.map((item)=>`<article class="admin-stat"><span class="admin-stat-icon ${item.color||""}">${item.icon}</span><span><small>${item.label}</small><strong>${item.value}</strong></span></article>`).join("")}</div>`;
}

function adminPill(value) {
  const normalized=String(value||"").toLocaleLowerCase("ar");
  const variant=/موقوف|مرفوض|مسترد|مغلقة|منتهي|محظور/.test(normalized)?"danger":/مسودة|انتظار|مفتوحة|مراجعة|مجدول|قادم/.test(normalized)?"pending":/نشط|منشور|مدفوع|صادرة|مرسل|حاضر|تم/.test(normalized)?"":"neutral";
  return `<span class="admin-pill ${variant}">${adminEscape(value)}</span>`;
}

function adminTable(config) {
  let records=adminRecords(config.data);
  if(config.filter)records=records.filter(config.filter);
  const headers=`<th><input class="admin-check" type="checkbox" data-select-all aria-label="تحديد كل الصفوف"></th>${config.columns.map(([,label])=>`<th>${label}</th>`).join("")}<th>الإجراء</th>`;
  const immutable=["payments.html","activity-logs.html"].includes(adminFile);
  const rows=records.map((record)=>`<tr data-admin-row data-status="${adminEscape(record.status||"")}"><td><input class="admin-check" type="checkbox" aria-label="تحديد الصف"></td>${config.columns.map(([key])=>`<td>${key===config.status?adminPill(record[key]):key==="name"&&config.icon?`<span class="admin-cell-title"><span class="admin-cell-icon">${config.icon}</span><strong>${adminEscape(record[key])}</strong></span>`:adminEscape(record[key])}</td>`).join("")}<td>${immutable?'<span class="admin-pill neutral">سجل للعرض</span>':`<button class="admin-row-action" type="button" data-record-action="${adminEscape(record.id)}">تغيير الحالة</button>`}</td></tr>`).join("");
  return `<div class="admin-toolbar"><label class="admin-search"><span aria-hidden="true">⌕</span><input type="search" data-table-search aria-label="ابحث في القائمة" placeholder="ابحث في القائمة..."></label><select class="admin-filter" data-status-filter aria-label="تصفية حسب الحالة"><option value="">كل الحالات</option>${[...new Set(records.map((record)=>record.status).filter(Boolean))].map((status)=>`<option>${adminEscape(status)}</option>`).join("")}</select></div><div class="admin-table-wrap"><table class="admin-table"><thead><tr>${headers}</tr></thead><tbody>${rows||`<tr><td colspan="${config.columns.length+2}">لا توجد سجلات مطابقة.</td></tr>`}</tbody></table></div><p class="admin-list-copy" data-empty-result hidden style="padding:12px;text-align:center;color:var(--admin-muted);font-size:9px">لا توجد نتائج مطابقة.</p>`;
}

function renderDashboard() {
  const users=adminRecords("users"),courses=adminRecords("courses");
  return `${adminHeading('<a class="admin-button" href="reports.html">▥ التقارير</a><a class="admin-button primary" href="users.html">إدارة المستخدمين ←</a>')}<div class="admin-notice"><strong>وضع تجريبي:</strong> هذه بيانات توضيحية، ولا تملك الواجهة صلاحيات إدارية أو اتصالًا بخادم الإنتاج.</div>${adminStats([{label:"إجمالي المستخدمين",value:users.length,icon:"♧"},{label:"الدورات المنشورة",value:courses.filter((course)=>course.status==="منشور").length,icon:"▤",color:"purple"},{label:"اشتراكات نشطة",value:60,icon:"◇",color:"yellow"},{label:"تذاكر دعم مفتوحة",value:2,icon:"✉",color:"coral"}])}<div class="admin-layout"><div class="admin-column"><section class="admin-panel"><div class="admin-panel-heading"><h2>أحدث المستخدمين</h2><a class="admin-row-action" href="users.html">عرض الكل ←</a></div>${adminTable({data:"users",columns:[["name","الاسم"],["role","الدور"],["joined","تاريخ التسجيل"],["status","الحالة"]],status:"status",icon:"♧"})}</section><section class="admin-panel"><div class="admin-panel-heading"><h2>نشاط المنصة</h2><a class="admin-row-action" href="analytics.html">التحليلات ←</a></div><div class="admin-chart">${[["السبت",37],["الأحد",54],["الإثنين",46],["الثلاثاء",76],["الأربعاء",88],["الخميس",62],["الجمعة",31]].map(([day,value])=>`<div class="admin-chart-day"><span style="height:${value}%"></span><small>${day}</small></div>`).join("")}</div></section></div><div class="admin-column"><section class="admin-panel"><div class="admin-panel-heading"><h2>مراجعة مطلوبة</h2></div><div class="admin-list">${[["✉","تذكرتا دعم مفتوحتان","راجع الطلبات","support-tickets.html"],["☆","تقييم بانتظار المراجعة","راجع آراء المستخدمين","reviews.html"],["◉","مسودة إعلان","راجع الإعلانات","announcements.html"]].map(([icon,title,subtitle,href])=>`<a class="admin-list-item" href="${href}"><span class="admin-cell-icon">${icon}</span><span class="admin-list-copy"><strong>${title}</strong><small>${subtitle}</small></span><span class="admin-row-action">←</span></a>`).join("")}</div></section><section class="admin-panel"><div class="admin-panel-heading"><h2>أحدث الأنشطة</h2><a class="admin-row-action" href="activity-logs.html">سجل النشاط ←</a></div><div class="admin-list">${adminRecords("activityLogs").slice(0,3).map((item)=>`<div class="admin-list-item"><span class="admin-cell-icon">◷</span><span class="admin-list-copy"><strong>${adminEscape(item.name)}</strong><small>${adminEscape(item.actor)} · ${adminEscape(item.date)}</small></span></div>`).join("")}</div></section></div></div>`;
}

function renderTablePage() {
  const config=adminTableConfig[adminFile];
  const action=config.label?`<button class="admin-button primary" type="button" data-open-create>＋ ${config.label}</button>`:"";
  const records=adminRecords(config.data).filter((item)=>!config.filter||config.filter(item));
  return `${adminHeading(action)}${adminStats([{label:"عدد السجلات",value:records.length,icon:config.icon},{label:"نشطة / منشورة",value:records.filter((item)=>/نشط|منشور|مدفوع|صادرة|مرسل/.test(item.status||"")).length,icon:"✓",color:"purple"},{label:"بانتظار المراجعة",value:records.filter((item)=>/انتظار|مراجعة|مفتوحة|مسودة/.test(item.status||"")).length,icon:"◷",color:"yellow"},{label:"آخر تحديث",value:"اليوم",icon:"↻",color:"coral"}])}<section class="admin-panel"><div class="admin-panel-heading"><h2>${adminPage[0]}</h2><small>بيانات توضيحية · التغييرات محلية لهذا المتصفح</small></div>${adminTable(config)}</section>`;
}

function renderRoles() {
  const rows=[["طالب","الوصول إلى الدورات والدروس والاختبارات","محدود"],["معلم","إدارة الدورات والطلاب المسندين","محتوى وتعليم"],["مشرف محتوى","إدارة المواد والدروس والاختبارات","المحتوى"],["مدير النظام","إعدادات المنصة وإدارة الحسابات","إداري"]];
  return `${adminHeading()}<div class="admin-notice">لا تُطبّق هذه القائمة صلاحيات فعلية. يجب فرض الأدوار والتحقق منها على الخادم قبل نشر النظام.</div><section class="admin-panel"><div class="admin-panel-heading"><h2>الأدوار الافتراضية</h2><button class="admin-button primary" data-admin-notice="إدارة الأدوار الفعلية تحتاج إلى ربط خادم الصلاحيات">＋ إضافة دور</button></div><div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>الدور</th><th>الوصف</th><th>نطاق الوصول</th><th>الإجراء</th></tr></thead><tbody>${rows.map((row)=>`<tr>${row.map((cell)=>`<td>${adminEscape(cell)}</td>`).join("")}<td><button class="admin-row-action" data-admin-notice="تعديل الصلاحيات يتطلب خدمة مصادقة">مراجعة الصلاحيات</button></td></tr>`).join("")}</tbody></table></div></section>`;
}

function renderAnalytics() {
  const bars=[["سبتمبر",44],["أكتوبر",68],["نوفمبر",52],["ديسمبر",78],["يناير",63],["فبراير",90]];
  return `${adminHeading('<button class="admin-button" data-admin-notice="التصدير يتطلب ربط تقارير الخادم">↓ تصدير التقرير</button>')}${adminStats([{label:"المستخدمون النشطون",value:"1,248",icon:"♧"},{label:"الدورات المكتملة",value:"386",icon:"✓",color:"purple"},{label:"إكمال المسارات",value:"74%",icon:"▤",color:"yellow"},{label:"متوسط التقييم",value:"4.7 / 5",icon:"☆",color:"coral"}])}<section class="admin-panel"><div class="admin-panel-heading"><h2>مؤشرات الاستخدام الشهرية</h2><small>بيانات تجريبية</small></div><div class="admin-chart">${bars.map(([month,value])=>`<div class="admin-chart-day"><span style="height:${value}%"></span><small>${month}</small></div>`).join("")}</div></section><div class="admin-layout"><section class="admin-panel"><div class="admin-panel-heading"><h2>الدورات الأكثر تفاعلًا</h2></div>${adminTable({data:"courses",columns:[["name","الدورة"],["enrollments","التسجيلات"],["status","الحالة"]],status:"status",icon:"▤"})}</section><section class="admin-panel"><div class="admin-panel-heading"><h2>مؤشرات التعلّم</h2></div>${[["إكمال الدروس",78],["العودة الأسبوعية",64],["النجاح في الاختبارات",82]].map(([title,value])=>`<div class="admin-setting"><span><strong>${title}</strong><small>${value}%</small></span><span style="width:48%;height:6px;border-radius:9px;background:linear-gradient(to left,var(--admin-green) ${value}%,#edf0e9 ${value}%)"></span></div>`).join("")}</section></div>`;
}

function renderReports() {
  return `${adminHeading()}<div class="admin-cards">${[["تقرير المستخدمين","التسجيلات والأدوار وحالة الحساب","users.html","♧"],["تقرير المحتوى","الدورات والدروس والنشر","courses.html","▤"],["تقرير التعلّم","التقدّم والاختبارات والشهادات","analytics.html","↗"],["التقرير المالي","الاشتراكات والمدفوعات والقسائم","payments.html","＄"]].map(([title,description,href,icon])=>`<article class="admin-panel"><span class="admin-cell-icon">${icon}</span><h2>${title}</h2><p class="admin-list-copy">${description}</p><a class="admin-button" href="${href}">فتح التقرير ←</a></article>`).join("")}</div><p class="admin-notice">الأرقام والتقارير المعروضة هنا أمثلة ثابتة وليست بيانات تشغيلية.</p>`;
}

function renderSettings() {
  const settings=adminFile==="website-settings.html"?[["اسم الموقع","الاسم الظاهر للزوار","اسم المنصة"],["وصف المنصة","وصف الصفحة الرئيسية","مساحة تعلم عربية للمواد والعلوم"],["البريد الرسمي","عنوان التواصل العام","support@example.com"]]:adminFile==="email-settings.html"?[["اسم المرسل","الاسم الظاهر في الرسائل","فريق اتقان"],["بريد المرسل","عنوان البريد المرسل","no-reply@example.com"],["إشعارات البريد","تفعيل إرسال البريد",""]]:[["التحقق بخطوتين","طلب تحقق إضافي للمشرفين",""],["تقييد محاولات الدخول","حد المحاولات قبل إيقاف مؤقت","5"],["مدة الجلسة","مدة صلاحية الجلسة بالدقائق","60"],["سجل الأنشطة","تسجيل العمليات الإدارية",""]];
  const store=adminReadStore(), saved=store[adminFile]||{};
  const rows=settings.map(([title,description,value],index)=>`<div class="admin-setting"><span><strong>${title}</strong><small>${description}</small></span>${value?`<input class="admin-filter" data-setting-field="${index}" aria-label="${title}" value="${adminEscape(saved[index]??value)}">`:`<button class="admin-toggle" type="button" role="switch" aria-checked="${saved[index]??(index!==1)}" aria-label="${title}"></button>`}</div>`).join("");
  return `${adminHeading('<button class="admin-button primary" data-save-settings>حفظ التغييرات</button>')}<div class="admin-notice">إعدادات توضيحية محفوظة على هذا الجهاز فقط. إعدادات الأمان والبريد الفعلية يجب تنفيذها والتحقق منها على الخادم.</div><section class="admin-panel"><div class="admin-panel-heading"><h2>${adminPage[0]}</h2></div>${rows}</section>`;
}

function renderPage() {
  const content=document.querySelector("#admin-content");
  if(adminFile==="dashboard.html")content.innerHTML=renderDashboard();
  else if(adminFile==="roles-permissions.html")content.innerHTML=renderRoles();
  else if(adminFile==="analytics.html")content.innerHTML=renderAnalytics();
  else if(adminFile==="reports.html")content.innerHTML=renderReports();
  else if(["website-settings.html","email-settings.html","security-settings.html"].includes(adminFile))content.innerHTML=renderSettings();
  else content.innerHTML=renderTablePage();
}

function showToast(message) {
  const toast=document.querySelector("#admin-toast");
  toast.textContent=message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer=window.setTimeout(()=>toast.classList.remove("show"),2500);
}

function openCreateModal() {
  const config=adminTableConfig[adminFile];
  const modal=document.querySelector("#admin-modal"),form=document.querySelector("#admin-modal-form");
  document.querySelector("#admin-modal-title").textContent=config.label||"إضافة سجل";
  const ignored=new Set(["id","joined","updated","date","started","renewal","expiry","uses","enrollments","lessons","attempts","participants","code"]);
  const columns=config.columns.filter(([key])=>!ignored.has(key));
  form.innerHTML=`<div class="admin-form-grid">${columns.map(([key,label],index)=>`<div class="admin-field${key==="description"?" full":""}"><label for="admin-field-${index}">${label}</label>${key==="role"?`<select id="admin-field-${index}" name="${key}" required><option>طالب</option><option>معلم</option><option>مشرف</option></select>`:key==="status"?`<select id="admin-field-${index}" name="${key}" required>${["نشط","منشور","مسودة","بانتظار المراجعة"].map((status)=>`<option>${status}</option>`).join("")}</select>`:key==="description"||key==="name"&&adminFile==="announcements.html"?`<textarea id="admin-field-${index}" name="${key}" required></textarea>`:`<input id="admin-field-${index}" name="${key}" ${key==="email"?'type="email"':""} required>`}</div>`).join("")}</div><div class="admin-form-actions"><button class="admin-button primary" type="submit">حفظ محليًا</button><button class="admin-button" type="button" data-close-modal>إلغاء</button></div><p class="admin-notice">تُحفظ السجلات التجريبية في هذا المتصفح فقط؛ لا تُنشأ حسابات ولا تُنشر بيانات حقيقية.</p>`;
  modal.hidden=false;
  form.querySelector("input,textarea,select")?.focus();
}

adminShell();
renderPage();

const sidebar=document.querySelector("#admin-sidebar"),overlay=document.querySelector("#admin-overlay"),menuButton=document.querySelector("#admin-menu-toggle");
function closeMenu() {
  sidebar.classList.remove("open");
  overlay.classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
  menuButton.setAttribute("aria-label","فتح القائمة");
}
menuButton.addEventListener("click",()=>{
  const open=sidebar.classList.toggle("open");
  overlay.classList.toggle("open",open);
  menuButton.setAttribute("aria-expanded",String(open));
  menuButton.setAttribute("aria-label",open?"إغلاق القائمة":"فتح القائمة");
});
overlay.addEventListener("click",closeMenu);
sidebar.addEventListener("click",(event)=>{if(event.target.closest("a"))closeMenu();});

document.addEventListener("click",(event)=>{
  if(event.target.closest("[data-open-create]"))openCreateModal();
  if(event.target.closest("#admin-modal-close,[data-close-modal]"))document.querySelector("#admin-modal").hidden=true;
  const notice=event.target.closest("[data-admin-notice]");
  if(notice)showToast(notice.dataset.adminNotice);
  const toggle=event.target.closest(".admin-toggle");
  if(toggle)toggle.setAttribute("aria-checked",String(toggle.getAttribute("aria-checked")!=="true"));
  const rowAction=event.target.closest("[data-record-action]");
  if(rowAction) {
    const config=adminTableConfig[adminFile],store=adminReadStore();
    const records=adminRecords(config.data),record=records.find((item)=>item.id===rowAction.dataset.record);
    if(!record)return;
    const next=record.status==="نشط"||record.status==="منشور"?"موقوف":record.status==="موقوف"?"نشط":"قيد المراجعة";
    store[config.data]=store[config.data]||[];
    const existing=store[config.data].findIndex((item)=>item.id===record.id);
    if(existing>=0)store[config.data][existing]={...store[config.data][existing],status:next};
    else store[config.data].push({...record,status:next});
    adminWriteStore(store);
    renderPage();
    showToast(`تغيرت الحالة محليًا إلى: ${next}`);
  }
  if(event.target.matches("[data-select-all]"))document.querySelectorAll("[data-admin-row] .admin-check").forEach((checkbox)=>checkbox.checked=event.target.checked);
  if(event.target.closest("[data-save-settings]")) {
    const store=adminReadStore(),settings={};
    document.querySelectorAll("[data-setting-field]").forEach((input)=>settings[input.dataset.settingField]=input.value);
    document.querySelectorAll(".admin-toggle").forEach((button,index)=>settings[index+document.querySelectorAll("[data-setting-field]").length]=button.getAttribute("aria-checked")==="true");
    store[adminFile]=settings;adminWriteStore(store);showToast("حُفظت الإعدادات محليًا.");
  }
});

document.querySelector("#admin-modal").addEventListener("click",(event)=>{if(event.target===event.currentTarget)event.currentTarget.hidden=true;});
document.addEventListener("keydown",(event)=>{if(event.key==="Escape"){document.querySelector("#admin-modal").hidden=true;closeMenu();}});

function filterAdminRows() {
  const queries=[...document.querySelectorAll("#admin-search,[data-table-search]")].map((input)=>input.value.trim().toLocaleLowerCase("ar")).filter(Boolean);
  const status=document.querySelector("[data-status-filter]")?.value||"";
  const rows=[...document.querySelectorAll("[data-admin-row]")];
  let visible=0;
  rows.forEach((row)=>{
    const text=row.textContent.toLocaleLowerCase("ar");
    const matchesQuery=queries.every((query)=>text.includes(query));
    const matchesStatus=!status||row.dataset.status===status;
    row.hidden=!(matchesQuery&&matchesStatus);
    if(!row.hidden)visible++;
  });
  const empty=document.querySelector("[data-empty-result]");
  if(empty)empty.hidden=visible>0;
}
document.querySelector("#admin-search").addEventListener("input",filterAdminRows);
document.querySelector("[data-table-search]")?.addEventListener("input",filterAdminRows);
document.querySelector("[data-status-filter]")?.addEventListener("change",filterAdminRows);

document.querySelector("#admin-modal-form").addEventListener("submit",(event)=>{
  event.preventDefault();
  const config=adminTableConfig[adminFile],form=event.currentTarget;
  if(!config||!form.reportValidity())return;
  const store=adminReadStore(),record=Object.fromEntries(new FormData(form).entries());
  record.id=`demo-${Date.now()}`;
  if(["students.html","teachers.html","administrators.html"].includes(adminFile))record.role=adminFile==="students.html"?"طالب":adminFile==="teachers.html"?"معلم":"مشرف";
  if(["users.html","students.html","teachers.html","administrators.html"].includes(adminFile))record.joined=new Intl.DateTimeFormat("ar-SA",{day:"numeric",month:"short",year:"numeric"}).format(new Date());
  if(!record.status)record.status="نشط";
  store[config.data]=store[config.data]||[];
  store[config.data].push(record);
  adminWriteStore(store);
  document.querySelector("#admin-modal").hidden=true;
  renderPage();
  showToast("أُضيف السجل التجريبي على هذا الجهاز.");
});
