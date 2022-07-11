// * DEPENDS
import axios from 'axios'

export const getGalleryImg = (id) => {
    console.log("fetching galley:", id)
    
    axios.get(`https://imagedelivery.net/${process.env.REACT_APP_ACCOUNT_SID}/${id}/public`, {
            responseType: 'blob'
        })
        .then((res) => {
            const url = URL.createObjectURL(res.data);
            console.log(url)
            return url
        })
        .catch((err) => {
            console.log(err);
        })
};

// scratch thoughts:
// have a data set with the different categories as arrays 
// then, each array will have a set of img ID's from the database in there 
// from there, we have a map function that creates each img tag with the src set to 
// w/e the item from that array is; from there we will have to look and see how 
