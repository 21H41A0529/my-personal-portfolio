import "./index.css"

const ProjectCard=(props)=>{
    const {p}=props;
    const {id,imageName,imageUrl,demoLink,githubLink,technologies,category}=p
    return(
<li className="projectcard">
   <div >
    <img src={imageUrl} alt={imageName} className="projectLogo"/>
    </div>
    <div className="info">
        <p className="info1">Technologies Used:<span className="info2">
            {technologies}
            </span></p>
        <p className="info1">githubLink:<a href={githubLink} target="_blank">Link</a></p>
        <p className="info1">Demo:<a href={demoLink} target="_blank">Link</a></p>
    </div>
</li>
)
}
export default ProjectCard