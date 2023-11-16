"use client"
import CountButton from "./CountButton"
import SearchBar from "./SearchBar";
export default function Page() {
    return <div>
      <CountButton incrementAmount={1}/>
      <CountButton incrementAmount={2} />
      <hr />
      <a href="https://github.com/sagejames1/next-man">My Github Repo</a>
      <hr />
      <SearchBar />
    </div>
  }