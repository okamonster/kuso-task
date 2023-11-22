import { DefaultLayout } from '~/Layouts/DefaultLayout'
import { TopContainer } from '~/components/Container/TopContainer'
import { Header } from '~/components/Header'

export default function Home() {
  return (
    <DefaultLayout>
      <Header>Simple Task</Header>
      <TopContainer />
    </DefaultLayout>
  )
}
