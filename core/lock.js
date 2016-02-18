/**
 * @file core/lock
 *
 * lock system。
 *
 * ```js
 *   import lock from 'core/lock';
 *   // 做一些只能单一线程中才能做的事，即使多个请求多个线程同时操作，也只能一个
 *   // 能操作，其他操作依次排序。
 *   function long_time_operation(){
 *     let lock_name = 'long_time_operation';
 *     if(!lock.acquier(lock_name)){
 *       lock.wait(lock_name);
 *       return long_time_operation();
 *     }
 *
 *     // do some long time operation.
 *
 *     // 最后释放锁。
 *     lock.release(lock_name);
 *   }
 *   if(lock.acquire('some_long_time_operation')){
 *      // 做些操作
 *      // ....
 *
 *      // 释放锁
 *      lock.release('some_long_time_operation');
 *   }
 *   else{
 *      lock.wait();
 *   }
 * ```
 */

/**
 * 获取唯一的id
 * @return {number} 唯一的id
 */
function lock_id(){

}

export default {
  acquire(name, timeout){}

  release(name){}

  release_all(){}

  wait(){}
}
