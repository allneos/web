import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center text-lg gap-1">
      <h2 className="font-brand text-xl">
        we help spread the gospel <br /> through modern tech
      </h2>
      <p>
        allneos is a Christian org who creates tech and content to help non
        believers see Jesus <br />
        and help believers to strengthen their relationship with Jesus
      </p>
    </div>
  )
}
