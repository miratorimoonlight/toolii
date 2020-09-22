import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes/Routes'
import NavBar from './components/NavBar'

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes />
          </BrowserRouter>
        </div>
    );
  }
  
}

export default App;
