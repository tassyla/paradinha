async function csvField(url, campo){
    let list = [];
    let a ;
     return await axios.get(url).then( function(response){   
        let obj = $.csv.toObjects(response.data);
        for(var i=0; i< obj.length;i++){
            for(var aux in obj[i]){
                if(aux == campo)
                    list.push(obj[i][aux]);         
            }
        }
                     
    }).then(res => list);   
}

async function main (){
    
    const list1 = await csvField('https://raw.githubusercontent.com/UserZeca/Enxurrada-de-Bits-Exercicios/master/docs/Characters.csv', 'Character');
    const list2 = await csvField('https://raw.githubusercontent.com/UserZeca/Enxurrada-de-Bits-Exercicios/master/docs/Characters.csv', 'Description/role');
    
}


window.onload = () => {

    main()

    
    for (let i = 0; i < list1.length; i++) {
        /*const lista1 = document.createElement("ul");                   
        const elementoLista1 = document.createElement("li");
        const conteudoLista1 = document.createTextNode(list1[i]);
        elementoLista1.appendChild(conteudoLista1);
        lista1.appendChild(elementoLista1);


        const lista2 = document.createElement("ul");
        const elementoLista2 = document.createElement("li");
        const conteudoLista2 = documente.createTextNode(list2[i]);
        elementoLista2.appendChild(conteudoLista2);
        lista2.appendChild(elementoLista2);

        lista1.appendChild(lista2);*/
        console.log("hehehe");

    }

/*ERRO:   Uncaught ReferenceError: list1 is not defined
    at window.onload (index.js:28) */

}
