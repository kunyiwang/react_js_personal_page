const addItem = async (item) => {
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

const getItems = async () => {
    const response = await fetch('http://localhost:3001/items', {
        method: 'GET'
    });
    return response.json();
};

const itemService = {
    addUser: addItem,
    getUsers: getItems
};

export default itemService;