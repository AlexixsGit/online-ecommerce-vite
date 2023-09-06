import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../src/Home/Home.jsx'
import { Account } from '../src/Accounts/Account.jsx'
import { NotFound } from '../src/NotFound/NotFound.jsx'
import { Order } from '../src/Orders/Order.jsx'
import { Signin } from '../src/Signin/Signin.jsx'
import { Navbar } from './Navbar/Navbar.jsx'
import './App.css';
import { ShoppingCartProvider } from './Context/Context.jsx'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/account', element: <Account /> },
    { path: '/order', element: <Order /> },
    { path: '/sign-in', element: <Signin /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes;
}

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
