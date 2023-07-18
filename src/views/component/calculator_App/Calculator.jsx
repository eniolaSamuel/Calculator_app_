import React from "react";
import "../../../../../calculator_app/src/styles/component/calculator_App/calculator_App.css"

class Calculator extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            displayValue : "0",
            expression: "" ,
            showSciCalculator: false
        };
    }

    handleNumberClick = (number) => {
        const { displayValue } = this.state;
        let newDisplayValue = displayValue === "0" ? "" : displayValue;
        newDisplayValue += number;
        this.setState({ displayValue: newDisplayValue });
    };


    handleDecimalClick = () => {
        const { displayValue } = this.state;
        if (!displayValue.includes(".")) {
            this.setState({ displayValue: displayValue + "." });
        }
    };

    handleOperatorClick = (operator) => {
        const { displayValue, expression } = this.state;
        this.setState({
            expression: expression + displayValue + operator,
            displayValue: "0",
        });
    };

    handleEqualsClick = () => {
        const { expression, displayValue } = this.state;
        const newExpression = expression + displayValue;
        const result = eval(newExpression);
        this.setState({ displayValue: result.toString(), expression: "" });
    };

    handleClearClick = () => {
        this.setState({ displayValue: "0", expression: "" });
    };

    handleScientificCalc = () => {
        this.setState((prevState) => ({
            showSciCalculator: !prevState.showSciCalculator,
        }));
    };

    handleSquareRoot = () => {
        const { displayValue } = this.state;
        const number = parseFloat(displayValue);
        const result = Math.sqrt(number);
        this.setState({
            displayValue: String(result),
        });
    };

    handleSin = () => {
        const { displayValue } = this.state;
        const number = parseFloat(displayValue);
        const result = Math.sin(number);
        this.setState({
            displayValue: String(result),
        });
    };

    handleCos = () => {
        const { displayValue } = this.state;
        const number = parseFloat(displayValue);
        const result = Math.cos(number);
        this.setState({
            displayValue: String(result),
        });
    };

    handleTan = () => {
        const { displayValue } = this.state;
        const number = parseFloat(displayValue);
        const result = Math.tan(number);
        this.setState({
            displayValue: String(result),
        });
    };

    handlePowerRaisedToTwo = () => {
        const { displayValue } = this.state;
        const number = parseFloat(displayValue);
        const result = Math.pow(number, 2);
        this.setState({
            displayValue: String(result),
        });
    };

    handlePowerRaisedToThree = () => {
        const { displayValue } = this.state;
        const number = parseFloat(displayValue);
        const result = Math.pow(number, 3);
        this.setState({
            displayValue: String(result),
        });
    };


    handleLog = () => {
        const { displayValue } = this.state;
        const number = parseFloat(displayValue);
        const result = Math.log10(number);
        this.setState({
            displayValue: String(result),
        });
    };

    handlePi = () => {
        this.setState({
            displayValue: String(Math.PI),
        });
    };

    render() {
        const {displayValue, showSciCalculator} = this.state
        return(
            <>
                {showSciCalculator ? (
                <div className="Main-sci-calc-frame">
                    <div className="sci_grey_border">
                        <div className="sci_black_background">
                            <div className="sci_inner_black_background">
                                <div className="display">
                                    {displayValue}
                                </div>
                                <div className="full-state">
                                    <div className="sci-controllers">
                                        <div className="operators">
                                            <div className="box"><button id="button-C" onClick={() => this.handleClearClick("0")}>c</button></div>
                                            <div className="box-operator"><button onClick={() => this.handleOperatorClick("*")}>x</button></div>
                                            <div className="box-operator"><button onClick={() => this.handleOperatorClick("-")}>-</button></div>
                                            <div className="box-operator"><button onClick={() => this.handleOperatorClick("+")}>+</button></div>
                                            <div className="box-operator"><button onClick={() => this.handleOperatorClick("/")}>/</button></div>
                                        </div>
                                        <div className="digits_row_1">
                                            <div className="box"><button onClick={() => this.handleNumberClick("1")}>1</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("2")}>2</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("3")}>3</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("4")}>4</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("5")}>5</button></div>
                                        </div>
                                        <div  className="digits_row_2">
                                            <div className="box"><button onClick={() => this.handleNumberClick("6")}>6</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("7")}>7</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("8")}>8</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("9")}>9</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("0")}>0</button></div>
                                        </div>
                                        <div className="sci-operators">
                                            <div>
                                                <div className="sci-row-1">
                                                    <div className="box"><button onClick={this.handleTan} value='tan'>tan</button></div>
                                                    <div className="box"><button onClick={this.handleCos} value='cos'>cos</button></div>
                                                    <div className="box"><button onClick={this.handleSin} value='sin'>sin</button></div>
                                                    <div className="box"><button onClick={this.handleSquareRoot} value='sqrt'>√</button></div>
                                                </div>
                                                <div className="sci-row-2">
                                                    <div className="box"><button onClick={this.handlePowerRaisedToTwo} value='x^2'>x^2</button></div>
                                                    <div className="box"><button onClick={this.handlePowerRaisedToThree} value='x^3'>x^3</button></div>
                                                    <div className="box"><button onClick={this.handleOperatorClick} value='%'>%</button></div>
                                                    <div className="box"><button onClick={this.handlePi} value='PI'>π</button></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="box"><button id="log-button" onClick={this.handleLog} value='log10'>log</button></div>
                                            </div>
                                        </div>
                                        <div className="assignments">
                                            <div className="box"><button id="button-sci" onClick={this.handleScientificCalc}>reg</button></div>
                                            <div className="box-equals"><button id="button-equals" onClick={this.handleEqualsClick}>=</button></div>
                                            <div className="box"><button onClick={this.handleDecimalClick}>.</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="Main-reg-calc-frame">
                    <div className="grey_border">
                        <div className="black_background">
                            <div className="inner_black_background">
                                <div className="display">
                                    {displayValue}
                                </div>
                                <div className="full-state">
                                    <div className="reg-controllers">
                                        <div className="operators">
                                            <div className="box"><button id="button-C" onClick={() => this.handleClearClick("0")}>c</button></div>
                                            <div className="box-operator"><button onClick={() => this.handleOperatorClick("*")}>x</button></div>
                                            <div className="box-operator"><button onClick={() => this.handleOperatorClick("-")}>-</button></div>
                                            <div className="box-operator"><button onClick={() => this.handleOperatorClick("+")}>+</button></div>
                                            <div className="box-operator"><button onClick={() => this.handleOperatorClick("/")}>/</button></div>
                                        </div>
                                        <div className="digits_row_1">
                                            <div className="box"><button onClick={() => this.handleNumberClick("1")}>1</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("2")}>2</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("3")}>3</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("4")}>4</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("5")}>5</button></div>
                                        </div>
                                        <div  className="digits_row_2">
                                            <div className="box"><button onClick={() => this.handleNumberClick("6")}>6</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("7")}>7</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("8")}>8</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("9")}>9</button></div>
                                            <div className="box"><button onClick={() => this.handleNumberClick("0")}>0</button></div>
                                        </div>
                                        <div className="assignments">
                                            <div className="box"><button id="button-sci" onClick={this.handleScientificCalc}>sci</button></div>
                                            <div className="box-equals"><button id="button-equals" onClick={this.handleEqualsClick}>=</button></div>
                                            <div className="box"><button onClick={this.handleDecimalClick}>.</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </>
        )
    }
}

export default Calculator;
