import axios   from "axios";

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTQzMGFiNjk4YWQzNmVjOGRmYzIzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDkzMDU5MywiZXhwIjoxNjU1MTg5NzkzfQ.EUvg4aReM29ny59BIscFZktYWOAWfLBnvB89YVKUEMg";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
//console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)

console.log(localStorage.getItem("persist:root"))

//console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);

export const publicRequest =axios.create({
    baseURL: BASE_URL, 
});

export const userRequest =axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`} 
});