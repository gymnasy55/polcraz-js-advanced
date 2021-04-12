console.log('Start')
console.log('Start2')

function timeout2sec() {
  console.log('timeout2sec')
}

setTimeout(function () {
  console.log('Inside timeout, after 2 seconds')
}, 5000)

setTimeout(timeout2sec, 2000)

console.log('End')

console.log('Start')

setTimeout(function() {
  console.log('Inside timeout5sec')
}, 0)

console.log('End')