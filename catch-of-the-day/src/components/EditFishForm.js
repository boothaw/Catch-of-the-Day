import React from 'react';
import AddFishForm from './AddFishForm';

class EditFishForm extends React.Component {
    handleChange = (event) =>{
        console.log(event);
    // 1.copy current fish
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish)
    };

    render (){
        return (
            <div className="fish-edit">
                <input name="name" onChange={this.handleChange} value={this.props.fish.name} type="text" ></input>
                <input name="price" onChange={this.handleChange} value={this.props.fish.price} type="text"></input>
                <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
                <input name="image" onChange={this.handleChange} value={this.props.fish.image} type="text"></input>
                <button onClick={()=> this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFishForm;