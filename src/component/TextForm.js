import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('')

    const handleOnChange = (e) => {
        setText(e.target.value)
        console.log(e.target.value)
    }
    const handleUpClick = () => {
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to uppercase','success')

    }
    const handleLoClick = () => {
        const newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to lowercase','success')


    }

    const handleCopy = () =>{
        var text = document.getElementById('myBox');
        text.select();
        // text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert('Copy to clipboard','success')

    }

    const handleExSpaces =() => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Removed extra spaces','success')

    }

    const ClearText =() => {
        setText('')
        props.showAlert('Clear Text','success')

    }
    return (
        <>
            <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#13466e' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'}} value={text} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} onClick={handleUpClick} className='btn btn-primary mx-2 my-1'>Convert to Uppercase</button>
                <button disabled={text.length === 0} onClick={handleLoClick} className='btn btn-primary mx-2 my-1'>Convert to Lowercase</button>
                <button disabled={text.length === 0} onClick={ClearText} className='btn btn-primary mx-2 my-1'>ClearText</button>
                <button disabled={text.length === 0} onClick={handleCopy} className='btn btn-primary mx-2 my-1'>Copy Text</button>
                <button disabled={text.length === 0} onClick={handleExSpaces} className='btn btn-primary mx-1'>Remove Exta Spaces</button>
            </div>
            <div className="container my-2" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length }Minutes read</p>
                <h3>Preview</h3>
                {/* below three condition is same only syntax different */}
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
                {/* <p>{text ?  text : "Enter somthing in the textbox above to preview it here"}</p> */}
                {/* <p>{text === "" ? "Enter somthing in the textbox above to preview it here" : text }</p> */}
            </div>
        </>
    )
}

export default TextForm