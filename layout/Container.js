import Head from "next/head"

export default function Container({ children }) {
    return (
        <div>
            <Head>
                <title>Weather Forecast</title>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
            </Head>
            {children}
        </div>
    )
}