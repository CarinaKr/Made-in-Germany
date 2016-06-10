var zOffeneDokument;

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
	
	zDokumentCount=Number(localStorage.getItem("DokumentCount"));
	
	zDokument=new Array(zDokumentCount);
	zDokumentQuelle=new Array(zDokumentCount);
	
	for(var i=0;i<zDokumentCount;i++)
	{zDokumentQuelle[i]=document.getElementById('dokument'+i);}
	zDokumentTextFeld=document.getElementById('text');
	
	zStressLevel=Number(localStorage.getItem("StressLevel"));
	zWirtschaftlichkeitLevel=Number(localStorage.getItem("WirtschaftlichkeitLevel"));
	zImageLevel=Number(localStorage.getItem("ImageLevel"));
	zImage2Level=Number(localStorage.getItem("Image2Level"));
	
	ladeDokumente();
}

function mouse(e)
{
	zMausX=e.pageX-document.getElementById('game_object').offsetLeft;
	zMausY=e.pageY-document.getElementById('game_object').offsetTop;
}

function ladeDokumente()
{
	for(var i=0;i<zDokument.length;i++)
	{		
		zDokument[zDokument.length-1-i]=Number(localStorage.getItem("Dokument"+i));
		if(localStorage.getItem("Dokument"+zDokument[zDokument.length-1-i]+"gelesen")=="false")
		{
			zDokumentQuelle[zDokument.length-1-i].style.fontWeight=700;
		}
		zDokumentQuelle[zDokument.length-1-i].innerHTML=zQuelle[zDokument[zDokument.length-1-i]];
	}
	zeigeDokument(0);
}

function zeigeDokument(pNummer)
{
	zOffeneDokument=zDokument[pNummer];
	zDokumentTextFeld.innerHTML=zDokumentText[zDokument[pNummer]];
	
	if(zOffeneDokument==19&&localStorage.getItem("Dokument"+19+"gelesen")=="false")//Alltag4
	{
		zImage2Level+=0.1;
		zImageLevel+=0.05;
		zWirtschaftlichkeitLevel-=0.05;
	}
	else if(zOffeneDokument==20&&localStorage.getItem("Dokument"+20+"gelesen")=="false")//Alltag5
	{
		zImage2Level-=0.05;
		zImageLevel+=0.1;
		zWirtschaftlichkeitLevel+=0.1;
	}
	else if(zOffeneDokument==3&&localStorage.getItem("Dokument"+3+"gelesen")=="false")//Skandal4
	{
		zStressLevel+=0.3;
		zImage2Level+=0.05;
		zImageLevel+=0.2;
	}
	else if(zOffeneDokument==4&&localStorage.getItem("Dokument"+4+"gelesen")=="false")//Skandal5
	{
		zStressLevel+=0.5;
		zImage2Level+=0.15;
		zImageLevel+=0.3;
	}
	else if(zOffeneDokument==7&&localStorage.getItem("Dokument"+7+"gelesen")=="false")//Skandal8
	{
		zStressLevel-=0.15;
		zImage2Level-=0.2;
		zImageLevel-=0.55;
		zWirtschaftlichkeitLevel-=0.25;
	}
	else if(zOffeneDokument==9&&localStorage.getItem("Dokument"+9+"gelesen")=="false")//Skandal10
	{
		zStressLevel-=0.05;
		zImage2Level-=0.05;
		zImageLevel-=0.05;
		localStorage.setItem("Position",14);
	}
	else if(zOffeneDokument==12&&localStorage.getItem("Dokument"+12+"gelesen")=="false")//Skandal13
	{
		zStressLevel-=0.2;
		zImage2Level-=0.25;
		zImageLevel-=0.6;
		zWirtschaftlichkeitLevel-=0.25;
	}
	else if(zOffeneDokument==13&&localStorage.getItem("Dokument"+13+"gelesen")=="false")//Skandal14
	{
		zStressLevel-=0.05;
		zImage2Level-=0.15;
		zImageLevel-=0.15;
		localStorage.setItem("Position",14);
	}
	else if(zOffeneDokument==14&&localStorage.getItem("Dokument"+14+"gelesen")=="false")//Skandal15
	{
		zStressLevel-=0.25;
		zImageLevel-=0.7;
		zImage2Level-=0.4;
	}
	
	//pruefe ob Mail bereits gelesen wurde und auf gelesen setzen
	if(localStorage.getItem("Dokument"+zOffeneDokument+"gelesen")=="false")
	{
		localStorage.setItem("Dokument"+zOffeneDokument+"gelesen","true");
		zDokumentQuelle[pNummer].style.fontWeight=400;
	}
	
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