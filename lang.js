/* lang.js — EN / Hindi language support */

const LANGS = {
  en: {
    /* ── NAV ── */
    nav_home: 'Home', nav_coach: 'Coach', nav_journal: 'Journal', nav_stats: 'Progress',

    /* ── HOME ── */
    tagline: '21-Day Inner Wealth Journey',
    prog_of: ' of 21 days',
    week1: 'Awareness', week2: 'Belief', week3: 'Alignment',
    install_p: 'Install on your home screen for instant access',
    install_btn: 'Install',
    day_label: 'Day ',

    /* ── LOCK TOOLTIP ── */
    lock_tip: (d) => `Complete Day ${d} first`,

    /* ── MODAL ── */
    section_practice: 'Practice',
    section_affirmation: 'Affirmation',
    section_insight: 'AI Insight',
    insight_placeholder: 'Tap below to receive your personal insight for today.',
    insight_btn: 'Receive Insight',
    insight_loading: 'Generating your insight…',
    complete_btn: "Complete Today's Practice",
    incomplete_btn: 'Mark as Incomplete',
    week_label: (d, w) => `Day ${d}  ·  Week ${w}`,

    /* ── TOASTS ── */
    toast_complete: (d) => `Day ${d} complete ✨`,
    toast_unmarked: (d) => `Day ${d} unmarked`,
    toast_entry_saved: 'Entry saved ✨',
    toast_chat_cleared: 'Chat history cleared',
    toast_app_installed: 'App installed ✨',
    toast_journey_reset: 'New journey begins ✨',
    toast_lock: (d) => `Complete Day ${d} first`,

    /* ── AI COACH ── */
    coach_title: 'Wealth Coach',
    coach_sub: 'Your personal guide through inner transformation',
    coach_placeholder: 'Ask anything…',
    qb1: "Today's affirmation", qb2: 'My progress', qb3: 'Motivation', qb4: 'Scarcity mindset',
    chat_clear: 'Clear history',
    chat_welcome: 'Welcome. Ask me anything about your inner wealth journey.',
    msg_saved: (n) => `${n} messages saved`,

    /* ── JOURNAL ── */
    journal_title: 'Journal',
    journal_sub: 'Write your transformation into being',
    journal_hint: 'To change the day, click on the box above.',
    journal_placeholder: 'What shifted in you today? What did you feel, notice, or release?',
    journal_save_btn: 'Save Entry',
    past_label: 'Past Entries',
    journal_empty: 'No entries yet. Begin writing your story.',

    /* ── STATS ── */
    stats_title: 'Your Journey',
    stats_sub: 'Every day is a step closer to yourself',
    stat_days: 'Days Complete', stat_pct: 'Progress',
    stat_streak: 'Day Streak', stat_journal: 'Journal Entries',
    heat_label: '21-Day Map',
    settings_label: 'Settings',

    /* ── SETTINGS ROWS ── */
    settings_install_title: 'Install App',
    settings_install_sub: 'Add Wealthy Within to your home screen',
    settings_about_title: 'About',
    settings_about_sub: 'The journey, the artist, share your thoughts',
    settings_reset_title: 'Reset Journey',
    settings_reset_sub: 'Clear all progress and start over',

    /* ── ABOUT MODAL ── */
    about_hero_title: 'About',
    about_hero_sub: 'The Journey · The Artist · Your Voice',
    about_ww_h3: 'About Wealthy Within',
    about_ww_p1: 'Wealthy Within is built on a simple but powerful idea — that the path to lasting abundance begins from within.',
    about_ww_p2: 'This journey is designed to help you overcome the fears that silently block prosperity — fear of losing money, losing security, losing opportunity. Through practical mindset coaching and structured, step-by-step exercises, it shows you where to invest your time and energy, and how to cultivate the thoughts and emotions that attract lasting wealth.',
    about_ww_p3: 'Not just motivation. Actionable guidance. Measurable results. Real financial confidence.',
    about_kabeer_h3: 'About Kabeer',
    about_kabeer_p1: 'Kabeer Sabharwal is a multidisciplinary artist — singer, composer, lyricist, dancer, writer, poet, and storyteller — whose creative work is a natural expression of how he experiences life.',
    about_kabeer_q1: '"He had everything within. All his art was innate."',
    about_kabeer_p2: 'Beyond his artistry, Kabeer follows a spiritual path focused on guiding others to discover their inner potential and develop deeper self-awareness. Wealthy Within is his offering to those ready to meet life — not just survive it.',
    about_kabeer_q2: '"Life is not something that happens to you. It\'s something you learn to meet."',
    about_feedback_h3: 'Share Your Thoughts',
    about_feedback_sub: 'Your experience matters. Tell us how this journey has been for you.',
    about_fb_name: 'Your name',
    about_fb_email: 'Your email',
    about_fb_message: 'Your message...',
    about_fb_submit: 'Send Feedback',
    about_thanks_text: 'Thank you. Your words mean a lot. 🙏',

    /* ── DONATE SECTION ── */
    donate_origin: 'This app was built by one person — not a company, not a team. Just someone who felt this journey deserved to exist, and kept building it one step at a time.',
    donate_title: 'Support This Journey 🌱',
    donate_sub: 'Built with care, freely given. If this app has brought value to your life, you\'re welcome to support its journey in whatever way feels right.',
    donate_seed: 'a seed', donate_step: 'a step', donate_shift: 'a shift',
    donate_custom_placeholder: 'Choose your amount',
    donate_upi_btn: 'Support via UPI',
    donate_thanks: 'Every contribution keeps this journey alive. Thank you 🙏',

    /* ── CONFIRM RESET ── */
    confirm_reset_title: 'Reset Journey?',
    confirm_reset_sub: 'This will clear all completed days and journal entries. Your chat history with the Coach will remain. This cannot be undone.',
    confirm_reset_yes: 'Yes, Reset Everything',
    confirm_reset_cancel: 'Cancel',
  },

  hi: {
    /* ── NAV ── */
    nav_home: 'होम', nav_coach: 'कोच', nav_journal: 'जर्नल', nav_stats: 'प्रगति',

    /* ── HOME ── */
    tagline: '21-दिन की भीतरी समृद्धि यात्रा',
    prog_of: ' में से 21 दिन',
    week1: 'जागरूकता', week2: 'विश्वास', week3: 'संरेखण',
    install_p: 'तुरंत एक्सेस के लिए होम स्क्रीन पर इंस्टॉल करें',
    install_btn: 'इंस्टॉल करें',
    day_label: 'दिन ',

    /* ── LOCK TOOLTIP ── */
    lock_tip: (d) => `पहले दिन ${d} पूरा करो`,

    /* ── MODAL ── */
    section_practice: 'अभ्यास',
    section_affirmation: 'पुष्टि',
    section_insight: 'AI अंतर्दृष्टि',
    insight_placeholder: 'आज की अपनी निजी अंतर्दृष्टि पाने के लिए नीचे टैप करें।',
    insight_btn: 'अंतर्दृष्टि पाएं',
    insight_loading: 'तुम्हारी अंतर्दृष्टि तैयार हो रही है…',
    complete_btn: 'आज का अभ्यास पूरा करें',
    incomplete_btn: 'अधूरा चिह्नित करें',
    week_label: (d, w) => `दिन ${d}  ·  सप्ताह ${w}`,

    /* ── TOASTS ── */
    toast_complete: (d) => `दिन ${d} पूरा हुआ ✨`,
    toast_unmarked: (d) => `दिन ${d} हटाया गया`,
    toast_entry_saved: 'एंट्री सेव हुई ✨',
    toast_chat_cleared: 'चैट हिस्ट्री साफ़ हुई',
    toast_app_installed: 'ऐप इंस्टॉल हो गया ✨',
    toast_journey_reset: 'नई यात्रा शुरू होती है ✨',
    toast_lock: (d) => `पहले दिन ${d} पूरा करो`,

    /* ── AI COACH ── */
    coach_title: 'वेल्थ कोच',
    coach_sub: 'भीतरी बदलाव में तुम्हारा निजी मार्गदर्शक',
    coach_placeholder: 'कुछ भी पूछो…',
    qb1: 'आज की पुष्टि', qb2: 'मेरी प्रगति', qb3: 'प्रेरणा', qb4: 'कमी की मानसिकता',
    chat_clear: 'हिस्ट्री साफ़ करें',
    chat_welcome: 'स्वागत है। अपनी भीतरी समृद्धि यात्रा के बारे में कुछ भी पूछो।',
    msg_saved: (n) => `${n} संदेश सेव हैं`,

    /* ── JOURNAL ── */
    journal_title: 'जर्नल',
    journal_sub: 'अपने बदलाव को लिखते हुए जीओ',
    journal_hint: 'दिन बदलने के लिए ऊपर वाले बॉक्स पर क्लिक करो।',
    journal_placeholder: 'आज तुममें क्या बदला? क्या महसूस किया, क्या देखा, क्या छोड़ा?',
    journal_save_btn: 'एंट्री सेव करें',
    past_label: 'पुरानी एंट्रीज़',
    journal_empty: 'अभी कोई एंट्री नहीं। अपनी कहानी लिखना शुरू करो।',

    /* ── STATS ── */
    stats_title: 'तुम्हारी यात्रा',
    stats_sub: 'हर दिन तुम खुद के थोड़ा और करीब हो',
    stat_days: 'दिन पूरे', stat_pct: 'प्रगति',
    stat_streak: 'दिन की लकीर', stat_journal: 'जर्नल एंट्रीज़',
    heat_label: '21-दिन का नक्शा',
    settings_label: 'सेटिंग्स',

    /* ── SETTINGS ROWS ── */
    settings_install_title: 'ऐप इंस्टॉल करें',
    settings_install_sub: 'Wealthy Within को होम स्क्रीन पर जोड़ें',
    settings_about_title: 'परिचय',
    settings_about_sub: 'यह यात्रा, कलाकार, और तुम्हारे विचार',
    settings_reset_title: 'यात्रा रीसेट करें',
    settings_reset_sub: 'सारी प्रगति हटाकर नए सिरे से शुरू करो',

    /* ── ABOUT MODAL ── */
    about_hero_title: 'परिचय',
    about_hero_sub: 'यात्रा · कलाकार · तुम्हारी आवाज़',
    about_ww_h3: 'Wealthy Within के बारे में',
    about_ww_p1: 'Wealthy Within एक सीधे लेकिन शक्तिशाली विचार पर बना है — कि टिकाऊ समृद्धि की राह भीतर से शुरू होती है।',
    about_ww_p2: 'यह यात्रा तुम्हें उन डरों से मुक्त करने के लिए बनाई गई है जो चुपचाप समृद्धि को रोकते हैं — पैसे खोने का डर, सुरक्षा खोने का डर, मौका खोने का डर। व्यावहारिक mindset कोचिंग और चरण-दर-चरण अभ्यासों के ज़रिए यह दिखाती है कि अपना समय और ऊर्जा कहां लगाएं, और उन विचारों व भावनाओं को कैसे पैदा करें जो स्थायी दौलत को आकर्षित करते हैं।',
    about_ww_p3: 'सिर्फ प्रेरणा नहीं। ठोस मार्गदर्शन। मापने योग्य नतीजे। असली आर्थिक आत्मविश्वास।',
    about_kabeer_h3: 'Kabeer के बारे में',
    about_kabeer_p1: 'Kabeer Sabharwal एक बहुआयामी कलाकार हैं — गायक, संगीतकार, गीतकार, नर्तक, लेखक, कवि, और कहानीकार — जिनकी रचनात्मक कृतियां जीवन को जीने के उनके तरीके की स्वाभाविक अभिव्यक्ति हैं।',
    about_kabeer_q1: '"सब कुछ उनके भीतर था। उनकी हर कला सहज थी।"',
    about_kabeer_p2: 'कला के परे, Kabeer एक आध्यात्मिक मार्ग पर चलते हैं जो दूसरों को उनकी भीतरी क्षमता खोजने और गहरी आत्म-जागरूकता विकसित करने में मदद करता है। Wealthy Within उनकी भेंट है उन लोगों के लिए जो ज़िंदगी से सिर्फ बचने नहीं, बल्कि उसे सचमुच जीने के लिए तैयार हैं।',
    about_kabeer_q2: '"ज़िंदगी वो नहीं जो तुम पर होती है। यह वो है जिसे तुम जीना सीखते हो।"',
    about_feedback_h3: 'अपने विचार साझा करो',
    about_feedback_sub: 'तुम्हारा अनुभव मायने रखता है। बताओ यह यात्रा कैसी रही।',
    about_fb_name: 'तुम्हारा नाम',
    about_fb_email: 'तुम्हारा ईमेल',
    about_fb_message: 'तुम्हारा संदेश...',
    about_fb_submit: 'फ़ीडबैक भेजें',
    about_thanks_text: 'शुक्रिया। तुम्हारे शब्द बहुत मायने रखते हैं। 🙏',

    /* ── DONATE SECTION ── */
    donate_origin: 'यह ऐप एक इंसान ने बनाया है — कोई कंपनी नहीं, कोई टीम नहीं। बस कोई जिसे लगा कि यह यात्रा दुनिया में होनी चाहिए, और एक-एक कदम चलकर इसे बनाता रहा।',
    donate_title: 'इस यात्रा को सहारा दो 🌱',
    donate_sub: 'प्यार से बनाया, मुफ्त दिया। अगर इस ऐप ने तुम्हारी ज़िंदगी में कुछ जोड़ा है, तो जो सही लगे उस तरह इसकी यात्रा को आगे बढ़ाओ।',
    donate_seed: 'एक बीज', donate_step: 'एक कदम', donate_shift: 'एक बदलाव',
    donate_custom_placeholder: 'अपनी राशि चुनो',
    donate_upi_btn: 'UPI से सहयोग करो',
    donate_thanks: 'हर योगदान इस यात्रा को ज़िंदा रखता है। शुक्रिया 🙏',

    /* ── CONFIRM RESET ── */
    confirm_reset_title: 'यात्रा रीसेट करें?',
    confirm_reset_sub: 'इससे सभी पूरे किए हुए दिन और जर्नल एंट्रीज़ हट जाएंगी। कोच के साथ चैट हिस्ट्री बनी रहेगी। यह वापस नहीं होगा।',
    confirm_reset_yes: 'हां, सब रीसेट करो',
    confirm_reset_cancel: 'रद्द करो',
  }
};


