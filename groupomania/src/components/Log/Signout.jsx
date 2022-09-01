
const Signout = () => {
    sessionStorage.clear();
    window.location.href = `http://localhost:3000/`;
}

export default Signout;