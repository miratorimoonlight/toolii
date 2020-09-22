import React from 'react'
import marked from 'marked'
import '../styles/mdpreviewer/mdpreviewer.css'


class MDPreviewer extends React.Component {
    state = {
        inputText: "#### Hello World"
    }

    handleInput = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    render() {
        return (
            <div className="mdpreviewer-container">
                <h1>Mardown Previewer</h1>
                <Editor 
                    handleInput = {this.handleInput}
                    inputText = {this.state.inputText}/>
                <Previewer 
                    inputText = {this.state.inputText}/>
            </div>
        )
    }
}


function Editor(props) {
    return (
        <div className="editor-container">
            <h3>Editor</h3>
            <hr />
            <textarea type="text" onChange={props.handleInput} value={props.inputText}/>
        </div>
    )
}

marked.setOptions({
    breaks: true
})

function Previewer(props) {
    
    return (
        <div className="editor-container">
            <h3>Previewer</h3>
            <hr />
            <div id="previewer" dangerouslySetInnerHTML={{__html: marked(props.inputText)}} />                
        </div>
    )
}



export default MDPreviewer