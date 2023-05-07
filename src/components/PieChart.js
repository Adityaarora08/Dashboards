import React, { useEffect, useState }  from "react";
import { Chart } from "react-google-charts";
import fireDb from '../firebase.js';
import '../styles/PieChart.css';

export const options = {
    legend: "",
    pieSliceText: "none",
    title: "",
    pieStartAngle: 180,
    slices: [{color: '#98D89E'}, {color: '#EE8484'}, {color: '#F6DC7D'}],
    height: 170,
    height_units:'%',
    // chartArea: {top:0, left:0, height:'70%', width:'70%'}
  };
 export function PieChart() {
  let [data,setData] =useState([]);

  useEffect(()=>{
    fireDb.child("topProducts").on("value",(snapshot)=>{
      if(snapshot.val()!==null){
        setData({...snapshot.val()});
      }else{
        setData({});
      }
    });
    return ()=>{
      setData({});
    };
  },[]);
  const datt=[];
  Object.keys(data).map((p)=>{
   datt.push(data[p]);
  });
  console.log(datt);
  return (
   <>
   <div className="chartt">
   <div style={{display: "flex",marginLeft:"2vw",marginRight:"2vw"}} >
   <h3>Top Products</h3>
   <select >
   <option >
        <p >May-June, 2021</p>
    </option>
    <option >
        <p >June-July, 2021</p>
    </option>
   </select>
   </div>
    <Chart
      chartType="PieChart"
      data={datt}
      options={options}
      
    />
   </div>
   </>
  );
}
