import React  from 'react'
import Head   from './Head'
import Header from './Header'
import Main   from './Main'

function App() {
  return (
      <html>
          <Head />  
          <body>
              <Header />
              <Main />
          </body>
      </html>
  );
}

module.exports = App;

