import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Help from './pages/Help';
import addPet from './pages/addPet';
import IndividualPlacard from './pages/IndividualPlacard';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header/>
          <div>
            <Routes>
              <Route 
                path="/" 
                element={<Main />}
              />
              <Route 
                path="/helpout" 
                element={<Help />}
              />
              <Route 
                path="/login" 
                element={<Help />}
              />
               <Route 
                path="/addpet" 
                element={<addPet />}
              />
               <Route 
                path="/pet" 
                element={<IndividualPlacard />}
              />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;