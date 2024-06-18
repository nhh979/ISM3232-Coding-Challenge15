import PersonalInfomation from "./PersonalInformation";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
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