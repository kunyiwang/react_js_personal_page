const addUser = async (item) => {
    const response = await fetch('http://localhost:3001/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

const getUsers = async () => {
    const response = await fetch('http://localhost:3001/items', {
        method: 'GET'
    });
    return response.json();
};

const itemService = {
    addUser,
    getUsers
};

export default itemService;