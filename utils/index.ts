import axios from 'axios'

const apiKey = `SDE6YqS3I3GqmbUkAWlk9r9GzGHXo4KA`
const baseUrl = `https://api.nytimes.com/svc/mostpopular/v2`

const getEmailed = async (period: string) => {
    try {
        const res = await axios.get(`${baseUrl}/emailed/${period}.json`, {
            params: {
                "api-key": apiKey
            }
        })
        if (res.data.status === 'OK') {
            return res.data
        }
    } catch (error) {
        console.log(error)
    }
}

const getShared = async (period: string) => {
    try {
        const res = await axios.get(`${baseUrl}/shared/${period}.json`, {
            params: {
                "api-key": apiKey
            }
        })
        if (res.data.status === 'OK') {
            return res.data
        }
    } catch (error) {
        console.log(error)
    }
}

const getViewed = async (period: string) => {
    try {
        const res = await axios.get(`${baseUrl}/viewed/${period}.json`, {
            params: {
                "api-key": apiKey
            }
        })
        if (res.data.status === 'OK') {
            return res.data
        }
    } catch (error) {
        console.log(error)
    }
}



export default {
    getEmailed,
    getShared,
    getViewed
}