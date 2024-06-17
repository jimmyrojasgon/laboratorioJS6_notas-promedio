class Alummno{
    var= Codigo;    
    var= nombre;    
    var= nota1;
    var= nota2;
    var= nota3;
    var= nota4;    

    constructor(Codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = document.getElementById("codigo")
        this.nombre = document.getElementById("nombre")
        this.nota1 = document.getElementById("nota1")
        this.nota2 = document.getElementById("nota2")
        this.nota3 = document.getElementById("nota3")
        this.nota4 = document.getElementById("nota4")
    }

    promedio(){
        return (nota1*0.15)+(nota2*0.20)+(nota3*0.25)+(nota4*0.40)/4
    }
    
    condicion(){
        if(12<=promedio()) return 'aprobado';
        return 'desaprobado';
    }

    obsequio(){
        if(17<=promedio()) return 'aprobado se gano una mochila'
        return 'desaprobado';   
    }
}