import axios from 'axios'
import {API_PREFIX} from '@/lib/constants'

export default axios.create({
  baseURL: API_PREFIX,
})