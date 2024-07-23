export default function Board () {
    return (
        <div>
            <h1>Board Page</h1>
            <div className="board-container">
                <div className="board">
                    <div className="field1">
                        <div className="s-tzone">
                            <div className="s-t1 pend card"></div>
                            <div className="s-t2 card"></div>
                            <div className="s-t3 card"></div>
                            <div className="s-t4 card"></div>
                            <div className="s-t5 pend card"></div>
                        </div>
                        <div className="mzone">
                            <div className="m1"></div>
                            <div className="m2"></div>
                            <div className="m3"></div>
                            <div className="m4"></div>
                            <div className="m5"></div>
                        </div>
                    </div>
                    <div className="extra-zones">
                        <div className="em-z1"></div>
                        <div className="em-z2"></div>
                    </div>
                    <div className="field2">
                        <div className="s-tzone p2">
                            <div className="s-t1 pend card"></div>
                            <div className="s-t2 card"></div>
                            <div className="s-t3 card"></div>
                            <div className="s-t4 card"></div>
                            <div className="s-t5 pend card"></div>
                        </div>
                        <div className="mzone p2">
                            <div className="m1"></div>
                            <div className="m2"></div>
                            <div className="m3"></div>
                            <div className="m4"></div>
                            <div className="m5"></div>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="lp-section">
                        <div className="lp-1"></div>
                        <div className="lp-2"></div>
                    </div>
                    <div className="turn-section">
                        <div className="turn">

                        </div>
                    </div>
                    <div className="phase-section">
                        <div className="phase"></div>
                    </div>
                    <div className="io-section">
                        <button className="dice"></button>
                        <button className="coin"></button>
                    </div>
                </div>
            </div>
            <div className="hand-section">
                <div className="hand" draggable="true"></div>
            </div>
        </div>
    )
}