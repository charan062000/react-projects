import { useEffect, useState } from "react"

export default function RandomColorgenerator(){
    const[typeOfColor,setTypeOfColor]=useState("hex");
   const[color,setColor]=useState("#000000");


   function randomColorUtility(length){
    return Math.floor(Math.random()*length)
   }

   function handleCreateRandomHexColor(){

    const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hexColor="#";

    for (let i=0;i<6;i++){
        hexColor+=hex[randomColorUtility(hex.length)]
    }
    console.log(hexColor)
    setColor(hexColor)
   }
   function handleCreateRandomRgbColor(){
    const r=randomColorUtility(256);
    const b=randomColorUtility(256);
    const g=randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`)
   }
   useEffect(()=>{
    if(typeOfColor==="rgb") handleCreateRandomRgbColor()
        else handleCreateRandomHexColor();
   },[typeOfColor])
    return(
        <div style={{
            background:color,
            height:"100wh",
            width:"100vw"

        }}>
           <div className="flex gap-5 justify-center ">
             <button className="px-[10px] py-[10px] border rounded-xl mb-[20px] mt-[10px] hover:border-blue-500 hover:scale-110 bg-white" onClick={()=>setTypeOfColor("hex")}>Create Hex color</button>
            <button className="px-[10px] py-[10px] border rounded-xl mb-[20px] mt-[10px] hover:border-blue-500 hover:scale-110 bg-white" onClick={()=>setTypeOfColor("rgb")}>Create RGB color</button>
            <button className="px-[10px] py-[10px] border rounded-xl mb-[20px] mt-[10px] hover:border-blue-500 hover:scale-110 bg-white semi-bold" onClick=
            {typeOfColor==="hex"?handleCreateRandomHexColor:handleCreateRandomRgbColor}>
                Create random color</button>
           </div>
                <div
                style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    color:"white",
                    fontSize:"30px",
                    marginTop:"50px"
                }}>
                    <h3>{typeOfColor==="rgb"?'RGB Color':"HEX Color"}</h3>
                    <h1>{color}</h1>
                </div>
        </div>
    )
}