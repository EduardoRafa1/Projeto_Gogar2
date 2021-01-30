$(function(){


	
	
	var val = 1;
	var inicioDoCadastro = false;
	var buttonNum = 0;
	var buttonValores = ['Registrar','Avançar','Concluir'];
	var botao = $('#registre-se p').html(buttonValores[buttonNum]);

	$('#registre-se').click(function(){
		
		if(inicioDoCadastro == true){
			if (primeiraValidaCampo() == true) {
				
				val = 2;
				
			}
			if(segundaValidaCampo() == true){
				val = 3;
			}
			
			if(terceiraValidaCampo() == true){
				val = 4;
			}
			
			if(quartaValidaCampo() == true){
				console.log('Concluido');
				alert('Registro concluido com sucesso!');
			}

		}
			inicioDoCadastro = true;
	
	
		if(val == 1){
		
			
			$('.dados-da-empresa').fadeIn(1500);
			$('.botao').fadeIn();
			buttonNum = 1;
			$('#registre-se p').html(buttonValores[buttonNum]);

			
		}if(val == 2){
			$('.dados-da-empresa').css('display','none');
			$('.dados-do-usuario').fadeIn(1500);

			if(razaoSocial == false){
			console.log('estoiu na razao social');
			return false;
				
			}else if(razaoSocial == true){
				console.log('Passei');
			}

		}if(val == 3){
			$('.dados-do-usuario').css('display','none');
			$('.conta-receber').fadeIn(1500);
		}if(val == 4){
			$('.conta-receber').css('display','none');
			$('.documentos-digitalizados').fadeIn(1500);
			buttonNum = 2;
			$('#registre-se p').html(buttonValores[buttonNum]);
			
		}


	});

	//--------------- Avançar Campo -----------------------//
	function primeiraValidaCampo(){

		var razaoSocial = $('input[name=razaoSocial]').val();
		if(razaoSocial == ''){
			aplicarCampoInvalido($('input[name=razaoSocial'));
			return false;
		}if(verificarCNPJ() == false){
			aplicarCampoInvalido($('input[name=cnpj'));
			return false;
		}if(verificaDataAbertura() == false){
			aplicarCampoInvalido($('input[name=aberturadata'));
			return false;
		}if(verificaRamoDeNegocio() == false){
			aplicarCampoInvalido($('input[name=category'));
			return false;
		}if(verificaEmail() == false){
			aplicarCampoInvalido($('input[name=email]'));
			return false;
		}if(verificaTelefone() == false){
			aplicarCampoInvalido($('input[name=phone]'));
			return false;
		}if(verificaCEP() == false){
			aplicarCampoInvalido($('input[name=CEP]'));
			return false;
		}if(verificaFaturamentoCartaoDebitoFisico() == false){
			aplicarCampoInvalido($('input[name=Faturamento]'));
			return false;
		}if(verificaFaturamentoCartaoCreditoFisico() == false){
			aplicarCampoInvalido($('input[name=Faturamento1]'));
			return false;
		}
		if(verificaFaturamentoCartaoDebitoOnline() == false){
			aplicarCampoInvalido($('input[name=Faturamento0]'));
			return false;
		}if(verificaFaturamentoCartaoCreditoOnline() == false){
			aplicarCampoInvalido($('input[name=Faturamento2]'));
			return false;
		} if (verificaBoletosMensais() == false) {
			aplicarCampoInvalido($('input[name=code]'));
			return false;
		}
		else{
			return true;
		}
	}

	//---------Segunda Validação do campo----//

	function segundaValidaCampo(){
		if(verificaCPF() == false){
			aplicarCampoInvalido($('input[name=cpf]'));
			return false;
		}if(verificaBirth() == false){
			aplicarCampoInvalido($('input[name=birth]'));
			return false;
		}if(verificaNomeDaMae() == false){
			aplicarCampoInvalido($('input[name=namemom]'));
			return false;
		}



		else{
			return true;
		}
	}

	// ---- Terceira Valida Campo --- //
	function terceiraValidaCampo(){
		if(verificaNomeTitular() == false){
			aplicarCampoInvalido($('input[name=nometitular]'));
			return false;
			
		}if(verificaBanco()  == false){
			aplicarCampoInvalido($('input[name=banco]'));;
			return false;
		}

		if(verificaAgencia() == false){
			aplicarCampoInvalido($('input[name=ag]'));
			return false;
		}if(verificaConta() == false){
			aplicarCampoInvalido($('input[name=conta]'));
			return false;
		}

		else{
			return true;
		}
	}
	// --- Quarta Valida Campo ---//

	function quartaValidaCampo(){
		if(verificaFoto() == false){
			aplicarCampoInvalido($('input[name=foto]'));
			return false;

		}if(verificaFoto1() == false){
			aplicarCampoInvalido($('input[name=foto1]'));
			return false;
		}
		if(verificaFoto2() == false){
			aplicarCampoInvalido($('input[name=foto2]'));
			return false;
		}
		if(verificaContratoSocial() == false){
			aplicarCampoInvalido($('input[name=contratoSocial]'));
			return false;
		}
		if(verificaFoto3() == false){
			aplicarCampoInvalido($('input[name=foto3]'));
			return false;
		}

		else{
			return true;
		}
	}

	//--verifica os valores corretamente pra poder dar continuidade no preenchimento---/
	function verificarCNPJ(){
		var cnpj = $('input[name=cnpj]').val();
		if(cnpj == '')
			return false;
		
		if (!cnpj.match(/^([0-9]{2}[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2})$/)) {
			return false;
		}
	}

	function verificaDataAbertura(){
		var dataAbertura = $('input[name=aberturadata]').val();
		if(dataAbertura == ''){
			return false;
		
		}
	}
	function verificaRamoDeNegocio(){
		var ramoDeNegocio = $('input[name=category]').val();
		if(ramoDeNegocio == '')
			return false;	
	}
	function verificaEmail(){
		var email = $('input[name=email]').val();
		if(email == '')
			return false;

		if(!email.match(/^([a-zA-Z0-9-_.]{1,})+@+([a-zA-Z]{1,})+.c+([a-zA-Z.]{2,})$/)){
			return false;
		}
	}
	function verificaTelefone(){
		var telefone = $('input[name=phone]').val();
		if(telefone == '')
			return false;
		if(!telefone.match(/^([0-9]{11})$/)){
			return false;
		}
	}
	function verificaCEP(){
		var CEP = $('input[name=CEP]').val();
		if(CEP == '')
			return false;

		if(!CEP.match(/^([0-9]{8})$/)){
			return false;
		}
	}
	function verificaFaturamentoCartaoDebitoFisico(){
		var FaturamentoCartaoDebitoFisico = $('input[name=Faturamento]').val();
		if(FaturamentoCartaoDebitoFisico == '')
			return false;
		if(!FaturamentoCartaoDebitoFisico.match(/^([0-9]{4,})$/)){
			return false;
		}
	}

	function verificaFaturamentoCartaoCreditoFisico(){
		var FaturamentoCartaoCreditoFisico = $('input[name=Faturamento1]').val();
		if(FaturamentoCartaoCreditoFisico == '')
			return false;
		if(!FaturamentoCartaoCreditoFisico.match(/^([0-9]{4,})$/)){
			return false;
		}
	}
	function verificaFaturamentoCartaoDebitoOnline(){
		var FaturamentoCartaoDebitoOnline = $('input[name=Faturamento0]').val();
		if(FaturamentoCartaoDebitoOnline == '')
			return false;
		if(!FaturamentoCartaoDebitoOnline.match(/^([0-9]{4,})$/)){
			return false;
		}
	}

	function verificaFaturamentoCartaoCreditoOnline(){
		var FaturamentoCartaoCreditoOnline = $('input[name=Faturamento2]').val();
		if(FaturamentoCartaoCreditoOnline == '')
			return false;
		if(!FaturamentoCartaoCreditoOnline.match(/^([0-9]{4,})$/)){
			return false;
		}
	}

	function verificaBoletosMensais(){
		var boletosMensais = $('input[name=code]').val();
		if(boletosMensais == '')
			return false;

		if (!boletosMensais.match(/^([0-9]{1,})$/)) {
			return false;
		}
	}


	//----Verificando os valores da Segunda Página -----//

	function verificaCPF(){
		var cpf = $('input[name=cpf]').val();
		if(cpf == '')
			return false;

		if(!cpf.match(/^([0-9]{11})$/)){
			return false;
		}
	}
	function verificaBirth(){
		var birth = $('input[name=birth]').val();
		if(birth == ''){
			return false;
		}
	}
	function verificaNomeDaMae(){
		var nomeDaMae = $('input[name=namemom]').val();
		if(nomeDaMae == '')
			return false;
		
		var amount = nomeDaMae.split(' ').length;
		var splitStr = nomeDaMae.split(' ');

		if(amount >=2){
			for(var i = 0; i < amount ; i++){
				if(splitStr[i].match(/^([A-z]{1}[a-z]{1,})$/)){
					return true;
					console.log('OK');
				}else{
					return false;
				}
			}
		}else{
			return false;
		}
	}

	// -- Verificando a terceira pagina de cadastro -- //


	function verificaNomeTitular(){
		var nomeTitular = $('input[name=nometitular]').val();

		if(nomeTitular == '')
			return false;
	}
	function verificaBanco(){
		var banco = $('input[name=banco]').val();

		if(banco == '')
			return false;
	}
	function verificaAgencia(){
		var agencia = $('input[name=ag]').val();

		if(agencia == '')
			return false;

		if(!agencia.match(/^([0-9]{4})$/)){
			return false;
		}
	}
	function verificaConta(){
		var conta = $('input[name=conta]').val();

		if(conta == '')
			return false;

		if(!conta.match(/^([0-9]{4})$/))
			return false;
	}

	// --- Verificando A Quarta e Ultima Pagina --- //
	function verificaFoto(){
		var foto = $('input[name=foto]').val();

		if(foto == ''){
			return false;
		}
	}
	function verificaFoto1(){
		var foto1 = $('input[name=foto1]').val();

		if (foto1 == '') 
			return false;
		
	}
	function verificaFoto2(){
		var foto2 = $('input[name=foto2]').val();

		if (foto2 == '') 
			return false;
		
	}
	function verificaContratoSocial(){
		var contratoSocial = $('input[name=contratoSocial]').val();

		if(contratoSocial == ''){
			return false;
		}
	}
	function verificaFoto3(){
		var foto3 = $('input[name=foto3]').val();

		if (foto3 == '') 
			return false;
		
	}
	
	
	

	

	//--------------Validar Campo Invalido ------------------------//

	function aplicarCampoInvalido(el){
		el.css('border','2px solid red');
	}


	//---------Reseta Campo--------//
	function resetarCampoInvalido(el){
		el.css('border', '1px solid #ccc');
	}

	$('input[type=text]').focus(function(){
 		resetarCampoInvalido($(this));
 	})


	
	

})