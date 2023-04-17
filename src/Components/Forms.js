import React, {useState} from "react";
export default function Forms(props){
    const handClick=()=>{
      // setText("lets type here");
      let up=text.toUpperCase();
      setText(up);

    }
    const handoncopy=()=>{
     let text= document.getElementById('textarea');
     text.select();
     navigator.clipboard.writeText(text.value);


    }
    const handonClick=()=>{
      // setText("lets type here");
      let up=text.toLowerCase();
      setText(up);

    }
    const handleChange=(event)=>{
      setText(event.target.value);

    }
    const [text,setText]=useState("enter your text")

    return(
        <>
       
<div className="mb-3"  style={{ color :props.mode==='dark'?'white':'black' }}>
 <h1>{props.title}</h1>
  <textarea className="form-control" style={{ backgroundColor :props.mode==='dark'?'grey':'white', color :props.mode==='dark'?'white':'black' }}  onChange={handleChange} value={text} id="textarea" rows="10"></textarea>
  <button className="btn btn-primary mx-1 my-1" onClick={handClick}>Uppercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handonClick}>LowerCase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handoncopy}>CopyContent</button>


</div>
<div className="container my-3"  style={{ color :props.mode==='dark'?'white':'black' }}>
  <h1>Text Summary</h1>
  <p>words={text.split(/\s/).filter((element)=>{return element.length!==0}).length} No Of Text={text.length}</p>
  <h3>PREVIEW YOUR TEXT</h3>
  <p>{text.length>0?text:"Enter Something To Have Your Text Preview"}</p>
</div>
   
  </>
    )
}
    