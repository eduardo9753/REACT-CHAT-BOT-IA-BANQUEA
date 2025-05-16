import fetch from "node-fetch";

export async function handler() {
    try {
        const response = await fetch("http://134.209.74.55/titulos/serums");
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.toString() }),
        };
    }
}
