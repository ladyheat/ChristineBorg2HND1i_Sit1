#pragma strict

var leftmargin:float=-15.0;
var rightmargin:float=15.0;

var LeftWall:boolean;
var RightWall:boolean;

var enemyLaser:Rigidbody;

static var health: int=30;


function shootLaser()
{	
	//creates an instance of enemy lasers at the position of each alien.
	Instantiate(enemyLaser,transform.position,transform.rotation);
}


function goLeft()
{
	transform.Translate(Vector3.left * 10 * Time.deltaTime);
}

function goRight()
{
	transform.Translate(Vector3.right * 10 * Time.deltaTime);
}


function Start () {
	//start by moving right
	LeftWall=true;
	
	var delay:float;
	delay = Random.Range(0.50,0.15);
	InvokeRepeating("shootLaser",delay,delay);
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