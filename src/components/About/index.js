

import "./index.css"


const interests = [
    "web development",
    "programming",
    "reading books",
    "workout",
    "journaling",
    "walking"
]

const About=()=>(
<div className="aboutCon">
<div className="interests">
 <h1 className="heading">Things I Like </h1>
 <ul className="interestsList">
    {interests.map((interest)=> 
    <li className="interestElement">
      {interest}
      </li>)}
 </ul>
</div>
    <div className="contentCon">
    <p>
    I am Subbalakshmi Narayanamma Kumpatla, a passionate Full-stack Developer. With a solid background in Computer Science Engineering, I thrive on leveraging technology to create innovative solutions that solve real-world problems.
</p>
<p>
My journey began with a strong academic foundation at Bonam Venkata Chalamayya Institute of Technology and Science, where I excelled in Computer Science Engineering. I've honed my skills in both frontend (HTML, CSS, JavaScript, React.js) and backend development (Python, Express, Node.js), and have practical experience deploying scalable solutions on AWS Cloud.
    </p>
    <p>Driven by a passion for continuous learning and a commitment to excellence, I am eager to contribute my technical expertise and problem-solving abilities to innovative teams and projects.</p>
</div>
</div>
)
export default About