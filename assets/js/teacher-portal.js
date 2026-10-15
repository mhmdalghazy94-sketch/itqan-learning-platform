const teacherPages = {
  "dashboard.html": ["لوحة التحكم", "ملخص نشاطك التعليمي اليوم", "الرئيسية", "⌂"],
  "profile.html": ["ملفي الشخصي", "معلومات حسابك وخبراتك التعليمية", "حسابي", "◉"],
  "my-courses.html": ["دوراتي", "الدورات التي أنشأتها وتديرها", "إدارة المحتوى", "▤"],
  "create-course.html": ["إنشاء دورة", "صمّم دورة جديدة لطلابك", "إدارة المحتوى", "＋"],
  "edit-course.html": ["تعديل الدورة", "حدّث معلومات الدورة ومحتواها", "إدارة المحتوى", "✎"],
  "manage-lessons.html": ["إدارة الدروس", "نظّم دروسك ومحتواها", "إدارة المحتوى", "▣"],
  "create-lesson.html": ["إنشاء درس", "أضف درسًا جديدًا إلى إحدى دوراتك", "إدارة المحتوى", "＋"],
  "edit-lesson.html": ["تعديل الدرس", "حدّث تفاصيل الدرس ومادته", "إدارة المحتوى", "✎"],
  "upload-materials.html": ["رفع المواد", "أرفق ملفات الدروس ومصادرها", "إدارة المحتوى", "⇧"],
  "manage-quizzes.html": ["إدارة الاختبارات", "أنشئ الاختبارات القصيرة وتابع نتائجها", "التقييمات", "☷"],
  "create-quiz.html": ["إنشاء اختبار", "أضف اختبارًا قصيرًا إلى إحدى دوراتك", "التقييمات", "＋"],
  "manage-exams.html": ["الاختبارات النهائية", "نظّم الاختبارات ومواعيدها", "التقييمات", "▤"],
  "question-bank.html": ["بنك الأسئلة", "أدر أسئلتك ورتّبها حسب المادة", "التقييمات", "؟"],
  "student-list.html": ["قائمة الطلاب", "طلاب دوراتك ومعلومات تقدّمهم", "الطلاب", "♧"],
  "student-details.html": ["ملف الطالب", "تقدّم الطالب ونتائجه وملاحظاته", "الطلاب", "◉"],
  "assignments.html": ["الواجبات", "أنشئ الواجبات وتابع التسليمات", "الطلاب", "▧"],
  "grading.html": ["التصحيح والدرجات", "راجع إجابات الطلاب وسجّل ملاحظاتك", "الطلاب", "✓"],
  "attendance.html": ["الحضور", "سجّل حضور الطلاب في دروسك", "الطلاب", "◷"],
  "course-analytics.html": ["تحليلات الدورات", "تابع مؤشرات التفاعل والتقدّم", "التقارير", "↗"],
  "messages.html": ["الرسائل", "تواصل مع الطلاب وأولياء الأمور", "التواصل", "✉"],
  "settings.html": ["الإعدادات", "إدارة تفضيلات حسابك وإشعاراتك", "حسابي", "⚙"]
};

const teacherGroups = [
  { title: "الرئيسية", pages: ["dashboard.html"] },
  { title: "إدارة المحتوى", pages: ["my-courses.html", "create-course.html", "manage-lessons.html", "create-lesson.html", "upload-materials.html"] },
  { title: "التقييمات", pages: ["manage-quizzes.html", "create-quiz.html", "manage-exams.html", "question-bank.html"] },
  { title: "الطلاب", pages: ["student-list.html", "assignments.html", "grading.html", "attendance.html"] },
  { title: "التقارير والتواصل", pages: ["course-analytics.html", "messages.html"] },
  { title: "حسابي", pages: ["profile.html", "settings.html"] }
];

const teacherLabels = Object.fromEntries(Object.entries(teacherPages).map(([file, details]) => [file, details[0]]));
const teacherIcons = Object.fromEntries(Object.entries(teacherPages).map(([file, details]) => [file, details[3]]));
const teacherFile = window.location.pathname.split("/").pop() || "dashboard.html";
const teacherPage = teacherPages[teacherFile] || teacherPages["dashboard.html"];
const teacherStoreKey = "itqan-teacher-data";

const initialCourses = [
  { id: "course-english", title: "أساسيات اللغة الإنجليزية", subject: "اللغة الإنجليزية", level: "المبتدئ", description: "تأسيس المفردات والمحادثة والقواعد الأساسية.", students: 32, lessons: 12, status: "منشورة" },
  { id: "course-physics", title: "مبادئ الفيزياء والحركة", subject: "الفيزياء", level: "الثانوي", description: "مدخل إلى الحركة والسرعة وقوانين نيوتن.", students: 24, lessons: 8, status: "منشورة" },
  { id: "course-math", title: "المعادلات الرياضية", subject: "الرياضيات", level: "المتوسط", description: "تعلّم المعادلات الرياضية والتطبيقات الأساسية.", students: 18, lessons: 10, status: "مسودة" },
  { id: "course-arabic", title: "مهارات اللغة العربية", subject: "اللغة العربية", level: "المتوسط", description: "تطوير القراءة والكتابة ومهارات اللغة.", students: 21, lessons: 9, status: "منشورة" }
];

