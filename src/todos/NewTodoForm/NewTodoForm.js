import React , { useState} from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../../store/actions/actions'
import { Wrapper , Button , Input } from '../../styles/StyledComponents'

const NewTodoForm = ({todos , onCreatePressed}) => {
   
  const [inputValue , setInputValue] = useState('')
   
  let errorMsg ;

  const onCreatePressedHandler = () => {
      const isDuplicate = todos.some(todo => todo.text ===inputValue)
      if(!isDuplicate){

      onCreatePressed(inputValue)
      setInputValue('')

      alert('Todo Added')
      }else{
        errorMsg = "You already added this todo"
      }
      
  }

   return(<Wrapper> 
      <Input 
        placeholder="Type your todo" 
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        />
        {errorMsg}
      <Button
        onClick={onCreatePressedHandler} 
        color={'lime'}
        >
         Create Todo</Button>
    </Wrapper>)
}

const mapStateToProps = (state) => ({
  todos: state.todos,

})

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: text => dispatch(createTodo(text))
})


export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);