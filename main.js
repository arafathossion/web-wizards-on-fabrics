var canvas = new fabric.Canvas('display-image');

const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        console.log(uploaded_image);
        fabric.Image.fromURL(uploaded_image, function (oImg) {
            canvas.add(oImg);
            oImg.scaleToWidth(800);
            oImg.scaleToHeight(500);
        });
    });
    reader.readAsDataURL(this.files[0]);
});

canvas.on('mouse:wheel', function (opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom = zoom + delta / 500;
    if (zoom > 20) zoom = 20;
    if (zoom < .1) zoom = .1;
    canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
});




