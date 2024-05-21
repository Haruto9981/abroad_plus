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
            sx={{
              color: '#f15922',
              borderBottom: '4px solid #f15922',
              mx: 4,
              textTransform: 'none',
            }}
          />
        ) : (
          <Tab
            label={label}
            value={value}
            sx={{ textTransform: 'none', mx: 4 }}
          />
        )}
      </NextLink>
    </>
  )
}

export default LinkTab
