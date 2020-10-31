import React from 'react';
import Burger from '../../components/Burger/Burger';
import './BurgerBuilder.scss';

class BurgerBuilder extends React.Component {

    constructor() {
        super();
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 2,
                meat: 2,
            },
        }
    }

    render() {

        return (
            <div className="burger-builder">
                <Burger 
                    ingredients = {this.state.ingredients}
                />
            </div>

        );
    }

}

export default BurgerBuilder;