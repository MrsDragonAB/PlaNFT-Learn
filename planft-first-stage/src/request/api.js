import axios from 'axios'
import {get,post} from '../request/http'
export const getRequest = params => get('api/market/sales',params);
export const postRequest = params => post('api/user/follow',params)
