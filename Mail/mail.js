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
		if(localStorage.getItem("Mail"+zMail[zMail.length-1-i]+"gelesen")=="false")
		{
			zMailAbsender[zMail.length-1-i].style.fontSize=20+"px";
		}
		zMailAbsender[zMail.length-1-i].innerHTML=zAbsender[zMail[zMail.length-1-i]];
	}
	zeigeMail(0);
}

function zeigeMail(pNummer)
{
	zOffeneMail=zMail[pNummer];
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
		if(localStorage.getItem("Mail"+zMail[pNummer]+"beantwortet")!="false")
		{zGegebeneAntwort1.innerHTML=zAntwortButton[Number(localStorage.getItem("Mail"+zMail[pNummer]+"beantwortet"))].innerHTML;}
	}
	
	if(zOffeneMail==16&&localStorage.getItem("Mail"+16+"beantwortet")!="false")//Alltag1
	{
		if(localStorage.getItem("Mail"+22+"beantwortet")=="false")//Nachfrage nicht beantwortet
		{
			zOffeneMail=22;
			zMailNachfrageFeld.innerHTML=zNachfrage[0];
			zAntwortButton[0].innerHTML=zAntwort[zOffeneMail][0];
			zAntwortButton[1].innerHTML=zAntwort[zOffeneMail][1];
			zAntwortButton[0].disabled=false;
			zAntwortButton[1].disabled=false;
		}
		else if(localStorage.getItem("Mail"+22+"beantwortet")!="false")//Nachfrage auch beantwortet
		{
			zMailNachfrageFeld.innerHTML=zNachfrage[0];
			zGegebeneAntwort2.innerHTML=zAntwort[22][localStorage.getItem("Mail"+22+"beantwortet")];
		}
	}
	else if(zOffeneMail==0&&localStorage.getItem("Mail"+0+"gelesen")=="false")//Skandal1
	{
		zStressLevel-=0.25;
		zWirtschaftlichkeitLevel-=0.3;
	}
	else if(zOffeneMail==1)//Skandal2 
	{
		if(localStorage.getItem("Mail"+1+"gelesen")=="false") //noch nicht gelesen
		{zStressLevel-=0.3;}
		if(localStorage.getItem("Mail"+1+"beantwortet")!="false"
			&&localStorage.getItem("Mail"+23+"beantwortet")=="false")// Nachfrage nicht beantwortet
		{
			zOffeneMail=23;
			zMailNachfrageFeld.innerHTML=zNachfrage[1];
			zAntwortButton[0].innerHTML=zAntwort[zOffeneMail][0];
			zAntwortButton[1].innerHTML=zAntwort[zOffeneMail][1];
			zAntwortButton[0].disabled=false;
			zAntwortButton[1].disabled=false;
		}
		else if(localStorage.getItem("Mail"+23+"beantwortet")!="false")//Nachfrage auch beantwortet
		{
			zMailNachfrageFeld.innerHTML=zNachfrage[1];
			zGegebeneAntwort2.innerHTML=zAntwort[23][localStorage.getItem("Mail"+23+"beantwortet")];
		}
	}
	else if(zOffeneMail==15&&localStorage.getItem("Mail"+15+"gelesen")=="false")//Skandal 16
	{
		zStressLevel-=zStressLevel*0.5;
		zImage2Level-=zImage2Level*0.5;
		zImageLevel-=zImageLevel*0.5;
		zWirtschaftlichkeitLevel-=zWirtschaftlichkeitLevel*0.5;
		localStorage.setItem("Position",8);
	}
	
	//pruefe ob Mail bereits gelesen wurde und auf gelesen setzen
	if(localStorage.getItem("Mail"+zOffeneMail+"gelesen")=="false")
	{
		localStorage.setItem("Mail"+zOffeneMail+"gelesen","true");
		zMailAbsender[pNummer].style.fontSize=15+"px";
	}
	zMailAddressat.innerHTML=zAbsender[zMail[pNummer]];
	
	speichereWerte();
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
	
	else if(zOffeneMail==1)//Skandal2 
	{
		zOffeneMail=23;
		if(pAntwort==0)
		{
			zMailNachfrageFeld.innerHTML=zNachfrage[1];
			zAntwortButton[0].innerHTML=zAntwort[zOffeneMail][0];
			zAntwortButton[1].innerHTML=zAntwort[zOffeneMail][1];
			zAntwortButton[0].disabled=false;
			zAntwortButton[1].disabled=false;
		}
		else if(pAntwort==1)
		{
			localStorage.setItem("Position",10);
		}
	}
	else if(zOffeneMail==23)//Skandal2 Nachfrage
	{
		zGegebeneAntwort1.innerHTML=pErsteAntwort;
		zGegebeneAntwort2.innerHTML=zAntwortButton[pAntwort].innerHTML;
		if(pAntwort==0)
		{
			zImageLevel-=0.1;
			zImage2Level-=0.1;
			zStressLevel+=0.05;
			localStorage.setItem("Position",5);
		}
		else if(pAntwort==1)
		{
			zImageLevel-=0.5;
			zImage2Level-=0.25;
			zStressLevel-=0.3;
			zWirtschaftlichkeitLevel-=0.2;
			localStorage.setItem("Position",2);
		}
	}
	else if(zOffeneMail==2)//Skandal 3
	{
		if(pAntwort==0)
		{
			zStressLevel+=0.05;
			localStorage.setItem("Position",3);
		}
		else if(pAntwort==1)
		{
			zStressLevel-=0.05;
			localStorage.setItem("Position",4);
		}
	}
	
	else if (zOffeneMail==5)//Skandal6
	{
		if(pAntwort==0)
		{
			zStressLevel-=0.25;
			localStorage.setItem("Position",6);
		}
		else if(pAntwort==1)
		{
			localStorage.setItem("Position",14);
		}
	}
	
	else if(zOffeneMail==6)//Skandal7
	{
		if(pAntwort==0)
		{
			localStorage.setItem("Position",7);
		}
		else if(pAntwort==1)
		{
			localStorage.setItem("Position",9);
		}
	}
	
	else if(zOffeneMail==8)//Skandal9
	{
		if(pAntwort==0)
		{
			localStorage.setItem("Position",22);
		}
	}
	
	else if(zOffeneMail==10)//Skandal 11
	{
		if(pAntwort==0)
		{
			zStressLevel-=0.15;
			localStorage.setItem("Position",11);
		}
		else if(pAntwort==1)
		{
			localStorage.setItem("Position",14);
		}
	}
	else if(zOffeneMail==11)//Skandal 12
	{
		if(pAntwort==0)
		{
			localStorage.setItem("Position",12);
		}
		else if(pAntwort==1)
		{
			localStorage.setItem("Position",13);
		}
	}
	
	
	//Level speichern
	speichereWerte();
}

function speichereWerte()
{
	//Level speichern
	localStorage.setItem("StressLevel",zStressLevel);
	localStorage.setItem("ImageLevel",zImageLevel);
	localStorage.setItem("WirtschaftlichkeitLevel",zWirtschaftlichkeitLevel);
	localStorage.setItem("Image2Level",zImage2Level);
}










init();