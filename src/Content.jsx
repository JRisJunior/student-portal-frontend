import {  UpdateStudent } from "./UpdateStudent";
import {  UpdateExperience } from "./UpdateExperience";
import axios from "axios";
import { useState } from "react";
import { Modal } from "./Modal";
import { UpdateEducation } from "./UpdateEducation";
import { UpdateSkill } from "./UpdateSkill";
import { UpdateCapstone } from "./UpdateCapstone";

export function Content() {
  const [isStudentUpdateVisible, setIsStudentUpdateVisible] = useState(false);
  const [isExperienceUpdateVisible, setIsExperienceUpdateVisible] = useState(false);
  const [isEducationUpdateVisible, setIsEducationUpdateVisible] = useState(false);
  const [isSkillUpdateVisible, setIsSkillUpdateVisible] = useState(false);
  const [isCapstoneUpdateVisible, setIsCapstoneUpdateVisible] = useState(false);
  
  
  const handleUpdateStudent = ( params) => {
    setIsStudentUpdateVisible(true);
    axios.patch("http://localhost:3000/students/1",params).then((response) => {
      console.log(response.data);
    });
  };

  const handleUpdateExperience = (params) => {
    setIsExperienceUpdateVisible(true);
    axios.patch("http://localhost:3000/experiences/15",params).then((response) => {
      console.log(response.data);
    });
  }
  const handleUpdateEducation = (params) => {
    setIsEducationUpdateVisible(true);
    console.log("UPDATE EDUCATION")
    axios.patch("http://localhost:3000/educations/10",params).then((response) => {
      console.log(response.data);
    });
  }

  const handleUpdateSkill = (params) => {
    setIsSkillUpdateVisible(true);
    console.log("UPDATE SKILL")
    axios.patch("http://localhost:3000/skills/25",params).then((response) => {
      console.log(response.data);
    });
  }
  const handleUpdateCapstone = (params) => {
    setIsCapstoneUpdateVisible(true);
    console.log("UPDATE Capstone")
    axios.patch("http://localhost:3000/capstones/10",params).then((response) => {
      console.log(response.data);
    });
  }

  const handleClose = () => {
    console.log("handleClose");
    setIsStudentUpdateVisible(false);
    setIsExperienceUpdateVisible(false);
    setIsEducationUpdateVisible(false);
    setIsSkillUpdateVisible(false);
    setIsCapstoneUpdateVisible(false);
  };
  
  return (
    <div>
      <hr/>
      <button onClick={handleUpdateStudent}>Update Student</button>      
      <button onClick={handleUpdateExperience}>Update Experience</button>      
      <button onClick={handleUpdateEducation}>Update Education</button> 
      <button onClick={handleUpdateSkill}>Update Skill</button> 
      <button onClick={handleUpdateCapstone}>Update Capstone</button> 
      <Modal show= {isStudentUpdateVisible} onClose={handleClose}>
        <UpdateStudent onUpdateStudent={handleUpdateStudent}/>
      </Modal>
      <Modal show= {isExperienceUpdateVisible} onClose={handleClose}>
        <UpdateExperience onUpdateExperience={handleUpdateExperience} />
      </Modal>
      <Modal show= {isEducationUpdateVisible} onClose={handleClose}>
        <UpdateEducation onUpdateEducation={handleUpdateEducation} />
      </Modal>
      <Modal show= {isSkillUpdateVisible} onClose={handleClose}>
        <UpdateSkill onUpdateSkill={handleUpdateSkill} />
      </Modal>
      <Modal show= {isCapstoneUpdateVisible} onClose={handleClose}>
        <UpdateCapstone onUpdateCapstone={handleUpdateCapstone} />
      </Modal>

    </div>

  );
}
