import React, { Fragment,useEffect,useContext } from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../context/github/githubContext';

const User = (props)=> {

    const githubContext = useContext(GithubContext);
    const {getUser,user,loading,getUserRepos,repos}=githubContext;
    useEffect(()=>{
        const username=props.match.params.login;
        getUser(username);
        getUserRepos(username);
        //eslint-disable-next-line
    },[])

   /* componentDidMount(){
        const username=this.props.match.params.login;
        props.getUser(username);
        props.getUserRepos(username);
    }*/
  
        const{
            name,avatar_url,location,bio,blog,login,
            html_url,followers,following,public_repos,
            public_gists,hireable,company
        } = user;

   

        if (loading) return <Spinner/>
        return (
            <Fragment>

            <Link to="/" className="btn btn-light">
                Back To Search
            </Link>
            Hireable:{' '}
            {
            hireable?<i className="fas fa-check text-success"/>:
            <i className="fas fa-times-circle text-danger"/>
            }
            <div className="card grid-2">
                <div className="all=center">
                    <img src={avatar_url}
                         alt=""
                         style={{width:'150px'}}
                    />
                    <h1>{name}</h1>
                    <p>Location : {location}</p>
                </div>

                <div>
                    {bio && 
                    <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>
                    }
                    <a href={html_url} className="btn btn-dark my-1">
                        Visit Github Profile
                    </a>

                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username:</strong> {login}
                                </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company:</strong> {company}
                                </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website:</strong> {blog}
                                </Fragment>}
                        </li>
                    </ul>

                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers :{followers}</div>
                <div className="badge badge-success">Following :{following}</div>
                <div className="badge badge-danger">Public Repos :{public_repos}</div>
                <div className="badge badge-dark">Public Gists :{public_gists}</div>
            </div>

            <Repos repos={repos}/>

            </Fragment>


        )
    
}

export default User
