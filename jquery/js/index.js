$.fn.extend({
    fellow: function () {
      $(this).html(
        '<button id="btn">登陆</button>' +
        '<div class="container">' +
        '<div class="mosk"></div>' +
        '<div class="login">' +
        '<div class="header">' +
        '<span>登陆</span>' +
        '<span id="close">X</span>' +
        '</div>' +
        '<div class="content">' +
        '<h1>登陆</h1>' +
        '</div>' +
        '</div>' +
        '</div>'
      )
      var oBtn = document.getElementById("btn");
      var oContainer = document.getElementsByClassName("container")[0];
      var oClose = document.getElementById("close");
      oBtn.onclick = function () {
        oContainer.style.display = "block";
      }
      oClose.onclick = function () {
        oContainer.style.display = "none";
      }
    }
  })