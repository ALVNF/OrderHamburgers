<?php

    //Gets the request body
    $requestPayload = file_get_contents('php://input');
    $order =  json_decode($requestPayload);
    var_dump($order);
    $message = "Cliente:  $order->fname $order->sname \nCalle:  $order->streat\nTelefono: $order->tlp \nEmail:  $order->mail.
    \nPedido: \n$order->hamSValue\n$order->hamBValue\n$order->hamQValue\n$order->hamBQValue";  
    $headers = "From: $order->mail";
    mail(
        //to
        'alvaroniguezfernandez1@gmail.com',
        'Nuevo Pedido',
        $message,
        $headers
    );

?>