import React,{useState,useContext} from 'react'
import GithubContext from '../context/github/githubContext';


const Search = (props) => {
    /*state={
        text:''
    }*/

    const githubContext=useContext(GithubContext);

    const [text,setText]=useState(''); 

    const onSubmit=(e)=>{
        e.preventDefault();
        if(text===''){
            props.setAlert('Please enter something','light')
        }else{
       // props.searchUser(text);
        githubContext.searchUser(text);
//this.setState({text:''});
            setText('');
        }
    }

    const onChange=(e)=>{
       /* this.setState({
            [e.target.name]:e.target.value
        });*/
        setText(e.target.value);
    }
   
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" 
                    name="text"
                    placeholder="Search Users...."
                    value={text}
                    onChange={onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>

                {githubContext.users.length>0 &&
                <button 
                className="btn btn-light btn-block"
                onClick={githubContext.clearUser}>
                    Clear
                </button>
                }
            </div>
        )
    
}

export default Search
