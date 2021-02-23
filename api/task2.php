<?php
  include 'for1n2.php';

    $subtract = $data->subtract;
    $array = array_slice($array, $subtract);

    print_r(json_encode($array));
    
?>