resizeGame();	

var zStressLevel=0.80,zImageLevel=0.80,zWirtschaftlichkeitLevel=0.80;
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
	
	document.addEventListener("click",mausKlick,false);
	
	ladeBilder();
	zeichneBild();
	
	loop();
}

function mouse(e)
{
	zMausX=e.pageX-document.getElementById('game_object').offsetLeft;
	zMausY=e.pageY-document.getElementById('game_object').offsetTop;
}

function ladeBilder()
{
	zGesamtBild=new Image();
	zGesamtBild.src='bilder/gesamt.png';
}

function zeichneBild()
{
	zDocumentGroesseX=70,zDocumentGroesseY=80,zXDocument=825,zYDocument=240;
	zMailGroesseX=80,zMailGroesseY=80,zXMail=820,zYMail=320;
	zBallGroesseX=80,zBallGroesseY=80,zXBall=820,zYBall=400;
	zStressLevelX=10,zStressLevelY=10,zStressLevelMax=200;
	zWirtschaftlichkeitLevelX=10,zWirtschaftlichkeitLevelY=70,zWirtschaftlichkeitLevelMax=200;
	zImageLevelX=10,zImageLevelY=130,zImageLevelMax=200;
	
	zHintergrundCtx.drawImage(zGesamtBild,0,0,250,250,250,150,750,650);
	zMainCtx.drawImage(zGesamtBild,0,250,82,100,zXDocument,zYDocument,zDocumentGroesseX,zDocumentGroesseY);
	zMainCtx.drawImage(zGesamtBild,100,250,95,95,zXMail,zYMail,zMailGroesseX,zMailGroesseY);
	zMainCtx.drawImage(zGesamtBild,250,250,100,100,zXBall,zYBall,zBallGroesseX,zBallGroesseY);
	zMainCtx.drawImage(zGesamtBild,250,0,100,50,zStressLevelX,zStressLevelY,zStressLevelMax,50);
	zMainCtx.drawImage(zGesamtBild,250,0,100,50,zWirtschaftlichkeitLevelX,zWirtschaftlichkeitLevelY,zStressLevelMax,50);
	zMainCtx.drawImage(zGesamtBild,250,0,100,50,zImageLevelX,zImageLevelY,zImageLevelMax,50);
	zMainCtx.fillStyle="grey";zMainCtx.font="15px Arial";zMainCtx.textBaseLine="bottom";
	
}

function mausKlick()
{
	if(zDocumentOffen||zMailOffen||zBallOffen)
	{
		zMainCtx.clearRect(0,0,1335,635);
		zeichneBild();
		zDocumentOffen=false;zMailOffen=false,zBallOffen=false;
	}
	else if(getroffen(zXDocument,zYDocument,zDocumentGroesseX,zDocumentGroesseY))
	{
		oeffneDocumente();
		zDocumentOffen=true;
	}
	else if(getroffen(zXMail,zYMail,zMailGroesseX,zMailGroesseY))
	{
		oeffneMail();
		zMailOffen=true;
	}
	else if(getroffen(zXBall,zYBall,zBallGroesseX,zBallGroesseY))
	{
		oeffneBall();
		zBallOffen=true;
	}
}

function getroffen(pX,pY,pWidth,pHeight)
{
	if(zMausX>pX&&zMausX<pX+pWidth&&zMausY>pY&&zMausY<pY+pHeight)
	{
		return true;
	}
	return false;
}

function oeffneDocumente()
{
	zMainCtx.drawImage(zGesamtBild,0,250,82,100,400,100,450,500);
}
function oeffneMail()
{
	zMainCtx.drawImage(zGesamtBild,100,250,95,95,400,100,500,500);
}
function oeffneBall()
{
	zMainCtx.drawImage(zGesamtBild,250,250,100,100,400,100,500,500);
}

function loop()
{
	zMainCtx.drawImage(zGesamtBild,250,50,100,50,zStressLevelX,zStressLevelY,zStressLevelMax*zStressLevel,50);
	zMainCtx.drawImage(zGesamtBild,250,50,100,50,zWirtschaftlichkeitLevelX,zWirtschaftlichkeitLevelY,zWirtschaftlichkeitLevelMax*zWirtschaftlichkeitLevel,50);
	zMainCtx.drawImage(zGesamtBild,250,50,100,50,zImageLevelX,zImageLevelY,zImageLevelMax*zImageLevel,50);
	zMainCtx.fillText("Stress",zStressLevelX+10,zStressLevelY+30);
	zMainCtx.fillText("Image",zImageLevelX+10,zImageLevelY+30);
	zMainCtx.fillText("Wirtschaftlichkeit",zWirtschaftlichkeitLevelX+10,zWirtschaftlichkeitLevelY+30);
	
	requestaframe(loop);
}

init();