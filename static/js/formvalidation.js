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
        update_result();
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
    //alert("Congratulations, You completed in " + 0.001 * (end_time - start_time) + " seconds" );
    document.getElementById('log').innerHTML += "<br>Congratulations, You completed in " + 0.001 * (end_time - start_time) + " seconds";

}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;

}

function httpPost(theUrl){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', theUrl, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        // do something to response
        console.log(this.responseText);
        document.getElementById('tablevalues').innerHTML = this.responseText;
    };
    xhr.send('userid=2&username='+document.getElementById("username").value+'&user_time='+0.001 * (end_time - start_time));
}
function getUserData(){
document.getElementById('tablevalues').innerHTML += httpGet("/get_user_data");
}
function update_result(){
httpPost("/update_result");
}
window.onload=getUserData

