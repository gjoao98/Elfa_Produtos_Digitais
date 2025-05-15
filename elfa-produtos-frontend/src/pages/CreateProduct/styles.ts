import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    gap: 0.5rem;
  }

  input, select, textarea {
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }

  span {
    font-size: 0.875rem;
    color: red;
    margin-top: 0.25rem;
  }

  button {
    align-self: flex-start;
    padding: 0.75rem 1.5rem;
    background-color: ${props => props.theme['gray-900']};
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const ImagePreview = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
  border: 1px solid #ccc;
  object-fit: cover;
`;
