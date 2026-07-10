import type { ThemeOptions } from "@mui/material";
import { createTheme } from '@mui/material/styles';

// #9D59E6 → Aurora Purple
// #B8B3EF → Mist Lavender
// #6E6EF5 → Neon Indigo
// #1E1A22 → Midnight Graphite

// Augment the palette to include custom color
declare module '@mui/material/styles' {
  interface Palette {
    mistlavander: Palette['primary'];
  }

  interface PaletteOptions {
    augmentColor?: any;
    mistlavander?: PaletteOptions['primary'];
  }
}

export let theme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9D59E6', // aurora purple
    },
    secondary: {
      main: '#6e6ef5', // neon indigo
    },
    background: {
      default: '#1e1a22',
      paper: '#1e1a22',
    },
    text: {
      primary: '#d4d1f5',
    },
  },
      typography: {
    h1: {
      fontSize: '3.2rem',
    },
    h2: {
      fontSize: '2.8rem',
    },
    h3: {
      fontSize: '2.5rem',
    },
    h4: {
      fontSize: '2rem',
    },
    h6: {
      fontSize: '1rem',
    },
    overline: {
      fontSize: '1rem',
    },
  },
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    mistlavander: theme.palette?.augmentColor({
      color: {
        main: '#9d94e6',
      },
      name: 'mistlavander',
    }),
      auroraPurple: theme.palette?.augmentColor({
      color: {
        main: '#9D59E6',
      },
      name: 'auroraPurple',
    }),
      neonIndigo: theme.palette?.augmentColor({
      color: {
        main: '#6E6EF5',
      },
      name: 'neonIndigo',
    }),
      midnightGraphite: theme.palette?.augmentColor({
      color: {
        main: '#1E1A22',
      },
      name: 'midnightGraphite',
    }),
  },
});

