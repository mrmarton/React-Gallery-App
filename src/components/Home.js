import React from 'react';
import Search from './Search';
import Nav from './Nav';


const Home = props => {
    return(
        <div className="main-content">
            <h2>Search by Categories</h2>
            <p>Flickr API key was used and technologies like React, React Router and Axios.</p>
            <Search history={props.history}
                    onSearch={props.onSearch}/>
        </div>
    );
}

export default Home;