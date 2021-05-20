import React from "react";
import {connect} from "react-redux";
import Card from "./card";
import './searchResult.css';

const SortData = ({search, currencyData, changeMainValute}) => {

    const result = Object.assign({}, Object.values(currencyData.Valute)
        .filter((x) => {
            return (x.CharCode.toLowerCase().indexOf(search.toLowerCase()) > -1)
                ||
                (x.Name.toLowerCase().indexOf(search.toLowerCase()) > -1)
        }));
    return (
        <ul className="listValute">
            {
                Object.values(result).map((item) => {
                    return (
                        <Card key={item.ID} item={item} changeMainValute={changeMainValute}/>
                    )
                })
            }
        </ul>
    )
}

const mapStateToProps = ({search, currencyData, changeMainValute}) => {
    return {search, currencyData, changeMainValute}
}

export default connect(mapStateToProps)(SortData);