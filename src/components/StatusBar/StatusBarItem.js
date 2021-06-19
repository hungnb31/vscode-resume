const FooterItem = ({ children }) => {
  return (
    <li className="flex flex-wrap items-center flex-row hover:bg-accents-blue05 h-full cursor-pointer px-2">
      {children}
    </li>
  )
}

export default FooterItem;