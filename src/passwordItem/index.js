import {Component} from 'react'
import './index.css'

class Item extends Component {
  // constructor(props) {
  //   super(props) // Must call super(props) before using 'this' in constructor
  // }

  deleteThis = () => {
    const {obj, deleteThisItem} = this.props
    deleteThisItem(obj.id)
  }

  render() {
    const {obj} = this.props
    const {name, web, pass} = obj
    const {isChecked} = this.props

    return (
      <div className="item-div">
        <h1>{name[0]}</h1>
        <div className="password-div">
          <p> {name}</p>
          <p> {web}</p>
          {isChecked ? (
            <p> {pass}</p>
          ) : (
            <img
              className="password-starts-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>

        <button onClick={this.deleteThis}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    )
  }
}

export default Item
