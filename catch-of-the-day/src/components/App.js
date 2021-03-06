import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes'
import Fish from './Fish';
import base from '../base'


class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    static propTypes = {
        match: PropTypes.object
    }

    componentDidMount(){
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeID);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeID}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        console.log("it updated",  this.state.order);
        localStorage.setItem(this.props.match.params.storeID, JSON.stringify(this.state.order))
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
 
    addFish = (fish) =>{
        // 1. copy existing state
        const fishes = {...this.state.fishes}
        // 2. add new fish to new fishes var
        fishes[`fish${Date.now()}`] = fish;
        // 3. set new fishes object to state
        this.setState({fishes: fishes});
    };

    updateFish = (key, updatedFish) => {
        // copy current state
        const fishes = {...this.state.fishes};
        // update state
        fishes[key] = updatedFish;
        // set to state
        this.setState({ fishes:fishes })
    }

    deleteFish = (key) => {
        // copy state
        const fishes = {...this.state.fishes};
        // update state
        fishes[key] = null;
        // update state
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    };

    addToOrder = key => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
     };

     removeFromOrder = key => {
        const order = { ...this.state.order };
        delete order[key];
        this.setState({ order });
     }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                       {Object.keys(this.state.fishes).map(key => <Fish 
                       key={key} 
                       index={key}
                       details={this.state.fishes[key]} 
                       addToOrder={this.addToOrder} /> )}
                    </ul>
                </div>
                <Order 
                    fishes={this.state.fishes} 
                    order={this.state.order} 
                    removeFromOrder={this.removeFromOrder} 
                    />
                <Inventory 
                    addFish={this.addFish} 
                    updateFish={this.updateFish} 
                    deleteFish={this.deleteFish} 
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                    storeID={this.props.match.params.storeID}
                />
            </div>
        )
    }
}

export default App;