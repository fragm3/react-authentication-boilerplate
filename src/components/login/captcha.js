import React, {Component} from 'react';

class Captcha extends Component{
    constructor(props) {
        super(props);
        this.state = {
            captcha: '',
            inputValue: ''
        }
    }

    handleChangeEvent = (event) => {
        // let captchaCode;
        //captchaCode = this.state.captcha;
        // if(e.target.value == captchaCode){
        //     console.log("Captcha verified")
        // }

        this.setState({inputValue: event.target.value})
        console.log(event.target.value);
    }

    randomString = () => {
        var chars = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
        var captcha = '';
        for (var i = 6; i > 0; --i){
            captcha += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        debugger;
        this.setState({captcha});
        console.log(this.state.captcha)
     }
     
     handleOk = () => {
         if(this.state.inputValue == this.state.captcha){
             alert("Captcha confirmed")
         }
         else{
             alert("Retry")
             this.randomString();
         }
     }

    componentDidMount(){
        this.randomString();
    }

    render(){

        return(
            <div>
                Please enter the following code to confirm: {this.state.captcha}
                <div>
                <input onChange={this.handleChangeEvent}/>
                <button onClick={this.handleOk}>Ok</button>
                <button onClick={this.randomString}>Refresh</button>
                </div>
            </div>
        )
    }

}

export default Captcha;