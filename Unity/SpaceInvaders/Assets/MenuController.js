#pragma strict

	
function Start () {

	SpaceshipController.score = 0;
	SpaceshipController.health = 100;
	SpaceshipController.shotsFired = 0;
	SpaceshipController.shotsHit = 0;
	SpaceshipController.shotsMissed = 0;
}

function OnGUI(){
	if (GUI.Button(Rect(100,450,150,35),"New Game"))
	{		
		Application.LoadLevel(1);
	}
	
	if (GUI.Button(Rect(100,500,150,35),"Exit"))
	{
		Application.Quit();
		//print ("game exit");
	}

}

function Update () {
 
}