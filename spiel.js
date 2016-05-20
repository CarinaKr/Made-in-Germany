resizeGame();	

var zStressLevel,zImageLevel,zWirtschaftlichkeitLevel,zImage2Level;
var zDocumentOffen=false,zMailOffen=false,zBallOffen=false;
var zZeiteinheit;

function init()
{
	requestaframe=(function()
	  { return window.requestAnimationFrame        ||
			window.webkitRequestAnimationFrame  ||
			window.mozRequestAnimationFrame     ||
			window.oRequestAnimationFrame       ||
			window.msRequestAnimationFrame      ||
			 function(callback)
			 { window.setTimeout(callback,1000/60);}	
		 ;
	  })();
	
	zHintergrundCanvas=document.getElementById('background_canvas');
	zHintergrundCtx=background_canvas.getContext('2d');
	zMainCanvas=document.getElementById('main_canvas');
	zMainCtx=main_canvas.getContext('2d');
	
	window.addEventListener("storage",storage,false);
	//document.addEventListener("click",mausKlick,false);
	
	restart();
	
	zStressLevel=localStorage.getItem("StressLevel");
	zWirtschaftlichkeitLevel=localStorage.getItem("WirtschaftlichkeitLevel");
	zImageLevel=localStorage.getItem("ImageLevel");
	zImage2Level=localStorage.getItem("Image2Level");
	
	ladeBilder();
	zeichneBild();
	//loop();
	
	zZeiteinheit=30000;
	zMailCount=localStorage.getItem("MailCount");
	//starteAlltag();
	starteSkandal();
	//sendeDokument(19);
	//sendeDokument(20);
}

function mouse(e)
{
	zMausX=e.pageX-document.getElementById('game_object').offsetLeft;
	zMausY=e.pageY-document.getElementById('game_object').offsetTop;
}

function restart()
{
	for(var i=0;i<30;i++)
	{
		localStorage.setItem("Mail"+i+"gelesen","false");
		localStorage.setItem("Mail"+i+"beantwortet","false");
		localStorage.setItem("Dokument"+i+"gelesen","false");
		localStorage.setItem("Dokument"+i+"beantwortet","false");
	}
	zStressLevel=1;
	zImageLevel=1;
	zWirtschaftlichkeitLevel=1;
	zImage2Level=1;
	localStorage.setItem("StressLevel",zStressLevel);
	localStorage.setItem("ImageLevel",zImageLevel);
	localStorage.setItem("WirtschaftlichkeitLevel",zWirtschaftlichkeitLevel);
	localStorage.setItem("Image2Level",zImage2Level);
	localStorage.setItem("MailCount",0);
	localStorage.setItem("DokumentCount",0);
	localStorage.setItem("Position",0);
}

function ladeBilder()
{
	zGesamtBild=new Image();
	zGesamtBild.src='bilder/gesamt.png';
	zDeskBild=new Image();
	zDeskBild.src='bilder/schreibtisch.jpg';
	zKreisBild=new Image();
	zKreisBild.src='bilder/kreis.png';
}

function zeichneBild()
{
	zStressLevelX=10,zStressLevelY=10,zStressLevelMax=200;
	zWirtschaftlichkeitLevelX=10,zWirtschaftlichkeitLevelY=70,zWirtschaftlichkeitLevelMax=200;
	zImageLevelX=10,zImageLevelY=130,zImageLevelMax=200;
	zImage2LevelX=10,zImage2LevelY=190,zImage2LevelMax=200;
	zMainCtx.fillStyle="grey";zMainCtx.font="15px Arial";zMainCtx.textBaseLine="bottom";
	
	zHintergrundCtx.clearRect(0,0,1335,635);
	zHintergrundCtx.drawImage(zDeskBild,0,0,816,602,250,70,750,553);
	
	zeichneBalken();
}

function zeichneBalken()
{
	zMainCtx.clearRect(0,0,500,500);
	zMainCtx.drawImage(zGesamtBild,250,0,100,50,zStressLevelX,zStressLevelY,zStressLevelMax,50);
	zMainCtx.drawImage(zGesamtBild,250,50,100,50,zStressLevelX,zStressLevelY,zStressLevelMax*zStressLevel,50);
	zMainCtx.drawImage(zGesamtBild,250,0,100,50,zWirtschaftlichkeitLevelX,zWirtschaftlichkeitLevelY,zWirtschaftlichkeitLevelMax,50);
	zMainCtx.drawImage(zGesamtBild,250,50,100,50,zWirtschaftlichkeitLevelX,zWirtschaftlichkeitLevelY,zWirtschaftlichkeitLevelMax*zWirtschaftlichkeitLevel,50);
	zMainCtx.drawImage(zGesamtBild,250,0,100,50,zImageLevelX,zImageLevelY,zImageLevelMax,50);
	zMainCtx.drawImage(zGesamtBild,250,50,100,50,zImageLevelX,zImageLevelY,zImage2LevelMax*zImageLevel,50);
	zMainCtx.drawImage(zGesamtBild,250,50,100,50,zWirtschaftlichkeitLevelX,zWirtschaftlichkeitLevelY,zWirtschaftlichkeitLevelMax*zWirtschaftlichkeitLevel,50);
	zMainCtx.drawImage(zGesamtBild,250,0,100,50,zImage2LevelX,zImage2LevelY,zImage2LevelMax,50);
	zMainCtx.drawImage(zGesamtBild,250,50,100,50,zImage2LevelX,zImage2LevelY,zImage2LevelMax*zImage2Level,50);
	zMainCtx.fillText("Stress",zStressLevelX+10,zStressLevelY+30);
	zMainCtx.fillText("Image",zImageLevelX+10,zImageLevelY+30);
	zMainCtx.fillText("Image2",zImage2LevelX+10,zImage2LevelY+30);
	zMainCtx.fillText("Wirtschaftlichkeit",zWirtschaftlichkeitLevelX+10,zWirtschaftlichkeitLevelY+30);
}


