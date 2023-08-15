// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, deleteUser} = props
  const {title, id} = details
  const DeleteUser = () => {
    deleteUser(id)
  }
  return (
    <li>
      <div className="cont">
        <p>{title}</p>
        <br />
        <button type="button" onClick={DeleteUser}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
