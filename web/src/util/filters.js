// 年
export function year (val, type) {
  val = '2019-12-23 15:01:55'
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
