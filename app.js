$(document).on("change", "#sitelink", function () {
    if ($("#sitelink").is(":checked")) {
      $("#sitelink").parent().css("color", "rgb(0, 0, 255)");
      $(".qr").show();
      $(".footer").outerHeight(450);
    } else {
      $("#sitelink").parent().css("color", "rgb(0, 0, 0)");
      $(".qr").hide();
      $(".footer").outerHeight(90);
    } 
  });

function reset() {
  document.contact.reset();
}

$(function() {
  $('button[type=submit]').on('click', function() {

    // Formに入力されたデータを取得
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    // 連想配列化
    var postData = {"name":name, "email":email, "message":message};

    // POSTで送信
    $.post(
      "https://api.staticforms.xyz/submit",
      postData,
    );

    // 送信完了後の処理（送信完了のメッセージ表示）
    alert("送信完了しました。お問い合わせありがとうございます。")
    $('.input').val("");
    $('.textarea').val("");
  });
});

$('.nav_toggle').on('click', function () {
  $('.nav_toggle, .nav').toggleClass('show');
});
