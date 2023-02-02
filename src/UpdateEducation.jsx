export function UpdateEducation(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateEducation( params);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Education </h3>
      <div>
        Start Date: <input  name="start" type = "text" />
      </div>
      <div>
         End Date: <input  name="end" type = "text" />
      </div>
      <div>
        Degree: <input  name="degree" type = "text" />
      </div>
      <div>
        University: <input  name="university" type = "text" />
      </div>
      <div>
        Detail: <input  name="details" type = "text" />
      </div>
      <button type="submit">Update</button>
    </form>
  )
} 