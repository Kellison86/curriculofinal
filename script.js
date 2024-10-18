// Espera o DOM carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', (event) => {
    // Função para rolar suavemente até um elemento
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    };

    // Adiciona rolagem suave a todos os links internos da página
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    // Função para alternar entre modo claro e escuro
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        darkModeToggle.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
    };

    // Configura o botão de alternar modo escuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Verifica se o modo escuro estava ativo na última visita
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Modo Claro';
    }

    // Adiciona funcionalidade ao botão de modo escuro
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Função para criar o botão "Voltar ao topo"
    const createBackToTopButton = () => {
        const button = document.createElement('button');
        button.innerText = 'Voltar ao topo';
        // Define estilos para o botão
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.display = 'none';
        button.style.padding = '10px';
        button.style.backgroundColor = 'var(--primary-color)';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        
        // Adiciona funcionalidade de rolagem ao topo
        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Adiciona o botão ao corpo da página
        document.body.appendChild(button);

        // Mostra ou esconde o botão baseado na posição da rolagem
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        });
    };

    // Cria o botão "Voltar ao topo"
    createBackToTopButton();
});