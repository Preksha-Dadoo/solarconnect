/* ============================================================
   SolarConnect — app.js
   ============================================================ */

const today = new Date();

document.getElementById("today").innerText =
    today.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });


// ── STATE ──────────────────────────────────────────────────
const state = {
    beneficiaries: [
        { id: 'BEN-0001', name: 'Ramesh Kumar, Juice Stall', kitId: 'SC-AG-001', location: 'Kamla Nagar, Agra', joined: '2026-06-02', payment: 'uptodate', kitHealth: 'Good', phone: '9876543210', plan: 'Solar Lantern, ₹120/month' },
        { id: 'BEN-0002', name: 'Sanjay Kumar, Tea Vendor', kitId: 'SC-AG-002', location: 'Dayalbagh, Agra', joined: '2026-03-15', payment: 'uptodate', kitHealth: 'Critical', phone: '9812345678', plan: 'Street Vendor Kit, ₹450/month' },
        { id: 'BEN-0003', name: 'Savitri Devi, Home Business', kitId: 'SC-AG-003', location: 'Sikandra, Agra', joined: '2026-02-10', payment: 'duesoon', kitHealth: 'Good', phone: '9900112233', plan: 'Home Light Kit, ₹250/month' },
        { id: 'BEN-0004', name: 'Mohan Lal, Fruit Seller', kitId: 'SC-AG-004', location: 'Bichpuri Road, Agra', joined: '2026-01-05', payment: 'overdue', kitHealth: 'Fair', phone: '9988776655', plan: 'Street Vendor Kit, ₹450/month' },
        { id: 'BEN-0005', name: 'Rafiq Khan, Street Vendor', kitId: 'SC-AG-005', location: 'Patholi, Agra', joined: '2025-11-20', payment: 'uptodate', kitHealth: 'Good', phone: '9876001234', plan: 'Shop Kit, ₹650/month' },
        { id: 'BEN-0006', name: 'Pooja Devi, Tailoring', kitId: 'SC-AG-006', location: 'Patholi, Agra', joined: '2025-10-14', payment: 'duesoon', kitHealth: 'Fair', phone: '9090909090', plan: 'Home Light Kit, ₹250/month' },
    ],

    kits: [
        {
            id: 'SC-AG-001',
            ben: 'Ramesh Kumar',
            loc: 'Kamla Nagar',
            battery: 94,
            panel: '100W Mono Solar Panel',
            batteryType: '30Ah LiFePO4',
            led: '30W Philips LED',
            controller: 'MPPT',
            warranty: '5 Years',
            status: 'ok',
            issue: "—",
            lastRead: "27 Jun 2026"
        },

        {
            id: 'SC-AG-002',
            ben: 'Sanjay Kumar',
            loc: 'Dayalbagh',
            battery: 94,
            panel: '100W Mono Solar Panel',
            batteryType: '30Ah LiFePO4',
            led: '30W Philips LED',
            controller: 'MPPT',
            warranty: '5 Years',
            status: 'ok',
            issue: "—",
            lastRead: "27 Jun 2026"
        },

        {
            id: 'SC-AG-003',
            ben: 'Savitri Devi',
            loc: 'Sikandra',
            battery: 94,
            panel: '100W Mono Solar Panel',
            batteryType: '30Ah LiFePO4',
            led: '30W Philips LED',
            controller: 'MPPT',
            warranty: '5 Years',
            status: 'ok',
            issue: "—",
            lastRead: "27 Jun 2026"
        },

        {
            id: 'SC-AG-004',
            ben: 'Mohan Lal',
            loc: 'Bichpuri Road',
            battery: 94,
            panel: '100W Mono Solar Panel',
            batteryType: '30Ah LiFePO4',
            led: '30W Philips LED',
            controller: 'MPPT',
            warranty: '5 Years',
            status: 'ok',
            issue: "—",
            lastRead: "27 Jun 2026"
        },

        {
            id: 'SC-AG-005',
            ben: 'Rafiq Khan',
            loc: 'Patholi',
            battery: 94,
            panel: '100W Mono Solar Panel',
            batteryType: '30Ah LiFePO4',
            led: '30W Philips LED',
            controller: 'MPPT',
            warranty: '5 Years',
            status: 'ok',
            issue: "—",
            lastRead: "27 Jun 2026"
        },

        {
            id: 'SC-AG-006',
            ben: 'Pooja Devi',
            loc: 'Patholi',
            battery: 94,
            panel: '100W Mono Solar Panel',
            batteryType: '30Ah LiFePO4',
            led: '30W Philips LED',
            controller: 'MPPT',
            warranty: '5 Years',
            status: 'ok',
            issue: "—",
            lastRead: "27 Jun 2026"
        }
    ],

    payments: [
        { id: 'PAY-1041', ben: 'Sanjay Kumar, Tea Vendor', kitId: 'SC-AG-002', amount: 450, date: '2026-06-01', method: 'UPI', status: 'collected' },
        { id: 'PAY-1040', ben: 'Pooja Devi, Tailoring', kitId: 'SC-AG-006', amount: 250, date: '2026-06-01', method: 'Cash', status: 'collected' },
        { id: 'PAY-1039', ben: 'Rafiq Khan, Street Vendor', kitId: 'SC-AG-005', amount: 650, date: '2026-05-30', method: 'Bank', status: 'collected' },
        { id: 'PAY-1038', ben: 'Mohan Lal, Fruit Seller', kitId: 'SC-AG-004', amount: 450, date: '2026-05-28', method: 'UPI', status: 'collected' },
        { id: 'PAY-1037', ben: 'Savitri Devi, Home Business', kitId: 'SC-AG-003', amount: 250, date: '2026-05-25', method: 'UPI', status: 'pending' },
        { id: 'PAY-1036', ben: 'Ramesh Kumar, Juice Stall', kitId: 'SC-AG-001', amount: 120, date: '2026-05-20', method: '—', status: 'pending' },
    ],

    activities: [
        { icon: '👩', type: 'green', title: 'New Beneficiary Registered', desc: 'SC-AG-002 (Sanjay Kumar, Tea Vendor — Dayalbagh, Agra)', time: 'Today, 7:10 AM' },
        { icon: '⚡', type: 'gold', title: 'Critical Battery Alert', desc: 'SC-AG-001 (Ramesh Kumar, Juice Stall - Kamla Nagar, Agra) — 15%', time: 'Today, 8:45 AM' },
        { icon: '💳', type: 'blue', title: 'Payment Collected', desc: 'SC-AG-004 (Mohan Lal, Fruit Seller, Bichpuri Road) — ₹450 via UPI', time: 'Yesterday' },
        { icon: '🔧', type: 'red', title: 'Maintenance Scheduled', desc: 'SC-AG-003 (Savitri Devi, Home Business) — Sikandra, Agra', time: 'Yesterday' },
        { icon: '📊', type: 'green', title: 'Monthly Report Generated', desc: 'May 2026 Impact Report', time: 'Jun 20, 2026' },
        { icon: '💳', type: 'blue', title: 'Payment Collected', desc: 'SC-AG-006 (Pooja Devi, Tailoring - Patholi, Agra) — ₹250 via UPI', time: 'June 28, 2026' },
    ],

    nextBenId: 313,
    nextPayId: 1042,
    nextKitId: 149,
};

