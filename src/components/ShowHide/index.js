// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameHide: true, isLastNameHide: true}

  displayFirstName = () => {
    this.setState(prevState => ({isFirstNameHide: !prevState.isFirstNameHide}))
  }

  displayLastName = () => {
    this.setState(prevState => ({isLastNameHide: !prevState.isLastNameHide}))
  }

  render() {
    const {isFirstNameHide, isLastNameHide} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>

        <div className="button-container">
          <div>
            <button
              type="button"
              className="button"
              onClick={this.displayFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstNameHide ? null : <p className="para">Joe</p>}
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.displayLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastNameHide ? null : <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
