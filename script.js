
$(".to-pack-button").click(function(){
    var cap = $(".to-pack-input").val();
    $(".packing-list").append("<li>"+"I'm going to pack "+cap+"."+"</li>");
});
$(".to-pack-button1").click(function(){
    var cap1 = $(".to-pack-input1").val();
    $(".course-list").append("<li>"+"I'm excited to take "+cap1+"."+"</li>");
});