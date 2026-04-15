import React, { useState, useEffect } from 'react'
import styles from './Astrologia.module.css';

function Astrologia(){
    const [dataAtual,setDataAtual] = useState(new Date())

    const planetas = {
        'Sol': {
            simbolo: '☉',
            classe: 'sol',
            deus: 'Rá',
            diaTitulo: 'Energia do Dia do Sol',
            diaDescricao: 'Dia de brilho, honra, identidade e força pessoal. Excelente para objetivos que envolvem autoridade, sucesso, visibilidade e autoconfiança.',
            favorece: 'liderança, autoestima, fama, clareza, vitalidade',
            evitar: 'orgulho, arrogância, querer dominar tudo',
            horaTitulo: 'Energia da Hora do Sol',
            horaDescricao: 'Um impulso direto de energia e presença. Ideal para se expor, iniciar projetos, pedir reconhecimento, se impor com firmeza.'
        },
        'Lua': {
            simbolo: '☽',
            classe: 'lua',
            deus: 'Konshu, Astarte',
            diaTitulo: 'Energia do Dia da Lua',
            diaDescricao: 'Dia emocional, intuitivo e ligado à família, memórias e proteção. Muito forte para cura emocional, espiritualidade, sonhos e sensibilidade.',
            favorece: 'intuição, fertilidade, cuidado, acolhimento, magia psíquica',
            evitar: 'instabilidade emocional, nostalgia excessiva, indecisão',
            horaTitulo: 'Energia da Hora da Lua',
            horaDescricao: 'Aumenta a percepção e a receptividade. Boa para orar, meditar, fazer tarot, sonhar lúcido, trabalhar emoções e conexão espiritual.'
        },
        'Marte': {
            simbolo: '♂',
            classe: 'marte',
            deus: 'Horus',
            diaTitulo: 'Energia do Dia de Marte',
            diaDescricao: 'Dia de ação, coragem e confronto. Ideal para força física, disciplina, luta, competitividade e cortar obstáculos.',
            favorece: 'treinos, decisões rápidas, enfrentar medo, romper limites',
            evitar: 'agressividade, brigas, impulsividade',
            horaTitulo: 'Energia da Hora de Marte',
            horaDescricao: 'Um pico de energia explosiva. Boa para atacar tarefas difíceis, resolver pendências, ter iniciativa e cortar vícios.'
        },
        'Mercúrio': {
            simbolo: '☿',
            classe: 'mercurio',
            deus: 'Thoth, Hermes',
            diaTitulo: 'Energia do Dia de Mercúrio',
            diaDescricao: 'Dia mental, comunicativo e rápido. Ótimo para estudos, negócios, escrita, conversas e inteligência estratégica.',
            favorece: 'aprendizado, vendas, networking, tecnologia, planejamento',
            evitar: 'ansiedade mental, excesso de pensamentos, enganação',
            horaTitulo: 'Energia da Hora de Mercúrio',
            horaDescricao: 'Período de foco mental e agilidade. Ideal para estudar, programar, negociar, mandar mensagens importantes e organizar ideias.'
        },
        'Júpiter': {
            simbolo: '♃',
            classe: 'jupiter',
            deus: 'Amoun, Mammom, Baal',
            diaTitulo: 'Energia do Dia de Júpiter',
            diaDescricao: 'Dia de expansão, crescimento e prosperidade. Muito ligado a sorte, riqueza, fé, justiça e oportunidades.',
            favorece: 'dinheiro, bênçãos, crescimento espiritual, viagens, autoridade positiva',
            evitar: 'exageros, preguiça, arrogância "moral"',
            horaTitulo: 'Energia da Hora de Júpiter',
            horaDescricao: 'Aumenta o magnetismo e as oportunidades. Boa para pedir ajuda, fazer rituais de prosperidade, abrir caminhos e estudar temas elevados.'
        },
        'Vênus': {
            simbolo: '♀',
            classe: 'venus',
            deus: 'Lucifer, Astarte, Hathor',
            diaTitulo: 'Energia do Dia de Vênus',
            diaDescricao: 'Dia de amor, beleza, prazer e harmonia. Excelente para relacionamentos, autoestima, arte, atração e magnetismo.',
            favorece: 'romance, carisma, estética, amizades, reconciliação',
            evitar: 'dependência emocional, luxúria, gastos excessivos',
            horaTitulo: 'Energia da Hora de Vênus',
            horaDescricao: 'Um momento de charme e suavidade. Ideal para conversas amorosas, sedução, rituais de atração, autocuidado e arte.'
        },
        'Saturno': {
            simbolo: '♄',
            classe: 'saturno',
            deus: 'Satan, Isis, Hecate',
            diaTitulo: 'Energia do Dia de Saturno',
            diaDescricao: 'Dia de estrutura, responsabilidade e disciplina. Perfeito para trabalho sério, maturidade, limites e construção a longo prazo.',
            favorece: 'foco, organização, estudo profundo, proteção, banimento, paciência',
            evitar: 'pessimismo, isolamento, frieza emocional',
            horaTitulo: 'Energia da Hora de Saturno',
            horaDescricao: 'Energia pesada e concentrada. Boa para fechar ciclos, cortar hábitos ruins, fazer limpeza espiritual, trabalhar limites e obrigações.'
        }
    }

    const diaP = {
        'seg.': { texto: 'Dia da Lua', planeta: 'Lua' },
        'ter.': { texto: 'Dia de Marte', planeta: 'Marte' },
        'qua.': { texto: 'Dia de Mercúrio', planeta: 'Mercúrio' },
        'qui.': { texto: 'Dia de Júpiter', planeta: 'Júpiter' },
        'sex.': { texto: 'Dia de Vênus', planeta: 'Vênus' },
        'sáb.': { texto: 'Dia de Saturno', planeta: 'Saturno' },
        'dom.': { texto: 'Dia do Sol', planeta: 'Sol' }
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            setDataAtual(new Date())
        }, 1000)

        return ()=> clearInterval(timer)
    }, [])

    const ordemHorarioP = ['Saturno', 'Júpiter', 'Marte', 'Sol', 'Vênus', 'Mercúrio', 'Lua']
    const ordemPlanetaria = [3, 6, 2, 5, 1, 4, 0]

    function getHorarioPlanetario(date){
        const diaSemana = date.getDay()
        const hora = date.getHours()

        const indiceRegente = ordemPlanetaria[diaSemana]
        const planetaIndex = (indiceRegente + hora) % 7

        return ordemHorarioP[planetaIndex]
    }

    const horaDoPlaneta = getHorarioPlanetario(dataAtual)
    
    const horaF = dataAtual.toLocaleTimeString('pt-BR')
    const diaS = dataAtual.toLocaleDateString('pt-BR', { weekday: 'short'})
    const diaSemanaLong = dataAtual.toLocaleDateString('pt-BR', { weekday: 'long'})
    const diaInfo = diaP[diaS] ?? { texto: '', planeta: 'Sol' }

    const planetaHora = planetas[horaDoPlaneta] || planetas['Sol']
    const planetaDia = planetas[diaInfo.planeta] || planetas['Sol']

    return(
        <>
        <section className={styles.astrologia}>
            <div className={styles.title}>
                <h1>Astrologia</h1>
            </div>
            <div className={styles.horarios}>
                <p>{horaF}</p>
                <p className={styles['planeta-info']}>
                    {diaSemanaLong}
                    <span className={`${styles['planeta-simbolo']} ${styles[planetaDia.classe]}`}>
                        {planetaDia.simbolo}
                    </span>
                </p>
                <p className={styles['planeta-info']}>
                    {diaInfo.texto}
                    <span className={`${styles['planeta-simbolo']} ${styles[planetaDia.classe]}`}>
                        {planetaDia.simbolo}
                    </span>
                </p>
                <p className={styles['planeta-info']}>
                    Horário de: {horaDoPlaneta}
                    <span className={`${styles['planeta-simbolo']} ${styles[planetaHora.classe]}`}>
                        {planetaHora.simbolo}
                    </span>
                </p>
                <p className={styles['planeta-info']}>
                    Deus(es) regentes: {planetaDia.deus}
                </p>
            </div>

            <div className={styles['energia-card']}>
                <h2 className={`${styles['energia-titulo']} ${styles[planetaDia.classe]}`}>
                    {planetaDia.simbolo} {planetaDia.diaTitulo}
                </h2>
                <p className={styles['energia-desc']}>{planetaDia.diaDescricao}</p>
                <div className={styles['energia-grid']}>
                    <div className={styles['energia-item']}>
                        <span className={styles['energia-label']}>Favorece:</span>
                        <span>{planetaDia.favorece}</span>
                    </div>
                    <div className={styles['energia-item']}>
                        <span className={styles['energia-label']}>Evitar:</span>
                        <span>{planetaDia.evitar}</span>
                    </div>
                </div>
            </div>

            <div className={styles['energia-card']}>
                <h2 className={`${styles['energia-titulo']} ${styles[planetaHora.classe]}`}>
                    {planetaHora.simbolo} {planetaHora.horaTitulo}
                </h2>
                <p className={styles['energia-desc']}>{planetaHora.horaDescricao}</p>
            </div>
        </section>
        </>
    )
}

export default Astrologia