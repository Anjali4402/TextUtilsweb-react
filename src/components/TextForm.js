import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.upperAlert('uppercase has been done','success');
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.upperAlert('lowerCase has been done','success');
    }
    const handleClearText = ()=>{
        let newText = " ";
        setText(newText);
        props.upperAlert('Text is clear','success');
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    const [text,setText] = useState('')
    return (
        <>
            <div className="container " style={{color: props.mode === "dark"?"white":"black"}}>
                <h1>{props.heading}</h1>
                <div className='mb-3'>                 
                    <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "light"?"white":"gray" , color: props.mode === "dark"?"white":"black"}} id='myBox' rows="8"></textarea>
                </div>   
                <button className="btn btn-primary mx-2" onClick={handleUpClick} style={{backgroundColor:props.oldColor}}>Convert to uppercase</button>     
                <button className="btn btn-primary mx-2" onClick={handleLoClick} style={{backgroundColor:props.oldColor}}>Convert to lowercase</button>     
                <button className="btn btn-primary mx-2" onClick={handleClearText} style={{backgroundColor:props.oldColor}}>Clear Text</button>     
            </div>
            <div className="container my-3"style={{color: props.mode === "dark"?"white":"black"}}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').length-1} words and {text.length} characters</p>
                <p>takes {0.008 * text.split(' ').length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>

        </>
    )
}
