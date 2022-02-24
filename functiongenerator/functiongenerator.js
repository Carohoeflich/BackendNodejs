function * generatorFunction(num){ // it has to have the * after function
    for (let i = 0; i< num; i+=1){
        yield console.log(i); // yield is only used in generator functions
    }
}

const generator = generatorFunction(3);
generator.next(); // shows 0
generator.next(); //shows 1
generator.next(); //shows 2
generator.next(); // shows undefined

// yield vs return:
//al llegar al return el codigo que existe debajo no se ejecutara jamas.
//por otro lado, yield, detiene su ejecucion y regresa algo. Cuando la vuelves a llamar, reanuda la funcion en donde se detuvo la ultima vez.