import React from 'react';
import React, {useEffect, useState} from "react";
import {RouteComponentProps} from 'react-router-dom';
import {getOneGame} from "../../services/http";
import React, {Fragment, useEffect, useState} from "react";
import {parseDate} from '../../utils/date';
import './gameOne.sass';
import {Spinner} from "../load/Spinner";

interface MatchParams {
    gameId: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

export const GameOne = (props: Props) => {

    const [game, setGame] = useState<any>({})
    const [displayVideo, setDisplayVideo] = useState<any>('none')
    const [load, setLoad] = useState<boolean>(false);

    useEffect(() => {
        setLoad(false);
        getOneGame(parseInt(props.match.params.gameId)).then((game) => {
            setGame(game);
            setLoad(true)
        })
    }, [props.match.params.gameId])

    function handleModal(e: any) {
        let size = e.target.innerText;
        let video = document.getElementById('video') as HTMLVideoElement;
        video.setAttribute('src', game.clip.clips[size]);
        setDisplayVideo('flex');
    }

    return (
        <Fragment>
            {
                !load && <Spinner/>
            }

            {game && load &&
            <section className="oneGame">
                <header>
                    <div>
                        <h1>{game.name}</h1>
                        <h3>{parseDate(game)}</h3>
                    </div>
                    {game.rating > 0 &&
                    <div>Note : {game.rating} / 5</div>
                    }
                </header>
                <article className="img_desc">
                    <img className='blur' src={game.background_image} alt=""/>
                    <img className='watch' src={game.background_image} alt=""/>
                    <div dangerouslySetInnerHTML={{__html: game.description}}/>
                </article>
                {
                    game.clip &&
                    <article className="clips">
                        <h4>Clips :</h4> {
                        <div>
                            {
                                game.clip.clips['320'] &&
                                <button onClick={handleModal}>320</button>
                            }
                            {
                                game.clip.clips['640'] &&
                                <button onClick={handleModal}>640</button>
                            }
                            {
                                game.clip.clips['full'] &&
                                <button onClick={handleModal}>full</button>
                            }
                        </div>
                    }
                    </article>
                }
                <div className="extras">

                    {
                        game.developers &&
                        <article className="dev">
                            <h4>Developpers :</h4> {
                            game.developers.map((d: any) => {
                                return (
                                    <div key={d.id}>
                                        - {d.name}
                                        <img src={d.image_background} alt=""/>
                                    </div>
                                )
                            })
                        }
                        </article>
                    }
                    {
                        game.genres &&
                        <article className="genres">
                            <h4>Genres :</h4> {
                            game.genres.map((d: any) => {
                                return (
                                    <div>
                                        - {d.name}
                                        <img src={d.image_background} alt=""/>
                                    </div>
                                )
                            })
                        }
                        </article>
                    }
                    {
                        game.tags &&
                        <article className="tags">
                            <h4>Tags :</h4> {
                            game.tags.map((d: any) => {
                                return (
                                    <div>
                                        - {d.name}
                                        <img src={d.image_background} alt=""/>
                                    </div>
                                )
                            })
                        }
                        </article>
                    }
                    {
                        game.publishers &&
                        <article className="publishers">
                            <h4>Publishers :</h4> {
                            game.publishers.map((d: any) => {
                                return (
                                    <div>
                                        - {d.name}
                                        <img src={d.image_background} alt=""/>
                                    </div>
                                )
                            })
                        }
                        </article>
                    }
                </div>

            </section>
            }
            <div className="modal_bg"
                 style={{
                     display: displayVideo,
                 }}
                >
                <div className='close'
                     onClick={()=>{
                    setDisplayVideo('none')
                }}/>
                <div className="modal">
                    <video id='video' controls preload='auto'/>
                </div>
            </div>
        </Fragment>
    )
}
