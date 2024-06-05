import { VeloDataContext } from '@/contexts/VeloDataContext';
import { useContext } from 'react';

const useVeloData = () => {
	return useContext(VeloDataContext);
};

export default useVeloData;
