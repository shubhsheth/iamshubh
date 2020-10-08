import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;