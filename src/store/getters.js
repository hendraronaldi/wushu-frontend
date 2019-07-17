export const currentUser = state => {
    return state.userLogged ? state.userProfile : null
}