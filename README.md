# AkashChat

A modern AI-powered behavioral analysis chat application built on Next.js.

## Overview

AkashChat provides an intuitive platform for users to analyze behavioral patterns, develop healthier habits, and receive evidence-based recommendations through an AI assistant. The application features both a public-facing interface and a secure dashboard with advanced analytics capabilities.

## Features

- **AI-Powered Chat Interface**: Engage in meaningful conversations with our behavioral analysis AI assistant
- **Model Selection**: Choose from multiple AI models including DeepSeek and Meta-Llama for your interactions
- **Behavioral Analysis**: Get personalized insights on behaviors and patterns
- **Habit Formation**: Track habits, establish routines, and get recommendations
- **Progress Tracking**: Monitor your development through detailed statistics and visualizations
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS with custom theming
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **Animations**: Tailwind animations and custom effects

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository - for starter template

```bash
git clone https://github.com/harystyleseze/akash-chat-agent-template
cd akash-chat-agent-template
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
akash-chat-agent-template/
├── components/         # Reusable UI components
│   ├── dashboard/      # Dashboard-specific components
│   ├── landing/        # Landing page components
│   └── ui/             # Core UI components
├── app/                # App router pages
│   ├── dashboard/      # Protected dashboard routes
│   ├── chat/           # Public chat interface
│   └── login/          # Authentication pages
├── public/             # Static assets
├── styles/             # Global styles
└── lib/                # Utility functions and shared code
```

## Key Pages

- **Landing Page**: Introduction to AkashChat and its features
- **Login**: User authentication interface
- **Public Chat**: Basic chat functionality for users without accounts
- **Dashboard**: Central hub for registered users
  - Chat: Enhanced chat with personalized features
  - Analyses: View previous behavior analyses
  - Habits: Track and manage habit formation
  - Statistics: Visualizations of your progress
  - Profile: Account management
  - Settings: Application preferences

## Development

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running in Production Mode

```bash
npm start
# or
yarn start
```

## Design Principles

AkashChat follows a modern, minimalist design approach with:

- **Responsive layout**: Adapts seamlessly to any device size
- **Accessibility**: Follows WCAG guidelines for inclusive user experience
- **Consistent theming**: Teal-based color scheme with light/dark mode support
- **Visual hierarchy**: Clear organization of information for intuitive navigation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- The Next.js team for the incredible framework
- shadcn/ui for the beautiful component library foundation
- Lucide for the elegant icon set
