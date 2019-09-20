 function limpa_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('estado').value=("");
            
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('estado').value=(conteudo.uf);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_cep();
            alert("CEP não encontrado.");
            document.getElementById('cep').value=("");
        }
    }
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep !== "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('estado').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_cep();
        }
    }

function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i);
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }
  
}
 

function cadastrar(){
	var msg;
	 
	var nome = document.getElementById("nome").value;
	var rg = document.getElementById("rg").value;
	var cpf = document.getElementById("cpf").value;
	var nasc = document.getElementById("dtnasc").value;
	var sex
	
	var end = String(document.getElementById("rua").value) + " " + String(document.getElementById("numero").value)+" "+ String(document.getElementById("bairro").value)+" "+ String(document.getElementById("cidade").value)+" "+ String(document.getElementById("estado").value);
	
	if(document.getElementById("fem").checked){
		sex = document.getElementById("fem").value;
	}
	else{
		sex = document.getElementById("masc").value;
	}
	

	var formValido = $("form").get(0).checkValidity();
 
	if(formValido){
		var conf =confirm(`Dados estão corretos? \n#Nome: ${nome} \n#RG: ${rg} \n#CPF: ${cpf} \n#Nascimento: ${nasc} \n#Sexo: ${sex} \n#Endereço: ${end}`);
		if (conf == true) {
			msg =`Parabéns ${nome} Cadastro Realizado !!!`;
		}
		else{
			msg ="Cadastro Não Realizado !!!";
		}
		alert(msg);
	}
	else{
		alert("Cadastro Inválido");
	}
	  
}
