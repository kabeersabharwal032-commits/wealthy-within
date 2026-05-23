/* ── WEALTHY WITHIN — LANGUAGE TOGGLE ── */
/* Sirf text swap karta hai — app logic bilkul nahi chhedta */

var currentLang = 'en';
try { currentLang = localStorage.getItem('ww_lang') || 'en'; } catch(e) {}

/* ── HINDI TRANSLATIONS ── */
var HI = {
  /* Home screen */
  tagline: '21 दिन की भीतरी समृद्धि की यात्रा',
  week1: 'जागरूकता', week2: 'विश्वास', week3: 'तालमेल',
  install_p: 'बेहतर अनुभव के लिए होम स्क्रीन पर लगाएं',
  install_btn: 'इंस्टॉल',
  prog_suffix: ' में से 21 दिन',

  /* Nav */
  nav_home: 'होम', nav_coach: 'कोच', nav_journal: 'डायरी', nav_progress: 'प्रगति',

  /* Coach screen */
  coach_h2: 'वेल्थ कोच',
  coach_p: 'आपका निजी गाइड — भीतरी बदलाव के इस सफर में',
  coach_placeholder: 'कुछ भी पूछें...',
  coach_clear: 'बातचीत मिटाएं',
  coach_welcome: 'Wealthy Within में आपका स्वागत है। मैं इस 21 दिन की यात्रा में आपका निजी गाइड हूं। आज की प्रैक्टिस, अपने विचार, affirmations — कुछ भी पूछें।',
  qb1: 'आज का affirmation', qb2: 'मेरी प्रगति', qb3: 'हौसला दीजिए', qb4: 'कमी का डर',

  /* Journal screen */
  journal_h2: 'डायरी',
  journal_p: 'अपना बदलाव लिखते जाइए',
  journal_note: 'दिन बदलने के लिए ऊपर वाले बॉक्स पर क्लिक करें।',
  journal_placeholder: 'आज क्या महसूस किया? क्या बदला, क्या दिखा, क्या छोड़ा?',
  journal_save: 'सेव करें',
  journal_past: 'पुरानी एंट्री',
  journal_empty: 'अभी तक कुछ नहीं लिखा। शुरू कीजिए।',

  /* Stats screen */
  stats_h2: 'आपकी यात्रा',
  stats_p: 'हर दिन आप खुद के और करीब जाते हैं',
  stat_days: 'दिन पूरे', stat_prog: 'प्रगति', stat_streak: 'लगातार दिन', stat_journal: 'डायरी एंट्री',
  heat_label: '21 दिन का नक्शा',
  settings_label: 'सेटिंग्स',
  install_title: 'ऐप इंस्टॉल करें', install_sub: 'Wealthy Within को होम स्क्रीन पर लगाएं',
  about_title: 'हमारे बारे में', about_sub: 'यात्रा, कलाकार, आपके विचार',
  reset_title: 'यात्रा रीसेट करें', reset_sub: 'सारी प्रगति हटाकर नए सिरे से शुरू करें',

  /* Donate block */
  donate_origin: 'यह ऐप एक इंसान ने बनाया है — कोई कंपनी नहीं, कोई टीम नहीं। बस एक ऐसा इंसान जिसने महसूस किया कि यह यात्रा दुनिया में होनी चाहिए।',
  donate_title: 'इस यात्रा को सहारा दें 🌱',
  donate_sub: 'प्यार से बनाया, मुफ्त में दिया। अगर इस ऐप ने आपकी ज़िंदगी में कुछ जोड़ा है, तो जो भी सही लगे — दिल से दें।',
  donate_chip1: 'एक बीज', donate_chip2: 'एक कदम', donate_chip3: 'एक बदलाव',
  donate_or: 'या', donate_custom: 'अपनी राशि चुनें',
  support_btn: 'UPI से सहयोग करें',
  donate_thanks: 'हर योगदान इस यात्रा को ज़िंदा रखता है। शुक्रिया 🙏',

  /* Modal */
  section_practice: 'आज की प्रैक्टिस',
  section_aff: 'Affirmation',
  section_insight: 'निजी अंतर्दृष्टि',
  insight_default: 'आज की निजी सीख पाने के लिए नीचे टैप करें।',
  insight_btn: 'अंतर्दृष्टि पाएं',
  complete_btn: 'आज की प्रैक्टिस पूरी की',
  incomplete_btn: 'अधूरा मार्क करें',

  /* Confirm / reset */
  reset_confirm_title: 'यात्रा रीसेट करें?',
  reset_confirm_sub: 'सभी पूरे दिन और डायरी की एंट्री मिट जाएंगी। कोच के साथ बातचीत बनी रहेगी। यह वापस नहीं होगा।',
  reset_yes: 'हां, सब मिटाएं', reset_cancel: 'रद्द करें',

  /* Email popup */
  ep_title: 'दिन 1 पूरा!',
  ep_sub: 'इसी यात्रा पर चलने वाले लोगों से जुड़ें — हौसला बनाए रखें।',
  ep_join: 'कम्युनिटी से जुड़ें',
  ep_divider: 'या ईमेल रिमाइंडर लें',
  ep_skip: 'बाद में',
  ep_email_btn: 'ईमेल रिमाइंडर पाएं',

  /* Congrats */
  congrats_title: 'आपने कर दिखाया।',
  congrats_next: 'आगे क्या? →',
  begin_again_title: 'फिर से शुरू करें?',
  begin_again_btn: '✦ यात्रा फिर से शुरू करें',
  carry_btn: 'यह मेरे साथ है आगे भी',
};

