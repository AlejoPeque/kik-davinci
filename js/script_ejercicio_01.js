// 1. Preguntar el nombre, no puede ser nulo y elimina espacios en blanco
const name = prompt("Cuál es tu nombre?").trim();

// 2. Preguntar el genero como default es masculino
let genre =
  prompt("Cuál es tu genero?", "Masculino").toLowerCase().trim() || "masculino";

// 3. Preguntar la edad, no puede ser nulo y debe ser un entero positivo
let age = parseInt(prompt("Cuál es tu edad?", 18));
while (isNaN(age) || age <= 0) {
  alert("Edad invalida");
  age = parseInt(prompt("Cuál es tu edad?", 18));
}

// 4. Mostrar el nombre
document.getElementById("presentation").innerText = name
  ? `${name}, estos son los productos pensados para vos`
  : "Estos son algunos de nuestros productos";

// 5. Proceso de seleccion de productos y banner segun genero y edad
switch (genre) {
  // Femenino
  case "femenino":
    // Cambiar el color de fondo del body
    document.getElementById("body").classList.add("bgPrincipalWomen");
    // Banner Blur
    document.getElementById("blurBanner").classList.add("blurBannerWomen");

    // Mayor de edad
    if (age >= 18 && age <= 105) {
      // Banner
      document
        .getElementById("banner")
        .classList.add("bg-[url('./assets/banner-2.jpg')]");

      // Productos
      // Producto 1
      document.getElementById("prod-1-name").innerText = "Vans Sk8";
      document.getElementById("prod-1-desc").innerText =
        "Una versión renovada de las míticas zapatillas de skate de caña alta de Vans. Tienen puntera reforzada para soportar el desgaste y cuello acolchado.";
      document
        .getElementById("prod-1-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 2
      document.getElementById("prod-2-name").innerText = "Air Force 1";
      document.getElementById("prod-2-desc").innerText =
        "Es el primer modelo que la marca destino de forma específica con unidad Air para la práctica del baloncesto.";
      document
        .getElementById("prod-2-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 3
      document.getElementById("prod-3-name").innerText = "Nike Blazer Mid";
      document.getElementById("prod-3-desc").innerText =
        "Sin perder su esencia más deportiva, esta Blazer Mid de Nike te seducirá por su exquisito y clásico diseño.";
      document
        .getElementById("prod-3-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1620657693781-f1afb0aab9a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 4
      document.getElementById("prod-4-name").innerText = "Jordan 1 Panda";
      document.getElementById("prod-4-desc").innerText =
        "Esta icónica zapatilla de Nike se ha reinventado con una base blanca de cuero suave y detalles en cuero negro que aportan el contraste perfecto.";
      document
        .getElementById("prod-4-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1615290643080-e379930bf0cb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );

    } else if (age > 105) {
      // Edad invalida
      // Banner
      document
        .getElementById("banner")
        .classList.add("bg-[url('./assets/banner-5.jpg')]");
      // Productos
      // Producto 1
      document.getElementById("prod-1-name").innerText = "Jordan 6";
      document.getElementById("prod-1-desc").innerText =
        "Este modelo de versión retro se inspira en el modelo principal lanzado en el años 1991, año en el que Jordan ganó por primera vez el título de la NBA.";
      document
        .getElementById("prod-1-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1490168105446-f43395eb50b5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 2
      document.getElementById("prod-2-name").innerText = "Nike Blazer Mid";
      document.getElementById("prod-2-desc").innerText =
        "Sin perder su esencia más deportiva, esta Blazer Mid de Nike te seducirá por su exquisito y clásico diseño.";
      document
        .getElementById("prod-2-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1620657693781-f1afb0aab9a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 3
      document.getElementById("prod-3-name").innerText = "Jordan 1 Chicago";
      document.getElementById("prod-3-desc").innerText =
        "El zapato que lo empezó todo. En 1984, Nike presentó las Nike Air Jordan y cautivó al mundo. La Air Jordan 1 Chicago es una reedición del modelo original.";
      document
        .getElementById("prod-3-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 4
      document.getElementById("prod-4-name").innerText = "Jordan 1 Panda";
      document.getElementById("prod-4-desc").innerText =
        "Esta icónica zapatilla de Nike se ha reinventado con una base blanca de cuero suave y detalles en cuero negro que aportan el contraste perfecto.";
      document
        .getElementById("prod-4-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1615290643080-e379930bf0cb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );

    } else if (age > 13 && age <= 17) {
      // Menor de 18
      // Banner
      document
        .getElementById("banner")
        .classList.add("bg-[url('./assets/banner-3.jpg')]");
      // Productos
      // Producto 1
      document.getElementById("prod-1-name").innerText = "Nike Air Max";
      document.getElementById("prod-1-desc").innerText =
        "Las Nike Air Max 270 React son unas zapatillas de running que combinan la amortiguación de las Air Max con la ligereza de las React Element.";
      document
        .getElementById("prod-1-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 2
      document.getElementById("prod-2-name").innerText = "Jordan 1";
      document.getElementById("prod-2-desc").innerText =
        "El zapato que lo empezó todo. En 1984, Nike presentó las Nike Air Jordan y cautivó al mundo. Las Jordan 1 son un modelo icónico de la marca.";
      document
        .getElementById("prod-2-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 3
      document.getElementById("prod-3-name").innerText = "Vans Sk8";
      document.getElementById("prod-3-desc").innerText =
        "Una versión renovada de las míticas zapatillas de skate de caña alta de Vans. Tienen puntera reforzada para soportar el desgaste y cuello acolchado.";
      document
        .getElementById("prod-3-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 4
      document.getElementById("prod-4-name").innerText = "Air Force 1";
      document.getElementById("prod-4-desc").innerText =
        "Es el primer modelo que la marca destino de forma específica con unidad Air para la práctica del baloncesto.";
      document
        .getElementById("prod-4-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );

    } else {
      // Menor de 13
      // Banner
      document
        .getElementById("banner")
        .classList.add("bg-[url('./assets/banner-3.jpg')]");
      // Productos
      // Producto 1
      document.getElementById("prod-1-name").innerText = "Nike Air Max";
      document.getElementById("prod-1-desc").innerText =
        "Las Nike Air Max 270 React son unas zapatillas de running que combinan la amortiguación de las Air Max con la ligereza de las React Element.";
      document
        .getElementById("prod-1-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 2
      document.getElementById("prod-2-name").innerText = "Jordan 4";
      document.getElementById("prod-2-desc").innerText =
        "Las Air Jordan 4 Retro son una reedición del modelo original lanzado en 1989. Se caracteriza por su diseño de malla en la parte superior y su suela de goma.";
      document
        .getElementById("prod-2-img")
        .classList.add(
          "bg-[url('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ec3d2c12-a39b-4eef-a750-60c8f2c2e6c0/tenis-e-infantil-jordan-4-retro-8ndFBg.png')]"
        );
      // Producto 3
      document.getElementById("prod-3-name").innerText = "Sneaker Arg";
      document.getElementById("prod-3-desc").innerText =
        "Sneaker Arg es una marca de zapatillas de diseño argentino que se caracteriza por su calidad y comodidad.";
      document
        .getElementById("prod-3-img")
        .classList.add(
          "bg-[url('https://acdn.mitiendanube.com/stores/975/557/products/cooperativa-textil-650-101-95f8d1b46fc0f7587016788084719362-1024-1024.jpg')]"
        );
      // Producto 4
      document.getElementById("prod-4-name").innerText = "Air Force 1";
      document.getElementById("prod-4-desc").innerText =
        "Es el primer modelo que la marca destino de forma específica con unidad Air para la práctica del baloncesto.";
      document
        .getElementById("prod-4-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
    }
    break;

  // Masculino
  case "masculino":
    // Cambiar el color de fondo del body
    document.getElementById("body").classList.add("bgPrincipalMen");
    // Banner Blur
    document.getElementById("blurBanner").classList.add("blurBannerMen");

    // Mayor de edad
    if (age >= 18 && age <= 105) {
      // Banner
      document
        .getElementById("banner")
        .classList.add("bg-[url('./assets/banner-4.jpg')]");

      // Productos
      // Producto 1
      document.getElementById("prod-1-name").innerText = "Jordan 1";
      document.getElementById("prod-1-desc").innerText =
        "El zapato que lo empezó todo. En 1984, Nike presentó las Nike Air Jordan y cautivó al mundo. Las Jordan 1 son un modelo icónico de la marca.";
      document
        .getElementById("prod-1-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1600181516264-3ea807ff44b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 2
      document.getElementById("prod-2-name").innerText = "Nike Blazer Mid";
      document.getElementById("prod-2-desc").innerText =
        "Sin perder su esencia más deportiva, esta Blazer Mid de Nike te seducirá por su exquisito y clásico diseño.";
      document
        .getElementById("prod-2-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1620657693781-f1afb0aab9a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 3
      document.getElementById("prod-3-name").innerText = "Jordan 4";
      document.getElementById("prod-3-desc").innerText =
        "Las Air Jordan 4 Retro son una reedición del modelo original lanzado en 1989. Se caracteriza por su diseño de malla en la parte superior y su suela de goma.";
      document
        .getElementById("prod-3-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1613489647684-4dc8c9948245?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 4
      document.getElementById("prod-4-name").innerText = "Jordan 1 Panda";
      document.getElementById("prod-4-desc").innerText =
        "Esta icónica zapatilla de Nike se ha reinventado con una base blanca de cuero suave y detalles en cuero negro que aportan el contraste perfecto.";
      document
        .getElementById("prod-4-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1615290643080-e379930bf0cb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );

    } else if (age > 105) {
      // Edad invalida
      // Banner
      document
        .getElementById("banner")
        .classList.add("bg-[url('./assets/banner-5.jpg')]");
      // Productos
      // Producto 1
      document.getElementById("prod-1-name").innerText = "Jordan 6";
      document.getElementById("prod-1-desc").innerText =
        "Este modelo de versión retro se inspira en el modelo principal lanzado en el años 1991, año en el que Jordan ganó por primera vez el título de la NBA.";
      document
        .getElementById("prod-1-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1490168105446-f43395eb50b5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 2
      document.getElementById("prod-2-name").innerText = "Nike Blazer Mid";
      document.getElementById("prod-2-desc").innerText =
        "Sin perder su esencia más deportiva, esta Blazer Mid de Nike te seducirá por su exquisito y clásico diseño.";
      document
        .getElementById("prod-2-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1620657693781-f1afb0aab9a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 3
      document.getElementById("prod-3-name").innerText = "Jordan 1 Chicago";
      document.getElementById("prod-3-desc").innerText =
        "El zapato que lo empezó todo. En 1984, Nike presentó las Nike Air Jordan y cautivó al mundo. La Air Jordan 1 Chicago es una reedición del modelo original.";
      document
        .getElementById("prod-3-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 4
      document.getElementById("prod-4-name").innerText = "Jordan 1 Panda";
      document.getElementById("prod-4-desc").innerText =
        "Esta icónica zapatilla de Nike se ha reinventado con una base blanca de cuero suave y detalles en cuero negro que aportan el contraste perfecto.";
      document
        .getElementById("prod-4-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1615290643080-e379930bf0cb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );

    } else if (age > 13 && age <= 17) {
      // Menor de 18
      // Banner
      document
        .getElementById("banner")
        .classList.add("bg-[url('./assets/banner.jpg')]");
      // Productos
      // Producto 1
      document.getElementById("prod-1-name").innerText = "Air Force";
      document.getElementById("prod-1-desc").innerText =
        "Es el primer modelo que la marca destino de forma específica con unidad Air para la práctica del baloncesto.";
      document
        .getElementById("prod-1-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 2
      document.getElementById("prod-2-name").innerText = "Nike Blazer Mid";
      document.getElementById("prod-2-desc").innerText =
        "Sin perder su esencia más deportiva, esta Blazer Mid de Nike te seducirá por su exquisito y clásico diseño.";
      document
        .getElementById("prod-2-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1620657693781-f1afb0aab9a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 3
      document.getElementById("prod-3-name").innerText = "Jordan 1 Chicago";
      document.getElementById("prod-3-desc").innerText =
        "El zapato que lo empezó todo. En 1984, Nike presentó las Nike Air Jordan y cautivó al mundo. La Air Jordan 1 Chicago es una reedición del modelo original.";
      document
        .getElementById("prod-3-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 4
      document.getElementById("prod-4-name").innerText = "Jordan 1";
      document.getElementById("prod-4-desc").innerText =
        "El zapato que lo empezó todo. En 1984, Nike presentó las Nike Air Jordan y cautivó al mundo. Las Jordan 1 son un modelo icónico de la marca.";
      document
        .getElementById("prod-4-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1600181516264-3ea807ff44b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );

    } else {
      // Menor de 13 años
      // Banner
      document
        .getElementById("banner")
        .classList.add("bg-[url('./assets/banner.jpg')]");
      // Productos
      // Producto 1
      document.getElementById("prod-1-name").innerText = "Air Force";
      document.getElementById("prod-1-desc").innerText =
        "Es el primer modelo que la marca destino de forma específica con unidad Air para la práctica del baloncesto.";
      document
        .getElementById("prod-1-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
      // Producto 2
      document.getElementById("prod-2-name").innerText = "Jordan 4";
      document.getElementById("prod-2-desc").innerText =
        "Las Air Jordan 4 Retro son una reedición del modelo original lanzado en 1989. Se caracteriza por su diseño de malla en la parte superior y su suela de goma.";
      document
        .getElementById("prod-2-img")
        .classList.add(
          "bg-[url('https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ec3d2c12-a39b-4eef-a750-60c8f2c2e6c0/tenis-e-infantil-jordan-4-retro-8ndFBg.png')]"
        );
      // Producto 3
      document.getElementById("prod-3-name").innerText = "Sneaker Arg";
      document.getElementById("prod-3-desc").innerText =
        "Sneaker Arg es una marca de zapatillas de diseño argentino que se caracteriza por su calidad y comodidad.";
      document
        .getElementById("prod-3-img")
        .classList.add(
          "bg-[url('https://acdn.mitiendanube.com/stores/975/557/products/cooperativa-textil-650-101-95f8d1b46fc0f7587016788084719362-1024-1024.jpg')]"
        );
      // Producto 4
      document.getElementById("prod-4-name").innerText = "Jordan 1";
      document.getElementById("prod-4-desc").innerText =
        "El zapato que lo empezó todo. En 1984, Nike presentó las Nike Air Jordan y cautivó al mundo. Las Jordan 1 son un modelo icónico de la marca.";
      document
        .getElementById("prod-4-img")
        .classList.add(
          "bg-[url('https://images.unsplash.com/photo-1600181516264-3ea807ff44b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        );
    }
    break;

  default:
    // Genero invalido
    // Cambiar el color de fondo del body
    document.getElementById("body").classList.add("bgPrincipalOthers");
    // Banner
    document
      .getElementById("banner")
      .classList.add("bg-[url('./assets/banner-5.jpg')]");
    // Banner Blur
    document.getElementById("blurBanner").classList.add("blurBanner");
    // Productos
    // Producto 1
    document.getElementById("prod-1-name").innerText = "Jordan 6";
    document.getElementById("prod-1-desc").innerText =
      "Este modelo de versión retro se inspira en el modelo principal lanzado en el años 1991, año en el que Jordan ganó por primera vez el título de la NBA.";
    document
      .getElementById("prod-1-img")
      .classList.add(
        "bg-[url('https://images.unsplash.com/photo-1490168105446-f43395eb50b5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      );
    // Producto 2
    document.getElementById("prod-2-name").innerText = "Nike Blazer Mid";
    document.getElementById("prod-2-desc").innerText =
      "Sin perder su esencia más deportiva, esta Blazer Mid de Nike te seducirá por su exquisito y clásico diseño.";
    document
      .getElementById("prod-2-img")
      .classList.add(
        "bg-[url('https://images.unsplash.com/photo-1620657693781-f1afb0aab9a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      );
    // Producto 3
    document.getElementById("prod-3-name").innerText = "Jordan 1 Chicago";
    document.getElementById("prod-3-desc").innerText =
      "El zapato que lo empezó todo. En 1984, Nike presentó las Nike Air Jordan y cautivó al mundo. La Air Jordan 1 Chicago es una reedición del modelo original.";
    document
      .getElementById("prod-3-img")
      .classList.add(
        "bg-[url('https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      );
    // Producto 4
    document.getElementById("prod-4-name").innerText = "Jordan 1 Panda";
    document.getElementById("prod-4-desc").innerText =
      "Esta icónica zapatilla de Nike se ha reinventado con una base blanca de cuero suave y detalles en cuero negro que aportan el contraste perfecto.";
    document
      .getElementById("prod-4-img")
      .classList.add(
        "bg-[url('https://images.unsplash.com/photo-1615290643080-e379930bf0cb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      );
    break;
}
