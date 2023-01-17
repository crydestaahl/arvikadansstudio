import React, { useState, useEffect } from "react"

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(false)
  const [firstVisit, setFirstVisit] = useState(false)
  const [animationClass, setAnimationClass] = useState("")

  const handleAccept = () => {
    setAccepted(true)
    setAnimationClass("fade-out")
    setTimeout(() => {setAnimationClass("")}, 500);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAccepted = localStorage.getItem('acceptedCookies')
      if (storedAccepted) {
        setAccepted(JSON.parse(storedAccepted))
      }
    }
    const storedFirstVisit = localStorage.getItem('firstVisit')
    if (!storedFirstVisit) {
      setFirstVisit(true)
      localStorage.setItem('firstVisit', JSON.stringify(true))
    }
  }, [])

  useEffect(() => {
    if (accepted) {
      localStorage.setItem('acceptedCookies', JSON.stringify(accepted))
    }
  }, [accepted])

  return (
    <div className={`cookie-banner fade-in ${animationClass} ${firstVisit ? '' : 'hide'}`}>
      {!accepted && (
        <div>
          <p>This website uses cookies. By clicking the button below, you accept our use of cookies.</p>
          <button onClick={handleAccept}>I accept</button>
        </div>
      )}
    </div>
  )
}

export default CookieBanner