const DAYS_HI = [
  {day:1, title:"जागरूकता", practice:"आज पैसों के बारे में अपने विचारों को बिना जज किए देखो — बस नोटिस करो। एक नोटबुक में 3 मनी-थॉट्स वैसे ही लिखो जैसे वे आते हैं।", affirmation:"मैं अपनी भीतरी दुनिया को समझना शुरू कर रहा/रही हूं। जागरूकता हर बदलाव का बीज है।"},
  {day:2, title:"कृतज्ञता", practice:"5 चीज़ें लिखो जिनके लिए तुम अभी सच में शुक्रगुज़ार हो — गर्म खाना, छत, कोई जो परवाह करे। हर एक को पूरी तरह महसूस करो।", affirmation:"जिसकी मैं कद्र करता/करती हूं, वो बढ़ता है। कृतज्ञता हर दरवाज़ा खोलती है।"},
  {day:3, title:"इच्छाएं", practice:"10 चीज़ें लिखो जो तुम सच में चाहते हो — खुद को रोके बिना। बड़ी, छोटी, भौतिक, भावनात्मक। बिना guilt के चाहने की आज़ादी लो।", affirmation:"मेरी इच्छाएं स्वार्थी नहीं — ये पवित्र हैं। मैं वो सब पाने के योग्य हूं जो मैं चाहता/चाहती हूं।"},
  {day:4, title:"विश्वास", practice:"एक ऐसी सोच पहचानो जो शायद तुम्हारे पास दौलत आने से रोक रही हो। उसे साफ़ लिखो। फिर तीन बार ज़ोर से बोलो: 'यह सोच अब मेरे काम की नहीं। मैं इसे अभी छोड़ता/छोड़ती हूं।'", affirmation:"पुरानी सोच आसानी से जाती है। मैं पैसों और समृद्धि के बारे में नई, विस्तृत सच्चाइयों के लिए खुला/खुली हूं।"},
  {day:5, title:"कल्पना", practice:"5 मिनट चुपचाप बैठो। आंखें बंद करो। खुद को आर्थिक रूप से आज़ाद जीते हुए देखो — कहां हो, क्या कर रहे हो, कैसा महसूस हो रहा है? उस एहसास में रहो।", affirmation:"समृद्धि की मेरी तस्वीर असली है और यह मेरे पास आ रही है।"},
  {day:6, title:"मांगो", practice:"साफ़ और सटीक लिखो: मैं क्या चाहता/चाहती हूं? कितना? यह कैसी ज़िंदगी बनाता है? स्पष्ट रहो — ब्रह्मांड स्पष्टता का जवाब देता है।", affirmation:"मैं भरोसे के साथ मांगता/मांगती हूं। मेरी मांग पहुंच चुकी है और पूरी होने की राह पर है।"},
  {day:7, title:"पहले हफ्ते की समीक्षा", practice:"पिछले 7 दिनों पर रुककर सोचो। क्या बदला? क्या हैरान किया? क्या साफ़ हुआ? अपने जर्नल में पूरा reflection लिखो।", affirmation:"हर दिन मैं बढ़ रहा/रही हूं। मुझे इस प्रक्रिया पर पूरा भरोसा है।"},
  {day:8, title:"पैसों का बहाव", practice:"आज जब भी पैसे खर्च करो, रुको और मन में बोलो: 'पैसा जाता है और लौटकर आता है, हमेशा।' guilt की जगह कृतज्ञता महसूस करो।", affirmation:"पैसा ऊर्जा है। यह मेरे ज़रिए स्वतंत्र रूप से बहता है और हमेशा कई गुना होकर लौटता है।"},
  {day:9, title:"भाषा", practice:"आज जब भी 'मैं afford नहीं कर सकता/सकती' कहने का मन हो — रुको। इसे बदलो: 'मैं अभी इस पर खर्च न करने का चुनाव कर रहा/रही हूं।' फर्क नोटिस करो।", affirmation:"मेरे शब्द मेरी हकीकत बनाते हैं। मैं समृद्धि और संभावनाओं की भाषा चुनता/चुनती हूं।"},
  {day:10, title:"पाना", practice:"आज पूरी तरह पाने की प्रैक्टिस करो। जब कोई तारीफ, तोहफा, या दयालुता दे — बस 'शुक्रिया' बोलो और उसे अंदर उतरने दो। मना मत करो।", affirmation:"मैं हर रूप में पाने के लिए खुला/खुली हूं। मैं प्यार, समृद्धि और उदारता के योग्य हूं।"},
  {day:11, title:"उदारता", practice:"आज कुछ मुक्त भाव से दो — अपना समय, एक अच्छा शब्द, थोड़े पैसे, एक मुस्कान। बिना हिसाब रखे दो।", affirmation:"मैं जितना खुलकर देता/देती हूं, ज़िंदगी उतना ही खुलकर मुझे वापस देती है।"},
  {day:12, title:"अमीर महसूस करो", practice:"समृद्धि के आने से पहले, उसे जिओ। अपने पसंदीदा कपड़े पहनो, चाय धीरे-धीरे पियो, आराम से चलो — पूरे दिन ऐसे रहो जैसे तुम पहले से आज़ाद हो।", affirmation:"अमीर महसूस करना ही अमीर होना है। मेरी भीतरी अवस्था मेरी बाहरी हकीकत बनाती है।"},
  {day:13, title:"रोल मॉडल", practice:"किसी एक ऐसे इंसान के बारे में पढ़ो जिसने बहुत कम से शुरू करके दौलत बनाई। उनकी mindset को समझो — सिर्फ strategy नहीं। सोखो कि उन्होंने पैसों के बारे में कैसे सोचा।", affirmation:"दूसरों ने जो पाया है वो मेरे लिए भी संभव है, यह उसका सबूत है।"},
  {day:14, title:"आधा सफर", practice:"तुम आधे पहुंच गए हो। इसे महसूस करो। देखो क्या चुपचाप बदला है — तुम्हारे विचारों में, बातों में, पैसों के बारे में भावनाओं में। इसे celebrate करो।", affirmation:"मैं एक असली बदलाव के बीच में हूं। मैं यहां तक आने का सम्मान करता/करती हूं।"},
  {day:15, title:"डर छोड़ो", practice:"अपना सबसे गहरा पैसों से जुड़ा डर एक कागज़ पर लिखो। फिर उसे नष्ट करो — फाड़ो, सुरक्षित जलाओ, दफनाओ। प्रतीकात्मक रूप से उसे अपनी ज़िंदगी से जाने दो।", affirmation:"मैं आर्थिक डर से मुक्त हूं। समृद्धि कोई कमाई नहीं — यह मेरा स्वभाव है।"},
  {day:16, title:"पैसों की कहानी", practice:"बचपन में पैसों के बारे में क्या सीखा? घर में क्या कहा जाता था? अपनी पुरानी कहानी लिखो — फिर एक नई लिखो, जो तुम्हारे काम आए।", affirmation:"मेरी नई पैसों की कहानी अभी शुरू होती है: दौलत मेरे पास आसानी से, खुशी से, और लगातार आती है।"},
  {day:17, title:"कदम उठाओ", practice:"प्रेरित कदम ही सोच और हकीकत के बीच का पुल है। आज अपने आर्थिक लक्ष्य की तरफ एक छोटा, ठोस कदम उठाओ — एक email, एक idea, एक बात।", affirmation:"मैं मजबूरी से नहीं, प्रेरणा से चलता/चलती हूं। मेरा हर कदम ब्रह्मांड का साथ पाता है।"},
  {day:18, title:"संकेत देखो", practice:"आज चारों तरफ समृद्धि के संकेत ढूंढो — मिला हुआ सिक्का, मुफ्त कॉफी, अचानक छूट, किसी अजनबी की दयालुता। गिनो। ये संदेश हैं।", affirmation:"समृद्धि मेरे चारों तरफ हर पल है। मैं उसकी मौजूदगी के प्रति जागरूक हूं।"},
  {day:19, title:"भविष्य का मैं", practice:"अपने भविष्य के, आर्थिक रूप से आज़ाद, खुद से अपने आज के खुद को एक पत्र लिखो। वो तुम्हें क्या बताना चाहते हैं? किस पर भरोसा करने को कहते हैं?", affirmation:"मेरा भविष्य का मैं पहले से पूरा है। मैं हर सांस के साथ उस रूप की तरफ बढ़ रहा/रही हूं।"},
  {day:20, title:"संरेखण", practice:"आज कुछ सिर्फ खुशी के लिए करो — नाचो, बनाओ, प्रकृति में टहलो, गाओ। खुशी कोई luxury नहीं है। यह समृद्धि की frequency है।", affirmation:"जब मैं खुशी में जीता/जीती हूं, तब मैं अपनी हर इच्छा के साथ पूरी तरह संरेखित होता/होती हूं।"},
  {day:21, title:"एकीकरण", practice:"21 दिन पूरे। अपनी पूरी यात्रा का चाप लिखो — कहां से शुरू हुए, क्या खुला, अब क्या जानते हो। फिर वादा करो कि इसे आगे ले जाओगे।", affirmation:"मैं भीतर से बदल गया/गई हूं। दौलत — अपने हर रूप में — अब मेरा स्वाभाविक स्वभाव है।"},
];


