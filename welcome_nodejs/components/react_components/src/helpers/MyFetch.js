import MyLog from "./MyLog";
import MyError from "./MyError";
export const MyFetch = async (url, options = {}) => {

     url = 'https://localhost:44363/api/' + url;

    try {
        const response = await fetch(url, {
            headers: {
                //'Content-Type': 'application/json',
                'Accept-Language': 'uk-UA, ru-RU;q=0.9',
                // Здесь можно добавить авторизацию
                // 'Authorization': `Bearer ${yourToken}`,
            },
            ...options,
        });

        if (!response.ok ) {
            throw new Error(`Error: ${response.status}`);
        }

        MyLog(response.statusText)

        // Обрабатываем статус 204 (No Content)
        if (response.status === 204) {
            return null; // ничего не возвращаем
        }

        return await response.json();
    } catch (error) {
        MyError(error)
        throw error;
    }
};