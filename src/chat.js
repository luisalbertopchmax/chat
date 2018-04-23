const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
let n;
let screen;
let text;
let timer;

const login = (str,key) => {
  if (key.ctrl && key.name === 'c') {
    //clearInterval(timer);
    process.exit();
  } else if (key.name === 'return'){
    if (n != ''){
      goChat();
    }    
  } else if (key.name === 'backspace'){
    n = n.substring(0, n.length - 1);
  } else if ( str.length == 1) {
    n = n + str;
  }
}

let print = () => {
  let empty = "|                                                                              |";
  let l = 11;
  for (let i = screen.length -1; i > screen.length-11; i-- ){
    console.log("\033["+l+";1H"+empty);
    console.log("\033["+l+";2H"+screen[i]);
    l = l-1;
  }
  console.log("\033[13;1H"+empty);
  console.log("\033[13;2H"+text);
}

const goChat = () => {
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

  screen = ['','','','','','','','','',''];
  text = '';

  timer = setInterval( () => {
    print(); 
    console.log("\033[14;1H");
  }, 500);
  press = chat;
}

const goLogin = () => {
  console.log("\033[2J");
  console.log("\033[1;1HIniciar session: Indique nombre de usuario:");
  press = login;
}

const chat = (str,key) => {
  if (key.ctrl && key.name === 'c') {
    n = '';
    clearInterval(timer);
    goLogin();
  } else if (key.name === 'return'){
    if (text != ''){
      screen.push(text);
      text = ''
      console.log("\033[13;2H");  
    }    
  } else if (key.name === 'backspace'){
    text = text.substring(0, text.length - 1);
  } else if ( str.length == 1) {
    text = text + str;
  }
}

console.log("\033[2J");
console.log("\033[1;1HIniciar session: Indique nombre de usuario:");

let press = login;

process.stdin.on('keypress', (str, key) => {
  press(str,key);
});

//var readlineSync = require('readline-sync');
//
//

/*
const EventEmitter = require('events');
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
let text = '';
let print = () => {
	let empty = "|                                                                              |";
	let l = 11;
	for (let i = screen.length -1; i > screen.length-11; i-- ){
		console.log("\033["+l+";1H"+empty);
		console.log("\033["+l+";2H"+screen[i]);
		l = l-1;
	}
  console.log("\033[13;1H"+empty);
  console.log("\033[13;2H"+text);
}

let timer = setInterval( () => {
  print(); 
  console.log("\033[14;1H");
}, 500);





process.stdin.on('keypress', (str, key) => {


  if (key.ctrl && key.name === 'c') {
    clearInterval(timer);
    process.exit();
  } else if (key.name === 'return'){
    if (text != ''){
      screen.push(text);
      text = ''
      console.log("\033[13;2H");  
    }    
  } else if (key.name === 'backspace'){
    text = text.substring(0, text.length - 1);
  } else if ( str.length == 1) {
    text = text + str;
  }


});

*/


/*
let algo = setInterval( () => {
  screen.push("Algo: " + screen.length);
}, 2000);

let key;
*/

//while(true){
/*
capture = () => {
  if (key === '['){
    key = key + readlineSync.keyIn('',
      {hideEchoBack: true, mask: '' });
    //console.log('\x1B[1A\x1B[K|'+'especial');
  } else {
    key = readlineSync.keyIn('',
      {hideEchoBack: true, mask: '' });
  }

  //console.log(key);
  if (key === '  '){
    clearInterval(timer);
    return;
    //break;
  } else {
    screen.push(key);
    capture();
  }
}*/

//capture();
  
    /*if (key === '[A'){
      break;
    }*/
//}

/*
function doSetTimeout(l) {
  setTimeout(() => { 
  	screen.push("Este es el mensaje numero:"+l);  	
  }, 1000*l);
}*/


//screen.push("Este es el mensaje numero:"+1);
//print(screen);

/*for (let i = 0; i < 15; i++){
	doSetTimeout(i);
}

setTimeout(() => {
  console.log("SASD");  
}, 5000);*/

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