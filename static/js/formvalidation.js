var start_time;
var end_time;
function validate(){
        for(i=0;i<9;i++){
            for (j=0;j<9;j++){
                var number = document.getElementById("cell-" + i +"-"+j).value;
                if(number==""){
                    alert("Not finished ");
                    return ;
                }
            }
        }
        if((document.getElementById("username").value)==""){
            alert("Username is empty");
            return ;
        }
        checkingOutput();
}

function populateInput(){
    var inputArray=puzzles[0].question
    for(i=0;i<9;i++){
        for (j=0;j<9;j++){
            if(inputArray[i][j]!='0'){
                document.getElementById("cell-" + i +"-"+j).value=inputArray[i][j]
                document.getElementById("cell-" + i +"-"+j).disabled = true;
            }
        }
    }
    var d = new Date()
    start_time = d.getTime();
    console.log(start_time);
}

function checkingOutput(){
    var outputArray =  puzzles[0].answer;
    for (i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(document.getElementById("cell-" + i +"-"+j).value!=outputArray[i][j]){
                alert("Invalid answer")
                return;
            }
        }
    }
    var d = new Date()
    end_time = d.getTime();
    alert("Congratulations, You completed in " + 0.001 * (end_time - start_time) + " seconds" );
}
