import {Component} from 'react'
import Tabs from "../Tabs"
import projects from '../projectDetails/details'
import ProjectCard from "../ProjectCard"
import "./index.css"

const tabs= [
    {
       id:'HTML',
        displayName:'Html'
    },
    {
        id:'JAVASCRIPT',
        displayName:'Javascript'
    },
    {
        
        id:'REACT',
        displayName:'React'
    }
]



class Projects extends Component {
    state={
        activeId:tabs[0].id
    }

    clickTab=(id)=> {
        this.setState({activeId:id})
    }
filteredList=()=> {
    const {activeId}=this.state
    const list=projects.filter((j)=>j.category===activeId)
    return list
}

    render() {
        const {activeId}=this.state;
        const filterList=this.filteredList();
        return(
            <div className='projectsCon'>
                <ul className='tabsList'>
                    {tabs.map((item)=><Tabs 
                    item={item}
                    clickTab={this.clickTab} 
                    isActiveTab={item.id===activeId}
                    key={item.id} 
                    />
                    )}
                </ul>
                
                <ul className='projectsList'>
                   { filterList.map(p=> 
                    <ProjectCard p={p} key={p.id} />
                    )
                }
                </ul>

            </div>
        )
    }
}

export default Projects