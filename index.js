

var container=$('.container');
// container.append()
var submit =$('.button')
submit.on("click",makeId)

function makeId(){
var name=$('.name').val()
var age=$('.age').val()
var school=$('.school').val()
var future=$('.future').val()
container.append(`<ul class= "list"><input type="checkbox" class="checkbox"> </input><li>${name}</li><li>${age}</li><li>${school}</li><li>${future}</li></ul>`)
var checkbox=$(".checkbox");
checkbox.on("click",deleteItem);

$(".name").val("");
$(".age").val("");
$(".school").val("");
$(".future").val("");

}
function deleteItem(){
  var list =$(".list");
  event.target.parentNode.remove();
}
