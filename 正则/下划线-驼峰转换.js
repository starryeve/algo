// /**
//  * @param {string} name
//  * @return {string}
//  */
// function toHump(name) {
// 	return name.replace(/\_(\w)/g, function (all, letter) {
// 		return letter.toUpperCase()
// 	})
// }
var regex = /ab{2,5}c/g
var string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
console.log(string.match(regex))
