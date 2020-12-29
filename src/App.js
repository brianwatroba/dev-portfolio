import './App.css';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import Landing from './Sections/Landing';
import AboutMe from './Sections/AboutMe';
import WhatIBuild from './Sections/WhatIBuild';
import WhatILike from './Sections/WhatILike';
import GetInTouch from './Sections/GetInTouch';

const theme = responsiveFontSizes(createMuiTheme());

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
      <AboutMe />
      <WhatIBuild />
      <WhatILike />
      <GetInTouch />
    </ThemeProvider>
  );
}

export default App;
