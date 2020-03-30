/**
 * 获取最近的几个月的第一天
 *
 * 比如，获取前4个月 getRecentlyMonth(-4, false) ==> ['2020-2-1,2020-1-1,2019-12-1,2019-11-1']
 * 比如，获取后2个月 getRecentlyMonth(4, false) ==> ['2020-3-1','2020-4-1']
 *
 * @export
 * @param {number} [months=0] 默认当前月；months > 0 取后几个月；month < 0 取前几个月
 * @param {boolean} [withCurrent=true] 是否包含当前月
 * @returns {Date[]}
 */
function getRecentlyMonth() {
  var months = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var withCurrent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var current = new Date();
  current.setDate(1);

  var _months = Math.abs(months);

  if (_months === 0) {
    return withCurrent ? [current] : [];
  }

  var ls = Array(_months + (withCurrent ? 0 : 1)).fill(0).map(function (el, index) {
    var type = months > 0 ? 1 : -1;
    var t = new Date();
    t.setDate(1);
    t.setMonth(t.getMonth() + type * index);
    return t;
  });
  return ls.slice(withCurrent ? 0 : 1);
}

export { getRecentlyMonth };
