export function Update(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // params.require(:student).permit(:first_name, :last_name, :email, :biography,:linkedin_url, :twitter_user, :website_url, :github_url,: phote_url);
    console.log(params);
    props.onUpdateStudent( params, () => event.target.reset());
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Student</h3>
      <div>
        First Name: <input  name="student[first_name]" type="text" />
      </div>
      <div>
        Photo: <input  name="student[last_name]" type="text" />
      </div>
      <div>
        Email: <input  name="student[email]" type="email" />
      </div>
      <div>
        Phone Number: <input  name="student[phone]" type="text" />
      </div>
      <div>
        Biography: <input  name="student[biography]" type="text" />
      </div>
      <div>
        LinkedIn URL: <input  name="student[linkedin_url]" type="text" />
      </div>
      <div>
        Twitter Handle: <input  name="student[twitter_user]" type="text" />
      </div>
      <div>
        Website URL: <input  name="student[website_url]" type="text" />
      </div>
      <div>
        Resume URL: <input  name="student[resume_url]" type="text" />
      </div>
      <div>
        Github URL: <input  name="student[github_url]" type="text" />
      </div>
      <div>
        Photo URL: <input  name="student[phote_url]" type="text" />
      </div>
      <h3>Experience</h3>
      <div>
        Start Date: <input  name="experience[start]" type="text" />
      </div>
      <div>
        End Date: <input  name="experience[end]" type="text" />
      </div>
      <div>
        Title: <input  name="experience[title]" type="text" />
      </div>
      <div>
        Company: <input  name="experience[company]" type="text" />
      </div>
      <div>
        Detail: <input  name="experience[detail]" type="text" />
      </div>
      <button type="submit">Update</button>
    </form>
  );
}

