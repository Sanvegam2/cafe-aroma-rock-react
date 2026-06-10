const apiCreateUser = "https://backend-cafe-aroma-rock.vercel.app/api/createUser"; 
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



const apiLogin = "https://backend-cafe-aroma-rock.vercel.app/api/login";
export const login = async (userData) => {
    try{
        const response = await fetch(apiLogin, {
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
        console.error('Error en login:', error);
        throw error;
    }
};
