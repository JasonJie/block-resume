import axios from "axios";
import { DemoType } from "../type";
const demoApi = {
    getDemo: async (): Promise<string> => axios.get("http://localhost:3000/"),
    createDemo: async (data: DemoType): Promise<DemoType> =>
        axios.post("http://localhost:3000/demo", data),
};

export default demoApi;
