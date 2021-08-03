$(document).ready(function()

$('a').click(function(e)
{

  e.preventDefault()

  let page = $(this).attr('href')

  $('.modal-title').empty()
  $('.moday-body').empty()


switch(page){

  case 'projetos':
  $('.modal-title').append('Projetos')
  $('.modal-body').append('Alguns dos meus projetos')

  break

  case 'parceiros':
  $('.modal-title').append('Parceiros')
  $('.modal-body').append('Alguns dos meus parceiros')

  break

  case 'parceiros':
  $('.modal-title').append('Contatos')
  $('.modal-body').append('Alguns dos meus contatos')

  break

  default: alert('Pagina não encontrada')
}

$('#modal-info').modal('show')

})

})