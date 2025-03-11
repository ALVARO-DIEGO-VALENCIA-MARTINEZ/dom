document.addEventListener("DOMContentLoaded", function() {
    let banner = document.getElementById("banner");
    let imageInput = document.getElementById("imageInput");
    let originalSrc = banner.src;
    let selectedImage = null;

  
    banner.addEventListener("mouseover", function() {
        if (selectedImage) {
            banner.src = selectedImage; 
        }
    });

    
    banner.addEventListener("mouseout", function() {
        banner.src = originalSrc;
    });

    
    imageInput.addEventListener("change", function(event) {
        let file = event.target.files[0];

        if (file) {
            let reader = new FileReader();

            reader.onload = function(e) {
                selectedImage = e.target.result; 
                banner.src = selectedImage; 
                originalSrc = selectedImage; 
            };

            reader.readAsDataURL(file);
        }
    });
});