function klickIcon(pIcon)
{
	if(pIcon==1)
	{
		oeffneMail();
		zMailOffen=true;
	}
	else if(pIcon==2)
	{
		oeffneBall();
		zBallOffen=true;
	}
	else if(pIcon==3)
	{
		oeffneDocumente();
		zDocumentOffen=true;
	}
}

function oeffneDocumente()
{
	//zMainCtx.drawImage(zGesamtBild,0,250,82,100,400,100,450,500);
	 dokumentwindow = window.open("Mail/Dokumente.html", "Dokumente");
	 zMainCtx.clearRect(420,380,100,100);
}
function oeffneMail()
{
	//zMainCtx.drawImage(zGesamtBild,100,250,95,95,400,100,500,500);
	 mailwindow = window.open("Mail/Metall-Mail.html", "Mail"); //"resizable=1, width=800,height=400, scrollbars=1"
	 //mailwindow.moveTo(250,150);
	 zMainCtx.clearRect(480,580,100,100);
}
function oeffneBall()
{
	zMainCtx.drawImage(zGesamtBild,250,250,100,100,400,100,500,500);
}

function sendeMail(pNummer)
{
	zMailCount=localStorage.getItem("MailCount");
	localStorage.setItem("Mail"+zMailCount,pNummer);
	var newCount=Number(zMailCount)+1;
	localStorage.setItem("MailCount",newCount);
	zMainCtx.drawImage(zKreisBild,0,0,100,100,480,580,25,25);
}

function sendeDokument(pNummer)
{
	zDokumentCount=localStorage.getItem("DokumentCount");
	localStorage.setItem("Dokument"+zDokumentCount,pNummer);
	var newCount=Number(zDokumentCount)+1;
	localStorage.setItem("DokumentCount",newCount);
	zMainCtx.drawImage(zKreisBild,0,0,100,100,420,380,25,25);
}

function storage(e)
{
	var i=e.key;
	var j=e.newValue;
	
	zStressLevel=localStorage.getItem("StressLevel");
	zImageLevel=localStorage.getItem("ImageLevel");
	zImage2Level=localStorage.getItem("Image2Level");
	zWirtschaftlichkeitLevel=localStorage.getItem("WirtschaftlichkeitLevel");
	zeichneBalken();
	
	if(i=="Position")
	{
		pruefePosition(Number(j));
	}
}

function starteAlltag()
{
	zMailCount=localStorage.getItem("MailCount");
	sendeMail(16);
	setTimeout(sendeMail,zZeiteinheit,17);
	setTimeout(sendeMail,zZeiteinheit*3,18);
}

function starteSkandal()
{
	zMailCount=localStorage.getItem("MailCount");
	setTimeout(sendeMail,zZeiteinheit*2,0);
	setTimeout(sendeMail,zZeiteinheit*4,1);
}

function pruefePosition(pPosition)
{
	if(pPosition==5)
	{
		setTimeout(sendeMail,zZeiteinheit,5);
	}
	else if(pPosition==6)
	{
		setTimeout(sendeMail,zZeiteinheit,6);
	}
	else if(pPosition==7)
	{
		setTimeout(sendeDokument,zZeiteinheit,7);
		setTimeout(sendeMail,zZeiteinheit*2,8);
	}
	else if(pPosition==8)//Vor Rücktritt
	{
		setTimeout(sendeMail,zZeiteinheit,8);
	}
	else if(pPosition==9)
	{
		setTimeout(sendeDokument,zZeiteinheit,9);
		localStorage.setItem("Position",14);
	}
	else if(pPosition==14)
	{
		setTimeout(sendeDokument,zZeiteinheit,14);
		setTimeout(sendeMail,zZeiteinheit*2,15);
		setTimeout(sendeMail,zZeiteinheit*3,8);
	}
	else if(pPosition==22)
	{
		//restart();
		mailwindow.close();
		dokumentwindow.close();
		zMainCtx.fillStyle="red";zMainCtx.font="30px Arial";zMainCtx.textBaseLine="bottom";
		zMainCtx.fillText("Game Over",500,500);
	}
}

/*function loop()
{
	requestaframe(loop);
}*/

init();


function getroffen(pX,pY,pWidth,pHeight)
{
	if(zMausX>pX&&zMausX<pX+pWidth&&zMausY>pY&&zMausY<pY+pHeight)
	{
		return true;
	}
	return false;
}