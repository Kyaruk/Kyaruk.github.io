/* =========================================================================
   全站交互：中英双语切换 + 白天/夜晚主题（均为下拉菜单）
   - 语言：localStorage 'lang' = 'zh' | 'en'，默认中文
   - 主题：localStorage 'themePref' = 'auto' | 'light' | 'dark'
   - 主题按钮只显示「当前生效」的亮/暗线条图标；跟随系统是行为而非独立图标态
   - 论文标题等固定英文，不在字典中，故不加 data-i18n
   ========================================================================= */
(function () {
  'use strict';

  var I18N = {
    zh: {
      nav_home: '主页', nav_about: '关于', nav_achievements: '成果',
      nav_projects: '项目', nav_blog: '博客',
      sec_about: '关于', sec_education: '教育经历', sec_achievements: '成果',
      sec_projects: '项目', sec_blog: '博客',
      sb_school: '北京航空航天大学',
      sb_edu_ms: '硕士 · 网络空间安全学院',
      sb_location: '北京 / Beijing, China',
      about_body: '具备大模型应用与安全保护的开发经验，熟悉 Transformer、BERT 等通用大语言模型，深入对抗攻击领域前沿；熟练掌握 Python、Java、C/C++、JavaScript、Dart 等语言，有 Web 与移动端（Flutter、Vue）开发经验。',
      about_note: '（这段为占位简介，可改为你自己的话；也可放到 config.toml 的 params.bio 后由模板读取。）',
      about_page_intro: '陌生的朋友你好呀，欢迎来到朱祖坤（Kyaruk）的个人主页！我是朱祖坤，你也可以叫我 Kyaruk。',
      edu_ms_degree: '硕士 · 网络空间安全学院 · 北京航空航天大学',
      edu_ms_meta: '网络与信息安全 ｜ 导师：<a href="https://shi.buaa.edu.cn/gaoyingketizu/zh_CN/index/218507/list/index.htm" target="_blank" rel="noopener">高莹 副教授</a> ｜ GPA 3.84/4.0 ｜ 2023.09 – 2026.06',
      edu_bs_degree: '本科 · 计算机学院 · 北京航空航天大学',
      edu_bs_meta: '计算机科学与技术 ｜ 毕设指导老师：<a href="https://sunqysunqy.github.io" target="_blank" rel="noopener">孙庆赟 副教授</a> ｜ GPA 3.67/4.0 ｜ 2019.09 – 2023.06',
      blog_desc: '调研笔记 · 技术随笔 · 生活碎碎念（混合），支持标签分类。',
      pub_heading: '论文',
      patent_heading: '专利与软著',
      back_to_achievements: '返回成果',
      abstract_label: '摘要',
      keywords_label: '关键词：',
      status_granted: '已授权',
      status_review: '已进入实质审查',
      status_issued: '已发放',
      pat_inv_label: '发明人：',
      pat_no_label: '专利号',
      pat_reg_label: '登记号',
      pat_owner_label: '著作权人：',
      proj1_title: '面向大模型训练与应用的海量数据隐私保护关键技术研究及示范应用',
      proj1_meta: '子课题负责人 · 北京市科技计划中央引导地方专项',
      proj1_sub: '中国科学院信息工程研究所 ｜ 2023.09 – 2025.12',
      proj2_title: '抗隐私泄露的纵向联邦学习效率优化及鲁棒性研究',
      proj2_meta: '骨干成员 · 腾讯犀牛鸟专项研究项目',
      proj2_sub: '深圳市腾讯计算机系统有限公司 ｜ 2022.12 – 2023.12',
      proj3_title: '智能创作云平台',
      proj3_meta: '客户端开发 · 2022 中国软件杯 A9 全国二等奖',
      proj3_sub: 'Vue + Django + MySQL ｜ 2022.01 – 2022.03',
      ach_hero_title: '成果',
      ach_hero_sub: '论文发表、专利与软件著作权',
      proj_hero_title: '项目',
      proj_hero_sub: '过往参与的科研课题与竞赛项目',
      blog_hero_title: '博客',
      blog_hero_sub: '调研笔记 · 技术随笔 · 生活碎碎念',
      footer_built: '由 Hugo 构建'
    },
    en: {
      nav_home: 'Home', nav_about: 'About', nav_achievements: 'Achievements',
      nav_projects: 'Projects', nav_blog: 'Blog',
      sec_about: 'About', sec_education: 'Education', sec_achievements: 'Achievements',
      sec_projects: 'Projects', sec_blog: 'Blog',
      sb_school: 'Beihang University',
      sb_edu_ms: 'M.S. · School of Cyber Science and Technology',
      sb_location: 'Beijing, China',
      about_body: 'Experienced in LLM applications and security; familiar with Transformer, BERT and adversarial attacks. Skilled in Python, Java, C/C++, JavaScript, Dart, with Web and mobile (Flutter, Vue) development experience.',
      about_note: '(This is placeholder bio text; replace it with your own, or set params.bio in config.toml.)',
      about_page_intro: 'Hello, stranger! Welcome to the personal homepage of Zukun Zhu (Kyaruk)! My name is Zukun Zhu, and you can also call me Kyaruk.',
      edu_ms_degree: 'M.S. · School of Cyber Science and Technology · Beihang University',
      edu_ms_meta: 'Information Security · Advisor: <a href="https://shi.buaa.edu.cn/gaoyingketizu/zh_CN/index/218507/list/index.htm" target="_blank" rel="noopener">Ying Gao (Assoc. Prof.)</a> · GPA 3.84/4.0 · 2023.09 – 2026.06',
      edu_bs_degree: 'B.S. · School of Computer Science · Beihang University',
      edu_bs_meta: 'Computer Science and Technology · Thesis Advisor: <a href="https://sunqysunqy.github.io" target="_blank" rel="noopener">Qingyun Sun (Assoc. Prof.)</a> · GPA 3.67/4.0 · 2019.09 – 2023.06',
      blog_desc: 'Research notes · technical essays · random thoughts (mixed), with tag support.',
      pub_heading: 'Publications',
      patent_heading: 'Patents & Software Copyrights',
      back_to_achievements: 'Back to Achievements',
      abstract_label: 'Abstract',
      keywords_label: 'Keywords: ',
      status_granted: 'Granted',
      status_review: 'Under Examination',
      status_issued: 'Issued',
      pat_inv_label: 'Inventors: ',
      pat_no_label: 'Patent No. ',
      pat_reg_label: 'Reg. No. ',
      pat_owner_label: 'Copyright Owner: ',
      proj1_title: 'Key Technologies for Massive Data Privacy Protection in LLM Training & Applications (with Demonstration)',
      proj1_meta: 'Sub-project Lead · Beijing Municipal S&T Program (Central-Local Special Fund)',
      proj1_sub: 'Institute of Information Engineering, CAS · 2023.09 – 2025.12',
      proj2_title: 'Efficiency Optimization & Robustness of Privacy-Leakage-Resistant Vertical Federated Learning',
      proj2_meta: 'Core Member · Tencent Rhino-Bird Research Program',
      proj2_sub: 'Tencent (Shenzhen) · 2022.12 – 2023.12',
      proj3_title: 'Intelligent Content Creation Cloud Platform',
      proj3_meta: 'Client Development · 2022 China Software Cup, A9 Track, National 2nd Prize',
      proj3_sub: 'Vue + Django + MySQL · 2022.01 – 2022.03',
      ach_hero_title: 'Achievements',
      ach_hero_sub: 'Publications, patents & software copyrights',
      proj_hero_title: 'Projects',
      proj_hero_sub: 'Past research projects & competitions',
      blog_hero_title: 'Blog',
      blog_hero_sub: 'Research notes · technical essays · random thoughts',
      footer_built: 'Built with Hugo'
    }
  };

  /* 线条图标（stroke = currentColor，自动适配亮/暗） */
  var SUN_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.5" y1="4.5" x2="6.5" y2="6.5"/><line x1="17.5" y1="17.5" x2="19.5" y2="19.5"/><line x1="4.5" y1="19.5" x2="6.5" y2="17.5"/><line x1="17.5" y1="6.5" x2="19.5" y2="4.5"/></svg>';
  var MOON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  var THEME_LABEL = {
    zh: { auto: '跟随系统', light: '白天', dark: '夜晚' },
    en: { auto: 'System', light: 'Light', dark: 'Dark' }
  };

  var root = document.documentElement;
  var lang = localStorage.getItem('lang') || 'zh';
  var pref = localStorage.getItem('themePref') || 'auto';

  function effectiveDark() {
    return pref === 'dark' ||
      (pref === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  function applyTheme() {
    var dark = effectiveDark();
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    // 按钮只显示当前生效的 亮/暗 图标
    var iconEl = document.getElementById('themeIcon');
    if (iconEl) iconEl.innerHTML = dark ? MOON_SVG : SUN_SVG;
    // 高亮下拉菜单中当前选中的项
    var items = document.querySelectorAll('#themeMenu li');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle('selected', items[i].getAttribute('data-theme') === pref);
    }
    var tb = document.getElementById('themeToggle');
    if (tb) tb.setAttribute('aria-label', (lang === 'zh' ? '主题：' : 'Theme: ') + THEME_LABEL[lang][pref]);
  }

  function applyLang() {
    root.setAttribute('lang', lang);
    var dict = I18N[lang] || I18N.zh;
    // 这两个字段的值里含有 <a> 超链接，需要用 innerHTML 渲染；其余字段保持 textContent 以防注入
    var HTML_KEYS = { edu_ms_meta: 1, edu_bs_meta: 1 };
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-i18n');
      if (dict[k] != null) {
        if (HTML_KEYS[k]) nodes[i].innerHTML = dict[k];
        else nodes[i].textContent = dict[k];
      }
    }
    var lbl = document.getElementById('langLabel');
    if (lbl) lbl.textContent = (lang === 'zh') ? '中文' : 'English';
    var lis = document.querySelectorAll('#langMenu li');
    for (var j = 0; j < lis.length; j++) {
      lis[j].classList.toggle('selected', lis[j].getAttribute('data-lang') === lang);
    }
    applyTheme();
    initTypewriter();
  }

  /* ===== 关于页打字机：循环轮播多句话 =====
     效果：逐字打出一句话 → 停顿展示几秒 → 逐字退格删除 → 打下一句 → 无限循环
     ★ 想改文案：直接改下面 TYPEWRITER_PHRASES 的 zh / en 两个数组即可（中英文一一对应） */
  var TYPEWRITER_PHRASES = {
    zh: [
      '陌生的朋友你好呀，欢迎来到朱祖坤（Kyaruk）的个人主页！',
      '我是朱祖坤，你也可以叫我 Kyaruk。',
      '我毕业于北京航空航天大学，主要研究方向包括人工智能安全、隐私保护机器学习以及大语言模型安全等领域。',
      'Kyaruk 这个名字来源于 “Kyaru + k”。其中，Kyaru 是《公主连结！Re:Dive》中的黑猫角色“凯露”，而 k 则取自“坤”的首字母。',
      '我的 MBTI 类型是 INTJ。',
      '我热衷于探索各种电子游戏，尤其喜欢《英雄联盟》、各类 Roguelike 游戏以及合作闯关类游戏。🎮',
      '我也喜欢 Citywalk，喜欢和重要的人一起在不同城市漫步、聊天，在慢节奏的探索中感受城市的温度，也为自己充电。🔋',
      '未来，希望有一天能够拥有一只萨摩耶和一只西伯利亚森林猫。🐶🐱'
    ],
    en: [
      'Hello, stranger! Welcome to the personal homepage of Zukun Zhu (Kyaruk)!',
      'My name is Zukun Zhu, and you can also call me Kyaruk.',
      'I graduated from Beihang University, and my research interests include AI security, privacy-preserving machine learning, and large language model safety.',
      'The name "Kyaruk" comes from "Kyaru + k". Kyaru refers to Kyaru, the black cat character from Princess Connect! Re:Dive, while "k" is the first letter of "Kun", which is part of my Chinese name.',
      'My MBTI type is INTJ.',
      'I enjoy playing various types of video games, especially League of Legends, Roguelike games, and cooperative adventure games. 🎮',
      'I also enjoy Citywalk — wandering through different cities with someone important to me, having conversations along the way, and recharging myself through these slow and meaningful moments. 🔋',
      'In the future, I hope to have a Samoyed and a Siberian Forest Cat of my own. 🐶🐱'
    ]
  };

  var twTimer = null;
  function initTypewriter() {
    var el = document.querySelector('.typewriter');
    if (!el) return;
    if (twTimer) { clearTimeout(twTimer); twTimer = null; }   // 清掉上一次循环，避免语言切换时叠加多个定时器
    el.textContent = '';
    var cursor = document.createElement('span');
    cursor.className = 'tw-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    el.appendChild(cursor);

    var phrases = TYPEWRITER_PHRASES[lang] || TYPEWRITER_PHRASES.zh;
    var p = 0;            // 当前句子下标
    var c = 0;            // 已打出的字符数
    var deleting = false;

    function tick() {
      var full = phrases[p];
      if (!deleting) {
        // 打字
        c++;
        el.insertBefore(document.createTextNode(full.charAt(c - 1)), cursor);
        if (c === full.length) {
          deleting = true;
          twTimer = setTimeout(tick, 2200);   // 整句打完后停顿展示（毫秒，可调）
        } else {
          twTimer = setTimeout(tick, 70);      // 逐字打出速度（毫秒，可调）
        }
      } else {
        // 退格
        c--;
        var prev = cursor.previousSibling;
        if (prev && prev.nodeType === 3) {
          if (prev.data.length > 1) prev.data = prev.data.slice(0, -1);
          else el.removeChild(prev);
        }
        if (c === 0) {
          deleting = false;
          p = (p + 1) % phrases.length;        // 下一句（循环回到第一句）
          twTimer = setTimeout(tick, 500);      // 退格完成后短暂停顿再打下一句
        } else {
          twTimer = setTimeout(tick, 45);       // 退格速度（毫秒，可调）
        }
      }
    }
    tick();
  }

  /* ===== 下拉菜单通用逻辑 ===== */
  function closeAll() {
    var open = document.querySelectorAll('.dropdown.open');
    for (var i = 0; i < open.length; i++) {
      open[i].classList.remove('open');
      var b = open[i].querySelector('.dropdown-toggle');
      if (b) b.setAttribute('aria-expanded', 'false');
    }
  }

  var toggles = document.querySelectorAll('.dropdown-toggle');
  for (var t = 0; t < toggles.length; t++) {
    toggles[t].addEventListener('click', function (e) {
      e.stopPropagation();
      var dd = this.closest('.dropdown');
      var willOpen = !dd.classList.contains('open');
      closeAll();
      if (willOpen) {
        dd.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  }
  document.addEventListener('click', closeAll);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });

  /* ===== 语言菜单项 ===== */
  var langItems = document.querySelectorAll('#langMenu li');
  for (var li = 0; li < langItems.length; li++) {
    langItems[li].addEventListener('click', function (e) {
      e.stopPropagation();
      lang = this.getAttribute('data-lang');
      localStorage.setItem('lang', lang);
      applyLang();
      closeAll();
    });
  }

  /* ===== 主题菜单项 ===== */
  var themeItems = document.querySelectorAll('#themeMenu li');
  for (var ti = 0; ti < themeItems.length; ti++) {
    themeItems[ti].addEventListener('click', function (e) {
      e.stopPropagation();
      pref = this.getAttribute('data-theme');
      localStorage.setItem('themePref', pref);
      applyTheme();
      closeAll();
    });
  }

  /* 系统主题变化时（auto 模式）实时刷新图标 */
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  if (mq.addEventListener) mq.addEventListener('change', applyTheme);
  else if (mq.addListener) mq.addListener(applyTheme);

  applyLang();
})();
