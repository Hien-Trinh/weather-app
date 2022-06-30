import Container from "../layout/Container"
import SearchBar from "../components/SearchBar"

export default function Home() {
    return (
        <div className="mt-56 mx-auto max-w-fit">
            <Container>
                <p className="font-serif text-8xl w-max mx-auto mt-6 mb-8 drop-shadow-[0_10px_5px_rgba(0,0,0,.3)]">Weather Forecast</p>
                <SearchBar />
            </Container>
        </div>
    )
}