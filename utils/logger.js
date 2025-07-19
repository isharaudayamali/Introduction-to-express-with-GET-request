const logger ={
info:(message,file ="", functionName ="")  =>{
    const timestamp=new Date().toISOString();
    //const logMessage = timestamp+"[Info]"+file +""+functionName
    const logMessage = `${timestamp} \t [Info] ${message} \t file: ${file} \t function: ${functionName}`
    console.log(logMessage);
     
},
error : (message,file ="", functionName ="")  =>{
    const timestamp=new Date().toISOString();
    //const logMessage = timestamp+"[Info]"+file +""+functionName
    const logMessage = `${timestamp} \t [Error] ${message} \t file: ${file} \t function: ${functionName}`
    console.error(logMessage);
}}

module.exports =logger;