import styled from 'styled-components';

export const CheckboxContainer = styled.div``;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
 /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.15em;
  margin-right: 0.5em;
  border: 0.15em solid #6237BF;
  outline: none;
  cursor: pointer;

  border-radius: 4px;

  background-color: ${(props) => props.color === '#6237BF' ? '#6237BF' : '#FFF'};
    
`;

export const Text = styled.label`
   display: flex;
   flex-direction: row;

   justify-content: center;

   padding-bottom: 5px;
`;

export const SpanCheckbox = styled.span`

`;