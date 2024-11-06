// elementos do html
var sideBar = document.getElementById("sideBar")
var overlay = document.getElementById("overlay")
var planet = document.getElementById("planet")


var showing = -1

function collapse(){
    showing *= -1;

    if (showing == 1){
        sideBar.style.left = "0%"; 
        overlay.style.opacity = "75%"; 
        overlay.style.visibility = "visible" 
        planet.style.left = "100vw"
        planet.style.top = "100vh"
        
    }
    else{
        sideBar.style.left = "-80%"; 
        overlay.style.opacity = "0%"; 
        overlay.style.visibility = "hidden" 
        planet.style.left = "200vw"
        planet.style.top = "200vh"
    };
};


function abrirPopup(tipo) {
    
    document.querySelector('.overlay').style.display = 'flex';
    
    
    var message = tipo === 'edit' ? "Tem certeza que deseja editar esta postagem?" : "Tem certeza que deseja deletar esta postagem?";
    document.getElementById('popupMessage').innerText = message;
  
    
    var yesBtn = document.getElementById('yesBtn');
    yesBtn.onclick = function() {
      if (tipo === 'edit') {
        
        alert("A postagem será editada.");
      } else if (tipo === 'delete') {
       
        alert("A postagem será deletada.");
      }
      fecharPopup();
    };
  }
  
  // Função para fechar o pop-up
  function fecharPopup(event) {
    document.querySelector('.overlay').style.display = 'none';
  }
