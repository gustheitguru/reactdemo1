import React, {Component} from 'react';

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

    render(){
        let {count} = this.state
        return (
            <div>   
                <h1>You clicked the Button {count} times</h1>
                {(this.state.over10) ? 
                    <h3>You have Click button 10 times</h3>
                :null}
                <span>
                    <button onClick={()=>this.handleClick()}>Click Me</button>
                </span>
            </div>
        );
    }
}

export default Application 