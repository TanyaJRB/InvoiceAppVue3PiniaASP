import { BusinessDto, UserDto } from "@/api";

export default {
    fetchAllUsers(): Promise<Response>{
        return fetch("/api/Users")
        .then((r) => r.json())
        .then((json) => {
          return json;
        });
    },
    fetchUser(id: number): Promise<UserDto>{
        return fetch(`/api/users/${id}`)
        .then((r) => r.json())
        .then((json) => {
          return json as UserDto;
        });
    },
    addNewUser(user: UserDto): Promise<number> {
        return fetch("/api/Users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                return data.userId;
            })
            .catch((error) => {
                console.log(error, error.message);
            });
    },
    updateUser(user: UserDto){
        return fetch(`/api/users/${user.UserId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                return data.status;
            })
            .catch((error) => {
                console.log(error, error.message);
            });
    },
    addBusinesses(businesses: BusinessDto[]): Promise<boolean|void> {
        return fetch("/api/Businesses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(businesses),
        })
            .then((response) => { return response.ok})
            .catch((error) => {
                console.log(error, error.message);
            });
    },
}