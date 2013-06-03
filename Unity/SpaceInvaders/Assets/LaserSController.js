#pragma strict

var speed:float = 20;

function Start () {

}

function Update () {

	//direction of laser will go vertical up with speed of 20
	transform.Translate(Vector3.up * speed * Time.deltaTime);
	
}


function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="enemy")
	{
		//adds +1 to the score tag
		SpaceshipController.score++;
		//destroys the enemy
		other.GetComponent(EnemyController).Kill();
		//destroys the laser
		Destroy(this.gameObject);
		//adds +1 to every alien that has been hit by the laser
		SpaceshipController.shotsHit++;
	}
	
}

function OnBecameInvisible()
{
	//if laser exits screen, laser is destroyed
	Destroy(this.gameObject);
	//adds +1 to every missed shot
	SpaceshipController.shotsMissed++;

}