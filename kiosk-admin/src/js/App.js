import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';
import ProductionTable from './components/ProductionTable';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <NavBar />
        <main style={{padding: '8px'}}>
          <ProductionTable />
        </main>
      </div>
    );
  }
}

export default App;
