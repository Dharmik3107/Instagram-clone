export const dropDown = (booleanValue) => {
    return{
        type:'drop-down',
        payload:booleanValue
    }
}
export const searchBar = (booleanValue) => {
    return {
        type:'search',
        payload:booleanValue
    }
}
export const newPost = (booleanValue) => {
    return {
        type:'new-post',
        payload:booleanValue
    }
}
