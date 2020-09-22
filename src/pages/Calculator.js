import React from 'react';
import {evaluate} from 'mathjs';
import '../styles/calculator/calculator.css';

const operatorRegex = /[+\-*/]/;
const endsWithOperator = /[+\-*/]+$/;
const endsWithNegativePattern = /[+\-*/]-$/;


class Calculator extends React.Component {
    state = {
        currentValueDisplay: "0",
        latestChar: "",
        formula: String.fromCharCode(160),
        prevAnswer: "",
        evaluated: false,
    }

    handleOperand = (event) => {
        let value = event.target.value;
        let {currentValueDisplay, prevAnswer, evaluated} = this.state;

        if(evaluated) {
            if(operatorRegex.test(value)){
                this.setState({
                    currentValueDisplay: value,
                    latestChar: value,
                    formula: prevAnswer + value,
                    evaluated: false
                })
            }
        }

        else if (currentValueDisplay === '0' || operatorRegex.test(value) || operatorRegex.test(currentValueDisplay)) {
            this.setState({
                currentValueDisplay: value,
                latestChar: value
            },
            () => {this.handleFormula()})
        }

        else {
            this.setState ({
                currentValueDisplay: currentValueDisplay + value,
                latestChar: value
            },
            () => {this.handleFormula()})
        }
    }

    handleDecimal = () => {
        let {currentValueDisplay, evaluated} = this.state;

        if (currentValueDisplay === "0" || operatorRegex.test(currentValueDisplay)) {
            this.setState({
                currentValueDisplay: "0.",
                latestChar: "."
            },
            () => {this.handleFormula()})
        }

        else if (currentValueDisplay.indexOf(".") > -1 || evaluated) {
            return
        }

        else {
            this.setState({
                currentValueDisplay: currentValueDisplay + ".",
                latestChar: "."
            },
            () => {this.handleFormula()})
        }
    }

    handleFormula = () => {
        let {formula, latestChar} = this.state;

        if(formula === String.fromCharCode(160)) {
            if (latestChar === "0") {
                return
            }

            else if (operatorRegex.test(latestChar) || latestChar === ".") {
                this.setState({
                    formula: "0" + latestChar
                })
            }

            else {
                this.setState({
                    formula: latestChar
                })
            }
        }

        else if (endsWithOperator.test(formula)) {
            if (!endsWithNegativePattern.test(formula) && latestChar === "-") {
                this.setState({
                    formula: formula + latestChar
                })
            }

            else if (operatorRegex.test(latestChar)) {
                this.setState({
                    formula: formula.replace(endsWithOperator, latestChar)
                })
            }

            else if (latestChar === ".") {
                this.setState({
                    formula: formula + "0."
                })
            }

            else {
                this.setState({
                    formula: formula + latestChar
                })
            }
        }

        else {
            this.setState({
                formula: formula + latestChar
            })
        }
    }

    handleEvaluate = () => {
        // clear operator at the end of the formula
        let {formula} = this.state
        let parsedFormula = formula.replace(/[+\-*/.]+$/, "");
        let answer;
        
        try {
            answer = evaluate(parsedFormula).toString();
        }
        catch (error) {
            return
        }
           
    
        this.setState({
            currentValueDisplay: answer,
            formula: formula + "=",
            prevAnswer: answer,
            evaluated: true
        })
    }

    clear = () => {
        this.setState({
            currentValueDisplay: "0",
            latestChar: "",
            formula: String.fromCharCode(160),
            prevAnswer: "",
            evaluated: false,
        })
    }

    render() {
        let {currentValueDisplay, formula} = this.state;
        return (
            <div className="calculator">
                <Display 
                    currentValueDisplay = {currentValueDisplay}
                    formula = {formula}/>

                <Buttons 
                    handleOperand = {this.handleOperand}
                    handleDecimal = {this.handleDecimal}
                    handleEvaluate = {this.handleEvaluate}
                    clear = {this.clear}/>
                
            </div>
        )
    }
}

const Display = (props) => { 
    return (
        <div className="display-container">
        <div className="small-display">{props.formula}</div>
        <div id="display" className="big-display">{props.currentValueDisplay}</div>
        </div>
    )
}

const Buttons = (props) => {
    return (
        <div id="button-container">
            <button id="clear" className="double-btn" onClick = {props.clear} >
                Clear
            </button>
            <button id="add" onClick = {props.handleOperand} value="+">
                +
            </button>
            <button id="subtract" onClick = {props.handleOperand} value="-">
                -
            </button>
            <button id="seven" onClick = {props.handleOperand} value="7">
                7
            </button>
            <button id="eight" onClick = {props.handleOperand} value="8">
                8
            </button>
            <button id="nine" onClick = {props.handleOperand} value="9">
                9
            </button>
            <button id="multiply" onClick = {props.handleOperand} value="*">
                x
            </button>
            <button id="four" onClick = {props.handleOperand} value="4">
                4
            </button>
            <button id="five" onClick = {props.handleOperand} value="5">
                5
            </button>
            <button id="six" onClick = {props.handleOperand} value="6">
                6
            </button>
            <button id="divide" onClick = {props.handleOperand} value="/">
                /
            </button>
            <button id="one" onClick = {props.handleOperand} value="1">
                1
            </button>
            <button id="two" onClick = {props.handleOperand} value="2">
                2
            </button>
            <button id="three" onClick = {props.handleOperand} value="3">
                3
            </button>
            <button id="decimal" onClick = {props.handleDecimal}>
                .
            </button>
            <button id="zero" className="double-btn" onClick = {props.handleOperand} value="0">
                0
            </button>
            <button id="equals" className="double-btn" onClick = {props.handleEvaluate}>
                =
            </button>
        </div>
    )    
}

export default Calculator