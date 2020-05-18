import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import SignInAndSignUp from './pages/sign-In-and-sign-up/Sign-In-and-sign-up';
import Header from './components/header/Header';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  
  constructor(){
    super();
    this.state= {
      currentUser: null
    }
  }

  unSubscribeFormAuth = null;

  componentDidMount(){
    this.unSubscribeFormAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unSubscribeFormAuth();
  }
  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
