import { ScrollFirstPageContext } from '@/contexts/ScrollFirstPageContext';
import { useContext } from 'react';

const useScrollFirstPage = () => {
	return useContext(ScrollFirstPageContext);
};

export default useScrollFirstPage;
