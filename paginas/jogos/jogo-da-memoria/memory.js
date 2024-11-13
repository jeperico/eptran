const emojis = ["⚠️","⚠️","🚸","🚸","🚧","🚧","🛑","🛑","🚦","🚦","🚳","🚳","🚷","🚷","⛔","⛔"];
        var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
        for( var i =0; i<emojis.length; i++) {
            let box = document.createElement('div')
            box.className = 'item';
            box.innerHTML =  shuf_emojis[i]

            let attempts = 0;

            box.onclick = function(){
            this.classList.add('boxOpen')
            attempts++;
}
            box.onclick = function(){
                this.classList.add('boxOpen')
                setTimeout(function(){
                    if(document.querySelectorAll('.boxOpen').length > 1) {
                        if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML){
                        document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                        document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                        if(document.querySelectorAll('.boxMatch').length == emojis.length) {
                            document.querySelector(".container").style.scale = 0;
                            document.querySelector(".win").style.scale = 1;
                            
                        }

                        } else {
                            document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                            document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                        }
                    }
                },1000)
            

            }

            document.querySelector('.game').appendChild(box);
        }