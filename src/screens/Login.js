import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {connect} from 'react-redux';
import Auth from '../reducers/AuthReducer';

const Login = (props) => {
  const vai = useNavigation();

  const proximo = () => {
    vai.navigate('Cadastro');
  };
  return (
    <SafeAreaView style={stl.container}>
      <Text style={stl.textButton}>{props.nome}</Text>
      <TextInput
        onChangeText={(e) => props.setName(e)}
        value={props.nome}
        style={stl.inputs}
        placeholder="Email"
        fontSize={25}
        color={'#AAA'}
      />
      <TextInput
        value={props.sobrenome}
        style={stl.inputs}
        placeholder="Senha"
        fontSize={25}
        color={'#AAA'}
      />
      <TouchableOpacity style={stl.button} onPress={proximo}>
        <Text style={stl.textButton}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const stl = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#00ff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    width: '90%',
    height: 50,
    fontSize: 25,
    paddingLeft: 15,
    borderRadius: 15,
    backgroundColor: '#ffff',
    marginBottom: 10,
  },
  textButton: {
    color: '#f0f0f0',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

const mapStateToProps = (state) => {
  return {
    nome: state.Auth.nome,
    sobrenome: state.Auth.sobrenome,
    hora: state.Auth.hora,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch({type: 'SET_NAME', payload: {name}}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