/* ── Language state ── */
let currentLang = localStorage.getItem('ww_lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('ww_lang', lang);
  applyLang();
}

function t(key, ...args) {
  const val = LANGS[currentLang][key];
  return typeof val === 'function' ? val(...args) : (val || LANGS.en[key] || key);
}

function getDays() {
  return currentLang === 'hi' ? DAYS_HI : null; // null = use built-in DAYS
}

function applyLang() {
  /* NAV */
  const navLabels = document.querySelectorAll('.nav-label');
  const keys = ['nav_home','nav_coach','nav_journal','nav_stats'];
  navLabels.forEach((el, i) => { if(keys[i]) el.textContent = t(keys[i]); });

  /* Toggle button */
  const btn = document.getElementById('lang-toggle');
  if(btn) btn.textContent = currentLang === 'hi' ? 'EN' : 'हि';

  /* Coach screen */
  const coachH2 = document.querySelector('#screen-ai .screen-hd h2');
  const coachP  = document.querySelector('#screen-ai .screen-hd p');
  if(coachH2) coachH2.textContent = t('coach_title');
  if(coachP)  coachP.textContent  = t('coach_sub');

  /* Coach quick-buttons */
  const qbs = document.querySelectorAll('.qb');
  const qkeys = ['qb1','qb2','qb3','qb4'];
  qbs.forEach((el, i) => { if(qkeys[i]) el.textContent = t(qkeys[i]); });

  /* Coach textarea placeholder */
  const chatInput = document.getElementById('chat-input');
  if(chatInput) chatInput.placeholder = t('coach_placeholder');

  /* Clear history button */
  const clearBtn = document.querySelector('.chat-clear-btn');
  if(clearBtn) clearBtn.textContent = t('chat_clear');

  /* Journal screen */
  const jH2 = document.querySelector('#screen-journal .screen-hd h2');
  const jP  = document.querySelector('#screen-journal .screen-hd p');
  if(jH2) jH2.textContent = t('journal_title');
  if(jP)  jP.textContent  = t('journal_sub');

  const jHint = document.querySelector('#screen-journal .j-wrap p');
  if(jHint) jHint.textContent = t('journal_hint');

  const jText = document.getElementById('j-text');
  if(jText) jText.placeholder = t('journal_placeholder');

  const jSave = document.querySelector('.j-save');
  if(jSave) jSave.textContent = t('journal_save_btn');

  const pastLabel = document.querySelector('.past-wrap .sec-label');
  if(pastLabel) pastLabel.textContent = t('past_label');

  /* Stats screen */
  const sH2 = document.querySelector('#screen-stats .screen-hd h2');
  const sP  = document.querySelector('#screen-stats .screen-hd p');
  if(sH2) sH2.textContent = t('stats_title');
  if(sP)  sP.textContent  = t('stats_sub');

  /* Install bar */
  const iBarP = document.querySelector('#install-bar p');
  const iBarBtn = document.querySelector('#install-btn');
  if(iBarP) iBarP.textContent = t('install_p');
  if(iBarBtn) iBarBtn.textContent = t('install_btn');

  /* Week row labels */
  const wls = document.querySelectorAll('.wl');
  if(wls.length >= 3) {
    wls[0].childNodes[1].textContent = t('week1');
    wls[1].childNodes[1].textContent = t('week2');
    wls[2].childNodes[1].textContent = t('week3');
  }

  /* Tagline */
  const tagline = document.querySelector('.tagline');
  if(tagline) tagline.textContent = t('tagline');

  /* Settings rows */
  const installTitle = document.querySelector('#install-row .settings-title');
  const installSub   = document.getElementById('install-sub');
  if(installTitle) installTitle.textContent = t('settings_install_title');
  if(installSub)   installSub.textContent   = t('settings_install_sub');

  const aboutSettingsTitle = document.getElementById('settings-about-title');
  const aboutSettingsSub   = document.getElementById('settings-about-sub');
  if(aboutSettingsTitle) aboutSettingsTitle.textContent = t('settings_about_title');
  if(aboutSettingsSub)   aboutSettingsSub.textContent   = t('settings_about_sub');

  const resetTitle = document.getElementById('settings-reset-title');
  const resetSub   = document.getElementById('settings-reset-sub');
  if(resetTitle) resetTitle.textContent = t('settings_reset_title');
  if(resetSub)   resetSub.textContent   = t('settings_reset_sub');

  /* About modal */
  const aHeroTitle = document.getElementById('about-hero-title');
  const aHeroSub   = document.querySelector('.about-hero-sub');
  if(aHeroTitle) aHeroTitle.textContent = t('about_hero_title');
  if(aHeroSub)   aHeroSub.textContent   = t('about_hero_sub');

  const aWwH3 = document.querySelector('#about-journey h3');
  const aWwPs = document.querySelectorAll('#about-journey > p');
  if(aWwH3) aWwH3.textContent = t('about_ww_h3');
  if(aWwPs[0]) aWwPs[0].textContent = t('about_ww_p1');
  if(aWwPs[1]) aWwPs[1].textContent = t('about_ww_p2');
  if(aWwPs[2]) aWwPs[2].textContent = t('about_ww_p3');

  const aKabeerH3 = document.querySelector('#about-kabeer h3');
  const aKabeerPs = document.querySelectorAll('#about-kabeer > p');
  const aKabeerQs = document.querySelectorAll('#about-kabeer .quote');
  if(aKabeerH3) aKabeerH3.textContent = t('about_kabeer_h3');
  if(aKabeerPs[0]) aKabeerPs[0].textContent = t('about_kabeer_p1');
  if(aKabeerQs[0]) aKabeerQs[0].textContent = t('about_kabeer_q1');
  if(aKabeerPs[1]) aKabeerPs[1].textContent = t('about_kabeer_p2');
  if(aKabeerQs[1]) aKabeerQs[1].textContent = t('about_kabeer_q2');

  const aFbH3  = document.querySelector('#about-feedback h3');
  const aFbSub = document.querySelector('#about-feedback .about-feedback-sub');
  const aFbName    = document.getElementById('fb-name');
  const aFbEmail   = document.getElementById('fb-email');
  const aFbMessage = document.getElementById('fb-message');
  const aFbSubmit  = document.getElementById('fb-submit');
  const aThanksText = document.querySelector('.about-thanks-text');
  if(aFbH3)  aFbH3.textContent  = t('about_feedback_h3');
  if(aFbSub) aFbSub.textContent = t('about_feedback_sub');
  if(aFbName)    aFbName.placeholder    = t('about_fb_name');
  if(aFbEmail)   aFbEmail.placeholder   = t('about_fb_email');
  if(aFbMessage) aFbMessage.placeholder = t('about_fb_message');
  if(aFbSubmit)  aFbSubmit.textContent  = t('about_fb_submit');
  if(aThanksText) aThanksText.textContent = t('about_thanks_text');

  /* Donate section */
  const dOrigin = document.querySelector('.progress-donate-origin');
  const dTitle  = document.querySelector('.progress-donate-title');
  const dSub    = document.querySelector('.progress-donate-sub');
  if(dOrigin) dOrigin.textContent = t('donate_origin');
  if(dTitle)  dTitle.textContent  = t('donate_title');
  if(dSub)    dSub.textContent    = t('donate_sub');

  const dChips = document.querySelectorAll('.donate-chip');
  const chipLabelKeys = ['donate_seed','donate_step','donate_shift'];
  dChips.forEach((chip, i) => {
    const lbl = chip.querySelector('.donate-chip-label');
    if(lbl && chipLabelKeys[i]) lbl.textContent = t(chipLabelKeys[i]);
  });

  const dCustom = document.querySelector('.donate-custom-input');
  if(dCustom) dCustom.placeholder = t('donate_custom_placeholder');

  const dUpiBtn = document.getElementById('donate-upi-btn');
  if(dUpiBtn) {
    const icon = dUpiBtn.querySelector('svg');
    dUpiBtn.textContent = t('donate_upi_btn');
    if(icon) dUpiBtn.insertAdjacentElement('afterbegin', icon);
  }

  const dThanks = document.querySelector('.donate-thanks');
  if(dThanks) dThanks.textContent = t('donate_thanks');

  /* Confirm reset modal */
  const confirmTitle = document.getElementById('confirm-reset-title');
  const confirmSub   = document.getElementById('confirm-reset-sub');
  const confirmYes   = document.getElementById('confirm-reset-yes');
  const confirmCancel= document.getElementById('confirm-reset-cancel');
  if(confirmTitle)  confirmTitle.textContent  = t('confirm_reset_title');
  if(confirmSub)    confirmSub.textContent    = t('confirm_reset_sub');
  if(confirmYes)    confirmYes.textContent    = t('confirm_reset_yes');
  if(confirmCancel) confirmCancel.textContent = t('confirm_reset_cancel');

  /* Re-render dynamic screens if active */
  if(typeof renderHome === 'function') renderHome();
  if(typeof renderStats === 'function' && document.getElementById('screen-stats').classList.contains('active')) renderStats();
  if(typeof renderJournal === 'function' && document.getElementById('screen-journal').classList.contains('active')) renderJournal();
}
