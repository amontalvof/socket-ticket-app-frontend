const getLastTickets = async () => {
    const resp = await fetch('http://localhost:8080/lastTickets');
    const data = await resp.json();
    return data.lastTickets;
};

export default getLastTickets;
