import React from 'react'

export const RepoItem = (props) => {
    const repo=props.repo;
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
            
        </div>
    )
}
