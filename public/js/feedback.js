function sendFeedback() {
    var feedbackUser = new XMLHttpRequest();

    feedbackUser.open("POST", "http://ec2-44-207-84-110.compute-1.amazonaws:8080/feedback", true)
    feedbackUser.setRequestHeader("Content-Type", "application/json")
    feedbackUser.onload = function () {
        var token = JSON.parse(feedbackUser.responseText);
        console.log(token.result);
        if (token.result == "success") {
            alert("Your feedback has been sent successfully! We will be sure to make full use of it.")  
        }
        else { 
            alert("Your feedback has not been sent.")
        }
    }
    var subject = document.getElementById("feedbackSubject").value;
    var feedback = document.getElementById("feedbackContent").value;
    var payload = {subject: subject, feedback: feedback }
    feedbackUser.send(JSON.stringify(payload));
}

