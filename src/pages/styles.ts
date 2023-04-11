import styled from 'styled-components';


export const ContainerIndex = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

export const ContainerFilter = styled.div`

  flex: 1;
`;

export const ContainerProducts = styled.div`
  flex: 4;
`;


export const TextCatgories = styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;

    /* identical to box height, or 156% */

    /* Text Color/Normal */
    color: #1E354E;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Divisor = styled.div`
 background: #F1F3F6;
 border: 1px solid #F1F3F6;
 width: 100%;
`;

export const ButtonFilter = styled.button`
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    gap: 10px;


    width: 164px;
    height: 52px;

    /* Fill Color/BG */
    background: #FFFFFF;

    /* Border Color/#1 */
    border: 1px solid #E2E5EA;
    border-radius: 8px;

    /* Inside auto layout */
    flex: none;
    order: 4;
    flex-grow: 0;
`;

export const BoxCleanFilter = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  height: 100px;
`;


export const ButtonCollapse = styled.button`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;

  &:hover {
    background-color: #ccc;
  }
`;

export const TextCollapse =  styled.div`
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
`;
