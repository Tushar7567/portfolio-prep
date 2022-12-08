import React from 'react';
import{DiReact, DiJavascript1, DiCss3, DiHtml5, DiBootstrap} from 'react-icons/di'

const Skills = () => {
  return (
    <div id='skills' className='pad-lr'>
      <div className='heading'>Technology</div>
      <div className='cont'>
        <div> <DiReact className='react-icon animate' /> <span>React</span></div>
        <div> <DiJavascript1 className='react-icon' /> <span>JavaScript</span></div>
        <div> <DiCss3 className='react-icon' /> <span>CSS</span></div>
        <div> <DiHtml5 className='react-icon' /> <span>HTML</span></div>
        <div> <DiBootstrap className='react-icon' /> <span>Bootstrap</span></div>
        {/* <div> <DiHtml5 className='react-icon' /> <span>HTML</span></div> */}

        

        
      </div>
    </div>
  )
}

export default Skills
