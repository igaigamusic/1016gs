document.addEventListener('DOMContentLoaded', () => {
    const cheese = document.getElementsByClassName('cheese');
    let positionX = 50; // キャラクターの初期位置 (50% = 中央)
    let isJumping = false;

    // 左右キーのイベントリスナー
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            // 左矢印キーを押した場合
            if (positionX > 0) {
                positionX -= 5; // 左に移動
                cheese.style.left = positionX + '%';
            }
        } else if (event.key === 'ArrowRight') {
            // 右矢印キーを押した場合
            if (positionX < 95) {
                positionX += 5; // 右に移動
                cheese.style.left = positionX + '%';
            }
        }
    });

    // クリックでジャンプする機能
    document.addEventListener('click', () => {
        if (!isJumping) {
            isJumping = true;
            cheese.classList.add('jump');
            setTimeout(() => {
                cheese.classList.remove('jump');
                isJumping = false;
            }, 500); // 500ミリ秒後にジャンプを終了
        }
    });
});

