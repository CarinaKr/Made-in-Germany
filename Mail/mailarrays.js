
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

zAbsender[15]="Aufsichtsrat@mayermetall.de";
zAbsender[16]="Aufsichtsrat@mayermetall.de";
zAbsender[17]="HR@mayermetall.de";
zAbsender[18]="HR@mayermetall.de";


zMailText[0]="Skandal1: Nachricht über Fabrik.";
zMailText[1]="Skandal2: Nachricht über Beteiligung der Firma. Pressemitteilung veröffentlichen oder Nachricht ignorieren";
zMailText[2]="Skandal3: Einladung zum Interview. Stellvertreter schicken oder Persönlich gehen?";

zMailText[5]="Skandal6: Einladung zum Interview. Annehmen oder Absagen?";
zMailText[6]="Skandal7: Welche Version soll im Interview dargestellt werden? Beteiligung Zugeben oder Abstreiten?";
// 7 ist ein Dokument
zMailText[8]="Skandal9: Rücktritt?";

zMailText[15]="Skandal 16: Demo vor dem Büro von Aktivisten.";
zMailText[16]="Alltag 1; Geschäftsbericht; Lob oder nichts tun?";
zMailText[17]="Alltag 2; Personalchef Karl Heinz Mutmacher geht zum 1. September in Rente Antwort2 Karl Heinz Mutmacher"+
			"geht in Rente Abschiedsfeier Freitag 15.30h im Foyer Antwort1 Grußkarte an Karl Heinz Mutmacher schicken ";
zMailText[18]="Alltag 3; Unterlagen für Personalchef-Stelle Antwort1 Interner, Glückwunsch Antwort2 Externer, Kurze Vorstellung";
zMailText[19]="Alltag 4; Presseartikel über neuen Chef intern";
zMailText[20]="Alltag 5; Presseartikel über neuen Chef extern";


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
