<?php
// データ取得
$name = $_POST['name'];
$subject = $_POST['subject'];
$body = $_POST['body'];
//　送信メール作成
mb_language("Japanese");
mb_internal_encoding("utf-8");
$to = "zqs89829@gmail.com";
$header = "kakukaisei@gmail.com";
//$subject = ".$subject;
$body = "お名前".$name."お問合せ内容：".$body;
$alert = "<script type='text/javascript'>alert('こちらは侍エンジニア塾です。');</script>";
// メール送信
if(mb_send_mail($to,$subject,$body,$header)){
    echo "success";
}else{
    echo $header;
}
?>