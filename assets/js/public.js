const subjects = [
  { id: "english", name: "اللغة الإنجليزية", category: "لغات", level: "جميع المستويات", symbol: "Aa", color: "#f2dfc9", ink: "#9a6b43", description: "طوّر مفرداتك ومحادثتك وقواعدك، من أول كلمة إلى الطلاقة.", lessons: 24, duration: "12 ساعة", units: ["التحية والتعارف","المفردات اليومية","الأزمنة الأساسية","محادثات الحياة اليومية"] },
  { id: "physics", name: "الفيزياء", category: "علوم", level: "المرحلة الثانوية", symbol: "∑", color: "#e9e6f5", ink: "#7163a3", description: "اكتشف قوانين الحركة والطاقة وفهم الظواهر من حولك.", lessons: 18, duration: "9 ساعات", units: ["الحركة والسرعة","قوانين نيوتن","الشغل والطاقة","الكهرباء والمغناطيسية"] },
  { id: "chemistry", name: "الكيمياء", category: "علوم", level: "المرحلة الثانوية", symbol: "⚗", color: "#e3f0e9", ink: "#527c61", description: "افهم العناصر والروابط والتفاعلات الكيميائية بأسلوب مبسّط.", lessons: 16, duration: "8 ساعات", units: ["تركيب الذرة","الجدول الدوري","الروابط الكيميائية","التفاعلات والمحاليل"] },
  { id: "math", name: "الرياضيات", category: "رياضيات", level: "جميع المستويات", symbol: "÷", color: "#f5e6e7", ink: "#a7636b", description: "ابنِ مهاراتك في الأعداد والجبر والهندسة خطوة بخطوة.", lessons: 22, duration: "11 ساعة", units: ["الأعداد والعمليات","المعادلات الخطية","الهندسة والقياس","الإحصاء والاحتمالات"] },
  { id: "arabic", name: "اللغة العربية", category: "لغات", level: "جميع المستويات", symbol: "ض", color: "#eee7f2", ink: "#876a92", description: "قوّ مهاراتك في القراءة والكتابة والنحو والتعبير.", lessons: 20, duration: "10 ساعات", units: ["مهارات القراءة","النحو والصرف","الكتابة والتعبير","البلاغة والأدب"] }
];

const quizItems = [
  { id: "physics-motion", title: "اختبار قوانين الحركة", subject: "الفيزياء", questions: 10, duration: 15, sample: [{q:"ما وحدة قياس السرعة في النظام الدولي؟",answers:["متر لكل ثانية","كيلوغرام","نيوتن"],correct:0},{q:"أي قانون يربط القوة بالكتلة والتسارع؟",answers:["قانون نيوتن الأول","قانون نيوتن الثاني","قانون نيوتن الثالث"],correct:1},{q:"إذا زادت المسافة وثبت الزمن، فإن السرعة:",answers:["تقل","تبقى ثابتة","تزداد"],correct:2}] },
  { id: "english-vocabulary", title: "مفردات الوحدة الأولى", subject: "اللغة الإنجليزية", questions: 8, duration: 10, sample: [{q:"What does “hello” mean?",answers:["مرحبًا","إلى اللقاء","شكرًا"],correct:0},{q:"Choose the English word for “كتاب”.",answers:["Table","Book","Window"],correct:1},{q:"What is the opposite of “big”?",answers:["Small","Tall","Long"],correct:0}] },
  { id: "math-equations", title: "المعادلات الخطية", subject: "الرياضيات", questions: 10, duration: 15, sample: [{q:"إذا كان س + ٣ = ٧، فما قيمة س؟",answers:["٣","٤","١٠"],correct:1},{q:"ما ناتج ٢س عندما س = ٥؟",answers:["٧","١٠","٢٥"],correct:1},{q:"حل المعادلة ٣س = ١٢.",answers:["٣","٤","٩"],correct:1}] },
  { id: "chemistry-atoms", title: "تركيب الذرة", subject: "الكيمياء", questions: 8, duration: 12, sample: [{q:"ما الجسيم ذو الشحنة السالبة؟",answers:["البروتون","النيوترون","الإلكترون"],correct:2},{q:"أين تتركز معظم كتلة الذرة؟",answers:["في النواة","في الإلكترونات","في المدار الخارجي"],correct:0},{q:"ما شحنة البروتون؟",answers:["سالبة","موجبة","متعادل"],correct:1}] }
];

const lessonVocabulary = {
  english: [
    [["Hello", "مرحبًا"], ["Good morning", "صباح الخير"], ["Goodbye", "إلى اللقاء"], ["Please", "من فضلك"], ["Thank you", "شكرًا"], ["How are you?", "كيف حالك؟"]],
    [["Family", "عائلة"], ["Friend", "صديق"], ["School", "مدرسة"], ["Book", "كتاب"], ["Water", "ماء"], ["House", "منزل"]]
  ],
  physics: [
    [["Motion", "حركة"], ["Speed", "سرعة"], ["Distance", "مسافة"], ["Time", "زمن"], ["Force", "قوة"], ["Direction", "اتجاه"]],
    [["Force", "قوة"], ["Mass", "كتلة"], ["Acceleration", "تسارع"], ["Inertia", "قصور ذاتي"], ["Action", "فعل"], ["Reaction", "رد فعل"]]
  ],
  chemistry: [
    [["Atom", "ذرة"], ["Proton", "بروتون"], ["Neutron", "نيوترون"], ["Electron", "إلكترون"], ["Nucleus", "نواة"], ["Element", "عنصر"]],
    [["Periodic table", "الجدول الدوري"], ["Element", "عنصر"], ["Group", "مجموعة"], ["Period", "دورة"], ["Metal", "فلز"], ["Nonmetal", "لافلز"]]
  ],
  math: [
    [["Number", "عدد"], ["Addition", "جمع"], ["Subtraction", "طرح"], ["Multiply", "يضرب"], ["Divide", "يقسم"], ["Equal", "يساوي"]],
    [["Equation", "معادلة"], ["Variable", "متغير"], ["Solve", "يحل"], ["Expression", "عبارة رياضية"], ["Equals", "يساوي"], ["Unknown", "مجهول"]]
  ],
  arabic: [
    [["Reading", "قراءة"], ["Text", "نص"], ["Meaning", "معنى"], ["Sentence", "جملة"], ["Word", "كلمة"], ["Idea", "فكرة"]],
    [["Noun", "اسم"], ["Verb", "فعل"], ["Subject", "مبتدأ"], ["Predicate", "خبر"], ["Grammar", "نحو"], ["Sentence", "جملة"]]
  ]
};

