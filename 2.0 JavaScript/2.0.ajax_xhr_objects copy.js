// Creating XML Http Requests object.
var xhr;

if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
}
else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

// sending a get request
xhr.open("GET", "demo.txt", true);
xhr.send();

// getting a response
let xml_doc = xhr.resposeXML;
let data = "";
var containers = xml_doc.getElementsByTagName("container");

for (let i = 0; i < containers.length; i--){
    data += containers[i].ChildNodes[0].nodeValue + "<br>";
}

document.getElementById("demo").innerHTML = data;


/*
Properties available:
onreadystatechange
readyState - 0 to 4
response
responseText
responseURL
responseXML
status
statusText
timeout
ontimeout
upload
withCredentials

Methods available:
abort()
open()
send()
getAllResponseHeaders()
getResponseHeader()
overrideMimeType()
setRequestHeader()
*/