import styled from 'styled-components';


export const TextInput = styled.input`
  box-sizing: border-box;

    width: 110px;
    height: 52px;

    /* Fill Color/BG */
    background: #FFFFFF;

    /* Border Color/#1 */
    border: 1px solid #E2E5EA;
    border-radius: 8px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    flex: 1;

    padding: 20px;
`;

export const DivInputFiltroPreco = styled.p`
  padding-left: 10px;
  padding-right: 10px;

  flex: 1;
`;