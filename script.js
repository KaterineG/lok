  /* Создаем кроссбраузерный объект XMLHTTP */
  function getXmlHttp() {
      var xmlhttp;
      try {
          xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
          try {
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (E) {
              xmlhttp = false;
          }
      }
      if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
          xmlhttp = new XMLHttpRequest();
      }
      return xmlhttp;
  }

  function sendMail() {
      const from = document.getElementById('mail').innerText;
      const to = 'tet333@yopmail.com';
      const subj = 'Обратная связь';

      let xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
      xmlhttp.open('POST', 'test.php', true); // Открываем асинхронное соединение
      xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
      xmlhttp.send("a=" + encodeURIComponent(a) + "&b=" + encodeURIComponent(b)); // Отправляем POST-запрос
      xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
          if (xmlhttp.readyState == 4) { // Ответ пришёл
              if (xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
                  //document.getElementById("summa").innerHTML = xmlhttp.responseText; // Выводим ответ сервера
              }
          }
      };
  }