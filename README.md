```markdown
# CheapestRoutes.com

A simple API that helps music fans find the most affordable way to see their favorite artists live. Tell us who you want to see and where you're located - we'll find the cheapest route to their concerts.

## How It Works

1. **Input**: User shares their location and artist they want to see
2. **Search**: We check event APIs for all upcoming shows
3. **Local Check**: We see if there's a show in the user's home city first
4. **Alternatives**: We find other cities where the artist is performing
5. **Ranking**: We calculate the cheapest total route (travel + ticket) options
6. **Selection**: User picks a route and gets basic travel information

## Features

- Fastify HTTP API
- TypeScript with clean interfaces
- Development with ts-node-dev
- Simple routes, models, and utilities structure

## Getting Started

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

Server runs at http://localhost:3000

## Project Structure

```
.
├── routes/             # Route definitions
│   └── plan.ts
├── models/             # Data types and interfaces
│   └── Route.ts
├── utils/              # Utility functions
│   └── geo.ts
├── server.ts           # Entry point
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project metadata and scripts
```

## Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Development with hot reload |
| `yarn build` | Compile TS to dist/ |
| `yarn start` | Run compiled version |

## Roadmap

- Connect to event APIs (Ticketmaster, Bandsintown)
- Add city-to-city travel cost estimation
- Implement route scoring algorithm
- Add accommodation cost considerations
- Build simple visualization for route options
- Add preference learning for returning users

## License

MIT License(./LICENSE)
Copyright (c) 2025 Rohit R. Mohanty
```
