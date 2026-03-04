// VC Decision Tool - Comprehensive Assessment Engine

const ASSESSMENT_QUESTIONS = {
    team: [
        {
            category: "Team Quality & Execution",
            questions: [
                {
                    text: "What is the founders' relevant industry experience?",
                    answers: [
                        { text: "First-time founders, no relevant experience", score: 2 },
                        { text: "Some experience (1-2 years) at startups or relevant industry", score: 4 },
                        { text: "Solid experience (3-5 years) in the industry", score: 6 },
                        { text: "Deep expertise (5+ years), previous founders or executives", score: 8 }
                    ]
                },
                {
                    text: "How complementary is the founding team?",
                    answers: [
                        { text: "Homogeneous team (same background, skills)", score: 2 },
                        { text: "Somewhat diverse (2-3 different areas)", score: 5 },
                        { text: "Well-balanced (technical, business, go-to-market)", score: 7 },
                        { text: "Exceptional diversity with proven collaboration track record", score: 9 }
                    ]
                },
                {
                    text: "What is the depth of the founding team?",
                    answers: [
                        { text: "Solo founder or very thin team", score: 2 },
                        { text: "Founding team of 2 people", score: 5 },
                        { text: "Founding team of 3+ with supporting early employees", score: 7 },
                        { text: "Strong core team plus experienced early hires", score: 9 }
                    ]
                },
                {
                    text: "How hungry and committed does the team appear?",
                    answers: [
                        { text: "Uncertain commitment, multiple side projects", score: 2 },
                        { text: "Moderately committed, willing to pivot", score: 5 },
                        { text: "Fully committed, but open to feedback", score: 7 },
                        { text: "Obsessed with the problem, clear mission", score: 9 }
                    ]
                }
            ]
        }
    ],
    market: [
        {
            category: "Market Opportunity",
            questions: [
                {
                    text: "What is the addressable market (TAM) size?",
                    answers: [
                        { text: "Niche market (<$100M TAM)", score: 2 },
                        { text: "Modest market ($100M-$1B TAM)", score: 5 },
                        { text: "Large market ($1B-$10B TAM)", score: 7 },
                        { text: "Massive market (>$10B TAM)", score: 9 }
                    ]
                },
                {
                    text: "What is the market growth rate?",
                    answers: [
                        { text: "Declining or flat market", score: 1 },
                        { text: "Slow growth (<10% annually)", score: 4 },
                        { text: "Healthy growth (10-30% annually)", score: 7 },
                        { text: "Explosive growth (>30% annually)", score: 9 }
                    ]
                },
                {
                    text: "How defensible is their market position vs. competitors?",
                    answers: [
                        { text: "Crowded market with strong incumbents", score: 2 },
                        { text: "Moderate competition, limited differentiation", score: 5 },
                        { text: "Clear differentiation, some competitive moats", score: 7 },
                        { text: "Strong moats (tech, network, brand), first-mover advantage", score: 9 }
                    ]
                },
                {
                    text: "What is the customer acquisition strategy?",
                    answers: [
                        { text: "No clear strategy or untested approach", score: 2 },
                        { text: "Broad strategy but early validation", score: 5 },
                        { text: "Proven channels with reasonable CAC", score: 7 },
                        { text: "Multiple proven channels, low CAC, viral coefficient", score: 9 }
                    ]
                }
            ]
        }
    ],
    product: [
        {
            category: "Product & Traction",
            questions: [
                {
                    text: "What is the current product stage?",
                    answers: [
                        { text: "Idea/pitch deck only", score: 2 },
                        { text: "MVP or beta with early users", score: 5 },
                        { text: "Product-market fit signals, paying customers", score: 7 },
                        { text: "Strong product-market fit, scaling smoothly", score: 9 }
                    ]
                },
                {
                    text: "How strong is user/customer traction?",
                    answers: [
                        { text: "<100 users or no paying customers", score: 2 },
                        { text: "100-1K users or minimal revenue (<$10K MRR)", score: 5 },
                        { text: "1K-10K users with meaningful revenue ($10K-$100K MRR)", score: 7 },
                        { text: "10K+ users with strong revenue growth (>$100K MRR)", score: 9 }
                    ]
                },
                {
                    text: "What is the product roadmap clarity?",
                    answers: [
                        { text: "Unclear or constantly changing roadmap", score: 2 },
                        { text: "Basic roadmap but execution uncertain", score: 5 },
                        { text: "Clear roadmap with proven execution", score: 7 },
                        { text: "Detailed roadmap with ambitious but achievable milestones", score: 9 }
                    ]
                },
                {
                    text: "How strong is the product differentiation?",
                    answers: [
                        { text: "Me-too product, no clear differentiation", score: 2 },
                        { text: "Incremental improvement over existing solutions", score: 5 },
                        { text: "Unique approach with clear advantages", score: 7 },
                        { text: "Breakthrough innovation with significant advantages", score: 9 }
                    ]
                }
            ]
        }
    ],
    business: [
        {
            category: "Business Model & Economics",
            questions: [
                {
                    text: "How clear is the revenue model?",
                    answers: [
                        { text: "No clear revenue model", score: 1 },
                        { text: "Revenue model defined but unvalidated", score: 5 },
                        { text: "Revenue model working with some customers", score: 7 },
                        { text: "Proven revenue model with predictable growth", score: 9 }
                    ]
                },
                {
                    text: "What is the unit economics potential?",
                    answers: [
                        { text: "Poor unit economics, unclear path to profitability", score: 2 },
                        { text: "Improving unit economics with optimization path", score: 5 },
                        { text: "Good unit economics (3:1 LTV:CAC)", score: 7 },
                        { text: "Excellent unit economics (5:1+ LTV:CAC) with scale potential", score: 9 }
                    ]
                },
                {
                    text: "What is the pathway to profitability?",
                    answers: [
                        { text: "No clear path to profitability", score: 2 },
                        { text: "Theoretical path but requires significant optimization", score: 5 },
                        { text: "Clear path with reasonable timeline (2-3 years)", score: 7 },
                        { text: "Strong path with achievable milestones", score: 9 }
                    ]
                },
                {
                    text: "How scalable is the business model?",
                    answers: [
                        { text: "Limited by nature (services, local)", score: 2 },
                        { text: "Scalable with significant effort/capital", score: 5 },
                        { text: "Highly scalable (software, platform)", score: 7 },
                        { text: "Extremely scalable with network effects", score: 9 }
                    ]
                }
            ]
        }
    ],
    risk: [
        {
            category: "Risk Management",
            questions: [
                {
                    text: "What are the key execution risks?",
                    answers: [
                        { text: "Multiple critical risks, no clear mitigation", score: 1 },
                        { text: "Significant risks with some mitigation plans", score: 4 },
                        { text: "Manageable risks with solid mitigation strategies", score: 7 },
                        { text: "Risks identified with detailed contingency plans", score: 9 }
                    ]
                },
                {
                    text: "What is the regulatory/legal risk?",
                    answers: [
                        { text: "High regulatory hurdles or legal uncertainty", score: 2 },
                        { text: "Some regulatory considerations, manageable", score: 6 },
                        { text: "Light regulation or favorable regulatory landscape", score: 8 },
                        { text: "Clear regulatory path with no major concerns", score: 9 }
                    ]
                },
                {
                    text: "What is the dependency risk (key people, customers, suppliers)?",
                    answers: [
                        { text: "Critical dependencies with high flight risk", score: 2 },
                        { text: "Some key person dependencies", score: 5 },
                        { text: "Distributed dependencies with some mitigation", score: 7 },
                        { text: "Minimal key person risk, diverse customer base", score: 9 }
                    ]
                },
                {
                    text: "What is the competitive response risk?",
                    answers: [
                        { text: "Strong incumbents can easily replicate", score: 2 },
                        { text: "Some competitive threats, but company has advantages", score: 5 },
                        { text: "Competitive response would be difficult/costly", score: 7 },
                        { text: "Significant barriers to competitive entry", score: 9 }
                    ]
                }
            ]
        }
    ],
    terms: [
        {
            category: "Terms & Valuation",
            questions: [
                {
                    text: "How reasonable is the valuation for the stage?",
                    answers: [
                        { text: "Significantly overvalued compared to peers/stage", score: 2 },
                        { text: "Slightly above market, but justified by some factors", score: 5 },
                        { text: "Market rate for stage and progress", score: 7 },
                        { text: "Below market, significant upside potential", score: 9 }
                    ]
                },
                {
                    text: "What is the use of proceeds clarity?",
                    answers: [
                        { text: "Unclear or unrealistic spending plan", score: 2 },
                        { text: "Basic plan but lacking detail", score: 5 },
                        { text: "Clear plan with realistic milestones", score: 7 },
                        { text: "Detailed plan tied to specific outcomes", score: 9 }
                    ]
                },
                {
                    text: "How reasonable are the proposed terms?",
                    answers: [
                        { text: "Heavily favorable to founders, difficult terms", score: 2 },
                        { text: "Mostly standard terms with some concerns", score: 5 },
                        { text: "Fair terms, investor-friendly", score: 7 },
                        { text: "Excellent terms, founder-friendly yet attractive", score: 9 }
                    ]
                },
                {
                    text: "What is the dilution trajectory for future rounds?",
                    answers: [
                        { text: "Founders will face massive future dilution", score: 2 },
                        { text: "Significant future dilution likely", score: 5 },
                        { text: "Reasonable dilution path", score: 7 },
                        { text: "Clear path to ownership with manageable dilution", score: 9 }
                    ]
                }
            ]
        }
    ]
};

