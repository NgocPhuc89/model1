let matrix = [];
        for ( let i = 0 ; i < 5 ; i++){
             matrix[i]= [] ; 
              for ( let j = 0 ; j < 7 ; j++){ 
                 matrix[i][j] = Math.floor(Math.random() * 41 + 10);
             }
            //matrix = Math.floor(Math.random() * 41 + 10);
            //console.log( matrix );
        }
        console.log( matrix );