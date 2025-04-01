import { communityLinks, platformLinks, resourcesLinks } from "../constants/index.jsx"

const Footer = () => {
  return (
    <footer className="mt-40 border-t py-10 border-neutral-700">
      <div className="container mx-auto px-4 text-left">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-40 max-w-4xl">
            <div>
              <h3 className="text-md font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">{resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-black hover:text-gray-500 duration-300" href={link.href}>{link.text}</a>
                </li>
              ))}</ul>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-3">Platform</h3>
              <ul className="space-y-2">{platformLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-black hover:text-gray-500 duration-300" href={link.href}>{link.text}</a>
                </li>
              ))}</ul>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-3">Community</h3>
              <ul className="space-y-2">{communityLinks.map((link, index) => (
                <li key={index}>
                  <a className="text-black hover:text-gray-500 duration-300" href={link.href}>{link.text}</a>
                </li>
              ))}</ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer