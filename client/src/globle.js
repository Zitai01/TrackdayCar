export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api/cars`
    : 'http://localhost:3001/api/cars'

export const GETCOMMENT_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/comments/carid/`
    : 'http://localhost:3001/comments/carid/'

export const DELETECOMMENT_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/comments/delete/`
    : 'http://localhost:3001/comments/delete/'

export const POSTCOMMENT_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/comments/post`
    : 'http://localhost:3001/comments/post'
export const POSTCAR_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/postcar`
    : 'http://localhost:3001/postcar'
