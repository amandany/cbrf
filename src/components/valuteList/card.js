import React from 'react';
import styles from './card.module.css';

const Card = (props) => {
    const {CharCode, Nominal, Name, Value, Previous} = props.item;
    const {changeMainValute = false} = props;
    const difference = (Value - Previous).toFixed(4);
    const changingValute = (Nominal / Value).toFixed(4);
    return (
        <li className={styles.card}>
            <p> {Name} </p>
            <div>
                {
                    (changeMainValute === false) ?
                        <h1> {Nominal} {CharCode} <span> ⟷ </span> {Value} RUB </h1>
                        :
                        <h1> {changingValute} {CharCode} <span> ⟷ </span> 1 RUB</h1>
                }
                {difference > 0 ?
                    <h2 style={{color: "green"}}> ▲ {difference} </h2>
                    :
                    <h2 style={{color: "red"}}> ▼ {difference} </h2>
                }
            </div>
        </li>
    )
}

export default Card;