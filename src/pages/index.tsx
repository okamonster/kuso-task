import { NextPage } from 'next'

import { DefaultLayout } from '~/Layouts/DefaultLayout'
import { TopContainer } from '~/components/Container/TopContainer'
import { Header } from '~/components/Header'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Header>Simple Task</Header>
      <TopContainer />
    </DefaultLayout>
  )
}

export default Home
