#pragma strict

function Start () {

}

function Update () {

	transform.Translate(Vector3.down * 10 * Time.deltaTime);
}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag=="player")
	{
		other.GetComponent(SpaceshipController).SetSpeedShot();
		Destroy(this.gameObject);
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}