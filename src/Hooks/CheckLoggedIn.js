function CheckLoggedIn() 
{
    const token = localStorage.getItem('user')
    if(token){
        return true
    }
    else{
        return false
    }
}

export default CheckLoggedIn