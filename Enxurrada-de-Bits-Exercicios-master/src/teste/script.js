window.onload = function() {

    let nomes = ['Maria', 'Marcus', 'Carolina', 'João', 'Diegão'];  
    let turmas = ['302', '303', '305', '303', '304'];

   for(let i = 0; i < nomes.length; i++){
      let lista = document.createElement('ul'); 
      let elementoLista = document.createElement('li'); 
      let conteudoElementoLista = document.createTextNode(nomes[i]);

      elementoLista.appendChild(conteudoElementoLista);
      lista.appendChild(elementoLista);

      let subLista = document.createElement('ul'); 
      let elementoSubLista = document.createElement('li'); 
      let conteudoElementoSubLista = document.createTextNode(turmas[i]);

      elementoSubLista.appendChild(conteudoElementoSubLista);
      subLista.appendChild(elementoSubLista);

      lista.appendChild(subLista);

      let estilo1 = document.createAttribute('class');
      estilo1.value = "lista";
      conteudoElementoLista.setAttributeNode(estilo1);

      let estilo2 = document.createAttribute('class');
      estilo1.value = "sub-lista";
      conteudoElementoSubLista.setAttributeNode(estilo2);

      document.getElementById('caixa').insertAdjacentElement('beforeend', lista);

   } 

}