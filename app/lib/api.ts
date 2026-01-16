export async function fetchAPI<T>( 
    endpoint: string,
    options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://be-sporton.agunacourse.com/api";
  
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  const res = await fetch(`${baseUrl}${cleanEndpoint}`, {
    ...options,
    cache: options?.cache || "no-store", 
  });

  if(!res.ok){
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
        const errorData = await res.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (e) {
      console.log(e)
    }

    throw new Error(errorMessage);
  }

  return res.json();
}

export function getImageUrl(path: string) {
    if (!path) return ""; 
    if (path.startsWith("http")) return path;
    const rootUrl = process.env.NEXT_PUBLIC_API_ROOT || "https://be-sporton.agunacourse.com";
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const cleanRoot = rootUrl.endsWith('/') ? rootUrl.slice(0, -1) : rootUrl;

    return `${cleanRoot}/${cleanPath}`;
}
