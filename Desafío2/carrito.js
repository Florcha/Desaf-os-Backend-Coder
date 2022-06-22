//CONSIGNA: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va 
//a trabajar e implemente los siguientes métodos:

//save(Objet): Numer – Recibe un objeto, lo guarda en el archivo, devuelve el id asignado
//getById(Number): Object – Recibe un id y devuelve el objeto con ese id, o null si no está
//getAll(): Object [] – Devuelve un array con los objetos presentes en el archivo
//deleteById(Number): void – Elimina el archivo el objeto con el id buscado
//deleteAll(): void – Elimina todos los objetos presentes en el archivo


const  Contenedor  =  require ( './app.js' )

let  contenedor =  new  Contenedor ( 'productos.txt' ) ;

 carrito  const =  asincrono () => {
    consola _ log ( '------leer el archivo por si tenemos productos de antes' )
    consola _ log ( aguardar  contenedor . getAll ( ) ) ;  

    consola _ log ( '------agregar productos' )
    
    const  obj1 =  { título : 'Crema Nutritiva con Liposomas' , precio : 1200 , thumbnail: 'https://ceyc.com.ar/wp-content/uploads/EXEL_862-Gel-Cream-con-Ceramidas-50-ml.jpg' }
    consola _ log ( aguardar  contenedor . guardar ( obj1 ) ) ;
    const  obj2 =  { título : 'Gel Cream con Ceramidas' ,  precio : 1500 , thumbnail: 'https://ceyc.com.ar/wp-content/uploads/EXEL_862-Gel-Cream-con-Ceramidas-50-ml.jpg' }          
    consola _ log ( aguardar  contenedor . guardar ( obj2 ) ) ;
    const  obj3 =  { título : 'Shampoo Exel Argan y Maracuya' ,  precio : 1100 ,  thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_884455-MLA31692481145_082019-O.jpg' }
    
    consola _ log ( aguardar  contenedor . guardar ( obj3 ) ) ;
    consola _ registro ( '---------' )
    consola _ log ( '----Contenedor despues' )
    consola _ log ( aguardar  contenedor . getAll ( ) ) ; 
    
    consola _ registro ( '---------' )
    consola _ log ( '--getById(2)' ) 
    consola _ log ( espera  contenedor . getById ( 2 ) )
    consola _ log ( '--getById(34) : debe devolver null' )
    consola _ log ( espera  contenedor . getById ( 34 ) )
    
    consola _ registro ( '---------' )
    consola _ log ( '----Contenedor Antes' )
    consola _ log ( aguardar  contenedor . getAll ( ) ) ; 
    consola _ registro ( '------' )
    consola _ registro ( '--deleteById(2)' )
    consola _ log ( espera  contenedor . deleteById ( 2 ) )
    consola _ log ( '----Contenedor despues' )
    consola _ log ( espera  contenedor . getAll ( ) )
    
    consola _ registro ( '---------' )
    consola _ registro ( '--deleteAll' )
    consola _ log ( espera  contenedor . deleteAll ( ) ) 
    consola _ registro ( '---------' )
    consola _ registro ( '--getAll' )
    consola _ log ( await  contenedor . getAll ( ) )
}

carrito () ;