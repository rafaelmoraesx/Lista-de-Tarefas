function addtarefas() {   //adiciona uma nova tarefa
    const taskinput = document.getElementById('taskinput');  //obtem o input de tarefa
    const tasklist = document.getElementById('tasklist');  //obtem a lista de tarefa
    const tasktext = taskinput.value.trim();  //obtem o valor do input e remove espaços extras 

    if (tasktext !== "") {  //verifica se o texto tarefa nao esta vazio
        const listitem = document.createElement("li");  //cria um novo item
        listitem.textContent = tasktext;  //define o texto da lista

        const deleteBtn = document.createElement('SPAN'); //cria botao de apagar 
        deleteBtn.textContent = 'X';  // define o texto do botao
        deleteBtn.className = 'DELETE'; // define a clase css para botao
        deleteBtn.onclick = function () { //adiciona um evento de clique para apagar a tarefa
            tasklist.removeChild(listitem); // remove o item da lista
        };

        listitem.appendChild(deleteBtn); //adiciona o botao de apagar item de lista
        tasklist.appendChild(listitem); //adiciona o item de lista a lista de tarefas
        taskinput.value = ''; //limpa o input de tarefa
    }
}

document.getElementById('taskinput').addEventListener('keypress', function (e) { 
    if (e.key === 'Enter') { //verifica se a tecla pressionada é enter
        addtarefas(); //chama a funçao para adicionar a tarefa
    }
});
