import "./BrainTeaserCard.scss"

function BrainTeaserCard() {
    return(
        <section className="brainteaser">
            <div className="brainteaser__wrapper">
                <h1 className="brainteaser__question"></h1>
                <article className="brainteaser__cardtrue">
                    <h1 className="brainteaser__true--text">True</h1>
                </article>
                <article className="brainteaser__cardfalse">
                    <h1 className="brainteaser__false--text"></h1>
                </article>
            </div>
        </section>
    )
}

export default BrainTeaserCard;