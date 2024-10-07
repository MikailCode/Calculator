function add(v){
	document.getElementById('display').value += v
}
function clea() {
  	document.getElementById('display').value = ' '
}
function result(){
    try{
        document.getElementById('display').value = eval(document.getElementById('display').value)

    } catch(error){
        document.getElementById('display').value = "error"
    }
}