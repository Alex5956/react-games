import {parseDate} from '../../utils/date';
import './game.sass';

interface Info {
    info: any
}

export const Game = ({info}: Info) => {



    return (
        <div className="game">
            <h4>{info.name}</h4>
            <figure>
                <div>
                    <img src={info.background_image} alt=""/>

                    <div className='note'>
                        <div>Note : {info.rating}</div>
                        <div className="percent" style={{
                            width: info.rating > 0 ? 'calc(100%  / ((5 / ' + info.rating + ')))' : 0,
                            backgroundColor: "red",
                            height: '5px'
                        }}/>
                    </div>
                </div>
                <figcaption>Mis à jour : {parseDate(info)}</figcaption>
            </figure>
        </div>
    )
}
