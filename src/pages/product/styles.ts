import styled from 'styled-components';


export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;

  padding: 20px;

  @media only screen and (max-width: 972px) {
    /* For everything bigger than 768px */
     flex-direction: column;

    }

    @media only screen and (max-width: 552px) {
    /* For everything bigger than 768px */
      width: 478px;
  
    }
`;

export const ContainerImagemProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  position: relative;
  width: 720px;
  height: 688px;
 
  background: url(${(props) => props.defaultValue}); 
  background-repeat: no-repeat;
   
  border-radius: 8px;
  background-size: cover;

   @media only screen and (max-width: 1300px) {
    /* For everything bigger than 768px */
      width: 578px;
      height: 550px;
      background-size: contain;

    }

       @media only screen and (max-width: 552px) {
    /* For everything bigger than 768px */
      width: 478px;
      height: 450px;
      background-size: contain;

    }

    @media only screen and (max-width: 452px) {
    /* For everything bigger than 768px */
      width: 328px;
  
    }

    
`;

export const ContainerDescriptionProduct = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 50px;
 
    @media only screen and (max-width: 552px) {
    /* For everything bigger than 768px */
     padding-top: 70px;

    }

    @media only screen and (max-width: 452px) {
    /* For everything bigger than 768px */
       padding-top: 70px;
  
    }

`;

export const TextProduct = styled.p`
    width: 520px;
    height: 39px;

    /* Heading 2 / SemiBold */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;

    /* identical to box height */

    /* Text Color/Normal */
    color: #1E354E;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

     @media only screen and (max-width: 552px) {
    /* For everything bigger than 768px */
      width: 378px;
  
    }
`;

export const DescriptionProduct = styled.div`
    width: 519px;
    height: auto;

    padding-top: 50px;

    /* Heading 5 / Regular */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    /* or 138% */

    /* Text Color/Low Contrast */
    color: #828D9E;
     @media only screen and (max-width: 552px) {
    /* For everything bigger than 768px */
      width: 378px;
  
    }

      @media only screen and (max-width: 552px) {
    /* For everything bigger than 768px */
     padding-top: 75px;

    }

    @media only screen and (max-width: 452px) {
    /* For everything bigger than 768px */
       padding-top: 75px;
  
    }

`;

export const SizeProduct = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;

`;

export const TextSizeProduct = styled.p`
  width: 72px;
  height: 22px;

  /* Heading 5/SemiBold */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  margin-right: 10px;
  /* identical to box height, or 138% */

  /* Text Color/Normal */
  color: #1E354E;


  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const NumberSizeProduct = styled.p`
  box-sizing: border-box;

  width: 52px;
  height: 52px;

  margin-right: 10px;
  

  /* Fill Color/BG */
  background: #FFFFFF;

  /* Border Color/#1 */
  border: 2px solid  #E2E5EA;
  border-radius: 8px;

  /* Inside auto layout */
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;
  flex-grow: 0;
`;

export const PriceProduct = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTextPriceProduct = styled.p`
    width: 86px;
    height: auto;
    padding-top: 30px;

    /* Heading 5 / Regular */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    /* identical to box height, or 138% */

    /* Text Color/Low Contrast */
    color: #828D9E;
`;

export const TextPriceProduct = styled.p`
    position: relative;
    width: 164px;
    height: auto;

    /* Heading 2 / SemiBold */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;

    /* identical to box height */

    /* Text Color/Normal */
    color: #1E354E;
`;

export const ButtonsProduct = styled.div`
   display: flex;
   flex-direction: row;

   padding-top: 20px;

   @media only screen and (max-width: 552px) {
    /* For everything bigger than 768px */
      width: 378px;
  
    }
`;


export const ShareProduct = styled.div`
   display: flex;
   flex-direction: row;

   justify-content: center;
   align-items: center;

   padding-top: 20px;
`;

export const TextLikeShareProduct = styled.div`
    display: flex;
    flex-direction: row;

    width: 200px;
    height: 22px;

    /* Heading 5 / Medium */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    //line-height: 22px;

    /* identical to box height, or 138% */

    /* Text Color/Low Contrast */
    color: #828D9E;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const TextShareProduct = styled.div`
    display: flex;
    flex-direction: row;

    width: 200px;
    height: 22px;

    /* Heading 5 / Medium */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
   // line-height: 22px;

    /* identical to box height, or 138% */

    /* Text Color/Low Contrast */
    color: #828D9E;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const NumberInputQt = styled.input`
  box-sizing: border-box;

  width: 70px;
  height: 50px;

  padding: 10px;

  margin-right: 10px;

  /* Fill Color/BG */
  background: #FFFFFF;

  /* Border Color/#1 */
  border: 1px solid #E2E5EA;
  border-radius: 8px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const ImagePequenoProduto = styled.div`
  width: 80px;
  height: 80px;
  left: 40px;
  top: 40px;

  background: url('../../images/produto-grande-02.jpg');
 
  margin-top:10px;

  border-radius: 8px;
`;

