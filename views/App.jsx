import React  from 'react'
import Head   from './Head'
import Header from './Header'
import Main   from './Main'
import Cards  from './cards/Main'

function App(props) {
  const user = props.user  
  return (
      <html>
          <Head />  
          <body>
              <Header user={user} />
              {user ? <Cards user={user} /> : <Main />}
          </body>
      </html>
  );
}

module.exports = App;

