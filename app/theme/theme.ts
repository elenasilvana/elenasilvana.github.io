import type { ThemeOptions } from "@mui/material";
import { createTheme } from '@mui/material/styles';

// #9D59E6 → Aurora Purple
// #B8B3EF → Mist Lavender
// #6E6EF5 → Neon Indigo
// #1E1A22 → Midnight Graphite

// Augment the palette to include a salmon color
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
      main: '#9D59E6',
    },
    secondary: {
      main: '#6e6ef5',
    },
  },
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    mistlavander: theme.palette?.augmentColor({
      color: {
        main: '#B8B3EF',
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

