import React from'react';
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
    myInput = React.createRef();

    // below: property just like myinput - set to arrow funciton - allows binding of this to storpicker
    goToStore = event =>  { 
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`)
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store</button>
            </form>
        ) 
    }
}

export default StorePicker;