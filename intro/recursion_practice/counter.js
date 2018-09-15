debugger

let test = function() {
  var counter = 0
  var bang = "BANG"

  return {
    increment: function() {
      
      return++counter
    },
    bang: function() {
      return bang
    }
  }
}

debugger
let t = new test()

for (i = 0; i < 10; i++) {
  debugger;
}