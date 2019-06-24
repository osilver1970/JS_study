function chessboard() {
    var bodyLayer = document.querySelector('body');
    var letters = 'ABCDEFGH';
    var fig_white = [`&#9814;`, `&#9816;`, '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;'];
    var fig_black = [`&#9820;`, `&#9822;`, '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'];

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
                chessCell.classList.add('fig_cell');
                if(j == 7) chessCell.innerHTML = `&#9817`;
                else chessCell.innerHTML = `&#9823`;
                
            }
            
            if((j == 1 || j == 8) && i != 0 && i != 9) {
                chessCell.classList.add('fig_cell');
                if(j == 8) chessCell.innerHTML = `${fig_white[i-1]}`;
                else chessCell.innerHTML = `${fig_black[i-1]}`;
            }
            
            contentLayer.appendChild(chessCell);
        }
    }
    
}
chessboard();
