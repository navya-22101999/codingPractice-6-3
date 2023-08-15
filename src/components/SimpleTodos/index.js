import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    userDetails: initialTodosList,
  }

  deleteUser = id => {
    const {userDetails} = this.state
    const filteredData = userDetails.filter(each => each.id !== id)
    this.setState({userDetails: filteredData})
  }

  render() {
    const {userDetails} = this.state
    return (
      <div className="cont-1">
        <div className="cont-2">
          <div className="cont-3">
            <h1>Simple Todos</h1>
            <ul className="list">
              {userDetails.map(each => (
                <TodoItem
                  key={each.id}
                  deleteUser={this.deleteUser}
                  details={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
