import axios, { type AxiosResponse } from "axios";

interface Todo{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const fetchTodo = async() => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/3");
        console.log(response.data.title);
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message);
        }else if(axios.isAxiosError(error)){
            console.log(error.message);
        }
    }
}
fetchTodo();
