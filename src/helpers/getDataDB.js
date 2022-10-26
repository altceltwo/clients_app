import { useEffect, useState } from "react"

export const getDataDB = () => {
    const [useGetDevice, setUseGetDevice] = useState([])

    const getDevices = async () => { 
        const userid = 41;
        try {
            const response = await fetch('https://appmobile.altcel2.com/devices?userid='+userid, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }) 


    
            if(response.status == 200){
                const {message, http_code, devices} = await response.json()
                setUseGetDevice(devices)
            }
            // console.log(devices)
    
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getDevices()
    }, [])
    

    return {
        useGetDevice
    }
}
