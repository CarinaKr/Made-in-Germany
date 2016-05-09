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
	
	zMail=new Array(zMailCount);
	zMailAbsender=new Array(zMailCount);
	zAntwortButton=new Array();
	
	for(var i=0;i<zMailCount;i++)
	{zMailAbsender[i]=document.getElementById('mail'+i);}
	zMailAddressat=document.getElementById('adressat');
	zMailTextFeld=document.getElementById('mail');
	zMailNachfrageFeld=document.getElementById('nachfrage');
	for(var j=0;j<2;j++)
	{zAntwortButton[j]=document.getElementById('antwort'+j);}
	zGegebeneAntwort1=document.getElementById('gegebeneAntwort1');
	zGegebeneAntwort2=document.getElementById('gegebeneAntwort2');
	
	zStressLevel=Number(localStorage.getItem("StressLevel"));
	zWirtschaftlichkeitLevel=Number(localStorage.getItem("WirtschaftlichkeitLevel"));
	zImageLevel=Number(localStorage.getItem("ImageLevel"));
	zImage2Level=Number(localStorage.getItem("Image2Level"));
	
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
		zMail[zMail.length-1-i]=Number(localStorage.getItem("Mail"+i));
		zMailAbsender[zMail.length-1-i].innerHTML=zAbsender[zMail[zMail.length-1-i]];
	}
	zeigeMail(0);
}

function zeigeMail(pNummer)
{
	zOffeneMail=zMail[pNummer];
	zMailAddressat.innerHTML=zAbsender[zMail[pNummer]];
	zMailTextFeld.innerHTML=zMailText[zMail[pNummer]];
	zGegebeneAntwort1.innerHTML="";
	zGegebeneAntwort2.innerHTML="";
	zMailNachfrageFeld.innerHTML="";
	zAntwortButton[0].innerHTML=zAntwort[zMail[pNummer]][0];
	zAntwortButton[1].innerHTML=zAntwort[zMail[pNummer]][1];
	zAntwortButton[0].disabled=false;
	zAntwortButton[1].disabled=false;
	
	if(zAntwort[zMail[pNummer]][0]==""||localStorage.getItem("Mail"+zMail[pNummer]+"beantwortet")!="false")
	{
		zAntwortButton[0].disabled=true;
		zAntwortButton[1].disabled=true;
		zGegebeneAntwort1.innerHTML=zAntwortButton[Number(localStorage.getItem("Mail"+zMail[pNummer]+"beantwortet"))].innerHTML;
	}
	
	if(zOffeneMail==16&&localStorage.getItem("Mail"+16+"beantwortet")!="false")
	{
		zMailNachfrageFeld.innerHTML=zNachfrage[0];
		zGegebeneAntwort2.innerHTML=zAntwort[22][localStorage.getItem("Mail"+22+"beantwortet")];
	}
}

function antwort(pAntwort)
{
	localStorage.setItem("Mail"+zOffeneMail+"beantwortet",pAntwort);//antwort speichern
	var pErsteAntwort=zGegebeneAntwort1.innerHTML;
	zGegebeneAntwort1.innerHTML=zAntwortButton[pAntwort].innerHTML;
	if(localStorage.getItem("Mail"+zOffeneMail+"beantwortet")!="false")//Button disable
	{
		zAntwortButton[0].disabled=true;
		zAntwortButton[1].disabled=true;
	}
	
	if(zOffeneMail==16) //Alltag1
	{
		zOffeneMail=22;
		if(pAntwort==0)
		{
			zMailNachfrageFeld.innerHTML=zNachfrage[0];
			zAntwortButton[0].innerHTML=zAntwort[zOffeneMail][0];
			zAntwortButton[1].innerHTML=zAntwort[zOffeneMail][1];
			zAntwortButton[0].disabled=false;
			zAntwortButton[1].disabled=false;
		}
		else if(pAntwort==1)
		{
			var pImage2Abzug=Number(localStorage.getItem("AbzugImage2"))+0.03;
			localStorage.setItem("AbzugImage2",pImage2Abzug);
		}
	}
	else if(zOffeneMail==22)//Alltag1 nachfrage
	{
		zGegebeneAntwort1.innerHTML=pErsteAntwort;
		zGegebeneAntwort2.innerHTML=zAntwortButton[pAntwort].innerHTML;
		if(pAntwort==0)
		{
			zWirtschaftlichkeitLevel-=0.1;
		}
		else if(pAntwort==1)
		{
			zWirtschaftlichkeitLevel-=0.05;
			zImage2Level+=0.1;
		}
	}
	
	else if(zOffeneMail==17)//Alltag2
	{
		if(pAntwort==0)
		{
			var pImage2Abzug=Number(localStorage.getItem("AbzugImage2"))+0.03;
			localStorage.setItem("AbzugImage2",pImage2Abzug);
		}
		else if(pAntwort==1)
		{
			zWirtschaftlichkeitLevel-=0.05;
			zImage2Level+=0.1;
			localStorage.setItem("AbzugImage2",0);
		}
	}
	
	else if(zOffeneMail==18)//Alltag3
	{
		if(pAntwort==0)
		{
			zImage2Level+=0.1;
			zWirtschaftlichkeitLevel-=0.05;
		}
		else if(pAntwort==1)
		{
			zImage2Level-=0.05;
			zWirtschaftlichkeitLevel+=0.1;
		}
	}
	
	//Level speichern
	localStorage.setItem("StressLevel",zStressLevel);
	localStorage.setItem("ImageLevel",zImageLevel);
	localStorage.setItem("WirtschaftlichkeitLevel",zWirtschaftlichkeitLevel);
	localStorage.setItem("Image2Level",zImage2Level);
}










init();