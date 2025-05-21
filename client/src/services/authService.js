export async function login(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetail),
    };
    const response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/users/login`,
        requestOptions
    );
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("id", JSON.stringify(data._id));
        sessionStorage.setItem("email", JSON.stringify(data.email));
    }

    return data;
}

export async function register(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetail),
    };

    const response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/users/register`,
        requestOptions
    );
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("id", JSON.stringify(data._id));
        sessionStorage.setItem("email", JSON.stringify(data.email));
    }

    return data;
}

export function logout() {
    sessionStorage.clear();
}
