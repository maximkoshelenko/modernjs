// Windows Methods // Objects // Properties //
// window.alert(123);
// alert(123);
// Both ways is working

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure?')){
//     console.log('YES')
// } else {
//     console.log('NO')
// }

let val

// Outer hight and width
val = window.outerHeight;
val = window.outerWidth;

// Inner hight and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://www.google.com';
// Reload
//window.location.reload();

//History object
//window.history(-1); //return for some steps [ages behind]
// val = window.history.length;

//Navigator object
val = window.navigator;
val = window.navigator.platform;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);