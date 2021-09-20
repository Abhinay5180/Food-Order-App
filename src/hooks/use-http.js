const useHttp = (requestConfig)=>{

    const sendRequest = async ()=>{
     const response = await fetch(requestConfig.url,{
         method: requestConfig.method ? requestConfig.method :'GET',
         headers: requestConfig.headers ?requestConfig.headers:{},
         body: requestConfig.body ? JSON.stringify(requestConfig.body):null
     })
    }
}

export default useHttp;