1  //Botão curtidas
document.addEventlistener("DOMContentLoaded",()=>{
    const likeBtn = document.query.Selector(".left-actions .action-btn:firts-child");
    if (!likeBtn) return;
    const likeSvgv = likeBtn.querySelector("svg");   

    //localiza o contador 


    let texNode = Array.from(likeBtn.childNodes.)find(node)=> node.nodeType
    === Node. TEXT NODE && node.textContent.trim()!== ** 
);

//zera o contador
let cont = 0;

//atualizar
if(textNode){
    textNoe. textContent = ´0´;
}

//coração
function applyLikedStyle (){
likeSvg.Style.fill = "#ef4444";
likeSvg.Style.stroke ="#ef4444";
LikeSvg.style.color = "#ef4444";
}

//efeito curtida
likeSvg.style.trnsform = "scale(1.3)";
SetTimeout(()=> (likeSvg.style.tranform));

    
}

})


    