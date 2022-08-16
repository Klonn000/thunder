<?php


// https://api.telegram.org/bot5448087147:AAEFceSoD6sKEX3vIQnWBMyqENRrm-IcAHo/getUpdates

$useremail = $_POST['useremail'];
$userfio = $_POST['userfio'];
$usertext = $_POST['usertext'];
$token = "5448087147:AAEFceSoD6sKEX3vIQnWBMyqENRrm-IcAHo";
$chat_id = '-770057080';
$arr = array(
    'Емаил: ' => $useremail,
    'ФИО: ' => $userfio,
    'Вопрос/Жалоба: ' => $usertext,
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