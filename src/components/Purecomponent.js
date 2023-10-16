import React,{PureComponent} from 'react';

class Pure extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            count:0,
            
        }
    }
   
    componentDidUpdate(prevProps, prevState) {
        console.log('Component updated');
        if (prevState.count !== this.state.count) {
          console.log('Count state changed');
        }
      }

    incr=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    decr=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Pure Component Example </h1>
                <h2>Total count is : {this.state.count}</h2>
                <button onClick={this.incr}>Increase</button>
                <button onClick={this.decr}>Decrease</button>
            </React.Fragment>
        )
    }
}

export default Pure;
