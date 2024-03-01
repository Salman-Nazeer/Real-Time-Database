// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  ref,
  set,
  getDatabase,
  push,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzuF-Umgu3lq25JXkkXmzUtEM5q4XhyKk",
  authDomain: "datatbas.firebaseapp.com",
  databaseURL: "https://datatbas-default-rtdb.firebaseio.com",
  projectId: "datatbas",
  storageBucket: "datatbas.appspot.com",
  messagingSenderId: "656812935267",
  appId: "1:656812935267:web:e969cdf5b5448b856ed056",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

let city = document.getElementById("City");
console.log(city);
let course = document.getElementById("Course-or-Event");
console.log(course);
let fullname = document.getElementById("fullname");
console.log(fullname);
let fathername = document.getElementById("fathername");
console.log(fathername);
let email = document.getElementById("Email");
console.log(email);
let phoneNo = document.getElementById("phoneNo");
console.log(phoneNo);
let CNIC = document.getElementById("CNIC");
console.log(CNIC);
let fatherCNIC = document.getElementById("fatherCNIC");
console.log(fatherCNIC);
let date = document.getElementById("date");
console.log(date);
let gender = document.getElementById("gender");
console.log(gender);
let address = document.getElementById("address");
console.log(address);
let qualification = document.getElementById("qualification");
console.log(qualification);
let laptop = document.getElementById("laptop");
console.log(laptop);
let picture = document.getElementById("picture");
console.log(picture);

window.add = function () {
  var obj = {
    FullName: fullname.value,
    CNIC: CNIC.value,
    FatherName: fathername.value,
    FatherCNIC: fatherCNIC.value,
    Email: email.value,
    PhoneNo: phoneNo.value,
    City: city.value,
    Course: course.value,
    Data: date.value,
    Gender: gender.value,
    Address: address.value,
    Qualification: qualification.value,
    Laptop: laptop.value,
    Picture: picture.value,
  };

  obj.id = push(ref(database, "Task/")).key;
  var refrence = ref(database, `Task/${obj.id}`);

  set(refrence, obj);
};
