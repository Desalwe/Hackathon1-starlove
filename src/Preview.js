import React from 'react';
import './Preview.css'

const Preview = ({ characterPackages, gender, health, onClickStar }) => {

    const filteredCharacterPackages = characterPackages.filter((characterPackage) => {
        const characterHealth = typeof characterPackage.died === "undefined" ? "living" : "dead"
        return ((characterPackage.gender === gender || gender === "both genders")
            && (characterHealth === health || health === "dead and living"))
    })

    return (
        <div className="container">

            {filteredCharacterPackages.map(characterPackage => {
                const BMI = characterPackage.height && characterPackage.mass ? (Number(characterPackage.mass) / ((Number(characterPackage.height) * Number(characterPackage.height)))).toFixed(1) : "wouldn't you like to know, cheeky!";

                return (
                    <div key={characterPackage.name} className="flip-box">
                        <div className="flip-box-inner">

                            <div key={characterPackage.name} className="polaroid-front">
                                <img src={characterPackage.image} alt="character images" />
                                <p>{characterPackage.name}</p>
                                <div className="Rating" aria-label="Rating of this item is 3 out of 5">
                                    <img onClick={() => onClickStar(characterPackage, 1)} src="/static/assets/star.png" className="Rating--Star Rating--Star__active" alt="gold star" />
                                    <img onClick={() => onClickStar(characterPackage, 2)} src="/static/assets/star.png" className="Rating--Star Rating--Star__active" alt="gold star" />
                                    <img onClick={() => onClickStar(characterPackage, 3)} src="/static/assets/star.png" className="Rating--Star Rating--Star__active" alt="gold star" />
                                    <img onClick={() => onClickStar(characterPackage, 4)} src="/static/assets/star.png" className="Rating--Star" alt="gold star" />
                                    <img onClick={() => onClickStar(characterPackage, 5)} src="/static/assets/star.png" className="Rating--Star" alt="gold star" />
                                </div>
                            </div>

                            <div className="polaroid-back">
                                <p>Hey, I'm {characterPackage.name}! <br /> I'm a {characterPackage.species} from {characterPackage.homeworld} and I have a BMI index of...  {BMI} 🤭. <br /> Love me!! <br />😘😘😘</p>
                                <img src={characterPackage.image} alt="character images" />
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


