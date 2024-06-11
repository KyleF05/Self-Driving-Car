class Car {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;

		this.speed = 0;
		this.accelaretion = 0.2;
		this.maxSpeed = 3;
		this.friction = 0.05;

		this.controls = new Controls();
	}

	update() {
		//* Speed control for the car
		if (this.controls.forward) {
			this.speed += this.accelaretion;
		}
		if (this.controls.reverse) {
			this.speed -= this.accelaretion;
		}

		//* Cap max speed so that the car isn't too fast
		if (this.speed > this.maxSpeed) {
			this.speed = this.maxSpeed;
		}
		if (this.speed < -this.maxSpeed / 2) {
			this.speed = -this.maxSpeed / 2;
		}

		//* This prevent a car from moving infinitely, it continuously slows it down slightly
		if (this.speed > 0) {
			this.speed -= this.friction;
		}
		if (this.speed < 0) {
			this.speed += this.friction;
		}
		if (Math.abs(this.speed) < this.friction) {
			this.speed = 0;
		}

		this.y -= this.speed; //* change y value by speed
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.rect(
			this.x - this.width / 2,
			this.y - this.height / 2,
			this.width,
			this.height
		);
		ctx.fill();
	}
}
