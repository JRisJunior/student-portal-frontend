import { Update } from "./Update";
import axios from "axios";
import { useState } from "react";

export function Content() {
  const [resumes, setResumes] = useState([]);

  const handleUpdateStudent = ( params, successCallback) => {
    console.log(params);
  }
  return (
    <div>
      <h1>Welcome to React!</h1>
      <Update onUpdateStudent = {handleUpdateStudent}/>
    </div>

  );
}
