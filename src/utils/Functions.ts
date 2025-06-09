import { useNavigate } from "react-router-dom"

export default function Functions(args: TFunctionsArgs = {}) {

    const { credentials } = args

    const navigate = useNavigate()

    const handleCheckLogin = () => {

        const data = localStorage.getItem("1")
        const users = data ? JSON.parse(data) : []

        const match = users.find((user: { emailAddress: "string", password: "string" }) =>
            user.emailAddress === credentials?.emailAddress &&
            user.password === credentials?.password
        )


        if (match) {
            navigate("/")
        }
    }


    const handleRegister = () => {

        const data = localStorage.getItem("1")

        if (!data) {
            localStorage.setItem("1", "[]")
        }

        if (data) {
            const parsedData = JSON.parse(data)
            console.log(parsedData)
            parsedData.push({
                password: credentials?.password,
                emailAddress: credentials?.emailAddress
            })

            const stringedData = JSON.stringify(parsedData)
            localStorage.setItem("1", stringedData)
        }
    }

    return { handleCheckLogin, handleRegister }
}
