import React from 'react'
import './counter.css';

export class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startCount: 10,
            count: 0
        }
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        if(this.state.count < 10) {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }));
        }else{
            clearInterval(this.timerID);
        }
    }

    componentWillUmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
        <div className="counter-wrapper">
            <div className="counter">
                <div className="counter__item">
                    <h4 className="counter__item-title">{this.props.countersTitile[1]}</h4>
                    <div className="counter__item-count">{this.state.count}</div>
                </div>
                <div className="counter__item">
                    <h4 className="counter__item-title">{this.props.countersTitile[2]}</h4>
                    <div className="counter__item-count">{this.state.count + this.state.startCount}</div>
                </div>
            </div>
        </div>
        );
      }
}
