import React from 'react';
import BurgerIngredeint from '../Burger/BurgerIngredient/BurgerIngredient';
import './Burger.scss';

const Burger = (props) => {

    const createBurger =
        Object.keys(props.ingredients).map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_,index) => {
                return <BurgerIngredeint
                    key={ingredientKey + index}
                    type={ingredientKey}
                />
            });
        });

    const tp = props.ingredients.keys;

    return (
        <div className="burger">
            <BurgerIngredeint type='bread-top' />
            {createBurger}
            <BurgerIngredeint type='bread-bottom' />
        </div>
    );

}

export default Burger;