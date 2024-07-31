import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Home from './App';
import { Router } from 'wouter';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Router>
          <Home />
        </Router>
      </ApolloProvider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
