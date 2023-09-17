import { useQuery } from "@tanstack/react-query";

const userUsers = () => {

    const { isLoading, isError, refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const response = await fetch("http://localhost:5000/users", {
                method: "GET",
                headers: {
                    authorization: `bearer ${localStorage.getItem("fable-access-token")}`
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            return response.json();
        }
    })

    return [users, isLoading, refetch]

}


export default userUsers;