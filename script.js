// ============================================
// 해모루마을 분양 사이트 — 인터랙션
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 네비게이션 스크롤 상태 ---------- */
  const nav = document.getElementById('siteNav');
  const toggleNavBg = () => {
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  toggleNavBg();
  window.addEventListener('scroll', toggleNavBg, { passive: true });

  /* ---------- 모바일 메뉴 ---------- */
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('navMobile');

  burger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.classList.toggle('is-active', isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- 스크롤 리빌 ---------- */
  const revealTargets = document.querySelectorAll(
    '.feature-card, .loc-card, .spec-card, .about__lead, .siteplan__specs, .contact__form, .section-head, .gallery__item'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealTargets.forEach(el => io.observe(el));

  /* ---------- 카운트업 (단지소개 숫자 배너) ---------- */
  const countTargets = [35, null, 4, null]; // null = 텍스트 그대로 둠 (100~120평, 20분대)

  const countIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      countIo.unobserve(entry.target);
      const items = entry.target.querySelectorAll('.about__band-item .num');
      items.forEach((el, idx) => {
        const target = countTargets[idx];
        if (target == null) return;
        const original = el.textContent;
        let current = 0;
        const duration = 1100;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          current = Math.round(target * eased);
          el.textContent = current.toLocaleString('ko-KR');
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = original;
        };
        requestAnimationFrame(step);
      });
    });
  }, { threshold: 0.4 });

  const bandEl = document.querySelector('.about__band');
  if (bandEl) countIo.observe(bandEl);

  /* ---------- 문의 폼 (Formspree 연동) ---------- */
  const form = document.getElementById('contactForm');
  const notice = document.getElementById('formNotice');
  const submitBtn = document.getElementById('formSubmitBtn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();

      if (!name || !phone) {
        notice.textContent = '성함과 연락처를 입력해 주세요.';
        notice.style.color = '#FFB199';
        return;
      }

      const originalBtnText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = '전송 중...';
      notice.textContent = '잠시만 기다려 주세요.';
      notice.style.color = 'rgba(255,255,255,.55)';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          notice.textContent = `${name}님, 상담 신청이 접수되었습니다. 빠르게 연락드리겠습니다.`;
          notice.style.color = '#FFE3B0';
          form.reset();
        } else {
          notice.textContent = '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.';
          notice.style.color = '#FFB199';
        }
      } catch (err) {
        notice.textContent = '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.';
        notice.style.color = '#FFB199';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    });
  }

  /* ---------- 해 떠오르는 애니메이션이 화면 밖일 때 정지(성능) ---------- */
  const sun = document.querySelector('.hero__sun');
  if (sun) {
    const sunIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        sun.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      });
    });
    sunIo.observe(document.querySelector('.hero'));
  }
});
