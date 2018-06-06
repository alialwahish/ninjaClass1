<script>
function Ninja(name){
    this.name=name;
    this.health=100
    var speed =3;
    var strength=3;
   
    this.sayName = function(){
        return this.name;
    
    }
    this.showStatus = function(){
        return "Name: "+this.name+" Strength: "+strength+" Health:"+this.health 
    }
    this.drinkSake = function(){
        this.health+=10;
        return "Drinking sake"
    }
   
}


var ninj1= new Ninja("Ali");
console.log(ninj1)
console.log(ninj1.sayName())
console.log(ninj1.drinkSake())
console.log(ninj1.showStatus())


</script>