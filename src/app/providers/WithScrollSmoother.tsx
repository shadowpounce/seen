import { FC, ReactNode, useLayoutEffect } from 'react'
import gsap from 'gsap'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText)

interface IProps {
  children: ReactNode
}

export const WithScrollSmoother: FC<IProps> = ({ children }) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </>
  )
}
