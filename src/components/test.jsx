import React, { Component } from 'react';
class test extends Component {
    state = { 
        counter : [
            { id:1, value:1 },
            { id:2, value:2 },
            { id:3, value:3 },
            { id:4, value:4 }

        ]
     }

     handleSubmit = () =>     {
         let ids = this.state.counter.map(c =>
            c.id )
         console.log(ids);
     }
    render() { 
        
        return ( 
            <React.Fragment>
                <form>
                    Username : <input type = "text" name = "username" id = "username"></input><br/><br/>
                    Password : <input type = "password" name = "password" id = "passsword"></input><br/><br/>
                    <button onClick={this.handleSubmit} className={"btn btn-secondary btn-sm"}>Submit</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default test;