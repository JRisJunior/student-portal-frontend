export function UpdateStudent(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateStudent( params);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Student</h3>
      <div>
        First Name: <input  name="first_name" type="text" />
      </div>
      <div>
        Photo: <input  name="last_name" type="text" />
      </div>
      <div>
        Email: <input  name="email" type="email" />
      </div>
      <div>
        Phone Number: <input  name="phone" type="text" />
      </div>
      <div>
        Biography: <input  name="biography" type="text" />
      </div>
      <div>
        LinkedIn URL: <input  name="linkedin_url" type="text" />
      </div>
      <div>
        Twitter Handle: <input  name="twitter_user" type="text" />
      </div>
      <div>
        Website URL: <input  name="website_url" type="text" />
      </div>
      <div>
        Resume URL: <input  name="resume_url" type="text" />
      </div>
      <div>
        Github URL: <input  name="github_url" type="text" />
      </div>
      <div>
        Photo URL: <input  name="photo_url" type="text" />
      </div>
 
      <button type="submit">Update</button>
    </form>
  );
}

