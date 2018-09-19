function setCookie(name, val) {
  const days = 30;
  const exp = new Date();
  exp.setTime(exp.getTime() + days*24*60*60*1000);
  document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + exp.toGMTString();
}

function getCookie(key) {
  const cookie = document.cookie.replace(/[ ]/g, '');
  const arr = cookie.split(';');
  
  for (let i = 0; i < arr.length; ++i) {
    let pair = arr[i].split('=');
    if (key === arr[0]) {
      return arr[1];
    }
  }
}