import PreLoader from "@/Components/PreLoader"
import { createClient } from "next-sanity"

export const client = createClient({
  projectId: 'u45ofomx',
  dataset: 'production',
  useCdn: true,
  apiVersion: "2024-02-11",
})


const fetchProjects = async () => {
  try {
    return await client.fetch(`*[_type == "project"]`)
  } catch (e) {
    console.log("Error fetching projects:", e)
    return null
  }
}

export default async function Home() {
  const data = await fetchProjects()
  return <PreLoader data={data} />
}
export const revalidate = 400
