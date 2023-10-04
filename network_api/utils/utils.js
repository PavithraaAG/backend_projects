const { default : axios}=require('axios');
const API_URL= process.env.API_URL;

const generateURL= (path)=>{
    return `${API_URL}/${path}`;
}

const sendRequest=async(path)=>{
    try{
        return await axios.get(generateURL(path));
    }
    catch(err){
        return { error: 1, message: err.message }
    }
}
module.exports = {
    generateURL,
    sendRequest 
}
