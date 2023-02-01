import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function StudentShow(props) {
  const [student, setStudent] = useState({});
  const params = useParams();

  const getStudent = () => {
    console.log(student.id);
    axios.get("http://localhost:3000/students/1.json").then(response => {
      console.log(response.data);
      setStudent(response.data);
    });
  };

  useEffect(getStudent, []);

  return (
    <div>
      <h2>Student Information</h2>
      <h3>About</h3>
      <p>Name: {student.first_name + " " + student.last_name}</p>
      <p>Email: {student.email}</p>
      <p>Phone Number: {student.phone}</p>
      <p>Bio: {student.biography}</p>
      <p>LinkedIn: {student.linkedin_url}</p>
      <p>Twitter Handle: {student.twitter_user}</p>
      <p>Personal Website: {student.website_url}</p>
      <p>Online Resume: {student.resume_url}</p>
      <p>Github: {student.github_url}</p>
      <p>Photo: {student.photo_url}</p>
      <hr />
      <h3>Experience</h3>
      <p>Job Title: {}</p>
      <p>Company: {}</p>

      <hr />
      <h3>Education</h3>
      <hr />
      <h3>Skills</h3>
    </div>
  );
}