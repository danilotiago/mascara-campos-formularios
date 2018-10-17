/*
 * exemplo: https://igorescobar.github.io/jQuery-Mask-Plugin/
 * repositório: https://github.com/igorescobar/jQuery-Mask-Plugin
 */

$(document).ready(function(){
  $('.cpf').mask('000.000.000-00');
  $('.data').mask('00/00/0000');
  $('.hora-simples').mask('00:00');
  $('.hora-completa').mask('00:00:00');
  $('.data-hora').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.telefone-simples').mask('0000-0000');
  $('.telefone-completo').mask('(00) 0000-0000');
  $('.celular-simples').mask('0 0000-0000');
  $('.celular-completo').mask('(00) 0 0000-0000');
  $('.rg').mask('00.000.000-0');
  $('.cnpj').mask('00.000.000/0000-00');
  $('.dinheiro').mask("#.##0,00", {reverse: true});
  $(".dinheiro").on('blur', function () {
     var valor = $(this).val();
      if (valor >= 1) {
         valor = valor.trim();
         valor = valor.replace(/^0+/, '');
         $(this).val(valor);
     }
  });
  // Outros formatos
  $('.mixed').mask('AAA 000-S0S');
  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  $('.ip_address').mask('099.099.099.099');
  $('.percent').mask('##0,00%', {reverse: true});
  $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });
  $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});

});
