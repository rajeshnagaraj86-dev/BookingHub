import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
    baseURL: 'https://api.example.com', // replace with your API's base URL
    timeout: 1000, // optional: specify a timeout
    headers: {'Authorization': 'Bearer YOUR_TOKEN'} // optional: set default headers
});

// Example API call function
export const fetchData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
    }
};

// Export other API call functions as needed
// Example:
export const postData = async (endpoint, data) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data: ', error);
        throw error;
    }
};
