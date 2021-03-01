//Output fields
var task1_output = document.getElementById("textarea1");
var task2_output = document.getElementById("textarea2");
var task3_output = document.getElementById("textarea3");
var task4_output = document.getElementById("textarea4");
var task5_output = document.getElementById("textarea5");


function task1(){
    var task1_input1 = document.getElementById("T1I1").value;

    var object = {};

    object['number'] = task1_input1;
    //console.log(object['number']);

    fetch('api/task1.php', {
        method: 'POST', // or 'PUT'
        headers: 
            {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(object),
    })
    .then(response => response.json())
    .then(data => {
        task1_output.innerText = data;
        console.log(data);
    })
    .catch((error) => {
    console.error('Error:', error);
    alert("Sorry! Nomething went wrong. We will fix it!");
    });
}

function task2(){
    var task2_input1 = document.getElementById("T2I1").value;
    var task2_input2 = document.getElementById("T2I2").value;

    var object = {};

    object['number'] = task2_input1;
    object['subtract'] = task2_input2;
    //console.log(object['number']);

    fetch('api/task2.php', {
        method: 'POST', // or 'PUT'
        headers: 
            {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(object),
    })
    .then(response => response.json())
    .then(data => {
      
        task2_output.innerText = data;
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Sorry! Nomething went wrong. We will fix it!");
    });
}
function task3(){
    var task3_input1 = document.getElementById("T3I1").value;
 

    var object = {};

    object['text'] = task3_input1;
    
    //console.log(object['number']);

    fetch('api/task3.php', {
        method: 'POST', // or 'PUT'
        headers: 
            {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(object),
    })
    .then(response => response.json())
    .then(data => {
      
        task3_output.innerText = "Words: "+ data[0] +" Symbols: "+data[1];
       // console.log(data[1]);
    })
    .catch((error) => {
    console.error('Error:', error);
    alert("Sorry! Nomething went wrong. We will fix it!");
    });
}

function task4(){
    var task4_input1 = document.getElementById("T4I1").value;
    var task4_input2 = document.getElementById("T4I2").value;
 

    var object = {};

    object['nr1'] = task4_input1;
    object['nr2'] = task4_input2;
    
    //console.log(object['number']);

    fetch('api/task4.php', {
        method: 'POST', // or 'PUT'
        headers: 
            {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(object),
    })
    .then(response => response.json())
    .then(data => {
      
        task4_output.innerText = data;
       // console.log(data[1]);
    })
    .catch((error) => {
    console.error('Error:', error);
    alert("Sorry! Nomething went wrong. We will fix it!");
    });
}

function task5(){
    var task5_input1 = document.getElementById("T5I1").value;
   
 

    var object = {};

    object['text'] = task5_input1;
    
    
    //console.log(object['number']);

    fetch('api/task5.php', {
        method: 'POST', // or 'PUT'
        headers: 
            {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(object),
    })
    .then(response => response.json())
    .then(data => {
      
        task5_output.innerText = data;
       // console.log(data[1]);
    })
    .catch((error) => {
    console.error('Error:', error);
    alert("Sorry! Nomething went wrong. We will fix it!");
    });
}