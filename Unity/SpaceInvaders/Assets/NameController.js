#pragma strict

function Start () {

}

function Update () {

	
}

function OnGUI () {

	GUI.color = Color.white;
	GUI.Label(Rect(485,175,150,35),"Player's Name");
	SpaceshipController.playerName = GUI.TextField(Rect(450,220,150,35),SpaceshipController.playerName);
	if (SpaceshipController.playerName != "")// if the textfield is not empty, start button will appear
	{
		if (GUI.Button(Rect(475,290,100,35),"Start"))
		{
			Application.LoadLevel(2);
		}	
	}
}