(function () {
  var root = document.documentElement;

  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var onScheme = function (e) {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (err) {}
    if (!stored) root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  };
  if (mq.addEventListener) mq.addEventListener('change', onScheme);

  var navBtn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.addEventListener('click', function (ev) {
    document.querySelectorAll('details.dropdown[open]').forEach(function (d) {
      if (!d.contains(ev.target)) d.removeAttribute('open');
    });
  });
  document.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Escape') return;
    document.querySelectorAll('details.dropdown[open]').forEach(function (d) {
      d.removeAttribute('open');
      var s = d.querySelector('summary');
      if (s) s.focus();
    });
  });

  var copyIcon = document.querySelector('.copy-btn');
  var iconHTML = copyIcon ? copyIcon.innerHTML : '';
  var lang = root.getAttribute('lang') || 'en';
  var label = lang.indexOf('de') === 0 ? ['Kopieren', 'Kopiert'] : ['Copy', 'Copied'];

  document.querySelectorAll('.prose .highlight').forEach(function (block) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.setAttribute('aria-label', label[0]);
    btn.innerHTML = iconHTML || label[0];
    block.appendChild(btn);
  });

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.copy-btn');
    if (!btn) return;
    var text = btn.getAttribute('data-copy');
    if (text === null) {
      var code = btn.parentElement.querySelector('pre code') || btn.parentElement.querySelector('pre');
      text = code ? code.innerText.replace(/\n$/, '') : '';
    }
    var done = function () {
      btn.classList.add('copied');
      btn.setAttribute('aria-label', label[1]);
      setTimeout(function () { btn.classList.remove('copied'); btn.setAttribute('aria-label', label[0]); }, 1500);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () {});
    } else {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
  });

  var toc = document.querySelector('.article-toc');
  if (toc && 'IntersectionObserver' in window) {
    var links = {};
    toc.querySelectorAll('a[href^="#"]').forEach(function (a) { links[decodeURIComponent(a.getAttribute('href').slice(1))] = a; });
    var current = null;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var a = links[e.target.id];
        if (!a) return;
        if (current) current.classList.remove('active');
        a.classList.add('active');
        current = a;
      });
    }, { rootMargin: '-80px 0px -70% 0px' });
    document.querySelectorAll('.prose h2[id], .prose h3[id]').forEach(function (h) { obs.observe(h); });
  }
})();