const initialStudents = [
  { id: "student-1", name: "مريم أحمد", email: "maryam@example.com", course: "أساسيات اللغة الإنجليزية", progress: 82, attendance: "منتظم" },
  { id: "student-2", name: "سارة خالد", email: "sara@example.com", course: "مبادئ الفيزياء والحركة", progress: 68, attendance: "منتظم" },
  { id: "student-3", name: "عمر عبدالله", email: "omar@example.com", course: "المعادلات الرياضية", progress: 45, attendance: "يحتاج متابعة" },
  { id: "student-4", name: "ليان محمد", email: "layan@example.com", course: "مهارات اللغة العربية", progress: 91, attendance: "منتظم" },
  { id: "student-5", name: "يوسف علي", email: "yousef@example.com", course: "أساسيات اللغة الإنجليزية", progress: 57, attendance: "منتظم" }
];

const initialLessons = [
  { id: "lesson-1", title: "التحية والتعارف", course: "أساسيات اللغة الإنجليزية", duration: "15 دقيقة", content: "تعلّم عبارات التحية والتعريف بالنفس باللغة الإنجليزية.", status: "منشور" },
  { id: "lesson-2", title: "الحركة والسرعة", course: "مبادئ الفيزياء والحركة", duration: "20 دقيقة", content: "مفاهيم الحركة والسرعة مع أمثلة تطبيقية.", status: "منشور" },
  { id: "lesson-3", title: "حل المعادلات الخطية", course: "المعادلات الرياضية", duration: "18 دقيقة", content: "خطوات حل المعادلات الخطية والتحقق من الحل.", status: "مسودة" }
];

const initialQuizzes = [
  { id: "quiz-1", title: "مراجعة مفردات الوحدة الأولى", course: "أساسيات اللغة الإنجليزية", questions: 8, status: "منشور" },
  { id: "quiz-2", title: "قوانين نيوتن للحركة", course: "مبادئ الفيزياء والحركة", questions: 10, status: "منشور" }
];

