/**
 * @fileOverview 站点配置信息设置读取
 */
import cache from './cache';
import lock from './lock';

export function init(conf = {}){
  var cached = cache.get('variables', 'cache_bootstrap'),
      variables;
  if(cached){
    variables = cached.data;
  }
  // cache miss
  else{
    var lock_name = 'variable_init';
    if(!lock.aquire(lock_name, 1)){
      lock.wait(lock_name);
      return init(conf);
    }
    else{
      // get from database;
      variables = {a:1, b:2};

      cache.set('variables', variables, 'cache_bootstrap');
      lock.release(lock_name);
    }
  }

  for(key in conf){
    variables[key] = conf[key];
  }

  return variables;
}

export function set(name, value){}

export function get(name, def){}

export function del(name){}
