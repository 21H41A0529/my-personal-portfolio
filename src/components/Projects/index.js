import {Component} from 'react'
import projects from '../projectDetails/details'
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
        activeId:tabs.id
    }

    render() {
        const {activeId,displayName}=this.state;
        return(
            <div className='projectsCon'>
               
            </div>
        )
    }
}

export default Projects