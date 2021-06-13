const FooterItem = ({ children }) => {
  return (
    <div className="flex flex-wrap items-center flex-row hover:bg-accents-blue05 h-full cursor-pointer px-2 py-1">
      {children}
    </div>
  )
}

export default FooterItem;