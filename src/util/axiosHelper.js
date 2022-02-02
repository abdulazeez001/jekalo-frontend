import axios from "axios";
import { useState,useEffect } from "react";


export const axiosTemplate = (BASE_URL,stateHook) =>{
        return{ 
            post:async (data)=>{
                  try{
                    const res = await axios['post'](BASE_URL,data)
                    return res.data
                  }catch (err) {
                   return err?.response?.data
                  }
                },
            delete:async ({username})=>{
                try{
                    BASE_URL += `/${username}`
                    const res = await axios['delete'](BASE_URL)
                    return res.data
                  }catch (err) {
                   return err?.response?.data
                  }
              },
            get:()=>{
                stateHook({ loading: true });
                axios['get'](BASE_URL).then((results) => {
                const allResult = results.data.data;
                stateHook({ loading: false, data: allResult });
              });
            }        
     }
}

export const useAxiosHelper = (BASE_URL) =>{
    const [fetchData,stateFetchData] = useState({loading:false,data:null})
    return  {
             useGet:()=>{
                useEffect(() => {
                    axiosTemplate(BASE_URL,stateFetchData).get()
                 },stateFetchData);
                 return fetchData
             },
    }

}

export let BASE_URL = 'https://powerful-savannah-17837.herokuapp.com/api/v1/users'
