const getSpaceship = async () => {
    try {
        const parseJSON = resp => (resp.json ? resp.json() : resp);
        const checkStatus = resp => {
            if (resp.status >= 200 && resp.status < 300) {
                return resp;
            }
            return parseJSON(resp).then(resp => {
                throw resp;
            });
        }

        const method = 'GET';
        const headers = {
            'Content-Type': 'application/json',
        };

        const spaceship = await fetch(`https://swapi.dev/api/starships/10/`, {
            method,
            headers
        })
            .then(checkStatus)
            .then(parseJSON);

        if (spaceship) {
            spaceship.image = 'http://localhost:3000/millennium-falcon.jpg';
        }

        return { spaceship };
    } catch (error) {
        return { error };
    }
};

export default getSpaceship;
