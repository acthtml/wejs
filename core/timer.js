/**
 * @file core/timer
 *
 * timer system
 *
 * ```js
 *   import timer from 'core/timer';
 *   timer.start('page');
 * ```
 */

export default {
  // 计时器暂存。
  timers = {};

  /**
   * 开始指定名称的计时器
   *
   * @param  {string} name 计时器名称
   */
  start(name){
    var timer = this.timers[name] || {};

    timer.start = new Date().getTime();
    timer.count = timer.count ? ++timer.count : 1;
  }

  stop(name){
    var timer = this.timers[name];
    if(!timer) return false;

    timer.time = timer.time || 0;

    if(timer.start){
      var diff = new Date().getTime() -timer.start;
      delete timer.start;
      timer.time += diff;
    }

    return timer;
  }

  read(name){
    var timer = this.timers[name],
        diff = 0;

    if(timer.start){
      diff = new Date().getTime() - timer.start;
    }

    return (timer.time || 0) + diff;
  }
}
