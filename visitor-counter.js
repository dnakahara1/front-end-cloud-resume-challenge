function visitorCounter(){
	fetch("https://hggxuw0td9.execute-api.us-east-2.amazonaws.com/visitorCounter").then(response => response.text()).then((body) => {
		document.getElementById("visitor-counter").innerHTML=body
	})
}