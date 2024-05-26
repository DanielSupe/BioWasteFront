export const getUser = ()=>{
    const user = JSON.parse(localStorage.getItem("Autentication"))
    // if(user.result.admin){
    //     return user.admin
    // }
    return user
}