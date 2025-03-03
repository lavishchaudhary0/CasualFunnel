# CausalFunnel - Shopify Survey App

A Shopify app that injects dynamic survey forms into cart pages and provides analytics dashboard.

## Features

- Dynamic survey form injection on cart pages
- Survey response collection and storage
- Interactive analytics dashboard
- Built with Next.js and Shopify's Polaris design system

## Tech Stack

- Frontend: Next.js, Polaris, React
- Backend: Node.js/Express (via Next.js API routes)
- Database: MongoDB
- Shopify Integration: App Bridge, ScriptTag API

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Shopify API credentials

3. Run development server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` to view the app

## Project Structure

```
├── components/       # React components
├── pages/           # Next.js pages and API routes
├── lib/             # Utility functions and helpers
├── models/          # Database models
├── public/          # Static assets
└── styles/          # CSS styles
```

## Testing

```bash
npm run test
```

## License

MIT
