import { createContext, useState } from 'react';
import {createUser} from '../api/auth';

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

export { signUp };