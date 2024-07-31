import myResume from "../images/21H41A0529.pdf"
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