const lessonQuestions = {
  english: [
    { q: "What does “Hello” mean?", answers: ["مرحبًا", "إلى اللقاء", "من فضلك"], correct: 0 },
    { q: "Choose the English word for “كتاب”.", answers: ["Pen", "Book", "School"], correct: 1 },
    { q: "What does “Thank you” mean?", answers: ["صباح الخير", "شكرًا", "كيف حالك؟"], correct: 1 },
    { q: "Complete the greeting: Good ___.", answers: ["morning", "book", "please"], correct: 0 },
    { q: "What does “Friend” mean?", answers: ["مدرسة", "صديق", "منزل"], correct: 1 },
    { q: "Choose the English word for “ماء”.", answers: ["Water", "Family", "Time"], correct: 0 },
    { q: "What does “Goodbye” mean?", answers: ["مرحبًا", "إلى اللقاء", "شكرًا"], correct: 1 }
  ],
  physics: [
    { q: "ما المقصود بالسرعة؟", answers: ["المسافة المقطوعة خلال الزمن", "كتلة الجسم", "درجة حرارة الجسم"], correct: 0 },
    { q: "ما وحدة قياس الزمن؟", answers: ["المتر", "الثانية", "الكيلوغرام"], correct: 1 },
    { q: "ما وحدة قياس المسافة في النظام الدولي؟", answers: ["المتر", "النيوتن", "الثانية"], correct: 0 },
    { q: "إذا قطع جسم مسافة أكبر في الزمن نفسه، فإن سرعته:", answers: ["تزداد", "تقل", "تنعدم"], correct: 0 },
    { q: "ما الذي يغيّر حركة الجسم؟", answers: ["القوة", "اللون", "الشكل فقط"], correct: 0 },
    { q: "أي مما يلي كمية متجهة؟", answers: ["الكتلة", "الزمن", "الإزاحة"], correct: 2 },
    { q: "تقاس القوة بوحدة:", answers: ["نيوتن", "متر", "لتر"], correct: 0 }
  ],
  chemistry: [
    { q: "ما أصغر وحدة تحتفظ بخصائص العنصر؟", answers: ["الذرة", "المركب", "المحلول"], correct: 0 },
    { q: "ما شحنة البروتون؟", answers: ["موجبة", "سالبة", "متعادل"], correct: 0 },
    { q: "ما شحنة الإلكترون؟", answers: ["موجبة", "سالبة", "متعادل"], correct: 1 },
    { q: "أين تتركز معظم كتلة الذرة؟", answers: ["في النواة", "في الإلكترونات", "خارج الذرة"], correct: 0 },
    { q: "ما الجسيم المتعادل كهربائيًا؟", answers: ["البروتون", "الإلكترون", "النيوترون"], correct: 2 },
    { q: "ترتب العناصر في:", answers: ["الجدول الدوري", "المسطرة", "الميزان"], correct: 0 },
    { q: "العدد الذري يساوي عدد:", answers: ["البروتونات", "النيوترونات فقط", "الجزيئات"], correct: 0 }
  ],
  math: [
    { q: "إذا كان س + ٣ = ٧، فما قيمة س؟", answers: ["٣", "٤", "١٠"], correct: 1 },
    { q: "ما ناتج ٢س عندما س = ٥؟", answers: ["٧", "١٠", "٢٥"], correct: 1 },
    { q: "حل المعادلة ٣س = ١٢.", answers: ["٣", "٤", "٩"], correct: 1 },
    { q: "ما العملية العكسية للجمع؟", answers: ["الطرح", "الضرب", "القسمة"], correct: 0 },
    { q: "إذا كان ص - ٢ = ٥، فإن ص =", answers: ["٣", "٧", "١٠"], correct: 1 },
    { q: "ما قيمة ٤ + ٦؟", answers: ["١٠", "١٢", "٢٤"], correct: 0 },
    { q: "الرمز الذي يمثل قيمة مجهولة يسمى:", answers: ["متغيرًا", "ناتجًا", "وحدة قياس"], correct: 0 }
  ],
  arabic: [
    { q: "ما الفكرة الرئيسة للنص؟", answers: ["المعنى الأساسي الذي يدور حوله النص", "عنوان الكتاب فقط", "اسم الكاتب"], correct: 0 },
    { q: "أيّ مما يلي يُعد كلمة؟", answers: ["مدرسة", "في", "كل ما سبق"], correct: 2 },
    { q: "تتكوّن الجملة المفيدة من كلمات:", answers: ["تعطي معنى تامًا", "بلا ترتيب", "لا تحمل معنى"], correct: 0 },
    { q: "ما المهارة التي تساعد على فهم النص المكتوب؟", answers: ["القراءة", "العدّ", "الرسم فقط"], correct: 0 },
    { q: "أيّ مما يلي اسم؟", answers: ["يكتب", "كتاب", "اكتب"], correct: 1 },
    { q: "الكلمة التي تدل على حدث وزمن تسمى:", answers: ["اسمًا", "فعلًا", "حرفًا"], correct: 1 },
    { q: "تساعد علامات الترقيم على:", answers: ["تنظيم القراءة والمعنى", "تغيير لون النص", "حذف الكلمات"], correct: 0 }
  ]
};

const faqItems = [
  { q: "ما هي منصة اتقان؟", a: "اتقان منصة تعليمية عربية تجمع مواد دراسية متنوعة في مكان واحد، مع دروس مبسّطة وتمارين واختبارات لمساعدتك على التعلّم خطوة بخطوة." },
  { q: "هل يمكنني التعلّم من الهاتف؟", a: "نعم، واجهة اتقان مصممة لتعمل على الهاتف والجهاز اللوحي والحاسوب." },
  { q: "كيف أتابع تقدّمي؟", a: "أنشئ حسابًا ثم افتح مساحة الطالب لمتابعة الدورات والدروس والتقدّم والنتائج." },
  { q: "هل جميع المواد مجانية؟", a: "يمكن استعراض المواد والدروس المتاحة مجانًا، وتختلف مزايا المسارات حسب الخطة المعروضة في صفحة الأسعار." },
  { q: "كيف أتواصل مع فريق الدعم؟", a: "استخدم نموذج التواصل في صفحة اتصل بنا، أو راجع صفحة المساعدة من مساحة الطالب." }
];

