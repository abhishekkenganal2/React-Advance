import React, { useEffect, useState } from 'react'

const useOnlineStatuus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(() => {
        window.addEventListener("online", () =>{
            setOnlineStatus(true)
        })

        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })
    })

  return onlineStatus
}

export default useOnlineStatuus