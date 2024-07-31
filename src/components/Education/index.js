import "./index.css"
import bvcImage from "../images/BVCR-Header.webp"
import sasiImage from "../images/sasiheader.jpg"
import nxtwaveImage from "../images/nxtwave.svg"
import codetantraImage from "../images/codetantra.png"
import hackerrankImage from "../images/hackerrank.gif"
import hqlImage from "../images/hql.webp"
import salesforceImage from "../images/salesforce-.png"
import microsoftImage from "../images/microsoft.png"

const Education=()=>(
<div className="main">
  <h1 className="head">Education</h1>
    <div className="education">
      <div className="engineering">
        <div>
            <img src={bvcImage} alt="bvcLogo" className="bvcImage"/>
        </div>
        <div className="List">
            <h1 className="title">B.Tech in computer science</h1>
            <p className="year year1">2021-2025</p>
            <h4 className="learntTitle">Courses i have Learnt</h4>
            <ul className="courses">
                <li>C</li>
                <li>C++</li>
                <li>Python</li>
                <li>Java</li>
            </ul>
        </div>
      </div>


      <div className="intermediate">
       <div>
        <img src={sasiImage} alt="saliLogo" className="sasiImage"/>
       </div>
       <div className="List">
        <h1 className="title">intermediate</h1>
        <h2>Sasi Junior College</h2>
        <p className="year">2019-2021</p>
        <p className="year">percentage:97.5</p>
       </div>
      </div>

      <div className="school">
        <h1 className="title">Little Angels English Medium School</h1>
        <p className="year">2018-2019</p>
        <p className="year">scored 10 points in 10th class</p>
        
      </div>
    </div>

    <h1 className="head">Online Certifications</h1>
    <div className="onlineEducation">
      
      
      
      <div className="nxtwave">
      <div className="logoCon">
        <img src={hackerrankImage} alt="hackerrankLogo" className="hackerranklogo"/>
        </div>
        <h1 className="title">Certifications i have Done</h1>
        <ul className="year">
          <li>javascript basic</li>
          <li>javascript intermediate</li>
        </ul>
      </div>


      <div className="nxtwave">
      <div className="logoCon">
        <img src={microsoftImage} alt="microsoftLogo"/>
        </div>
        <h1 className="title">Certifications i have Done</h1>
        <ul className="year">
          <li>Requirements of Azure Fundamentals</li>
        </ul>
      </div>

      <div className="nxtwave">
      <div className="logoCon">
        <img src={salesforceImage} alt="salesforceLogo" className="hackerranklogo"/>
        </div>
        <h1 className="title">Certifications i have Done</h1>
        <ul className="year">
          <li>salesforce Developer Virtual Internship</li>
          
        </ul>
      </div>

      <div className="nxtwave">
      <div className="logoCon">
        <img src={hqlImage} alt="hqlLogo" className="hackerranklogo"/>
        </div>
        <h1 className="title">Certifications i have Done</h1>
        <ul className="year">
          <li>web development</li>
          <li>Soft Skills</li>
        </ul>
      </div>

      <div className="nxtwave">
      <div className="logoCon">
        <img src={codetantraImage} alt="codetantraLogo" className="hackerranklogo"/>
        </div>
        <h1 className="title">Certifications i have Done</h1>
        <ul className="year">
          <li>python</li>
        </ul>
      </div>

    </div>
</div>)

export default Education