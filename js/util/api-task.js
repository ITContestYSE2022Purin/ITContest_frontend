export class APITask {
    static async Get(url) {
        const response = await fetch(url);

        if (!response.ok) {
            console.log(`${response.status} ${response.statusText}`);
            return;
        }

        const json = await response.json();
        return new APIResponse(json);
    }
}

class APIResponse {
    body;

    constructor(json) {
        this.body = json["message"];
    }
}
