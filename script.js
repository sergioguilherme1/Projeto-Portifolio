document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelector('a[href^="mailto"]').addEventListener('click', () => {
    alert('Abrindo seu aplicativo de e-mail...');
});

const content = {
    pt: {
        inc: "Inicio",
        sbr: "Sobre Mim",
        pjt: "Projetos",
        ctt: "Contatos",
        t1: "Olá, eu sou o Sérgio Guilherme!",
        t2: "Estudante de Engenharia de Software.",
        t3: "<Sobre Mim/>",
        t4: "Olá, me chamo Sérgio Guilherme, estou cursando Engenharia de Software e dedicando meu tempo ao aprendizado continuo e ao desenvolvimento de habilidades no mundo da programação",
        t5:"No momento estou focado em desenvolver novos projetos afim de adquirir aprendizado para me tornar um desenvolver de software qualificado no futuro. Meu objetivo é aplicar minha paixão pela tecnologia para criar soluções inovadoras e eficazes.",
        t6: "<Projetos/>",
        t7:"Principais projetos desenvolvidos por mim",
        t8: "Calculadora",
        t9: "Clique para acessar o repositório",
        t10: "Portifólio",
        t11: "Clique para acessar o repositório",
        t12: "ZapZap",
        t13: "Clique para acessar o repositório",
        t14: "<Tecnologias/>",
        t15: "<Contato/>",
        t16: "Você pode me encontrar em:",
        t17: "© 2025 Sérgio Pedroso. Todos os direitos reservados."
    },
    en: {
        inc: "Home",
        sbr: "About",
        pjt: "Projects",
        ctt: "Contact",
        t1: "Hello, I am Sérgio Guilherme!",
        t2: "Software Engineering student.",
        t3: "<About Me/>",
        t4: "Hello, my name is Sérgio Guilherme, I am pursuing Software Engineering and dedicating my time to continuous learning and skill development in the world of programming.",
        t5:"At the moment, I am focused on developing new projects to acquire learning to become a qualified software developer in the future. My goal is to apply my passion for technology to create innovative and effective solutions.",
        t6: "<Projects/>",
        t7:"Main projects developed by me",
        t8: "Calculator",
        t9: "Click to access the repository",
        t10: "Portifolio",
        t11: "Click to access the repository",
        t12: "ZapZap",
        t13: "Click to access the repository",
        t14: "<Technologies/>",
        t15: "<Contact/>",
        t16: "You can find me at:",
        t17: "© 2025 .Sérgio Pedroso. All rights reserved."
    }
};

function mudarIdioma(idioma) {
    document.getElementById('inc').innerText = content[idioma].inc;
    document.getElementById('sbr').innerText = content[idioma].sbr;
    document.getElementById('pjt').innerText = content[idioma].pjt;
    document.getElementById('ctt').innerText = content[idioma].ctt;
    document.getElementById('t1').innerText = content[idioma].t1;
    document.getElementById('t2').innerText = content[idioma].t2;
    document.getElementById('t3').innerText = content[idioma].t3;
    document.getElementById('t4').innerText = content[idioma].t4;
    document.getElementById('t5').innerText = content[idioma].t5;
    document.getElementById('t6').innerText = content[idioma].t6;
    document.getElementById('t7').innerText = content[idioma].t7;
    document.getElementById('t8').innerText = content[idioma].t8;
    document.getElementById('t9').innerText = content[idioma].t9;
    document.getElementById('t10').innerText = content[idioma].t10;
    document.getElementById('t11').innerText = content[idioma].t11;
    document.getElementById('t12').innerText = content[idioma].t12;
    document.getElementById('t13').innerText = content[idioma].t13;
    document.getElementById('t14').innerText = content[idioma].t14;
    document.getElementById('t15').innerText = content[idioma].t15;
    document.getElementById('t16').innerText = content[idioma].t16;
    document.getElementById('t17').innerText = content[idioma].t17;
}

mudarIdioma('pt');