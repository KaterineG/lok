<?php

$name = $_POST['name'];
$tel = $_POST['tel'];
$birth = $_POST['birth'];
$text = $_POST['text'];
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = $_POST['email'];
    $to = "join@ecwid.com";
    $subject = "Обратная связь от " . $name;
    $message = "Имя: " . $name . ";" . "Телефон: " . $tel .";" . "Сообщение: "  . $text . ";" ;
    $headers = "From: " . $from;
    mail($to,$subject,$message, $headers);
    echo "The email message was sent.";
?>