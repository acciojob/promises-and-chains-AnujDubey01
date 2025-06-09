//your JS code here. If required.
const button = document.getElementById("btn");
const age = document.getElementById("age");
const name = document.getElementById("name");

function btnfunction() {

if (age.value=="" || name.value==""){
	alert("Please enter valid details");
	return;
}

let promise = new Promise(function(resolve, reject) {
  // asynchronous task
	setTimeout(() => {
	 if (age.value > 18) {
        resolve(`Welcome,${name.value} . You can vote`);
    } else {
        reject(`Oh sorry ${name.value}. You aren't old enough.`);
    }
	},4000 );
});
 promise
    .then(function (message) {
      alert(message);
    })
    .catch(function (error) {
      alert(error);
    });
}