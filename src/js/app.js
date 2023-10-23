import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import { Home } from './component/Home';
import { AddContact } from './component/AddContact';
import { EditContact } from './component/EditContact';


function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/add" component={AddContact} exact />
            <Route path="/edit/:id" component={EditContact} exact />

          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;