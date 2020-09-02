import React, {Component} from 'react';
import HighScore from './HighScore';
import './css/style.css'

class Application extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            over10: false
            
        }
    }

    handleClick = () => {
        // console.log('Click');
        // console.log(this.state)
        this.setState({count: this.state.count + 1})
    }
    
    componentDidUpdate(props, state){
        console.log('OldState = ', state , ', NewState = ', this.state);
        if(this.state.count > 10 && this.state.count !== state.count && !this.state.over10){
            this.setState({over10: true})
        }
    }

    resetCount = (e) => {
        this.setState({
            count: 0,
            over10: false
        })
    }

    render(){
        let {count} = this.state
        return (
            <div>   
                <h1>You clicked the Button {count} times</h1>
               
                    <HighScore 
                        // React propty 
                        over10={this.state.over10}
                        //New Method 
                        // can also be writen onReset={this.resetCount}
                        onReset={(e) => this.resetCount()}
                    />
               
                <span>
                    <button onClick={this.handleClick}>Click Me</button>
                </span>
            </div>
        );
    }
}

export default Application 