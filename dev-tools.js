const devToolsCode = `
    function skipLevel() {
        const currentLevel = parseInt(localStorage.getItem('unlockedLevel')) || config.defaultLevel;
        if (currentLevel < config.maxLevel) {
            localStorage.setItem('unlockedLevel', currentLevel + 1);
            alert('已跳过当前关卡！');
            initGame();
        } else {
            localStorage.setItem('unlockedLevel', config.maxLevel);
            alert('🎉 已使用开发者工具通关！');
            initGame();
        }
    }

    document.getElementById('dev-tools-button').onclick = skipLevel;
    document.querySelector('#password-modal button:nth-child(2)').onclick = verifyPassword;
    document.querySelector('#password-modal button:nth-child(3)').onclick = closeModal;

    document.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key === 'F12') {
            e.preventDefault();
            openPasswordModal();
        }
    });
`;

const encodedDevToolsCode = btoa(devToolsCode);
console.log(encodedDevToolsCode); // 输出加密后的代码
