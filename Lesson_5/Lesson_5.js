function chessboard() {
    var bodyLayer = document.querySelector('body');
    var letters = 'ABCDEFGH';
    var fig_letters = 'ЛКСФКСКЛ';

    var contentLayer = document.createElement('div');
    contentLayer.classList.add('content');

    bodyLayer.appendChild(contentLayer);
    
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            var chessCell = document.createElement('div');
            
            if((j == 0 || j == 9) && i != 0 && i != 9) {
                chessCell.classList.add('letter_cell');
                chessCell.textContent = letters[i-1];
            }

            if((i == 0 || i == 9) && j != 0 && j != 9) {
                chessCell.classList.add('number_cell');
                chessCell.textContent = 9 - j;
            }
            
            if(i != 0 && i != 9 && j != 0 && j != 9) {
                chessCell.classList.add('black_cell');
                if (j % 2 == 0 && i % 2 == 0) chessCell.classList.toggle('black_cell');
                else if (j % 2 != 0 && i % 2 != 0) chessCell.classList.toggle('black_cell');
            } 
            
            if((j == 2 || j == 7) && i != 0 && i != 9) {
                chessCell.textContent = "П";
                if(j == 7) chessCell.classList.add('fig_black_cell');
                else chessCell.classList.add('fig_cell');
                
            }
            
            if((j == 1 || j == 8) && i != 0 && i != 9) {
                chessCell.textContent = fig_letters[i-1];
                if(j == 8) chessCell.classList.add('fig_black_cell');
                else chessCell.classList.add('fig_cell');
            }
            
            contentLayer.appendChild(chessCell);
        }
    }
    
}
chessboard();
