import {get,post} from '../request/http'

 

export  const getList = params => get('api/market/sales',params);

 export const postlist = params => post('api/market/sales',params)
