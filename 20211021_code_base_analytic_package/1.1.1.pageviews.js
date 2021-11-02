// назначить таймстемп для каждого хита с помощью функции ниже
var hit_timestamp = () => {
  var now = new Date();
  var tzo = -now.getTimezoneOffset();
  var dif = tzo >= 0 ? "+" : "-";
  var pad = (num) => {
    var norm = Math.abs(Math.floor(num));
    return (norm < 10 ? "0" : "") + norm;
  };
  return (
    now.getFullYear() +
    "-" +
    pad(now.getMonth() + 1) +
    "-" +
    pad(now.getDate()) +
    "T" +
    pad(now.getHours()) +
    ":" +
    pad(now.getMinutes()) +
    ":" +
    pad(now.getSeconds()) +
    "." +
    pad(now.getMilliseconds()) +
    dif +
    pad(tzo / 60) +
    ":" +
    pad(tzo % 60)
  );
};

// назначить session_id с помощью функции ниже
var session_id = () => {
  var d = new Date().getTime();
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
};

// получить id SberID
var user_id = ""; // код на усмотрение разработчиков сайта

// получить идентификатор пользователя для Segmento из кук
// var Segmento_UID = () => {
//     var match = document.cookie.match('(?:^|;)\\s*Segmento_UID=([^;]*)');
//     return (match) ? decodeURIComponent(match[1]) : false;
// }
