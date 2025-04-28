CREATE DATABASE camargo_esportes;

USE camargo_esportes;


CREATE TABLE noticias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    data_publicacao DATE NOT NULL,
    autor VARCHAR(100),
    autor_id INT NOT NULL,
    categoria VARCHAR(50),
    imagens LONGTEXT,
    materiaCompleta LONGTEXT
);

ALTER TABLE noticias MODIFY COLUMN materiaCompleta LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


INSERT INTO noticias (titulo, conteudo, data_publicacao, autor, autor_id, categoria, imagens, materiaCompleta)
VALUES 
('Festa na Vila: CBF entregará taça da Série B do Brasileirão ao Santos no domingo', 
 'Diego Pituca, capitão do Peixe, será o responsável por levantar o troféu de campeão em frente aos torcedores santistas que esgotaram os ingressos para o duelo com o CRB',
 '2024-11-16', 
 'Yago Rudá', 
 0,
 'Futebol', 
 '{"imagem_principal": "https://s2-ge.glbimg.com/eg6ULAbiyFoKRU8JzUhpaqNnrXM=/0x0:932x621/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/z/U/QPgllQRwa5yt3V65yZKg/agif24080214105219.jpg", "imagem_adicional_1": "https://imgs.search.brave.com/Kv6wdCOruelfDuPQnqDbay445XghXp1cJBrTkrwywkY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ29hbC5jb20v/aW1hZ2VzL3YzL2Js/dDI2NDAzODIwOTUx/OTEwYTEvNTE3MDY2/NDA3MjhfNjdiZDhh/YTcyOV9vLmpwZz9h/dXRvPXdlYnAmZm9y/bWF0PXBqcGcmd2lk/dGg9Mzg0MCZxdWFs/aXR5PTYw"}',
 'A CBF (Confederação Brasileira de Futebol) já tem planejada a premiação ao Santos pela conquista do título da Série B. O troféu e as medalhas de campeão nacional serão entregues aos jogadores do Peixe após a partida contra o CRB, neste domingo, na Vila Viva Sorte.
 A entidade que organiza o calendário do futebol brasileiro já havia se programado para levar o troféu à Baixada Santista antes do resultado do jogo do Novorizontino, que confirmou o título ao Santos neste sábado. Caberá ao capitão Diego Pituca levantar a taça diante dos santistas na casa alvinegra - todos os ingressos foram vendidos antecipadamente.
 A diretoria do Peixe convidou o presidente da CBF Ednaldo Rodrigues para acompanhar o jogo em um camarote da Vila Viva Sorte, mas até agora não houve uma resposta formal sobre a presença do dirigente, que está na Bahia com a seleção brasileira.
O clube também convidou o atacante Neymar para participar da festa, porém a agenda do craque com o Al-Hilal, da Arábia Saudita, impediu sua presença no estádio.
Apontado como o favorito no torneio, o Peixe confirmou seu status e confirmou o título neste sábado depois do tropeço do Novorizontino diante do Paysandu pela 37ª rodada. Com o resultado, o Santos, que tem 68 pontos ganhos, não pode mais ser alcançado por ninguém.'),

('CEO do Botafogo minimiza crise do Lyon e diz que "modelo inovador" de Textor "causa desconforto" em adversários', 
 'Thairo Arruda afirma que situação de clube francês será normalizada em breve e elogia norte-americano',
 '2024-11-16', 
 'Redação do ge', 
 0,
 'Futebol', 
 '{"imagem_principal": "https://s2-ge.glbimg.com/s44nIl81g5y7a5nq94OJqyaVyHs=/55x0:1719x936/810x456/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/5/H/wgaC3LQ12MRX0wyf8PwQ/52442241629-f190d901f1-k.jpg", "imagem_adicional_1": "https://imgs.search.brave.com/wMVlRhzjoYlGD-6PUxhUrGlXL9eM_Nd_WJee_K5q2LA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcHJlc3Nm/dXQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzAxLzUx/ODA0ODcxOTMwX2Zj/ODc0MzVkNTZfay1z/Y2FsZWQuanBnP2Zp/dD0xNjIwLDEwODAm/c3NsPTE"}',
 'Thairo Arruda, CEO do Botafogo, saiu em defesa de John Textor, dono da SAF Alvinegra. O norte-americano tem passado por problemas envolvendo o Lyon, outro clube da Eagle Football, que está proibido de contratar e com rebaixamento provisório na França pela A Direção Nacional de Controle e Gestão (DNCG) por não apresentar garantias financeiras. Em nota divulgada pelo Botafogo, o braço direito de Textor destacou que a Eagle possui um "modelo inovador" multi-clubes e que a França "ainda está em fase de entendimento do diferencial competitivo".

Textor afirmou em entrevista que os problemas envolvendo o Lyon serão resolvidos e que o clube não corre risco de rebaixamento.

Leia a nota de Thairo Arruda:

”A Eagle Football desenvolveu um modelo inovador e disruptivo de colaboração entre clubes que tem causado desconforto em nossos adversários no Brasil e na França.

No Brasil, os torcedores já entenderam o privilégio de fazer parte desse modelo, enquanto a França ainda está em fase de entendimento do nosso diferencial competitivo.

Estamos muito seguros de que tudo vai se resolver brevemente. O Lyon segue evoluindo de forma estruturada na recuperação da pujança esportiva desde a chegada da Eagle na gestão.

Confiamos na liderança visionária do nosso acionista majoritário John Textor como agente de transformação positiva no futebol mundial. Nossa família está cada vez mais unida em busca do sucesso de todos os clubes.”
'),

('Mike Tyson revela ter passado por oito transfusões em junho: "Quase morri"', 
 'Lenda do boxe confessa que perdeu metade do sangue em crise de úlcera que causou adiamento de luta contra Jake Paul e comemora: "Tive de lutar para ficar saudável e lutar, então eu venci"',
 '2024-11-16', 
 'Combate.com', 
 0,
 'Boxe', 
 '{"imagem_principal": "https://imgs.search.brave.com/MLD2-cALjbz4IFQrQ1D1eXtXL5c6AloJDeDi5R2Y9gQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5uYmNjaGljYWdv/LmNvbS8yMDI0LzEx/L0dldHR5SW1hZ2Vz/LTIxODQzNDc4MDYt/ZTE3MzE3NDM3MTYy/ODkuanBnP3F1YWxp/dHk9ODUmc3RyaXA9/YWxsJnJlc2l6ZT0z/MjAsMTgw", "imagem_adicional_1": "https://s2-ge.glbimg.com/GUEIfuO9wm1zobSSjI_MpxTaXrc=/0x0:1024x683/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/q/H/rYlpwLTDeHpIvgkeDiAg/gettyimages-2185054033.jpg"}',
 'Um dia após subir ao ringue aos 58 anos de idade e retornar de uma aposentadoria que durou 19 anos, Mike Tyson revelou que esteve muito próximo de nem sequer estar presente no evento da última sexta-feira. O lendário ex-campeão mundial dos pesos-pesados do boxe revelou que a crise de úlcera que teve em junho foi muito mais séria do que foi divulgado anteriormente, e admitiu que poderia ter morrido na ocasião. 

"Eu quase morri em junho. Tive oito transfusões de sangue. Perdi metade do meu sangue e 11kg no hospital e tive de lutar para ficar saudável e lutar, então eu venci", escreveu Tyson em post publicado no X neste sábado. 

O episódio a que Mike se refere foi uma crise de úlcera que teve durante um voo de Miami a Los Angeles em 26 de maio. Ele precisou receber atendimento de paramédicos e foi retirado do avião antes dos demais passageiros. A luta contra Jake Paul, marcada inicialmente para 20 de julho, foi adiada para 15 de novembro por conta do ocorrido. Na época, Tyson e sua equipe garantiram que o problema não havia sido sério e que o adiamento foi apenas por precaução. 

Apesar das condições longe das ideais, o ex-campeão mundial voltou a treinar e cumpriu o contrato. Com uma proteção no joelho e visivelmente restrito na movimentação e no gás aos 58 anos de idade, Mike Tyson foi apenas sombra do homem que aterrorizou o mundo do boxe nos anos 1980 e 1990, mas lutou até o soar do gongo final e disse estar grato pela oportunidade. 

"Ter meus filhos me vendo indo golpe a golpe e finalizar oito rounds com um lutador talentoso com a metade da minha idade, ante um estádio do Dallas Cowboys lotado é uma experiência que nenhum homem tem o direito de pedir. Obrigado", escreveu a lenda. 

Confira abaixo o texto completo do post de Tyson:

"Esta é uma daquelas situações em que você perdeu, mas ainda venceu. Estou grato por ontem à noite. Sem arrependimentos de entrar no ringue uma última vez. Eu quase morri em junho. Tive oito transfusões de sangue. Perdi metade do meu sangue e 11kg no hospital e tive de lutar para ficar saudável e lutar, então eu venci. Ter meus filhos me vendo indo golpe a golpe e finalizar oito rounds com um lutador talentoso com a metade da minha idade, ante um estádio do Dallas Cowboys lotado é uma experiência que nenhum homem tem o direito de pedir. Obrigado 🙏".
'),

('Fritz e Sinner avançam para a decisão e ATP Finals terá campeão inédito', 
 'Em reedição da final do US Open, norte-americano e italiano lutarão por título inédito neste domingo',
 '2024-11-16', 
 'Redação Ge', 
 0,
 'Tênis', 
 '{"imagem_principal": "https://s2-ge.glbimg.com/KdeNlWTVC7fu4Frh4iWpkEwLqjc=/0x202:3732x2301/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/J/Y/CYc7BdRUylWLWmYmWMxg/gettyimages-2185147653.jpg", "imagem_adicional_1": "https://s2-ge.glbimg.com/6H34Du1oNcy3w4kgjk6RxXeAxzY=/0x0:3268x2058/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/P/H/eL5OZzR2qSHw96xXuGTA/gettyimages-2185120463.jpg"}',
 'O estadunidense Taylor Fritz e o italiano Jannik Sinner farão a grande final do ATP Finals 2024.

Nas semifinais, realizadas neste sábado (16), Fritz derrotou o alemão Alexander Zverev por 2 a 1 (6/3, 3/6 e 7/6 [3]), enquanto Sinner passou pelo norueguês Casper Ruud por 2 a 0 (6/1 e 6/2).

O duelo pelo título do torneio, que reúne os oito principais tenistas da temporada, acontecerá neste domingo, às 14h (horário de Brasília), em Turim, na Itália.

Sinner, número 1 do mundo, chega na decisão do ATP Finals pela segunda vez consecutiva.  
No ano passado, acabou superado pelo sérvio Novak Djokovic. Já Fritz, quinto colocado do ranking, é finalista do torneio pela primeira vez na carreira, depois de ter caído na semifinal em 2022. O campeão deste ano, portanto, será inédito.

Taylor Fritz é o primeiro tenista dos Estados Unidos a chegar na final do ATP Finals desde James Blake,  
que foi vice-campeão em 2006, perdendo para Roger Federer. A última vez que um estadunidense venceu o torneio foi em 1999, com Pete Sampras, que obteve seu quinto título na ocasião.

Assegurado como número 1 do mundo até o final do ano, independente do resultado, Sinner busca o primeiro título de um tenista italiano no Finals. Antes dele, nenhum atleta de seu país havia chegado na decisão do torneio. Sinner está invicto na competição. Antes da semifinal, o tenista de 23 anos havia ganhado seus três jogos na fase de grupos, todos sem perder sets. O italiano, inclusive, impôs a única derrota de Fritz no torneio, ainda na primeira fase.

Repeteco da final do US Open – que teve Sinner vencedor – a decisão do Finals acontecerá neste domingo (17), às 14h.

Os jogos.  
A primeira semifinal do dia foi entre Fritz e Zverev, número 2 do mundo, que fechou a primeira fase invicto. Apesar do leve favoritismo alemão, foi o estadunidense quem saiu em vantagem, vencendo o primeiro set por 6/3. Zverev se recuperou na segunda parcial e devolveu o placar, com uma quebra no quarto game.

O terceiro set foi de muita luta. Os dois tenistas confirmaram seus dois primeiros games de serviço sem maiores problemas. A partir do quinto game, eles tiveram que jogar duro para salvar break points. Zverev teve cinco oportunidades de quebrar o serviço, e Fritz perdeu três chances. Com tudo igualado, o duelo foi para o tie-break, onde o estadunidense se saiu melhor e ganhou por 7-3.

Horas mais tarde, foi a vez de Sinner entrar em ação contra Ruud, sétimo colocado do ranking. Impondo seu favoritismo e o bom momento na temporada, o italiano foi superior e fez uma partida dominante. Ele venceu por sets diretos, com parciais de 6/1 e 6/2, em apenas 1h08min.
'),

('LeBron James alcança mais um feito inédito: 4º triplo-duplo seguido', 
 'Astro chega à marca depois de anotar 15 pontos, 16 rebotes e 12 assistências diante dos Spurs pela Copa da NBA',
 '2024-11-16', 
 'Redação do ge', 
 0,
 'Basquete', 
 '{"imagem_principal": "https://s2-ge.glbimg.com/msV0la7nc5ideCiyo6QvVws9zhE=/0x0:1024x683/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/H/k/7dNF6vR12opysIKpGgEQ/gettyimages-2184291415-1-.jpg", "imagem_adicional_1": "https://imgs.search.brave.com/Ez1LWKFtZiQeVaS0OdbMI9wlvqFkumdYWkLI2SvIgwI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdhL0xlQnJvbl9K/YW1lc18oNTE5NTk5/NzcxNDQpXyhjcm9w/cGVkMikuanBn"}',
 'Aos 39 anos, LeBron James segue quebrando marcas. Na rodada da madrugada deste sábado, o astro do Los Angeles Lakers chegou ao quarto triplo-duplo consecutivo, algo que ele jamais tinha feito na carreira. Foram 15 pontos, 16 rebotes e 12 assistências na vitória sobre os Spurs, do francês Wembanyama, por 120 a 115. A partida foi válida pela Copa da NBA, torneio intertemporada. 

Este é o 22º ano de Lebron na NBA. Agora, o tricampeão olímpico soma 146 triplos-duplos. Nesta temporada, é o quinto. A série dos quatro seguidos começou no último dia 8, contra os Sixers, seguiu para o jogo contra os Raptors, dois dias depois. Na última quarta-feira, diante dos Grizzlies, mais um triplo-duplo. Em sete dias, LeBron chegou à marca inédita.

Neste sábado, o triplo-duplo saiu no terceiro período, ao dar a décima assistência no jogo contra o San Antonio. LeBron passou a bola para Austin Reaves converter de três.

"A melhor coisa sobre meu jogo é que eu posso não ter tanto ritmo no ataque, mas ainda tenho impacto no jogo", disse LeBron.

No jogo deste sábado, Anthony Davis marcou 40 pontos, cestinha da partida. Pelos Spurs, Wembanyama anotou 28 pontos e 14 rebotes. Os Lakers são os atuais campeões da Copa da NBA.
');


 

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    dataNascimento DATE,
    genero ENUM('masculino', 'feminino', 'outro'),
    cidade VARCHAR(50),
    estado VARCHAR(50),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultima_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
