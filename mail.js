var zMail;


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
	  
	zMail=new Array(localStorage.getItem("MailCount"));
	
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
		/*for(var j=0;j<5;j++)
		{
			if(localStorage.getItem("Alltag"+j)==i)
			{
				zMail[i]=zAlltag[j];
			}
		}
		for(var k=0;k<16;k++)
		{
			if(localStorage.getItem("Skandal"+k)==i)
			{
				zMail[i]=zSkandal[k];
			}
		}*/
		
		zMail[i]=localStorage.getItem("Mail"+i);
		document.write("Es sind "+zMail.length+" Mails erhalten");
		document.write("Es sind "+localStorage.getItem("MailCount")+" Mails erhalten");
		document.write(zMail[0]);
	}
}










init();