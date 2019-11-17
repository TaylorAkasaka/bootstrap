$(function() {
    // 送信確認
    $('#send').on('click', function() {
      // フォームから入力値を取得
      var name = $('#name').val();
      var subject = $('#subject').val();
      var body = $('#message').val();
      // 入力内容の確認
      if(name != "" && subject != "" && body != ""){
          // PHPに送信
          $.ajax({
              type: 'POST',
              url: "./request.php",
              data: {
                  name:name,
                  subject:subject,
                  body:body
              },
              success: function( data ) {
                  if(data.match(/success/)){
                    alert("送信が完了しました。");
                    location.href = "./php.html"; // 送信後戻り先URL
                  }
              },
              error: function() {
                  alert("予期せぬエラーが発生しました。");
                  return false;
              }
              }).done(function( msg ) {
              alert( "データ保存: " + msg );
              return false;
          });
      } else if(name == ""){
          $('#name').after('<span class = "error-info">入力してください。</span>');
          return false;
      } else if(subject == ""){
          alert("subject");
          return false;
      } else if(body == ""){
          alert("body");
          return false;
      }
    });
});