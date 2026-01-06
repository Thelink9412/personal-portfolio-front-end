import gameLogo from '../../assets/images/crystal-of-fate-logo.png'

function GameProject() {

    return (
        <div className='game-project'>
            <img src={gameLogo} alt="Game Logo" style={{ width: '100%', borderRadius: '15px' }} />
            <h4>Overview</h4>
            <p>
                Crystal of Fate is a room-based Tower Defense focused on strategic positioning and resource management. 
                Players must safeguard a central crystal by deploying defensive units across multiple rooms to intercept 
                waves of randomly generated enemies. The game features a structured progression system across 4 distinct levels, 
                each consisting of 4 tactical rounds, challenging players to adapt their strategy to unpredictable threats. 
                Developed using <b>Unity Engine</b> and <b>C#</b>
            </p>
            <a href="https://thelink9412.itch.io/crystal-of-fate" target='blank' className='game-link hoverable-link'>Go to itch.io page</a>
        </div>
    )
}

export default GameProject