import './App.css';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import Navbar from './Components/Navbar';
import Landing from './Sections/Landing';
import AboutMe from './Sections/AboutMe';
import WhatIBuild from './Sections/WhatIBuild';
import WhatILike from './Sections/WhatILike';
import Contact from './Sections/Contact';

const theme = responsiveFontSizes(createMuiTheme());

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Landing />
      <AboutMe />
      <WhatIBuild />
      <WhatILike />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
