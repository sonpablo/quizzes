export default function getQuiz({ category, difficult }) {

    let url = `https://opentdb.com/api.php?amount=${10}&category=${category}&difficult=${difficult}`

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                let error = new Error("Something went wrong. Code: ", response.status)
                error.response = response
                error.status = response.status

                throw error
            }
            return response.json()
        })
        .then((response => {
            return response.results
        }))
        .catch((error) => {
            throw error
        })

}