const navigation = [
  ["index.html", "الرئيسية"], ["courses.html", "المواد"], ["lessons.html", "الدروس"],
  ["exercises.html", "التمارين"], ["quizzes.html", "الاختبارات"], ["about.html", "عن اتقان"]
];
const pageKey = document.body.dataset.page || "404";
const pageTitle = {
  about:"عن اتقان", contact:"اتصل بنا", courses:"المواد الدراسية", "course-details":"تفاصيل المادة",
  lessons:"الدروس", "lesson-details":"تفاصيل الدرس", exercises:"التمارين", quizzes:"الاختبارات القصيرة",
  "quiz-details":"تفاصيل الاختبار", exams:"الاختبارات النهائية", certificates:"الشهادات",
  pricing:"الأسعار", faq:"الأسئلة الشائعة", login:"تسجيل الدخول", register:"إنشاء حساب",
  "forgot-password":"استعادة كلمة المرور", "privacy-policy":"سياسة الخصوصية",
  "terms-of-service":"الشروط والأحكام", "404":"الصفحة غير موجودة"
};

function getSubject() {
  const id = new URLSearchParams(window.location.search).get("id");
  return subjects.find((subject) => subject.id === id) || subjects[0];
}

function brandMarkup() {
  return '<a class="public-brand" href="index.html" aria-label="اتقان، الصفحة الرئيسية"><span class="public-brand-mark">إ</span><span>اتقان<span class="public-brand-dot">.</span></span></a>';
}

function shell() {
  const activeFile = pageKey === "course-details" ? "courses.html" : pageKey === "lesson-details" ? "lessons.html" : `${pageKey}.html`;
  const navItems = navigation.map(([href,label]) => `<a href="${href}"${href === activeFile ? ' aria-current="page"' : ""}>${label}</a>`).join("");
  document.querySelector("#public-app").innerHTML = `<a class="public-skip" href="#public-main">انتقل إلى المحتوى</a><header class="public-header"><div class="public-container public-nav-wrap">${brandMarkup()}<button class="public-menu-toggle" type="button" aria-expanded="false" aria-label="فتح القائمة">☰</button><nav class="public-nav" aria-label="التنقل الرئيسي">${navItems}</nav><div class="public-actions"><a class="public-button small login-link" href="login.html">دخول</a><a class="public-button primary small" href="register.html">ابدأ التعلّم</a></div></div></header><main class="public-main" id="public-main"></main><footer class="public-footer"><div class="public-container"><div class="public-footer-main">${brandMarkup()}<nav class="public-footer-links" aria-label="روابط تذييل الصفحة"><a href="courses.html">المواد</a><a href="lessons.html">الدروس</a><a href="exercises.html">التمارين</a><a href="quizzes.html">الاختبارات</a><a href="exams.html">الاختبارات النهائية</a><a href="certificates.html">الشهادات</a><a href="about.html">عن اتقان</a><a href="contact.html">اتصل بنا</a><a href="pricing.html">الأسعار</a><a href="faq.html">الأسئلة الشائعة</a><a href="privacy-policy.html">الخصوصية</a><a href="terms-of-service.html">الشروط</a></nav></div><div class="public-copyright">© <span id="public-year"></span> اتقان. جميع الحقوق محفوظة.</div></div></footer><div class="public-notice" id="public-notice" role="status" aria-live="polite"></div>`;
  document.title = `${pageTitle[pageKey] || "اتقان"} | اتقان`;
  document.querySelector("#public-year").textContent = new Date().getFullYear();
}

function heading(title, description, action = "") {
  return `<div class="public-page-heading"><h1>${title}</h1><p>${description}</p>${action ? `<div class="public-hero-actions">${action}</div>` : ""}</div>`;
}

function subjectCard(subject) {
  return `<a class="public-card subject-card" href="course-details.html?id=${subject.id}" data-category="${subject.category}" data-search="${subject.name} ${subject.description} ${subject.level}"><div class="public-card-color" style="--card-color:${subject.color};--card-ink:${subject.ink}">${subject.symbol}</div><div class="public-card-body"><div class="public-card-meta"><span>${subject.category}</span><span>${subject.lessons} درسًا</span></div><h3>${subject.name}</h3><p>${subject.description}</p><div class="public-card-bottom"><span>استكشف المادة</span><span>←</span></div></div></a>`;
}

function renderCourses() {
  return `<section class="public-section"><div class="public-container">${heading("تعلّم مادة تحبّها","مسارات واضحة ودروس مناسبة لمستواك.")}<div class="public-toolbar"><div class="public-filter-list" role="group" aria-label="تصفية المواد"><button class="public-filter active" data-category="all" aria-pressed="true">كل المواد</button><button class="public-filter" data-category="لغات" aria-pressed="false">اللغات</button><button class="public-filter" data-category="علوم" aria-pressed="false">العلوم</button><button class="public-filter" data-category="رياضيات" aria-pressed="false">الرياضيات</button></div><label class="public-search"><span aria-hidden="true">⌕</span><input type="search" id="public-course-search" placeholder="ابحث عن مادة..." aria-label="ابحث عن مادة"></label></div><div class="public-grid" id="public-course-grid">${subjects.map(subjectCard).join("")}</div><p class="public-empty" id="public-course-empty" hidden>لا توجد مواد تطابق بحثك.</p></div></section>`;
}