localStorage.setItem(
    "solarconnect",
    JSON.stringify(state)
);

state.notifications = []
state.notifications.unshift(
    "Payment received"
)

// ── HELPERS ────────────────────────────────────────────────
function pad(n, len = 3) { return String(n).padStart(len, '0'); }
// function today() {
//     return new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
// }
function toast(msg, type = 'success') {
    const el = document.getElementById('toast');
    el.textContent = (type === 'success' ? '✅ ' : type === 'error' ? '❌ ' : 'ℹ️ ') + msg;
    el.className = `toast show ${type}`;
    setTimeout(() => { el.classList.remove('show'); }, 3200);
}
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
function setActive(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    document.getElementById('page-' + page).classList.add('active');
    document.querySelector(`.nav-link[data-page="${page}"]`).classList.add('active');
}
const saved =
    localStorage.getItem("solarconnect");

if (saved) {
    Object.assign(state, JSON.parse(saved));
}


// ── NAV ────────────────────────────────────────────────────
document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.addEventListener('click', () => {
        setActive(link.dataset.page);
        renderCurrentPage(link.dataset.page);
    });
});

function renderCurrentPage(page) {

    switch (page) {

        case "dashboard":
            renderDashboard();
            break;

        case "beneficiaries":
            renderBenTable();
            break;

        case "kits":
            renderKitsTable();
            break;

        case "payments":
            renderPaymentsTable();
            break;

        case "reports":
            renderReports();
            break;
    }

}


