import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px 316px;
  gap: 8px;

  justify-content: space-around;

  position: absolute;
  width: 1916px;
  left: calc(50% - 1916px/2);
  top: 0%;
  bottom: 92.7%;

  background: linear-gradient(270deg, #1F123C 65.71%, #6237BF 100%); 
`;

export const BoxHedader = styled.div`
  flex: 1;
`;

export const InputHeader = styled.input`
    box-sizing: border-box;

    width: 401px;
    height: 42px;

    color: #fff;

    /* Fill Color/BG */
    background: #FFFFFF;
    padding: 20px;

    /* Border Color/#1 */
    border: 1px solid #E2E5EA;
    border-radius: 8px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    padding-left: 25px;
    background: url("../../images/Search.png") no-repeat left;
    background-size: 20px;
    background-position: 95% 10px;
`;



/**
 *  padding-left: 25px;
  background: url("../img/icon-entrar.png") no-repeat left;
  background-size: 20px;
  background-position: 12px 10px;
 */