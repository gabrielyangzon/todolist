import styled from 'styled-components';


export const Wrapper = styled.div`

  width:60vh;
  height:10vh;
  margin:30px;
  box-shadow: 0 2px 4px 0 #666;
  display:flex;
  flex-direction: row;
  justify-content:space-around;
  align-items:center;
 
`;

export const Button = styled.button` 
    background: ${props=>props.color};
    color: black;
    padding:10px; 
    
    border: 0px solid black;
    border-radius: 10px;
    margin:3px;
    box-shadow: 0 2px 4px 0 #666;

    &:hover{
      box-shadow: 0 6px 14px 0 #666;
   transform: scale(1.05);
   cursor:pointer;
    }
`

export const Input = styled.input.attrs(props => ({
  type:props.type,
}))`padding: 3px ;

  border: 2px solid grey;
  border-radius: 3px;
  font-size: 0.7em;
`



