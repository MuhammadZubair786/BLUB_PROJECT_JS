function off(){
    console.log("OFF")
    document.getElementById("main").style.backgroundColor="black"
    document.getElementById("txt").innerText="LIGHT OFF"
    document.getElementById("txt").style.color="WHITE"
    document.getElementById("glary2").src="ob.png"
    document.getElementById("glary1").src="ob.png"
    document.getElementById("glary").src="ob.png"
    document.getElementById("glary3").src="ob.png"
    document.getElementById("glary4").src="ob.png"
    document.getElementById("glary5").src="ob.png"
 
    

}

function onfu(){
    document.getElementById("main").style.backgroundColor="blue"
    document.getElementById("txt").innerText="LIGHT ON"
    document.getElementById("txt").style.color="yellow"
    console.log("ON")
    document.getElementById("glary1").src="yb.png"
    document.getElementById("glary2").src="rb.png"
    document.getElementById("glary").src="gb.png"
    document.getElementById("glary3").src="gpb.png"
    document.getElementById("glary4").src="ogb.png"
    document.getElementById("glary5").src="pb.png"
    
    


   
}