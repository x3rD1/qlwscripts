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

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display","block");
    $(".g-signIn2").css("display","none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You have been signed out successfully");
      $(".g-signIn2").css("display","block");
      $(".data").css("display","none");
    });
  }