function teacherEscape(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function getTeacherData() {
  const saved = localStorage.getItem(teacherStoreKey);
  return saved ? JSON.parse(saved) : { courses: [], lessons: [], quizzes: [], grades: {}, attendance: {} };
}

function saveTeacherData(data) {
  localStorage.setItem(teacherStoreKey, JSON.stringify(data));
}

function allRecords(kind, defaults) {
  const records = new Map(defaults.map((record) => [record.id, record]));
  (getTeacherData()[kind] || []).forEach((record) => records.set(record.id, { ...records.get(record.id), ...record }));
  return [...records.values()];
}

function teacherShell() {
  const groups = teacherGroups.map((group) => `<section class="teacher-nav-group"><p class="teacher-nav-caption">${group.title}</p><nav class="teacher-nav-list" aria-label="${group.title}">${group.pages.map((file) => `<a class="teacher-nav-link${teacherFile === file ? " active" : ""}" href="${["assignments.html", "grading.html"].includes(file) ? "../../assignments/teacher/assignments.html" : file}"${teacherFile === file ? ' aria-current="page"' : ""}><span class="teacher-nav-icon" aria-hidden="true">${teacherIcons[file]}</span><span>${teacherLabels[file]}</span></a>`).join("")}</nav></section>`).join("");

  document.querySelector("#teacher-app").innerHTML = `<aside class="teacher-sidebar" id="teacher-sidebar"><a class="teacher-brand" href="dashboard.html"><span class="teacher-brand-mark">إ</span><span>اتقان<span class="teacher-brand-dot">.</span></span></a><span class="teacher-role">✦ مساحة المعلم</span>${groups}<div class="teacher-side-bottom"><a class="teacher-side-card" href="settings.html"><span class="teacher-avatar">م</span><span><strong>محمد أحمد</strong><small>معلم · اتقان</small></span></a><a class="teacher-nav-link" href="../../index.html"><span class="teacher-nav-icon">↩</span><span>العودة إلى المنصة</span></a></div></aside><div class="teacher-overlay" id="teacher-overlay"></div><div class="teacher-main"><header class="teacher-topbar"><button type="button" class="teacher-mobile-toggle" id="teacher-mobile-toggle" aria-expanded="false" aria-controls="teacher-sidebar" aria-label="فتح القائمة">☰</button><div class="teacher-top-title"><strong>${teacherPage[0]}</strong><small>${new Intl.DateTimeFormat("ar-SA", { weekday: "long", day: "numeric", month: "long" }).format(new Date())}</small></div><span class="teacher-spacer"></span><label class="teacher-top-search"><span aria-hidden="true">⌕</span><input id="teacher-search" type="search" aria-label="ابحث في هذه الصفحة" placeholder="ابحث في هذه الصفحة..."></label><a class="teacher-icon-link has-alert" href="messages.html" aria-label="الرسائل">✉</a><a href="profile.html" class="teacher-avatar" aria-label="الملف الشخصي">م</a></header><main class="teacher-content" id="teacher-content"></main></div><div class="teacher-toast" id="teacher-toast" role="status" aria-live="polite"></div>`;
  document.title = `${teacherPage[0]} | اتقان للمعلمين`;
}

function teacherHeading(actions = "") {
  return `<div class="teacher-heading"><div><h1>${teacherPage[0]}</h1><p>${teacherPage[1]}</p></div><div class="teacher-actions">${actions}</div></div>`;
}

function teacherStats(items) {
  return `<div class="teacher-stats">${items.map((item) => `<article class="teacher-stat"><span class="teacher-stat-icon ${item.color || ""}">${item.icon}</span><span><small>${item.label}</small><strong>${item.value}</strong></span></article>`).join("")}</div>`;
}

function teacherTable(headers, rows, options = {}) {
  const body = rows.map((row) => `<tr data-table-row>${row.map((cell, index) => {
    if (index === options.actionColumn && cell && typeof cell === "object") return `<td><a class="teacher-link" href="${teacherEscape(cell.href)}">${teacherEscape(cell.label)}</a></td>`;
    if (index === 0 && options.mark) return `<td><span class="teacher-table-title"><span class="teacher-table-mark">${options.mark}</span><strong>${teacherEscape(cell)}</strong></span></td>`;
    if (index === options.statusColumn) return `<td><span class="teacher-pill${cell === "مسودة" || cell === "قادم" || cell === "بحاجة إلى تصحيح" ? " pending" : ""}">${teacherEscape(cell)}</span></td>`;
    return `<td>${teacherEscape(cell)}</td>`;
  }).join("")}</tr>`).join("");
  return `<div class="teacher-table-wrap"><table class="teacher-table"><thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead><tbody>${body || `<tr><td colspan="${headers.length}">لا توجد عناصر بعد.</td></tr>`}</tbody></table></div>`;
}

function renderDashboard() {
  const courses = allRecords("courses", initialCourses);
  return `${teacherHeading('<a class="teacher-button" href="course-analytics.html">↗ التحليلات</a><a class="teacher-button primary" href="create-course.html">＋ أنشئ دورة</a>')}${teacherStats([{label:"الدورات النشطة",value:courses.filter((course) => course.status === "منشورة").length,icon:"▤"},{label:"إجمالي الطلاب",value:"95",icon:"♧",color:"purple"},{label:"واجبات تنتظر التصحيح",value:"7",icon:"✎",color:"yellow"},{label:"متوسط التقدّم",value:"74%",icon:"↗",color:"coral"}])}<div class="teacher-layout"><div class="teacher-column"><section class="teacher-panel"><div class="teacher-panel-heading"><h2>الدورات التي تديرها</h2><a href="my-courses.html">كل الدورات ←</a></div>${teacherTable(["الدورة","المادة","الطلاب","الحالة"],courses.slice(0,4).map((course) => [course.title,course.subject,course.students,course.status]),{mark:"▤",statusColumn:3})}</section><section class="teacher-panel"><div class="teacher-panel-heading"><h2>نشاط الطلاب هذا الأسبوع</h2><a href="course-analytics.html">عرض التحليلات ←</a></div><div class="teacher-bar-chart" role="img" aria-label="نشاط الطلاب خلال الأسبوع">${[["السبت",40],["الأحد",62],["الإثنين",48],["الثلاثاء",75],["الأربعاء",91],["الخميس",58],["الجمعة",30]].map(([day,value]) => `<div class="teacher-bar"><span style="height:${value}%"></span><small>${day}</small></div>`).join("")}</div></section></div><div class="teacher-column"><section class="teacher-panel"><div class="teacher-panel-heading"><h2>مهام سريعة</h2></div><div class="teacher-list">${[["✎","7 واجبات تنتظر التصحيح","افتح قائمة التصحيح","../../assignments/teacher/assignments.html"],["♧","تفقّد حضور طلابك","سجّل الحضور","attendance.html"],["＋","أضف محتوى جديدًا","أنشئ درسًا أو اختبارًا","create-lesson.html"]].map(([icon,title,subtitle,href]) => `<a class="teacher-list-item" href="${href}"><span class="teacher-table-mark">${icon}</span><span class="teacher-list-copy"><strong>${title}</strong><small>${subtitle}</small></span><span class="teacher-link">←</span></a>`).join("")}</div></section><section class="teacher-panel"><div class="teacher-panel-heading"><h2>طلاب بحاجة لمتابعة</h2><a href="student-list.html">قائمة الطلاب ←</a></div>${initialStudents.slice(0,3).map((student) => `<div class="teacher-list-item"><span class="teacher-avatar">${teacherEscape(student.name[0])}</span><span class="teacher-list-copy"><strong>${teacherEscape(student.name)}</strong><small>${teacherEscape(student.course)}</small></span><span class="teacher-pill${student.progress < 50 ? " pending" : ""}">${student.progress}%</span></div>`).join("")}</section></div></div>`;
}

function renderCourses() {
  const courses = allRecords("courses", initialCourses);
  const rows = courses.map((course) => [course.title,course.subject,course.level,course.students,course.status,`<a class="teacher-link" href="edit-course.html?id=${encodeURIComponent(course.id)}">تعديل ←</a>`]);
  return `${teacherHeading('<a class="teacher-button primary" href="create-course.html">＋ أنشئ دورة</a>')}${teacherStats([{label:"جميع الدورات",value:courses.length,icon:"▤"},{label:"منشورة",value:courses.filter((course) => course.status === "منشورة").length,icon:"✓",color:"purple"},{label:"مسودات",value:courses.filter((course) => course.status === "مسودة").length,icon:"✎",color:"yellow"},{label:"إجمالي الطلاب",value:courses.reduce((sum,course) => sum + Number(course.students || 0),0),icon:"♧",color:"coral"}])}<section class="teacher-panel"><div class="teacher-panel-heading"><h2>كل الدورات</h2><span>بيانات عرض تجريبية</span></div>${teacherTable(["الدورة","المادة","المستوى","الطلاب","الحالة","الإجراء"],rows,{mark:"▤",statusColumn:4})}</section>`;
}

function renderLessons() {
  const lessons = allRecords("lessons", initialLessons);
  return `${teacherHeading('<a class="teacher-button" href="upload-materials.html">⇧ أرفق موادًا</a><a class="teacher-button primary" href="create-lesson.html">＋ أنشئ درسًا</a>')}<section class="teacher-panel"><div class="teacher-panel-heading"><h2>الدروس</h2></div>${teacherTable(["عنوان الدرس","الدورة","المدة","الحالة","الإجراء"],lessons.map((lesson) => [lesson.title,lesson.course,lesson.duration,lesson.status,{href:`edit-lesson.html?id=${encodeURIComponent(lesson.id)}`,label:"تعديل ←"}]),{mark:"▣",statusColumn:3,actionColumn:4})}</section>`;
}

function renderQuizzes() {
  const quizzes = allRecords("quizzes", initialQuizzes);
  const rows = quizzes.map((quiz) => [quiz.title,quiz.course,quiz.questions,"—",quiz.status]);
  return `${teacherHeading('<a class="teacher-button primary" href="create-quiz.html">＋ أنشئ اختبارًا</a>')}<section class="teacher-panel"><div class="teacher-panel-heading"><h2>الاختبارات القصيرة</h2><a href="question-bank.html">بنك الأسئلة ←</a></div>${teacherTable(["الاختبار","الدورة","الأسئلة","المحاولات","الحالة"],rows,{mark:"☷",statusColumn:4})}</section>`;
}

function formField(label, name, type = "text", value = "", options = {}) {
  const id = `teacher-${name}`;
  const required = options.required === false ? "" : "required";
  let control;
  if (type === "select") {
    const values = options.values || [];
    control = `<select id="${id}" name="${name}" ${required}>${values.map((item) => `<option${item === value ? " selected" : ""}>${teacherEscape(item)}</option>`).join("")}</select>`;
  } else if (type === "textarea") {
    control = `<textarea id="${id}" name="${name}" ${required}>${teacherEscape(value)}</textarea>`;
  } else {
    control = `<input id="${id}" name="${name}" type="${type}" value="${teacherEscape(value)}" ${required} ${type === "number" ? `min="${options.min || 0}"` : ""}>`;
  }
  return `<div class="teacher-field${options.full ? " full" : ""}"><label for="${id}">${label}</label>${control}</div>`;
}

function renderEntityForm(kind) {
  const configs = {
    course: {title:teacherFile === "edit-course.html" ? "تعديل الدورة" : "معلومات الدورة",fields:[["عنوان الدورة","title","text"],["المادة","subject","select"],["المستوى الدراسي","level","select"],["وصف الدورة","description","textarea"]]},
    lesson: {title:teacherFile === "edit-lesson.html" ? "تعديل الدرس" : "معلومات الدرس",fields:[["عنوان الدرس","title","text"],["الدورة","course","select"],["مدة الدرس","duration","text"],["محتوى الدرس","content","textarea"]]},
    quiz: {title:"إعداد الاختبار",fields:[["عنوان الاختبار","title","text"],["الدورة","course","select"],["عدد الأسئلة","questions","number"],["مدة الاختبار بالدقائق","duration","number"],["تعليمات الاختبار","instructions","textarea"]]}
  };
  const config = configs[kind];
  const records = kind === "course" ? allRecords("courses", initialCourses) : kind === "lesson" ? allRecords("lessons", initialLessons) : allRecords("quizzes", initialQuizzes);
  const record = teacherFile.startsWith("edit-") ? records.find((item) => item.id === new URLSearchParams(location.search).get("id")) : null;
  const fields = config.fields.map(([label,name,type]) => {
    const values = name === "subject" ? ["اللغة الإنجليزية","الفيزياء","الكيمياء","الرياضيات","اللغة العربية"] : name === "level" ? ["الأساسيات","المبتدئ","المتوسط","الثانوي","المتقدم"] : name === "course" ? allRecords("courses",initialCourses).map((course) => course.title) : [];
    return formField(label,name,type,record?.[name] || "",{values,full:type === "textarea"});
  }).join("");
  return `${teacherHeading()}${record ? "" : '<p class="teacher-note">هذا النموذج يحفظ البيانات التجريبية على هذا الجهاز فقط، ولا ينشر محتوى فعليًا للطلاب.</p>'}<form class="teacher-form" id="teacher-entity-form" data-kind="${kind}" data-record="${teacherEscape(record?.id || "")}"><div class="teacher-panel-heading"><h2>${config.title}</h2></div><div class="teacher-form-grid">${fields}</div><div class="teacher-form-actions"><button class="teacher-button primary" type="submit">${record ? "حفظ التغييرات" : "حفظ كمسودة"}</button><a class="teacher-button" href="${kind === "course" ? "my-courses.html" : kind === "lesson" ? "manage-lessons.html" : "manage-quizzes.html"}">إلغاء</a></div></form>`;
}

function renderExams() {
  const rows = [["اختبار منتصف الفصل — الفيزياء","مبادئ الفيزياء والحركة","٢٠ أكتوبر ٢٠٢٦","24","مجدول"],["اختبار الوحدة الثانية — الرياضيات","المعادلات الرياضية","٢٥ أكتوبر ٢٠٢٦","18","مسودة"],["مراجعة اللغة الإنجليزية","أساسيات اللغة الإنجليزية","٢٨ أكتوبر ٢٠٢٦","32","مجدول"]];
  return `${teacherHeading('<a class="teacher-button primary" href="create-quiz.html">＋ إعداد اختبار</a>')}<section class="teacher-panel"><div class="teacher-panel-heading"><h2>الاختبارات والمواعيد</h2></div>${teacherTable(["الاختبار","الدورة","الموعد","الطلاب","الحالة"],rows,{mark:"▤",statusColumn:4})}</section>`;
}

function renderQuestionBank() {
  const rows = [["ما وحدة قياس السرعة؟","الفيزياء","اختيار من متعدد","سهل"],["اختر مرادف كلمة happy","اللغة الإنجليزية","اختيار من متعدد","سهل"],["حل المعادلة: س + ٣ = ٧","الرياضيات","إجابة قصيرة","متوسط"],["ما الجسيم ذو الشحنة السالبة؟","الكيمياء","اختيار من متعدد","متوسط"]];
  return `${teacherHeading('<button class="teacher-button primary" data-teacher-notice="سيُضاف نموذج السؤال عند ربط إدارة المحتوى">＋ أضف سؤالًا</button>')}<section class="teacher-panel"><div class="teacher-panel-heading"><h2>الأسئلة المحفوظة</h2><a href="create-quiz.html">أنشئ اختبارًا ←</a></div>${teacherTable(["نص السؤال","المادة","النوع","المستوى"],rows,{mark:"؟"})}</section><p class="teacher-note">الأسئلة المعروضة نماذج توضيحية فقط. لا تتضمن هذه الواجهة حفظ مفاتيح إجابة حقيقية.</p>`;
}

function renderStudents() {
  const students = initialStudents;
  const rows = students.map((student) => [student.name,student.email,student.course,`${student.progress}%`,student.attendance,`<a class="teacher-link" href="student-details.html?id=${student.id}">الملف ←</a>`]);
  return `${teacherHeading('<a class="teacher-button" href="messages.html">✉ راسل الطلاب</a>')}${teacherStats([{label:"إجمالي الطلاب",value:students.length,icon:"♧"},{label:"متابعة منتظمة",value:students.filter((student) => student.progress >= 60).length,icon:"✓",color:"purple"},{label:"بحاجة إلى متابعة",value:students.filter((student) => student.progress < 60).length,icon:"!",color:"yellow"},{label:"الدورات",value:"4",icon:"▤",color:"coral"}])}<section class="teacher-panel"><div class="teacher-panel-heading"><h2>الطلاب المسجّلون</h2><span class="teacher-pill">عينة توضيحية</span></div>${teacherTable(["الطالب","البريد","الدورة","التقدّم","الحضور","الملف"],rows,{mark:"♧"})}</section>`;
}

function renderStudentDetails() {
  const student = initialStudents.find((item) => item.id === new URLSearchParams(location.search).get("id")) || initialStudents[0];
  return `${teacherHeading('<a class="teacher-button" href="student-list.html">قائمة الطلاب ←</a><a class="teacher-button primary" href="messages.html">✉ أرسل رسالة</a>')}<div class="teacher-layout"><section class="teacher-panel"><div class="teacher-list-item"><span class="teacher-avatar">${teacherEscape(student.name[0])}</span><span class="teacher-list-copy"><strong>${teacherEscape(student.name)}</strong><small>${teacherEscape(student.email)}</small></span><span class="teacher-pill">${student.attendance}</span></div><div class="teacher-panel-heading" style="margin-top:17px"><h2>ملخص التقدّم</h2></div><p>الدورة الحالية: ${teacherEscape(student.course)}</p><div class="teacher-progress"><span style="width:${student.progress}%"></span></div><p>${student.progress}% من المسار مكتمل</p></section><section class="teacher-panel"><div class="teacher-panel-heading"><h2>متابعة الطالب</h2></div><div class="teacher-list"><div class="teacher-list-item"><span class="teacher-list-copy"><strong>آخر نشاط</strong><small>أكمل درسًا في الدورة المسجّل بها</small></span></div><div class="teacher-list-item"><span class="teacher-list-copy"><strong>الواجبات</strong><small>لا توجد بيانات ربط في النسخة التجريبية</small></span></div></div></section></div>`;
}

function renderAssignments() {
  const rows = [["تمرين المفردات اليومية","أساسيات اللغة الإنجليزية","٢٠ أكتوبر ٢٠٢٦","18","بحاجة إلى تصحيح"],["مسائل الحركة","مبادئ الفيزياء والحركة","٢٢ أكتوبر ٢٠٢٦","12","قيد العمل"],["ورقة المعادلات","المعادلات الرياضية","٢٤ أكتوبر ٢٠٢٦","9","مجدول"]];
  return `${teacherHeading('<button class="teacher-button primary" data-teacher-notice="أضف الواجب من صفحة إنشاء الدرس">＋ واجب جديد</button>')}<section class="teacher-panel"><div class="teacher-panel-heading"><h2>الواجبات والتسليمات</h2><a href="grading.html">التصحيح ←</a></div>${teacherTable(["الواجب","الدورة","آخر موعد","التسليمات","الحالة"],rows,{mark:"▧",statusColumn:4})}</section>`;
}

function renderGrading() {
  const rows = [["مريم أحمد","تمرين المفردات اليومية","9 / 10","بحاجة إلى تصحيح"],["عمر عبدالله","مسائل الحركة","—","بحاجة إلى تصحيح"],["ليان محمد","ورقة المعادلات","8 / 10","تم التصحيح"]];
  return `${teacherHeading('<button class="teacher-button" data-teacher-notice="تم تحديث قائمة التصحيح">تحديث القائمة ↻</button>')}<section class="teacher-panel"><div class="teacher-panel-heading"><h2>أعمال بانتظار المراجعة</h2></div>${teacherTable(["الطالب","التسليم","الدرجة","الحالة"],rows,{mark:"✎",statusColumn:3})}</section><form class="teacher-form" id="grade-form"><div class="teacher-panel-heading"><h2>إضافة تقييم أو ملاحظة</h2></div><div class="teacher-form-grid">${formField("اسم الطالب","student","select","مريم أحمد",{values:initialStudents.map((student) => student.name)})}${formField("الدرجة","score","number","",{min:0})}${formField("ملاحظة للطالب","feedback","textarea","",{full:true})}</div><div class="teacher-form-actions"><button class="teacher-button primary" type="submit">حفظ التقييم محليًا</button></div></form>`;
}

function renderAttendance() {
  const rows = initialStudents.map((student) => [student.name,student.course,"الأربعاء، ١٤ أكتوبر ٢٠٢٦",student.attendance]);
  return `${teacherHeading('<button class="teacher-button primary" data-teacher-notice="تم حفظ سجل الحضور على هذا الجهاز">حفظ الحضور</button>')}<p class="teacher-note">سجل الحضور تجريبي ومحفوظ على هذا الجهاز فقط.</p><section class="teacher-panel"><div class="teacher-panel-heading"><h2>حضور درس اليوم</h2><span>الأربعاء · ١٤ أكتوبر</span></div>${teacherTable(["الطالب","الدورة","التاريخ","الحالة"],rows,{mark:"◷"})}<form id="attendance-form" class="teacher-form" style="margin-top:14px"><div class="teacher-form-grid">${formField("الطالب","student","select","مريم أحمد",{values:initialStudents.map((student) => student.name)})}${formField("الحالة","status","select","حاضر",{values:["حاضر","غائب","متأخر","بعذر"]})}</div><div class="teacher-form-actions"><button class="teacher-button primary" type="submit">تسجيل الحضور</button></div></form></section>`;
}

function renderAnalytics() {
  const bars = [["سبتمبر",42],["أكتوبر",68],["نوفمبر",53],["ديسمبر",79],["يناير",64],["فبراير",88]];
  return `${teacherHeading('<button class="teacher-button" data-teacher-notice="التصدير متاح بعد ربط التقارير بالخادم">↓ تصدير التقرير</button>')}${teacherStats([{label:"إجمالي التسجيلات",value:"95",icon:"♧"},{label:"متوسط إكمال الدورات",value:"74%",icon:"✓",color:"purple"},{label:"الدروس المكتملة",value:"286",icon:"▣",color:"yellow"},{label:"متوسط نتائج الاختبارات",value:"82%",icon:"↗",color:"coral"}])}<section class="teacher-panel"><div class="teacher-panel-heading"><h2>تفاعل الطلاب عبر الأشهر</h2><span>عينة توضيحية</span></div><div class="teacher-bar-chart">${bars.map(([month,value]) => `<div class="teacher-bar"><span style="height:${value}%"></span><small>${month}</small></div>`).join("")}</div></section><section class="teacher-panel" style="margin-top:14px"><div class="teacher-panel-heading"><h2>الدورات حسب التسجيلات</h2></div>${teacherTable(["الدورة","عدد الطلاب","متوسط التقدّم"],initialCourses.map((course) => [course.title,course.students,"74%"]),{mark:"▤"})}</section>`;
}

function renderMessages() {
  const threads = [["مريم أحمد","استفسار حول واجب المفردات","هل يمكن إعادة محاولة التمرين؟","اليوم · 10:15 ص"],["سارة خالد","سؤال عن درس الفيزياء","شكرًا على الشرح، لدي سؤال عن المثال الثاني.","أمس · 02:30 م"],["ولي أمر — عمر عبدالله","متابعة تقدّم الطالب","نود معرفة واجبات هذا الأسبوع.","١٢ أكتوبر"]];
  return `${teacherHeading()}<div class="teacher-layout"><section class="teacher-panel"><div class="teacher-panel-heading"><h2>المحادثات</h2><span class="teacher-pill">3 رسائل</span></div>${threads.map(([name,subject,preview,time]) => `<article class="teacher-list-item"><span class="teacher-avatar">${teacherEscape(name[0])}</span><span class="teacher-list-copy"><strong>${teacherEscape(name)} · ${teacherEscape(subject)}</strong><small>${teacherEscape(preview)} · ${teacherEscape(time)}</small></span></article>`).join("")}</section><form class="teacher-form" id="message-form"><div class="teacher-panel-heading"><h2>رسالة جديدة</h2></div>${formField("إلى","recipient","select","مريم أحمد", {values:initialStudents.map((student) => student.name)})}${formField("الموضوع","subject","text")}${formField("نص الرسالة","message","textarea","",{full:true})}<p class="teacher-note">إرسال الرسائل فعليًا يتطلب ربط خادم المنصة.</p><button class="teacher-button primary" type="submit">حفظ كمسودة</button></form></div>`;
}

function renderUpload() {
  const courses = allRecords("courses", initialCourses);
  return `${teacherHeading()}<form class="teacher-form" id="upload-form"><div class="teacher-panel-heading"><h2>إضافة مادة تعليمية</h2></div>${formField("الدورة","course","select",courses[0]?.title || "",{values:courses.map((course) => course.title)})}${formField("نوع المادة","materialType","select","ملف قراءة",{values:["ملف قراءة","عرض تقديمي","صوت","فيديو","رابط خارجي"]})}<div class="teacher-field"><label for="teacher-files">اختر ملفًا أو أكثر</label><input id="teacher-files" name="files" type="file" multiple><small id="teacher-file-names" class="teacher-note">يتم عرض أسماء الملفات محليًا، ولا يتم رفعها إلى خادم.</small></div>${formField("وصف المادة","description","textarea","",{full:true,required:false})}<div class="teacher-form-actions"><button class="teacher-button primary" type="submit">حفظ قائمة الملفات</button></div></form>`;
}

function renderProfile() {
  return `${teacherHeading()}<form class="teacher-form" id="teacher-profile-form"><div class="teacher-panel-heading"><h2>الملف المهني</h2></div><div class="teacher-form-grid">${formField("الاسم الكامل","name","text","محمد أحمد")}${formField("البريد الإلكتروني","email","email","teacher@example.com")}${formField("المسمّى الوظيفي","role","text","معلم")}${formField("المواد","subjects","text","الفيزياء، الرياضيات")}${formField("نبذة مهنية","bio","textarea","معلم مهتم بتقديم محتوى مبسّط وعملي.",{full:true})}</div><div class="teacher-form-actions"><button class="teacher-button primary" type="submit">حفظ التغييرات على هذا الجهاز</button></div></form>`;
}

function renderSettings() {
  return `${teacherHeading()}<section class="teacher-panel"><div class="teacher-panel-heading"><h2>تفضيلات الحساب</h2></div>${[["تنبيهات التسليمات","أبلغني عند تسليم واجب جديد"],["رسائل الطلاب","أظهر إشعارًا عند وصول رسالة"],["ملخص أسبوعي","أظهر ملخص نشاط الدورات"]].map(([title,description],index) => `<div class="teacher-settings-row"><span><strong>${title}</strong><small>${description}</small></span><button class="teacher-switch" type="button" role="switch" aria-checked="${index!==1}" aria-label="${title}"></button></div>`).join("")}</section><p class="teacher-note" style="margin-top:13px">التفضيلات تُحفظ محليًا في هذا المتصفح فقط.</p>`;
}

function renderGeneric() {
  if (teacherFile === "create-course.html" || teacherFile === "edit-course.html") return renderEntityForm("course");
  if (teacherFile === "create-lesson.html" || teacherFile === "edit-lesson.html") return renderEntityForm("lesson");
  if (teacherFile === "create-quiz.html") return renderEntityForm("quiz");
  if (teacherFile === "manage-lessons.html") return renderLessons();
  if (teacherFile === "manage-quizzes.html") return renderQuizzes();
  if (teacherFile === "manage-exams.html") return renderExams();
  if (teacherFile === "question-bank.html") return renderQuestionBank();
  if (teacherFile === "student-list.html") return renderStudents();
  if (teacherFile === "student-details.html") return renderStudentDetails();
  if (teacherFile === "assignments.html") return renderAssignments();
  if (teacherFile === "grading.html") return renderGrading();
  if (teacherFile === "attendance.html") return renderAttendance();
  if (teacherFile === "course-analytics.html") return renderAnalytics();
  if (teacherFile === "messages.html") return renderMessages();
  if (teacherFile === "upload-materials.html") return renderUpload();
  if (teacherFile === "profile.html") return renderProfile();
  if (teacherFile === "settings.html") return renderSettings();
  return `${teacherHeading()}<section class="teacher-empty"><strong>${teacherPage[0]}</strong><p>${teacherPage[1]}</p></section>`;
}

function toast(message) {
  const element = document.querySelector("#teacher-toast");
  element.textContent = message;
  element.classList.add("show");
  window.clearTimeout(toast.timeout);
  toast.timeout = window.setTimeout(() => element.classList.remove("show"), 2500);
}

teacherShell();
document.querySelector("#teacher-content").innerHTML = teacherFile === "dashboard.html" ? renderDashboard() : teacherFile === "my-courses.html" ? renderCourses() : renderGeneric();

const sidebar = document.querySelector("#teacher-sidebar");
const overlay = document.querySelector("#teacher-overlay");
const mobileToggle = document.querySelector("#teacher-mobile-toggle");
function closeTeacherSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("open");
  mobileToggle.setAttribute("aria-expanded","false");
  mobileToggle.setAttribute("aria-label","فتح القائمة");
}
mobileToggle.addEventListener("click",() => {
  const open=sidebar.classList.toggle("open");
  overlay.classList.toggle("open",open);
  mobileToggle.setAttribute("aria-expanded",String(open));
  mobileToggle.setAttribute("aria-label",open?"إغلاق القائمة":"فتح القائمة");
});
overlay.addEventListener("click",closeTeacherSidebar);
sidebar.addEventListener("click",(event)=>{if(event.target.closest("a"))closeTeacherSidebar();});

