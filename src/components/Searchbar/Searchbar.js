import { Component } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
const toast = Toastify({
  text: 'please input text!',
  duration: 2000,
  newWindow: true,
  close: true,
  gravity: 'top', // `top` or `bottom`
  position: 'left', // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: 'linear-gradient(to right, #00b09b, #96c93d)',
  },
  offset: {
    x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
    y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
  },
});
export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.query.trim() === '') {
      toast.showToast()
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleInputChange = evt => {
    this.setState({ query: evt.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.query}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}