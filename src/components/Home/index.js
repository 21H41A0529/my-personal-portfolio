import React from 'react';
import Background from "../Background";
import "./index.css";

const Home = () => (
    <div className='mainCon'>
        <Background />
        <div className='welcomeCon'> 
        <h1 className='welcome'>Hello,I am <span className='name'>Lakshmi Kumpatla</span></h1>
        <p className='role'>I am a full stack web developer</p>
        </div>
        
</div>
)


export default Home;