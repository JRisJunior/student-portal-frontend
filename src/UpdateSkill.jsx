export function UpdateSkill(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSkill( params);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Skill </h3>
      <div>
        Skill: <input  name="name" type = "text" />
      </div>
      <button type="submit">Update</button>
    </form>
  )
}