// Espera o DOM carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de alternância do modo escuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Adiciona um ouvinte de evento para o clique no botão
    darkModeToggle.addEventListener('click', function() {
        // Alterna a classe 'dark-mode' no body
        document.body.classList.toggle('dark-mode');
        
        // Atualiza o texto do botão com base no modo atual
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Modo Claro';
        } else {
            darkModeToggle.textContent = 'Modo Escuro';
        }
    });

    // Seleciona todos os elementos com a classe 'experience'
    const experiences = document.querySelectorAll('.experience');
    
    // Adiciona um ouvinte de evento para cada elemento de experiência
    experiences.forEach(function(experience) {
        experience.addEventListener('click', function() {
            // Alterna a classe 'expanded' no elemento clicado
            this.classList.toggle('expanded');
        });
    });
});