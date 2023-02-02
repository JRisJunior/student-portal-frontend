import {  UpdateStudent } from "./UpdateStudent";
import {  UpdateExperience } from "./UpdateExperience";
import axios from "axios";
import { StudentShow } from "./StudentShow";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Modal } from "./Modal";
import { UpdateEducation } from "./UpdateEducation";
import { UpdateSkill } from "./UpdateSkill";
import { UpdateCapstone } from "./UpdateCapstone";
import { Update } from "./Update";

export function Content() {
  const [isStudentUpdateVisible, setIsStudentUpdateVisible] = useState(false);
  const [isExperienceUpdateVisible, setIsExperienceUpdateVisible] = useState(false);
  const [isEducationUpdateVisible, setIsEducationUpdateVisible] = useState(false);
  const [isSkillUpdateVisible, setIsSkillUpdateVisible] = useState(false);
  const [isCapstoneUpdateVisible, setIsCapstoneUpdateVisible] = useState(false);
  
  const [currentStudent, setCurrentStudent] = useState({});


  // const handleStudentShow = (student) => {
  //   console.log("handleStudentShow", student);
  //   setCurrentStudent(student);
  // };
  
  const handleUpdateStudent = ( params) => {
    setIsStudentUpdateVisible(true);
    axios.get("http://localhost:3000/students/current").then((response) => {
      const id = response.data.id;
      axios.patch(`http://localhost:3000/students/${id}`, params).then((response) => {
        console.log(response.data);
      });
    });
};

  const handleUpdateExperience = (params) => {
    setIsExperienceUpdateVisible(true);
    axios.get("http://localhost:3000/students/current").then((response) => {
      const id = response.data.id;
      axios.patch(`http://localhost:3000/experiences/${id}`,params).then((response) => {
        console.log(response.data);
      });
    });
  }
  const handleUpdateEducation = (params) => {
    setIsEducationUpdateVisible(true);
    console.log("UPDATE EDUCATION")
    axios.get("http://localhost:3000/students/current").then((response) => {
      const id = response.data.id;
      axios.patch(`http://localhost:3000/educations/${id}`,params).then((response) => {
        console.log(response.data);
      });
    });
  }

  const handleUpdateSkill = (params) => {
    setIsSkillUpdateVisible(true);
    axios.get("http://localhost:3000/students/current").then((response) => {
      const id = response.data.id;
      
      axios.patch(`http://localhost:3000/skills/${id}`,params).then((response) => {
        console.log(response.data);
      });
    });
  }
  const handleUpdateCapstone = (params) => {
    setIsCapstoneUpdateVisible(true);
    axios.get("http://localhost:3000/students/current").then((response) => {
      const id = response.data.id;
      axios.patch(`http://localhost:3000/capstones/${id}`,params).then((response) => {
        console.log(response.data);
      });
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
    
      <Routes>
        <Route path= "/update" element = {<Update onUpdateStudent={handleUpdateStudent} onUpdateExperience={handleUpdateExperience} onUpdateEducation={handleUpdateEducation} onUpdateSkill={handleUpdateSkill} onUpdateCapstone={handleUpdateCapstone}/>} />
        {/* <Route path="/" element={<StudentShow student={currentStudent} />} /> */}
      </Routes>
  
      <hr/>
      {/* <button onClick={handleUpdateStudent}>Update Student</button>      
      <button onClick={handleUpdateExperience}>Update Experience</button>      
      <button onClick={handleUpdateEducation}>Update Education</button> 
      <button onClick={handleUpdateSkill}>Update Skill</button> 
      <button onClick={handleUpdateCapstone}>Update Capstone</button>  */}
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
