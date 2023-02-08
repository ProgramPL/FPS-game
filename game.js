//Define variables
let score = 0;
let health = 100;
let ammo = 0;
let currentWeapon = 'pistol';
let weapons = ['pistol', 'shotgun', 'rifle', 'sniper'];
let enemies = [];
let level = 1;

//Function to shoot weapon
function shootWeapon() {
    if (ammo > 0) {
        switch (currentWeapon) {
            case 'pistol':
                //Code for pistol shooting
                break;
            case 'shotgun':
                //Code for shotgun shooting
                break;
            case 'rifle':
                //Code for rifle shooting
                break;
            case 'sniper':
                //Code for sniper shooting
                break;
        }
        ammo--;
    }
}

//Function to reload weapon
function reloadWeapon() {
    ammo = 10;
}

//Function to switch weapons
function switchWeapon(newWeapon) {
    if (weapons.includes(newWeapon)) {
        currentWeapon = newWeapon;
    }
}
