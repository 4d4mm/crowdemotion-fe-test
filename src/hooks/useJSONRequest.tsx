import React from 'react'
import { getToken } from '../auth'
import { API_URL } from '../constants/api'
type useJSONRequestState = {
    isLoading: boolean;
    data?: any;
    error?: any;
}
const useJSONRequest = (path:string, requestConf:any= {}):Array<any> => {
    const [state, setState] = React.useState({
        isLoading: false,
        data: null,
        error: null,
    } as useJSONRequestState);
    
    const [_json, setJson] = React.useState();
    const [lastRequest, setLastRequest] = React.useState(-1);

    const invoke =( json:any ) => {
        if (json) {
            setJson(json)   
        }
    }

    const refresh = () => {
        setLastRequest(new Date().getTime())
    }
    React.useEffect(()=> {
        setState({
            ...state,
            isLoading: true,
            error: null 
        });

        async function request() {
            const token = getToken();
            const requestConfig:RequestInit= Object.assign({
                ...requestConf,
                headers: Object.assign(
                    {}, 
                    requestConf.headers, 
                    {
                        'Content-Type': 'application/json',
                    },
                    token ? {
                        'Authorization': `JWT ${token}`,
                    }:{},
                )
            }, _json ? {
                body: JSON.stringify(_json),
                json: undefined,
            }: {})
           
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

    }, [lastRequest, _json])

    return [state, invoke, refresh]
};

export default useJSONRequest;