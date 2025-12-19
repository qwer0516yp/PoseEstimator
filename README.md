# PoseEstimator

A Next.js application with JoyUI for pose estimation proof of concept.

## Features

- ⚡ **Next.js 16** - Latest version with App Router
- 🎨 **JoyUI** - Beautiful, modern component library from MUI
- 🔷 **TypeScript** - Type-safe development
- ⚛️ **React 19** - Latest React features
- 🎭 **Emotion** - Powerful CSS-in-JS styling

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/qwer0516yp/PoseEstimator.git
cd PoseEstimator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
PoseEstimator/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with JoyUI provider
│   └── page.tsx        # Home page
├── components/         # Reusable React components
│   └── PoseCard.tsx   # Example JoyUI component
├── public/            # Static files
├── next.config.js     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies
```

## JoyUI Integration

This project uses JoyUI as the primary component library. JoyUI provides:
- Beautiful, accessible components
- Built-in dark mode support
- Customizable theme system
- Excellent TypeScript support

Example usage:
```tsx
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';

function MyComponent() {
  return (
    <Card>
      <Button variant="solid" color="primary">
        Click me
      </Button>
    </Card>
  );
}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [JoyUI Documentation](https://mui.com/joy-ui/getting-started/)
- [React Documentation](https://react.dev)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
