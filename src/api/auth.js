const apiCreateUser = "http://localhost:3000/api/createUser"; 
 export const createUser = async (userData) => {
    try { 
        const response = await fetch(apiCreateUser, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en createUser:', error);
        throw error;
    }
    
};
