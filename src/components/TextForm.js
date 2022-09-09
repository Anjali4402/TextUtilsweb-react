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
            <div className="container">
                <h1>{props.heading}</h1>
                <div className='mb-3'>                 
                    <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows="8"></textarea>
                </div>   
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>     
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>     
                <button className="btn btn-primary mx-2" onClick={handleEmailClick}>extract name form email</button>     
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>takes {0.008 * text.split(' ').length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
