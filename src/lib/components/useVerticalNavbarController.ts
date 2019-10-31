import { useContext } from 'react'
import VerticalNavbarContext from './VerticalNavbarContext'

const useVerticalNavbarController = () => {
	const controller = useContext(VerticalNavbarContext)
	return controller
}

export default useVerticalNavbarController
