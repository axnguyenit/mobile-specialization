export const handleLogin = payload => ({
    type: 'LOGIN',
    payload,
})

export const handleLogout = (payload) => ({
    type: 'LOGOUT',
    payload,
})