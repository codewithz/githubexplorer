import React,{useReducer} from 'react';
import GithubContext from './githubContext';
import axios from 'axios';
import {
 SEARCH_USERS,SET_ALERT,SET_LOADING,GET_REPOS,GET_USER, CLEAR_USERS
} from '../types';
import GithubReducer from './githubReducer';

const GithubState =props=>{

    const initialState={
    users:[],
    user:{},
    loading:false,
    alert:null,
    repos:[]
    }

    const [state,dispatch] =useReducer(GithubReducer,initialState);

    //SET LOADING 

    const setLoading =()=> dispatch({type:SET_LOADING});

    //SEARCH USERS 
    const searchUser=async (text)=>{
        //this.setState({loading:true})
        setLoading();
        const response=await axios.get(`https://api.github.com/search/users?q=${text}`);
        //this.setState({users:response.data.items,loading:false});
        dispatch({
            type:SEARCH_USERS,
            payload:response.data.items
        });
       
        // setUsers(response.data.items);
       // setLoading(false);
      }

    //GET REPOS 

    const getUserRepos =async (username)=>{
        //this.setState({loading:true})
        setLoading();
        const response=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
      // setRepos(response.data);
       //setLoading(false);
       dispatch({
           type:GET_REPOS,
           payload:response.data
       })
      }
    

    //GET USER
    const getUser =async (username)=>{
        //this.setState({loading:true})
        setLoading();
        const response=await axios.get(`https://api.github.com/users/${username}`);
        dispatch({
            type:GET_USER,
            payload:response.data
        });
      }

    //CLEAR USER
    const clearUser=()=> dispatch({type:CLEAR_USERS})

    return <GithubContext.Provider
    value={{
        users:state.users,
        repos:state.repos,
        user:state.user,
        loading:state.loading,
        searchUser,
        clearUser,
        getUser,
        getUserRepos
    }}
    >

         {props.children}
    </GithubContext.Provider>

}

export default GithubState;