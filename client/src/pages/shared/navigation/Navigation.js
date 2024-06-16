import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return ( 
        <div className="navbar-root">
            {/* navigation */}
            <div className="heading">
                <h1>Coding Calendar</h1>
            </div>
            <div class="dropdown">
                <button class="dropbtn">choose paltform 
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <p>leetcode</p>
                    <p>codef</p>
                    <p>codeforese</p>
                    <p>gfg</p>
                    <p>stuff</p>
                </div>
            </div>
        </div>
     );
}
 
export default Navigation;