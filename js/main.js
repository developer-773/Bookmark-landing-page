//LI va href elementlarinig batchasini DOM dan js file ga chaqirib olamiz
var elItem = document.querySelectorAll(".features-list__item");
var elLink = document.querySelectorAll(".features-list__link");

var elFeaturesItem = document.querySelectorAll(".info-wrap");
//LiNK larni barchasiga birdak tasir qilish uchun sikl (forEach) bilan aylanishi.

elLink.forEach(function(links) {
    // linklarni hammasini eshitib turuvchi hodisa va link bosilgan payt qandaydir hodisani amalga oshirish
    links.addEventListener("click", function(evt) {
        // link sakrashi ya'ni refresh bo'lishini taqiqlash
        evt.preventDefault();
        //ITEM larni barchasiga birdak tasir qilish uchun sikl (forEach) bilan aylanishi.
        
        elItem.forEach(function(item){
            // item elementidagi classlar ro'yxatidan shu classni o'chirish
            item.classList.remove("features-list__item--mod");
        })
        // item elementidagi classlar ro'yxatidan shu classni o'chirish
        links.parentElement.classList.add("features-list__item--mod");

        elFeaturesItem.forEach(function(box){
            box.classList.remove("info-wrap__txt--mod");

        })

        document.querySelector(links.getAttribute("href")).classList.add("info-wrap__txt--mod")

    })
        
    })