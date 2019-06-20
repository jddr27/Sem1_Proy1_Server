const http = require('http');
const { parse } = require('querystring');
var Request = require("request");
var jsonParsed;


const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        collectRequestData(req, result => {
            console.log(result);
            res.end(`Parsed data belonging to ${result.fname}`);
        });
    } 
    else {
      var cadena='';
Request.get("http://18.221.141.171:3000/todos", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    jsonParsed = JSON.parse(body);
    var count = Object.keys(jsonParsed).length;    

     for(var i = 0; i <count;i++){
//    console.log(jsonParsed[i].first_name);    
  cadena+=`  <div class="col-lg-4 col-md-12 mb-4">
   <div class="card">              

              <!--Card content-->
              <div class="card-body">
                <!--Title-->
                <h4 class="card-title">${jsonParsed[i].first_name}</h4>
                <!--Text-->
                <p class="card-text">${jsonParsed[i].last_name}</p>
                <p class="card-text">${jsonParsed[i].department}</p>
                <p class="card-text">
                  <strong>${jsonParsed[i].email}</strong>
                </p>
              </div>

            </div> </div>`;

  }


  var total=`
           <html lang="en"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Proyecto Fase 1 Seminario</title>
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
  
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  <!-- Bootstrap core CSS -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
  <!-- Material Design Bootstrap -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.2/css/mdb.min.css" rel="stylesheet">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<style type="text/css">/* Chart.js */
@-webkit-keyframes chartjs-render-animation{from{opacity:0.99}to{opacity:1}}@keyframes chartjs-render-animation{from{opacity:0.99}to{opacity:1}}.chartjs-render-monitor{-webkit-animation:chartjs-render-animation 0.001s;animation:chartjs-render-animation 0.001s;}</style></head>

<body>

  <!--Main Navigation-->
  <header>

    <!-- Navbar -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
      <div class="container">

        <!-- Brand -->
        <a class="navbar-brand waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
          <strong class="blue-text">SS1</strong>
        </a>

        <!-- Collapse -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <!-- Left -->
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link waves-effect" href="#">Inicio
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <!-- Left <li class="nav-item">
              <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">About MDB</a>
            </li>
            <li class="nav-item">
              <a class="nav-link waves-effect" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank">Free download</a>
            </li>
            <li class="nav-item">
              <a class="nav-link waves-effect" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Free
                tutorials</a>
            </li>
            -->
          </ul>

          <!-- Right -->
          <ul class="navbar-nav nav-flex-icons">
            <li class="nav-item">
              <a href="https://www.facebook.com/chilereandotuhogar" class="nav-link waves-effect" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href="https://twitter.com/chilereandotuhogar" class="nav-link waves-effect" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            
          </ul>

        </div>

      </div>
    </nav>
    <!-- Navbar -->

  </header>
  <!--Main Navigation-->

  <!--Main layout-->
  <main class="mt-5 pt-5">
    <div class="container">

      <!--Section: Jumbotron-->
      <section class="card wow fadeIn" style="background-image: url(&quot;https://mdbootstrap.com/img/Photos/Others/gradient1.jpg&quot;); visibility: visible; animation-name: fadeIn;">

        <!-- Content -->
        <div class="card-body text-white text-center py-5 px-5 my-5">

          <h1 class="mb-4">
            <strong>Proyecto SS1 Fase 1</strong>
          </h1>
          <p>
            <strong>Brandon Javier Soto Castañeda 201503893</strong>
          </p>
          <p>
            <strong>Jose Daniel De Leon Ruiz 201503393</strong>
          </p>

          <p>
            <strong>José Abraham Navarro de León 200310165</strong>
          </p>
          
          
          <a target="_blank"  class=" btn-outline-white btn-lg waves-effect waves-light">Muestra de productos
            <i class="fas fa-shopping-basket ml-2"></i>
          </a>

        </div>
        <!-- Content -->
      </section>
      <!--Section: Jumbotron-->

      <hr class="my-5">

      <!--Section: Cards-->
      <section class="text-center">

          
          <ul id="container"></ul>
          <form action="http://18.221.141.171:3000/nuevo" method="post">
              
            
            <div class="row">
              <div class="col">
                  
                  <input type="text" id="nombre" name="nombre" class="form-control">
                  
              </div>
              <div class="col">
                  
                  <input type="text" id="apellido"  name="apellido" class="form-control">
                  
              </div>
              <div class="col">
                  
                  <input type="text" id="depto"  name="depto" class="form-control">
                  
              </div>

              <div class="col">
              
              <input type="text" id="email" name="email" class="form-control">
              
          </div>


              <div class="col">
                  
                  <button class="btn btn-info btn-block" type="submit">Send</button>    
              </div>

              

            </div>
              
                          </form>

        <!--Grid row-->
        <div class="row mb-4 wow fadeIn" style="visibility: visible; animation-name: fadeIn;">

          
          <!--Grid column-->
         

          

            <!--Card-->
           ${cadena}
            <!--/.Card-->

         
          <!--Grid column-->
          

          

        </div>
        <!--Grid row-->

    

      </section>
      <!--Section: Cards-->

    </div>
  </main>
  <!--Main layout-->

  <!--Footer-->
  <footer class="page-footer text-center font-small mdb-color darken-2 mt-4 wow fadeIn" style="visibility: visible; animation-name: fadeIn;">


<hr>
    <!--Copyright-->
    <div class="footer-copyright py-3">
      © 2019 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank">SS1 Proyecto Fase 1</a>
    </div>
    <!--/.Copyright-->

  </footer>
  <!--/.Footer-->

  <!-- SCRIPTS -->
  <!-- JQuery -->
  <!-- JQuery -->


<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
<!-- MDB core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.2/js/mdb.min.js"></script>


  <!-- Initializations -->
  <script type="text/javascript">
    // Animations initialization
    new WOW().init();

  </script>
  



</body></html>
        `;
        res.end(total);



})

        
    }
});
server.listen(80);

function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}