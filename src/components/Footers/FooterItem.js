const FooterItem = ({ children }) => {
  return (
    <div className="flex flex-wrap items-center flex-row hover:bg-accents-blue05 h-full pl-1 cursor-pointer">
      {children}
    </div>
  )
}

export default FooterItem;