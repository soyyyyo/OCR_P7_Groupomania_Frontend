
const Regex = (value, type) => {
    // Type texte: lettres et accents uniquements, jusqu'à 31 caractéres
    if (type === "text") {
        const minRegexp = /^[a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ\s-]{5,31}$/i;
        const valid = minRegexp.test(value);
        return valid;
        // Type email: vérifie le @, une extension de domaine, le double point etc...
    } if (type === "email") {
        const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const valid = emailRegexp.test(value);
        return valid;
        // Type adresse: lettres, accents et chiffres autorisés, entre 5 et 100 caractéres
    } if (type === "address") {
        const addressRegexp = /^[a-z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ\s-]{5,100}$/i;
        const valid = addressRegexp.test(value);
        return valid;
    }
}

export default Regex