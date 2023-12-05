// document.getElementById("header").innerHTML=`<nav class="navbar navbar-expand-sm navbar-light bg-light">
// <div class="container">
//   <a class="navbar-brand" href="index.html">Navbar</a>
//   <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
//       aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="collapsibleNavId">
//       <ul class="navbar-nav me-auto mt-2 mt-lg-0">
//           <li class="nav-item">
//               <a class="nav-link active" href="index.html" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
//           </li>
//           <li class="nav-item">
//               <a class="nav-link" href="#">Link</a>
//           </li>
//           <li class="nav-item dropdown">
//               <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CRUD</a>
//               <div class="dropdown-menu" aria-labelledby="dropdownId">
//                   <a class="dropdown-item" href="productos.html">Productos</a>
//                   <a class="dropdown-item" href="#">Action 2</a>
//               </div>
//           </li>
//       </ul>
//       <form class="d-flex my-2 my-lg-0">
//           <input class="form-control me-sm-2" type="text" placeholder="Search">
//           <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//       </form>
//   </div>
// </div>
// </nav>`




cad = `
<div class="header-logo"> <a href="index.html"><img src="./imagenes/OIP (8).jpg" alt=""></a>
<h1>
    My book online
   
</h1>

</div>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container-fluid">
    <a class="navbar-brand" href="./imagenes/OIP (8).jpg">My book </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="index.html" role="button">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="series.html" role="button">Series</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="novedades.html" role="button">Novedades</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="productos.html" role="button">Libros</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="productos_adm.html" role="button">Libros_adm</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="libros_api.html" role="button">Mas Libros(api)</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="registro.html" role="button">Registro</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contactos.html" role="button">Contactos</a>
            </li>
        </ul>
    </div>
</div>

</nav> `

document.querySelector("header").innerHTML = cad

let cad2 = ` <h4>Redes Sociales</h4>
<nav class="footer"> <!-- redes sociales-->

    <a href="https://www.facebook.com/">
        <img class=navimagen src="./imagenes/facebook.png" alt=""></a>
    <a href="https://ar.linkedin.com">
        <img class=navimagen src="./imagenes/linkedin.png" alt=""></a>
    <a href="https://www.instagram.com">
        <img class=navimagen src="./imagenes/instagram.png" alt=""></a>
    <a href="https://web.telegram.org/">
        <img class=navimagen src="./imagenes/telegrama.png" alt=""></a>
    <a href="https://api.whatsapp.com/send?phone=+5491151610644">
        <img id="tel" class=navimagen src="./imagenes/whatsapp.png" alt=""> </a>
</nav>

<p> &copy; Desarrollado por GRUPO Tienda Online  </p> `

document.querySelector("footer").innerHTML = cad2






