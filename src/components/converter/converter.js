import React, {useState} from "react";
import styles from './converter.module.css';
import {connect} from "react-redux";
import CallData from "../service/callData";
import {getData, changeConverter, switchConverter} from "../../redux/action";
import Recalculate from "./recalculate";

const Converter = ({loading, getData, converter, currencyData, changeConverter, switchConverter}) => {

    const [valueConvert, setValueConvert] = useState('')

    if (loading) return (<CallData getData={getData}/>)

    if (!loading) {
        return (
            <div className={styles.converterBox}>

                <div className={styles.container}>

                    <p>{converter[0].Name}</p>

                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-primary dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            {converter[0].CharCode}
                        </button>
                        <ul className="dropdown-menu" style={{ height: "400px", overflowX: "hidden" , overflowY: "scroll"}}>
                            {
                                Object.values(currencyData.Valute).map((item) => {
                                    return (
                                        <li key={item.ID}>
                                            <button className="dropdown-item"
                                                    onClick={() => Recalculate(item, 'left', changeConverter)}>
                                                    {item.CharCode}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <input type="number" placeholder="10" name="currency"
                           className={styles.changerValute}
                           onChange={(event) => {setValueConvert(event.target.value)}}
                    />
                </div>

                <div>
                    <button className={styles.btn} onClick={switchConverter}> ⇿ </button>
                </div>

                <div className={styles.container}>
                    <p>{converter[1].Name}</p>

                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-primary dropdown-toggle"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            {converter[1].CharCode}
                        </button>
                        <ul className="dropdown-menu" style={{ height: "400px", overflowX: "hidden" , overflowY: "scroll"}}>
                            {
                                Object.values(currencyData.Valute).map((item) => {
                                    return (
                                        <li key={item.ID}>
                                            <button className="dropdown-item"
                                                    onClick={() => Recalculate(item, 'right', changeConverter)}>
                                                    {item.CharCode}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <input type="number" placeholder="10" name="currency"
                           value={ ((converter[0].Value * valueConvert) / converter[1].Value).toFixed(4) }
                           className={styles.changerValute} disabled
                    />
                </div>
            </div>
        )
    }

}

const mapStateToProps = ({search, loading, converter, currencyData}) => {
    return {search, loading, converter, currencyData}
}

const mapDispatchToProps = {
    getData,
    changeConverter,
    switchConverter
}

export default connect(mapStateToProps, mapDispatchToProps)(Converter)