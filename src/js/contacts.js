 
 
 
 
 window.onload = () =>{
   // забираем данные с полей формы
   var inp_phone = document.querySelector("input[name=phone]");
   var inp_name = document.querySelector("input[name=name]");

   document.querySelector("#sub-button").onclick = (e) => {
     //  "&";разделение ввода данных полей
     e.preventDefault();
     var params = "phone=" + inp_phone.value + "&" + "name=" + inp_name.value;
     // собственно вызов функции с параметрами равными значениями соответствующих полей
     ajaxPost(params);
   };

   function ajaxPost(params) {
     var request = new XMLHttpRequest();

     request.onreadystatechange = function () {
       //проверка  Если всё произошло корректно и получен ответ от сервера
       if (request.readyState == 4 && request.status == 200) {
         console.log(request.responseText);
         if (request.responseText == 1) {
           // //  в случае успеха выведет сообщение
          document.querySelector("#result").classList.add("badge-success");
          document.querySelector("#result").classList.remove("badge-warning");
          document.querySelector("#result").innerHTML =
                "Отправка формы успешная!";
          document.querySelector("form").reset(); 
         } else {
           
           //   // если запрос прошел неудачно  то выведет сообщение сервера
        document.querySelector("#result").innerHTML = request.responseText;
        document.querySelector("#result").classList.remove("badge-success");
        document.querySelector("#result").classList.add("badge-warning");
         }
       }
     };

     // здесь открываются запрос
     request.open("POST", "form.php");

     // эту строку включать обязательно
     // он обязательно должен находиться после open перед send
     //   // это указание для сервера Как обрабатывать пришедшие запрос
     //   // иначе сервер проигнорирует данные отправленные методом Post
     // или данные будут повреждены
     request.setRequestHeader(
       "Content-Type",
       "application/x-www-form-urlencoded"
     );

     // здесь происходит запрос
     //при методе пост параметры передаются обязательно здесь
     request.send(params);
   }
 }