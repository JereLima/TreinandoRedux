const InitialState = {
  nome: 'jere@jere.com.br',
  sobrenome: 'Yhdjhshhsyy',
  hora: '22:00',
};

const Auth = (state = InitialState, action) => {
  // if (state.leght === 0) {
  //   return state;
  // }
  switch (action.type) {
    case 'SET_NAME':
      return {...state, nome: action.payload.name};
      break;
  }

  return state;
};
export default Auth;
