import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = (fish) =>{
        // 1. copy existing state
        const fishes = {...this.state.fishes}
        // 2. add new fish to new fishes var
        fishes[`fish${Date.now()}`] = fish;
        // 3. set new fishes object to state
        this.setState({fishes: fishes});
    };
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        )
    }
}

export default App;