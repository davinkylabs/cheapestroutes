# CheapestRoutes.com
A web application that helps music fans find events for their favorite artists and visualizes their locations on a map. Search for any artist or event and see where they're performing around the world.

## How It Works
1. **Input**: User enters a keyword for an artist or event type
2. **Search**: We query the Ticketmaster API for matching events
3. **Visualization**: Results are displayed as markers on an interactive map
4. **Exploration**: Users can click on markers to see event details

## Features
- Deno server with API proxy for Ticketmaster integration
- Interactive Mapbox GL map visualization
- Automatic geolocation to center the initial map view
- Responsive design with dynamic UI transitions
- Secure API key management through environment variables

## Getting Started
```bash
# Clone the repository
git clone https://github.com/yourusername/cheapestroutes.git
cd cheapestroutes

# Set up environment variables (IMPORTANT)
echo "TICKETMASTER_API_KEY=your_api_key_here" > .env

# Start the development server with hot reloading
deno task dev
```

The server will be available at http://localhost:8000 by default.

## API Keys Required
- **Ticketmaster API**: Get your key from [Ticketmaster Developer Portal](https://developer.ticketmaster.com/)
- **Mapbox API**: The application uses a public key, but for production, replace it in maps.js with your own from [Mapbox](https://www.mapbox.com/)

## Project Structure
```
.
├── main.ts            # Deno server and API handlers
├── .public/           # Static files served by the application
│   ├── index.html     # Main HTML structure
│   ├── form.js        # Form handling and event search logic
│   ├── maps.js        # Mapbox initialization and marker logic
│   └── styles.css     # Styling for the application
├── deno.json          # Deno configuration and tasks
└── .env               # Environment variables (not in repo)
```

## Development
```bash
# Run the development server with hot reloading
deno task dev
```

## Roadmap
- Add route calculation between user location and events
- Implement travel cost estimation
- Add ticket price information when available
- Create route scoring algorithm for finding cheapest options
- Add accommodation cost considerations
- Implement user preferences and bookmarking

## Future Vision
The long-term goal for CheapestRoutes.com is to become a comprehensive tool that:
- Analyzes multiple concert dates and locations for artists
- Calculates the most cost-effective travel plans including transportation and lodging
- Helps fans optimize their concert-going experience by finding the best value routes
- Learns from user preferences to make better recommendations over time

## License
MIT License ([LICENSE](./LICENSE)) Copyright (c) 2025 Rohit R. Mohanty
