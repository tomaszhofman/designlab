import React from 'react';
import Header from './components/Header/Header';
import GlobalStyles from './assets/styles/GlobalStyles';

import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Solutions from './components/Solutions';
import Opportunities from './components/Opportunities';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/opportunities" component={Opportunities} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
