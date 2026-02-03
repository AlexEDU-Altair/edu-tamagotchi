/**
 * 
 */
	
	var tieneNombrePuesto=false;

	let tamagotchi = {
		nombre,
		energia : 10,
		hambre : 0,
		ponerNombre : function() {
			this.nombre=document.getElementById("introducirNombre").value;
			document.getElementById("nombre").innerText="Tamagotchi "+this.nombre;
			tieneNombrePuesto=true;
		},
		jugar : function() {
			if (tieneNombrePuesto==false) {
				alert("No le ha puesto un nombre.");
			} else if (this.energia>=2 && this.hambre<10) {
				this.energia-=2;
				this.hambre+=1;
				document.getElementById("energia").innerText="Energía: "+this.energia;
				document.getElementById("hambre").innerText="Hambre: "+this.hambre;
			} else {
				alert("No tiene hambre/energía suficiente.");
			}
		},
		comer : function() {
			if (tieneNombrePuesto==false) {
				alert("No le ha puesto un nombre.");
			} else if (this.energia<10 && this.hambre>=2) {
				this.energia+=1;
				this.hambre-=2;
				document.getElementById("energia").innerText="Energía: "+this.energia;
				document.getElementById("hambre").innerText="Hambre: "+this.hambre;
			} else {
				alert("No tiene hambre/energía suficiente.");
			}
		}
	}
	


function ponerNombre() {
	tamagotchi.ponerNombre();
}