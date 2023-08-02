const arrPlants = [{
    name: "Ficus Tree",
    price: 350,
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
    image: "plant1.png"
},{
    name: "White Sprite Succulent",
    price: 350,
    description: "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
    image: "plant2.png"
},{
    name: "Snake Plant",
    price: 350,
    description: "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
    image: "plant3.png"
},{
    name: "Parlour Palm",
    price: 350,
    description: "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
    image: "plant4.png"
},{
    name: "Japanese Maple",
    price: 350,
    description: "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
    image: "plant5.png"
}];

const arrWishlist = [{
    name: "Ficus Tree",
    image: "plant1.png"
},{
    name: "Snake Plant",
    image: "plant3.png"
},{
    name: "Japanese Maple",
    image: "plant5.png"
}];

$(document).ready(function() {
    // Home
    $("#hero-img").animate({top:  '-=300px'});

    // Browse
    $("#descriptionText").hide();

    $("#plantsContainer").on('click', '.card', function() {
        $(this).find("#priceText").toggle();
        
        $(this).find("#descriptionText").toggle();
        $(this).find(".card-img-top").toggleClass("small");
    });

    $("tbody").on('click', '#circleButton',function() {
        console.log("deleted");
        $(this).parentsUntil("tbody").remove();
    });

    loadPlants();
    loadWishlist();
})

loadPlants = () => {
    console.log(arrPlants);

    for (let i = 0; i < arrPlants.length; i++) {
        const plant = arrPlants[i];
        
        $("#plantsContainer").append($("#plantCardTemplate").html());

        let currentChild = $("#plantsContainer").children().eq(i+1);

        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#priceText").text("R"+plant.price);
        $(currentChild).find("#descriptionText").text(plant.description);
        $(currentChild).find(".card-img-top").attr('src','../assets/'+plant.image);

        $(currentChild).find("#descriptionText").hide();
    }
}

loadWishlist = () => {
    console.log(arrWishlist);

    for (let i = 0; i < arrWishlist.length; i++) {
        const plant = arrWishlist[i];
        
        $("tbody").append($("#wishlistTemplate").html());
        

        let currentChild = $("tbody").children().eq(i+1);

        console.log(currentChild);
        $(currentChild).find("#rowNum").text(i+1)
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find(".table-img-top").attr('src','../assets/'+plant.image);

        $(currentChild).find("#descriptionText").hide();
    }
}