document.querySelectorAll("[data-teacher-notice]").forEach((button)=>button.addEventListener("click",()=>toast(button.dataset.teacherNotice)));
document.querySelectorAll(".teacher-switch").forEach((button)=>button.addEventListener("click",()=>{
  const enabled=button.getAttribute("aria-checked")!=="true";
  button.setAttribute("aria-checked",String(enabled));
  const settings=getTeacherData();
  settings.settings={...(settings.settings||{}),[button.getAttribute("aria-label")]:enabled};
  saveTeacherData(settings);
}));

const search=document.querySelector("#teacher-search");
search.addEventListener("input",()=>{
  const query=search.value.trim().toLocaleLowerCase("ar");
  document.querySelectorAll("[data-table-row]").forEach((row)=>{row.hidden=!row.textContent.toLocaleLowerCase("ar").includes(query);});
});

const entityForm=document.querySelector("#teacher-entity-form");
if(entityForm) entityForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  if(!entityForm.reportValidity())return;
  const kind=entityForm.dataset.kind, data=getTeacherData(), recordId=entityForm.dataset.record;
  const collection=kind==="course"?"courses":kind==="lesson"?"lessons":"quizzes";
  const values=Object.fromEntries(new FormData(entityForm).entries());
  const record={...values,id:recordId||`${kind}-${Date.now()}`,status:"مسودة",students:0};
  if(kind==="quiz")record.questions=Number(values.questions);
  if(kind==="lesson")record.duration=values.duration||"غير محدد";
  data[collection]=data[collection]||[];
  if(recordId){
    const index=data[collection].findIndex((item)=>item.id===recordId);
    if(index>=0)data[collection][index]={...data[collection][index],...record};
    else data[collection].push(record);
  } else data[collection].push(record);
  saveTeacherData(data);
  toast("حُفظت البيانات التجريبية على هذا الجهاز.");
  window.setTimeout(()=>{location.href=kind==="course"?"my-courses.html":kind==="lesson"?"manage-lessons.html":"manage-quizzes.html";},650);
});

