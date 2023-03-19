import React from "react";
import "./signup.css";
import Logo from "../images/devoct-logo.png"
import GLogo from "../images/google-icon.png"
import FLogo from "../images/f-icon.png";
import LKLogo from "../images/Link-icon.png"
const Signup =() =>{
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };
    
    return(
        <div className="cover">
            <img className="logo" src={Logo} alt="logo"></img>
            <h1 className="create">Create account</h1>
            <form className="form">
            <input className="name" type="name"  placeholder="Full name"></input>
            <input className="email" type="email" placeholder=" Email" ></input>
            <input className="password" type="Password" placeholder=" Password"></input>
            <input className="confirm-password" type="Password" placeholder=" Confirm Password"></input>
            <input className="checkbox" type="checkbox" onChange={handleChange} /> <div className="checkbox1" >I have read and accepted the <mark className="red"> Terms & conditions</mark> to Devoct</div> 
             
             <button className="btn" type="submit" ><div className="btn1" >Create account</div></button>
             </form>
             
             <div style={{flex: 1, height: '1px', position: 'absolute',
width: '100px',

left: '52px',
top: '679px',

border: '1px solid #B8D8E0'}} />

<div>
  <p  className="line">Or sign up with</p>
</div>

<div style={{flex: 1, height: '1px', position: 'absolute',
width: '100px',

left: '276px',
top: '679px',

border: '1px solid #B8D8E0' }} />
<img  className="flogo" src={FLogo} alt="icon"></img>
<img  className="glogo" src={GLogo} alt="icon"></img>
<img className="lklogo" src={LKLogo} alt="icon"></img>
<div className="check" >Already have an account?</div>
<div><button className="link" type="button"> Sign In </button></div>
<circle className="ellipse1">

</circle>
<circle className="ellipse2">
    
</circle>

</div>


      
    )
}
export default Signup;