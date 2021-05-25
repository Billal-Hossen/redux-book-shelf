
export const addReadingList=(payload)=>{
    return {
        type:'ADD_TO_READING_LIST',
    payload
    }
}

export const removeFromReadingList=(payload)=>{
    return {
        type: 'REMOVE_FROM_READING_LIST',
        payload
    }
}

export const finishedList=(payload)=>{
    return {
        type: "REMOVE_FROM_READING_LIST_&_ADD_TO_FINISH_LIST",
        payload
    }
}
