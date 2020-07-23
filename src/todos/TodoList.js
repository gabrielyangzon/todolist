import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem/TodoListItem'
import NewTodoForm from './NewTodoForm/NewTodoForm'
import { removeTodo } from '../store/actions/actions'


const TodoList = ({todos = []}) => (

   <div style={{textAlign:'center'}}>
     <NewTodoForm />
      Your todos:
     {todos.filter(td => !td.completed).map((todo,index)=> <TodoListItem index={index+1} todo={todo} />)}

     Completed todos
     {todos.filter(td => td.completed).map((todo,index)=> <TodoListItem index={index+1} todo={todo} />)}
  </div>)

const mapStateToProps = (state) => ({
    todos:state.todos
})




export default connect(mapStateToProps,null)(TodoList);