import { CiLinkedin } from "react-icons/ci";
import {TfiEmail} from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import "./index.css"

const Contact=()=>(
<div >
 <h1 className="contactTitle">Contact____</h1>
 <div className="contactList">
   <div className="email">
    <div className="emailLogoCon">
    <TfiEmail className="emailLogo"/>

    </div>
   <div className="emailList">
    <h1 className="emailTitle">Email</h1>
    <p className="para">lakshmikumpatla25@gmail.com</p>
    <p className="para">lakshmikumpatla975@gmail.com</p>
   </div>
   </div>
   <div className="social">
 <a target="_blank" href="https://www.linkedin.com/in/lakshmi-kumpatla/"><CiLinkedin className="linkedinLogo"/></a>
 <a target="_blank" href="https://github.com/21H41A0529">
<FaGithub className="linkedinLogo"/>
 </a>
</div>
 </div>



</div>
)
export default Contact