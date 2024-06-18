import PersonalInfomation from "./PersonalInformation";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import "./App.css"

const skillList = [
  {id:1, name: "Python", level: "Advanced"},
  {id:2, name: "SQL", level: "Advanced"},
  {id:3, name: "JavaScripts", level: "Intermediate"},
  {id:4, name: "React", level: "Beginner"},
]

export default function App() {
  return (
    <div>
      <PersonalInfomation />
      <Skills skills={skillList}/>
    </div>
  )
}