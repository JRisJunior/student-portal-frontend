export function UpdateExperience(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateExperience( params);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Experience </h3>
      <div>
        Start Date: <input  name="start" type = "text" />
      </div>
      <div>
         End Date: <input  name="end" type = "text" />
      </div>
      <div>
        Title: <input  name="title" type = "text" />
      </div>
      <div>
        Company: <input  name="company" type = "text" />
      </div>
      <div>
        Detail: <input  name="detail" type = "text" />
      </div>
      <button type="submit">Update</button>
    </form>
  )
}