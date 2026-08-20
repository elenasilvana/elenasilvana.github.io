import { Routes, Route } from "react-router";
import Home from "./routes/home";
import { theme } from './theme/theme';
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import SelectionContext from "./context/sectionContext";
import { useState } from "react";
import EnhancedNavBar from "./components/enhancedNavbar";

export default function App() {
  const [selectedSection, setSelectedSection] = useState('about')
  const [isBarNavigation, setIsBarNavigation] = useState(false)

  console.log('selecte section', selectedSection)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <SelectionContext.Provider value={{
        selectedSection,
        setSelectedSection,
        isBarNavigation,
        setIsBarNavigation
      }}>
        <Container
          maxWidth={false}
          component="main"
          disableGutters
        >
          <EnhancedNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </SelectionContext.Provider>
    </ThemeProvider >

  );
}