import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from '../../store/slices/counter';

export default function CounterApp() {
    const countValue = useSelector((state)=>state?.counterApp.value);
    const appName = useSelector((state)=> state?.counterApp?.appName)
    const dispatch = useDispatch();

    const incre = ()=> {
        // window.alert(JSON.stringify(countValue))
        dispatch(increament(10))
    };
    const decre = ()=> {
        dispatch(decreament(10))
    };

    return (
    <div>
        <h2>{appName}</h2>
        <p>counter value: {countValue}</p>
        <div style={{display:'flex', flexFlow:'column', justifyContent:'center', alignItems:'center', gap:'14px'}}>
            <button type="button" onClick={incre} style={{cursor:'pointer', borderRadius:'6px', border:'2px solid gray', backgroundColor:'#000', color:'#fff'}}>Increament By 10</button>
            <button type="button" onClick={decre} style={{cursor:'pointer', borderRadius:'6px', border:'2px solid gray', backgroundColor:'#000', color:'#fff'}}>Decreament By 10</button>
        </div>
    </div>
  )
}
