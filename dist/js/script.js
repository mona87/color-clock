
var clock = document.getElementById('clock');
//console.log(clock);
var hue= 0;

function update ()
{
	var clock = document.getElementById('clock');	
	var time = new Date();
	var seconds = time.getSeconds();
	var hours = time.getHours();

	hue+= 3;
	if(hue > 360){
		hue = 0;
	}
	//changes hue
	document.body.style.backgroundColor= 'hsl('+hue+', 100%, 50%)';
	console.log(document.body.style.backgroundColor);
	//adds 0 to seconds below 10
	if(seconds < 10){
		seconds = '0' + seconds;
	}
	clock.innerHTML = time.getHours()+':' + time.getMinutes()+ ':' + seconds.toString();

}

setInterval(update, 1000)