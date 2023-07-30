"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("6ec55831-9928-40a0-8240-7f274e9f558a")
    }, [])

    return null;
}

export default CrispChat