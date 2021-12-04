import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react'
import './App.css';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator loginMechanisms={['username']}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;