// // console.log('hello world')
// const a=1
// const b=2
// const c=a+b
// // console.log("result",c)
//
// const foo = ( num1, num2 )=> {
//   const  result = num1 * num2
//   return result;
// }
//
// const multi = foo
//
// const test =  multi(2,3)
// console.log("my function",foo)
// const foo2 = num1, num2 => num1 * num2
//

const b_day = 0
const b_month = 0
const b_year = 0

const days_in_a_month = 365 / 12
const this_year = 2019

const calcAge = (day, month, year) => {
  const days = day
  const months = days_in_a_month * b_month
  const years = (this_year - year) * 365

  const total_days = days + months + years
  return total_days
}

const age_in_days = calcAge(13,10,1991)
console.log( 'age_in_days', age_in_days)
console.log(age_in_days /365)
