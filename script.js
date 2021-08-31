function show_image1(src) {
    var Image_Id = document.getElementById('tela');
    if (Image_Id.src.match("foto_default.jpg")) {
        Image_Id.src = "foto1.jpg";
    }else {
        Image_Id.src = "foto_default.jpg";
    }

    var Image_Id_1 = document.getElementById('back');
    if (Image_Id_1.src.match("foto_default.jpg")) {
        Image_Id_1.src = "foto1.jpg";
    }else {
        Image_Id_1.src = "foto_default.jpg";
    }

    var Image_Id_2 = document.getElementById('bolso');
    if (Image_Id_2.src.match("foto_default.jpg")) {
        Image_Id_2.src = "foto1.jpg";
    }else {
        Image_Id_2.src = "foto_default.jpg";
    }

    var Image_Id_3 = document.getElementById('lado');
    if (Image_Id_3.src.match("foto_default.jpg")) {
        Image_Id_3.src = "foto1.jpg";
    }else {
        Image_Id_3.src = "foto_default.jpg";
    }

    var Image_Id_4 = document.getElementById('total');
    if (Image_Id_4.src.match("foto_default.jpg")) {
        Image_Id_4.src = "foto1.jpg";
    }else {
        Image_Id_4.src = "foto_default.jpg";
    }

}
