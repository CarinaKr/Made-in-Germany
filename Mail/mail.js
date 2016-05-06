var zOffeneMail;

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
	//zHintergrundCanvas=document.getElementById('background_canvas');
	
	zMailCount=Number(localStorage.getItem("MailCount"));
	zMailCount2=localStorage.getItem("MailCount");
	
	zMail=new Array(zMailCount);
	zMailAbsender=new Array(zMailCount);
	
	for(var i=0;i<zMailCount;i++)
	{zMailAbsender[i]=document.getElementById('mail'+(i+1));}
	zMailAddressat=document.getElementById('adressat');
	zMailTextFeld=document.getElementById('mail');
	zMailNachfrageFeld=document.getElementById('nachfrage');
	zAntwort1Button=document.getElementById('antwort1');
	zAntwort2Button=document.getElementById('antwort2');
	zGegebeneAntwort1=document.getElementById('gegebeneAntwort1');
	zGegebeneAntwort2=document.getElementById('gegebeneAntwort2');
	
	ladeMails();
}

function mouse(e)
{
	zMausX=e.pageX-document.getElementById('game_object').offsetLeft;
	zMausY=e.pageY-document.getElementById('game_object').offsetTop;
}

function ladeMails()
{
	for(var i=0;i<zMail.length;i++)
	{		
		zMail[i]=Number(localStorage.getItem("Mail"+i));
		zMailAbsender[i].innerHTML=zAbsender[zMail[i]];
	}
	zeigeMail(0);
}

function zeigeMail(pNummer)
{
	zOffeneMail=pNummer;
	zMailAddressat.innerHTML=zAbsender[zMail[pNummer]];
	zMailTextFeld.innerHTML=zMailText[zMail[pNummer]];
	zAntwort1Button.innerHTML=zAntwort1[zMail[pNummer]];
	zAntwort2Button.innerHTML=zAntwort2[zMail[pNummer]];
	
	if(zAntwort1[zMail[pNummer]]==""||localStorage.getItem("Mail"+zMail[pNummer]+"beantwortet")!="false")
	{
		zAntwort1Button.disabled=true;
		zAntwort2Button.disabled=true;
	}
}

function antwort(pNummer)
{
	localStorage.setItem("Mail"+zOffeneMail+"beantwortet",pNummer);
	
	if(pNummer==16) //Alltag1
	{
		if(pNummer==1)
		{
			zGegebeneAntwort1.innerHTML=zAntwort1Button.innerHTML;
			zMailNachfrageFeld.innerHTML=zNachfrage[0];
		}
	}
}










init();