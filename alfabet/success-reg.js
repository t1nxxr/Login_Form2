import library from "./alfabet.js";

export default class SuccessReg {
    constructor() {
        this.popup = document.querySelector('.pop-up');
        this.closeButtonX = document.querySelector('.close-button-x');
        this.closeButton = document.querySelector('.close-button');
        this.userName = document.querySelector('.user-name');
        
        this.openClose(true); 

        this.closeButtonX.addEventListener('click', () => this.openClose(true));
        this.closeButton.addEventListener('click', () => this.openClose(true));
    }

    openClose(isHidden) {
        this.popup.classList.toggle('hidden', isHidden);
    }

    writeName(name) {
        this.openClose(false); 
        const alphabet = library.en.alphabet;
        this.userName.innerHTML = '';
        let currentString = '';
        let i = 0;

        const interval = setInterval(() => {
            if (name === '') {
                this.userName.innerHTML = `<span>${currentString}</span>`;
                clearInterval(interval);
                return;
            }

            const currentLetter = alphabet[i];
            
            if (currentLetter === undefined) {
                
                currentString += name[0];
                this.userName.innerHTML = `<span>${currentString}</span>`;
                name = name.slice(1);
                i = 0;
            } else {
                this.userName.innerHTML = `<span>${currentString}</span>${currentLetter}`;
                i++;
                if (currentLetter === name[0]) {
                    currentString += currentLetter;
                    name = name.slice(1);
                    i = 0;
                }
            }
        }, 35);
    }
}