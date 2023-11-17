export const getAccessToken = () => {
    return `Bearer ${localStorage.getItem('access_token')}`
}

export const setAccessToken = (accessToken: string) => {
    localStorage.setItem('access_token', accessToken);
}

export const getRefreshToken = () => {
    return `Bearer ${localStorage.getItem('refresh_token')}`
}

export const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem('refresh_token', refreshToken);
}