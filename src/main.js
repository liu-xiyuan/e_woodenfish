console.clear();

var ring = new Howl({src: ['./assets/sound.mp3']});
const bgm = new Howl({src: ['./assets/bgm.mp3'],  loop: true,volume: 0.2});

// const ring = new Howl({
//     src: "data:audio/vnd.dlna.adts;base64,//lsgCACgCEgBQCgG/jAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//5bIAvYkAhT5r/////P1hABInHw2/YSFZaZORxykjHJcsmN6visrn9bzt57cbrnxL32vreppXX2um6nBxfG/Kih3zFUdwibmdW3L/3P+sOv+Ien9MfJ9WH5nj62wLnkbw0tDOjqEQEwEwBpC5/SP0dGwpXIrLk64TxfjQl4O8nkPdXlMnGw9AxySE26LwSWw2YEm68SbBwdEso+vfz2RqK2Y4Ggb41tuG5qViVmxSqbjZ3+9jFiYOS1LQL/NG5cCv1yWVJOMyxHf/PETvoXfKG4mZZE41DqJXPn6zFECul/uZgc8I350miJiiRKWDCF1gg96UADLkAAQa8AAN+QT83nXb5UfA+gD20RpXVRs2nsNACKVCIECFxJTPMBGxWIjg/IfkCSNgxYISMtIxynzn6uOPtBl2amq6UUO+YqjuIm4hym2IiC/36RSOkgMCwQEsAAPknDtEbUa0raJLmGl0KALYCBbNvx9DtFzy6bpTIyA1dAUrMKoRsA/v/+WyAHoJIIXoUeLKEoRMgRk7txpveMijjNKcdb1LrVyhWotE4giA+IxE2QJBQYQuZfNDBlwUFqNZgtq49t0sBhxX7arzv0prMZAGMMZNEPJ0GgupYdCggBBscY3EZ4r3CaFC3e5EUQDCAy2TKGSi4kpOQUE5MFo0DekATIwOMDGkUWIFCwtcEwDkF5eaUAuCNAYkAZDgIiAghAYwE963o+vgJcspd0tE4giA+KYBSIBPa+nIesoAN1Stmjh4gEyKNwFpgAGAIBBaxMTbkwXuuESUiqSt5QgCRgY0kwMwQB8iZFOcpEUEZwp0KhWK6lIgLrUB///lsgBuiWCEaE6Ahh2SBIRgkEIo1PC2SpMWigVC/xDwALYzI71ya9Hd5JGCRrKtEZFkEjCbWACSCSacioXwpEZf/HIJyMKQRkOwQRJ8Ik5GPhf5vSr+Y9rIxplKqfqYrT5juaT4OtQKsWNBf+KyKGgr2stApo6Kbr80wU+aZkD+f3mdQQQrJAjOES5PGpSiYtFAqF/iHn+fQ+20YMMeZtKSMnFEcR2LILdmFvLfSMe3UMkYfXVzQ/FWDdcLXXOLAUtmaZp9FkmHRZfGglHmglzTlP7V+N/5XNzZwi9r/+WyAFoKAIRAFAKAb5cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADs=",
// });
// const bgm = new Howl({src: ['https://raw.githubusercontent.com/liuxiyuan-2022/EWoodenFish/main/src/assets/bgm.mp3'],  loop: true,volume: 0.2,html5: true});

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

