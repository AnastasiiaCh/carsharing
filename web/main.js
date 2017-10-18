function mydni() {
  // var x=0;
   var dni = parseInt($("#dni").val());
  if (isNaN(dni) || dni <1)  {
    dni=1;
  } 
  $("#dni").val(dni);
  return dni;
}

function summa() {
  var cena=0;
  var itog=0;
  // var dni = parseInt($("#dni").val());
  var dni=mydni(dni);
  
  
  if ($("#autom").val() == "vybor") {
    cena=0;
  }
  else if ($("#autom").val() == "Hyundai") { 
    cena=1300;
  } 
  else if ($("#autom").val() == "Kia") {
    cena=1300;
  }
  else if ($("#autom").val() == "Renault") {
    cena=1150;
  }
  else if ($("#autom").val() == "Mersedes") {
    cena=5900;
  }
  else if ($("#autom").val() == "BMW") {
    cena=4900;
  }
  else if ($("#autom").val() == "Audi") {
    cena=5500;
  }
  else if ($("#autom").val() == "cooper") {
    cena=2800;
  }
  else if ($("#autom").val() == "Duster") {
    cena=1700;
  }
  else if ($("#autom").val() == "Nissan") {
    cena=2800;
  }
   else {
     cena=0;
  }
  
  if ($("#stazh").val() == "dva") {
    itog=dni*cena*1.5;
  }
  else if ($("#stazh").val() == "pyat") { 
    itog=dni*cena*1.2;
  } 
  else {
    itog=dni*cena;
  }

  if ($("#kreslo").is(":checked")) {
    itog += 500;
  }
  if ($("#velo").is(":checked")) {
    itog += 2000;
  }
  
  $("#result").text(itog+" руб.");
}  

$("#calc").change(summa);

summa();
