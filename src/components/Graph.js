import React, { useEffect, useState }  from "react";
import { Chart } from "react-google-charts";
import fireDb from '../firebase.js';

export const options = {
  title: "",
  curveType: "function",
  legend: { position: "top-right" },
};
export function Graph() {
  let [data,setData] =useState([]);

  useEffect(()=>{
    fireDb.child("activities").on("value",(snapshot)=>{
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
   <div style={{borderRadius: "20px",width:"69vw", borderRadius:"20px", paddingBottom:"10px",paddingLeft:"20px",paddingTop:"10px",backgroundColor:"white", marginTop:"3vh"}}>
    <div style={{display:"block"}}>
    <h3 style={{marginLeft:"1vw"}}>Activites</h3>
    <select style={{border:0, color:"grey" , marginTop:"-15px",marginLeft:"1vw", position:"absolute"}}>
    <option  >
         <p >May-June, 2021</p>
     </option>
    </select>
    </div>
    <Chart
      chartType="LineChart"
      width="68vw"
      height="26vh"
      data={datt}
      options={options}
    />
   </div>
  );
}
