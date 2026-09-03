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
likeSvg.style.trnsform = "scale(1.3)";https://aka.ms/vscode-web-docs
SetTimeout(()=> (likeSvg.style.tranform));




//números acima de 1k

function formaLikes (num){
    if (num>=1000){
        return(num/1000).toFixed(1)+"k"     
}
return num.toString();
}
//deixar a curtia bonitinha

funcion addLike(){
    baseLikes++;
    isLiked= true;
    likeBtn.classList.add("liked");

    if(likesCountSpan){
      likesCountSpan.textContent = formatLikes(baseLikes);
    }
}


//Efeito visual de animação (bounce) no coração
const svg = likeBtn.querySelector("svg");
if (svg){
svg.stlye.transfor= "scale(1.4)";
SetTimeout()=>{
svg.style.tranform= "scale(1)";
},150);
} {
}

//Evento de clique no BOTÂO DE CORAÇÂO (Curte ou Descurte)
likeBtn.addEventlistener("click",(e) =>{
e.stopPropagation();

if (isLiked){
//Se já estava curtindo,descurte(-1)
isLiked= false;
baeLikes = Math.max(0,baeLikes -1);
likeBtn.clasList.remove("liked");
if(likesCountSpan){
likesCountSpan.textContent= formaLikes(baseLikes);
}
}else{
    //Se não estava curtindo, adiciona curtida
addLike();
}
});






    