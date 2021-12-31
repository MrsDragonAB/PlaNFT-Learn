import {get,post} from '../request/http'

 

export  const getList = params => get('/market/sales',params);

export const postlist = params => post('/market/sales',params)
