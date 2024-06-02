import axios from "axios";
const resumeApi = {
    getResumes: async (userId: number): Promise<string> =>
        axios.get(`http://localhost:3000/resume/getResumes?userId=${userId}`),
};

export default resumeApi;
