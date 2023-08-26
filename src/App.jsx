import { Home } from '../src/Home/Home.jsx'
import { Account } from '../src/Accounts/Account.jsx'
import { NotFound } from '../src/NotFound/NotFound.jsx'
import { Order } from '../src/Orders/Order.jsx'
import { Signin } from '../src/Signin/Signin.jsx'
import './App.css';


function App() {

  return (
    <div className='bg-red-800'>
      <Home />
      <Account />
      <NotFound />
      <Order />
      <Signin />
    </div>
  )
}



export default App
