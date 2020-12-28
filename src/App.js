import './App.css';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import Landing from './Sections/Landing';
import AboutMe from './Sections/AboutMe';
import WhatIBuild from './Sections/WhatIBuild';

const theme = responsiveFontSizes(createMuiTheme());

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
      <AboutMe />
      <WhatIBuild />
    </ThemeProvider>
  );
}

export default App;
