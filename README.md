# AI_Safety_Incident


A modern, responsive dashboard for tracking and managing AI safety incidents. Built with React, TypeScript, and Tailwind CSS.


## Features

- 📊 Real-time incident tracking and management
- 🔍 Filter incidents by severity (Low, Medium, High)
- ⏱️ Sort incidents by date (newest/oldest)
- 🎯 Detailed incident view with comprehensive information
- ✨ Smooth animations and modern UI interactions
- 📱 Fully responsive design
- 🌙 Dark mode optimized

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 7.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PoojaShree-DR/AI_Safety_Incident.git
cd AI_Safety_Incident
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── IncidentCard.tsx
│   ├── IncidentDetails.tsx
│   └── IncidentForm.tsx
├── types.ts           # TypeScript types and mock data
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

## Features in Detail

### Incident Management
- View all reported AI safety incidents
- Filter incidents by severity level
- Sort incidents by reporting date
- View detailed information for each incident

### Incident Reporting
- Submit new incidents through an intuitive form
- Input validation for required fields
- Automatic timestamp generation
- Real-time list updates

### UI/UX Features
- Interactive hover effects
- Smooth transitions and animations
- Responsive design for all screen sizes
- Accessible form controls
- Clear visual hierarchy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments

- Design inspired by modern dashboard interfaces
- Built as part of the HumanChain AI safety initiative
- Icons provided by [Lucide](https://lucide.dev)
