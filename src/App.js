import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Nofound from './pages/Nofound'

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contact' component={Contact} />
          <Route component={Nofound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;