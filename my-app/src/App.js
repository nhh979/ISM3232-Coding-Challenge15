//Hoang Nguyen
//U12840485

import "./App.css"

// Create a list of skills
const skillList = [
  {id:1, name: "Python", level: "Advanced"},
  {id:2, name: "SQL", level: "Advanced"},
  {id:3, name: "JavaScripts", level: "Intermediate"},
  {id:4, name: "React", level: "Beginner"},
]

// Create a list of experience
const expList = [
  {jobTitle:'Data Analyst', company:'ABC', duration:'6 months'},
  {jobTitle:'Data Engineer', company:'XYZ', duration:'4 months'},
]

export default function App() {
  return (
    <div>
      <PersonalInfomation />
      <Education />
      <Skills skills={skillList}/> 
      <Experience exps={expList}/>
    </div>
  )
}

// Create the personal information component
function PersonalInfomation() {
  return (
      <div className='personalInfo'>
          <h1 className='name'>Hoang Nguyen</h1> 
          <h2 className='title'>A Data Analyst</h2>
          
          <h3 className='header'>About me</h3>
          <p className='biography'>Hoang is a junior at USF, majoring in Mathematics: Computational and Applied. He has a strong background
              in statistics and is proficient in programming languages such as Python and SQL. As a self-taught data analyst 
              he is passionate about pursing a career in the data science field. </p>
          
          <h3 className='header'>Contact</h3>
          <p className='contactInfo'><strong>Email:</strong> hnguyen171@usf.edu</p>
          <p className='contactInfo'><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hieunguyen2310/" target='blank'>https://www.linkedin.com/in/hieunguyen2310/</a></p>
      </div>
  )
}

// Create the education component
function Education () {
  return (
      <div className='education'>
          <h3 className='header'>Education</h3>
          <p className='school'>University of South Florida | Tampa, FL</p>
          <p className='program'>Mathematics: Computational and Applied</p>
      </div>
  )
}

// Create the skills component
function Skills({skills}) {
  return (
      <div className='skills'>
          <h3 className='header'>Skills</h3>
          <ul> 
              {skills.map(skill => 
                      <li>{`${skill.name} (${skill.level})`} </li>
              )}
          </ul>
      </div>
  )
}

// Create the experience component
function Experience({exps}) {
  return (
      <div className='experience'>
          <h3 className='header'>Experience</h3>
          {exps.map(exp =>
              <>
                  <h4>{exp.jobTitle}</h4>
                  <p>Company: {exp.company}</p>
                  <p>Duration: {exp.duration}</p>
              </>
          )}
      </div>
  )
}