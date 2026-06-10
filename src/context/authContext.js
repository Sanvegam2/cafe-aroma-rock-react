import { createContext, useState } from 'react';
import {createUser, login} from '../api/auth';

const signUp = async (userData) => {
  try {
    const response = await createUser(userData); 
    console.log('Respuesta del servidor:', response);
    return response;
  } catch (error) {
    console.error('Error en signUp:', error);
    throw error;
  }
};


const loginUser = async (userData) => {
  try {
    const response = await login(userData);
    console.log('Respuesta del servidor:', response);
    return response;
  } catch (error) {

    console.error('Error en login:', error);
    throw error;
  }
};


export { signUp, loginUser };