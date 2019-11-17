$(document).ready(function(){

	"use strict";

	$("#menu").slicknav();
	$("#menu").slicknav();

	$(window).load(function(){
		$("#owl-example").owlCarousel({
			items : 3,
			autoPlay : true,
			navigation : false,
			pagination : true,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate : 200,
			responsiveBaseWidth: window,
			baseClass : "owl-carousel",
			theme : "owl-theme",
			lazyLoad : false,
			lazyFollow : true,
			lazyEffect : "fade"
		});
		$("#owl-example2").owlCarousel({
			items : 6,
			autoPlay : true,
			navigation : false,
			pagination : false,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate : 200,
			responsiveBaseWidth: window,
			baseClass : "owl-carousel",
			theme : "owl-theme",
			lazyLoad : false,
			lazyFollow : true,
			lazyEffect : "fade"
		});
		$(".masonry").isotope({
			itemSelector: ".selector"
		}), $(function() {
			var t = $(".masonry").isotope({
				itemSelector: ".item"
			}),
			i = {
				numberGreaterThan50: function() {
					var t = $(this).find(".number").text();
					return parseInt(t, 10) > 50
				},
				ium: function() {
					var t = $(this).find(".name").text();
					return t.match(/ium$/)
				}
			};
			$("#filters").on("click", "li", function() {
				var n = $(this).attr("data-filter");
				n = i[n] || n, t.isotope({
					filter: n
				})
			}), $(".filters").each(function(t, i) {
				var n = $(i);
				n.on("click", "li", function() {
					n.find(".active").removeClass("active"), $(this).addClass("active")
				})
			})
		})
	})
});

function onLinkClick(elmnt) {
	$("#item").load("./"+ elmnt.id + ".html");
	alert(elmnt.id);
 };

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
              url: "assets/js/request.php",
              data: {
                  name:name,
                  subject:subject,
                  body:body
			  },
			  heads : {
				'content-type' : 'application/x-www-form-urlencoded'
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