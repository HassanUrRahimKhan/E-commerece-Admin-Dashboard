import axios   from "axios";

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTQzMGFiNjk4YWQzNmVjOGRmYzIzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDkzMDU5MywiZXhwIjoxNjU1MTg5NzkzfQ.EUvg4aReM29ny59BIscFZktYWOAWfLBnvB89YVKUEMg";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
//console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)

// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user))

//console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);

export const publicRequest =axios.create({
    baseURL: BASE_URL, 
});

export const userRequest =axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2UwMWIyMTU1YmZlZWY0N2YyODUxMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTE2MTI5NCwiZXhwIjoxNjU5NDIwNDk0fQ.FBW4lBaG6_oNUWQMzP070ARFnrQgKfmhli_uqDULXzU`} 
});