function renderHome() {
  return `<section class="public-hero"><div class="public-container public-hero-inner"><div><span class="public-eyebrow">مساحة واحدة، فرص بلا حدود</span><h1>تعلّم اليوم،<br>وأتقن غدًا.</h1><p>اكتشف موادك المفضلة وتعلّمها بأسلوب واضح يجمع بين الدروس المبسّطة والتطبيق العملي.</p><div class="public-hero-actions"><a class="public-button primary" href="courses.html">استكشف المواد ←</a><a class="public-button" href="pages/student/dashboard.html">مساحة الطالب</a></div></div><div class="public-hero-art" aria-label="رمز التعليم">✦</div></div></section><section class="public-section"><div class="public-container"><div class="public-section-heading"><div><h2>اختر مسارك التعليمي</h2><p>علوم ولغات ورياضيات، في مكان واحد.</p></div><a class="public-button" href="courses.html">جميع المواد ←</a></div><div class="public-grid">${subjects.map(subjectCard).join("")}</div></div></section><section class="public-section" style="background:#edf2e9"><div class="public-container public-two-col"><div><span class="public-eyebrow">خطوات بسيطة تصنع فرقًا</span><h2>تعلّم، طبّق، وتقدّم.</h2><p class="public-form-note">ابدأ باختيار مادة، تابع درسًا قصيرًا، ثم اختبر فهمك بتمرين أو اختبار تفاعلي.</p></div><div class="public-panel"><ol class="public-list"><li><strong>١. اختر المادة</strong>استكشف المسارات واختر المستوى المناسب لك.</li><li><strong>٢. تعلّم بالتدريج</strong>تابع الدروس والملخصات والأمثلة.</li><li><strong>٣. طبّق ما تعلّمته</strong>اختبر فهمك وتابع تقدّمك في مساحة الطالب.</li></ol></div></div></section>`;
}

function renderCourseDetails() {
  const subject = getSubject();
  const lessons = subject.units.map((unit,index) => `<li><a class="course-lesson-link" href="lesson-details.html?id=${subject.id}&lesson=${index+1}"><strong>الدرس ${index+1}: ${unit}</strong>${index === 0 ? "شرح ومفاهيم أساسية · ٢٠ درجة" : "شرح مبسّط وتمرين تطبيقي · ٢٠ درجة"}</a></li>`).join("");
  return `<section class="public-section"><div class="public-container">${heading(subject.name,subject.description,'<a class="public-button primary" href="register.html">ابدأ التعلّم ←</a>')}<div class="public-detail-layout"><div class="public-panel"><div class="public-section-heading"><div><h2>محتوى المسار</h2><p>${subject.units.length} وحدات تعليمية · ${subject.lessons} درسًا</p></div></div><ul class="public-list">${lessons}</ul></div><aside class="public-panel"><span class="public-badge">${subject.level}</span><h2 style="font-size:16px">${subject.name}</h2><p class="public-form-note">${subject.lessons} درسًا · ${subject.duration} · تمارين واختبارات قصيرة.</p><a class="public-button primary" href="register.html">سجّل وابدأ الآن</a><p class="public-form-note">يمكنك متابعة المواد من أي جهاز.</p></aside></div></div></section>`;
}

function renderLessons() {
  const cards = subjects.flatMap((subject) => subject.units.slice(0,2).map((unit,index) => `<a class="public-card" href="lesson-details.html?id=${subject.id}&lesson=${index+1}"><div class="public-card-color" style="--card-color:${subject.color};--card-ink:${subject.ink}">${subject.symbol}</div><div class="public-card-body"><div class="public-card-meta"><span>${subject.name}</span><span>${10+index*5} دقيقة</span></div><h3>${unit}</h3><p>درس تعليمي مع شرح ومثال تطبيقي.</p><div class="public-card-bottom"><span>افتح الدرس</span><span>←</span></div></div></a>`)).join("");
  return `<section class="public-section"><div class="public-container">${heading("الدروس","اختر درسًا وابدأ التعلّم حسب المادة التي تتابعها.")}<div class="public-grid">${cards}</div></div></section>`;
}

