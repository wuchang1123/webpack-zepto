// import Zepto from 'zepto';
import { Zepto as _zepto } from 'zepto';
//require('exports-loader?$,Zepto!zepto');
import _cookie from './plugin/zepto.cookie.js';

_cookie(_zepto);

// console.log(_zepto.fn.cookie);

export const Zepto = _zepto;
export const $ = _zepto;
