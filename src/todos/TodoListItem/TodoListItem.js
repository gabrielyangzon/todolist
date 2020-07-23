import React from 'react'
import {connect} from 'react-redux'
import {Wrapper , Button} from '../../styles/StyledComponents'
import { removeTodo } from '../../store/actions/actions';

const TodoListItem = ({todo , index , onRemovePressed}) => {

 
  
  let buttons = todo.completed ? null : 
  <>
  <Button 
    color={'lime'} >Mark as Completed
  </Button>
  
  <Button
    onClick={() => onRemovePressed(todo.text)} 
    color={'#ff471a'}>Remove
   </Button></>;
  
  return(
   <Wrapper key={index}>
   {`${index}.  ${todo.text}`}
   <div>

   {buttons}
   </div>
  </Wrapper>)}


const mapDistPatchToProps = (dispatch) => ({
  onRemovePressed: text => dispatch(removeTodo(text)) ,
  onMarkCompletedPressed: text => dispatch()
})


export default  connect(null,mapDistPatchToProps)(TodoListItem);