import {useEffect} from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Drink for Party - ${title}`
    },[title]);
}

export default useTitle;