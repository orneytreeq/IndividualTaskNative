import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const { useState, useReducer } = React;

const initialState = {
  likes: 0,
  dislikes: 0
}

const appReducer = (state, action) => {
  switch(action.type) {
    case 'HANDLE_LIKE':
      state.likes =  state.likes + action.payload;
      return {
        ...state,
        likes: state.likes
      }
    case 'HANDLE_DISLIKE':
      state.dislikes =  state.dislikes + action.payload;
      return {
        ...state,
        dislikes: state.dislikes
      }
    default:
      return state
  }
}

function Choice(){
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { likes, dislikes } = state
  
  const handleClickLike = () => {
    {
      dispatch({
        type: 'HANDLE_LIKE',
        payload: 1,
      })
    }
  }
  
  const handleClickDislike = () => {
    {
      dispatch({
        type: 'HANDLE_DISLIKE',
        payload: 1,
      })
    }
  }
  
  return (
    <div className='container'>  
      <button className={state.likes>0? 'btn active' : 'btn inactive'} onClick={handleClickLike}> 
        Да 
        <span>{likes}</span>
      </button>
      
      <button className={state.dislikes>0? 'btn active' : 'btn inactive'} onClick={handleClickDislike}> 
        Нет 
        <span>{dislikes}</span>
      </button>
    </div>
  )
  
}



root.render(<Choice/>)
