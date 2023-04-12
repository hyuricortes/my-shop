import styled from 'styled-components';


export const ContainerPaginacao = styled.div`
   display: flex;
   flex-direction: row;

   text-align: center;
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

    {${(props) => props.datatype === 'first' ? 'border-radius: 8px 0px 0px 8px' : props.datatype == 'lasted' ? 'border-radius: 0px 8px 8px 0px' : 'border-radius: 0px'}};

    {${(props) => props.hidden === true ? 'background: #6237BF;' : 'background: #fff;'}}

     {${(props) => props.hidden === true ? 'color: #FFF;' : 'color: #828D9E;'}}
`;