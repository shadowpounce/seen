import { useLayoutEffect, useRef } from 'react'

export const Terms = () => {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (root.current) {
      root.current.innerHTML = `<div
    name="termly-embed"
    data-id="54368b9e-0062-4a68-ac01-4fdb8fa2b7e8"
  ></div>`
      ;(function (d, s, id) {
        var js,
          tjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement<any>(s)
        js.id = id
        js.src = 'https://app.termly.io/embed-policy.min.js'
        tjs.parentNode?.insertBefore(js, tjs)
      })(document, 'script', 'termly-jssdk')
    }
  }, [])

  return <div ref={root} className="container"></div>
}
