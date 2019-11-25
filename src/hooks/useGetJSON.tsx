import React from 'react'
import { getToken } from '../auth'
import { API_URL } from '../constants/api'

type useJSONRequestState = {
    isLoading: boolean;
    data?: any;
    error?: any;
}
const useGetJSON = (path:string, depends:Array<any> = []) => {
    const [state, setState] = React.useState({
        isLoading: false,
        data: null,
        error: null,
    } as useJSONRequestState)

    React.useEffect(()=> {
        setState({
            ...state,
            isLoading: true,
            error: null 
        });

        async function request() {
            const token = getToken();
            const requestConfig:RequestInit= {
                method: 'GET',
                headers: Object.assign({
                    'Content-Type': 'application/json',
                },
                token ? {
                    'Authorization': `JWT ${token}`,
                }:{})
            }
           
            try {
                const response = await fetch(`${API_URL}${path}`, requestConfig);
                const json = await response.json();
                setState({ 
                    ...state,
                    isLoading: false,
                    data: json 
                });
            } catch (error) {
                setState({ 
                    ...state, 
                    isLoading: false, 
                    error });
            }
            
        }

        request()

    }, depends)

    return state;
};

export default useGetJSON;