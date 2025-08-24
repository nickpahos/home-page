# Home Hub - PS1 Era Information Dashboard

A personalized information hub built with Next.js and Mantine, featuring a nostalgic PS1-era aesthetic combined with a relaxed LoFi feel. Perfect for serving as a new browser tab dashboard with quick access to essential links and market data.

## ✨ Features

### 🎮 PS1-Era Aesthetic
- **Low-Poly Visuals**: Chunky UI elements with sharp edges and minimal gradients
- **Retro Typography**: Orbitron for headings, Share Tech Mono for body text
- **Scanline Effects**: Subtle scanline overlays for authentic retro feel
- **Pixelated Borders**: Custom border styling reminiscent of early 3D renders

### 🌊 LoFi Atmosphere
- **Animated Gradient Background**: Smoothly shifting purple, pink, and blue gradients
- **Backdrop Blur Effects**: Dreamy, layered look with backdrop-filter: blur()
- **Calm Animations**: Subtle, non-distracting transitions and hover effects
- **Serene Color Palette**: Desaturated, aged colors inspired by PS1-era limitations

### 🔗 Core Functionality
- **Reddit Links**: Curated subreddit links (r/gamedeals, r/webdev, r/news, etc.)
- **Steam Integration**: Quick access to deals, new releases, and wishlist
- **Work Tools**: Jira, Notion, Slack, and other productivity links
- **GitHub Access**: Profile, starred repos, and trending repositories
- **Personal Links**: Customizable personal blogs, portfolios, and utilities

### 📊 Market Data
- **Real-time Stock Prices**: AAPL, MSFT, TSLA, GOOGL, AMZN with live updates
- **Crypto Watchlist**: BTC, ETH, SOL, ADA, DOT with 30-second refresh
- **Price Changes**: Daily percentage changes and absolute value movements
- **Mock Data**: Currently uses mock data (easily replaceable with real APIs)

### 🕐 Clock & Search
- **Live Clock**: Real-time display with retro terminal styling
- **Date Display**: Current date and day of the week
- **Web Search**: Quick Google search integration
- **Responsive Design**: Mobile-friendly layout with adaptive grids

### ⚙️ Configuration Editor
- **Hidden Settings Button**: Gear icon in top-right corner
- **Add/Remove/Edit Links**: Customize all link categories
- **Watchlist Management**: Modify stock and crypto symbols
- **Persistent Storage**: Changes saved to localStorage

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd home-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Configuration
The application uses a configuration system stored in `src/lib/config.ts`. You can customize:

- **Links**: Add/remove links for each category
- **Watchlist**: Modify stock and crypto symbols
- **Theme**: Adjust colors and styling preferences

### Adding Real Market Data
Replace the mock data in `src/lib/marketData.ts` with real API calls:

- **Stocks**: Alpha Vantage, Twelve Data, or Yahoo Finance API
- **Crypto**: CoinGecko or CoinMarketCap API

### Styling
- **CSS Classes**: Use the provided CSS classes for consistent styling
- **Mantine Theme**: Modify `src/lib/theme.ts` for component-level customization
- **Global Styles**: Edit `src/app/globals.css` for background and effects

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles and PS1-era effects
│   ├── layout.tsx      # Root layout with Mantine provider
│   └── page.tsx        # Main dashboard page
├── components/         # Reusable UI components
│   ├── Clock.tsx       # Real-time clock display
│   ├── LinkSection.tsx # Categorized link sections
│   ├── MarketWatch.tsx # Stock/crypto data display
│   ├── SearchBar.tsx   # Web search functionality
│   └── ConfigEditor.tsx # Configuration editor modal
├── lib/                # Utilities and configuration
│   ├── config.ts       # App configuration and defaults
│   ├── marketData.ts   # Market data fetching logic
│   ├── theme.ts        # Mantine theme customization
│   └── clock.ts        # Time formatting utilities
├── styles/             # Additional styling (if needed)
└── types/              # TypeScript type definitions
```

## 🎯 Stretch Goals

- [x] **Customization UI**: Hidden edit mode for adding/removing links
- [ ] **Theme Switching**: Multiple retro color palettes
- [ ] **Historical Charts**: Mini-charts for market data
- [ ] **Search Engine Options**: Choose between Google, DuckDuckGo, etc.
- [ ] **Dynamic Backgrounds**: Time-based gradient adjustments
- [x] **Local Storage**: Save user preferences and customizations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: Mantine v7
- **Styling**: CSS Modules + Global CSS
- **Language**: TypeScript
- **Icons**: Tabler Icons
- **Data Fetching**: SWR for efficient API calls
- **State Management**: React hooks + localStorage

## 🎨 Design Philosophy

The application combines two distinct aesthetic approaches:

1. **PS1-Era Nostalgia**: Chunky UI elements, scanline effects, and retro typography
2. **LoFi Serenity**: Calm gradients, subtle animations, and non-distracting design

This creates a unique experience that's both nostalgic and relaxing - perfect for a new tab dashboard that you'll see multiple times per day.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Mantine Team**: For the excellent UI component library
- **Next.js Team**: For the powerful React framework
- **PS1 Era**: For the nostalgic aesthetic inspiration
- **LoFi Community**: For the calming design philosophy

---

Built with ❤️ and retro love
