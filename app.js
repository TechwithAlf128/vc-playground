// Sample Data
const sampleInvestments = [
    {
        id: 1,
        company: "TechAI Solutions",
        sector: "AI/ML",
        stage: "Series A",
        amountInvested: 500000,
        currentValuation: 1200000,
        notes: "Strong team, great traction"
    },
    {
        id: 2,
        company: "FinFlow",
        sector: "Fintech",
        stage: "Seed",
        amountInvested: 250000,
        currentValuation: 280000,
        notes: "Early stage but promising market"
    },
    {
        id: 3,
        company: "BioGenX",
        sector: "Biotech",
        stage: "Series B",
        amountInvested: 2000000,
        currentValuation: 3500000,
        notes: "FDA approval expected Q4"
    },
    {
        id: 4,
        company: "CloudSync",
        sector: "SaaS",
        stage: "Series C",
        amountInvested: 3000000,
        currentValuation: 8000000,
        notes: "Enterprise clients, 200% ARR growth"
    },
    {
        id: 5,
        company: "GreenEnergy Ltd",
        sector: "CleanTech",
        stage: "Growth",
        amountInvested: 1500000,
        currentValuation: 2200000,
        notes: "Strong sustainability focus"
    },
    {
        id: 6,
        company: "SecureVault",
        sector: "Cybersecurity",
        stage: "Series A",
        amountInvested: 800000,
        currentValuation: 950000,
        notes: "Enterprise security solutions"
    }
];

let investments = [];
let editingId = null;
let chartInstances = { sector: null, stage: null };

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadInvestments();
    setupEventListeners();
    updateMetrics();
    updateCharts();
    populateSectorFilter();
});

// Load investments from localStorage or use sample data
function loadInvestments() {
    const stored = localStorage.getItem('vcInvestments');
    investments = stored ? JSON.parse(stored) : sampleInvestments;
    renderTable();
}

// Save to localStorage
function saveInvestments() {
    localStorage.setItem('vcInvestments', JSON.stringify(investments));
}

