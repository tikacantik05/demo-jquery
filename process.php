<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $numberInput = $_POST['numberInput'];
    $textInput = $_POST['textInput'];
    $data = array();
    for ($i = 0; $i < $numberInput; $i++) {
        $data[$i] = $textInput . ' ' . $i;
    }
    header('Content-Type: application/json');
    echo json_encode($data);
}
