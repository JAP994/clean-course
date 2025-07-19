(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMoieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface Movie {
        cast:        string[];
        description: string;
        rating:      number;
        title:       string;
    }
    function createMovie({cast, description, rating, title}:Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor'), birthdate;
        return true;        

    }

    //Coninue
      const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
       
        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;
        
        return isRetired ? 3000 :4000;
    
    }
})();
