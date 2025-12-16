import axios, {} from "axios";
const fetchTodo = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/3");
        console.log(response.data.title);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        else if (axios.isAxiosError(error)) {
            console.log(error.message);
        }
    }
};
fetchTodo();
//# sourceMappingURL=axios_typeDefs.js.map