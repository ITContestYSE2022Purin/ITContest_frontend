import { APITask } from "./util/api-task.js";

async function main() {
    const url = "https://puz3k1esv8.execute-api.ap-northeast-1.amazonaws.com/default/API1";
    const response = await APITask.Get(url);
    console.log(response.body);
}

main();
