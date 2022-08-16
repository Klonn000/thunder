<?php


// https://api.telegram.org/bot5389899824:AAGkJHLwTgMf2qPTIlKbjfQ4u28XPwiDtbw/getUpdates

$username = $_POST['username'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];
$emaill = $_POST['email'];
$token = "5314142201:AAHzAGE3S3dQ1zCQlseWjIUO3U8WVvQ02A8";
$chat_id = "-610084593";
$arr = array(
    'Имя пользователя: ' => $username,
    'Телефон: ' => $phone,
    'Дата: ' => $date,
    'Время: ' => $time,
    'Email ' => $emaill,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if($sendToTelegram) {
    header('Location: payment.html');
    form.reset();
} else {
    echo "Error";
}
?>