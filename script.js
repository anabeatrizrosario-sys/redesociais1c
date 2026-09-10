document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleção dos elementos do HTML
    const likeBtn = document.querySelector(".left-actions .action-btn:first-child");
    const postMedia = document.querySelector(".post-media");
    const bookmarkBtn = document.querySelector(".post-actions > .action-btn:last-child");

    if (!likeBtn) return;

    const likeSvg = likeBtn.querySelector("svg");

    // Variáveis de estado
    let isLiked = false;
    let baseLikes = 0; // Começa zerado

    // 2. Criação de um elemento <span> exclusivo para o texto de contagem
    let likesCountSpan = likeBtn.querySelector(".likes-count");
    if (!likesCountSpan) {
        likesCountSpan = document.createElement("span");
        likesCountSpan.className = "likes-count";
        
        // Remove texto puro antigo para substituir pelo span
        likeBtn.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.remove();
            }
        });
        likeBtn.appendChild(likesCountSpan);
    }

    // Inicializa o contador na tela
    likesCountSpan.textContent = formatLikes(baseLikes);

    // 3. Função para formatar números (ex: 1200 vira 1.2k)
    function formatLikes(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "k";
        }
        return num.toString();
    }

    // 4. Animação de pulso (bounce) no coração
    function animateHeart() {
        if (likeSvg) {
            likeSvg.style.transition = "transform 0.15s ease";
            likeSvg.style.transform = "scale(1.3)";
            setTimeout(() => {
                likeSvg.style.transform = "scale(1)";
            }, 150);
        }
    }

    // 5. Função para curtir
    function addLike() {
        if (!isLiked) {
            baseLikes++;
            isLiked = true;
            likeBtn.classList.add("liked");
            likesCountSpan.textContent = formatLikes(baseLikes);
            animateHeart();
        }
    }

    // 6. Função para descurtir
    function removeLike() {
        if (isLiked) {
            baseLikes = Math.max(0, baseLikes - 1);
            isLiked = false;
            likeBtn.classList.remove("liked");
            likesCountSpan.textContent = formatLikes(baseLikes);
            animateHeart();
        }
    }

    // 7. Evento de clique no BOTÃO DE CORAÇÃO (Alterna entre curtir e descurtir)
    likeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (isLiked) {
            removeLike();
        } else {
            addLike();
        }
    });

    // 8. Evento de clique na IMAGEM PRINCIPAL (Curte a foto)
    if (postMedia) {
        postMedia.addEventListener("click", (e) => {
            e.stopPropagation();
            addLike();
        });
    }

    // 9. Evento de clique no BOTÃO DE SALVAR (Bookmark)
    if (bookmarkBtn) {
        let isBookmarked = false;
        
        bookmarkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            isBookmarked = !isBookmarked;
            bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

            const bookmarkSvg = bookmarkBtn.querySelector("svg");
            if (bookmarkSvg) {
                bookmarkSvg.style.transition = "transform 0.15s ease";
                bookmarkSvg.style.transform = "scale(1.2)";
                setTimeout(() => {
                    bookmarkSvg.style.transform = "scale(1)";
                }, 150);
            }
        });
    }
});