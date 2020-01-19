// EXERCISE 1 FUNCTION
function test1Exercise() {
	let test1 = document
		.getElementById("test1")
		.value.split(/\s/)
		.reverse()
		.join(" ");
	return (document.getElementById("test1result").innerHTML = test1);
}
// EXERCISE 2 FUNCTION
function test2Exercise() {
	let limit = document.getElementById("test2").value;
	let f1 = 0;
	let f2 = 1;

	let test = [];

	test.push(f1);
	test.push(f2);

	let i, f3;
	for (i = 2; i < limit; i++) {
		f3 = f1 + f2;
		test.push(f3);
		f1 = f2;
		f2 = f3;
	}
	return (document.getElementById("test2result").innerHTML = test);
}
// EXERCISE 3 FUNCTION
function test3Exercise() {
	const test3Arr = [];
	let test3 = test3Arr.push(document.getElementById("test3").value.split(","));
	return (document.getElementById("test3result").innerHTML = test3Arr[0].sort(
		function(a, b) {
			return a - b;
		}
	));
}
// EXERCISE 4 FUNCTION
function test4Exercise() {
	let string = document.getElementById("test4").value,
		ref = {};
	console.log("string", string);
	// loop number of strings in length
	for (var i = 0; i < string.length; i++) {
		// get each character
		let character = string.charAt(i);
		//
		console.log(string.indexOf(character));
		if (string[i] in ref) {
			// if defined then log data and brek loop
			return (document.getElementById("test4result").innerHTML =
				("index:", ref[string[i]], "value: ", string[i]));
			break;
		}
		// define the reference of the index
		ref[string[i]] = i;
	}
	return null;
}
// EXERCISE 5 FUNCTION
function test5Exercise() {
	console.log("Test5");
}
