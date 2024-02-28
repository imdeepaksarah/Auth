import axios from "axios"


const API_URL ="/api/user/"

export const ragister = async(formData)=>{
   try {
    console.log("object")
    const response = await axios.post(API_URL+"register", formData)
    localStorage.setItem("user", JSON.stringify(response.data))
    console.log(response.data)
    
    return response.data
   } catch (error) {
    console.log(error)
   }
}

export const logIn=async(data)=>{
    try {
        const response = await axios.post(API_URL+"login",data);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

