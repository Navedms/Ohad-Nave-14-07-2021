import between from "../utility/between"
import colors from "../config/colors";

const name = (number) => {
    if (between(number, 1, 5) || between(number, 33, 37)) { return 'sun'; }
    else if (between(number, 6, 11) || number === 32) { return 'cloud' }
    else if (between(number, 12, 21) || between(number, 38, 44) || between(number, 25, 29)) { return 'cloud-rain'; }
    else if (between(number, 22, 24)) { return 'cloud-snow'; }
    else { return 'cloud' }
}

const color = (number) => {
    if (between(number, 1, 5) || between(number, 33, 37)) { return colors.sun; }
    else if (between(number, 6, 11) || number === 32) { return colors.dark }
    else if (between(number, 12, 21) || between(number, 38, 44) || between(number, 25, 29)) { return colors.secondary }
    else if (between(number, 22, 24)) { return colors.medium }
    else { return colors.dark }
}

export default {
    name,
    color
}