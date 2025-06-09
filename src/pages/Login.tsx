import { useState } from "react"
import tailwind from "../styles/tailwind"
import { useNavigate } from "react-router-dom"
import Functions from "../utils/Functions"

export default function Login() {

  const { H1, inputStyle, P1, errorStyle } = tailwind()

  const [credentials, setCredentials] = useState({
    password: "",
    emailAddress: ""
  })

  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const { handleCheckLogin } = Functions({ credentials })

  return (
    <div className="flex items-center justify-center w-[100vw] flex-col min-h-[100vh]">
      <img src="/logo.svg" alt="" />
      <div className="p-[32px] bg-[#161D2F] flex items-center flex-col mt-[64px] rounded-[20px]">
        <h1 className={`${H1} text-left w-[100%]`}>Login</h1>
        <div className={`flex flex-col ${error && !credentials.emailAddress ? "m-[16px_0_32px_0]!" : "m-[32px_0_32px_0]"}`}>
          {!credentials.emailAddress && error ? <span className={`${errorStyle}`}>Can’t be empty</span> : null}
          <input type="text" className={`${inputStyle} ${!credentials.emailAddress && error ? "border-[#FC4747]" : undefined}`} onChange={(e) => {
            setCredentials({ ...credentials, emailAddress: e.target.value })
          }} placeholder="Email address" />
          {!credentials.password && error ? <span className={`${errorStyle} top-[32px]!`}>Can’t be empty</span> : null}
          <input type="password" className={`${inputStyle} mt-[24px] ${!credentials.password && error ? "border-[#FC4747] mt-[16px]!" : undefined}`} placeholder="Password" onChange={(e) => {
            setCredentials({ ...credentials, password: e.target.value })
          }} />
        </div>
        <button className={`w-[100%] hover:bg-[#FFFFFF] hover:text-[#161D2F] bg-[#FC4747] ${P1} rounded-[6px] font-[400] p-[16px]`}
          onClick={() => {
            !credentials.password && !credentials.emailAddress ? setError(true) : setError(false)
            !error ? handleCheckLogin() : undefined
          }
          }
        >Login to your account</button>
        <h4 className={`${P1} mt-[24px] flex gap-[10px]`}>Don’t have an account?<a className="text-[#FC4747] hover:underline cursor-pointer" onClick={() => navigate("/signUp")}>Sign Up</a></h4>
      </div>
    </div >
  )
}
