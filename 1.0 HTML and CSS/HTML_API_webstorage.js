
// Run this script file from html.
if (typeof(Storage) == "undefined") { console.log("Feature not available.")};
localStorage.setItem('name',Johndoe);
console.log(localStorage.getItem('name'));
console.log(localStorage.name);
localStorage.removeItem("name");

//SAME FOR SESSION STORAGE.