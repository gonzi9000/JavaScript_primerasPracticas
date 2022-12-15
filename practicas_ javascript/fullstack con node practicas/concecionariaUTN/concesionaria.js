  const autos = require('./vehiculos');

  const autos = {
    autos: autos,

    buscarAuto: function(patente){
        let autoEncontrado = autos.find(autos => auto.patente == patente);
    },
    if(autoEncontrado ){
        return autoEncontrado
    },
    else:{
        return: null
    },

    venderAutos: function(patente){
        let autos = this.buscarAuto(patente)
        this.if(autos);{
            autos.vendido = true
        }
    },

    AutosParaLaVenta: function(patente){
        let autoEncontrado = this.autos.filter(function(elemento){
            return ! elemento.vendido
        }) 
    },

    autosNuevos: function(){
        let AutosCero = this.AutosParaLaVenta();
        return AutosCero.filter(auto1 => auto1.km <= 100)
    },
    
    listaDeVentas:() =>{
        let lista = this.auto.filter(auto => {return auto.vendido == true})
         return lista.map(auto => auto.precio)
    },

    totalDeVentas: () => {
        let sumatoria = this.listaDeVentas();
        let sumaTotal = sumatoria.reduce((acomulador, precio) => acomulador + precio)
        return sumaTotal
    },

   puedeComprar: function(auto, persona){
    if(auto.precio > persona.capacidadDePagoTotal)
        return false;
        if(auto.precio / persona.cuota > persona.capacidadDePagoEnCuotas)
            return false;
        return true
        },

    AutosPuedeComprar: function(persona){
        let autosEnVenta = this.AutosParaLaVenta;
        let puedeComprar = [];
        autosEnVenta.forEach(auto => {
            if(this.puedeComprar(auto.persona)){
                this.AutosPuedeComprar.push(auto)
            }
            return puedeComprar
        });
    }
    
   


  };