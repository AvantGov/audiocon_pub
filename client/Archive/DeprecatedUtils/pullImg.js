// * DEPENDS 
import axios from 'axios';

export const pullImg = (url) => {
    axios.get(url)
        .then((res) => {
            console.log("url response:", res)
        })
        .catch((err) => {
            console.log(err)
        })
}

