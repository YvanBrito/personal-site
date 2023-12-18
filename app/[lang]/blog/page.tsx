import { Posts } from '@/components'

export default async function Page({ params }: { params: { lang: string } }) {
  return <Posts lang={params.lang} />
}