// Setup Event Listeners
function setupEventListeners() {
    const modal = document.getElementById('modal');
    const addBtn = document.getElementById('addBtn');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('investmentForm');
    const cancelBtn = document.getElementById('cancelBtn');
    const deleteBtn = document.getElementById('deleteBtn');
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');
    const importFile = document.getElementById('importFile');
    const themeBtn = document.getElementById('themeBtn');

    addBtn.addEventListener('click', () => openModal());
    closeBtn.addEventListener('click', () => closeModal());
    form.addEventListener('submit', handleFormSubmit);
    cancelBtn.addEventListener('click', () => closeModal());
    deleteBtn.addEventListener('click', handleDelete);
    exportBtn.addEventListener('click', exportData);
    importBtn.addEventListener('click', () => importFile.click());
    importFile.addEventListener('change', handleImport);
    themeBtn.addEventListener('click', toggleTheme);

    document.getElementById('sectorFilter').addEventListener('change', filterAndRender);
    document.getElementById('stageFilter').addEventListener('change', filterAndRender);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Modal Functions
function openModal(investmentId = null) {
    const modal = document.getElementById('modal');
    const form = document.getElementById('investmentForm');
    const modalTitle = document.getElementById('modalTitle');
    const deleteBtn = document.getElementById('deleteBtn');

    form.reset();
    editingId = null;

    if (investmentId) {
        const investment = investments.find(i => i.id === investmentId);
        if (investment) {
            modalTitle.textContent = 'Edit Investment';
            document.getElementById('companyName').value = investment.company;
            document.getElementById('sector').value = investment.sector;
            document.getElementById('stage').value = investment.stage;
            document.getElementById('amountInvested').value = investment.amountInvested;
            document.getElementById('currentValuation').value = investment.currentValuation;
            document.getElementById('investmentNotes').value = investment.notes;
            deleteBtn.style.display = 'inline-block';
            editingId = investmentId;
        }
    } else {
        modalTitle.textContent = 'Add Investment';
        deleteBtn.style.display = 'none';
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    editingId = null;
}

// Form Submit
function handleFormSubmit(e) {
    e.preventDefault();

    const investment = {
        id: editingId || Date.now(),
        company: document.getElementById('companyName').value,
        sector: document.getElementById('sector').value,
        stage: document.getElementById('stage').value,
        amountInvested: parseFloat(document.getElementById('amountInvested').value),
        currentValuation: parseFloat(document.getElementById('currentValuation').value),
        notes: document.getElementById('investmentNotes').value
    };

    if (editingId) {
        const index = investments.findIndex(i => i.id === editingId);
        investments[index] = investment;
    } else {
        investments.push(investment);
    }

    saveInvestments();
    renderTable();
    updateMetrics();
    updateCharts();
    populateSectorFilter();
    closeModal();
}

// Delete Investment
function handleDelete() {
    if (confirm('Are you sure you want to delete this investment?')) {
        investments = investments.filter(i => i.id !== editingId);
        saveInvestments();
        renderTable();
        updateMetrics();
        updateCharts();
        closeModal();
    }
}

// Render Table
function renderTable() {
    const tbody = document.getElementById('investmentsBody');
    tbody.innerHTML = '';

    const filtered = getFilteredInvestments();

    filtered.forEach(inv => {
        const roi = ((inv.currentValuation - inv.amountInvested) / inv.amountInvested * 100).toFixed(2);
        const moic = (inv.currentValuation / inv.amountInvested).toFixed(2);
        const roiClass = roi >= 0 ? 'roi-positive' : 'roi-negative';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${inv.company}</strong></td>
            <td>${inv.sector}</td>
            <td><span class="badge">${inv.stage}</span></td>
            <td>$${(inv.amountInvested / 1000).toFixed(0)}K</td>
            <td>$${(inv.currentValuation / 1000).toFixed(0)}K</td>
            <td><span class="${roiClass}">${roi}%</span></td>
            <td>${moic}x</td>
            <td title="${inv.notes}">${inv.notes.substring(0, 20)}...</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn" onclick="openModal(${inv.id})">Edit</button>
                    <button class="action-btn delete" onclick="deleteInvestment(${inv.id})">Delete</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function deleteInvestment(id) {
    if (confirm('Delete this investment?')) {
        investments = investments.filter(i => i.id !== id);
        saveInvestments();
        renderTable();
        updateMetrics();
        updateCharts();
    }
}

// Filter & Render
function getFilteredInvestments() {
    const sectorFilter = document.getElementById('sectorFilter').value;
    const stageFilter = document.getElementById('stageFilter').value;

    return investments.filter(inv => {
        return (sectorFilter === '' || inv.sector === sectorFilter) &&
               (stageFilter === '' || inv.stage === stageFilter);
    });
}

function filterAndRender() {
    renderTable();
    updateCharts();
}

// Update Metrics
function updateMetrics() {
    const totalInvested = investments.reduce((sum, i) => sum + i.amountInvested, 0);
    const portfolioValue = investments.reduce((sum, i) => sum + i.currentValuation, 0);
    const avgROI = investments.length > 0 
        ? (((portfolioValue - totalInvested) / totalInvested * 100) || 0).toFixed(2)
        : 0;

    document.getElementById('totalInvested').textContent = `$${(totalInvested / 1000000).toFixed(1)}M`;
    document.getElementById('dealCount').textContent = investments.length;
    document.getElementById('portfolioValue').textContent = `$${(portfolioValue / 1000000).toFixed(1)}M`;
    document.getElementById('avgROI').textContent = `${avgROI}%`;
}

// Update Charts
function updateCharts() {
    const filtered = getFilteredInvestments();

    // Sector Chart
    const sectorData = {};
    filtered.forEach(inv => {
        sectorData[inv.sector] = (sectorData[inv.sector] || 0) + inv.amountInvested;
    });

    const sectorCtx = document.getElementById('sectorChart').getContext('2d');
    if (chartInstances.sector) chartInstances.sector.destroy();
    chartInstances.sector = new Chart(sectorCtx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(sectorData),
            datasets: [{
                data: Object.values(sectorData),
                backgroundColor: [
                    '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // Stage Chart
    const stageData = {};
    filtered.forEach(inv => {
        stageData[inv.stage] = (stageData[inv.stage] || 0) + 1;
    });

    const stageCtx = document.getElementById('stageChart').getContext('2d');
    if (chartInstances.stage) chartInstances.stage.destroy();
    chartInstances.stage = new Chart(stageCtx, {
        type: 'bar',
        data: {
            labels: Object.keys(stageData),
            datasets: [{
                label: 'Number of Investments',
                data: Object.values(stageData),
                backgroundColor: '#6366f1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: 'y',
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// Populate Sector Filter
function populateSectorFilter() {
    const sectors = [...new Set(investments.map(i => i.sector))];
    const select = document.getElementById('sectorFilter');
    const currentValue = select.value;

    const options = document.querySelectorAll('#sectorFilter option');
    options.forEach(opt => {
        if (opt.value !== '') opt.remove();
    });

    sectors.forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector;
        select.appendChild(option);
    });

    select.value = currentValue;
}

// Export Data
function exportData() {
    const dataStr = JSON.stringify(investments, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `vc-investments-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// Import Data
function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            if (Array.isArray(data)) {
                if (confirm('Replace all investments with imported data?')) {
                    investments = data;
                    saveInvestments();
                    renderTable();
                    updateMetrics();
                    updateCharts();
                    populateSectorFilter();
                }
            }
        } catch (error) {
            alert('Error importing file: ' + error.message);
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('vcTheme', isDark ? 'dark' : 'light');
    updateThemeButton();
}

function updateThemeButton() {
    const btn = document.getElementById('themeBtn');
    const isDark = document.body.classList.contains('dark-mode');
    btn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Load theme preference
const savedTheme = localStorage.getItem('vcTheme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeButton();
}
