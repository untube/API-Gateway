//export const url = process.env.AUTH_URL || 'authentication-ms';
//export const port = process.env.AUTH_PORT || '3000';
export const url = process.env.AUTH_URL || 'authentication-lb'
export const port =  process.env.AUTH_PORT || '4007'
export const entryPoint = process.env.AUTH_ENTRY || 'ldap';