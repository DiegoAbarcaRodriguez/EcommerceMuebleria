const modalImagen=document.querySelector('#modal-imagen');

if(modalImagen){
    modalImagen.addEventListener('show.bs.modal',function(e){ /*Evento particular se Boostrap ejecutado cuando se muesrra el modal*/ 
    const enlace=e.relatedTarget;
    const rutaImagen=enlace.getAttribute('data-bs-imagen');
    
    const imagen=document.createElement('IMG');
    imagen.src=`img/${rutaImagen}`;
    imagen.classList.add('img-fluid');
    imagen.alt='Imagen Galería';

    const modalBody=document.querySelector('.modal-body');
    modalBody.appendChild(imagen);
});

modalImagen.addEventListener('hidden.bs.modal',function(){/*Evento particular se Boostrap ejecutado cuando se cierra el modal*/ 
const modalBody=document.querySelector('.modal-body');
modalBody.textContent='';
});

}

/* Validation de un formulario */
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

