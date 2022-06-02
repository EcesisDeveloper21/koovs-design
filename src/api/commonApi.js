import axios from "axios"

export const loadHeaderCategory = async () => {

    try {
        const config = {
            headers: {
                "X-API-CLIENT": "WEB",
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Credentials':true,
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        };
        let data = await axios.get("https://betaapi.koovs.com/jarvis-home-service/v1/home/header/template",config)

        console.log("data", data)

let dat=await fetch('https://betaapi.koovs.com/jarvis-home-service/v1/home/header/template',config)
console.log("this is data from fetch",dat)
    }
    catch (err) {
console.log("its an err",err)
    }
}