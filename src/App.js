import React, { useReducer } from 'react';

const initialState = {

  email: '',

  password: '',

  submitted: false,

};

const reducer = (state, action) => {

  switch (action.type) {

    case 'email':

      return { ...state, email: action.payload };

    case 'password':

      return { ...state, password: action.payload };

    case 'submit':

      return { ...state, submitted: true };

    case 'reset':

      return initialState;

    default:

      throw new Error('Invalid action type');

  }

};

function Form() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch({ type: 'submit' });

  };

  const handleReset = () => {

    dispatch({ type: 'reset' });

  };

  return (

    <div>

      {!state.submitted ? (

        <div>No details found</div>

      ) : (

        <div>

          <div>User Email: {state.email}</div>

          <div>User Password: {state.password}</div>

        </div>

      )}

      <form onSubmit={handleSubmit}>

        <input

          type="email"

          placeholder="Email"

          value={state.email}

          onChange={(e) =>

            dispatch({ type: 'email', payload: e.target.value })

          }

        />

        <input

          type="password"

          placeholder="Password"

          value={state.password}

          onChange={(e) =>

            dispatch({ type: 'password', payload: e.target.value })

          }

        />

        <button type="submit">Submit</button>

        <button type="button" onClick={handleReset}>Reset</button>

      </form>

    </div>

  );

}

export default Form;