import React from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.scss';

class BurgerIngredient extends React.Component {

    constructor() {
        super();
        this.ingredient = null;
        this.getIngredient = this.getIngredient.bind(this);
    }

    getIngredient() {
        switch (this.props.type) {
            case 'bread-top':
                this.ingredient = (
                    <div className="bread-top">
                        <div className="seeds1"></div>
                        <div className="seeds2"></div>
                    </div>
                )
                break;
            case 'bread-bottom':
                this.ingredient = <div className="bread-bottom"></div>
                break;
            case 'meat':
                this.ingredient = <div className="meat"></div>
                break;
            case 'salad':
                this.ingredient = <div className="salad"></div>
                break;
            case 'bacon':
                this.ingredient = <div className="bacon"></div>
                break;
            case 'cheese':
                this.ingredient = <div className="cheese"></div>
                break;
            default:
                this.ingredient = null;
                break;
        }
        return this.ingredient;
    }

    render() {
        return (
            this.getIngredient()
        );
    }

};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
}

export default BurgerIngredient;