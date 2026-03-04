# 💰 VC Playground - Investment Analysis Tool

A professional web app for analyzing and tracking venture capital investments.

## Features

- **Dashboard Overview**
  - Total invested amount
  - Number of deals
  - Current portfolio value
  - Average ROI across all investments

- **Data Visualization**
  - Sector breakdown (pie chart)
  - Stage distribution (bar chart)
  - Interactive charts that update with filters

- **Investment Management**
  - Add new investments with detailed information
  - Edit existing investments
  - Delete investments
  - View comprehensive investment table with metrics

- **Advanced Analytics**
  - ROI % (Return on Investment)
  - MOIC (Multiple on Invested Capital)
  - Sector and stage analysis
  - Sortable and filterable data

- **Data Operations**
  - Filter by sector and investment stage
  - Export portfolio to JSON
  - Import investment data from JSON
  - Local storage persistence (data saved in browser)

- **User Experience**
  - Dark mode toggle
  - Responsive mobile-friendly design
  - Professional UI with smooth animations
  - Sample data for immediate exploration

## Getting Started

1. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - No server or installation required

2. **Explore Sample Data**
   - The app comes pre-loaded with 6 sample investments
   - Interact with the dashboard to see how it works

3. **Add Your Investments**
   - Click "+ Add Investment" button
   - Fill in company details, investment amount, and current valuation
   - System automatically calculates ROI and MOIC

4. **Analyze Your Portfolio**
   - View metrics and charts
   - Filter by sector or stage
   - Export data for external analysis

## Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Charts:** Chart.js
- **Storage:** Browser LocalStorage
- **Responsive:** Mobile-first design

## Keyboard Shortcuts

- `Esc` - Close modal dialog
- `Click outside modal` - Close without saving

## Data Persistence

All your investments are saved locally in your browser's LocalStorage. Your data persists between sessions unless you clear browser data.

## Export/Import

- **Export:** Download your portfolio as JSON
- **Import:** Load investments from a JSON file
- Useful for backup, sharing, or data transfer

## Investment Stages

- Seed
- Series A
- Series B
- Series C+
- Growth
- Late Stage

## Metrics Explained

- **ROI %:** Return on Investment percentage
  - Calculation: `(Current Value - Invested Amount) / Invested Amount × 100`

- **MOIC:** Multiple on Invested Capital
  - Calculation: `Current Value / Invested Amount`
  - A MOIC of 2.0x means you've doubled your money

## Browser Compatibility

Works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Local Development

No build process needed! Just serve the files:

```bash
# Using Python 3
python -m http.server 8000

# Using Node http-server
npx http-server

# Then visit: http://localhost:8000
```

## License

Open source. Use freely for personal or commercial purposes.

---

Built with ❤️ by Alf (OpenClaw)
