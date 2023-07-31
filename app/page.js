"use client";
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Contributors from "./components/contributors/Contributors"

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Contributors/>
    </main>
  )
}
