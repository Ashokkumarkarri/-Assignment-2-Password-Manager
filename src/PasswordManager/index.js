import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'
import Item from '../passwordItem/index'

class PasswordManager extends Component {
  state = {
    initialList: [],
    name: '',
    web: '',
    pass: '',
    isChecked: false,
    filteredList: [],
  }

  nameInput = event => {
    this.setState({name: event.target.value})
  }

  websiteInput = event => {
    this.setState({web: event.target.value})
  }

  passInput = event => {
    this.setState({pass: event.target.value})
  }

  clickAdd = () => {
    const {name, web, pass, initialList} = this.state
    const listItem = {id: uuidv4(), name, web, pass}
    const updatedList = [...initialList, listItem]
    this.setState({initialList: updatedList})
  }

  isChecked = e => {
    const val = e.target.checked
    this.setState({isChecked: val})
  }

  deleteThisItem = id => {
    const {initialList} = this.state
    const newList = initialList.filter(i => i.id !== id)

    this.setState({initialList: newList})
  }

  searchChange = event => {
    const val = event.target.value

    const {initialList} = this.state
    const newList = initialList.filter(i => i.name.includes(val))
    console.log(newList)

    this.setState({filteredList: newList})
  }

  render() {
    const {initialList, isChecked, filteredList} = this.state
    const numOfPass = initialList.length
    const renderedList = filteredList.length > 0 ? filteredList : initialList
    return (
      <div className="bg-div">
        <header className="header">
          <img
            className="img-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </header>

        <section className="form-bg-div">
          <div className="form-div">
            <h1 className="form-heading">Add New Password</h1>
            <input
              type="text"
              onChange={this.websiteInput}
              className="input"
              placeholder="Enter Website"
            />
            <input
              type="text"
              onChange={this.nameInput}
              className="input"
              placeholder="Enter Username"
            />
            <input
              type="password"
              className="input"
              onChange={this.passInput}
              placeholder="Enter Password"
            />
            <button className="add-btn" type="button" onClick={this.clickAdd}>
              Add
            </button>
          </div>
          <img
            className="img-ps-manager"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </section>

        <section className="pass-bg-div">
          <div className="pass-header">
            <h1 className="password-count">Your Passwords {numOfPass}</h1>
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.searchChange}
            />
          </div>
          <hr />
          <div className="item-bg-div">
            <div className="checkbox">
              <label>
                <input type="checkbox" onChange={this.isChecked} />
                <span>Show passwords</span>
              </label>
            </div>
            {initialList.length <= 0 ? (
              <div className="no-pass-div">
                <img
                  className="img-no-pass"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                />
                <h1>No Passwords</h1>
              </div>
            ) : (
              <div>
                {renderedList.map(i => (
                  <Item
                    key={i.id}
                    obj={i}
                    deleteThisItem={this.deleteThisItem}
                    isChecked={isChecked}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    )
  }
}

export default PasswordManager
