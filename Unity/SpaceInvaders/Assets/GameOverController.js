#pragma strict
var theme:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI (){

	GUI.skin = theme;
	GUI.Label(Rect(150,400,130,50),"Your score is: "+ SpaceshipController.score);
	if (GUI.Button(Rect(150,440,100,50),"Main Menu"))
	{
		Application.LoadLevel(0);
	}
}