// ── DASHBOARD ──────────────────────────────────────────────
function renderDashboard() {
    // Bar chart
    const energy = [620, 585, 710, 648, 692, 730, 682];
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const max = Math.max(...energy);
    const wrap = document.getElementById('bar-chart');
    wrap.innerHTML = energy.map((v, i) => `
    <div class="bar-col">
      <span class="bar-val">${v}</span>
      <div class="bar" style="height:${(v / max * 100)}%"></div>
      <span class="bar-label">${days[i]}</span>
    </div>`).join('');

    // Donut
    drawDonut('battery-donut', [
        { val: 110, color: '#2ECC71', label: 'Excellent — 18 kits (74%)' },
        { val: 27, color: '#F5A623', label: 'Good — 5 kits (18%)' },
        { val: 11, color: '#E74C3C', label: 'Need Service — 2 kits (8%)' },
    ], 25, 'Kits');


    // Activity
    renderActivity();


    // Payment progress
    renderPayProgress();
}




function drawDonut(canvasId, slices, center, label) {
    const svg = document.getElementById(canvasId);
    const total = slices.reduce((a, b) => a + b.val, 0);
    const r = 70, cx = 90, cy = 90, stroke = 22;
    let offset = -90; // start from top
    let paths = '';
    let legendHtml = '';
    slices.forEach(s => {
        const pct = s.val / total;
        const angle = pct * 360;
        const large = angle > 180 ? 1 : 0;
        const rad = (deg) => deg * Math.PI / 180;
        const x1 = cx + r * Math.cos(rad(offset));
        const y1 = cy + r * Math.sin(rad(offset));
        const x2 = cx + r * Math.cos(rad(offset + angle));
        const y2 = cy + r * Math.sin(rad(offset + angle));
        paths += `<path d="M${cx} ${cy} L${x1.toFixed(2)} ${y1.toFixed(2)} A${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z" fill="${s.color}" opacity=".9"/>`;
        // inner mask
        offset += angle;
        legendHtml += `<div class="legend-item"><span class="legend-dot" style="background:${s.color}"></span>${s.label}</div>`;
    });
    // Annular effect with white circle
    const inner = r - stroke;
    svg.innerHTML = `
    <div class="donut-wrap">
      <svg class="donut-svg" viewBox="0 0 180 180" width="140" height="140">
        ${paths}
        <circle cx="${cx}" cy="${cy}" r="${inner}" fill="white"/>
        <text x="${cx}" y="${cy - 8}" text-anchor="middle" font-family="Syne,sans-serif" font-size="20" font-weight="800" fill="#2C3E50">${center}</text>
        <text x="${cx}" y="${cy + 12}" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="#6B8075">${label}</text>
      </svg>
      <div class="donut-legend">${legendHtml}</div>
    </div>`;
}

function renderActivity() {
    const list = document.getElementById('activity-list');
    list.innerHTML = state.activities.map(a => `
    <div class="activity-item">
      <div class="act-icon ${a.type}">${a.icon}</div>
      <div class="act-text">
        <div class="act-title">${a.title}</div>
        <div class="act-desc">${a.desc}</div>
      </div>
      <div class="act-time">${a.time}</div>
    </div>`).join('');
}

function renderPayProgress() {
    const groups = [
        { label: 'Kamla Nagar', paid: 1, total: 1, cls: '' },
        { label: 'Dayalbagh', paid: 1, total: 1, cls: '' },
        { label: 'Sikandra', paid: 1, total: 1, cls: 'warn' },
        { label: 'Bichpuri Road', paid: 1, total: 1, cls: '' },
        { label: 'Patholi', paid: 2, total: 2, cls: '' },
    ];
    document.getElementById('pay-progress').innerHTML = groups.map(g => {
        const pct = Math.round(g.paid / g.total * 100);
        return `<div class="pay-prog-item">
      <div class="pay-prog-header"><span>${g.label}</span><span>${g.paid}/${g.total} kits</span></div>
      <div class="pay-prog-bar-bg"><div class="pay-prog-bar ${g.cls}" style="width:${pct}%"></div></div>
      <div class="pay-prog-sub"><span>${pct}% collected</span></div>
    </div>`;
    }).join('');
}

