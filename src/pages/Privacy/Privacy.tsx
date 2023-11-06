import { useLayoutEffect, useRef } from 'react'

export const Privacy = () => {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (root.current) {
      root.current.innerHTML = `<div name="termly-embed" data-id="accec6d8-cc90-402d-ae15-0f8267bd3487"></div>`
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
