<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php'
    require 'phpmailer/src/PHPMailer.php'

    $mail = new PHPMailer(true);
    $mail->CharSer = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('info@fls.guru', 'Фридансер по жизни');
    $mail->addAddress('code@fls.guru');
    $mail->Subject = 'Привет! Это "Фрилансер по жизни"';

    $hand = "правая";
    if($_POST['hand'] == "left") {
        $hand = "левая";
    }

    $body = '<h1>письмо</h1>';

    if(trim(!empty($_POST['Имя']))){
        $body.='<p><strong>Имя:</strong>' .$_POST['Имя'].'</p>';
    }
    if(trim(!empty($_POST['Телефон']))){
        $body.='<p><strong>Телефон:</strong>' .$_POST['Телефон'].'</p>';
    }
    if(trim(!empty($_POST['Дата']))){
        $body.='<p><strong>Дата:</strong>' .$_POST['Дата'].'</p>';
    }
    if(trim(!empty($_POST['Время']))){
        $body.='<p><strong>Время:</strong>' .$_POST['Время'].'</p>';
    }
    if(trim(!empty($_POST['Емаил']))){
        $body.='<p><strong>Email:</strong>' .$_POST['Емаил'].'</p>';
    }


    $mail->Body = $body;

    if(!$mail->send()) {
        $message = 'Ошибка';
    }else {
        $message = 'Данные отправленны!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>
