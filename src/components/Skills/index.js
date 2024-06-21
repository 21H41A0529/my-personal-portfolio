import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import "./index.css"

const Skills=()=>(
<div className="skillsCon">
    <h1 className="skillTitle">Skills</h1>
<ul className="skills">
  <li className="skillElement">
  <FaHtml5 className="skillLogo"/>
  <h1>HTML</h1>
  </li>

  <li className="skillElement">
  <FaCss3 className="skillLogo"/>
  <h1>CSS</h1>
  </li>

  <li className="skillElement">
  <IoLogoJavascript className="skillLogo"/>
  <h1>javascript</h1>
  </li>

  <li className="skillElement">
  <FaHtml5 className="skillLogo"/>
  <h1>Bootstrap</h1>
  </li>


  

  <li className="skillElement">
  <FaReact className="skillLogo"/>
  <h1>React</h1>
  </li>

  <li className="skillElement">
  <FaNode className="skillLogo"/>
  <h1>Node</h1>
  </li>

  <li className="skillElement">
  <SiMysql className="skillLogo"/>
  <h1>Sql</h1>
  </li>

  <li className="skillElement">
  <SiMongodb className="skillLogo"/>
  <h1>Mongodb</h1>
  </li>

  <li className="skillElement">
  <FaPython className="skillLogo"/>
  <h1>Python</h1>
  </li>

</ul>
</div>
)

export default Skills