const gradeForm=document.querySelector("#grade-form");
if(gradeForm)gradeForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  if(!gradeForm.reportValidity())return;
  const data=getTeacherData(),values=Object.fromEntries(new FormData(gradeForm).entries());
  data.grades=data.grades||[];
  data.grades.push({...values,createdAt:new Date().toISOString()});
  saveTeacherData(data);
  toast("حُفظ التقييم محليًا.");
  gradeForm.reset();
});

const attendanceForm=document.querySelector("#attendance-form");
if(attendanceForm)attendanceForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  if(!attendanceForm.reportValidity())return;
  const data=getTeacherData(),values=Object.fromEntries(new FormData(attendanceForm).entries());
  data.attendance=data.attendance||{};
  data.attendance[values.student]=values.status;
  saveTeacherData(data);
  toast("سُجّل الحضور محليًا.");
});

const messageForm=document.querySelector("#message-form");
if(messageForm)messageForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  if(!messageForm.reportValidity())return;
  const data=getTeacherData(),values=Object.fromEntries(new FormData(messageForm).entries());
  data.messages=data.messages||[];
  data.messages.push({...values,createdAt:new Date().toISOString()});
  saveTeacherData(data);
  toast("حُفظت الرسالة كمسودة على هذا الجهاز.");
  messageForm.reset();
});

const profileForm=document.querySelector("#teacher-profile-form");
if(profileForm)profileForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  if(!profileForm.reportValidity())return;
  const data=getTeacherData();
  data.profile=Object.fromEntries(new FormData(profileForm).entries());
  saveTeacherData(data);
  toast("حُفظ الملف الشخصي محليًا.");
});

const uploadForm=document.querySelector("#upload-form");
if(uploadForm){
  const fileInput=document.querySelector("#teacher-files");
  fileInput.addEventListener("change",()=>{
    document.querySelector("#teacher-file-names").textContent=fileInput.files.length?Array.from(fileInput.files,(file)=>file.name).join("، "):"يتم عرض أسماء الملفات محليًا، ولا يتم رفعها إلى خادم.";
  });
  uploadForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    if(!uploadForm.reportValidity())return;
    const data=getTeacherData();
    data.materials=data.materials||[];
    data.materials.push({course:new FormData(uploadForm).get("course"),materialType:new FormData(uploadForm).get("materialType"),files:Array.from(fileInput.files,(file)=>file.name),createdAt:new Date().toISOString()});
    saveTeacherData(data);
    toast("حُفظت قائمة الملفات محليًا فقط.");
  });
}
