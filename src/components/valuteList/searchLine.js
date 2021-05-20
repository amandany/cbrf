import React from 'react';
import styles from './searchLine.module.css';
import {connect} from "react-redux";
import {setNewMainValute, searchData} from "../../redux/action";

const SearchLine = ({searchData, changeMainValute, setNewMainValute}) => {

    const Target = (el) => {
        const term = el.target.value;
        searchData(term);
    }

    return (
        <div className={styles.container}>
            <input className="form-control" list="datalistOptions" id="exampleDataList"
                   placeholder="Введите наименование валюты или ее код..."
                   onChange={(e) => {
                       Target(e)
                   }}
            />
            <button className="btn btn-secondary text-nowrap"
                    onClick={() => {
                        setNewMainValute(!changeMainValute)
                    }}>Смена основной валюты
            </button>
            <datalist id="datalistOptions">
                <option value="USD"/>
                <option value="EUR"/>
                <option value="CAD"/>
                <option value="UAH"/>
                <option value="JPY"/>
            </datalist>
        </div>
    )
}

const mapStateToProps = ({search, changeMainValute}) => {
    return {search, changeMainValute}
}

const mapDispatchToProps = {
    searchData,
    setNewMainValute
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchLine);