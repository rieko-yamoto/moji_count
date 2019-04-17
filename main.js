window.addEventListener('DOMContentLoaded',
    function(){
        var node = document.querySelector('#code');

        node.addEventListener('keyup', function(){
            var count = this.value.length;

            var counterNode = document.querySelector('.moji_count');

            counterNode.innerText = count;
        }, false);
    },false
);
