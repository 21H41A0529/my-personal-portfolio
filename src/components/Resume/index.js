import myResume from "../images/my resume june4.pdf"
import "./index.css"


const Resume = () => {
  const handleOpenResume = () => {
    window.open(myResume, '_blank');
  };

  return (
    <div className="resumeCon">
    <button onClick={handleOpenResume} className="resume-button">
      View My Resume
    </button>
    </div>
  );
};




export default Resume