console.clear();

var bgm = new Howl({src: ['./assets/bgm.mp3'],  loop: true,volume: 0.2});
var ring = new Howl({src: ['./assets/sound.mp3']});
let count = 0;
let isBgmPlay = false;

function counter(){
    count++;
    $(".count").html(count);
    ring.play();
}

document.onkeydown = function(event){
    if (event.key == ' ' && event) {
        counter();
    }
}
$('.woodenfish').on('click', function() {
    counter();
});
$('.logo').click(function (e) {
    if (isBgmPlay) {
        bgm.stop();
    }else{
        bgm.play();
    }
    isBgmPlay = isBgmPlay ? false : true;
});

