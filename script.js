function show_image1(src) {
    var Image_Id = document.getElementsByClassName('tela');
    if (Image_Id.src.match("foto_default.jpg")) {
        Image_Id.src = "foto1.jpg";
    }else {
        Image_Id.src = "foto_default.jpg";
    }
}