function renderLessonDetails() {
  const subject=getSubject(), params=new URLSearchParams(location.search);
  const requestedNumber=Number(params.get("lesson"))||1;
  const number=Math.min(Math.max(requestedNumber,1),subject.units.length);
  const unit=subject.units[number-1];
  const videoId=/^[\w-]{11}$/.test(params.get("video")||"")?params.get("video"):"M7lc1UVf-VE";
  const vocabulary=(lessonVocabulary[subject.id]||lessonVocabulary.english)[(number-1)%2];
  const words=vocabulary.map(([word,translation])=>`<li class="lesson-word"><strong lang="en" dir="ltr">${word}</strong><span>${translation}</span></li>`).join("");
  const questions=(lessonQuestions[subject.id]||lessonQuestions.english).map((question,index)=>`<fieldset class="lesson-question"><legend>${index+1}. ${question.q}</legend>${question.answers.map((answer,answerIndex)=>`<label class="lesson-answer"><input type="radio" name="q${index}" value="${answerIndex}" required><span>${answer}</span></label>`).join("")}</fieldset>`).join("");
  const videoUrl=`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
  const steps=[["video","الفيديو"],["words","الكلمات"],["quiz","الأسئلة"]];
  const stepButtons=steps.map(([id,label],index)=>`<button class="lesson-step" type="button" data-step-target="${id}" aria-current="${index===0?"step":"false"}"><span>${index+1}</span>${label}</button>`).join("");
  const unitLinks=subject.units.map((item,index)=>`<li><a href="lesson-details.html?id=${subject.id}&lesson=${index+1}"${index+1===number?' aria-current="page"':""}><strong>${index+1}. ${item}</strong>${index+1===number?"الدرس الحالي · ٢٠ درجة":"شرح وأسئلة · ٢٠ درجة"}</a></li>`).join("");
  return `<section class="public-section lesson-page"><div class="public-container">${heading(unit,`${subject.name} · الدرس ${number} · الدرجة الكاملة ٢٠`)}<div class="lesson-progress-panel"><div class="lesson-progress-heading"><strong>تقدّم الدرس</strong><span><b id="lesson-score">٠</b> من ٢٠ درجة</span></div><progress id="lesson-progress" max="20" value="0" aria-label="تقدّم الدرس"></progress><div class="lesson-progress-meta"><span id="lesson-progress-label">ابدأ الفيديو لزيادة التقدّم</span><button class="public-button small" id="lesson-bookmark" type="button">♡ احفظ الدرس</button></div></div><div class="public-detail-layout lesson-layout"><div class="lesson-main"><nav class="lesson-steps" aria-label="أقسام الدرس">${stepButtons}</nav><section class="lesson-section" data-lesson-section="video"><span class="public-badge">القسم الأول · الفيديو</span><h2>شاهد شرح الدرس</h2><p>تابع الفيديو، ثم اختر الانتقال للقسم التالي لتسجيل تقدّمك.</p><div class="lesson-video-wrap"><iframe src="${videoUrl}" title="فيديو YouTube: ${unit}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p class="lesson-video-help">فيديو معاينة YouTube؛ لعرض الفيديو الخاص بالدرس مرّر معرّفه في الرابط عبر <code>?id=${subject.id}&amp;lesson=${number}&amp;video=VIDEO_ID</code>.</p><a class="lesson-video-link" href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener noreferrer">مشاهدة الفيديو على YouTube</a><button class="public-button primary lesson-next" type="button" data-next-step="words">أنهيت مشاهدة الفيديو · التالي ←</button></section><section class="lesson-section" data-lesson-section="words" hidden><span class="public-badge">القسم الثاني · الكلمات</span><h2>كلمات ومعانيها</h2><p>اقرأ الكلمات الإنجليزية ومعنى كل كلمة قبل حل الأسئلة.</p><ul class="lesson-words">${words}</ul><button class="public-button primary lesson-next" type="button" data-next-step="quiz">انتهيت من مراجعة الكلمات · التالي ←</button></section><section class="lesson-section" data-lesson-section="quiz" hidden><span class="public-badge">القسم الثالث · الأسئلة</span><h2>اختبر فهمك</h2><p>أجب عن الأسئلة السبعة. لكل إجابة صحيحة درجتان من مجموع ١٤ درجة لهذا القسم.</p><form id="lesson-quiz-form"><div class="lesson-questions">${questions}</div><button class="public-button primary" type="submit">تحقّق من إجاباتي</button></form><p class="lesson-quiz-result" id="lesson-quiz-result" role="status" aria-live="polite" hidden></p></section></div><aside class="public-panel lesson-sidebar"><h2>محتوى الوحدة</h2><ol class="public-list">${unitLinks}</ol><p class="lesson-score-note">تُحفظ الدرجة والتقدّم محليًا على هذا الجهاز في هذه النسخة التجريبية.</p></aside></div></div></section>`;
}

function renderExercises() {
  const list=subjects.map((subject,index)=>`<li class="public-row"><strong>${subject.name} — تدريب ${index+1}</strong>${subject.units[0]} · 5 أسئلة<a class="public-button small" style="float:left" href="lesson-details.html?id=${subject.id}&lesson=1">ابدأ التدريب</a></li>`).join("");
  return `<section class="public-section"><div class="public-container">${heading("تمارين تفاعلية","طبّق ما تعلّمته وثبّت المعلومات خطوة بخطوة.")}<ul class="public-list">${list}</ul></div></section>`;
}

function renderQuizzes() {
  const cards=quizItems.map((quiz,index)=>`<a class="public-card quiz-card" href="quiz-details.html?id=${quiz.id}"><div class="public-card-color" style="--card-color:${["#e9e6f5","#f2dfc9","#f5e6e7","#e3f0e9"][index]};--card-ink:#52724f">؟</div><div class="public-card-body"><div class="public-card-meta"><span>${quiz.subject}</span><span>${quiz.duration} دقيقة</span></div><h3>${quiz.title}</h3><p>${quiz.sample.length} أسئلة تجريبية لمراجعة فهمك.</p><div class="public-card-bottom"><span>ابدأ الاختبار</span><span>←</span></div></div></a>`).join("");
  return `<section class="public-section"><div class="public-container">${heading("اختبر فهمك","اختبارات قصيرة مع تصحيح فوري لتعرف مدى تقدّمك.")}<div class="public-grid">${cards}</div></div></section>`;
}

function renderQuizDetails() {
  const id=new URLSearchParams(location.search).get("id"), quiz=quizItems.find((item)=>item.id===id)||quizItems[0];
  return `<section class="public-section"><div class="public-container">${heading(quiz.title,`${quiz.subject} · ${quiz.duration} دقيقة`)}<form id="public-quiz-form">${quiz.sample.map((question,index)=>`<fieldset class="public-quiz-question"><legend><h3>${index+1}. ${question.q}</h3></legend>${question.answers.map((answer,answerIndex)=>`<label class="public-answer"><input type="radio" name="q${index}" value="${answerIndex}" required>${answer}</label>`).join("")}</fieldset>`).join("")}<button class="public-button primary" type="submit">تحقّق من إجاباتي</button><p class="public-callout" id="quiz-result" hidden aria-live="polite"></p></form></div></section>`;
}

function renderExams() {
  const rows=subjects.map((subject,index)=>`<tr><td>${subject.name}</td><td>اختبار نهاية المسار</td><td>${15+index*5} سؤالًا</td><td><span class="public-badge">${index<2?"متاح للتدريب":"قريبًا"}</span></td><td><a href="quiz-details.html?id=${quizItems[index%quizItems.length].id}">التفاصيل ←</a></td></tr>`).join("");
  return `<section class="public-section"><div class="public-container">${heading("الاختبارات النهائية","راجع أهم المفاهيم وتحقق من استعدادك.")}<div class="public-table-wrap"><table class="public-table"><thead><tr><th>المادة</th><th>نوع الاختبار</th><th>الأسئلة</th><th>الحالة</th><th></th></tr></thead><tbody>${rows}</tbody></table></div><p class="public-form-note">المواعيد والنتائج الفعلية تعتمد على إعدادات حسابك.</p></div></section>`;
}

function renderCertificates() {
  return `<section class="public-section"><div class="public-container">${heading("شهادات اتقان","احتفِ بما تعلّمته وشارك إنجازاتك.")}<div class="public-two-col">${subjects.slice(0,2).map((subject)=>`<article class="public-panel" style="text-align:center;padding:29px"><span class="public-badge">نموذج شهادة</span><div class="public-card-color" style="height:95px;margin-block:13px;border-radius:9px;--card-color:${subject.color};--card-ink:${subject.ink}">${subject.symbol}</div><h2 style="font-size:14px">شهادة إتمام ${subject.name}</h2><p class="public-form-note">تُمنح الشهادة بعد إتمام المسار ومتطلباته.</p><a class="public-button" href="register.html">ابدأ المسار</a></article>`).join("")}</div></div></section>`;
}

