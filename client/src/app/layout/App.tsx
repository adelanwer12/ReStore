import { Container, CssBaseline ,createTheme, ThemeProvider} from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/catalog";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const PaletteType = darkMode ? 'dark' : 'light'
    const theme = createTheme({
      palette:{
        mode:PaletteType,
        background:{
          default:PaletteType === 'light' ? '#eaeaea' : '#121212'
        }
      }
    })

  function handelThemeChange(){
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode = {darkMode} handelThemeChange = {handelThemeChange}></Header>
      <Container>
        <Catalog /> 
      </Container>
    </ThemeProvider>
  );
}

export default App;
