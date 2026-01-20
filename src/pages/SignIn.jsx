import Dashboard from "./Dashboard";
import "./signin.css";
const SignIn =()=>{
    return (
        <div className="signin-div">
            <div className="form">
                <p style={{fontWeight:"bold", fontSize:"35px",marginBottom:"0"}}>Sign In</p>
                <span style={{fontSize:"12px", marginTop:"4px", color:"rgb(63, 166, 226)",cursor:"pointer", width:"115px"}}>or Create an account</span>
                <input type="text" placeholder="Enter your Email"/>
                <input type="password" placeholder="Enter password"/>
                <div style={{display:"flex",gap:"6px", alignItems:"center", marginBottom:"6px"}}>
                    <input style={{width:"15px",cursor:"pointer",verticalAlign:"center",height:"15px"}} type="checkbox" unchecked />
                     <p style={{margin:"0"}}>
                   Remember me</p>
                </div>
               
                <button className="signin-button" >Sign In</button>
                <button className="sign-google-button">Sign In with Google</button>
            </div>
        </div>
    );
};

export default SignIn;