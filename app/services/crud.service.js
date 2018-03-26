export default function($http){

  let _host, _port, _table

  const get = id => ($http.get(`${_host}:${_port}/${_table}/${id}`))
  const list = (page=1, limit=10) => ($http.get(`${_host}:${_port}/${_table}?_page=${page}&limit=${limit}`))
  const insert = data => ($http.post(`${_host}:${_port}/${_table}/`, data))
  const update = (id, data) => ($http.post(`${_host}:${_port}/${_table}/${id}`, data))
  const remove = id => ($http.delete(`${_host}:${_port}/${_table}/${id}`))
  
  const setModel = (table, host='http://localhost', port=3000) => {
    _host = host
    _port = port
    _table = table

    const model = {
      get,
      list,
      insert,
      update,
      remove,
    }

    return Object.defineProperty(model,'config',{
      get: () => ({
        host,
        port,
        table
      })
    })

  }

  return {
    setModel
  }
}