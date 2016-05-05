resizeGame();	

var zStressLevel=0.80,zImageLevel=0.80,zWirtschaftlichkeitLevel=0.80,zImage2Level=0.80;
var zDocumentOffen=false,zMailOffen=false,zBallOffen=false;

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
	
	//document.addEventListener("click",mausKlick,false);
	
	ladeBilder();
	zeichneBild();
	restart();
	//loop();
}

function mouse(e)
{
	zMausX=e.pageX-document.getElementById('game_object').offsetLeft;
	zMausY=e.pageY-document.getElementById('game_object').offsetTop;
}

function restart()
{
	for(var i=0;i<5;i++)
	{
		localStorage.setItem("Alltag"+i,"false");
	}
	for(var j=0;j<16;j++)
	{
		localStorage.setItem("Skandal"+j,"false");
	}
	localStorage.setItem("MailCount",0);
}

function ladeBilder()
{
	zGesamtBild=new Image();
	zGesamtBild.src='bilder/gesamt.png';
	zDeskBild=new Image();
	zDeskBild.src='bilder/schreibtisch.jpg';
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
	zMainCtx.clearRect(0,0,1335,635);
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
	if(zDocumentOffen||zMailOffen||zBallOffen)
	{
		zMainCtx.clearRect(0,0,1335,635);
		zHintergrundCtx.clearRect(0,0,1335,635);
		zeichneBild();
		zDocumentOffen=false;zMailOffen=false,zBallOffen=false;
	}
	else if(pIcon==1)
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
	zMainCtx.drawImage(zGesamtBild,0,250,82,100,400,100,450,500);
}
function oeffneMail()
{
	//zMainCtx.drawImage(zGesamtBild,100,250,95,95,400,100,500,500);
	 mailwindow = window.open("Mail/Metall-Mail.html", "Mail", "resizable=1, width=800,height=400, scrollbars=1");
	 mailwindow.moveTo(250,150);
}
function oeffneBall()
{
	zMainCtx.drawImage(zGesamtBild,250,250,100,100,400,100,500,500);
}

function sendeMail(pName,pNummer,pMailCount)
{
	localStorage.setItem("Mail"+pMailCount,pName+pNummer);
	var MailCount=localStorage.getItem("MailCount");
	localStorage.setItem("MailCount",MailCount+1);
}

init();


function getroffen(pX,pY,pWidth,pHeight)
{
	if(zMausX>pX&&zMausX<pX+pWidth&&zMausY>pY&&zMausY<pY+pHeight)
	{
		return true;
	}
	return false;
}