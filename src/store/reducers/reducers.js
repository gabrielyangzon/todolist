import {CREATE_TODO , REMOVE_TODO,COMPLETE_TODO} from '../actions/actions'


export const todos = (state =[],action) => {
   
    const {type , payload} = action;
    switch (type){
      
      ///Create todo
      case CREATE_TODO:{
      const { text } = payload
      const newTodo = {
          text,
          isCompleted: false
      }; 
      return state.concat(newTodo) 
    }


      ///Remove todo
      case REMOVE_TODO:{
        const { text } = payload
        return state.filter(todo => todo.text !==text)
      }


      ///Update todo
      case COMPLETE_TODO: {
        const { text } = payload
        return state
      }
      ///Default state
      default:
      return state;
    }

  
}