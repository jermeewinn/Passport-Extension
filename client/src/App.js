import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SinglePost from './pages/SinglePost';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Donate from './pages/Donate';
import 'bulma/css/bulma.min.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
            <Route exact path="/" element={<Home/>} />
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/login" element={<Login/>} />
              {/* <Route exact path="/login" component={Login} /> */}
              <Route exact path="/signup" element={<Signup/>} />
              {/* <Route exact path="/signup" component={Signup} /> */}
              <Route exact path="/profile/:username?" element={<Profile/>} />
              {/* <Route exact path="/profile/:username?" component={Profile} /> */}
              <Route exact path="/post/:id" element={<SinglePost/>} />
              {/* <Route exact path="/post/:id" component={SinglePost} /> */}
              <Route exact path="/donate" element={<Donate/>} />
              <Route element={<NoMatch/>} />
              {/* <Route component={NoMatch} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;