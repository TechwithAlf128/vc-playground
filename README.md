# 🚀 VC Playground - Investment Decision Tool

An AI-powered web application to help you evaluate whether to invest in a startup idea. Get structured analysis and a clear recommendation.

## Overview

VC Playground guides you through a comprehensive due diligence process, asking 24 deep-dive questions across 6 key investment criteria. Based on your answers and custom weights, it provides an **INVEST**, **MAYBE**, or **PASS** recommendation with detailed scoring.

## Features

### 1. **Pitch Input**
- Company name, sector, stage
- Fundraising ask amount
- Business description

### 2. **Customizable Weights**
Define how much each factor matters for YOUR investment thesis:
- 👥 Team Quality & Execution (default: 25%)
- 🎯 Market Opportunity (default: 25%)
- 📦 Product & Traction (default: 20%)
- 💼 Business Model & Economics (default: 15%)
- ⚠️ Risk Management (default: 10%)
- 📝 Terms & Valuation (default: 5%)

### 3. **Deep-Dive Assessment**
24 carefully crafted questions across 6 categories:

#### Team Quality & Execution (4 questions)
- Founder experience
- Team complementarity
- Team depth
- Commitment level

#### Market Opportunity (4 questions)
- TAM size
- Market growth
- Competitive defensibility
- Customer acquisition

#### Product & Traction (4 questions)
- Product stage
- User/customer traction
- Roadmap clarity
- Product differentiation

#### Business Model & Economics (4 questions)
- Revenue model clarity
- Unit economics
- Path to profitability
- Scalability

#### Risk Management (4 questions)
- Execution risks
- Regulatory/legal risks
- Dependency risks
- Competitive response

#### Terms & Valuation (4 questions)
- Valuation reasonableness
- Use of proceeds clarity
- Term fairness
- Dilution trajectory

### 4. **Intelligent Scoring**
- Each answer scored 1-9 points
- Category scores weighted based on your preferences
- Overall score: 0-100
- Recommendation: INVEST (70+), MAYBE (50-69), PASS (<50)

### 5. **Detailed Results**
- **Investment Recommendation** with clear reasoning
- **Category Breakdown** showing strengths and weaknesses
- **Identified Strengths** - What looks good
- **Identified Concerns** - What needs attention
- **Download Report** - Save your analysis

## Getting Started

### Option 1: Online Demo
1. Visit the live site (GitHub Pages)
2. Click "Start Evaluation"
3. Answer the questions honestly
4. Get your investment recommendation

### Option 2: Local Setup
```bash
git clone https://github.com/TechwithAlf128/vc-playground.git
cd vc-playground
# Open index.html in any modern browser
```

### Option 3: Development Server
```bash
# Python 3
python -m http.server 8000

# Node http-server
npx http-server

# Then visit: http://localhost:8000
```

## How to Use

### Step 1: Submit Pitch
- Enter company basics
- Describe the business
- Specify fundraising ask

### Step 2: Set Your Weights
- Adjust importance of each factor
- Based on your investment thesis
- Weights must sum to 100%

### Step 3: Answer Questions
- 24 questions across 6 categories
- Each question has 4 answer options
- Progress bar shows your position
- Can go back to change answers

### Step 4: Get Results
- Investment recommendation
- Category-by-category breakdown
- Identified strengths and concerns
- Download detailed report

## Scoring System

### Overall Score
```
Overall Score = Weighted average of all category scores
= (Team × Team%) + (Market × Market%) + (Product × Product%) + 
  (Business × Business%) + (Risk × Risk%) + (Terms × Terms%)
```

### Category Scores
Each category score = Average of 4 question scores (1-9) / 9 × 100

### Decision Thresholds
- **INVEST**: 70-100 (Strong fundamentals)
- **MAYBE**: 50-69 (Mixed signals, potential with risks)
- **PASS**: 0-49 (Significant concerns)

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: Browser LocalStorage
- **Charts**: Chart.js (optional for visualizations)
- **Responsive**: Mobile-first design
- **No Dependencies**: Pure vanilla JavaScript, works offline

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Data Privacy

- All evaluations stored locally in your browser
- No data sent to servers
- Download reports for backup
- Clear browser data to reset

## Customization

### Modify Weights
Edit default weights in `app.js`:
```javascript
currentState.weights = {
    team: 25,
    market: 25,
    product: 20,
    business: 15,
    risk: 10,
    terms: 5
}
```

### Add/Edit Questions
Modify `ASSESSMENT_QUESTIONS` object in `app.js` to change questions and answer options.

## Keyboard Shortcuts

- **Next Question**: Click "Next" button or press enabled state
- **Previous Question**: Click "Previous" button
- **Select Answer**: Click answer option
- **Download Report**: Click "Download Report" button

## Tips for Best Results

1. **Be Honest** - Your own assessment is only as good as your inputs
2. **Take Your Time** - Think through each question carefully
3. **Know Your Thesis** - Adjust weights to reflect your investment philosophy
4. **Use as Framework** - This is a tool to structure thinking, not a replacement for due diligence
5. **Trust Your Gut** - If the recommendation conflicts with intuition, investigate why

## Limitations

- Designed for early-stage tech startups
- Assumes founder provided truthful information
- Can't evaluate subjective factors (founder "feel", chemistry)
- Should be combined with legal, technical, and financial due diligence
- Market conditions change rapidly

## Future Features

- [ ] Compare multiple investments
- [ ] Historical tracking of decisions vs. outcomes
- [ ] Team templates for syndication
- [ ] Integration with pitch databases
- [ ] Custom question sets per strategy
- [ ] Weighted comparison visualizations
- [ ] Follow-on round tracking

## License

Open source. Free for personal and commercial use.

## Feedback

Found a bug? Have ideas? Feel free to contribute!

---

**Built with ❤️ by Alf (OpenClaw)**

*This tool is meant to augment human judgment, not replace it. Always do your own due diligence.*
