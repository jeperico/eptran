<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestão de Administradores</title>
    <link rel="stylesheet" href="./add-adm.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
</head>
<body>
    <header id="header">
      <i class="fa-solid fa-bars" id="bar" onclick="collapse()"></i>			
      <img src="/assets/images/logos/logo-eptran-white.png" id="logo" />
      <i class="fa-solid fa-user"></i>
    </header>

    <nav id="sideBar">
      <a href="/pages/home/home.html">Página Inicial</a>
      <a href="/pages/about-us/about-us.html">Quem somos Nós</a>
      <a href="/pages/games/catalogue/catalogue.html">Jogos</a>
      <a href="/pages/initial-series/initial-series.html">Séries Iniciais</a>
      <a href="/pages/final-series/final-series.html">Séries Finais</a>
      <a href="/pages/high-school/high-school.html">Ensino Médio</a>
    </nav>

    <div id="overlay" onclick="collapse()"></div>

    <div id="foca">
      <img src="/assets/images/world-02.png" id="planet">
      <img src="/assets/images/seal.png" class="fa-bounce" id="car">
    </div>
    <main>

		<h1>Gestão de Administradores</h1>
		<h3>Lista de administradores:</h3>

    <table border='1'>
      <tbody>
		<?php
        include('conexao.php');
  
        $select = "SELECT id, email FROM cadastro";
        $executar_select = $conn->query($select);
    
    
        echo"
          <tr>
           <th>ID</th>
           <th>Email</th>
          </tr>";
    
          if($executar_select->num_rows > 0){
            while($row = $executar_select->fetch_assoc()){
              echo"<tr>
                   	  <td>" . $row['id']."</td>
                   	 <td>" . $row['email']."</td>
                   </tr>";
                }
            }

		?>
      </tbody>
    </table>


		<h3>Informe o email do novo administrador para que ele receba um codigo de verificação:</h3>

    <form action="processamento.php" method="post">

    <label class="" for="email">Email<br></label>
      <input class="addMail" type="email" name="email" placeholder="Digite o email de um novo administrador"> <br>

      <input class="botoes" type="submit" name="enviar" value="Gravar">

      <input class="botoes" type="submit" name="enviar" value="Excluir">

    </form>


    </main>
</body>
</html>