import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WhatsOn from './pages/WhatsOn';
import Calendar from './pages/Calendar';
import Performance from './pages/Performance';

const App = () => (
  <Router>
    <div>
      <CssBaseline />
      <NavBar />
      <main style={{padding: '8px'}}>    
        <Route exact path="/" component={WhatsOn} />
        <Route exact path="/calendar/:production_id" component={Calendar} />
        {/* <Route path="/productions/:production_id" component={Production} /> */}
        <Route path="/performance/:performance_id" component={Performance} />
      </main>
    </div>
  </Router>
);

export default App;
