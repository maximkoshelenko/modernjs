let val;

const today = new Date();
let birthday = new Date('11-17-1985 11:25:00');
birthday = new Date('11-17-1985 11:25:00');
birthday = new Date('November 17 1985');
birthday = new Date('9/10/1984');

val = today;
val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(10);
birthday.setDate(15);
birthday.setFullYear(1901);
birthday.setHours(1);
birthday.setMinutes(59);
birthday.setSeconds(25);

console.log(birthday);