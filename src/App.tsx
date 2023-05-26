import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import { Login } from './components/form/Login'
import { Header } from './components/header/Header'
import { Button } from './components/button/Button'
import { Menu } from './components/Menu'
import { Order } from './components/Order'

export type User = {
    email:string
      name:string
      contactno:string
}
interface State {
    showviewmenubutton: boolean
    myorders: boolean
    user:{
      email:string
      name:string
      contactno:string
    },
    loginDisable: boolean,
    showMenu: boolean
}


function App (): JSX.Element {
 const [state, setState] = useState<State>({ 
  showviewmenubutton: false, myorders: false, user: {
  email:'',
  name:'',
  contactno:''
},
loginDisable: false,
showMenu: false } );

const viewMenuButtonHandler = () => {
  setState({
    ...state,
    showMenu: true
  });
}; 

 const loginHandler = (user:{
  email:string
  name:string
  contactno:string
}) => {
      setState({
        ...state,
        showviewmenubutton: true,
        myorders: true,
        user:{
          email:user.email,
          name:user.name,
          contactno:user.contactno
        },
      loginDisable: true
      });
      console.log("Login Handler");
      console.log(state.user);
 };
  return (
    <div className="App">
      <header>
        <Header />
        <Login text="User Info Page" disable={state.loginDisable} onSubmit={loginHandler} /> <br /><br />
        {state.showviewmenubutton
          ? (<Button text="ViewMenu&Order" onClickHandler= {viewMenuButtonHandler} />)
          : (null)
        }
        {state.myorders
          ? (<Order text="MyOrders" email={state.user.email} />)
          : (null)
        }
        {state.showMenu
          ? (<Menu user={state.user}/>)
          : (null)
        }
          
      </header>
    </div>
  )
}

export default App
