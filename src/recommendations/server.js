//export const url = process.env.RECOMMENDATIONS_URL || 'recommendations-ms'
//export const port = process.env.RECOMMENDATIONS_PORT || '3003'
export const url = 'recommendations-lb'
export const url = '4003'
export const entryPoint = process.env.RECOMMENDATIONS_ENTRY || 'recommendations'


//export const urlv = process.env.REPRODUCTION_URL || 'reproduction-ms'
//export const portv = process.env.REPRODUCTION_PORT || '3002'
export const url = 'reproduction-lb'
export const url = '4005'
export const entryPointv = process.env.REPRODUCTION_ENTRY || 'videos'