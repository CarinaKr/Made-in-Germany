resizeGame();	

var zStressLevel,zImageLevel,zWirtschaftlichkeitLevel,zImage2Level;
var zDocumentOffen=false,zMailOffen=false,zBallOffen=false;
var zZeiteinheit;
var zBallZaehler=0;
var zLoopZaehler=0;
var zGameOver;
var zTasteGedrueckt=false;

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
	zBall=document.getElementById('ball');
	zMail=document.getElementById('mail');
	zDokumente=document.getElementById('dokumente');
	zKanne=document.getElementById('kanne');
	zFoto=document.getElementById('foto');
	
	document.addEventListener("keypress",tasteGedrueckt,false);
	document.addEventListener("keyup",tasteLosgelassen,false);
	window.addEventListener("storage",storage,false);
	//document.addEventListener("click",mausKlick,false);
	
	//restart();
	
	zStressLevel=Number(localStorage.getItem("StressLevel"));
	zWirtschaftlichkeitLevel=Number(localStorage.getItem("WirtschaftlichkeitLevel"));
	zImageLevel=Number(localStorage.getItem("ImageLevel"));
	zImage2Level=Number(localStorage.getItem("Image2Level"));
	zGameOver=localStorage.getItem("GameOver");
	
	ladeBilder();
	zeichneBild();
	bildloop();
	zTest;
	
	zZeiteinheit=30000;
	zMailCount=Number(localStorage.getItem("MailCount"));
	if(localStorage.getItem("AlltagGestartet")=="false")
	{localStorage.setItem("AlltagGestartet","true");}
	starteAlltag();
	if(localStorage.getItem("SkandalGestartet")=="false")
	{localStorage.setItem("SkandalGestartet","true");}
	starteSkandal();
	
	
	
	loop();
}

function tasteGedrueckt(e)
{
	var key_id=e.keyCode || e.which;
				
	if(key_id==27&&zTasteGedrueckt==false)
	{
		location.href="Vorstellung.html";
		e.preventDefault();
	}
	zTasteGedrueckt=true;
}

function tasteLosgelassen(e)
{
	zTasteGedrueckt=false;
}

function bildloop()
{
	zeichneBild();
	setTimeout(bildloop,1000);
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
	zSkalaBild=new Image();
	zSkalaBild.src='bilder/skala_farbig.png';
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
	zBalkenHoehe=35;
	zMainCtx.fillStyle="black";zMainCtx.font="15px Arial";zMainCtx.textBaseLine="top";
	
	zHintergrundCtx.clearRect(0,0,1335,635);
	zHintergrundCtx.drawImage(zDeskBild,0,0,816,485,0,0,1335,635);
	
	zeichneBalken();
	zTest=true;
}

function zeichneBalken()
{
	if(zGameOver=="false"){
	pruefeLevel();
	zMainCtx.clearRect(0,0,500,500);
	zMainCtx.drawImage(zGesamtBild,250,0,100,45,zStressLevelX,zStressLevelY,zStressLevelMax,zBalkenHoehe);
	zMainCtx.drawImage(zSkalaBild,0,0,284*zStressLevel,29,zStressLevelX,zStressLevelY,zStressLevelMax*zStressLevel,zBalkenHoehe);
	
	zMainCtx.drawImage(zGesamtBild,250,0,100,45,zWirtschaftlichkeitLevelX,zWirtschaftlichkeitLevelY,zWirtschaftlichkeitLevelMax,zBalkenHoehe);
	zMainCtx.drawImage(zSkalaBild,0,0,284*zWirtschaftlichkeitLevel,29,zWirtschaftlichkeitLevelX,zWirtschaftlichkeitLevelY,zWirtschaftlichkeitLevelMax*zWirtschaftlichkeitLevel,zBalkenHoehe);
	
	zMainCtx.drawImage(zGesamtBild,250,0,100,45,zImageLevelX,zImageLevelY,zImageLevelMax,zBalkenHoehe);
	zMainCtx.drawImage(zSkalaBild,0,0,284*zImageLevel,29,zImageLevelX,zImageLevelY,zImage2LevelMax*zImageLevel,zBalkenHoehe);
	
	zMainCtx.drawImage(zGesamtBild,250,0,100,45,zImage2LevelX,zImage2LevelY,zImage2LevelMax,zBalkenHoehe);
	zMainCtx.drawImage(zSkalaBild,0,0,284*zImage2Level,29,zImage2LevelX,zImage2LevelY,zImage2LevelMax*zImage2Level,zBalkenHoehe);
	
	zMainCtx.fillText("Stress",zStressLevelX+10,zStressLevelY+25);
	zMainCtx.fillText("Image",zImageLevelX+10,zImageLevelY+25);
	zMainCtx.fillText("Mitarbeiterzufriedenheit",zImage2LevelX+10,zImage2LevelY+25);
	zMainCtx.fillText("Wirtschaftlichkeit",zWirtschaftlichkeitLevelX+10,zWirtschaftlichkeitLevelY+25);
	}
}

