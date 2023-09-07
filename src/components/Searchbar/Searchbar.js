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
    searchQuery: '',
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return toast.showToast();
    }
  };
  onInputChange = evt => {
    this.setState({ query: evt.target.value });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.onInputChange}
            value={this.state.searchQuery}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
