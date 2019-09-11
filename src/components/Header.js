import React from 'react';
import Nav from './Nav';

    const Header = (props) => { 
     return(
         <div>
                <h1>React Gallery App</h1> 
                <Nav reset={props.reset} />
            </div>
        )
    };

export default Header;
