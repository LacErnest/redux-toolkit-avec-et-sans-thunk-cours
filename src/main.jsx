import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//Pour ajouter le store, on entoure le composant principal de 
//notre application (App) par le provider (composant donnée par react-redux) qui détient en son sein le store
import { Provider } from 'react-redux'
//On importe notre store
import { store } from './fonction/store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
