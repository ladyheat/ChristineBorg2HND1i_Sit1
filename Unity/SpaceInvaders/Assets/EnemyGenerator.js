#pragma strict

var enemy:Rigidbody;
var rows:int;
var columns:int;


function generateEnemy(rows:int, columns:int)
{
	var ypos = transform.position.y;
	
	for(var rowscounter=0;rowscounter<rows;rowscounter++)
	{
		var tempEnemy:Rigidbody;
		//repeat for columns times
		for (var columnscounter=0;columnscounter<columns;columnscounter++)
		{
			//y position of swarm. 1.5 horizontal spacing. Can be reduced to 0
			tempEnemy = Instantiate(enemy,Vector3(columnscounter*2,ypos-(rowscounter*1.5),1),Quaternion.identity);
			//place this object inside the swarm
			tempEnemy.transform.parent = this.transform;
		
		}
	}
}

function Start () {
	generateEnemy(rows,columns);
}

function Update () {

}