#pragma strict

var enemyLaser:Rigidbody;
var health:Rigidbody;
var shoot:Rigidbody;

var explosion:GameObject;

function shootLaser()
{	
	//creates an instance of enemy lasers at the position of each alien.
	Instantiate(enemyLaser,transform.position,transform.rotation);
}

function dropHealth()
{
	Instantiate(health,transform.position,transform.rotation);
}

function dropShoot ()
{
	Instantiate(shoot,transform.position,transform.rotation);
}

function Start () {

	var delay:float;
	var delayH:float;
	var delayS:float;
	delay = Random.Range(1.0,3.0);
	delayH = Random.Range(3,100);
	delayS = Random.Range(7,50);
	InvokeRepeating("shootLaser",delay,delay);
	InvokeRepeating("dropHealth",delayH,delayH);
	InvokeRepeating("dropShoot",delayS,delayS);

}

function Update () {

}

function Kill() {
	Instantiate(explosion, transform.position, Quaternion.identity);
	Destroy(this.gameObject);
}