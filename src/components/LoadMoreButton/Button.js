import { StyledButtonForm } from 'components/Searchbar/Searchbar.styled';
import { ButtonWrapper } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <StyledButtonForm onClick={onClick} type="button">
        Load more
      </StyledButtonForm>
    </ButtonWrapper>
  );
};
