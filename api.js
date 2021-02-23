//Output fields
var task1_output = document.getElementById("textarea1");
var task2_output = document.getElementById("textarea2");

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