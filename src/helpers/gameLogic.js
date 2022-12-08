export const swipeRight = (game, setGame) => {
    let gameObj = { ...game }
    let i, j;
    for (i = 1; i < 5; i++) {
      for (j = 4; j > 1; j--) {
        let element = (i * 10) + j;
        if ((gameObj[String(element)] === gameObj[String(element - 1)]) && gameObj[String(element)] !== '' && gameObj[String(element - 1)] !== '') {
          gameObj[String(element)] = Number(gameObj[String(element)]) + Number(gameObj[String(element - 1)]);
          gameObj[String(element - 1)] = '';
        }
        else if (gameObj[String(element)] === '') {
          gameObj[String(element)] = gameObj[String(element - 1)];
          gameObj[String(element - 1)] = '';
        }
      }
    }
    setGame({ ...gameObj });
}

export const swipeLeft = (game, setGame) => {
    let gameObj = { ...game }
    let i, j;
    for (i = 1; i < 5; i++) {
      for (j = 1; j < 4; j++) {
        let element = (i * 10) + j;
        if ((gameObj[String(element)] === gameObj[String(element + 1)]) && gameObj[String(element)] !== '' && gameObj[String(element + 1)] !== '') {
          gameObj[String(element)] = Number(gameObj[String(element)]) + Number(gameObj[String(element + 1)]);
          gameObj[String(element + 1)] = '';
        }
        else if (gameObj[String(element)] === '') {
          gameObj[String(element)] = gameObj[String(element + 1)];
          gameObj[String(element + 1)] = '';
        }
      }
    }
    setGame({ ...gameObj });
}
export const swipeUp = (game, setGame) => {
    
}
export const swipeDown = (game, setGame) => {
    
}