function pruefeLevel()
{
	if(zStressLevel<0)
	{
		zStressLevel=0;
	}
	else if(zStressLevel>1)
	{
		zStressLevel=1.0;
	}
	
	
	if(zImageLevel<0)
	{
		zImageLevel=0;
	}
	else if(zImageLevel>1)
	{
		zImageLevel=1.0;
	}
	
	if(zWirtschaftlichkeitLevel<0)
	{
		zWirtschaftlichkeitLevel=0;
	}
	else if(zWirtschaftlichkeitLevel>1)
	{
		zWirtschaftlichkeitLevel=1.0;
	}
	
	if(zImage2Level<0)
	{
		zImage2Level=0;
	}
	else if(zImage2Level>1)
	{
		zImage2Level=1.0;
	}
	
	
	speichereWerte();
}

function klickIcon(pIcon)
{
	if(zGameOver=="false")
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
}

function oeffneDocumente()
{
	 dokumentwindow = window.open("Mail/Dokumente.html", "Dokumente");
	 //zMainCtx.clearRect(420,380,100,100);
	 zDokumente.src='bilder/Dokumente2.png';
}
function oeffneMail()
{
	 mailwindow = window.open("Mail/Metall-Mail.html", "Mail"); //"resizable=1, width=800,height=400, scrollbars=1"
	 //mailwindow.moveTo(250,150);
	 //zMainCtx.clearRect(480,580,100,100);
	 zMail.src='bilder/mail.png';
}
function oeffneBall()
{
	for(var i=0;i<4;i++)
	{
		if(zBallZaehler==i)
		{
			if(zBallZaehler==3)
			{zBallZaehler=0;zStressLevel+=0.01;speichereWerte();}
			else
			{zBallZaehler++;}
			zBall.src="bilder/Stressball_"+zBallZaehler+".png";
			break;
		}
	}
	speichereWerte();
}

function sendeMail(pNummer)
{
	if(localStorage.getItem("Mail"+pNummer+"gesendet")=="false")
	{
		zMailCount=localStorage.getItem("MailCount");
		localStorage.setItem("Mail"+zMailCount,pNummer);
		var newCount=Number(zMailCount)+1;
		localStorage.setItem("MailCount",newCount);
		zMail.src='bilder/mailmitpunkt.png';
		localStorage.setItem("Mail"+pNummer+"gesendet","true");
	}
}

function sendeDokument(pNummer)
{
	if(localStorage.getItem("Dokument"+pNummer+"gesendet")=="false")
	{
		zDokumentCount=localStorage.getItem("DokumentCount");
		localStorage.setItem("Dokument"+zDokumentCount,pNummer);
		var newCount=Number(zDokumentCount)+1;
		localStorage.setItem("DokumentCount",newCount);
		zDokumente.src='bilder/Dokumente2mitkreis.png';
		localStorage.setItem("Dokument"+pNummer+"gesendet","true");
	}
}

function storage(e)
{
	var i=e.key;
	var j=e.newValue;
	
	zStressLevel=Number(localStorage.getItem("StressLevel"));
	zImageLevel=Number(localStorage.getItem("ImageLevel"));
	zImage2Level=Number(localStorage.getItem("Image2Level"));
	zWirtschaftlichkeitLevel=Number(localStorage.getItem("WirtschaftlichkeitLevel"));
	zeichneBalken();
	
	if(i=="Position")
	{
		pruefePosition(Number(j));
	}
	
	if(i=="Antwort")
	{
		mailwindow.close();
	}
}

function starteAlltag()
{
	zMailCount=localStorage.getItem("MailCount");
	var pZeiteinheit=Number(localStorage.getItem("Zeiteinheit"));
	if(pZeiteinheit==0)
	{	sendeMail(16);
		setTimeout(sendeMail,zZeiteinheit,17);
		setTimeout(sendeMail,zZeiteinheit*3,18);
	}
	else if(pZeiteinheit==1)
	{
		sendeMail(17);
		setTimeout(sendeMail,zZeiteinheit*2,18);
	}
	else if(pZeiteinheit==2)
	{
		setTimeout(sendeMail,zZeiteinheit,18);
	}
	else if(pZeiteinheit==3)
	{
		sendeMail(18);
	}
}

