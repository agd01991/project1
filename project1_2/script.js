function table() {
   var array = [];
   for (var i = 1; i <= 9; i++) {
      array[i] = []
      for (var k = 1; k <= 9; k++) {
         array[i].push(i * k)
      }
   }
   console.log(array)
}
table()