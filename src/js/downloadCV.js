/* DESCARGAR CV */

let btnDownloadCV = document.getElementById("btnDownloadCV");

btnDownloadCV.addEventListener("click", function (event) {
    event.preventDefault();
    var url = "./src/pdf/CV_DHT.pdf";

    //Create XMLHTTP Request.
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
        //Convert the Byte Data to BLOB object.
        var blob = new Blob([req.response], { type: "application/octetstream" });

        //Check the Browser type and download the File.
        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            var url = window.URL || window.webkitURL;
            link = url.createObjectURL(blob);
            var a = document.createElement("a");
            a.setAttribute("download", "CV_DHT.pdf");
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    req.send();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Se ha descargado el archivo!',
        showConfirmButton: false,
        timer: 1500
    });
});

