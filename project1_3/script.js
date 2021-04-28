function nameCheck() {
   let name = prompt("Введите своё имя: ", '');

   function confirmation() {
      let agree = confirm("Вы подтверждаете правильность ввода?");
      if (agree == true) {
         alert("Привет " + name + "!");
      } else {
         nameCheck()
      }
   }
   if (name == null || name == false) {
      nameCheck()
   } else {
      confirmation();
   }
}
nameCheck()