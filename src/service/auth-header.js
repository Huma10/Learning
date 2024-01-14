export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user',user.token);
    if (user && user.token) {
        return { 'authorization': user.token };
    }
    else{
        return {};
    }

}