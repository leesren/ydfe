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
export declare function getRecentlyMonth(months?: number, withCurrent?: boolean): Date[];
