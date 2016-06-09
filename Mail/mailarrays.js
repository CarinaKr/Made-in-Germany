
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


zMailText[0]="mit Bedauern muss ich Ihnen mitteilen, dass es in einer der firmeneigenen Erzmine zu einem Unglück kam. "+
				"Hierbei kamen eine Vielzahl an Minenarbeitern ums Leben. Zudem wird hierdurch die Metalllieferung deutlich "+
				" beeinträchtigt bzgl. Lieferdatum und -umfang. Ich melde mich mit schnellstmöglich mit neuen Details. ";
zMailText[1]="nach ersten internen Untersuchungen zum Minenunglück sind wir zu dem Schluss gekommen, dass es im Bergwerk "+
				"eine Vielzahl an Sicherheitslücken gab. Da die ersten Anfragen bereits nach einem öffentlichen Statement schon vorliegen, "+
				"sollten Sie möglichst schnell über das weitere Vorgehen nachdenken. Sollte die Öffentlichkeit über die Mißstände der Mine informiert "+
				"werden, würde dies dem Ansehen der Firma sicher nachhaltig schaden. Die Vorderungen einer Pressemitteilung zu ignorieren "+
				"würde wiederum Nachfragen hervorrufen. Bitte machen Sie sich zeitnah Gedanken! ";
zMailText[2]="nach Ihrer gestrigen Pressemitteilung sind noch viele Fragen offen. Daher würden wir Sie, oder einen Ihrer Stellvertreter gerne "+
				"zu einem Interview einladen.";

zMailText[5]="nach Ihrer gestrigen Pressemitteilung sind noch viele Fragen offen. Daher würden wir Sie gerne "+
				"zu einem Interview einladen.";
zMailText[6]="für Ihr bevorstehendes Interview gibt es noch einige Details zu bedenken. Sie haben entweder die Möglichkeit die "+
				"Sicherheitslücken nun doch offenzulegen, nachdem Sie diese in der vorherigen Pressemitteilung abgestitten haben. "+
				"Alternativ könnten Sie an der vorherigen "+
				"Aussage festhalten und die Beteiligung der Firma am Unglück weiterhin leugnen. ";
// 7 ist ein Dokument
zMailText[8]="in Anbegracht der Ergeignisse der letzen Tage möchten wir Ihnen die "+
				"Möglichkeit eines Rücktrittes nahelegen. Bitte denken Sie sorgfältig darüber nach. ";

zMailText[10]="durch vertrauliche Quellen sind wir auf einen Bericht über ein Minenunglück in einer der Erzminen Ihrer Firma gestoßen. "+
				"Daher würden wir Sie gerne zu einem Interview zu diesem Thema einladen. ";
zMailText[11]="für Ihr bevorstehendes Interview gibt es noch einige Details zu bedenken. Sie haben entweder die Möglichkeit die "+
				"Sicherheitslücken offenzulegen. "+
				"Alternativ könnten Sie die Beteiligung der Firma am Unglück leugnen. ";

zMailText[15]="nach diversen negativen Berichtes über unsere Firma zum Minenunglück kam es zu einer Demonstration von Menschenrechtsaktivisten"+
				" vor unserem Bürogebäude. Ich werde Sie bald über Näheres informieren. ";

zMailText[16]="in der Veröffentlichung des neuesten Quartalberichtes ist zu bemerken, dass vor allem die Abteilung D-Süd "+
				"sehr effektiv und nachhaltig gearbeitet hat. Herr Seiler hat empfohlen entweder dem Abteilungsleiter einen entsprechenden Bonus "+
				"auszuzahlen oder jedem Mitarbeiter der Abteilung einen Tag Urlaub zuzuteilen. Welche Option würden Sie Empfehlen?";
zMailText[17]="Personalchef Karl Heinz Mutmacher wird nach langjähriger Mitarbeit zum 1. September in Rente gehen. Zu diesem Anlass wäre"+
				"wünschenswert eine Abschiedsfeier zu veranstalten oder eine Grußkarte zu überreichen. Welche Aufmerksamkeit soll ich für Sie arrangieren? ";
zMailText[18]="für die freigewordene Position des Personalchefs wird nun ein entsprechender Nachfolger gesucht. Nach Sichtung und Kennenlernen der "+
				"Bewerber haben sich zwei Kandidaten besonders hervorgehoben. Der erste wäre ein Mitarbeiter, der bereits seit 13 Jahren bei "+
				"Mayermetall angestellt ist. Der Zweite wäre ein Personaler aus Berlin, der mit den besten Empfehlungen kommt. Bitte wählen Sie nach Durchsicht der Unterlagen Ihren Favoriten aus. ";


zAntwort[0][0]="";
zAntwort[0][1]="";
zAntwort[1][0]="Pressemitteilung schreiben";
zAntwort[1][1]="keine Reaktion";
zAntwort[23][0]="Verantwortlichkeit bestreiten";
zAntwort[23][1]="Sicherheitslücken offenlegen";
zAntwort[2][0]="Stellvertreter schicken";
zAntwort[2][1]="Persönlich gehen";

zAntwort[5][0]="Annehmen";
zAntwort[5][1]="Ablehnen";
zAntwort[6][0]="Sicherheitslücken offenlegen";
zAntwort[6][1]="Verantwortlichkeit bestreiten";
//7 ist Dokument
zAntwort[8][0]="Ja";
zAntwort[8][1]="Nein";

zAntwort[10][0]="Annehmen";
zAntwort[10][1]="Absagen";
zAntwort[11][0]=zAntwort[6][0];
zAntwort[11][1]=zAntwort[6][1];

zAntwort[15][0]="";
zAntwort[15][1]="";

zAntwort[16][0]="Lob aussprechen";
zAntwort[16][1]="keine Reaktion";
zAntwort[22][0]="Bonus";
zAntwort[22][1]="freier Tag";
zAntwort[17][0]="Grußkarte";
zAntwort[17][1]="Abschiedsfeier";
zAntwort[18][0]="Intern";
zAntwort[18][1]="Extern";


zNachfrage[0]="Bonus an den Abteilungsleiter oder einen freien Tag für alle Mitarbeiter?";
zNachfrage[1]="Bedauern ausdrücken aber Verantworklichkeit abstreiten oder Sicherheitslücken offenlegen und Aufarbeitung versprechen?";
