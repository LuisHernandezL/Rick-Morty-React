
const GetColor = (status) => {
    if(status === "Alive") return "green";

    if(status === "Dead") return "red";

    if(status === "unknown") return "gray";

};

export default GetColor;