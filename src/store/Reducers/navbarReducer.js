const initialState = {
    isActive:false,
    search:false,
    searchValue:'',
    newpost:false
}
const navbarReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'drop-down': return {
            ...state,
            isActive:!state.isActive
        }
        case 'search': return {
            ...state,
            search:!state.search
        }
        case 'search-value':return {
            ...state,
            searchValue:action.payload
        }
        case 'new-post': return {
            ...state,
            newpost : !state.newpost
        }
        default: return state;
    }
}
export default navbarReducer