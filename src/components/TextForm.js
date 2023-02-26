import React,{useState} from 'react'





export default function TextForm(props) {
    const handleUpClick=()=>{
  console.log("button was clicked")
  let newtext = text.toUpperCase();
  setText(newtext)
  props.showAlert("Converted to Upper Case","success")
    }
    const handleLoClick=()=>{
        console.log("button was clicked")
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to LowerCase","success")
          }
          const handleClearClick=()=>{
            console.log("button was clicked")
            let newtext = " ";
            setText(newtext)
            props.showAlert("Text Cleared","success")
              }


        const handleExtraSpaces = ()=>{
                let words = text.split(' ');
                let joinedWords = '';
                // console.log(words);
                words.forEach((elem)=>{
                    if(elem[0] != undefined){
                        joinedWords += elem + " ";
                        console.log(joinedWords);
                    }
                })
                setText(joinedWords);
                props.showAlert("Removed Extra Spaces","success")
            }
    const handleOnChange=(event)=>{
        console.log('onchange')
        setText(event.target.value)
    }
        
    const [text,setText]= useState('Enter Text ')
 
  return (<>
<div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
<div className="mb-4">

<textarea className="form-control"  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2"  onClick={handleUpClick}  > Convert to UpperCase</button>
<button className="btn btn-primary mx-2"  onClick={handleLoClick} > Convert to LowerCase</button>
<button className="btn btn-primary mx-2"  onClick={handleClearClick} >Clear Text</button>
<button className="btn btn-primary mx-2"  onClick={handleExtraSpaces} >Remove Extra Space</button>

    </div>
    <div className="container my-3"   style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to preview it here"}</p>

    </div>
    </>
  )
}
