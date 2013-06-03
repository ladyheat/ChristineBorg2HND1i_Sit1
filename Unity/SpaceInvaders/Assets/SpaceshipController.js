#pragma strict
static var score:int;
static var health: int=100;
static var shotsFired:int;
static var shotsHit:int;
static var shotsMissed:int;
	
var laserSSlot:Rigidbody;


var theme:GUISkin;

static var playerName: String = "";

var speedShot:boolean = false;


function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="enemyLaser")
	{
		health--;
		Destroy(other.gameObject);
	}
	
	if(other.gameObject.tag=="health")
	{
		Destroy(other.gameObject);
	}

}

function OnGUI()
{
	GUI.skin = theme;
	
	GUI.Label(Rect(20,0,100,35),"Player: "+playerName);
	GUI.Label(Rect(150,0,100,35),"Health: "+health);
	GUI.Label(Rect(250,0,100,35),"Score: "+score);
	GUI.Label(Rect(950,0,100,35),"Shots Fired: "+shotsFired);
	GUI.Label(Rect(850,0,100,35),"Shots Hit: "+shotsHit);
	GUI.Label(Rect(720,0,120,35),"Shots Missed: "+shotsMissed);


//check Borders.output of the coordinates of the borders on screen
	/* GUI.Label(Rect(0,100,100,35),"Leftmost: "+BorderController.leftmost);
	GUI.Label(Rect(0,130,100,35),"Rightmost: "+BorderController.rightmost);
	GUI.Label(Rect(0,160,100,35),"Topmost: "+BorderController.topmost);
	GUI.Label(Rect(0,190,100,35),"Bottommost: "+BorderController.bottommost); */

}

function Start () {

}

function Update () {
	
	BorderController.EnableBorders(this.transform);
	
	transform.Translate(Vector3.right * 15 * Input.GetAxis("Horizontal") * Time.deltaTime);
	
	
	if(Input.GetKeyDown(KeyCode.Space))
	{
		var laser = Instantiate(laserSSlot,transform.position,transform.rotation);
		if (speedShot) {
			laser.GetComponent(LaserSController).speed = 30;
		}
		shotsFired++;
	}
	
	
	if (GameObject.FindGameObjectsWithTag("enemy").Length == 0)
	{
	
		if (Application.loadedLevel < 6)
		{
			Application.LoadLevel(Application.loadedLevel+1);
		}
		else
		{
			Application.LoadLevel(7);
		}
	}
	
	
	if (health <=0)
	{
		Destroy (this.gameObject);
		Application.LoadLevel(7);
	}
	
}

function SetSpeedShot() {
	// speedshot will get activated
	speedShot = true;
	// speedshot will inactivate after 4 seconds have passed
	Invoke("UnsetSpeedShot", 4);
}

function UnsetSpeedShot() {
	speedShot = false;
}