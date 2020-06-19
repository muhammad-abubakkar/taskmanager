import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

export default function ProjectPage() {
  let router = useRouter()
  let isFallback = router.isFallback;
  if (isFallback) {
    return (<div>Loading...</div>)
  }
  return (
    <div>
      <Head>
        <title>Task Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto">
        <h1 className="text-2xl font-bold text-center py-3">
          Task Manager
        </h1>
        <Link href="/">
            <a>
              Go Back
            </a>
          </Link>
        <div>
          <input type="text" className="py-1 px-2 border w-full outline-none rounded-none" placeholder="Search Project..."/>
        </div>
        {/* <div>
          <AddProject/>
        </div>
        <ProjectList/> */}
      </div>
    </div>
  )
}

export async function getStaticPaths(context) {
  return {
    paths: [
      {
        params: {id: '1'}
      }
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
  console.log(context)
  return {
    props: {}
  }
}