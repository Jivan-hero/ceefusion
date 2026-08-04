# ⚡ CeeFusion – CEE & NEET Preparation Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20JavaScript%20ES6+-blue.svg)]()
[![Platform](https://img.shields.io/badge/Platform-CEE%20Nepal%20%7C%20NEET%20India-emerald.svg)]()
[![Responsive](https://img.shields.io/badge/Design-Glassmorphism%20%7C%20Fully%20Responsive-pink.svg)]()

**CeeFusion** is a modern, high-performance web platform designed specifically for Medical and Engineering entrance examination candidates (CEE Nepal / NEET India). Built with pure Vanilla JavaScript, glassmorphic CSS animations, dynamic syllabus tracking, distinct educational content across 85 chapters, and a 200 MCQ timed examination simulator.

---

## ✨ Features & Visual Highlights

### 🎯 1. Interactive 85-Chapter Syllabus Coverage
- Natively maps all **85 chapters** across 4 primary subject disciplines:
  - ⚛️ **Physics** (25 Chapters: Mechanics, Thermodynamics, Waves, Electromagnetism, Optics, Modern Physics)
  - 🧪 **Chemistry** (23 Chapters: Physical, Inorganic, Organic Chemistry)
  - 🌿 **Biology** (26 Chapters: Diversity, Cell Biology, Plant/Human Physiology, Genetics, Biotech & Ecology)
  - 📐 **Mathematics** (11 Chapters: Algebra, Trigonometry, Geometry)

### 🎨 2. Redesigned Glassmorphic Subject & Chapter Cards
- **Dynamic Subject Accent Glows**:
  - Physics: Cyan Glow (`#06b6d4`)
  - Chemistry: Pink Glow (`#ec4899`)
  - Biology: Emerald Glow (`#10b981`)
  - Mathematics: Amber Glow (`#f59e0b`)
- **Modern Micro-Interactions**: Smooth 60fps scaling (`scale(1.025)`), top accent glow indicators, and `cubic-bezier(0.16, 1, 0.3, 1)` easing.
- **Mobile Touch Native**: Optimized for touchscreens with explicit `:active` state visual feedback and touch targets (`min-height: 48px`).

### 📚 3. Distinct Hand-Written Chapter Notes
- Every chapter contains genuine, chapter-specific study notes divided into 3 high-yield sections:
  1. **Theoretical Foundation**: Core physical principles, chemical mechanisms, and biological definitions.
  2. **Key Framework & Derivations**: Mathematical equations, law applications, and step-by-step methods.
  3. **MEC Exam Strategy & Traps**: High-yield CEE exam tips, unit prefix traps (micro vs nano), and negative marking (-0.25 penalty) warnings.

### ⏱️ 4. Full-Featured 200 MCQ Assessment Simulator
- **Live Countdown Timer**: 3-hour exam countdown with auto-submission.
- **Question Navigation Grid**: Jump to any index instantly; supports mobile/tablet slide-up bottom sheet drawers.
- **Answer Marking & Review**: Bookmark questions for review, clear selections, and track answered vs skipped counts.
- **Instant Detailed Analytics**: Subject-wise accuracy breakdown, score calculation with negative marking, and detailed answer explanations.

### 📱 5. 100% Cross-Device Responsiveness
- Tailored viewports across small phones (360px–430px), tablets (768px–1024px portrait & landscape), and large desktop screens.

---

## 🛠️ Tech Stack & Architecture

- **Core**: HTML5, Vanilla JavaScript (ES6+)
- **Styling**: Custom CSS3 Glassmorphism, TailwindCSS utility classes, FontAwesome 6 icons
- **Fonts**: Google Fonts (Inter, Outfit)
- **State Management**: LocalStorage persistent progress tracking

---

## 📁 Repository Structure

```
ceefusion/
├── index.html        # Main SPA shell & viewport structures
├── style.css         # Custom visual design system, glassmorphism, responsive styles
├── script.js        # Core app controller, navigation, modal management, examination engine
├── data.js          # Global seed data & hand-written chapter notes across 85 chapters
├── questions.js     # Comprehensive MCQ question bank & MAT practice pools
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

No build tools or heavy node_modules required! Run instantly using any local web server:

### Option 1: Python HTTP Server (Recommended)
```bash
python3 -m http.server 8080
```
Open **`http://localhost:8080`** in your browser.

### Option 2: Node http-server
```bash
npx http-server . -p 8080
```

### Option 3: VS Code Live Server
Right-click `index.html` and click **"Open with Live Server"**.

---

## 👨‍💻 Author & Contributions

Created with ❤️ by **[Jivan Devkota](https://github.com/Jivan-hero)**.

If you find this repository helpful for CEE / NEET preparation, feel free to give it a ⭐ **Star**!
