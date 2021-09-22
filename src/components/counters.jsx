import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 2 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    };

    render() { 
        return ( <div>
            { this.state.counters.map(counter => (
            <Counter 
                key={counter.id} 
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                //value={counter.value}
                //id={counter.id} 
                // we can pass value and id one by one but passing object is best way to use.below we are passing counter object
                counter={ counter }>
            </Counter>
            ))}
        </div> );
    }
}
 
export default Counters;