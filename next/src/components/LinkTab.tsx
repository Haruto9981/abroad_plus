import Tab from '@mui/material/Tab'
import NextLink from 'next/link'
import React from 'react'

type Props = {
  label: string
  href: string
  value?: string
  selected?: boolean
}

const LinkTab: React.FC<Props> = ({ label, href, value, selected }) => {
  return (
    <>
      <NextLink href={href} legacyBehavior>
        {selected ? (
          <Tab
            label={label}
            value={value}
            className="Mui-selected"
            sx={{ color: '#f15922', borderBottom: '4px solid #f15922' }}
          />
        ) : (
          <Tab label={label} value={value} />
        )}
      </NextLink>
    </>
  )
}

export default LinkTab
