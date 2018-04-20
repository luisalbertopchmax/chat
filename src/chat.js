       console.log("\033[2J");
       				//00000000011111111112222222222333333333344444444445555555555666666666677777777778
       				//12345678901234567890123456789012345678901234567890123456789012345678901234567890
console.log("\033[1;1H|------------------------------------------------------------------------------|");//1
         console.log("|                                                                              |");//2
         console.log("|                                                                              |");//3
         console.log("|                                                                              |");//4
         console.log("|                                                                              |");//5
         console.log("|                                                                              |");//6
         console.log("|                                                                              |");//7
         console.log("|                                                                              |");//8
         console.log("|                                                                              |");//9
         console.log("|                                                                              |");//10
         console.log("|                                                                              |");//11
         console.log("|------------------------------------------------------------------------------|");//12
         console.log("|                                                                              |");//13
         console.log("|------------------------------------------------------------------------------|");//14
         																								 //15

let screen = ['','','','','','','','','',''];

let print = (array) => {
	let empty = "|                                                                              |";
	let l = 11;
	for (let i = array.length -1; i > array.length-11; i-- ){
		console.log("\033["+l+";1H"+empty);
		console.log("\033["+l+";2H"+array[i]);
		l = l-1;
	}
	//console.log("\033[14;1H");
	//console.log(array);

}

function doSetTimeout(l) {
  setTimeout(() => { 
  	screen.push("Este es el mensaje numero:"+l);
  	print(screen); 
  	console.log("\033[14;1H");
  }, 1000*l);
}
//screen.push("Este es el mensaje numero:"+1);
//print(screen);

for (let i = 0; i < 15; i++){
	doSetTimeout(i);
}
//console.log(screen);
/*function1 = () => {
    // stuff you want to happen right away
    console.log('Welcome to My Console,');
}

function2 = () => {
    // all the stuff you want to happen after that pause
    setTimeout(function1, 1000);
    console.log('Blah blah blah blah extra-blah');
}

// call the first chunk of code right away
function1();

// call the rest of the code and have it execute after 3 seconds
setTimeout(function2, 3000);
//setTimeout(function1, 1000);*/