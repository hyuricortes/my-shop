import styled from 'styled-components';


export const ContainerPaginacao = styled.div`
   display: flex;
   flex-direction: row;

   text-align: center;

   width: 1000px;

   @media only screen and (max-width: 1500px) {
    /* For everything bigger than 768px */
      width: 900px;

    }

     @media only screen and (max-width: 1100px) {
    /* For everything bigger than 768px */
      width: 500px;

    }

     @media only screen and (max-width: 800px) {
    /* For everything bigger than 768px */
      width: 300px;

    }
`;

export const ButtonArrow = styled.a`
    width: 51px;
    height: 52px;
    left: calc(50% - 6px/2 + 6px);
    top: calc(50% - 11px/2 + 10.5px);

    /* Fill Color/Grey #2 */
    background: #fff;
    
    border: 1px solid transparent;

    cursor: pointer;

     display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ButtonNumber = styled.a`
    width: 51px;
    height: 52px;
    left: 0px;
    top: 0px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border: 0.5px solid #ccc;
   // border-radius: 8px 0px 0px 8px;
    
    border-radius: 0px;
    background: #fff;
    color: #828D9E;
  
`;

export const ButtonNumberLeft = styled.a`
    width: 51px;
    height: 52px;
    left: 0px;
    top: 0px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border: 0.5px solid #ccc;
   // border-radius: 8px 0px 0px 8px;
    
    border-radius: 8px 0px 0px 8px;
    background: #fff;
    color: #828D9E;
  
`;

export const ButtonNumberRigth = styled.a`
    width: 51px;
    height: 52px;
    left: 0px;
    top: 0px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border: 0.5px solid #ccc;
   // border-radius: 8px 0px 0px 8px;
    
    border-radius: 0px 8px 8px 0px;
    background: #fff;
    color: #828D9E;
  
`;