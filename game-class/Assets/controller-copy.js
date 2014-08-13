#pragma strict

// GOLOBAL VARIABLE
var walkSpeed: int = 5;
var jumpHeight: int = 5;
var spawn:GameObject;

function Start () {
	

}

function Update () {

}

//   ORIGINAL MARIO CLASS CONTROLLER

// function FixedUpdate () {
// 	//make Character move

// 	// transform.position.x = -40;
// 	rigidbody2D.velocity.x = walkSpeed;

// 	var start = transform.position;
// 	start.y -= 1.4;

// 	Debug.DrawRay(start, -Vector2.up, Color.red, 10);

// 	var ray:RaycastHit2D = Physics2D.Raycast(start, -Vector2.up, 0.01);

// 	var animationController:Animator = this.GetComponent("Animator");

// 	if (ray.collider) {
		
// 		animationController.SetInteger("state", 0);

// 		if (Input.GetAxis("Vertical") > 0) {
// 			rigidbody2D.velocity.y = jumpHeight;
// 		};
// 	}else {
// 		animationController.SetInteger("state", 1);
// 	};

// 	if (transform.position.y <-3) {
// 		Debug.Log("Die Mario!");
// 		transform.position.x = spawn.transform.position.x;
// 		transform.position.y = spawn.transform.position.y;
// 	};

	
// }


//  TWEAKED NO GRAVITY/WATER CONTROLLER BASIC

function FixedUpdate () {
	//make Character move

	// transform.position.x = -40;
	rigidbody2D.velocity.x = walkSpeed;

	var start = transform.position;
	start.y -= 1.4;

	Debug.DrawRay(start, -Vector2.up, Color.red, 10);

	var ray:RaycastHit2D = Physics2D.Raycast(start, -Vector2.up, 0.01);

	var animationController:Animator = this.GetComponent("Animator");

	if (ray.collider) {
		
		animationController.SetInteger("state", 0);

		
	}else {
		animationController.SetInteger("state", 1);
	};

	if (Input.GetAxis("Vertical") > 0) {
			rigidbody2D.velocity.y = jumpHeight;
		};

	// CHECK AND SEE IF USER IS HITING BUTTON/CONTROLLER
	// if (Input.GetAxis("Vertical")){
	// 	rigidbody2D.velocity.y = jumpHeight;
	// }

	if (transform.position.y <-3) {
		Debug.Log("Die Mario!");
		transform.position.x = spawn.transform.position.x;
		transform.position.y = spawn.transform.position.y;
	};

	
}