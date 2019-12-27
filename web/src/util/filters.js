// 年
export function year (val, type) {
  let date = new Date(val)
  let str = ''
  str = date.getFullYear()
  return str
}

// 月
export function month (val) {
  let date = new Date(val)
  let str = ''
  str = date.getMonth() + 1
  if (str < 10) {
    str += '0'
  }
  return str
}

// 日
export function day (val) {
  let date = new Date(val)
  let str = ''
  str = date.getDate()
  if (str < 10) {
    str += '0'
  }
  return str
}

// 时
export function time (val) {
  let date = new Date(val)
  let str = ''
  str = date.getHours()
  if (str < 10) {
    str += '0'
  }
  return str
}

// 分
export function branch (val) {
  let date = new Date(val)
  let str = ''
  str = date.getMinutes()
  if (str < 10) {
    str += '0'
  }
  return str
}

// 秒
export function seconds (val) {
  let date = new Date(val)
  let str = ''
  str = date.getSeconds()
  if (str < 10) {
    str += '0'
  }
  return str
}

export function timeago (dateTimeStampVal) {
  let dateTimeStamp = new Date(dateTimeStampVal).getTime() // dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
  let minute = 1000 * 60 // 把分，时，天，周，半个月，一个月用毫秒表示
  let hour = minute * 60
  let day = hour * 24
  let week = day * 7
  // let halfamonth = day * 15
  let month = day * 30
  let now = new Date().getTime() // 获取当前时间毫秒
  let diffValue = now - dateTimeStamp // 时间差

  if (diffValue < 0) {
    return
  }
  let minC = diffValue / minute // 计算时间差的分，时，天，周，月
  let hourC = diffValue / hour
  let dayC = diffValue / day
  let weekC = diffValue / week
  let monthC = diffValue / month
  let result = ''
  if (monthC >= 1 && monthC <= 3) {
    result = ' ' + parseInt(monthC) + '月前 '
  } else if (weekC >= 1 && weekC <= 3) {
    result = ' ' + parseInt(weekC) + '周前 '
  } else if (dayC >= 1 && dayC <= 6) {
    result = ' ' + parseInt(dayC) + '天前 '
  } else if (hourC >= 1 && hourC <= 23) {
    result = ' ' + parseInt(hourC) + '小时前 '
  } else if (minC >= 1 && minC <= 59) {
    result = '  ' + parseInt(minC) + '分钟前 '
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = '刚刚 '
  } else {
    result = dateTimeStampVal
  }
  return result
}
