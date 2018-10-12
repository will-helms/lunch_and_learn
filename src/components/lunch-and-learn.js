import React from 'react';

export class LunchAndLearn extends React.Component {
    constructor(props){
        super(props);

        this.state = {inputValue: ""}
    }


    handleInputChange = (e) => {
        console.log(e);
        this.setState({inputValue: e.target.value})
    };

    render(){
        return(
          <div>
              <Input onChange={this.handleInputChange} placeholder={this.props.defaultValue} />
              <div>{this.state.inputValue}</div>
          </div>
        );
    }

}


const Input = (props) => {
    return(
        <div><input onChange={props.onChange} placeholder={props.placeholder} /></div>
    );

};