function renderAbout() {
  return `<section class="public-section"><div class="public-container">${heading("التعلّم الجيد يبدأ بخطوة","اتقان مساحة تعليمية عربية تساعد الطلاب على فهم المواد واللغات بأسلوب واضح وعملي.")}<div class="public-two-col"><article class="public-panel"><span class="public-eyebrow">رؤيتنا</span><h2 style="font-size:16px">معرفة أقرب إلى الجميع</h2><p class="public-form-note">نؤمن أن التعلّم الواضح والممتع يساعد كل طالب على اكتشاف قدراته ومواصلة التقدّم بثقة.</p></article><article class="public-panel"><span class="public-eyebrow">طريقتنا</span><h2 style="font-size:16px">خطوات صغيرة، أثر مستمر</h2><p class="public-form-note">نرتّب المحتوى إلى مسارات ودروس قصيرة وتمارين عملية تساعد على بناء فهم متين.</p></article></div><div class="public-hero-actions"><a class="public-button primary" href="courses.html">اكتشف المواد ←</a><a class="public-button" href="contact.html">تواصل معنا</a></div></div></section>`;
}

function renderPricing() {
  return `<section class="public-section"><div class="public-container">${heading("خطط تساعدك على الاستمرار","ابدأ مجانًا، واختر الخطة المناسبة لرحلتك.")}<div class="public-grid"><article class="public-panel"><span class="public-badge">للبداية</span><h2 style="font-size:18px">الخطة المجانية</h2><p style="font-size:22px;font-weight:800">مجانًا</p><ul class="public-list"><li>استكشاف المواد والمسارات</li><li>دروس مختارة لكل مادة</li><li>اختبارات قصيرة</li></ul><a class="public-button" href="register.html">أنشئ حسابًا</a></article><article class="public-panel" style="border-color:#bfd2b8"><span class="public-badge">للتعلّم المستمر</span><h2 style="font-size:18px">خطة اتقان</h2><p style="font-size:22px;font-weight:800">قريبًا</p><ul class="public-list"><li>الوصول إلى مسارات تعليمية إضافية</li><li>متابعة التقدّم والإنجازات</li><li>محتوى وتمارين موسّعة</li></ul><button class="public-button primary" data-notice="سيتم الإعلان عن تفاصيل الخطة قريبًا">أبلغوني عند الإطلاق</button></article></div><p class="public-form-note">الأسعار والمزايا المعروضة تعريفية؛ لا توجد عمليات دفع مفعّلة في هذه النسخة.</p></div></section>`;
}

function renderFaq() {
  return `<section class="public-section"><div class="public-container">${heading("أسئلة شائعة","إجابات مختصرة تساعدك على بدء رحلتك.")}<div class="public-details">${faqItems.map((item)=>`<details><summary>${item.q}</summary><p>${item.a}</p></details>`).join("")}</div></div></section>`;
}

function renderContact() {
  return `<section class="public-section"><div class="public-container">${heading("يسعدنا تواصلك","أرسل سؤالك أو اقتراحك، وسنعود إليك.")}<form class="public-form demo-form"><div class="public-form-grid"><div class="public-field"><label for="contact-name">الاسم</label><input id="contact-name" name="name" required autocomplete="name"></div><div class="public-field"><label for="contact-email">البريد الإلكتروني</label><input id="contact-email" name="email" type="email" required autocomplete="email"></div></div><div class="public-field"><label for="contact-subject">الموضوع</label><select id="contact-subject" name="subject"><option>استفسار عام</option><option>الدورات والمحتوى</option><option>الدعم الفني</option><option>اقتراح</option></select></div><div class="public-field"><label for="contact-message">رسالتك</label><textarea id="contact-message" name="message" required></textarea></div><button class="public-button primary" type="submit">إرسال الرسالة</button><p class="public-form-note">هذا النموذج تجريبي ولا يرسل بيانات إلى خادم.</p></form></div></section>`;
}

function renderAuth(kind) {
  const config={login:["أهلًا بعودتك","سجّل الدخول للعودة إلى رحلتك التعليمية.",[["email","البريد الإلكتروني","email"],["password","كلمة المرور","password"]],"تسجيل الدخول"],register:["ابدأ رحلتك مع اتقان","أنشئ حسابًا لتتابع دروسك وتقدّمك.",[["name","الاسم الكامل","text"],["email","البريد الإلكتروني","email"],["password","كلمة المرور","password"],["confirm-password","تأكيد كلمة المرور","password"]],"إنشاء الحساب"],"forgot-password":["استعادة كلمة المرور","أدخل بريدك الإلكتروني لمعرفة الخطوات التالية.",[["email","البريد الإلكتروني","email"]],"إرسال التعليمات"]}[kind];
  const fields=config[2].map(([id,label,type])=>`<div class="public-field"><label for="auth-${id}">${label}</label><input id="auth-${id}" name="${id}" type="${type}" required ${type==="password"?'minlength="8"':""} autocomplete="${id==="confirm-password"?"new-password":id} ${type==="email"?'placeholder="name@example.com"':""}></div>`).join("");
  const extra=kind==="login"?'<a href="forgot-password.html" style="font-size:9px;color:#36724d">نسيت كلمة المرور؟</a>':kind==="register"?'<label class="public-answer"><input type="checkbox" required>أوافق على <a href="terms-of-service.html">الشروط والأحكام</a> وسياسة الخصوصية.</label>':"";
  const alt=kind==="login"?'ليس لديك حساب؟ <a href="register.html">أنشئ حسابًا</a>':kind==="register"?'لديك حساب؟ <a href="login.html">سجّل الدخول</a>':'تذكرت كلمة المرور؟ <a href="login.html">سجّل الدخول</a>';
  return `<section class="public-section"><div class="public-container">${heading(config[0],config[1])}<form class="public-form demo-form" data-auth="${kind}">${fields}${extra}<button class="public-button primary" type="submit">${config[3]}</button><p class="public-form-note">${alt}</p><p class="public-callout">واجهة تجريبية: لا يتم إنشاء حساب أو إرسال بيانات فعلية.</p></form></div></section>`;
}

