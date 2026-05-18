// MerryMeal — Shared JS

// ── NAVIGATION ──
function navigateTo(path) {
  window.location.href = path;
}

// ── TOAST ──
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: 'ti-check', error: 'ti-x', warning: 'ti-alert-triangle', info: 'ti-info-circle' };
  toast.innerHTML = `<i class="ti ${icons[type] || 'ti-check'}"></i>${msg}`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; toast.style.transition = 'all .3s'; setTimeout(() => toast.remove(), 300); }, 3000);
}

function createToastContainer() {
  const el = document.createElement('div');
  el.id = 'toast-container';
  el.className = 'toast-container';
  document.body.appendChild(el);
  return el;
}

// ── MODAL ──
function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

// ── TOGGLE ──
function initToggles() {
  document.querySelectorAll('.toggle').forEach(t => {
    t.addEventListener('click', () => {
      t.classList.toggle('on');
      t.classList.toggle('off');
    });
  });
}

// ── CHECKBOXES ──
function initCheckboxes() {
  document.querySelectorAll('.chk').forEach(chk => {
    chk.addEventListener('click', () => {
      chk.classList.toggle('on');
      if (chk.classList.contains('on')) {
        chk.innerHTML = '<i class="ti ti-check"></i>';
      } else {
        chk.innerHTML = '';
      }
    });
  });
}

// ── DAY BOXES ──
function initDayBoxes() {
  document.querySelectorAll('.day-box').forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('on');
      box.innerHTML = box.classList.contains('on') ? '<i class="ti ti-check" style="font-size:12px;"></i>' : '';
    });
  });
}

// ── STATUS OPTS ──
function initStatusOpts() {
  document.querySelectorAll('.status-row').forEach(row => {
    row.querySelectorAll('.status-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        row.querySelectorAll('.status-opt').forEach(o => { o.classList.remove('active'); o.classList.add('inactive'); });
        opt.classList.add('active');
        opt.classList.remove('inactive');
      });
    });
  });
}

// ── AMOUNT BTNS ──
function initAmountBtns() {
  document.querySelectorAll('.amount-grid').forEach(grid => {
    grid.querySelectorAll('.amt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        grid.querySelectorAll('.amt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });
}

// ── TABS ──
function initTabs() {
  document.querySelectorAll('.tab-group').forEach(group => {
    const tabs = group.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => { t.classList.remove('active'); });
        tab.classList.add('active');
        group.querySelectorAll('.tab-pane').forEach(p => { p.classList.remove('active'); });
        document.getElementById(target)?.classList.add('active');
      });
    });
  });
}

// ── PLEDGE TABS ──
function initPledgeTabs() {
  document.querySelectorAll('.ptab').forEach((tab, i, tabs) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('act'));
      tab.classList.add('act');
    });
  });
}

// ── FORM VALIDATION ──
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return true;
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const error = field.parentElement.querySelector('.inp-error');
    if (!field.value.trim()) {
      field.classList.add('error');
      if (error) error.classList.add('show');
      valid = false;
    } else {
      field.classList.remove('error');
      if (error) error.classList.remove('show');
    }
  });
  return valid;
}

// ── COPY TO CLIPBOARD ──
function initCopyBtns() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.previousSibling?.textContent?.trim() || btn.dataset.copy;
      if (text) {
        navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard'));
      }
    });
  });
}

// ── SEARCH FILTER ──
function initSearch(inputId, tableId) {
  const input = document.getElementById(inputId);
  const table = document.getElementById(tableId);
  if (!input || !table) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    table.querySelectorAll('tbody tr').forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

// ── TAG MANAGEMENT ──
function initTagRemove() {
  document.querySelectorAll('.tag-remove').forEach(btn => {
    btn.addEventListener('click', () => btn.parentElement.remove());
  });
}

// ── MODAL OUTSIDE CLICK ──
function initModalClose() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  });
}

// ── FILTER BTNS ──
function initFilterBtns() {
  document.querySelectorAll('.filter-group').forEach(group => {
    group.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('act'); b.classList.add('un'); });
        btn.classList.add('act');
        btn.classList.remove('un');
      });
    });
  });
}

// ── ACTIVE SIDEBAR ──
function setActiveSidebar() {
  const path = window.location.pathname;
  document.querySelectorAll('.sb-item').forEach(item => {
    const href = item.getAttribute('href');
    if (href && path.endsWith(href.split('/').pop())) {
      item.classList.add('active');
    }
  });
}

// ── INIT ALL ──
document.addEventListener('DOMContentLoaded', () => {
  initToggles();
  initCheckboxes();
  initDayBoxes();
  initStatusOpts();
  initAmountBtns();
  initTabs();
  initPledgeTabs();
  initCopyBtns();
  initTagRemove();
  initModalClose();
  initFilterBtns();
  setActiveSidebar();
});

// ── ACCESSIBILITY TOGGLES ──
function initAccessibilityToggles() {
  // Restore saved state
  if (localStorage.getItem('mm-large-font') === 'on') {
    document.body.classList.add('large-font');
    document.querySelectorAll('.access-btn[data-access="font"]').forEach(b => b.classList.add('on'));
  }
  if (localStorage.getItem('mm-high-contrast') === 'on') {
    document.body.classList.add('high-contrast');
    document.querySelectorAll('.access-btn[data-access="contrast"]').forEach(b => b.classList.add('on'));
  }

  document.querySelectorAll('.access-btn[data-access="font"]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('large-font');
      const on = document.body.classList.contains('large-font');
      localStorage.setItem('mm-large-font', on ? 'on' : 'off');
      document.querySelectorAll('.access-btn[data-access="font"]').forEach(b => b.classList.toggle('on', on));
      showToast(on ? 'Large font mode on' : 'Large font mode off', 'info');
    });
  });

  document.querySelectorAll('.access-btn[data-access="contrast"]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      const on = document.body.classList.contains('high-contrast');
      localStorage.setItem('mm-high-contrast', on ? 'on' : 'off');
      document.querySelectorAll('.access-btn[data-access="contrast"]').forEach(b => b.classList.toggle('on', on));
      showToast(on ? 'High contrast mode on' : 'High contrast mode off', 'info');
    });
  });
}

document.addEventListener('DOMContentLoaded', initAccessibilityToggles);
