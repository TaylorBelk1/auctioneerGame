import React from 'react';
import { LoadingWrap } from '../../styles/style';
import loading from '../../assetts/load.png';

const LoadingSpinner = () => {
    return <LoadingWrap src={loading} alt='loading' className='loading' />
}

export default LoadingSpinner