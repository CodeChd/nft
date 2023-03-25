import './App.css'

function App() {

  return (
    <div className="App">

      <main className='nft-content'>

        <article className='nft-card'>

          <div className="nft-img-container">
            <img className="equilibrium-img" src="/images/image-equilibrium.jpg" alt="nft-equilibrium" />
            <img className="view" src="/images/icon-view.svg" alt="nft-view" />
            <div className="overlay"/>
          </div>

          <div className="nft-info">

            <p className='nft-heading'>Equilibrium #3429</p>
            <p className='nft-paragraph'>Our Equilibrium collection promotes balance and calm.</p>

            <div className="nft-icons">
              <img className="icon-mod ethereum" src="/images/icon-ethereum.svg" alt="" /> <p className='ethereum-text'>0.041 ETH</p>
              <img className="icon-mod clock" src="/images/icon-clock.svg" alt="" /> <p className='clock-text'>3 days left</p>
            </div>

          </div>

          <div className="nft-profile">

            <img src="/images/image-avatar.png" alt="avatar" />
            <p>Creation of <span className='author'>Jules Wyvern</span></p>
          </div>

        </article>

      </main>

    </div>
  )
}

export default App
