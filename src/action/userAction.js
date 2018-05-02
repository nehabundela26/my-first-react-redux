export function setUserName(){
    return{
        type:"CHANGE_NAME",
        payload:"WILL"
    }
}
export function setUserAge(){
    return{
        type:"CHANGE_AGE",
        payload: 34
    }
}
export function fetchUser(){
    return{
        type:"FETCH_USER",
        payload: {
            name:'neha',
            age:23
        }
    }
}