function renderPolicy(isTerms) {
  const title=isTerms?"الشروط والأحكام":"سياسة الخصوصية", intro=isTerms?"توضح هذه الصفحة المبادئ العامة لاستخدام منصة اتقان في نسختها التجريبية.":"توضح هذه الصفحة أنواع البيانات التي قد تتعامل معها منصة اتقان عند تفعيل خدماتها.";
  const sections=isTerms?[["استخدام المنصة","استخدم المحتوى لأغراض التعلّم الشخصي، ولا تحاول تعطيل الخدمات أو إساءة استخدامها."],["الحسابات","تتحمل مسؤولية حماية بيانات دخولك عند توفر تسجيل الحسابات."],["المحتوى التعليمي","يُقدّم المحتوى لأغراض تعليمية، وقد يُحدّث أو يتغير مع تطوير المنصة."],["الخدمات التجريبية","بعض الوظائف في هذه النسخة واجهات توضيحية فقط ولا تنشئ اشتراكًا أو معاملة مالية."]]:[["البيانات المقدمة","في هذه النسخة، نماذج الدخول والتواصل تجريبية ولا ترسل بياناتك إلى خادم."],["التخزين المحلي","قد تحفظ بعض التفاعلات التعليمية على جهازك محليًا عند استخدام المتصفح."],["حماية المعلومات","قبل الإطلاق الفعلي، يجب توثيق وسائل الجمع والتخزين والحماية والاحتفاظ بالبيانات."],["الأسئلة والاستفسارات","للاستفسارات المتعلقة بهذه السياسة، استخدم صفحة اتصل بنا."]];
  return `<section class="public-section"><div class="public-container">${heading(title,intro)}<div class="public-details">${sections.map(([name,description])=>`<details open><summary>${name}</summary><p>${description}</p></details>`).join("")}</div><p class="public-form-note">آخر تحديث: أكتوبر ٢٠٢٦ · هذه صياغة تعريفية أولية وليست استشارة قانونية.</p></div></section>`;
}

function render404() {
  return `<section class="public-section"><div class="public-container" style="text-align:center;padding-block:50px"><span class="public-eyebrow">404</span><h1 style="font-size:32px">لم نجد هذه الصفحة</h1><p class="public-form-note">قد يكون الرابط غير صحيح أو أن الصفحة انتقلت.</p><a class="public-button primary" href="index.html">العودة للرئيسية</a></div></section>`;
}

shell();
const renderers={
  home:renderHome,about:renderAbout,contact:renderContact,courses:renderCourses,
  "course-details":renderCourseDetails,lessons:renderLessons,"lesson-details":renderLessonDetails,
  exercises:renderExercises,quizzes:renderQuizzes,"quiz-details":renderQuizDetails,
  exams:renderExams,certificates:renderCertificates,pricing:renderPricing,faq:renderFaq,
  login:()=>renderAuth("login"),register:()=>renderAuth("register"),
  "forgot-password":()=>renderAuth("forgot-password"),"privacy-policy":()=>renderPolicy(false),
  "terms-of-service":()=>renderPolicy(true),"404":render404
};
document.querySelector("#public-main").innerHTML=(renderers[pageKey]||render404)();

const publicNotice=document.querySelector("#public-notice");
let noticeTimeout;
function showNotice(message) {
  publicNotice.textContent=message;
  publicNotice.classList.add("show");
  window.clearTimeout(noticeTimeout);
  noticeTimeout=window.setTimeout(()=>publicNotice.classList.remove("show"),2600);
}

const menuToggle=document.querySelector(".public-menu-toggle"), publicNav=document.querySelector(".public-nav");
menuToggle.addEventListener("click",()=>{
  const expanded=menuToggle.getAttribute("aria-expanded")==="true";
  menuToggle.setAttribute("aria-expanded",String(!expanded));
  menuToggle.setAttribute("aria-label",expanded?"فتح القائمة":"إغلاق القائمة");
  publicNav.classList.toggle("open",!expanded);
});
publicNav.addEventListener("click",(event)=>{
  if(event.target.closest("a")) {
    publicNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded","false");
  }
});

const search=document.querySelector("#public-course-search");
if(search) {
  let category="all";
  const cards=[...document.querySelectorAll(".subject-card")], empty=document.querySelector("#public-course-empty");
  function filterCourses() {
    const term=search.value.trim().toLocaleLowerCase("ar");
    let count=0;
    cards.forEach((card)=>{
      const visible=(category==="all"||card.dataset.category===category)&&(!term||card.dataset.search.toLocaleLowerCase("ar").includes(term));
      card.hidden=!visible;
      if(visible) count++;
    });
    empty.hidden=count>0;
  }
  search.addEventListener("input",filterCourses);
  document.querySelectorAll(".public-filter").forEach((button)=>button.addEventListener("click",()=>{
    category=button.dataset.category;
    document.querySelectorAll(".public-filter").forEach((item)=>{
      const active=item===button;
      item.classList.toggle("active",active);
      item.setAttribute("aria-pressed",String(active));
    });
    filterCourses();
  }));
}

document.querySelectorAll("[data-notice]").forEach((button)=>button.addEventListener("click",()=>showNotice(button.dataset.notice)));
document.querySelectorAll(".demo-form").forEach((form)=>form.addEventListener("submit",(event)=>{
  event.preventDefault();
  if(form.dataset.auth==="register") {
    const password=form.querySelector('[name="password"]'), confirmation=form.querySelector('[name="confirm-password"]');
    if(password.value!==confirmation.value) {
      confirmation.setCustomValidity("تأكّد من تطابق كلمتي المرور.");
      confirmation.reportValidity();
      confirmation.addEventListener("input",()=>confirmation.setCustomValidity(""),{once:true});
      return;
    }
  }
  showNotice(form.dataset.auth==="forgot-password"?"النموذج تجريبي ولا يرسل تعليمات فعلية.":"النموذج تجريبي؛ لم يتم إرسال البيانات.");
}));

