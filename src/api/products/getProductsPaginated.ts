import { server } from '@/globals/baseUrl'

export const getProductsPaginated = async (
  page: string,
  limit: string = '6',
  condition?: Object
) => {
  try {
    const res = await fetch(
      `${server.local}/api/products/paginated?page=${page}&limit=${limit}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(condition)
      }
    )
    if (!res.ok) throw res

    const data = await res.json()
    console.log({ data })
    return data
  } catch (e) {
    console.log(e)
  }
}
