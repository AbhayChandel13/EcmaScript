/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* var x=10;\r\n  if(x)\r\n  {\r\n  x=4 \r\n  }\r\n  console.log(x);\r\n\r\n*/\n\n/*  \r\n  var x=10;\r\n  if(x)\r\n  {\r\n   let x=4 \r\n  }\r\n  console.log(x);\r\n  */\n\n/*\r\nfor (let i = 0; i < 60; i++)\r\n {\r\n  var div = document.createElement('div');\r\n  div.onclick = function() {\r\n    alert(\"you clicked on a box #\" + i);\r\n  };\r\n  document.getElementsByTagName('section')[0].appendChild(div);\r\n}\r\n */\n\n/*\r\nconst birthyear=2000;\r\nvar age=2021-birthyear;\r\nconsole.log(age);\r\n*/\n\n/*\r\nconst birthyear=2000;\r\nvar birthyear=2005;\r\nvar age=2021-birthyear;\r\nconsole.log(age);\r\n*/\n//Example of const Keyword;\n\n/*\r\nfunction coldEnough(deg){\r\n  const freezingTemp=32;\r\n  if(freezingTemp<=deg)\r\n  {\r\n    return deg+  \"is above Freezing Temperature\";\r\n  }\r\n  else\r\n  {\r\n    return deg + \" is below freezing Temprature\";\r\n  }\r\n  \r\n}\r\nconsole.log(coldEnough(40));\r\nconsole.log(coldEnough(12));\r\nconsole.log(coldEnough(-10));\r\n\r\n*/\n//Template String example:\n\n/*\r\n\r\nfunction createEmail(firstName,PurchasePrice)\r\n{\r\n  var shipping=5.95;\r\n  console.log(`Hi ${firstName},Thanks for buying from us !!\r\n                                Total:         Rs.${PurchasePrice}\r\n                                Shipping Price:Rs.${shipping}\r\n                                Grand Total:   Rs.${PurchasePrice+shipping};`);\r\n\r\n}\r\ncreateEmail(\"Abhay\",100);\r\n\r\n*/\n//SPREAD OPERATOR ::-->\n\n/*\r\nvar cats=[\"billi\",\"cat2\",\"cat3\"];\r\nvar dogs=[\"dog1\",\"dog2\",\"dog3\"];\r\n\r\nvar animals=[\"Whale\",\"Buffalo\",\"cow\",\"Ox\"];\r\nvar animals=[\"Whale\",\"Buffalo\",...cats,\"cow\",\"Ox\",...dogs];\r\n\r\nconsole.log(animals);\r\n\r\n*/\n//Map in ES6 :--\n\n/*\r\nvar course=new Map();\r\ncourse.set('react',{description:'ui'});\r\ncourse.set('test',{description:'testing'});\r\n\r\nconsole.log(course);\r\n//console.log(course.react);// it will show an error \"undifined\".\r\nconsole.log(course.get('react'));\r\n\r\n*/\n\n/*\r\nvar details=new Map([[new Date(),'today'],['items',[1,2]]]);\r\nconsole.log(details.size);\r\n\r\ndetails.forEach(function(items){\r\n  console.log(items);\r\n})\r\n\r\nconsole.log(details);\r\n\r\n*/\n//SETS in Es6 :-->\n\n/*\r\nvar books=new Set();\r\nbooks.add('Pride & Prejudice');\r\nbooks.add('war & Peace');\r\nbooks.add('Oliver Twist');\r\n   \r\nconsole.log(books);   \r\n//console.log(\"How Many Books\",books.size);\r\n//console.log(\"Has Oliver Twist \",books.has('Oliver Twist'));\r\nbooks.delete('war & Peace');\r\nconsole.log(\"How Many Books\",books.size);\r\nconsole.log(\"Has war & Peace \",books.has('war & Peace'));\r\n\r\n*/\n\n/*\r\n var data=[1,2,1,4,5,6,2,8,4,10];\r\n var set=new Set(data);\r\n console.log(\"Data Length\",data.length);\r\n console.log(\"Set Size\",set.size);\r\n\r\n */\n//For of loop:--->\n\n/*\r\n for (let letter of 'Javascript'){\r\n   console.log(letter);\r\n }\r\n\r\n var topics=['Javascript','Node','React'];\r\n for(let topic of topics){\r\n   console.log(topic);\r\n }\r\n\r\n */\n//Function and Objects :--->\n\n/*\r\nfunction add(x=5,y=5){\r\n  console.log(x+y);\r\n}\r\nadd();\r\nadd(10,5);  //It will overwrite the values of X and Y and give sum accordingly;\r\n\r\n\r\n*/\nfunction haveFun() {\n  var activityName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"Running\";\n  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;\n  console.log(\"Today I will go on \".concat(activityName, \" for \").concat(time, \" hours\"));\n}\n\nhaveFun();\nhaveFun(\"hiking\", 4);\n\n//# sourceURL=webpack://es6v1/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;