var businessButton = document.getElementById('business');
var bullshitButton = document.getElementById('bullshit');
var nextButton = document.getElementById('next');
var content = document.getElementById('content');
var output = document.getElementById('output');
var pointCounter = document.getElementById('points');
var points = 0;
var real;

output.innerHTML = '';
generateText();
nextButton.style.display = 'none';

function generateText() {
	x = Math.random();
	console.log(x);
	if(x > 0.5){
		i = Math.floor((Math.random() * realProjects.length));
		content.innerHTML =  realProjects[i];
		real = true;
	}else{
		i = Math.floor((Math.random() * fakeProjects.length));
		content.innerHTML =  fakeProjects[i];
		real = false;
	}
	pointCounter.innerHTML = points+' correct answers in a row'
}

bullshitButton.onclick = function(){
	if(real == true){
		content.style.backgroundColor = '#ff4d4d';
		output.innerHTML = '<font size=1px>no it\'s</font>BUSINESS!'
		points = 0;
	}else{
		content.style.backgroundColor = '#66ff66';
		output.innerHTML = '<font size=1px>yes it\'s</font>BULLSHIT!'
		points++
	}
	businessButton.style.display = 'none';
	bullshitButton.style.display = 'none';
	nextButton.style.display = 'block';

}

businessButton.onclick = function(){
	if(real == true){
		content.style.backgroundColor = '#66ff66';
		output.innerHTML = '<font size=1px>yes it\'s</font>BUSINESS!'
		points++;
	}else{
		content.style.backgroundColor = '#ff4d4d';
		output.innerHTML = '<font size=1px>no it\'s</font>BULLSHIT!'
		points = 0;
	}
	businessButton.style.display = 'none';
	bullshitButton.style.display = 'none';
	nextButton.style.display = 'block';
}

nextButton.onclick = function(){
	generateText();
	output.innerHTML = '';
	content.style.backgroundColor = 'white';
	businessButton.style.display = 'block';
	bullshitButton.style.display = 'block';
	nextButton.style.display = 'none';
}




