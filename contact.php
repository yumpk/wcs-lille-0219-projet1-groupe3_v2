<?php
if ($_POST) 
{
 $erreur = array();

  if (empty($_POST["First_Name"])) 
  {
    $erreur ["First_Name1"] = "your First name can not be empty";   
  }
  if (empty($_POST["Last_Name"])) 
  {
    $erreur ["Last Name1"] = "your Last Name can not be empty";   
  }
  if (isset($_POST["Company_Name"])) {
    $companyname=$_POST["Company_Name"];
  }
  else 
  {
    $companyname="";
  }
  if (empty($_POST["email"])) 
  {
    $erreur ["email1"] = "your email can not be empty";   
  }
  if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    }
  else{
    $erreur ["email2"] = "email non valide";
  }

  if (strlen($_POST["Message"]) < 8)
  {
    $erreur["Message1"] = "Message must be at least 8 characters long";
  }

  
//checking des erreur

  
  if (count($erreur) == 0) 
  {
    $bdd = 'mysql:dbname=project1;host=127.0.0.1';
    $user = 'root';
    $password = 'kabul';
    $Firstname=$_POST["First_Name"];
    $Lastname=$_POST["Last_Name"];
    
    $email=$_POST["email"];
    $message=$_POST["Message"];
      
    
        $bdd = new PDO($bdd, $user, $password);
        $bdd->exec("INSERT INTO formulaire(Firstname,Lastname,companyname,email,message) VALUES('$Firstname','$Lastname','$companyname','$email','$message')");
    
    header("location: success.php");
    exit();
  }

}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <!-- CSS -->
    <link rel="stylesheet" href="style.css" />

    <!-- Favicon-->
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="images/icon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="images/icon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="images/icon/favicon-16x16.png"
    />
    <link rel="manifest" href="images/icon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="images/icon/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

    <!-- Favicon-->
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="images/icon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="images/icon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="images/icon/favicon-16x16.png"
    />
    <link rel="manifest" href="images/icon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="images/icon/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

    <!-- Google Fonts-->
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700"
      rel="stylesheet"
    />

    <title>Incub'in Lille Contact</title>
  </head>

  <body>
    <!-- MENU -->
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="index.html"
        >Incub' in Lille<span class="colored-text">.</span></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Incubators
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="euratechnologies.html"
                >Euratechnologies</a
              >
              <a class="dropdown-item" href="eurasante.html">Eurasanté</a>
              <a class="dropdown-item" href="#">Blanchemaille</a>
              <a class="dropdown-item" href="#">Alacrité</a>
              <a class="dropdown-item" href="#">Agtech</a>
              <a class="dropdown-item" href="#">Cré'Innov</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="team.html">Team</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="contact.php">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <section class="nerdy-pen height-nerdy">
        <h1 class="nerdy-pen__text">
          Want to
          <span
            class="txt-rotate colored-text"
            data-period="1800"
            data-rotate='[ "hire", "contact" ]'
          ></span>
          us ?
        </h1>
      </section>
    </div>

    <!-- FORM -->
    <section class="form-container">
      <div class="container" id="formulaire">
        <form class="py-5" method="post" action="contact.php#formulaire" target="blank">
          <div class="row">
            <div class="col form-group">
              <input
                type="text"
                name="First_Name"
                class="form-control"
                placeholder="<?php if (isset($_POST['First_Name'])) echo $_POST['First_Name']; else echo 'First Name'; ?>"
                required
                onblur="verifyFirstName(this)"
          

              />
              <p><?php if (isset($erreur["First Name1"])) echo $erreur["First Name1"]; ?></p>


            </div>
            <div class="col form-group">
              <input
                type="text"
                name="Last_Name"
                class="form-control"
                placeholder="Last name"
          
                onblur="verifyLastName(this)"
              />
              <p> <?php if(isset($erreur["Last Name1"])) echo $erreur["Last Name1"]; ?></p>
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              name="Company_Name"
              class="form-control"
              id="formGroupExampleInput"
      
              placeholder="Company name (optional)"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
      
              placeholder="Type your email"
              onblur="verifyEmail(this)"
            />
          
            <p> <?php if (isset($erreur["email1"])) echo $erreur ["email1"]; ?></p>
            <p> <?php if (isset($erreur["email2"])) echo $erreur ["email2"]; ?></p>
          </div>
          <div class="form-group">
            <div id="counter-container">
              <input disabled maxlength="3" size="3" value="40" id="counter" />
            </div>

            <textarea
              onkeyup="textCounter(this,'counter',40);"
              class="form-control"
              name="Message"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Type your message"
            
              onblur="verifyMessage(this)"
            ></textarea>
            <p><?php if (isset($erreur["Message1"])) echo $erreur["Message1"]; ?></p>
          </div>
          <button type="submit" class="btn btn-send">Send message</button>
        </form>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="page-footer font-small blue pt-4">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mt-md-0 mt-3">
            <h5 class="text-uppercase">
              Incub' in Lille<span class="colored-text">.</span>
            </h5>
            <p class="grey-text">Explore the digital ecosystem of Lille.</p>
          </div>
          <hr class="clearfix w-100 d-md-none pb-3" />
          <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Incubators</h5>
            <ul class="list-unstyled">
              <li>
                <a href="euratechnologies.html" class="grey-text"
                  >Euratechnologies</a
                >
              </li>
              <li>
                <a href="eurasante.html" class="grey-text">Eurasanté</a>
              </li>
              <li>
                <a href="#!" class="grey-text">Blanchemaille</a>
              </li>
              <li>
                <a href="#!" class="grey-text">Alacrité</a>
              </li>
              <li>
                <a href="#!" class="grey-text">Euralimentaire</a>
              </li>
              <li>
                <a href="#!" class="grey-text">Cré'Innov</a>
              </li>
            </ul>
          </div>

          <hr class="clearfix w-100 d-md-none pb-3" />
          <div class="col-md-3 mb-md-0 mb-3">
            <a href="team.html"><h5 class="text-uppercase">Team</h5></a>
            <ul class="list-unstyled">
              <li>Sabine</li>
              <li>Shamsia</li>
              <li>Johan</li>
              <li>Khalid</li>
              <li>Damien</li>
              <li>Samir</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-copyright text-center pt-3">
        <p>Made with 🤘 by group 3</p>
        <p>&copy; 2019</p>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->

    <!-- Optional JavaScript -->
    <script src="auto-type.js"></script>
    <script src="counter.js"></script>
    <script src="contact.js"></script>

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
