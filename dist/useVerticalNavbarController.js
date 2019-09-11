import { useContext } from 'react';
import VerticalNavbarContext from './VerticalNavbarContext';

var useVerticalNavbarController = function useVerticalNavbarController() {
  var controller = useContext(VerticalNavbarContext);
  return controller;
};

export default useVerticalNavbarController;