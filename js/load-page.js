$(document).ready(function(){ 
 
  $('a').click(function(e){
    e.preventDefault()

    let pagina = $(this).attr('href')

    $('.modal-title').empty() 

    $('.modal-body').empty() 


    switch(pagina){

      case 'projetos': 
        $('.modal-title').append('Projetos') 
        $('.modal-body').append(`
          <div class="container">
            <div class="row">
            <div class="col-12 col-sm-4 col-md-4">
            <img src="img/projetos.jpeg" alt="Projetos" class="img-fluid">
            </div>
            <div class="col-12 col-sm-8 col-md-8">
            <h4 class="text-center text-danger">Projetos</h4>
            <p>Aqui estão alguns dos meus projetos:</p>
          </div>
          </div>
          </div>
        `) 
        break

      case 'parceiros':

        $('.modal-title').append('Parceiros') 
        $('.modal-body').append('<p> Aqui são alguns dos meus parceiros:</p>') 
        break

      case 'contatos':

        $('.modal-title').append('Contatos') 
        $('.modal-body').append('<p>Aqui estão alguns dos meus contatos:</p>') 
        break

      default: alert('Página não encontrada')
      
    }

    $('#modal-info').modal('show')

  })
})