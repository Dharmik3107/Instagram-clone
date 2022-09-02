export const dropDown = () => {
    return{
        type:'drop-down',
    }
}
export const searchBar = () => {
    return {
        type:'search',
    }
}
export const searchValue = (value) => {
    return {
        type:'search-value',
        payload:value
    }
}
export const newPost = () => {
    return {
        type:'new-post',
    }
}
