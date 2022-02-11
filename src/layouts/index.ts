import { useEffect } from 'react'
import { IRouteComponentProps } from 'umi'

import { destoryGlobalSpinner } from '../helpers/view'

export default function Layout({ children }: IRouteComponentProps) {
  useEffect(() => {
    destoryGlobalSpinner()
  }, [])

  return children
}
