export function UpdateCapstone(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateCapstone( params);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Capstone </h3>
      <div>
        Name: <input  name="name" type = "text" />
      </div>
      <div>
         Description: <input  name="description" type = "text" />
      </div>
      <div>
        Url: <input  name="url" type = "text" />
      </div>
      <button type="submit">Update</button>
    </form>
  )
} 