// State Management
let currentState = {
    screen: 'start',
    pitch: {},
    weights: {
        team: 25,
        market: 25,
        product: 20,
        business: 15,
        risk: 10,
        terms: 5
    },
    answers: {},
    currentQuestionIndex: 0,
    categoryIndex: 0,
    scores: {},
    results: null
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadTheme();
});

// Event Listeners
function setupEventListeners() {
    document.getElementById('startBtn').addEventListener('click', goToPitch);
    document.getElementById('pitchForm').addEventListener('submit', (e) => {
        e.preventDefault();
        savePitch();
    });
    
    // Weight sliders
    ['teamWeight', 'marketWeight', 'productWeight', 'businessWeight', 'riskWeight', 'termsWeight'].forEach(id => {
        document.getElementById(id).addEventListener('change', updateWeights);
    });

    document.getElementById('themeBtn').addEventListener('click', toggleTheme);
}

// Screen Navigation
function goToStart() {
    currentState.screen = 'start';
    showScreen('startScreen');
}

function goToPitch() {
    currentState.screen = 'pitch';
    showScreen('pitchScreen');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function savePitch() {
    currentState.pitch = {
        company: document.getElementById('companyName').value,
        sector: document.getElementById('sector').value,
        stage: document.getElementById('stage').value,
        ask: parseFloat(document.getElementById('askAmount').value),
        description: document.getElementById('pitchDescription').value
    };
    currentState.screen = 'weights';
    showScreen('weightsScreen');
}

function goBack() {
    if (currentState.screen === 'weights') {
        goToPitch();
    } else if (currentState.screen === 'assessment') {
        currentState.screen = 'weights';
        showScreen('weightsScreen');
    }
}

// Weights Management
function updateWeights() {
    const team = parseFloat(document.getElementById('teamWeight').value);
    const market = parseFloat(document.getElementById('marketWeight').value);
    const product = parseFloat(document.getElementById('productWeight').value);
    const business = parseFloat(document.getElementById('businessWeight').value);
    const risk = parseFloat(document.getElementById('riskWeight').value);
    const terms = parseFloat(document.getElementById('termsWeight').value);

    currentState.weights = { team, market, product, business, risk, terms };

    document.getElementById('teamValue').textContent = team + '%';
    document.getElementById('marketValue').textContent = market + '%';
    document.getElementById('productValue').textContent = product + '%';
    document.getElementById('businessValue').textContent = business + '%';
    document.getElementById('riskValue').textContent = risk + '%';
    document.getElementById('termsValue').textContent = terms + '%';

    const total = team + market + product + business + risk + terms;
    document.getElementById('totalWeight').textContent = total + '%';
}

function startAssessment() {
    currentState.screen = 'assessment';
    currentState.answers = {
        team: [],
        market: [],
        product: [],
        business: [],
        risk: [],
        terms: []
    };
    currentState.currentQuestionIndex = 0;
    currentState.categoryIndex = 0;
    loadQuestion();
    showScreen('assessmentScreen');
}

// Assessment Logic
function loadQuestion() {
    const categories = ['team', 'market', 'product', 'business', 'risk', 'terms'];
    const currentCategory = categories[currentState.categoryIndex];
    const questions = ASSESSMENT_QUESTIONS[currentCategory][0].questions;
    const question = questions[currentState.currentQuestionIndex];

    document.getElementById('categoryTitle').textContent = ASSESSMENT_QUESTIONS[currentCategory][0].category;
    document.getElementById('questionText').textContent = question.text;

    const totalQuestions = Object.values(ASSESSMENT_QUESTIONS).reduce((sum, cat) => sum + cat[0].questions.length, 0);
    const currentQuestion = currentState.categoryIndex * 4 + currentState.currentQuestionIndex + 1;
    document.getElementById('questionCounter').textContent = `Question ${currentQuestion} of ${totalQuestions}`;

    const progress = (currentQuestion / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    renderAnswers(question.answers, currentCategory);

    // Update button states
    document.getElementById('prevBtn').style.display = currentQuestion > 1 ? 'inline-block' : 'none';
    document.getElementById('nextBtn').disabled = !currentState.answers[currentCategory][currentState.currentQuestionIndex];
}

function renderAnswers(answers, category) {
    const container = document.getElementById('answersContainer');
    container.innerHTML = '';

    answers.forEach((answer, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        
        if (currentState.answers[category][currentState.currentQuestionIndex] === idx) {
            btn.classList.add('selected');
        }

        btn.addEventListener('click', () => {
            selectAnswer(category, currentState.currentQuestionIndex, idx, answer.score);
        });

        container.appendChild(btn);
    });
}

function selectAnswer(category, questionIdx, answerIdx, score) {
    if (!currentState.answers[category]) {
        currentState.answers[category] = [];
    }
    currentState.answers[category][questionIdx] = answerIdx;
    
    // Store score
    if (!currentState.scores[category]) {
        currentState.scores[category] = [];
    }
    currentState.scores[category][questionIdx] = score;

    loadQuestion();
}

function nextQuestion() {
    const categories = ['team', 'market', 'product', 'business', 'risk', 'terms'];
    const currentCategory = categories[currentState.categoryIndex];
    const questionsInCategory = ASSESSMENT_QUESTIONS[currentCategory][0].questions.length;

    if (currentState.currentQuestionIndex < questionsInCategory - 1) {
        currentState.currentQuestionIndex++;
    } else if (currentState.categoryIndex < categories.length - 1) {
        currentState.categoryIndex++;
        currentState.currentQuestionIndex = 0;
    } else {
        // All questions answered
        calculateResults();
        showResults();
        return;
    }

    loadQuestion();
}

function prevQuestion() {
    if (currentState.currentQuestionIndex > 0) {
        currentState.currentQuestionIndex--;
    } else if (currentState.categoryIndex > 0) {
        currentState.categoryIndex--;
        const categories = ['team', 'market', 'product', 'business', 'risk', 'terms'];
        const prevCategory = categories[currentState.categoryIndex];
        currentState.currentQuestionIndex = ASSESSMENT_QUESTIONS[prevCategory][0].questions.length - 1;
    }

    loadQuestion();
}

// Results Calculation
function calculateResults() {
    const categories = ['team', 'market', 'product', 'business', 'risk', 'terms'];
    const categoryScores = {};
    const strengths = [];
    const concerns = [];

    categories.forEach(category => {
        const scores = currentState.scores[category] || [];
        const categoryScore = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / (scores.length * 9)) * 100 : 0;
        categoryScores[category] = Math.round(categoryScore);

        if (categoryScore > 70) {
            strengths.push(`Strong ${category.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        } else if (categoryScore < 40) {
            concerns.push(`Weak ${category.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        }
    });

    const overallScore = Math.round(
        (categoryScores.team * currentState.weights.team +
         categoryScores.market * currentState.weights.market +
         categoryScores.product * currentState.weights.product +
         categoryScores.business * currentState.weights.business +
         categoryScores.risk * currentState.weights.risk +
         categoryScores.terms * currentState.weights.terms) / 100
    );

    let decision = 'PASS';
    let icon = '❌';
    let reasoning = '';

    if (overallScore >= 70) {
        decision = 'INVEST';
        icon = '✅';
        reasoning = 'Strong fundamentals across key areas. This opportunity aligns well with typical VC investment criteria.';
    } else if (overallScore >= 50) {
        decision = 'MAYBE';
        icon = '⚠️';
        reasoning = 'Mixed signals. Significant upside potential but notable risks need to be addressed.';
    } else {
        decision = 'PASS';
        icon = '❌';
        reasoning = 'Fundamental concerns across multiple areas. High risk relative to potential returns.';
    }

    currentState.results = {
        overallScore,
        categoryScores,
        decision,
        icon,
        reasoning,
        strengths,
        concerns
    };
}

function showResults() {
    const r = currentState.results;
    
    document.getElementById('resultsCompanyName').textContent = currentState.pitch.company;
    document.getElementById('resultsCompanyDetails').textContent = 
        `${currentState.pitch.sector} | ${currentState.pitch.stage} | $${currentState.pitch.ask}M ask`;

    const decisionBox = document.getElementById('decisionBox');
    decisionBox.className = `decision-box ${r.decision.toLowerCase()}`;
    document.getElementById('decisionIcon').textContent = r.icon;
    document.getElementById('decisionTitle').textContent = r.decision;
    document.getElementById('decisionReasoning').textContent = r.reasoning;

    document.getElementById('overallScore').textContent = `${r.overallScore}/100`;

    // Category scores
    const categoryScoresHtml = Object.entries(r.categoryScores)
        .map(([cat, score]) => `
            <div class="category-score">
                <span class="category-score-name">${cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                <span class="category-score-value">${score}/100</span>
            </div>
        `).join('');
    document.getElementById('categoryScores').innerHTML = categoryScoresHtml;

    // Strengths and concerns
    document.getElementById('strengthsList').innerHTML = r.strengths.map(s => `<li>${s}</li>`).join('');
    document.getElementById('concernsList').innerHTML = r.concerns.map(c => `<li>${c}</li>`).join('');

    currentState.screen = 'results';
    showScreen('resultsScreen');
}

// Actions
function startOver() {
    currentState = {
        screen: 'start',
        pitch: {},
        weights: { team: 25, market: 25, product: 20, business: 15, risk: 10, terms: 5 },
        answers: {},
        currentQuestionIndex: 0,
        categoryIndex: 0,
        scores: {},
        results: null
    };
    document.getElementById('pitchForm').reset();
    goToStart();
}

function downloadResults() {
    const r = currentState.results;
    const report = `
VC PLAYGROUND - INVESTMENT DECISION REPORT
==========================================

Company: ${currentState.pitch.company}
Sector: ${currentState.pitch.sector}
Stage: ${currentState.pitch.stage}
Ask: $${currentState.pitch.ask}M

DECISION: ${r.decision}
Overall Score: ${r.overallScore}/100

${r.reasoning}

CATEGORY BREAKDOWN
------------------
${Object.entries(r.categoryScores).map(([cat, score]) => 
    `${cat.toUpperCase()}: ${score}/100`
).join('\n')}

STRENGTHS
---------
${r.strengths.map(s => `• ${s}`).join('\n')}

CONCERNS
--------
${r.concerns.map(c => `• ${c}`).join('\n')}

Generated by VC Playground
${new Date().toLocaleString()}
    `;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `vc-decision-${currentState.pitch.company}-${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
    URL.revokeObjectURL(url);
}

// Theme
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

function loadTheme() {
    const savedTheme = localStorage.getItem('vcTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeButton();
    }
}
