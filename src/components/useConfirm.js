import React, {} from 'react'

const useConfirm = (message = "", callback) => {
    if (typeof callback !== "function") return;

    const confirmAction = () => {
        if (confirm(message)) {
            callback();
        }
    //     if(confirm(message)) {
    //         callback;
    //     }
    }
    return confirmAction;
}

const useConfirmComponent = () => {

    const deleteWorld = () => {
        console.log('Deleting the world');
    }

    const confirmDelete = useConfirm('are you sure?', deleteWorld);

    return (
        <div>
            <button>Delete the world</button>
        </div>
    )
}

export default useConfirmComponent;
