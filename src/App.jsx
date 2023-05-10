import { CustomCard } from "./assets/CustomCard";
import SubtaskSlider from "./subtaskSlider/SubtaskSlider";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <CustomCard /> */}
      <SubtaskSlider />
      </ThemeProvider>
    </>
  )
}

export default App
