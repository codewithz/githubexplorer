import React,{Fragment,useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './components/context/github/GithubState';


const App = () => {

    //const [users,setUsers]=useState([]);
    //const [user,setUser]=useState({});
    //const [loading,setLoading]=useState(false);
    const [alert,setAlert]=useState(null);
    //const [repos,setRepos]=useState([]);

  /*state={
    users:[],
    user:{},
    loading:false,
    alert:null,
    repos:[]
  }*/

  /*async componentDidMount(){
  this.setState({loading:true})
  const response=await axios.get('https://api.github.com/users');

  this.setState({users:response.data,loading:false});
  console.log(response.data);
  }*/

  

  

 

  
  const showAlert=(msg,type)=>{
   /* this.setState({alert:{
      msg:msg,
      type:type
    }
    })*/
    setAlert({msg,type});

   /* setTimeout(()=>{
      this.setState({alert:null})
    },5000);*/
    setTimeout(()=>{setAlert(null)},5000);

  }


 // const {users,loading}=this.state; 
  return (
    <GithubState>
    <Router>
    <div className="App">
     <Navbar/>
     <div className="container">
    <Alert alert={alert}/>
    <Switch>
      <Route exact path="/" render={props=>(
        <Fragment>
       <Search  
         setAlert={showAlert} 
         />
         <Users />
        </Fragment>
      )}></Route>

      <Route path='/about' component={About}/>
      <Route path='/user/:login' component={User}/>


    </Switch>
   
     
     </div>
    </div>
    </Router>
    </GithubState>
    
  );
  
}

export default App;
