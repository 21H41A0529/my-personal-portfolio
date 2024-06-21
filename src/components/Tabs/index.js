import "./index.css"

const Tabs=(props)=> {
    const {item,clickTab,isActiveTab}=props;
    const {id,displayName}=item
    const styling=isActiveTab?'underlineStyle':'normalStyle'
   
    const changeTab=()=>clickTab(id)
    return(
        <li className="tab">
            <button type="button" className={styling} onClick={changeTab}>
              {displayName}
            </button>
        </li>
    )
}

export default Tabs