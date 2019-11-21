import React from 'react';
import './Preview.css'

const Preview = ({ charData }) => {


    return (
        <div className="container">

            {charData.map(char => {
                const BMI = char.height && char.mass ? (Number(char.mass) / ((Number(char.height) * Number(char.height)))).toFixed(1) : "wouldn't you like to know, cheeky!";

                return (

                    <div key={char.name} className="flip-box">
                        <div className="flip-box-inner">

                            <div key={char.name} className="polaroid-front">
                                <img src={char.image} alt="character images" />
                                <p>{char.name}</p>
                                <div className="Rating" aria-label="Rating of this item is 3 out of 5">
                                    <img src="/static/assets/star.png" className="Rating--Star Rating--Star__active" alt="gold star" />
                                    <img src="/static/assets/star.png" className="Rating--Star Rating--Star__active" alt="gold star" />
                                    <img src="/static/assets/star.png" className="Rating--Star Rating--Star__active" alt="gold star" />
                                    <img src="/static/assets/star.png" className="Rating--Star" alt="gold star" />
                                    <img src="/static/assets/star.png" className="Rating--Star" alt="gold star" />
                                </div>
                            </div>

                            <div className="polaroid-back">
                                <p>Hey, I'm {char.name}! <br /> I'm a {char.species} from {char.homeworld} and I have a BMI index of...  {BMI} 🤭. <br /> Love me!! <br />😘😘😘</p>
                                <img src={char.image} alt="character images" />
                                <div className="Rating-back" aria-label="Rating of this item is 3 out of 5">
                                    <img src="/static/assets/star.png" className="Rating--Star" alt="gold star" />
                                    <img src="/static/assets/star.png" className="Rating--Star" alt="gold star" />
                                    <img src="/static/assets/star.png" className="Rating--Star" alt="gold star" />
                                    <img src="/static/assets/star.png" className="Rating--Star" alt="gold star" />
                                    <img src="/static/assets/star.png" className="Rating--Star" alt="gold star" />
                                </div>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div >

    )
}

export default Preview

// return console.log(this.state.CharData[0].gender)