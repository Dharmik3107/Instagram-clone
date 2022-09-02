const initialState = {
    dropDown:false,
    searchBar:false,
    newPost:false
}
const navbarReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'drop-down': return {
            dropDown:action.payload
        }
        case 'search': return {
            searchBar:action.payload
        }
        case 'new-post': return {
            newPost : action.payload
        }
        default: return state;
    }
}
export default navbarReducer