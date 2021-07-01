const getStoredUser = (params) => {
    return {
        agent: localStorage.getItem('agent'),
        desk: localStorage.getItem('desk'),
    };
};

export default getStoredUser;
