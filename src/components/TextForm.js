import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleEmailClick = ()=>{
        let newText = text.split('@')
        setText(newText[1])
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
                    <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "light"?"white":"#042743" , color: props.mode === "dark"?"white":"black"}} id='myBox' rows="8"></textarea>
                </div>   
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>     
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>     
                <button className="btn btn-primary mx-2" onClick={handleEmailClick}>extract name form email</button>     
            </div>
            <div className="container my-3"style={{color: props.mode === "dark"?"white":"black"}}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>takes {0.008 * text.split(' ').length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>

        </>
    )
}
