import React from 'react';
import './Preview.css'

const Preview = ({ characterPackages, gender, health, onClickStar }) => {

    const filteredCharacterPackages = characterPackages.filter((characterPackage) => {
        const characterHealth = typeof characterPackage.died === "undefined" ? "living" : "dead"
        return ((characterPackage.gender === gender || gender === "both genders")
            && (characterHealth === health || health === "dead and living"))
    })


    let divSelected = null;
    const SelectOrUnSelect = (e) => {
        if (divSelected != null) divSelected.className = 'star-not-selected';
        divSelected = e.target;
        e.target.className = 'star-selected';
        const arr = document.getElementsByClassName("Rating")[0].childNodes

        for (let i = 0; i < arr.length; i++) {
            if (Number(arr[i].id) <= Number(e.target.id)) {
                console.log('hello')
                arr[i].classList.remove('star-not-selected');
                arr[i].classList.add('star-selected');
            }
        }
    }


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
                                    <img className="star-not-selected star-selected" id="0" onClick={() => onClickStar(characterPackage, 1)} src="/static/assets/star.png" alt="gold star" onClick={SelectOrUnSelect} />
                                    <img className="star-not-selected star-selected" id="1" onClick={() => onClickStar(characterPackage, 2)} src="/static/assets/star.png" alt="gold star" onClick={SelectOrUnSelect} />
                                    <img className="star-not-selected star-selected" id="2" onClick={() => onClickStar(characterPackage, 3)} src="/static/assets/star.png" alt="gold star" onClick={SelectOrUnSelect} />
                                    <img className="star-not-selected star-selected" id="3" onClick={() => onClickStar(characterPackage, 4)} src="/static/assets/star.png" alt="gold star" onClick={SelectOrUnSelect} />
                                    <img className="star-not-selected star-selected" id="4" onClick={() => onClickStar(characterPackage, 5)} src="/static/assets/star.png" alt="gold star" onClick={SelectOrUnSelect} />
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


