import { APITask } from "../../api_task/js/api-task.js";

const APPLICATION_ID = "1082011979317631304";
const ACCESS_URL = "https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?";

/**
 * 書籍情報をAPIで取得
 * @param {string | number} isbn ISBNコード13桁 ハイフン削除とかはこの関数でやるから前処理の必要なし
 * @return {string} JSON形式の書籍情報
 * @see https://webservice.rakuten.co.jp/documentation/books-book-search
 */
async function get_book_info_async(isbn) {
    const isbn_formatted = isbn.toString().replace("-", "").replace(/\s+/g, "");

    if (isbn_formatted.length != 13) {
        throw "ISBNコードが13桁ではありません";
    }

    const params = {
        format: "json",
        applicationId: APPLICATION_ID,
        isbn: isbn_formatted,
    };

    let requestURL = ACCESS_URL;
    for (const [key, value] of Object.entries(params)) {
        requestURL += `&${key}=${value}`;
    }

    const response = await APITask.get(requestURL);
    const book_info = response["Items"][0];
    return book_info;
}

// TODO テストコード
// いいコード悪いコードのISBN
const book_info = await get_book_info_async("978-4297127831");
console.log(book_info);
