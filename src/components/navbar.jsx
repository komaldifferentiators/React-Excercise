import React, { Component } from 'react';
//import Counters from './counters';
//import Test from './test';


class Navbar extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                {/* <Counters />
                <Test /> */}
            </React.Fragment>
        );
    }
}
 
export default Navbar;