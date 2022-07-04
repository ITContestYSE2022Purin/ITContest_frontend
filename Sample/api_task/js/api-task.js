export class APITask {
    /**
     *
     * @param {string} url
     * @return {string} body
     */
    static async get(url) {
        const response = await fetch(url);

        if (!response.ok) {
            console.log(`${response.status} ${response.statusText}`);
            return;
        }

        const json_promise = await response.json();
        return JSON.stringify(json_promise);
    }
}
