/*
const TypeWriter = function(txtElement, words, wait=3000){
	this.txtElement = txtElement;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
	
}

//Type method
TypeWriter.prototype.type = function(){
	//Current index of the wordIndex
	const current = this.wordIndex % this.words.length;
	
	//Get fill text of current wordIndex
	const fullTxt = this.words[current];
	
	//Check if deleting
	if(this.isDeleting){
		//remoce char
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	}
	else{
		//add char
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
	
	//Insert txt into element
	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
	
	//Inial Type Speed
	let typespeed = 300;
	
	if(this.isDeleting){
		typespeed /= 2;
	}
	
	//If word is complete
	if(!this.isDeleting && this.txt === fullTxt){
		//Make pause at end
		typespeed = this.wait;
		
		//Set delete to true
		this.isDeleting = true;
	}
	else if(this.isDeleting && this.txt === ''){
		this.isDeleting = false;
		
		//Move to next word
		this.wordIndex++;
		
		//Pause before start typing
		typespeed = 500;
	}
	
	setTimeout(() => this.type(), typespeed);
}
*/


/*     Es6 Class    */

class TypeWriter{
	constructor(txtElement, words, wait=3000){
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}
	
	type(){
		//Current index of the wordIndex
		const current = this.wordIndex % this.words.length;
		
		//Get fill text of current wordIndex
		const fullTxt = this.words[current];
		
		//Check if deleting
		if(this.isDeleting){
			//remoce char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		}
		else{
			//add char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		
		//Insert txt into element
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
		
		//Inial Type Speed
		let typespeed = 300;
		
		if(this.isDeleting){
			typespeed /= 2;
		}
		
		//If word is complete
		if(!this.isDeleting && this.txt === fullTxt){
			//Make pause at end
			typespeed = this.wait;
			
			//Set delete to true
			this.isDeleting = true;
		}
		else if(this.isDeleting && this.txt === ''){
			this.isDeleting = false;
			
			//Move to next word
			this.wordIndex++;
			
			//Pause before start typing
			typespeed = 500;
		}
		
		setTimeout(() => this.type(), typespeed);
	}
}



//Init in DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init(){
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	
	//Init Typewriter
	new TypeWriter(txtElement, words, wait); 
}

