// ── BENEFICIARIES ──────────────────────────────────────────
function renderBenTable(filter = '', status = 'all') {
    const tbody = document.getElementById('ben-tbody');
    let rows = state.beneficiaries.filter(b => {
        const q = filter.toLowerCase();
        return (b.name.toLowerCase().includes(q) || b.id.toLowerCase().includes(q) || b.location.toLowerCase().includes(q));
    });
    if (status !== 'all') rows = rows.filter(b => b.payment === status);

    if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><div class="empty-icon">🔍</div>No beneficiaries found.</div></td></tr>`;
        return;
    }

    tbody.innerHTML = rows.map(b => {
        const pBadge = { uptodate: 'badge-green', duesoon: 'badge-yellow', overdue: 'badge-red' }[b.payment] || 'badge-gray';
        const pLabel = { uptodate: 'Up to date', duesoon: 'Due soon', overdue: 'Overdue' }[b.payment] || b.payment;
        const kBadge = { Good: 'badge-green', Fair: 'badge-yellow', Critical: 'badge-red' }[b.kitHealth] || 'badge-gray';
        return `<tr>
      <td><div class="ben-name">${b.name}</div><div class="ben-id">${b.id}</div></td>
      <td>${b.kitId}</td>
      <td>${b.location}</td>
      <td>${new Date(b.joined).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
      <td><span class="badge ${pBadge}">${pLabel}</span></td>
      <td><span class="badge ${kBadge}">${b.kitHealth}</span></td>
      <td>
        <div style="display:flex;gap:6px">
          <button class="btn btn-sm btn-secondary" onclick="viewBen('${b.id}')">View</button>
          <button class="btn btn-sm btn-danger" onclick="deleteBen('${b.id}')">Delete</button>
        </div>
      </td>
    </tr>`;
    }).join('');
    document.getElementById('ben-count').textContent = state.beneficiaries.length + ' registered beneficiaries';
}

function viewBen(id) {
    const b = state.beneficiaries.find(x => x.id === id);
    if (!b) return;
    document.getElementById('view-ben-name').textContent = b.name;
    document.getElementById('view-ben-details').innerHTML = `
    <div class="form-grid">
      <div class="form-group"><label>Beneficiary ID</label><input readonly value="${b.id}"></div>
      <div class="form-group"><label>Kit ID</label><input readonly value="${b.kitId}"></div>
      <div class="form-group"><label>Location</label><input readonly value="${b.location}"></div>
      <div class="form-group"><label>Phone</label><input readonly value="${b.phone}"></div>
      <div class="form-group"><label>Plan</label><input readonly value="${b.plan}"></div>
      <div class="form-group"><label>Payment Status</label><input readonly value="${b.payment}"></div>
      <div class="form-group"><label>Kit Health</label><input readonly value="${b.kitHealth}"></div>
       <div class="form-group"><label>Occupation</label><input readonly value="${b.occupation || 'Juice Stall Owner'}"></div>
      <div class="form-group"><label>Income</label><input readonly value="${b.income || '₹15,000/month'}"></div>
      <div class="form-group"><label>Aadhar</label><input readonly value="${b.aadhar || 'XXXX-XXXX-1234'}"></div>
      <div class="form-group"><label>Kit Type</label><input readonly value="${b.kittype || 'Solar Lantern'}"></div>
      <div class="form-group"><label>Total Payments</label><input readonly value="${b.totalpayments || '₹2,640'}"></div>
      <div class="form-group"><label>Energy Generated</label><input readonly value="${b.energygenerated || '420 kWh'}"></div>
    </div>
      <div class="form-group"><label>Joined</label><input readonly value="${b.joined}"></div>
    </div>`;
    openModal('modal-view-ben');
}

function deleteBen(id) {
    if (!confirm('Remove this beneficiary?')) return;
    state.beneficiaries = state.beneficiaries.filter(b => b.id !== id);
    renderBenTable();
    toast('Beneficiary removed.', 'error');
}

// Search / filter
document.getElementById('ben-search')?.addEventListener('input', e => {
    renderBenTable(e.target.value, document.getElementById('ben-status').value);
});
document.getElementById('ben-status')?.addEventListener('change', e => {
    renderBenTable(document.getElementById('ben-search').value, e.target.value);
});

// Register form
document.getElementById('register-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    const name = f.rName.value.trim();
    const loc = f.rLocation.value.trim();
    const phone = f.rPhone.value.trim();
    const plan = f.rPlan.value;
    const occupation = f.occupation.value;
    const aadhar = f.aadhar.value;
    const income = f.income.value;
    const kittype = f.kittype.value;

    if (!name || !loc || !phone) { toast('Please fill all required fields.', 'error'); return; }

    const newId = 'BEN-' + pad(state.nextBenId++, 4);
    const kitId = 'SC-' + pad(state.nextKitId++, 4);

    state.activities.unshift({
        icon: '👤', type: 'green',
        title: 'New Beneficiary Registered',
        desc: `${name} — ${loc}`,
        time: 'Just now'
    });

    state.beneficiaries.unshift({
        id: newId,
        name,
        location: loc + ", UP",
        kitId,
        joined: new Date().toISOString().slice(0, 10),
        payment: "uptodate",
        kitHealth: "Good",
        phone,
        plan,
        occupation,
        aadhar,
        income,
        kittype
    });
    localStorage.setItem(
        "solarconnect",
        JSON.stringify(state)
    );

    f.reset();
    closeModal('modal-register');
    renderBenTable();
    toast(`${name} registered successfully!`);
});

// ── SOLAR KITS ─────────────────────────────────────────────
function renderKitsTable(filter = '', statusFilter = 'all') {
    const tbody = document.getElementById('kits-tbody');
    let rows = state.kits.filter(k => {
        const q = filter.toLowerCase();
        return k.id.toLowerCase().includes(q) || k.ben.toLowerCase().includes(q) || k.loc.toLowerCase().includes(q);
    });
    if (statusFilter !== 'all') rows = rows.filter(k => k.status === statusFilter);

    tbody.innerHTML = rows.map(k => {
        const battCls = k.battery < 20 ? 'badge-red' : k.battery < 40 ? 'badge-orange' : 'badge-green';
        const statMap = { critical: 'badge-red Critical', warn: 'badge-orange Warning', info: 'badge-blue Info', ok: 'badge-green Good' };
        const [statCls, statLbl] = (statMap[k.status] || 'badge-gray Good').split(' ');
        const issueBadge = k.issue !== '—' ? `<span class="badge badge-red">${k.issue}</span>` : `<span class="badge badge-green">OK</span>`;
        const actionBtn = k.status === 'ok' ? `<button class="btn btn-sm btn-secondary">Details</button>`
            : `<button class="btn btn-sm btn-gold" onclick="scheduleKit('${k.id}')">Schedule</button>`;
        return `<tr>
      <td><b>${k.id}</b></td>
      <td>${k.ben}</td>
      <td>${k.loc}</td>
      <td><span class="badge ${battCls}">${k.battery}%</span></td>
      <td>${k.lastRead}</td>
      <td>${issueBadge}</td>
      <td>${actionBtn}</td>
    </tr>`;
    }).join('');
}

function scheduleKit(id) {
    const k = state.kits.find(x => x.id === id);
    if (!k) return;
    k.status = 'info'; k.issue = 'Maintenance Scheduled';
    state.activities.unshift({ icon: '🔧', type: 'red', title: 'Maintenance Scheduled', desc: `${k.id} — ${k.ben}`, time: 'Just now' });
    renderKitsTable();
    toast(`Maintenance scheduled for ${k.id}`);
}

document.getElementById('kits-search')?.addEventListener('input', e =>
    renderKitsTable(e.target.value, document.getElementById('kits-status-filter').value));
document.getElementById('kits-status-filter')?.addEventListener('change', e =>
    renderKitsTable(document.getElementById('kits-search').value, e.target.value));

// ── PAYMENTS ───────────────────────────────────────────────
function renderPaymentsTable(filter = '', statusFilter = 'all') {
    const tbody = document.getElementById('pay-tbody');
    let rows = state.payments.filter(p => {
        const q = filter.toLowerCase();
        return p.ben.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.kitId.toLowerCase().includes(q);
    });
    if (statusFilter !== 'all') rows = rows.filter(p => p.status === statusFilter);

    const total = state.payments.filter(p => p.status === 'collected').reduce((a, b) => a + b.amount, 0);
    document.getElementById('pay-total').textContent = '₹' + total.toLocaleString('en-IN');

    if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><div class="empty-icon">💳</div>No records found.</div></td></tr>`;
        return;
    }

    tbody.innerHTML = rows.map(p => {
        const cls = { collected: 'badge-green', pending: 'badge-yellow', overdue: 'badge-red' }[p.status] || 'badge-gray';
        const lbl = { collected: 'Collected', pending: 'Pending', overdue: 'Overdue' }[p.status] || p.status;
        return `<tr>
      <td><b>${p.id}</b></td>
      <td>${p.ben}</td>
      <td>${p.kitId}</td>
      <td>₹${p.amount}</td>
      <td>${new Date(p.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
      <td>${p.method}</td>
      <td><span class="badge ${cls}">${lbl}</span></td>
    </tr>`;
    }).join('');
}