/* ── HINDI DAY DATA ── */
var DAYS_HI = [
  {day:1,title:'जागरूकता',practice:'आज पैसों के बारे में अपने मन में आने वाले विचारों को बिना कोई जज किए देखें। एक नोटबुक में 3 ऐसे विचार लिखें, जैसे वो आते हैं।',affirmation:'मैं अपनी भीतरी दुनिया को समझने लगा हूं। जागरूकता हर बदलाव की नींव है।'},
  {day:2,title:'शुक्रगुज़ारी',practice:'अभी जिन 5 चीज़ों के लिए आप सच में शुक्रगुज़ार हैं — एक गर्म खाना, छत, कोई अपना — उनकी लिस्ट बनाएं। हर एक को महसूस करें।',affirmation:'जिसकी मैं कद्र करता हूं, वो बढ़ता है। शुक्रगुज़ारी हर दरवाज़ा खोलती है।'},
  {day:3,title:'ख्वाहिशें',practice:'बिना रोके, बिना सोचे 10 चीज़ें लिखें जो आप सच में चाहते हैं। बड़ी, छोटी, सभी — खुद को चाहने दें।',affirmation:'मेरी ख्वाहिशें स्वार्थी नहीं — वो पवित्र हैं। मैं सब कुछ पाने का हकदार हूं।'},
  {day:4,title:'विश्वास',practice:'एक ऐसा विश्वास पहचानें जो शायद आपके रास्ते में आ रहा हो। उसे साफ लिखें। फिर ज़ोर से तीन बार कहें: \'यह विश्वास अब मेरे काम का नहीं। मैं इसे जाने देता हूं।\'',affirmation:'पुराने विश्वास आसानी से जाते हैं। मैं समृद्धि के बारे में नई सच्चाइयों के लिए खुला हूं।'},
  {day:5,title:'कल्पना',practice:'5 मिनट शांत बैठें। आंखें बंद करें। खुद को एक आज़ाद, समृद्ध जीवन में देखें — आप कहां हैं, क्या कर रहे हैं, कैसा महसूस हो रहा है? उस एहसास में रहें।',affirmation:'मेरी समृद्धि की कल्पना असली है और मेरी तरफ आ रही है।'},
  {day:6,title:'मांगना',practice:'साफ और सटीक लिखें: मुझे क्या चाहिए? कितना? यह कैसी ज़िंदगी बनाएगा? जितना साफ मांगेंगे, उतना जल्दी मिलेगा।',affirmation:'मैं भरोसे के साथ मांगता हूं। मेरी मांग पहुंच चुकी है और रास्ते पर है।'},
  {day:7,title:'पहले हफ्ते का जायज़ा',practice:'रुकें और पिछले 7 दिनों पर सोचें। क्या बदला? क्या हैरान किया? क्या साफ हुआ? अपनी डायरी में पूरा लिखें।',affirmation:'हर दिन मैं बढ़ रहा हूं। मैं इस प्रक्रिया पर पूरा भरोसा करता हूं।'},
  {day:8,title:'पैसों का बहाव',practice:'आज जब भी पैसे खर्च करें, मन में कहें: \'पैसा जाता है और वापस आता है, हमेशा।\' अपराधबोध की जगह शुक्रगुज़ारी महसूस करें।',affirmation:'पैसा ऊर्जा है। यह मेरे ज़रिए स्वतंत्र रूप से बहता है और हमेशा बढ़कर लौटता है।'},
  {day:9,title:'भाषा',practice:'आज जब भी \'मैं afford नहीं कर सकता\' कहने का मन हो — रुकें। इसकी जगह कहें: \'मैं अभी यहां खर्च नहीं करना चाहता।\' फर्क महसूस करें।',affirmation:'मेरे शब्द मेरी हकीकत बनाते हैं। मैं समृद्धि की भाषा चुनता हूं।'},
  {day:10,title:'पाना',practice:'आज पूरी तरह पाने की प्रैक्टिस करें। जब भी कोई तारीफ करे, कुछ दे, मदद करे — सिर्फ \'शुक्रिया\' कहें और उसे दिल में उतरने दें।',affirmation:'मैं हर रूप में पाने के लिए तैयार हूं। मैं प्यार, समृद्धि और उदारता का हकदार हूं।'},
  {day:11,title:'उदारता',practice:'आज कुछ बेझिझक दें — अपना समय, एक अच्छी बात, थोड़े पैसे, एक मुस्कान। बिना हिसाब रखे।',affirmation:'जितना खुलकर देता हूं, ज़िंदगी उतना ही खुलकर मुझे देती है।'},
  {day:12,title:'अमीर महसूस करें',practice:'समृद्धि आने से पहले, उसे जीएं। अपने पसंदीदा कपड़े पहनें, चाय आराम से पिएं, इत्मीनान से चलें — जैसे आप पहले से आज़ाद हैं।',affirmation:'अमीर महसूस करना ही अमीर होना है। मेरी भीतरी स्थिति मेरी बाहरी हकीकत बनाती है।'},
  {day:13,title:'रोल मॉडल',practice:'एक ऐसे इंसान के बारे में पढ़ें जिसने बहुत कम से शुरू करके समृद्धि बनाई। उनकी सोच को समझें — सिर्फ strategy नहीं, उनका नज़रिया।',affirmation:'दूसरों ने जो हासिल किया है, वो मेरे लिए भी मुमकिन है।'},
  {day:14,title:'आधा रास्ता',practice:'आप आधे रास्ते पर हैं। रुकें। देखें क्या धीरे-धीरे बदला है — आपके विचारों में, बातचीत में, पैसों के बारे में एहसास में। इसे celebrate करें।',affirmation:'मैं एक असली बदलाव के बीच में हूं। मैं अपनी इस यात्रा को सम्मान देता हूं।'},
  {day:15,title:'डर छोड़ना',practice:'पैसों को लेकर अपना सबसे गहरा डर एक कागज़ पर लिखें। फिर उसे नष्ट करें — फाड़ें, जलाएं, दबाएं। इसे प्रतीकात्मक रूप से जाने दें।',affirmation:'मैं पैसों के डर से मुक्त हूं। समृद्धि कमानी नहीं पड़ती — यह मेरी पहचान है।'},
  {day:16,title:'पैसों की कहानी',practice:'बचपन में पैसों के बारे में क्या सीखा? घर में क्या सुना? अपनी पुरानी कहानी लिखें — फिर एक नई कहानी लिखें जो आपके काम आए।',affirmation:'मेरी नई पैसों की कहानी अभी शुरू होती है: समृद्धि आसानी से, खुशी से, और लगातार आती है।'},
  {day:17,title:'कार्रवाई',practice:'सोच और हकीकत के बीच पुल है — प्रेरित कार्रवाई। आज अपने वित्तीय लक्ष्य की तरफ एक छोटा, ठोस कदम उठाएं — एक ईमेल, एक आइडिया, एक बात।',affirmation:'मैं प्रेरणा से काम करता हूं, डर से नहीं। मेरा हर कदम ब्रह्मांड का साथ पाता है।'},
  {day:18,title:'संकेत',practice:'आज हर तरफ समृद्धि के संकेत ढूंढें — मिला हुआ सिक्का, मुफ्त कॉफी, अनजाने की दयालुता। उन्हें गिनें। ये संदेश हैं।',affirmation:'समृद्धि हर तरफ है। मैं उसकी मौजूदगी के प्रति जागरूक हूं।'},
  {day:19,title:'भविष्य का खुद',practice:'अपने भविष्य के, आर्थिक रूप से आज़ाद खुद से एक पत्र लिखें — वो आपको क्या बताना चाहते हैं? क्या भरोसा दिलाना चाहते हैं?',affirmation:'मेरा भविष्य का खुद पूरा है। मैं हर सांस के साथ उस तरफ बढ़ रहा हूं।'},
  {day:20,title:'तालमेल',practice:'आज कुछ ऐसा करें जो सिर्फ खुशी के लिए हो — नाचें, बनाएं, प्रकृति में चलें, गाएं। खुशी कोई लग्ज़री नहीं — यह समृद्धि की आवृत्ति है।',affirmation:'जब मैं खुशी में जीता हूं, तो मैं अपनी हर चाहत से जुड़ा होता हूं।'},
  {day:21,title:'एकीकरण',practice:'21 दिन पूरे। अपनी पूरी यात्रा लिखें — कहां से शुरू किया, क्या खुला, अब क्या जानते हैं। फिर इसे आगे ले जाने का संकल्प लें।',affirmation:'मैं भीतर से बदल गया हूं। समृद्धि — हर रूप में — अब मेरी स्वाभाविक अवस्था है।'}
];


