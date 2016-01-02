PI = 3.141592653589793238462643383279;


function Camera(pos) {
    this.pos = vec3.create(pos);
    this.front = vec3.create([0, 0, 0]);
    this.right = vec3.create([0, 0, 0]);
    this.up = vec3.create([0, 1, 0]);
    this.worldUp = vec3.create([0, 1, 0]);
    this.yaw = -250.0;
    this.pitch = 0.0;

    this.zoom = 45.0;
    this.movementSpeed = 3.0;
    this.mouseSensitivity = 0.25;

    this.updateCameraVectors = function() {
        //this.yaw += 1;
        //this.pitch += 0.0001;
        var frontx =Math.cos(this.yaw * (PI/180.0)) * Math.cos(this.pitch * (PI/180));
        var fronty = Math.sin(this.pitch * (PI/180.0));
        var frontz = Math.sin(this.yaw * (PI/180.0)) * Math.cos(this.pitch * (PI/180));
        //console.log("frontx: " + frontx + " fronty: " + fronty + " frontz: " + frontz);
        this.front = vec3.create([frontx, fronty, frontz]);
            //this.front.normalize();
        //console.log("front before normalize: " + vec3.str(this.front));
        this.front = vec3.normalize(this.front, this.front);

        //console.log(vec3.str(this.front));
        this.right = vec3.cross(this.front, this.worldUp, this.right);
        this.right = vec3.normalize(this.right, this.right);//.normalize();
        this.up = vec3.cross(this.right, this.front, this.up);//.normalize();
        this.up = vec3.normalize(this.up, this.up);//.normalize();

        //this.up = vec3.create([0, 1, 0]);
        //this.right = vec3.create([1, 0, 0]);
        //this.front = vec3.create([0.3, 0, -1]);



        /*console.log("front: " + vec3.str(this.front));
        console.log("right: " + this.right);
        console.log("up: " + this.up);
        console.log("pos" + this.pos);*/
    };
    this.getViewMatrix = function(viewMatrix) {
        this.updateCameraVectors();
        //var look;
        //vec3.add(this.pos, this.front);
        //console.log(vec3.add(this.pos, this.front, vec3.create()));
        viewMatrix = mat4.lookAt(this.pos, /*this.pos + this.front*/ vec3.add(this.pos, this.front, vec3.create()), this.worldUp);
        //console.log(viewMatrix);
        return viewMatrix;
    };
    this.processKeyboard = function(e) {
    // todo fix. this is window instead of object
        var speed = 0.1;
        console.log(this);
        if (e.keyCode == "87") {

            console.log(this.front + " " + this.pos);
            this.pos = vec3.add(this.pos, this.front);
        }
        if (e.keyCode == "83") {
            this.pos = vec3.subtract(this.pos, this.front);

        }
        if (e.keyCode == "65") {
            alert("The 'a' key is pressed.");
            this.pos = vec3.add(this.pos, vec3.negate(this.right));

        }
        if (e.keyCode == "68") {
            this.pos = vec3.add(this.pos, this.right);
        }
    };
    this.processMouseMovement = function(xoffset, yoffset) {
        console.log(this.yaw);
        xoffset *= this.mouseSensitivity;
        yoffset *= this.mouseSensitivity;

        this.yaw   += xoffset;
        this.pitch += yoffset;

        if (this.pitch > 89.0) this.pitch = 89.0;
        if (this.pitch < -89.0) this.pitch = -89.0;

        this.updateCameraVectors();
    };
    this.processMouseScroll = function() {

    };


}



//pos = vec3.create([1, 2, 3]);