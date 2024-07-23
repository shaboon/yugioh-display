export default function Wiki() {
    return (
        <div className="flex grid-cols-2">
            <header>
                <h1>Wiki Page</h1>
            </header>
            <section>
                <div className="flex grid-cols-3">
                    <div>
                        <div className="link-arrow tleft"></div>
                        <div className="link-arrow tmid"></div>
                        <div className="link-arrow tright"></div>
                    </div>
                    <div className="link-arrow mid-left"></div>
                    <img>Card IMG</img>
                    <div className="link-arrow mid-right"></div>
                    <div>
                        <div className="link-arrow bleft"></div>
                        <div className="link-arrow bmid"></div>
                        <div className="link-arrow bright"></div>
                    </div>
                    </div>
                    <p>Name</p>
                    <p>Type</p>
                    <p>Level</p>
                    <p>ATK/DEF</p>
            </section>
            <article>
                <p>Card Info</p>
                <p>Effect/Flavor Text</p>
            </article>
        </div>
    )
}