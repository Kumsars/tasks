<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    $data = json_decode(file_get_contents("php://input"));
    $number =  $data->number ;
    $array = array();
    

    $count = 0;  
    $num = 2;  
    while ($count < $number) {  
        $div_count=0;  
        for ( $i=1; $i<=$num; $i++){  
            if (($num%$i)==0) {  
            $div_count++;  
            }  
        }  
        if ($div_count<3) { 
            array_push($array,$num); 
        $count=$count+1;  
        }  
        $num=$num+1;  
    }  

   // json_encode($array);
    print_r(json_encode($array));
    
?>