function starteSkandal()
{
	zMailCount=localStorage.getItem("MailCount");
	var pZeiteinheit=Number(localStorage.getItem("Zeiteinheit"));
	if(pZeiteinheit==0)
	{	setTimeout(sendeMail,zZeiteinheit*2,0);
		setTimeout(sendeMail,zZeiteinheit*4,1);
	}
	else if(pZeiteinheit==1)
	{
		setTimeout(sendeMail,zZeiteinheit,0);
		setTimeout(sendeMail,zZeiteinheit*3,1);
	}
	else if(pZeiteinheit==2)
	{
		setTimeout(sendeMail,zZeiteinheit*2,1);
	}
	else if(pZeiteinheit==3)
	{
		setTimeout(sendeMail,zZeiteinheit,1);
	}
	else if(pZeiteinheit==4)
	{
		sendeDokument(1);
	}
	pruefePosition(Number(localStorage.getItem("Position")));
}

function pruefePosition(pPosition)
{
	if(pPosition==2)
	{
		setTimeout(sendeMail,zZeiteinheit,2);
	}
	else if(pPosition==3)
	{
		setTimeout(sendeDokument,zZeiteinheit,3);
	}
	else if(pPosition==4)
	{
		setTimeout(sendeDokument,zZeiteinheit,4);
	}
	else if(pPosition==5)
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
		//localStorage.setItem("Position",14);
	}
	else if(pPosition==10)
	{
		setTimeout(sendeMail,zZeiteinheit*2,10);
	}
	else if(pPosition==11)
	{
		setTimeout(sendeMail,zZeiteinheit,11);
	}
	else if(pPosition==12)
	{
		setTimeout(sendeDokument,zZeiteinheit,12);
	}
	else if(pPosition==13)
	{
		setTimeout(sendeDokument,zZeiteinheit,13);
		//localStorage.setItem("Position",14);
	}
	else if(pPosition==14)
	{
		setTimeout(sendeDokument,zZeiteinheit,14);
		setTimeout(sendeMail,zZeiteinheit*2,15);
	}
	else if(pPosition==19)
	{
		setTimeout(sendeDokument,zZeiteinheit,19);
	}
	else if(pPosition==20)
	{
		setTimeout(sendeDokument,zZeiteinheit,20);
	}
	
	else if(pPosition==22)
	{
		mailwindow.close();
		dokumentwindow.close();
		zGameOver="true";
		localStorage.setItem("GameOver",zGameOver);
		zMainCtx.clearRect(0,0,500,500);
		zBall.style.visibility='hidden';
		zFoto.style.visibility='hidden';
		zKanne.style.visibility='hidden';
	}
}

function speichereWerte()
{
	localStorage.setItem("StressLevel",zStressLevel);
	localStorage.setItem("ImageLevel",zImageLevel);
	localStorage.setItem("WirtschaftlichkeitLevel",zWirtschaftlichkeitLevel);
	localStorage.setItem("Image2Level",zImage2Level);
}

function loop()
{	
	if(zStressLevel<=0||zImage2Level<=0||zImageLevel<=0||zWirtschaftlichkeitLevel<=0)
	{
		localStorage.setItem("Position",8); //Anfrage nach Rücktritt
	}
	
	if(zStressLevel>0.75)
	{
		zImage2Level+=0.01;
	}
	else if(zStressLevel<0.25)
	{
		zImage2Level-=0.01;
	}
	
	if(zImageLevel>0.75)
	{
		zWirtschaftlichkeitLevel+=0.01;
		zImage2Level+=0.01;
		zStressLevel+=0.01;
	}
	else if(zImageLevel<0.25)
	{
		zWirtschaftlichkeitLevel-=0.1;
		zImage2Level-=0.01;
		zStressLevel-=0.01;
	}
	
	if(zWirtschaftlichkeitLevel>0.75)
	{
		zStressLevel+=0.01;
	}
	else if(zWirtschaftlichkeitLevel<0.25)
	{
		zStressLevel-=0.01;
	}
	
	if(zImage2Level>0.75)
	{
		zWirtschaftlichkeitLevel+=0.01;
	}
	else if(zImage2Level<0.25)
	{
		zWirtschaftlichkeitLevel-=0.01;
	}
	
	zImage2Level-=Number(localStorage.getItem("AbzugImage2"));
	
	speichereWerte();
	zeichneBalken();
	
	var pZeitNeu=Number(localStorage.getItem("Zeiteinheit"));
	localStorage.setItem("Zeiteinheit",pZeitNeu+1);
	
	setTimeout(loop,zZeiteinheit);
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