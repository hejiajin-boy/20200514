//求数组的奇数和

let scores = [92, 69, 95, 53, 62, 625, 89, 96, 55, 445, 55]
let sum = scores.reduce((sum, n) => {
        return n % 2 === 0 ? sum : sum + n //判断n是否为奇数，是的话相加，否的话继续下一步
    }, 0) //初始值为零
console.log(sum)

//求数组的偶数和
let jsum = scores.reduce((jsum, n) => {
    return n % 2 === 0 ? jsum + n : jsum
}, 0)
console.log(jsum)


// 数组转换
let he = Array('1234567')
let he = [1, 2, 3, 4, 5, 6, 7]
let he2 = he.map(item => {
    return {
        1: '周一',
        2: '周二',
        3: '周三',
        4: '周四',
        5: '周五',
        6: '周六',
        7: '周日'
    }
}, [item])
console.log(he2)


//求和
let caokun = [1, 2, 3, 5, 8, 9]
caokun.reduce((sum, item) => { return sum + item }, 0)


//求偶数和奇数
let hejiajin = [1, 2, 3, 4, 5, 6, 9]
let he3 = hejiajin.filter(item => item % 2 === 0)
let he4 = hejiajin.filter(item => item % 2 != 0)
console.log(he3, he4)