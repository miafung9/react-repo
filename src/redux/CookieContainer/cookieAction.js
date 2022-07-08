import { BUY_PIZZA, RETURN_PIZZA } from '../pizza/pizzaTypes'
import {BUY_COOKIE, RETURN_COOKIE, RESET_COOKIE} from './cookieTypes'

xport const BUY_COOKIE= (quantity)=> [
    return {
        type: BUY_PIZZA,
        payload: quantity
    }

xport const RETURN_COOKIE= (quantity) => {
    return {
        type: RETURN_PIZZA,
        payload: quantity
    }

   xport const RESET_COOKIE = () => {
    return {
        type:RESET_COOKIE
    }
   } 
}
]