/* ── LANG SWITCH ── */
function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('ww_lang', lang); } catch(e) {}

  // Toggle button styles
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-hi').classList.toggle('active', lang === 'hi');

  if (lang === 'hi') {
    applyHindi();
  } else {
    location.reload(); // EN = page reload to restore original
  }
}

function applyHindi() {
  var h = HI;

  // Tagline
  var tg = document.querySelector('.tagline');
  if (tg) tg.textContent = h.tagline;

  // Week labels — replace text node inside .wl (after the dot span)
  var wls = document.querySelectorAll('.wl');
  if (wls[0]) wls[0].lastChild.textContent = h.week1;
  if (wls[1]) wls[1].lastChild.textContent = h.week2;
  if (wls[2]) wls[2].lastChild.textContent = h.week3;

  // Install bar
  var ibp = document.querySelector('.install-bar p');
  if (ibp) ibp.textContent = h.install_p;
  var ibb = document.querySelector('.install-bar button');
  if (ibb) ibb.textContent = h.install_btn;

  // Nav labels
  var navBtns = document.querySelectorAll('nav button');
  var navKeys = ['nav_home','nav_coach','nav_journal','nav_progress'];
  navBtns.forEach(function(b, i) {
    if (navKeys[i]) b.lastChild.textContent = h[navKeys[i]];
  });

  // Coach screen
  var ch2 = document.querySelector('#screen-ai .screen-hd h2');
  if (ch2) ch2.textContent = h.coach_h2;
  var cp = document.querySelector('#screen-ai .screen-hd p');
  if (cp) cp.textContent = h.coach_p;
  var ci = document.getElementById('chat-input');
  if (ci) ci.placeholder = h.coach_placeholder;
  var clr = document.querySelector('.chat-clear-btn');
  if (clr) clr.textContent = h.coach_clear;

  // Quick prompt buttons
  var qbs = document.querySelectorAll('.qb');
  var qHiPrompts = ['आज का affirmation बताएं','मेरी प्रगति कैसी है?','मुझे हौसला चाहिए','कमी के डर से कैसे निकलूं?'];
  var qHiLabels = [h.qb1, h.qb2, h.qb3, h.qb4];
  qbs.forEach(function(qb, i) {
    if (qHiLabels[i]) {
      qb.textContent = qHiLabels[i];
      if (qHiPrompts[i]) qb.setAttribute('onclick', "qp('" + qHiPrompts[i].replace(/'/g,"\\'") + "')");
    }
  });

  // Journal screen
  var jh2 = document.querySelector('#screen-journal .screen-hd h2');
  if (jh2) jh2.textContent = h.journal_h2;
  var jp = document.querySelector('#screen-journal .screen-hd p');
  if (jp) jp.textContent = h.journal_p;
  var jnote = document.querySelector('#screen-journal .j-wrap > p');
  if (jnote) jnote.textContent = h.journal_note;
  var jta = document.getElementById('j-text');
  if (jta) jta.placeholder = h.journal_placeholder;
  var jsave = document.querySelector('.j-save');
  if (jsave) jsave.textContent = h.journal_save;
  var jpast = document.querySelector('.past-wrap .sec-label');
  if (jpast) jpast.textContent = h.journal_past;

  // Stats screen
  var sh2 = document.querySelector('#screen-stats .screen-hd h2');
  if (sh2) sh2.textContent = h.stats_h2;
  var sp = document.querySelector('#screen-stats .screen-hd p');
  if (sp) sp.textContent = h.stats_p;

  // Stat labels (rendered dynamically — patch renderStats output)
  var statLs = document.querySelectorAll('.stat-l');
  var statKeys = ['stat_days','stat_prog','stat_streak','stat_journal'];
  statLs.forEach(function(el, i) { if (statKeys[i]) el.textContent = h[statKeys[i]]; });

  var heatLbl = document.querySelector('.heat-wrap .sec-label');
  if (heatLbl) heatLbl.textContent = h.heat_label;

  var settLbl = document.querySelector('.settings-wrap .sec-label');
  if (settLbl) settLbl.textContent = h.settings_label;

  var stTitles = document.querySelectorAll('.settings-row .settings-title');
  var stSubs   = document.querySelectorAll('.settings-row .settings-sub');
  if (stTitles[0]) stTitles[0].textContent = h.install_title;
  if (stSubs[0])   stSubs[0].textContent   = h.install_sub;
  if (stTitles[1]) stTitles[1].textContent = h.about_title;
  if (stSubs[1])   stSubs[1].textContent   = h.about_sub;
  if (stTitles[2]) stTitles[2].textContent = h.reset_title;
  if (stSubs[2])   stSubs[2].textContent   = h.reset_sub;

  // Donate block
  var dOrigin = document.querySelector('.progress-donate-origin');
  if (dOrigin) dOrigin.textContent = h.donate_origin;
  var dTitle = document.querySelector('.progress-donate-title');
  if (dTitle) dTitle.textContent = h.donate_title;
  var dSub = document.querySelector('.progress-donate-sub');
  if (dSub) dSub.textContent = h.donate_sub;
  var dChips = document.querySelectorAll('.donate-chip-label');
  if (dChips[0]) dChips[0].textContent = h.donate_chip1;
  if (dChips[1]) dChips[1].textContent = h.donate_chip2;
  if (dChips[2]) dChips[2].textContent = h.donate_chip3;
  var dOr = document.querySelector('.donate-or-label');
  if (dOr) dOr.textContent = h.donate_or;
  var dCustom = document.querySelector('.donate-custom-input');
  if (dCustom) dCustom.placeholder = h.donate_custom;
  var sBtn = document.querySelector('.support-btn');
  if (sBtn) { var sIcon = sBtn.querySelector('svg'); sBtn.textContent = ' ' + h.support_btn; if (sIcon) sBtn.prepend(sIcon); }
  var dThanks = document.querySelector('.donate-thanks');
  if (dThanks) dThanks.textContent = h.donate_thanks;

  // Day cards — re-render with Hindi
  var grid = document.getElementById('days-grid');
  if (grid) {
    var cards = grid.querySelectorAll('.day-card');
    cards.forEach(function(card, idx) {
      var dayNum = idx + 1;
      var hiDay = DAYS_HI[idx];
      if (!hiDay) return;
      var titleEl = card.querySelector('.day-title');
      var numEl   = card.querySelector('.day-num');
      if (titleEl) titleEl.textContent = hiDay.title;
      if (numEl)   numEl.textContent   = 'दिन ' + dayNum;
      // Lock tooltip
      var tt = card.querySelector('.lock-tooltip');
      if (tt) tt.textContent = 'पहले दिन ' + (dayNum-1) + ' पूरा करें';
    });
    // Progress label
    var progLbl = document.getElementById('prog-label');
    if (progLbl) {
      var done = progLbl.textContent.split(' ')[0];
      progLbl.textContent = '21 में से ' + done + ' दिन';
    }
  }

  // Modal section labels
  var sLabels = document.querySelectorAll('.section-label');
  if (sLabels[0]) sLabels[0].textContent = h.section_practice;
  if (sLabels[1]) sLabels[1].textContent = h.section_aff;
  if (sLabels[2]) sLabels[2].textContent = h.section_insight;

  // Modal insight default text
  var aiOut = document.getElementById('m-ai-out');
  if (aiOut && aiOut.textContent.indexOf('Tap below') >= 0)
    aiOut.textContent = h.insight_default;

  // Modal insight button
  var aiBtnEl = document.getElementById('m-ai-btn');
  if (aiBtnEl && !aiBtnEl.disabled && aiBtnEl.textContent.indexOf('Receive') >= 0)
    aiBtnEl.textContent = h.insight_btn;

  // Modal complete button
  var mBtn = document.getElementById('m-btn');
  if (mBtn) {
    if (mBtn.textContent.indexOf('Mark as Incomplete') >= 0)
      mBtn.textContent = h.incomplete_btn;
    else if (mBtn.textContent.indexOf('Complete') >= 0)
      mBtn.textContent = h.complete_btn;
  }

  // Modal day title & practice & affirmation (if modal is open)
  var modal = document.getElementById('modal');
  if (modal && modal.classList.contains('open') && typeof activeDay !== 'undefined' && activeDay) {
    var hiD = DAYS_HI[activeDay - 1];
    if (hiD) {
      var mTitle = document.getElementById('m-title');
      var mPractice = document.getElementById('m-practice');
      var mAff = document.getElementById('m-aff');
      var mMeta = document.getElementById('m-meta');
      if (mTitle) mTitle.textContent = hiD.title;
      if (mPractice) mPractice.textContent = hiD.practice;
      if (mAff) mAff.textContent = '\u201c' + hiD.affirmation + '\u201d';
      if (mMeta) {
        var parts = mMeta.textContent.split('\u00b7');
        var week = parts[1] ? parts[1].trim().replace('Week', 'हफ्ता') : '';
        mMeta.textContent = 'दिन ' + activeDay + '  \u00b7  ' + week;
      }
    }
  }

  // Confirm reset modal
  var rTitle = document.querySelector('#confirm-reset .confirm-title');
  if (rTitle) rTitle.textContent = h.reset_confirm_title;
  var rSub = document.querySelector('#confirm-reset .confirm-sub');
  if (rSub) rSub.textContent = h.reset_confirm_sub;
  var rBtns = document.querySelectorAll('#confirm-reset .confirm-btn');
  if (rBtns[0]) rBtns[0].textContent = h.reset_yes;
  if (rBtns[1]) rBtns[1].textContent = h.reset_cancel;

  // Email popup
  var epTitle = document.querySelector('.ep-title');
  if (epTitle) epTitle.textContent = h.ep_title;
  var epSub = document.querySelector('.ep-sub');
  if (epSub) epSub.textContent = h.ep_sub;
  var epWa = document.querySelector('.ep-wa-btn');
  if (epWa) { var waIc = epWa.querySelector('svg'); epWa.textContent = ' ' + h.ep_join; if (waIc) epWa.prepend(waIc); }
  var epDiv = document.querySelector('.ep-divider-label');
  if (epDiv) epDiv.textContent = h.ep_divider;
  var epSkip = document.querySelector('.ep-skip');
  if (epSkip) epSkip.textContent = h.ep_skip;
  var epEmailBtn = document.getElementById('ep-btn');
  if (epEmailBtn) epEmailBtn.textContent = h.ep_email_btn;

  // Congrats popup
  var cgTitle = document.querySelector('#congrats-p1 .congrats-title');
  if (cgTitle) cgTitle.textContent = h.congrats_title;
  var cgNext = document.querySelector('#congrats-p1 .choice-btn.restart');
  if (cgNext) cgNext.textContent = h.congrats_next;
  var p2Title = document.querySelector('#congrats-p2 .congrats-title');
  if (p2Title) p2Title.textContent = h.begin_again_title;
  var p2Restart = document.querySelector('#congrats-p2 .choice-btn.restart');
  if (p2Restart) p2Restart.textContent = h.begin_again_btn;
  var p2End = document.querySelector('#congrats-p2 .choice-btn.end');
  if (p2End) p2End.textContent = h.carry_btn;
}

/* ── AUTO-APPLY ON LOAD ── */
if (currentLang === 'hi') {
  document.getElementById('lang-en').classList.remove('active');
  document.getElementById('lang-hi').classList.add('active');
  applyHindi();
}
