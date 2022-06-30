import Link from 'next/link'
import { useState } from 'react'

export default function SearchBar() {
    const [data, setData] = useState({ dir: "" })

    return (
        <form className="flex w-[720px] h-[44px] bg-gray-50 rounded-3xl shadow-[0_20px_25px_-5px_rgba(0,0,0,.4)]">
            <div className="mt-[10px] mx-4 w-[656px] ">
                <input
                    type="text"
                    placeholder="Search"
                    value={data.dir}
                    className="w-full bg-gray-50"
                    onChange={(event) =>
                        setData({
                            dir: event.target.value
                        })
                    }
                />
            </div>
            <div className="w-[48px] mr-2 h-full flex justify-center content-center">
                <Link href={{
                    pathname: "../SearchResults",
                    query: data
                }}>
                    <button className="mt-1"><i class="material-icons">search</i></button>
                </Link>
            </div>
        </form>
    )
}