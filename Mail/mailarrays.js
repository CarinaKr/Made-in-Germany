
var zMailText=new Array(21);
var zAbsender=new Array(21);
var zAntwort=new Array(30);
for(var i=0;i<zAntwort.length;i++)
{
	zAntwort[i]=new Array(2);
}
var zNachfrage=new Array();

zAbsender[0]="PR@mayermetall.de";
zAbsender[1]="Außendienst@mayermetall.de";
zAbsender[2]="Zeitung@hamburg.de";

zAbsender[5]="Zeitung@hamburg.de";
zAbsender[6]="PR@mayermetall.de";

zAbsender[8]="HR@mayermetall.de";
zAbsender[10]="Zeitung@hamburg.de";
zAbsender[11]=zAbsender[6];
zAbsender[15]="Aufsichtsrat@mayermetall.de";
zAbsender[16]="Aufsichtsrat@mayermetall.de";
zAbsender[17]="HR@mayermetall.de";
zAbsender[18]="HR@mayermetall.de";


zMailText[0]="mit Bedauern muss ich Ihnen mitteilen, dass es in einer der Firmeneigene Erzmine zu einem Unglück kam. "+
				"Hierbei kamen eine Vielzahl an Minenarbeitern ums Leben. Zudem wird hierdurch die Metalllieferung deutlich"+
				" beeinträchtigt.  (Skandal 1)";
zMailText[1]="nach ersten internen Untersuchungen über das Minenunglück sind wir zu dem Schluss gekommen, dass es in dem Bergwerk"+
				"eine Vielzahl an Sicherheitslücken gab. Da die ersten Zeitungen bereits nach einem öffentlichen Statement fragen,"+
				"sollten Sie über das weitere Vorgehen nachdenken. Sollte die Öffentlichkeit über die Mißstände der Mine informierte"+
				"werden, würde dies dem Ansehen der Firma sicher schwer schaden. Die Vorderungen einer Pressemitteilung zu ignorieren"+
				"würde allerdings ebenfalls die Skepsis der Öffentlichkeit wecken. (Skandal 2)";
zMailText[2]="nach Ihrer schockierenden Pressemitteilung sind noch viele Fragen offen. Daher würden wir Sie, oder einen Ihrer Stellvertreter gerne"+
				" zu einem Interview einladen. (Skandal 3)";

zMailText[5]="nach Ihrer schockierenden Pressemitteilung sind noch viele Fragen offen. Daher würden wir Sie gerne"+
				" zu einem Interview einladen.(Skandal(6)";
zMailText[6]="für Ihr bevorstehendes Interview gibt es noch einige Details zu bedenken. Sie haben entweder die Möglichkeit die "+
				"Sicherheitslücken nun zuzugeben, nachdem Sie diese in der Vorherigen Pressemitteilung abgestitten haben. "+
				"Hierdurch würde das Ansehen der Firma sicherlich merklick geschädigt. Alternativ könnten Sie an der Vorherigen"+
				" Aussage festhalten und die Beteiligung der Firm an dem Unglück weiter leugnen. (Skandal 7)";
// 7 ist ein Dokument
zMailText[8]="in Anbegracht der Ergeignisse der letzen Zeit, möchten wir Ihnen die Möglichkeit eines Rücktrittes nahelegen. (Skandal 9)";

zMailText[10]="durch Vertrauliche Quellen sind wir auf ein Minenunglück in einer der Erzminen Ihrer Firma aufmerksam geworden."+
				" Daher würden wir Sie gerne zu einem Interview über dieses Thema einladen. (Skandal 11)";
zMailText[11]="für Ihr bevorstehendes Interview gibt es noch einige Details zu bedenken. Sie haben entweder die Möglichkeit die "+
				"Sicherheitslücken zuzugeben. "+
				"Hierdurch würde das Ansehen der Firma sicherlich merklick geschädigt. Alternativ könnten Sie "+
				"die Beteiligung der Firm an dem Unglück leugnen. (Skandal 12)";

zMailText[15]="aufgrund des letzen sehr negaiven Berichtes über unsere Firma, kam es zu einer Demonstration von Menschenrechtsaktivisten"+
				" vor unserem Bürogebäude. (Skandal 16)";

zMailText[16]="nach Veröffentlichung des neuesten Quatalberichtes ist deutlich Sichtbar, dass vor allem die Marketingabteilung"+
				" sehr erfolgrei gearbeitet hat. (Alltag 1)";
zMailText[17]=" Personalchef Karl Heinz Mutmacher geht nach langjähriger Mitarbeit zum 1. September in Rente. Zu diesem Anlass wäre"+
				" es Angemessen eine Abschiedsfeier zu veranstalten oder eine Grußkarte zu überreichen.";
zMailText[18]="für die frei gewordene Personalchef Stelle wird dringed ein Nachfolger benötigt. Nach Sichtung der eingesendeten "+
				"Bewerbungen haben sich zwei besonders Hervorgehoben. Der erste wäre ein Mitarbeiter, der bereits seit Jahren bei"+
				" Mayermetall gute Arbeit leistet. Der zweite wäre ein sehr erfolgreicher Geschäftsmann aus Berlin. (Alltag 3)";


zAntwort[0][0]="";
zAntwort[0][1]="";
zAntwort[1][0]="Pressemitteilung";
zAntwort[1][1]="nichts tun";
zAntwort[23][0]="Abstreiten";
zAntwort[23][1]="Sicherheitslücken";
zAntwort[2][0]="Stellvertreter";
zAntwort[2][1]="Persönlich";

zAntwort[5][0]="Annehmen";
zAntwort[5][1]="Ablehnen";
zAntwort[6][0]="Zugeben";
zAntwort[6][1]="Abstreiten";
//7 ist Dokument
zAntwort[8][0]="Ja";
zAntwort[8][1]="Nein";

zAntwort[10][0]="Annehmen";
zAntwort[10][1]="Absagen";
zAntwort[11][0]=zAntwort[6][0];
zAntwort[11][1]=zAntwort[6][1];

zAntwort[15][0]="";
zAntwort[15][1]="";

zAntwort[16][0]="Lob";
zAntwort[16][1]="ignorieren";
zAntwort[22][0]="Bonus";
zAntwort[22][1]="freier Tag";
zAntwort[17][0]="Grußkarte";
zAntwort[17][1]="Abschiedsfeier";
zAntwort[18][0]="Intern";
zAntwort[18][1]="Extern";


zNachfrage[0]="Bonus an den Abteilungsleiter oder einen freien Tag für alle Mitarbeiter?";
zNachfrage[1]="Bedauern ausdrücken aber Beteiligung abstreiten oder Sicherheitslücken zugeben und Hilfe versprechen?";
