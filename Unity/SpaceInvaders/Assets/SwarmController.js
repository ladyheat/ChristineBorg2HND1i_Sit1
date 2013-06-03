#pragma strict

var leftmargin:float=-13.0;
var rightmargin:float=7.0;

var LeftWall:boolean;
var RightWall:boolean;


function goLeft()
{
	transform.Translate(Vector3.left * 4 * Time.deltaTime);
}

function goRight()
{
	transform.Translate(Vector3.right * 4 * Time.deltaTime);
}

function Start () {
	//start by moving right
	LeftWall=true;
}

function Update () {

	if (transform.position.x < leftmargin)
	{
		LeftWall = true;
		RightWall = false;
	}
	
	if (transform.position.x > rightmargin)
	{
		LeftWall = false;
		RightWall = true;
	}
	
	if (LeftWall == true)
	{
		goRight();
	}
	
	if (RightWall == true)
	{
		goLeft();
	}
	
}