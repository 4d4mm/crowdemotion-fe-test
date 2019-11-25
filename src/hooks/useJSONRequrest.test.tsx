import useJSONRequest from './useJSONRequest';

describe('useJSONRequest', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('calls google and returns data to me', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
    
        //assert on the response
        
        // //assert on the times called and arguments given to fetch
        // expect(fetch.mock.calls.length).toEqual(1)
        // expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
    })
});