document.getElementById('pay-search')?.addEventListener('input', e =>
    renderPaymentsTable(e.target.value, document.getElementById('pay-status-filter').value));
document.getElementById('pay-status-filter')?.addEventListener('change', e =>
    renderPaymentsTable(document.getElementById('pay-search').value, e.target.value));

// Record payment form
document.getElementById('pay-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    const ben = f.pBen.value;
    const amount = parseInt(f.pAmount.value);
    const method = f.pMethod.value;
    const date = f.pDate.value || new Date().toISOString().slice(0, 10);

    const b = state.beneficiaries.find(x => x.name === ben);
    if (!b) { toast('Beneficiary not found.', 'error'); return; }
    if (!amount || amount <= 0) { toast('Enter a valid amount.', 'error'); return; }

    const newId = 'PAY-' + state.nextPayId++;
    state.payments.unshift({
        id: newId,
        ben,
        kitId: b.kitId,
        amount,
        date,
        method,
        status: "collected"
    });
    localStorage.setItem(
        "solarconnect",
        JSON.stringify(state)
    );
    b.payment = 'uptodate';
    state.activities.unshift({ icon: '💳', type: 'blue', title: 'Payment Collected', desc: `${ben} — ₹${amount} via ${method}`, time: 'Just now' });
    f.reset();
    closeModal('modal-pay');
    renderPaymentsTable();
    toast(`Payment of ₹${amount} recorded for ${ben}`);
});

