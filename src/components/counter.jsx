import React, { Component } from 'react';
class Counter extends Component {
    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };
    
   

    render() { 
        
        return (
            <React.Fragment>
                <h4>{ this.props.id }</h4>
                <div className="row">
                    <div className="col-1">
                        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    </div>
                    <div className="col">
                        <button onClick={() => this.props.onIncrement(this.props.counter.id)} className={"btn btn-secondary btn-sm m-2"}>+</button>&nbsp;
                        <button onClick={() => this.props.onDecrement(this.props.counter)} className={"btn btn-secondary btn-sm m-2"} disabled={this.props.counter.value === 0 ? 'disabled' : ""} >-</button>
                        <button onClick={() => this.props.onDelete(this.props.counter.id)} className={"btn btn-danger btn-sm-2"}>Delete</button>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        console.log(this.props.counter);
        const { value }  = this.props.counter;
        return value === 0 ? "zero" : value;
    }

    
}
 
export default Counter;