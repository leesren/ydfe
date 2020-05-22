
/**
 * 获取最近的几个月的第一天
 * 
 * ```js
 * // 比如当前3月份，获取前4个月
 * getRecentlyMonth(-4, false) // 2020-2-1,2020-1-1,2019-12-1,2019-11-1
 * // 比如当前3月份，获取后2个月 
 * getRecentlyMonth(4, false) // 2020-4-1,2020-5-1
 * ```
 *
 * @export
 * @param {number} [months=0] 默认当前月；months > 0 取后几个月；month < 0 取前几个月
 * @param {boolean} [withCurrent=true] 是否包含当前月
 * @returns {Date[]}
 */
export function getRecentlyMonth(months = 0, withCurrent = true): Date[] {
    const current = new Date;
    current.setDate(1);
    let _months = Math.abs(months);
    if (_months === 0) {
        return withCurrent ? [current] : []
    }
    let ls = Array(_months + (withCurrent ? 0 : 1)).fill(0).map((el, index) => {
        let type = months > 0 ? 1 : -1;
        let t = new Date();
        t.setDate(1);
        t.setMonth(t.getMonth() + type * index)
        return t
    })
    return ls.slice(withCurrent ? 0 : 1)
}
var data = {
    "5e831a8a21896a497411aeca": {
        "0": {
            "label": "不知道",
            "value": "1",
            "subject": {
                "_id": "5e8353dc4e6ae9641dac0e10",
                "title": "函数声明和函数定义有什么区别?",
                "level": "5e834233245b195aeb8572b1",
                "type": "5e8317b2d4f1af46b99d74c2",
                "categoryId": "5e831a8a21896a497411aeca",
                "typeTemplate": "5e831f18f066a64b815f24ca",
                "value": "1585664900997",
                "description": "tips: function 和 const a = function()",
                "levelLabel": "简单",
                "categoryLabel": "函数 Function",
                "typeLabel": "单选题"
            }
        },
        "1": {
            "label": "了解",
            "value": "2",
            "subject": {
                "_id": "5e8353fa4e6ae9641dac0e11",
                "title": "怎么改变函数的作用域？如果传入的是null 对象，那么作用域指向哪里?",
                "level": "5e834233245b195aeb8572b1",
                "type": "5e8317b2d4f1af46b99d74c2",
                "categoryId": "5e831a8a21896a497411aeca",
                "typeTemplate": "5e831f18f066a64b815f24ca",
                "value": "1585664900997",
                "description": "tips: 1、bind、call、apply; 2、null 会指向 全局",
                "levelLabel": "简单",
                "categoryLabel": "函数 Function",
                "typeLabel": "单选题"
            }
        },
        "2": {
            "label": "了解",
            "value": "2",
            "subject": {
                "_id": "5e8354104e6ae9641dac0e12",
                "title": "箭头函数和函数有什么区别?",
                "level": "5e834233245b195aeb8572b1",
                "type": "5e8317b2d4f1af46b99d74c2",
                "categoryId": "5e831a8a21896a497411aeca",
                "typeTemplate": "5e831f18f066a64b815f24ca",
                "value": "1585664900997",
                "description": "tips: 无this; 不可new, 因为无Construct；无原型；无super",
                "levelLabel": "简单",
                "categoryLabel": "函数 Function",
                "typeLabel": "单选题"
            }
        }
    },
    "5e831b473ad80849b451ff7a": {
        "0": {
            "label": "熟悉",
            "value": "3",
            "subject": {
                "_id": "5e835a7a4e6ae9641dac0e13",
                "title": "求数组的最大最小值?",
                "level": "5e834233245b195aeb8572b1",
                "type": "5e8317b2d4f1af46b99d74c2",
                "categoryId": "5e831b473ad80849b451ff7a",
                "typeTemplate": "5e831f18f066a64b815f24ca",
                "value": "1585666407592",
                "description": "",
                "levelLabel": "简单",
                "categoryLabel": "数组 Array",
                "typeLabel": "单选题"
            }
        },
        "1": {
            "label": "了解",
            "value": "2",
            "subject": {
                "_id": "5e835f224e6ae9641dac0e14",
                "title": "类数组和数组区别，类数组怎么转换成数组?",
                "level": "5e834233245b195aeb8572b1",
                "type": "5e8317b2d4f1af46b99d74c2",
                "categoryId": "5e831b473ad80849b451ff7a",
                "typeTemplate": "5e831f18f066a64b815f24ca",
                "value": "1585667823866",
                "description": "tips: arguments 或者 dom selector；[...xx] 或者 Arrar.form(xxx)",
                "levelLabel": "简单",
                "categoryLabel": "数组 Array",
                "typeLabel": "单选题"
            }
        },
        "2": {
            "label": "熟悉",
            "value": "3",
            "subject": {
                "_id": "5e835f444e6ae9641dac0e15",
                "title": "数组遍历的几种方式，哪一种可以中途break退出?",
                "level": "5e834233245b195aeb8572b1",
                "type": "5e8317b2d4f1af46b99d74c2",
                "categoryId": "5e831b473ad80849b451ff7a",
                "typeTemplate": "5e831f18f066a64b815f24ca",
                "value": "1585667823866",
                "description": "tips: 【for, for...of,forEach】",
                "levelLabel": "简单",
                "categoryLabel": "数组 Array",
                "typeLabel": "单选题"
            }
        }
    }
}
function handleData() {
    const list = Object.entries(data).map((el, index) => {
        const [key, valueObj] = el;
        let valueList = Object.keys(valueObj).sort((a: any, b: any) => a - b);
        valueList = valueList.map((itemKey, i) => {
            return valueObj[itemKey]
        });
        let categoryLabel = '';
        const item: any = valueList.find((el: any) => el.subject.categoryId == key);
        if (item) {
            categoryLabel = item.subject.categoryLabel;
        }
        return {
            categoryId: key,
            categoryLabel,
            list: valueList,
        }
    });
    const xAxis = [
        {
            "label": "不知道",
            "value": "1"
        },
        {
            "label": "了解",
            "value": "2"
        },
        {
            "label": "熟悉",
            "value": "3"
        },
        {
            "label": "熟练",
            "value": "4"
        },
        {
            "label": "精通",
            "value": "5"
        }
    ];

    const series: any = [];
    const yAxis: any = [];
    list.map((el, index) => {
        yAxis.push(el.categoryLabel);
        const ls =
            xAxis.map((x, xIndex) => {
                const count = el.list.filter((sub: any, subIndex) => sub.value == x.value).length;
                series.push([index, xIndex, count])
            })
    })


    console.log('..')
}
handleData();