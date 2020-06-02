// import Zepto from 'zepto';
import { Zepto as _zepto } from 'zepto';
import {extend as extendZepto} from './plugin/zepto.cookie.js';

extendZepto(_zepto);

export const Zepto = _zepto;
export const $ = _zepto;

export default _zepto;
