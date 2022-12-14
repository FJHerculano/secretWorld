import './GameOver.css';

const GameOver = ({retry, score}) => {
  return (
    <>
      <div>FIM DO JOGO!</div>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>resetar o jogo</button>
    </>
  )
}

export default GameOver