// Populate beneficiary dropdown in payment modal
function populatePayBenDropdown() {
    const sel = document.getElementById('pBen');
    sel.innerHTML = '<option value="">Select beneficiary…</option>' +
        state.beneficiaries.map(b => `<option>${b.name}</option>`).join('');
}

// ── REPORTS ────────────────────────────────────────────────
function renderReports() {
    // Line chart for growth
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const bens = [260, 270, 282, 295, 305, 312];
    const energy = [3800, 4050, 4200, 4400, 4600, 4820];
    const maxE = Math.max(...energy);
    const element = document.getElementById("page-reports");

    html2pdf().from(element).save("SolarConnect_Report.pdf");

    const chartEl = document.getElementById('growth-chart');
    chartEl.innerHTML = '';
    const w = 600, h = 180, pad = 40;
    const pts = energy.map((v, i) => {
        const x = pad + (i / (months.length - 1)) * (w - pad * 2);
        const y = h - pad - ((v / maxE) * (h - pad * 2));
        return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    const ptsFill = `${pad},${h - pad} ` + pts + ` ${w - pad},${h - pad}`;

    chartEl.innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" style="width:100%;height:180px">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2ECC71" stop-opacity=".35"/>
          <stop offset="100%" stop-color="#2ECC71" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <polygon points="${ptsFill}" fill="url(#lg)"/>
      <polyline points="${pts}" fill="none" stroke="#1A6B3A" stroke-width="2.5" stroke-linejoin="round"/>
      ${energy.map((v, i) => {
        const x = pad + (i / (months.length - 1)) * (w - pad * 2);
        const y = h - pad - ((v / maxE) * (h - pad * 2));
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="#1A6B3A"/>
                <text x="${x.toFixed(1)}" y="${(y - 10).toFixed(1)}" text-anchor="middle" font-size="9" fill="#6B8075">${v}</text>
                <text x="${x.toFixed(1)}" y="${h - 8}" text-anchor="middle" font-size="9" fill="#6B8075">${months[i]}</text>`;
    }).join('')}
    </svg>`;
    function downloadReport() {

        const element = document.getElementById("page-reports");

        html2pdf()

            .set({

                margin: 0.5,

                filename: "SolarConnect_Report.pdf",

                image: { type: "jpeg", quality: 1 },

                html2canvas: { scale: 2 },

                jsPDF: { unit: "in", format: "a4", orientation: "portrait" }

            })

            .from(element)

            .save();

    }
    function downloadReport() {

        alert("Sample SolarConnect Impact Report downloaded successfully.");

    }
    // District table
    const districts = [
        { name: 'Kamla Nagar', kits: 52, bens: 48, energy: '1820 kWh', collection: '₹24,500', rate: '91%' },
        { name: 'Dayal Bagh', kits: 31, bens: 29, energy: '1085 kWh', collection: '₹14,700', rate: '88%' },
        { name: 'Sikandra', kits: 27, bens: 25, energy: '945 kWh', collection: '₹11,200', rate: '79%' },
        { name: 'Bichpuri Road', kits: 22, bens: 20, energy: '770 kWh', collection: '₹9,800', rate: '94%' },
        { name: 'Patholi', kits: 16, bens: 15, energy: '560 kWh', collection: '₹7,500', rate: '97%' },
    ];
    document.getElementById('district-tbody').innerHTML = districts.map(d => `
    <tr>
      <td>${d.name}</td>
      <td>${d.kits}</td>
      <td>${d.bens}</td>
      <td>${d.energy}</td>
      <td>${d.collection}</td>
      <td><span class="badge badge-green">${d.rate}</span></td>
    </tr>`).join('');
}
renderPieChart();
function renderRevenueChart() {

    const revenue = [
        5000,
        8200,
        7400,
        9100,
        11500,
        13600
    ];

    // your existing chart code

}

// Download report (CSV mock)
document.getElementById('download-report')?.addEventListener('click', () => {
    const csv = ['District,Kits,Beneficiaries,Energy,Collection,Rate',
        'Kamla Nagar,52,48,1820 kWh,₹24500,91%',
        'Sikandrar,31,29,1085 kWh,₹14700,88%',
        'Dayalbagh,27,25,945 kWh,₹11200,79%',
        'Bichpuri Road,22,20,770 kWh,₹9800,94%',
        'Patholi,16,15,560 kWh,₹7500,97%'].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'SolarConnect_Report_June2026.csv';
    a.click();
    toast('Report downloaded!');
});

// ── MODALS ─────────────────────────────────────────────────
// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(o => {
    o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); });
});

document.getElementById('btn-register')?.addEventListener('click', () => openModal('modal-register'));
document.getElementById('btn-pay')?.addEventListener('click', () => {
    populatePayBenDropdown();
    openModal('modal-pay');
});
document.getElementById('btn-pay-dash')?.addEventListener('click', () => {
    setActive('payments'); renderCurrentPage('payments');
    setTimeout(() => { populatePayBenDropdown(); openModal('modal-pay'); }, 100);
});
function toggleNotifications() {

    alert(
        `Notifications

• 2 Pending Payments

• 1 Battery Alert

• 1 New Beneficiary`
    );

}

// ── INIT ───────────────────────────────────────────────────
(function init() {
    renderDashboard();
    renderBenTable();
    renderKitsTable();
    renderPaymentsTable();
    renderReports();
    renderRevenueChart();
})();