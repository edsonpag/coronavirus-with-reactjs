import React from 'react';
import CountUp from 'react-countup';
import ReactLoading from 'react-loading';

import './Panel.css'


function Panel({ data: { confirmed, deaths, recovered, lastUpdate } }) {

    if(!confirmed) {
        return(
            <div className="loading">
                <ReactLoading type={"bubbles"} color={"#0000ff"} width={100} />
            </div>
        );
    }

    return(
        <div className="container">
            <div className="panel">
                <h2>Painel Coronavirus</h2>
                <span>Atualizado em: {new Date(lastUpdate).toLocaleString('pt-BR')}</span>
            </div>

            <div className="overview">
                <div className="confirmed">
                    <h1>
                        <CountUp start={0} end={confirmed} duration={3} separator="." />
                    </h1>
                    <span>Casos Confirmados</span>
                </div>
                <div className="deaths">
                    <h1>
                        <CountUp start={0} end={deaths} duration={3} separator="." />
                    </h1>
                    <span>Obitos Confirmados</span>
                </div>
            </div>
        </div>

    );
}

export default Panel;