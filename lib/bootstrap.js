/**
 * @fileOverview 服务器初始化引导。
 */
const BOOTSTRAP_CONFIGURATION = 1,
const BOOTSTRAP_PAGE_CACHE,
const BOOTSTRAP_DATABASE,
const BOOTSTRAP_VARIABLES,
const BOOTSTRAP_SESSION,
const BOOTSTRAP_PAGE_HEADER,
const BOOTSTRAP_LANGUAGE,
const BOOTSTRAP_FULL;

/**
 * 引导初始化
 * @param  {number} phase 初始化至什么步骤
 */
var phaseCurrent

export default function init(phase = BOOTSTRAP_FULL){

}

