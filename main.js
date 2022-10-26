var images = ["f7f90be3-d6e2-476a-85ca-508aef91bca9.jpeg","f625bd22-e4b2-4b45-9c39-612ba8c44778.jpeg","3423c4cd-bf44-4522-9286-ab4d73314382.jpeg","c6321bc8-3212-45d9-9ded-2fd2d7ffb4ce.jpeg","1a8f3ff5-69b1-4896-a312-0cd82c623a54.jpeg"];
var names = ["Mom", "Dad", "Me", "brother", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}
