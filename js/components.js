// MerryMeal — Shared HTML Components

const ROOT = '../..';

function staffNav(activePage = '') {
  return `
  <nav class="topnav">
    <div class="nav-logo">Merry<em>Meal</em></div>
    <div class="nav-right">
      <span class="nav-label">Staff portal</span>
      <div class="nav-notif">
        <i class="ti ti-bell nav-bell"></i>
        <span class="nav-notif-badge">3</span>
      </div>
      <div class="nav-avatar">ST</div>
      <span class="nav-label">Staff User</span>
    </div>
  </nav>`;
}

function staffSidebar(active = '') {
  const items = [
    { label: 'Main', type: 'label' },
    { icon: 'ti-users', text: 'Members', href: '../../pages/staff/member-list.html' },
    { icon: 'ti-heart', text: 'Caregivers', href: '../../pages/staff/caregiver-list.html' },
    { icon: 'ti-building-store', text: 'Partners', href: '../../pages/staff/partner-list.html' },
    { icon: 'ti-run', text: 'Volunteers', href: '../../pages/staff/volunteer-list.html' },
    { type: 'gap' },
    { label: 'Operations', type: 'label' },
    { icon: 'ti-truck-delivery', text: 'Delivery', href: '../../pages/staff/delivery-routes.html' },
    { icon: 'ti-clipboard-list', text: 'Menu plan', href: '../../pages/staff/menu-planning.html' },
    { icon: 'ti-leaf', text: 'Food safety', href: '../../pages/staff/food-safety.html' },
    { icon: 'ti-refresh', text: 'Reassessment', href: '../../pages/staff/reassessment.html' },
    { type: 'gap' },
    { label: 'Admin', type: 'label' },
    { icon: 'ti-chart-bar', text: 'MIS reports', href: '../../pages/staff/mis-reports.html' },
    { icon: 'ti-coin', text: 'Donations', href: '../../pages/staff/donations.html' },
    { icon: 'ti-lock', text: 'Access control', href: '../../pages/staff/access-control.html' },
  ];

  let html = '<aside class="sidebar">';
  items.forEach(item => {
    if (item.type === 'label') {
      html += `<span class="sb-label" style="display:block;margin-top:${item.label !== 'Main' ? '1rem' : '0'}">${item.label}</span>`;
    } else if (item.type === 'gap') {
      html += '';
    } else {
      const isActive = active === item.text ? 'active' : '';
      html += `<a class="sb-item ${isActive}" href="${item.href}"><i class="ti ${item.icon}"></i>${item.text}</a>`;
    }
  });
  html += '</aside>';
  return html;
}

function footerBar() {
  return `
  <footer class="footer-bar">
    <div class="footer-l">MerryMeal · The Study Syndicate</div>
    <div class="footer-r">Higher Diploma in Software Engineering · 2026</div>
  </footer>`;
}

function publicTopbar(activePage = '') {
  return `
  <nav class="public-topbar">
    <a class="nav-logo" href="../../index.html">Merry<em>Meal</em></a>
    <div class="nav-links">
      <a href="../../index.html">About us</a>
      <a href="../../index.html#services">Our services</a>
      <a href="../../index.html#how">How it works</a>
      <a href="../../pages/public/donate.html">Donate</a>
      <a href="../../index.html#contact">Contact</a>
    </div>
    <div style="display:flex;gap:10px;align-items:center;">
      <a href="../../pages/auth/login.html" style="font-size:13px;color:#9FD4B8;">Sign in</a>
      <a href="../../pages/public/member-register.html" class="nav-cta"><i class="ti ti-user-plus"></i>Register now</a>
    </div>
  </nav>`;
}

function donorTopbar() {
  return `
  <nav class="public-topbar">
    <a class="nav-logo" href="../../index.html">Merry<em>Meal</em></a>
    <div style="display:flex;align-items:center;gap:16px;">
      <a href="../../index.html" style="font-size:13px;color:#9FD4B8;">About us</a>
      <a href="../../index.html" style="font-size:13px;color:#9FD4B8;">Our services</a>
      <a href="../../pages/auth/login.html" class="nav-signin">Sign in</a>
    </div>
  </nav>`;
}
