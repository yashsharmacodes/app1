import React ,{useState}from 'react'



export default function TextForm(props) {

    const Firing=()=>{
        console.log("fired" );
        setText(text.toUpperCase());
    }

    const OnchangeH=(event)=>{
        console.log("onchange");
        setText(event.target.value);
    }

    const LCase=()=>{
      setText(text.toLowerCase());
    }
    
    const UCasechar=()=>{
      let newtext="";
      let arrm=text.split(" ")
      console.log(arrm)
      for(let i=0;i<text.split(" ").length;i++){
        let up = arrm[i].charAt(0).toUpperCase() + arrm[i].slice(1);
       // console.log(up);
      newtext=newtext + " "+ up;
      }
     setText(newtext);
    }


    const[text,setText]=useState('Enter Text here ');
  return (
    <>
    <div>
    <h1> {props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"  value={text}    onChange={OnchangeH}   id="exampleFormControlTextarea1" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-3"  onClick={Firing}> Convert to Uppercase</button>
<button className="btn btn-primary mx-3"  onClick={LCase}> Convert to Lowercase</button>
<button className="btn btn-primary mx-3"  onClick={UCasechar}> Convert capital</button>



    </div>

<div className="container my3">
    <h1>Counting the no. of characters and words </h1>
    <p> {text.length} no. of characters </p>
    <p>{text.split(" ").length-1}   no. of words</p>
</div>



</>

  )
}
