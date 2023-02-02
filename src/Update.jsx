export function Update(props) {
  return (
    <div>
      <h3>UPDATE</h3>
      <button onClick={props.onUpdateStudent}>Update Student</button>      
      <button onClick={props.onUpdateExperience}>Update Experience</button>      
      <button onClick={props.onUpdateEducation}>Update Education</button> 
      <button onClick={props.onUpdateSkill}>Update Skill</button> 
      <button onClick={props.onUpdateCapstone}>Update Capstone</button> 
    </div>
  )
}