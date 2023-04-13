import styled from 'styled-components';


export const Buttons = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 39px;
    gap: 10px;

    width: 388px;
    height: 52px;

    background: #6237BE;

    color: #fff;

    border-radius: 8px;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 1;

    @media only screen and (max-width: 552px) {
    /* For everything bigger than 768px */
      width: 278px;
  
    }
`;