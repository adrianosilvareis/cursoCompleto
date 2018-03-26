export default function timestampInterceptor(){
  return {
    request: config => {
      let url = config.url
      const timestamp = new Date().getTime()
      config.url = `${url}?timestamp=${timestamp}`
      return config
    }
  }
}