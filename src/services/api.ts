const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const api = async <T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) => {
  const data = await fetch(`${BASE_URL}/${input}`, init)
  const result = await data.json()

  return result as T
}
