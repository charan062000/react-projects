import { useState } from "react";
import data from "./data";

export default function Accordian(){
    const[selected,setSelected]=useState(null);
    const [enableMultiSecltion,setEnableMultiSelection]=useState(false);
    const[multiple,setMultiple]=useState([]);

    
    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId===selected?null:getCurrentId);
    }
    function handleMultiSelection(getCurrentId){
      let cpyMutiple = [...multiple];
      const findIndexOfCurrentId=cpyMutiple.indexOf(getCurrentId);
      console.log(findIndexOfCurrentId);
      if(findIndexOfCurrentId===-1)cpyMutiple.push(getCurrentId)
        else cpyMutiple.splice(findIndexOfCurrentId,1)
    setMultiple(cpyMutiple);
    }
console.log(multiple);

    return(
        <div className="Wrapper flex flex-col h-100 w-100 justify-center items-center">
        <button onClick={()=>setEnableMultiSelection(!enableMultiSecltion)} 
        className="border-black mb-[20px]">Enable Multi Selection</button>
       <div className="accordian w-[500px]">
         {
            data&&data.length>0?
            data.map(dataItem=><div key={dataItem.id} className=" item bg-amber-700 mb-[10px] px-[10px] py-[20px]">
                <div  onClick={enableMultiSecltion?()=>handleMultiSelection(dataItem.id):()=>handleSingleSelection(dataItem.id)} className="title text-white flex justify-between items-center cursor-pointer ">
                    <h3 className=" h-auto">{dataItem.question}</h3>
                    <span>{selected===dataItem.id?"x":"+"}</span>
                </div>
                <div>{
                    enableMultiSecltion?multiple.indexOf(dataItem.id)!==-1&&
                    <div>{dataItem.answer}</div>:
                        selected===dataItem.id? <div className="font-semibold text-black">{dataItem.answer}</div>:null
                        }
                    </div>
            </div>):<div>No Data</div>
        }
       </div>

    </div>
    )
    
}