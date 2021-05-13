
export const authReducer = (state = {},action) =>{
    // !v163    
    switch (action.type) {
        case 'login':
            return{
                ...action.payload,
                logged:true
            }
        case 'logout':
            return{
                logged:false
            }
        default:
            return state;
    }
}