setInterval(function() {
  let a = new Date();
  let h = a.getHours();
  document.getElementById("hour").innerHTML = h;
  let m = a.getMinutes();
  document.getElementById("min").innerHTML = m;
  let s = a.getSeconds();
  document.getElementById("sec").innerHTML = s;
}, 1000)