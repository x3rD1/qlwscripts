var modal = document.getElementById('myModal');

var img = document.getElementById('myImg');
var modalImg = document.getElementById('img1');
var captionText = document.getElementById('caption');
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

modal.onclick = function(){
    modalImg.className +=" out";
    setTimeout(function(){
        modal.style.display = "none";
        modalImg.className = "modal-content";
    },300);
}