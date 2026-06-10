const link = "https://gsenadevhub.github.io/AparecidaNutricao-aulaJs/data.json";
var botaoAdicionar = document.querySelector("#buscar-pacientes");
var ativo = false

botaoAdicionar.addEventListener("click", function(){
    
    if(!ativo){
    async function carregarPacientes(){
    try{
            let response = await fetch(link);
            let data = await response.json();
            console.log(data);
    
            data.forEach((element)=>{
                const tr = criarPaciente(element);
                tbody.appendChild(tr);
            });
        }
        catch(error){
            console.error("Erro ao carregar os pacientes", error);
        }
    }
    carregarPacientes();
    //     var xhr = new XMLHttpRequest();
    
    //     xhr.open("GET", link);
        
    //     xhr.addEventListener("load", function(){
            
    //         if(xhr.status == 200){
    //             var resposta = xhr.responseText;
    //             var pacientes = JSON.parse(resposta);
    //             console.log(pacientes);
    //             pacientes.forEach((element)=>{
    //                 const tr = criarPaciente(element);
    //                 tbody.appendChild(tr);
    //         });
    //         }
    
    //     })
    //     xhr.send();
        ativo = true;
    }

    // function listaErros(){
    //     erros.forEach(element => {
    //         const li = document.createElement("li");
    //         li.textContent = element;
    //         erros.appendChild(li);
    //     });
    // }
})
