import React from 'react';
import Loadable from 'react-loadable';

const loadingComponent=()=>{
    return(
        <div>loading</div>
    )
}
export default Loadable({
    loader:import('./index.js'),
    loading:loadingComponent
})