const quizForm=document.querySelector("#public-quiz-form");
if(quizForm) quizForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  const quizId=new URLSearchParams(location.search).get("id"), quiz=quizItems.find((item)=>item.id===quizId)||quizItems[0];
  const score=quiz.sample.reduce((total,question,index)=>total+(Number(new FormData(quizForm).get(`q${index}`))===question.correct?1:0),0);
  const result=document.querySelector("#quiz-result");
  result.hidden=false;
  result.textContent=`نتيجتك: ${score} من ${quiz.sample.length}. ${score===quiz.sample.length?"ممتاز، إجابات صحيحة كلها!":"راجِع الدرس وحاول مرة أخرى."}`;
});

const lessonId=new URLSearchParams(location.search).get("id")||"english";
const lessonNumber=new URLSearchParams(location.search).get("lesson")||"1";
const completedKey=`itqan-lesson-${lessonId}-${lessonNumber}`;
const lessonProgressKey=`itqan-lesson-progress-${lessonId}-${lessonNumber}`;
const lessonProgressElement=document.querySelector("#lesson-progress");
if(lessonProgressElement) {
  const storedProgress=JSON.parse(localStorage.getItem(lessonProgressKey)||"null");
  const state=storedProgress&&typeof storedProgress==="object"
    ? {videoComplete:storedProgress.videoComplete===true,wordsComplete:storedProgress.wordsComplete===true,quizScore:Number.isFinite(Number(storedProgress.quizScore))?Math.max(0,Math.min(14,Number(storedProgress.quizScore))):0}
    : {videoComplete:false,wordsComplete:false,quizScore:0};
  if(localStorage.getItem(completedKey)==="true") {
    state.videoComplete=true;
    state.wordsComplete=true;
    state.quizScore=14;
  }
  const sections=[...document.querySelectorAll("[data-lesson-section]")];
  const stepButtons=[...document.querySelectorAll("[data-step-target]")];
  const scoreElement=document.querySelector("#lesson-score");
  const progressLabel=document.querySelector("#lesson-progress-label");
  const sectionPoints=()=> (state.videoComplete?3:0)+(state.wordsComplete?3:0)+state.quizScore;
  const saveProgress=()=>localStorage.setItem(lessonProgressKey,JSON.stringify(state));
  const updateProgress=()=>{
    const score=sectionPoints();
    lessonProgressElement.value=score;
    scoreElement.textContent=score.toLocaleString("ar");
    progressLabel.textContent=score===20?"اكتمل الدرس · أحسنت!":score>0?`أحرزت ${score.toLocaleString("ar")} من ٢٠ درجة`:"ابدأ الفيديو لزيادة التقدّم";
    stepButtons.forEach((button)=>{
      const target=button.dataset.stepTarget;
      button.disabled=(target==="words"&&!state.videoComplete)||(target==="quiz"&&!state.wordsComplete);
      button.classList.toggle("is-complete",target==="video"?state.videoComplete:target==="words"?state.wordsComplete:state.quizScore>0);
    });
  };
  const showSection=(sectionId)=>{
    if((sectionId==="words"&&!state.videoComplete)||(sectionId==="quiz"&&!state.wordsComplete)) return;
    sections.forEach((section)=>{section.hidden=section.dataset.lessonSection!==sectionId;});
    stepButtons.forEach((button)=>{
      const current=button.dataset.stepTarget===sectionId;
      button.setAttribute("aria-current",current?"step":"false");
    });
  };
  stepButtons.forEach((button)=>button.addEventListener("click",()=>showSection(button.dataset.stepTarget)));
  document.querySelectorAll("[data-next-step]").forEach((button)=>button.addEventListener("click",()=>{
    if(button.dataset.nextStep==="words"&&!state.videoComplete) {
      state.videoComplete=true;
      showNotice("أُنجز قسم الفيديو وأُضيفت ٣ درجات إلى تقدّمك.");
    } else if(button.dataset.nextStep==="quiz"&&!state.wordsComplete) {
      state.wordsComplete=true;
      showNotice("أُنجز قسم الكلمات وأُضيفت ٣ درجات إلى تقدّمك.");
    }
    saveProgress();
    updateProgress();
    showSection(button.dataset.nextStep);
  }));
  const lessonQuizForm=document.querySelector("#lesson-quiz-form");
  if(lessonQuizForm) lessonQuizForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const correct=(lessonQuestions[lessonId]||lessonQuestions.english).reduce((total,question,index)=>{
      return total+(Number(new FormData(lessonQuizForm).get(`q${index}`))===question.correct?1:0);
    },0);
    const attemptScore=correct*2;
    const improved=attemptScore>state.quizScore;
    if(improved) state.quizScore=attemptScore;
    saveProgress();
    updateProgress();
    const result=document.querySelector("#lesson-quiz-result");
    result.hidden=false;
    result.textContent=`إجابات صحيحة: ${correct} من ٧ · درجة هذا القسم: ${attemptScore} من ١٤ · مجموع نقاط الدرس: ${sectionPoints()} من ٢٠.${improved?" حُفظت نتيجتك الجديدة.":" احتُفظ بأفضل نتيجة سابقة."}`;
    if(sectionPoints()===20) localStorage.setItem(completedKey,"true");
  });
  updateProgress();
  showSection(!state.videoComplete?"video":!state.wordsComplete?"words":"quiz");
}
const bookmarkButton=document.querySelector("#lesson-bookmark");
if(bookmarkButton) {
  const bookmarks=()=>JSON.parse(localStorage.getItem("itqan-bookmarks")||"[]");
  const updateBookmark=()=>{bookmarkButton.textContent=bookmarks().includes(completedKey)?"♥ الدرس محفوظ":"♡ احفظ الدرس";};
  updateBookmark();
  bookmarkButton.addEventListener("click",()=>{
    const saved=bookmarks(),index=saved.indexOf(completedKey);
    if(index<0) saved.push(completedKey); else saved.splice(index,1);
    localStorage.setItem("itqan-bookmarks",JSON.stringify(saved));
    updateBookmark();
    showNotice(index<0?"حُفظ الدرس على هذا الجهاز.":"أُزيل الدرس من المحفوظات.");
  });
}
