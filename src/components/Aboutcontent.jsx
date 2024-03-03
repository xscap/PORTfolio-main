import React from 'react'
import "./aboutcontent.css"

const Aboutcontent = () => {
  return (
    <div className='about'>
        
        <div className="left">
            
            <p>Hello there! I'm Arnab Paul, a passionate and ambitious undergraduate student on the exciting journey of pursuing a Bachelor's degree in Electronics and Communication Engineering at the B.P.Poddar Insttitute of Management and Technology. Born and raised in a small town, I developed a love for technology at a young age, tinkering with gadgets and computers in my spare time.</p>

            <p>
            I am known for my insatiable curiosity and love for problem-solving. My academic journey has been marked by a strong foundation in mathematics and a keen interest in programming languages. I believe in the power of technology to bring about positive change and am eager to contribute to the ever-evolving world of computer science.

           Outside of the classroom, I am an active participant in various extracurricular activities. I am a member of the IEEE Computer Society of BPPIMT, where I collaborate with fellow enthusiasts on exciting project and seminars.
            In my free time, you'll find me exploring the latest advancements in technology, reading story books, and gaming. I am a firm believer in the importance of continuous learning and am always seeking opportunities to expand my knowledge and skill set.
            </p>
            <p>
            As a fresher, I am eager to dive into internships, gain hands-on experience, and apply the theoretical knowledge I've acquired in real-world scenarios. I am open to new opportunities, challenges, and collaborations that will further shape my journey in the dynamic field of famous companies. Connect with me if you share a passion for technology, innovation, or if you're looking for a dedicated and enthusiastic team member. Let's embark on this exciting adventure together!
            </p>
          <div className="skillspart">
            <h1 className='Skills'>
               My Skills
            </h1>

            <ul className='contents'>
                <li style={{color: "orange"}}>HTML</li>
                <li style={{color:"blue"}}>CSS</li>
                <li style={{color:"yellow"}}>JAVASCRIPT</li>
                <li style={{color:"white"}}>REACT</li>
                <li style={{color:"lightblue"}}>PYTHON FOR DATA ANALYSIS</li>
                <li style={{color:"darkblue"}}>R PROGRAMMING</li>
                <li style={{color:"green"}}>MS EXCEL</li>
                <li style={{color:"red"}}>TABLEAU</li>
                <li style={{color:"vermilion"}}>POWERPOINT</li>
            </ul>
            
            <h1 className='Skills'>
              Tech Environment
            </h1>
            <ul className="contents">
            <li style={{color: "orange"}}>JUPYTER NOTEBOOK</li>
                <li style={{color:"lightblue"}}>VISUAL STUDIO CODE</li>
                <li style={{color:"yellowgreen"}}>PYCHARM</li>
                </ul>

            </div>

            <h1 className="Skills">
                Education
            </h1>

            <p>
                I have done my schooling from Uttarpara Govenment High School, I was passed out in 2020 with overall 80% in Science Group and 2018 I completed my Secondary Education with a total percentage of 85%. Later on I am currently pursuing my B.Tech Degree in Electronics and Communication engineering from B.P.Poddar Institute of Management and Technology. My overall CGPA is 8.81 currently.
            </p>

            {/* Courses and certifications */}

            <h1 className="Skills">
            Certifications and Trainings
            </h1>

            <p>
              <a href="https://www.credly.com/badges/e5607716-1777-460b-ab9e-d813bc81ff1c/print"> <li>The Complete Data Analyst Course - Coursera</li></a> 
              <a href="https://www.udemy.com/certificate/UC-5bae4354-5074-4e13-89b5-772603e3425a/"><li>The Complete AI Course - Udemy</li></a>

              <li>Data Analytics Traineeship - MedTourEasy <a href="https://www.canva.com/design/DAF7TOXjNB4/KEwZNC_5LpzqIaIYFUQAkA/view?utm_content=DAF7TOXjNB4&utm_campaign=designshare&utm_medium=link&utm_source=editor">(View Certificate)</a></li>
              
             

            </p>

        </div>

       

        <div className="credits">
        <small>2024 Arnab Paul &copy; All Rights Reserved </small>
        </div>
    </div>
    
  )
}

export default Aboutcontent