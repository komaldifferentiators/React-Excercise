import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count:this.props.counter.value
    };
    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };
    
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    };
    render()
    {
        console.log("props", this.props);
    }

    render() { 
        
        return (
            <React.Fragment>
                <h4>{ this.props.id }</h4>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className={"btn btn-secondary btn-sm"}>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className={"btn btn-danger btn-sm-2 m-2"}>Delete</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }

    
}
 
export default Counter;