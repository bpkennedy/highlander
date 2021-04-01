const sec = 1000
const min = 60 * sec

const seconds = numSec => Math.round(numSec * sec)
const minutes = numMins => Math.round(min * numMins)

const fiveSecTask = () => console.log('5')
const thirtySecTask = () => console.log('30')
const oneMinTask = () => console.log('60')
const twoMinTask = () => console.log('120')
const threeMinTask = () => console.log('180')

export const timers = [
  { delay: seconds(5), nextFireTime: 0, doFunction: fiveSecTask, counter: 0 },
  { delay: seconds(30), nextFireTime: 0, doFunction: thirtySecTask, counter: 0 },
  { delay: minutes(1), nextFireTime: 0, doFunction: oneMinTask, counter: 0 },
  { delay: minutes(2), nextFireTime: 0, doFunction: twoMinTask, counter: 0 },
  { delay: minutes(3), nextFireTime: 0, doFunction: threeMinTask, counter: 0},
]


