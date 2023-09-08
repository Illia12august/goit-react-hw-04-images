import styled from '@emotion/styled';

export const LoadMoreBtn = styled.button`
  margin-left: auto;
  text-decoration: none;
  width: 140px;
  height: 60px;
  line-height: 45px;
  border-radius: 45px;
  margin: 20px 20px;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    background: #2ee59d;
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;
export const ButtonWrapper = styled.div`
  justify-content: center;
  display: flex;
`;
