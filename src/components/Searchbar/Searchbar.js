import { useState } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { StyledButtonForm, StyledForm, StyledInputForm } from './Searchbar.styled';
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
export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      toast.showToast()
      return
    }

    onSubmit(query);
    setQuery('');
  };

  const handleInputChange = evt => {
    setQuery(evt.target.value);
  };

    return (
      <div>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInputForm
            onChange={handleInputChange}
            value={query}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
          />
          <StyledButtonForm>Submit</StyledButtonForm>
        </StyledForm>
      </div>
    );
}