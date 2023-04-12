import styled from 'styled-components';


export const ImageProduct = styled.div`
    position: relative;
    width: 254px;
    height: 254px;
    left: 0px;
    top: 0px;

    background: url(${(props) => '../images/products/'+props.defaultValue});
    background-size: cover;
    border-radius: 8px
`;