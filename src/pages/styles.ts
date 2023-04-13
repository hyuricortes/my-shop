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

  flex-direction: column;

  padding: 20px;
`;

export const ContainerOrderFiltro = styled.div`
   flex-direction: row;

   width: '100%';
   display: flex;

   justify-content: flex-end;
   align-items: flex-end;

   max-width: 930px;
   margin-bottom: 20px;
`;


export const ContainerProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  max-width: 1000px;
`;


export const ContainerPaginationProducts = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 20px;
`;

