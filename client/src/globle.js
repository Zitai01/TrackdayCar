export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api/cars`
    : 'http://localhost:3001/api/cars'

export const GETCOMMENT_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/comments/carid/`
    : 'http://localhost:3001/comments/carid/'
