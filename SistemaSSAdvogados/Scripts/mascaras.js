$(function () {
	$("input[data-tipo='cpf']").mask("000.000.000-00");
	$("input[data-tipo='cnpj']").mask("00.000.000/0000-00");
	$("input[data-tipo='data']").mask("00/00/0000");
	$("input[data-tipo='telefone']").mask("(00) 0 00000000");
});