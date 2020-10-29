import React from "react";
import {useDispatch, useSelector} from "react-redux";

export default function AppRedux() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash)

    const AddCash = (cash) => {
        dispatch({type:'ADD_CASH',payload: cash})
    }

    const GetCash = (cash) => {
        dispatch({type:"GET_CASH",payload: cash})
    }

    return (
        <div>
            <div>{cash}</div>
            <div style={{display:'flex'}}>
                <button onClick={() => AddCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => GetCash(Number(prompt()))}>Снять со счета</button>
            </div>
        </div>
    )
}