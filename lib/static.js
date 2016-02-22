/**
 * @fileOverview 提供js类似php static关键词的用法。
 *
 * a = static.set(name)
 */

export default {
  cache : {},

  /**
   * 获取值
   * @param  {string} name 键名称
   */
  get(name){
    if(this.cache[name]){
      return this.cache[name]
    }
    else{
      return null;
    }
  }

  /**
   * 设置值
   * @param {string} name  键值名称
   * @param {all} value 对应的键值
   */
  set(name, value = null){
    this.cache[name] = value;
    return this.cache[name];
  }
}
