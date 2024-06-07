import { Header } from '../components/Header'
import { Brand } from '../components/Brand'
import { Characteristics } from '../components/Characteristics'
import { Articles } from '../components/Articles'
import { Footer } from '../components/Footer'

export function HomePage () {
  return (
    <>
      <Header />
      <Brand />
      <Characteristics />
      <Articles />
      <Footer />
    </>
  )
}
