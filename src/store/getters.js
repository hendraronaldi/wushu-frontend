export const currentUser = state => {
    return state.userProfile ? state.userProfile : null
}

export const currentAdmin = state => {
    return state.admin ? state.admin : null
}